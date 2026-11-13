#!/usr/bin/env python3
"""Re-pack an APK with zipalign-style alignment and sign it with APK Signature Scheme v2.

usage: apkpack.py in.apk out.apk key.p12 password
       apkpack.py --verify out.apk
"""
import hashlib, struct, sys, zipfile, zlib

from cryptography import x509
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.serialization import pkcs12

STORE_EXT = ('.png', '.jpg', '.webp', '.woff', '.woff2', '.mp3', '.ogg')
STORE_NAMES = ('resources.arsc',)
ALIGN = 4
CHUNK = 1 << 20
V2_ID = 0x7109871A
ALG_RSA_PKCS1_SHA256 = 0x0103
MAGIC = b'APK Sig Block 42'


# ---------------------------------------------------------------- zip writing
def dos_time():
    # fixed timestamp (2026-11-13 00:00) so builds are reproducible
    return (0 << 11) | (0 << 5) | 0, ((2026 - 1980) << 9) | (11 << 5) | 13


def build_zip(entries):
    """entries: list of (name, data, store). Returns zip bytes; stored data is 4-byte aligned."""
    t, d = dos_time()
    out = bytearray()
    central = bytearray()
    for name, data, store in entries:
        nb = name.encode('utf-8')
        crc = zlib.crc32(data) & 0xFFFFFFFF
        if store:
            comp, method = data, 0
        else:
            co = zlib.compressobj(9, zlib.DEFLATED, -15)
            comp = co.compress(data) + co.flush()
            method = 8
            if len(comp) >= len(data):
                comp, method = data, 0
        offset = len(out)
        extra = b''
        if method == 0:
            data_start = offset + 30 + len(nb)
            pad = (-data_start) % ALIGN
            extra = b'\x00' * pad
        flags = 0x0800  # UTF-8 names
        out += struct.pack('<IHHHHHIIIHH', 0x04034B50, 20 if method == 8 else 10, flags, method, t, d,
                           crc, len(comp), len(data), len(nb), len(extra))
        out += nb + extra + comp
        central += struct.pack('<IHHHHHHIIIHHHHHII', 0x02014B50, 20, 20 if method == 8 else 10, flags, method,
                               t, d, crc, len(comp), len(data), len(nb), 0, 0, 0, 0, 0, offset)
        central += nb
    cd_off = len(out)
    out += central
    out += struct.pack('<IHHHHIIH', 0x06054B50, 0, 0, len(entries), len(entries), len(central), cd_off, 0)
    return bytes(out)


def repack(src):
    zin = zipfile.ZipFile(src)
    names = [i.filename for i in zin.infolist() if not i.filename.startswith('META-INF/')]
    order = {'AndroidManifest.xml': 0, 'resources.arsc': 1}
    names.sort(key=lambda n: (order.get(n, 2 if n.endswith('.dex') else 3), n))
    entries = []
    for n in names:
        data = zin.read(n)
        store = n in STORE_NAMES or n.lower().endswith(STORE_EXT)
        entries.append((n, data, store))
    return build_zip(entries)


# ---------------------------------------------------------------- v2 signing
def u32(n): return struct.pack('<I', n)
def u64(n): return struct.pack('<Q', n)
def lp(b): return u32(len(b)) + b


def find_eocd(apk):
    i = apk.rfind(b'PK\x05\x06')
    if i < 0:
        raise ValueError('no EOCD')
    cd_size, cd_off = struct.unpack_from('<II', apk, i + 12)
    return i, cd_off, cd_size


def chunked_digest(sections):
    digests = []
    for s in sections:
        for o in range(0, len(s), CHUNK):
            c = s[o:o + CHUNK]
            digests.append(hashlib.sha256(b'\xa5' + u32(len(c)) + c).digest())
    return hashlib.sha256(b'\x5a' + u32(len(digests)) + b''.join(digests)).digest()


