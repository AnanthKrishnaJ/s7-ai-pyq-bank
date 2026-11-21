#!/usr/bin/env python3
"""Make the offline web bundle that goes inside the Android app, and the live-update bundle on the site.

usage: make_web.py <repo root> <out www dir>          (APK build: index.html + fonts + PDFs + update.json)
       make_web.py <repo root> --site                  (site: writes app/www/ and app/update.json in the repo)

Takes the site's index.html and pdf/ folder, swaps Google Fonts for subsets of
the OFL fonts in android/fonts, and adds the Android bridge script (android/tools/bridge.html).

update.json lists every file the app uses with its SHA-1, so an installed app can fetch
https://s7-ai-pyq-bank.vercel.app/app/update.json and download only what changed
(see android/app/java/com/ananth/pyqbank/Updater.java). Run with --site after every site change.
"""
import hashlib, html, json, os, shutil, subprocess, sys

root = sys.argv[1]
site = len(sys.argv) > 2 and sys.argv[2] == '--site'
out = os.path.join(root, 'app', 'www') if site else sys.argv[2]
here = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(here, '..', 'fonts')   # OFL fonts, subset to the characters the page uses
# (family, weight or weight range, source file)
FACES = [('Inter', '100 900', 'Inter-VF.ttf'), ('Inter Tight', '100 900', 'InterTight-VF.ttf'),
         ('Source Serif 4', '200 900', 'SourceSerif4-VF.ttf'), ('IBM Plex Mono', '400', 'IBMPlexMono-Regular.ttf'),
         ('IBM Plex Mono', '500', 'IBMPlexMono-Medium.ttf'), ('IBM Plex Mono', '600', 'IBMPlexMono-SemiBold.ttf')]

s = open(os.path.join(root, 'index.html'), encoding='utf8').read()
if site and os.path.isdir(out):
    shutil.rmtree(out)
os.makedirs(os.path.join(out, 'fonts'), exist_ok=True)

# 1. fonts: subset the bundled OFL fonts to the characters the page uses
chars = set(s) | set(html.unescape(s))
for a, b in [(0x20, 0x7f), (0xa0, 0x180), (0x2000, 0x2070), (0x2190, 0x2200), (0x2200, 0x2300), (0x370, 0x400)]:
    chars |= {chr(c) for c in range(a, b)}
txt = os.path.join(out, 'fonts', 'chars.txt')
open(txt, 'w', encoding='utf8').write(''.join(sorted(c for c in chars if ord(c) >= 0x20)))
css = ''
fonts = []
for fam, w, src in FACES:
    name = os.path.splitext(src)[0] + '.woff'
    subprocess.check_call([sys.executable, '-m', 'fontTools.subset', os.path.join(FONTS, src), f'--text-file={txt}',
                           '--layout-features=kern,liga,calt,tnum,case,ss01,ss02,zero', '--flavor=woff',
                           f'--output-file={out}/fonts/{name}'])
    fonts.append(name)
    css += (f"@font-face{{font-family:'{fam}';font-style:normal;font-weight:{w};font-display:swap;"
            f"src:url(fonts/{name}) format('woff')}}")
os.remove(txt)
a, b = s.index('<!--FONTS-->'), s.index('<!--/FONTS-->') + len('<!--/FONTS-->')
s = s[:a] + '<style>' + css + '</style>' + s[b:]
tight = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600&display=swap">'
s = s.replace(tight, '')
assert 'fonts.googleapis' not in s, 'unhandled Google Fonts link'

# 2. PDFs are served from the www root inside the app
s = s.replace("<script>window.PDF_BASE='pdf/'</script>", '')

# 3. Android bridge (PDF open/share/save, Back button history, live-update banner)
bridge = open(os.path.join(here, 'bridge.html'), encoding='utf8').read()
i = s.rindex('</body>')
s = s[:i] + bridge + s[i:]
open(os.path.join(out, 'index.html'), 'w', newline='', encoding='utf8').write(s)

# 4. PDFs (APK only; on the site the app downloads them from pdf/)
pdfs = sorted(f for f in os.listdir(os.path.join(root, 'pdf')) if f.endswith('.pdf'))
if not site:
    for f in pdfs:
        shutil.copy2(os.path.join(root, 'pdf', f), os.path.join(out, f))

# 5. update manifest: path in the app's www dir, SHA-1, size, URL path on the site
def sha1(p):
    h = hashlib.sha1()
    with open(p, 'rb') as fh:
        for chunk in iter(lambda: fh.read(1 << 20), b''):
            h.update(chunk)
    return h.hexdigest()

files = [('index.html', os.path.join(out, 'index.html'), 'app/www/index.html')]
files += [(f'fonts/{n}', os.path.join(out, 'fonts', n), f'app/www/fonts/{n}') for n in fonts]
files += [(f, os.path.join(root, 'pdf', f), f'pdf/{f}') for f in pdfs]
entries = [{'p': p, 'h': sha1(src), 's': os.path.getsize(src), 'u': u} for p, src, u in files]
version = hashlib.sha1('\n'.join(f"{e['p']}:{e['h']}" for e in entries).encode()).hexdigest()[:16]
manifest = json.dumps({'v': version, 'files': entries}, indent=1)
mpath = os.path.join(root, 'app', 'update.json') if site else os.path.join(out, 'update.json')
open(mpath, 'w', newline='\n', encoding='utf8').write(manifest + '\n')
print(f'{"site update bundle" if site else "web bundle"}: index.html + {len(fonts)} fonts + {len(pdfs)} PDFs, version {version} -> {mpath}')
