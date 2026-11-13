"""Build the S7 AI PYQ Bank page from the original AIT401 artifact + new subject data.
usage: python build.py <original.html> <project dir>"""
import sys, os, re
src, root = sys.argv[1], sys.argv[2]
L = open(src, encoding='utf8').read().split('\n')
def at(pat):
    idx = [i for i, l in enumerate(L) if l.startswith(pat)]
    assert len(idx) == 1, (pat, idx)
    return idx[0]
i_title, i_style_end, i_script, i_app, i_script_end = at('<title>'), at('</style>'), at('<script>'), at('/* ================= APP'), at('</script>')
head = L[i_title:i_style_end + 1]
head[0] = '<title>S7 AI PYQ Bank</title>'
data = L[i_script + 1:i_app]
txt = '\n'.join(data)
for name in ('PAPERS', 'MODS', 'QB'):
    assert txt.count(f'\nconst {name}=[') == 1, name
    txt = txt.replace(f'\nconst {name}=[', f'\nconst AIT_{name}=[')
# make sure nothing else in the AIT data refers to the old globals
assert not re.search(r'(?<![\w_])(PAPERS|MODS|QB)(?![\w_])', txt.replace('AIT_PAPERS', '').replace('AIT_MODS', '').replace('AIT_QB', '').replace('QUESTION PAPERS', '')), 'stray ref'
D = os.path.join(root, 'data')
order = ['cst423-papers', 'cst423-m12', 'cst423-m3', 'cst423-m45', 'eet435-papers', 'eet435-m1', 'eet435-m2', 'eet435-m3', 'eet435-m4', 'eet435-m5',
         'mcn401-papers', 'mcn401-m1', 'mcn401-m2', 'mcn401-m3', 'mcn401-m4', 'mcn401-m5']
subj = '\n'.join(open(os.path.join(D, f + '.js'), encoding='utf8').read() for f in order)
pdfs = {c: f'{c.lower()}-pyq-answers.pdf' for c in ('CST423', 'EET435', 'MCN401') if os.path.exists(os.path.join(root, 'out', f'{c.lower()}-pyq-answers.pdf'))}
reg = """
SUBJ.AIT401={code:'AIT401',name:'Foundations of Deep Learning',short:'Deep learning',
 blurb:'Neural network basics, training deep models, CNNs, RNNs, autoencoders and GANs.',
 books:'Answers follow the KTU AIT401 syllabus texts (Goodfellow et al., <i>Deep Learning</i>; Aggarwal, <i>Neural Networks and Deep Learning</i>).',
 PAPERS:AIT_PAPERS,MODS:AIT_MODS,QB:AIT_QB,pdf:'ait401-pyq-answers.pdf'};
""" + ''.join(f"SUBJ.{c}.pdf='{p}';\n" for c, p in pdfs.items()) + ''.join(
    f"SUBJ.{c}.modPdf=true;\n" for c in ('AIT401', 'CST423', 'EET435', 'MCN401') if os.path.exists(os.path.join(root, 'out', 'mod', f'{c.lower()}-m5-part-b.pdf')))
shell = open(os.path.join(root, 'src', 'shell.html'), encoding='utf8').read()
app = '\n'.join(open(os.path.join(root, 'src', f), encoding='utf8').read() for f in ('fig2.js', 'figmap.js', 'app.js'))
def page(pre=''):
    return '\n'.join(head) + '\n' + shell + '\n' + pre + '<script>\nvar SUBJ={};\n' + txt + '\n' + subj + '\n' + reg + '\n' + app + '\n</script>\n'
out = os.path.join(root, 'out'); os.makedirs(out, exist_ok=True)
open(os.path.join(out, 'pyq-bank.html'), 'w', encoding='utf8').write(page())
skel = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;font:14px sans-serif}</style></head><body>'
for c in ('AIT401', 'CST423', 'EET435', 'MCN401'):
    open(os.path.join(out, f'print-{c}.html'), 'w', encoding='utf8').write(skel + page(f"<script>window.PRINT_MODE=1;window.PRINT_SUBJ='{c}'</script>\n") + '</body></html>')
os.makedirs(os.path.join(out, 'mod'), exist_ok=True)
for c in ('AIT401', 'CST423', 'EET435', 'MCN401'):
    for m in range(1, 6):
        for p in 'AB':
            open(os.path.join(out, 'mod', f'print-{c.lower()}-m{m}-part-{p.lower()}.html'), 'w', encoding='utf8').write(
                skel + page(f"<script>window.PRINT_MODE=1;window.PRINT_SUBJ='{c}';window.PRINT_MOD={m};window.PRINT_PART='{p}'</script>\n") + '</body></html>')
open(os.path.join(out, 'preview.html'), 'w', encoding='utf8').write(skel + page() + '</body></html>')
# standalone site (Vercel / any static host): proper head, PDFs served from pdf/
site_head = ('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
             '<title>S7 AI PYQ Bank</title><meta name="description" content="KTU S7 B.Tech AI previous year questions with answers: AIT401, CST423, EET435, MCN401, sorted by module with repeat tracking and PDF downloads.">'
             '<style>:root{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]{display:none!important}</style></head><body>')
open(os.path.join(out, 'index.html'), 'w', encoding='utf8').write(site_head + page("<script>window.PDF_BASE='pdf/'</script>\n") + '</body></html>')
print('ok', len(page()), 'pdfs:', list(pdfs))