def sign_v2(apk, key, cert_der):
    eocd_i, cd_off, cd_size = find_eocd(apk)
    assert cd_off + cd_size == eocd_i, 'zip has data between central directory and EOCD'
    entries, cd, eocd = apk[:cd_off], apk[cd_off:eocd_i], apk[eocd_i:]
    # digest is computed as if the signing block were absent; EOCD CD-offset stays = len(entries)
    digest = chunked_digest([entries, cd, eocd])
    signed_data = (lp(lp(u32(ALG_RSA_PKCS1_SHA256) + lp(digest)))
                   + lp(lp(cert_der))
                   + lp(b''))
    sig = key.sign(signed_data, padding.PKCS1v15(), hashes.SHA256())
    pub = key.public_key().public_bytes(serialization.Encoding.DER,
                                        serialization.PublicFormat.SubjectPublicKeyInfo)
    signer = lp(signed_data) + lp(lp(u32(ALG_RSA_PKCS1_SHA256) + lp(sig))) + lp(pub)
    v2_value = lp(lp(signer))
    pair = u64(4 + len(v2_value)) + u32(V2_ID) + v2_value
    block_size = len(pair) + 8 + 16  # pairs + trailing size + magic
    block = u64(block_size) + pair + u64(block_size) + MAGIC
    new_cd_off = cd_off + len(block)
    eocd2 = eocd[:16] + u32(new_cd_off) + eocd[20:]
    return entries + block + cd + eocd2


# ---------------------------------------------------------------- verification
def verify(apk):
    eocd_i, cd_off, cd_size = find_eocd(apk)
    assert cd_off + cd_size == eocd_i
    assert apk[cd_off - 16:cd_off] == MAGIC, 'no APK signing block'
    size2 = struct.unpack_from('<Q', apk, cd_off - 24)[0]
    start = cd_off - size2 - 8
    size1 = struct.unpack_from('<Q', apk, start)[0]
    assert size1 == size2, 'block size mismatch'
    p, end = start + 8, cd_off - 24
    pairs = {}
    while p < end:
        ln = struct.unpack_from('<Q', apk, p)[0]
        pid = struct.unpack_from('<I', apk, p + 8)[0]
        pairs[pid] = apk[p + 12:p + 8 + ln]
        p += 8 + ln
    assert p == end, 'pairs overrun'
    v2 = pairs[V2_ID]

    def rd(b, o):
        n = struct.unpack_from('<I', b, o)[0]
        return b[o + 4:o + 4 + n], o + 4 + n

    signers, _ = rd(v2, 0)
    signer, _ = rd(signers, 0)
    sd, o = rd(signer, 0)
    sigs, o = rd(signer, o)
    pub, o = rd(signer, o)
    digs, q = rd(sd, 0)
    certs, q = rd(sd, q)
    d0, _ = rd(digs, 0)
    alg = struct.unpack_from('<I', d0, 0)[0]
    dig, _ = rd(d0, 4)
    c0, _ = rd(certs, 0)
    cert = x509.load_der_x509_certificate(c0)
    s0, _ = rd(sigs, 0)
    salg = struct.unpack_from('<I', s0, 0)[0]
    sig, _ = rd(s0, 4)
    assert alg == salg == ALG_RSA_PKCS1_SHA256
    pk = serialization.load_der_public_key(pub)
    assert pk.public_bytes(serialization.Encoding.DER, serialization.PublicFormat.SubjectPublicKeyInfo) == \
        cert.public_key().public_bytes(serialization.Encoding.DER, serialization.PublicFormat.SubjectPublicKeyInfo)
    pk.verify(sig, sd, padding.PKCS1v15(), hashes.SHA256())
    eocd = bytearray(apk[eocd_i:])
    struct.pack_into('<I', eocd, 16, start)
    want = chunked_digest([apk[:start], apk[cd_off:eocd_i], bytes(eocd)])
    assert want == dig, 'content digest mismatch'
    # alignment of stored entries + arsc stored
    zf = zipfile.ZipFile(__import__('io').BytesIO(apk))
    for i in zf.infolist():
        nlen, xlen = struct.unpack_from('<HH', apk, i.header_offset + 26)
        ds = i.header_offset + 30 + nlen + xlen
        if i.compress_type == 0:
            assert ds % ALIGN == 0, 'unaligned ' + i.filename
        if i.filename == 'resources.arsc':
            assert i.compress_type == 0
    assert zf.testzip() is None
    print('v2 signature OK; signer:', cert.subject.rfc4514_string(),
          '; SHA-256 cert digest:', hashlib.sha256(c0).hexdigest())


if __name__ == '__main__':
    if sys.argv[1] == '--verify':
        verify(open(sys.argv[2], 'rb').read())
        sys.exit(0)
    src, dst, p12, pw = sys.argv[1:5]
    key, cert, _ = pkcs12.load_key_and_certificates(open(p12, 'rb').read(), pw.encode())
    apk = sign_v2(repack(src), key, cert.public_bytes(serialization.Encoding.DER))
    open(dst, 'wb').write(apk)
    verify(apk)
