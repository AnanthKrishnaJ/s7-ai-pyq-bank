#!/usr/bin/env python3
"""Make the offline web bundle that goes inside the Android app.

usage: make_web.py <repo root> <out www dir>

Takes the site's index.html and pdf/ folder, swaps Google Fonts for a bundled
Inter subset, and adds the Android bridge script (android/tools/bridge.html).
"""
import html, os, shutil, subprocess, sys

root, out = sys.argv[1], sys.argv[2]
here = os.path.dirname(os.path.abspath(__file__))
INTER = '/usr/share/fonts/opentype/inter'          # Inter OTFs (fonts-inter package)
WEIGHTS = [(300, 'Regular'), (400, 'Regular'), (500, 'Medium'), (600, 'SemiBold'), (700, 'Bold')]

s = open(os.path.join(root, 'index.html'), encoding='utf8').read()
os.makedirs(os.path.join(out, 'fonts'), exist_ok=True)

# 1. fonts: subset Inter to the characters the page uses
chars = set(s) | set(html.unescape(s))
for a, b in [(0x20, 0x7f), (0xa0, 0x180), (0x2000, 0x2070), (0x2190, 0x2200), (0x2200, 0x2300), (0x370, 0x400)]:
    chars |= {chr(c) for c in range(a, b)}
txt = os.path.join(out, 'fonts', 'chars.txt')
open(txt, 'w', encoding='utf8').write(''.join(sorted(c for c in chars if ord(c) >= 0x20)))
for n in sorted({n for _, n in WEIGHTS}):
    subprocess.check_call(['pyftsubset', f'{INTER}/Inter-{n}.otf', f'--text-file={txt}',
                           '--layout-features=kern,liga,calt,tnum,case,ss01', '--flavor=woff',
                           f'--output-file={out}/fonts/Inter-{n}.woff'])
os.remove(txt)
face = lambda fam: ''.join(
    f"@font-face{{font-family:'{fam}';font-style:normal;font-weight:{w};font-display:swap;"
    f"src:url(fonts/Inter-{n}.woff) format('woff')}}" for w, n in WEIGHTS)
a, b = s.index('<!--FONTS-->'), s.index('<!--/FONTS-->') + len('<!--/FONTS-->')
s = s[:a] + '<style>' + face('Inter') + face('Inter Tight') + '</style>' + s[b:]
tight = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600&display=swap">'
s = s.replace(tight, '')
assert 'fonts.googleapis' not in s, 'unhandled Google Fonts link'

# 2. PDFs are served from the www root inside the app
s = s.replace("<script>window.PDF_BASE='pdf/'</script>", '')

# 3. Android bridge (PDF open/share/save, Back button history)
bridge = open(os.path.join(here, 'bridge.html'), encoding='utf8').read()
i = s.rindex('</body>')
s = s[:i] + bridge + s[i:]
open(os.path.join(out, 'index.html'), 'w', encoding='utf8').write(s)

n = 0
for f in sorted(os.listdir(os.path.join(root, 'pdf'))):
    if f.endswith('.pdf'):
        shutil.copy2(os.path.join(root, 'pdf', f), os.path.join(out, f))
        n += 1
print(f'web bundle: index.html + {n} PDFs -> {out}')
