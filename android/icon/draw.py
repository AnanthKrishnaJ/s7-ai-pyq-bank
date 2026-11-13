from PIL import Image, ImageDraw
INK=(16,24,40,255); BLUE=(31,79,216,255); WHITE=(255,255,255,255); LINE=(208,213,221,255); MARK=(254,223,137,255)
SS=4
def fg(size=432, mono=False):
    S=size*SS; im=Image.new('RGBA',(S,S),(0,0,0,0)); d=ImageDraw.Draw(im)
    u=S/108.0  # 1dp in px
    # back sheet (stack)
    def page(x0,y0,x1,y1,fill,r):
        d.rounded_rectangle([x0*u,y0*u,x1*u,y1*u],radius=r*u,fill=fill)
    if mono:
        page(37,30,75,78,(255,255,255,110),4)
    else:
        page(37,30,75,78,(255,255,255,90),4)
    page(31,34,69,82,WHITE,4)
    c = (0,0,0,0) if mono else None
    lc = (0,0,0,0) if mono else LINE
    # lines
    for i,(y,w) in enumerate([(44,26),(51,22),(58,26),(65,16)]):
        col = (0,0,0,0) if mono else (MARK if i==1 else LINE)
        h = 4.2 if i==1 else 2.6
        d.rounded_rectangle([37*u,(y-h/2)*u,(37+w)*u,(y+h/2)*u],radius=h/2*u,fill=col)
    # badge
    cx,cy,r=67,75,11
    if mono:
        d.ellipse([(cx-r-2)*u,(cy-r-2)*u,(cx+r+2)*u,(cy+r+2)*u],fill=(0,0,0,0))
        d.ellipse([(cx-r)*u,(cy-r)*u,(cx+r)*u,(cy+r)*u],fill=WHITE)
        ck=(0,0,0,0)
    else:
        d.ellipse([(cx-r-2.2)*u,(cy-r-2.2)*u,(cx+r+2.2)*u,(cy+r+2.2)*u],fill=INK)
        d.ellipse([(cx-r)*u,(cy-r)*u,(cx+r)*u,(cy+r)*u],fill=BLUE)
        ck=WHITE
    d.line([((cx-5)*u,(cy+0.3)*u),((cx-1.5)*u,(cy+4)*u),((cx+5.5)*u,(cy-4)*u)],fill=ck,width=int(3*u),joint='curve')
    return im.resize((size,size),Image.LANCZOS)
f=fg(); f.save('ic_fg.png')
m=fg(mono=True)
# mono: keep alpha only, white
a=m.split()[3]; mm=Image.new('RGBA',m.size,(255,255,255,0)); mm.putalpha(a); mm.save('ic_mono.png')
# legacy icons
for name,px in [('mdpi',48),('hdpi',72),('xhdpi',96),('xxhdpi',144),('xxxhdpi',192)]:
    S=px*SS; base=Image.new('RGBA',(S,S),(0,0,0,0)); d=ImageDraw.Draw(base)
    d.rounded_rectangle([S*0.04,S*0.04,S*0.96,S*0.96],radius=S*0.22,fill=INK)
    # foreground scaled: 108dp->S*0.92 area mapped so safe zone fills nicely
    big=fg(432).resize((int(S*1.25),int(S*1.25)),Image.LANCZOS)
    off=(S-big.width)//2; base.alpha_composite(big,(off,off)) if off>=0 else base.alpha_composite(big.crop((-off,-off,-off+S,-off+S)))
    base.resize((px,px),Image.LANCZOS).save(f'legacy-{name}.png')
# preview
prev=Image.new('RGBA',(432,432),INK); prev.alpha_composite(f)
mask=Image.new('L',(432,432),0); ImageDraw.Draw(mask).ellipse([0,0,431,431],fill=255)
out=Image.new('RGBA',(900,450),(240,242,245,255)); c=Image.new('RGBA',(432,432),(0,0,0,0)); c.paste(prev,(0,0),mask); out.alpha_composite(c,(9,9))
l=Image.open('legacy-xxxhdpi.png').resize((384,384),Image.NEAREST); out.alpha_composite(l,(480,33)); out.save('preview.png')
