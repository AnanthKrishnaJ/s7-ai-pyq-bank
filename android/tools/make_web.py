#!/usr/bin/env python3
"""Make the offline web bundle that goes inside the Android app.

usage: make_web.py <repo root> <out www dir>

Takes the site's index.html and pdf/ folder, swaps Google Fonts for subsets of
the OFL fonts in android/fonts, and adds the Android bridge script (android/tools/bridge.html).
"""
import html, os, shutil, subprocess, sys

root, out = sys.argv[1], sys.argv[2]
here = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(here, '..', 'fonts')   # OFL fonts, subset to the characters the page uses
# (family, weight or weight range, source file)
FACES = [('Inter', '100 900', 'Inter-VF.ttf'), ('Inter Tight', '100 900', 'InterTight-VF.ttf'),
         ('Source Serif 4', '200 900', 'SourceSerif4-VF.ttf'), ('IBM Plex Mono', '400', 'IBMPlexMono-Regular.ttf'),
         ('IBM Plex Mono', '500', 'IBMPlexMono-Medium.ttf'), ('IBM Plex Mono', '600', 'IBMPlexMono-SemiBold.ttf')]

s = open(os.path.join(root, 'index.html'), encoding='utf8').read()
os.makedirs(os.path.join(out, 'fonts'), exist_ok=True)

# 1. fonts: subset the bundled OFL fonts to the characters the page uses
chars = set(s) | set(html.unescape(s))
for a, b in [(0x20, 0x7f), (0xa0, 0x180), (0x2000, 0x2070), (0x2190, 0x2200), (0x2200, 0x2300), (0x370, 0x400)]:
    chars |= {chr(c) for c in range(a, b)}
txt = os.path.join(out, 'fonts', 'chars.txt')
open(txt, 'w', encoding='utf8').write(''.join(sorted(c for c in chars if ord(c) >= 0x20)))
css = ''
for fam, w, src in FACES:
    name = os.path.splitext(src)[0] + '.woff'
    subprocess.check_call(['pyftsubset', os.path.join(FONTS, src), f'--text-file={txt}',
                           '--layout-features=kern,liga,calt,tnum,case,ss01,ss02,zero', '--flavor=woff',
                           f'--output-file={out}/fonts/{name}'])
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
