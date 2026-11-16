/* ================= FIGURES for CST423 / EET435 / MCN401 (inline SVG, drawn in code) ================= */
const F2=(()=>{
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const r1=v=>Math.round(v*10)/10;
function T(x,y,s,o={}){const fs=o.fs||12,ls=String(s).split('\n'),dy=fs*1.22,y0=y-(ls.length-1)*dy/2;
  return `<text x="${r1(x)}" y="${r1(y0)}" text-anchor="${o.a||'middle'}" dominant-baseline="central" font-size="${fs}" class="t${o.c?' '+o.c:''}"${o.fw?` font-weight="${o.fw}"`:''}${o.rot?` transform="rotate(${o.rot} ${r1(x)} ${r1(y)})"`:''}>${ls.map((l,i)=>`<tspan x="${r1(x)}" dy="${i?dy:0}">${esc(l)}</tspan>`).join('')}</text>`}
const B=(x,y,w,h,s,c='b',o={})=>`<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${o.r??8}" class="${c}"/>`+(s!=null?T(x+w/2,y+h/2,s,{fs:o.fs,c:o.tc||(c.includes('cd')?'w':''),fw:o.fw}):'');
const P=(d,c='l',o={})=>`<path d="${d}" class="${c}"${o.d?` stroke-dasharray="${o.d}"`:''}${o.arrow?' marker-end="url(#fxa)"':''}${o.fill?` style="fill:${o.fill}"`:''}/>`;
const A=(pts,o={})=>P('M'+pts.map(p=>p.map(r1).join(' ')).join(' L'),o.c||'l',{arrow:true,d:o.d});
const Ln=(pts,o={})=>P('M'+pts.map(p=>p.map(r1).join(' ')).join(' L'),o.c||'l',{d:o.d});
const C=(x,y,r,c='b')=>`<circle cx="${r1(x)}" cy="${r1(y)}" r="${r}" class="${c}"/>`;
function wrap(w,h,body,cap){return `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" width="${w}" class="fx" role="img" aria-label="${esc(cap)}">${body}</svg><figcaption>${cap}</figcaption></figure>`}
const TINT=['c1','c2','c3','c5','c6','c7','c4','c8'];

/* ---------- generic: flow chain (wraps into rows) ---------- */
function flow(items,o={}){const n=items.length,cols=o.cols||Math.min(n,4),bw=o.w||132,bh=o.h||54,gx=o.gx||34,gy=o.gy||44,rows=Math.ceil(n/cols);
  const W=cols*bw+(cols-1)*gx+20,H=rows*bh+(rows-1)*gy+20+(o.top||0);let s='';const pos=[];
  items.forEach((it,i)=>{const r=Math.floor(i/cols),c=i%cols,x=10+c*(bw+gx),y=10+(o.top||0)+r*(bh+gy);pos.push([x,y]);
    const lab=typeof it==='string'?it:it.t,cls=typeof it==='string'?(o.c?o.c[i%o.c.length]:(i===0||i===n-1?'c1':'b')):it.c;s+=B(x,y,bw,bh,lab,cls,{fs:o.fs||11.5})});
  for(let i=0;i<n-1;i++){const [x,y]=pos[i],[x2,y2]=pos[i+1];
    if(y===y2)s+=A([[x+bw,y+bh/2],[x2-2,y+bh/2]]);
    else s+=A([[x+bw/2,y+bh],[x+bw/2,y+bh+gy/2],[x2+bw/2,y+bh+gy/2],[x2+bw/2,y2-2]])}
  return wrap(W,H,(o.pre||'')+s,o.cap||'Block diagram')}

/* ---------- generic: layered stacks side by side ---------- */
function stacks(list,o={}){const sw=o.sw||210,rh=o.rh||38,g=o.g||26,maxr=Math.max(...list.map(s=>s.rows.length));const W=list.length*sw+(list.length-1)*g+20,H=maxr*(rh+6)+46;let s='';
  list.forEach((st,k)=>{const x=10+k*(sw+g);s+=T(x+sw/2,18,st.title,{fs:12.5,fw:600});const off=(maxr-st.rows.length)*(rh+6);
    st.rows.forEach((row,j)=>{const y=34+off+j*(rh+6),cells=Array.isArray(row)?row:[row],cw=(sw-(cells.length-1)*5)/cells.length,cls=(st.c&&st.c[j])||'b';
      cells.forEach((cell,ci)=>s+=B(x+ci*(cw+5),y,cw,rh,cell,cls,{fs:cells.length>2?10:11,r:6}))})});
  return wrap(W,H,s,o.cap||'Layered architecture')}

/* ---------- generic: classification tree ---------- */
function tree(root,kids,o={}){const n=kids.length,kw=o.kw||150,g=o.g||14,W=Math.max(n*kw+(n-1)*g+20,240),rw=Math.min(240,W-20),maxi=Math.max(1,...kids.map(k=>(k.items||[]).length));
  const kh=34,ih=maxi*17+14,H=56+30+kh+(maxi?ih+10:0)+16;let s=B(W/2-rw/2,10,rw,40,root,'cd',{fs:12.5,fw:600});
  const ky=86,midy=68;s+=Ln([[W/2,50],[W/2,midy]]);
  const x0=(W-(n*kw+(n-1)*g))/2;s+=Ln([[x0+kw/2,midy],[x0+(n-1)*(kw+g)+kw/2,midy]]);
  kids.forEach((k,i)=>{const x=x0+i*(kw+g),cls=k.c||TINT[i%TINT.length];s+=A([[x+kw/2,midy],[x+kw/2,ky-2]]);s+=B(x,ky,kw,kh,k.t,cls,{fs:11.5,fw:600});
    if(k.items&&k.items.length){s+=`<rect x="${x}" y="${ky+kh+6}" width="${kw}" height="${ih}" rx="6" class="b"/>`;k.items.forEach((t,j)=>s+=T(x+8,ky+kh+6+12+j*17,'• '+t,{a:'start',fs:10.5,c:'s'}))}});
  return wrap(W,H,s,o.cap||'Classification')}

/* ---------- generic: cycle ---------- */
function cycle(items,o={}){const n=items.length,R=o.R||(n>4?120:100),bw=o.w||128,bh=40,W=2*R+bw+30,H=2*R+bh+30,cx=W/2,cy=H/2;let s='';
  const pts=items.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/n;return [cx+R*Math.cos(a),cy+R*Math.sin(a)]});
  for(let i=0;i<n;i++){const [x1,y1]=pts[i],[x2,y2]=pts[(i+1)%n],dx=x2-x1,dy=y2-y1,d=Math.hypot(dx,dy),ux=dx/d,uy=dy/d,
    ex=Math.min(bw/2/Math.abs(ux||1e-9),bh/2/Math.abs(uy||1e-9))+6;s+=A([[x1+ux*ex,y1+uy*ex],[x2-ux*ex,y2-uy*ex]],{c:'l hl'})}
  items.forEach((t,i)=>{const [x,y]=pts[i];s+=B(x-bw/2,y-bh/2,bw,bh,t,o.c?o.c[i%o.c.length]:TINT[i%TINT.length],{fs:11,fw:600})});
  if(o.center)s+=T(cx,cy,o.center,{fs:12,c:'s',fw:600});
  return wrap(W,H,s,o.cap||'Cycle')}

/* ---------- plots ---------- */
function axes(x,y,w,h,xl,yl){return Ln([[x,y],[x,y+h],[x+w,y+h]],{c:'l'})+T(x+w,y+h+14,xl,{a:'end',fs:11,c:'s'})+T(x-6,y-6,yl,{a:'start',fs:11,c:'s'})}
function curve(f,x0,x1,X,Y,c,n=60){let d='';for(let i=0;i<=n;i++){const v=x0+(x1-x0)*i/n,yv=f(v);if(yv<0)break;d+=(i?'L':'M')+r1(X(v))+' '+r1(Y(yv))}return P(d,c)}
function ivFamily(){const X=v=>50+v/0.7*230,Y=i=>200-i/9*170,Xp=v=>350+v/0.7*230,Yp=p=>200-p/4.2*170,G=[[1000,8,'c1s'],[600,4.8,'c2s'],[300,2.4,'c3s']];let s=axes(50,30,240,170,'V','I')+axes(350,30,240,170,'V','P');
  G.forEach(([g,isc,c],k)=>{const voc=0.6+0.03*Math.log(g/1000),f=v=>isc*(1-Math.exp((v-voc)/0.035));s+=curve(f,0,0.7,X,Y,'l '+c,80);s+=curve(v=>v*f(v),0,0.7,Xp,Yp,'l '+c,80);
    s+=T(X(0.05),Y(isc)-8,g+' W/m²',{a:'start',fs:10.5,c:'s'});let bv=0,bp=0;for(let v=0;v<voc;v+=0.002){const p=v*f(v);if(p>bp){bp=p;bv=v}}s+=C(Xp(bv),Yp(bp),3.5,'dot '+c)});
  s+=T(170,222,'I–V: current ∝ insolation',{fs:11,c:'s'})+T(470,222,'P–V: MPP falls with insolation',{fs:11,c:'s'});
  return wrap(620,235,s,'Effect of insolation on I–V and P–V characteristics')}
function ivMpp(){const isc=8,voc=0.62,f=v=>isc*(1-Math.exp((v-voc)/0.03)),X=v=>60+v/0.72*330,Y=i=>210-i/9.5*175;let bv=0,bp=0;for(let v=0;v<voc;v+=0.001){const p=v*f(v);if(p>bp){bp=p;bv=v}}
  const Yp=p=>210-p/4.5*175;let s=Ln([[60,30],[60,210],[410,210]])+T(410,236,'Voltage V',{a:'end',fs:11,c:'s'})+T(54,24,'Current I / Power P',{a:'start',fs:11,c:'s'});
  s+=`<rect x="${r1(X(0))}" y="${r1(Y(f(bv)))}" width="${r1(X(bv)-X(0))}" height="${r1(Y(0)-Y(f(bv)))}" class="fillA"/>`;
  s+=curve(f,0,0.72,X,Y,'l c1s',90)+curve(v=>v*f(v),0,0.72,X,Yp,'l c3s',90);
  s+=Ln([[X(bv),Y(f(bv))],[X(bv),Y(0)]],{d:'4 3'})+Ln([[X(0),Y(f(bv))],[X(bv),Y(f(bv))]],{d:'4 3'});
  s+=C(X(bv),Y(f(bv)),4.5,'dot c1s')+C(X(bv),Yp(bp),4,'dot c3s');
  s+=T(X(0)-8,Y(isc)-7,'Isc',{a:'end',fs:11})+T(X(0)-8,Y(f(bv))+7,'Imp',{a:'end',fs:11})+T(X(voc)+8,Y(0)+12,'Voc',{fs:11})+T(X(bv)-6,Y(0)+12,'Vmp',{fs:11});
  s+=T(X(bv)+10,Y(f(bv))-12,'MPP (Vmp, Imp)',{a:'start',fs:11,fw:600})+T(X(bv)+10,Yp(bp)-22,'Pmax',{a:'start',fs:11,c:'s'});
  s+=T(X(bv)/2+X(0)/2,Y(f(bv)/2),'Vmp·Imp',{fs:11,c:'s'})+T(440,70,'I–V',{a:'start',fs:11,c:'s'})+T(440,90,'P–V',{a:'start',fs:11,c:'s'});
  s+=Ln([[425,70],[436,70]],{c:'l c1s'})+Ln([[425,90],[436,90]],{c:'l c3s'})+T(240,256,'FF = (Vmp·Imp)/(Voc·Isc) = shaded area / (Voc·Isc rectangle)',{fs:11,c:'s'});
  return wrap(500,268,s,'I–V and P–V curves with maximum power point and fill factor')}
function powerCurve(){const X=v=>50+v/28*400,Y=p=>190-p*150;let s=axes(50,30,410,160,'','Power')+T(250,236,'Wind speed (m/s)',{fs:11,c:'s'});
  s+=P(`M${X(0)} ${Y(0)} L${X(3.5)} ${Y(0)} `+Array.from({length:21},(_,i)=>{const v=3.5+i*(12-3.5)/20,p=Math.pow((v-3.5)/8.5,2.4);return `L${r1(X(v))} ${r1(Y(Math.min(p,1)))}`}).join(' ')+` L${X(25)} ${Y(1)} L${X(25)} ${Y(0)} L${X(28)} ${Y(0)}`,'l c1s thick');
  [[3.5,'Vci\ncut-in'],[12,'Vr\nrated'],[25,'Vco\ncut-out']].forEach(([v,t])=>{s+=Ln([[X(v),Y(0)],[X(v),Y(1.08)]],{d:'4 3'})+T(X(v),Y(0)+20,t,{fs:10.5,c:'s'})});
  s+=T(X(1.75),Y(0.35),'I\nno\noutput',{fs:10.5,c:'s'})+T(X(7.6),Y(0.72),'II\nP ∝ V³',{fs:10.5})+T(X(18.5),Y(0.82),'III  rated power\n(pitch / stall)',{fs:10.5})+T(X(26.5),Y(0.4),'IV\nshut\ndown',{fs:10.5,c:'s'})+T(X(0)-6,Y(1),'Pr',{a:'end',fs:11});
  return wrap(480,246,s,'Power curve of a wind turbine')}

/* ---------- solar ---------- */
function cell(){let s='';const x=60,w=300;
  for(let i=0;i<5;i++)s+=`<rect x="${x+20+i*60}" y="34" width="14" height="10" class="metal"/>`;
  s+=`<rect x="${x}" y="44" width="${w}" height="8" class="arc"/><rect x="${x}" y="52" width="${w}" height="26" class="nlay"/><rect x="${x}" y="78" width="${w}" height="70" class="play"/><rect x="${x}" y="148" width="${w}" height="12" class="metal"/>`;
  s+=Ln([[x,78],[x+w,78]],{c:'l',d:'5 3'});[[0,'sunlight']].forEach(()=>{for(let i=0;i<4;i++)s+=A([[x+45+i*70,4],[x+55+i*70,30]],{c:'l sun'})});
  s+=C(x+120,64,5,'eh e')+T(x+120,64,'−',{fs:10,c:'w'})+C(x+150,108,5,'eh h')+T(x+150,108,'+',{fs:10,c:'w'})+A([[x+150,100],[x+150,82]],{c:'l'})+A([[x+120,72],[x+120,58]],{c:'l'});
  const L=[[39,22,'front grid contact'],[48,44,'anti-reflection coating'],[65,65,'n-type Si (thin, P-doped)'],[78,86,'p–n junction'],[113,113,'p-type Si (B-doped)'],[154,154,'back contact']];
  L.forEach(([y,ly,t])=>{s+=Ln([[x+w,y],[x+w+8,y],[x+w+16,ly]],{c:'l thin'})+T(x+w+20,ly,t,{a:'start',fs:11})});
  s+=P(`M${x-6} 154 L${x-30} 154 L${x-30} 39 L${x+20} 39`,'l');s+=B(x-46,82,32,28,'Load','b',{fs:10,r:4});
  return wrap(560,172,s,'Construction of a silicon solar cell')}
function equiv(){let s='';const y1=40,y2=170;s+=Ln([[40,y1],[460,y1]])+Ln([[40,y2],[460,y2]]);
  s+=C(80,105,20,'b')+A([[80,120],[80,92]])+T(80,140,'',{})+Ln([[80,y1],[80,85]])+Ln([[80,125],[80,y2]])+T(52,105,'I_L',{fs:12,a:'end'});
  s+=Ln([[170,y1],[170,90]])+P('M158 90 L182 90 L170 112 Z','b')+Ln([[158,112],[182,112]])+Ln([[170,112],[170,y2]])+T(196,101,'D',{fs:12,a:'start'})+T(196,120,'I_D',{fs:10.5,a:'start',c:'s'});
  s+=Ln([[260,y1],[260,78]])+`<rect x="250" y="78" width="20" height="54" class="b"/>`+Ln([[260,132],[260,y2]])+T(282,105,'Rsh',{fs:12,a:'start'});
  s+=`<rect x="315" y="${y1-9}" width="54" height="18" class="b"/>`+T(342,y1-22,'Rs',{fs:12});
  s+=Ln([[300,y1],[315,y1]])+C(440,y1,4,'dot c1s')+C(440,y2,4,'dot c1s')+T(450,y1,'+',{a:'start',fs:14})+T(450,y2,'−',{a:'start',fs:14})+A([[440,y1+12],[440,y2-12]],{c:'l',d:'4 3'})+T(430,105,'V',{a:'end',fs:12})+A([[395,y1-10],[425,y1-10]])+T(410,y1-22,'I',{fs:12});
  return wrap(500,195,s,'Equivalent circuit of a practical solar cell')}
function fpc(){let s='';s+=`<rect x="40" y="60" width="420" height="90" rx="4" class="case"/><rect x="48" y="66" width="404" height="6" class="glass"/><rect x="48" y="78" width="404" height="6" class="glass"/>`;
  s+=`<rect x="48" y="104" width="404" height="6" class="absorb"/>`;for(let i=0;i<8;i++)s+=C(70+i*52,114,7,'pipe');s+=`<rect x="48" y="124" width="404" height="20" class="insul"/>`;
  for(let i=0;i<5;i++)s+=A([[80+i*85,8],[95+i*85,58]],{c:'l sun'});s+=P('M200 100 Q210 80 220 100 Q230 80 240 100','l thin',{d:'3 2'});
  [[69,72,'glass covers'],[107,94,'black absorber plate'],[114,112,'riser tubes (water)'],[134,130,'insulation'],[150,148,'casing']].forEach(([y,ty,t])=>s+=Ln([[452,y],[476,ty]],{c:'l thin'})+T(480,ty,t,{a:'start',fs:11}));
  s+=T(220,92,'re-radiated IR trapped',{fs:10,c:'s'});return wrap(600,165,s,'Flat plate collector (cross-section)')}
function ptc(plant){let s='';const fx=200,fy=70;s+=P('M60 40 Q200 210 340 40','l thick c3s');for(let i=0;i<5;i++){const x=90+i*55,t=(x-60)/280,yy=(1-t)*(1-t)*40+2*(1-t)*t*210+t*t*40;s+=A([[x,8],[x,yy-2]],{c:'l sun'})+Ln([[x,yy],[fx,fy]],{c:'l sun',d:'3 2'})}
  s+=C(fx,fy,9,'pipe')+C(fx,fy,14,'glassc')+Ln([[fx,fy+14],[fx,170]])+P('M180 170 L220 170 L210 180 L190 180 Z','b');
  s+=T(fx-20,fy-24,'absorber tube in\nevacuated glass',{a:'end',fs:10.5})+T(70,130,'parabolic\nmirror',{fs:10.5,c:'s'})+T(fx,192,'single-axis tracking',{fs:10.5,c:'s'});
  if(plant){s+=B(390,40,120,40,'Heat exchanger\n/ boiler','c1',{fs:10.5})+B(540,40,90,40,'Turbine','c2',{fs:11})+B(540,110,90,40,'Generator','c6',{fs:11})+B(390,110,120,40,'Condenser','b',{fs:11});
    s+=A([[fx+14,fy-6],[388,52]],{c:'l hot'})+T(288,43,'hot oil 390 °C',{fs:10,c:'s'})+A([[388,70],[fx+14,fy+6]],{c:'l cold'})+A([[510,60],[538,60]])+Ln([[585,80],[585,108]])+A([[540,70],[520,130],[512,130]])+A([[450,110],[450,82]])}
  return wrap(plant?650:380,205,s,plant?'Parabolic trough collector and solar thermal power plant':'Parabolic trough collector (line focus)')}
function tower(plant){let s='';s+=`<rect x="190" y="40" width="20" height="150" class="tower"/><rect x="176" y="22" width="48" height="22" rx="4" class="absorb"/>`+T(200,10,'receiver',{fs:10.5});
  [[40,170],[80,178],[120,184],[280,184],[320,178],[360,170]].forEach(([x,y])=>{s+=Ln([[x,y],[x,y+14]])+`<rect x="${x-14}" y="${y-4}" width="28" height="5" class="mirror" transform="rotate(${x<200?-18:18} ${x} ${y})"/>`+Ln([[x,y-4],[200,34]],{c:'l sun',d:'3 2'})+A([[x+(x<200?-30:30),y-90],[x,y-8]],{c:'l sun'})});
  s+=T(80,205,'heliostats (2-axis tracking)',{fs:10.5,c:'s'})+T(200,205,'tower',{fs:10.5,c:'s'});
  if(plant){s+=B(420,20,110,36,'Hot salt tank\n565 °C','c3',{fs:10})+B(420,76,110,36,'Steam generator','c1',{fs:10.5})+B(560,76,90,36,'Turbine','c2',{fs:11})+B(560,140,90,36,'Generator','c6',{fs:11})+B(420,140,110,36,'Cold salt tank','c1',{fs:10.5});
    s+=A([[224,30],[418,36]],{c:'l hot'})+A([[475,56],[475,74]])+A([[530,94],[558,94]])+Ln([[605,112],[605,138]])+A([[420,158],[300,158],[212,60]],{c:'l cold'})}
  return wrap(plant?670:400,215,s,plant?'Central tower solar thermal power plant':'Central tower collector (point focus)')}
function standalone(){let s=B(10,60,110,44,'PV array','c7',{fs:11.5})+B(150,60,140,44,'Charge controller\n+ MPPT','c1',{fs:11})+B(150,140,140,40,'Battery bank','c6',{fs:11.5})+B(320,30,110,40,'DC loads','b',{fs:11.5})+B(320,95,110,40,'Inverter','c2',{fs:11.5})+B(460,95,100,40,'AC loads','b',{fs:11.5});
  s+=A([[120,82],[148,82]])+P('M220 104 L220 138','l',{arrow:true})+A([[226,138],[226,106]])+A([[290,74],[318,52]])+A([[290,90],[318,113]])+A([[430,115],[458,115]]);
  return wrap(570,190,s,'Stand-alone PV system')}
function pyrano(){let s=P('M60 120 A60 60 0 0 1 180 120','l glassc')+P('M75 120 A45 45 0 0 1 165 120','l glassc')+`<rect x="88" y="112" width="64" height="8" class="absorb"/><rect x="40" y="120" width="160" height="14" rx="3" class="case"/><rect x="100" y="134" width="40" height="16" class="case"/>`;
  for(let i=0;i<3;i++)s+=A([[80+i*40,40],[100+i*20,108]],{c:'l sun'});s+=T(240,70,'two glass domes',{a:'start',fs:11})+T(240,104,'thermopile (black sensor)',{a:'start',fs:11})+T(240,128,'white guard ring, base',{a:'start',fs:11})+Ln([[170,80],[236,70]],{c:'l thin'})+Ln([[152,116],[236,104]],{c:'l thin'})+Ln([[200,126],[236,128]],{c:'l thin'});
  return wrap(420,160,s,'Pyranometer: global radiation')}
function pyrhelio(){let s=`<rect x="80" y="50" width="240" height="36" rx="6" class="case" transform="rotate(-12 200 68)"/>`+T(200,68,'collimating tube (aperture ≈ 5.7°)',{fs:10.5,rot:-12})+`<rect x="316" y="72" width="16" height="30" class="absorb" transform="rotate(-12 200 68)"/>`;
  s+=A([[10,120],[70,96]],{c:'l sun'})+A([[10,104],[70,82]],{c:'l sun'})+T(20,140,'direct beam from sun',{a:'start',fs:10.5,c:'s'})+T(350,120,'thermopile /\nblackened strip',{a:'start',fs:11});
  return wrap(470,160,s,'Pyrheliometer: direct (beam) radiation')}
function sunshine(){let s=C(150,70,34,'glassc')+P('M86 70 A64 64 0 0 0 214 70','l thick c7s')+P('M100 70 A50 50 0 0 0 200 70','l',{d:'3 3'});
  s+=A([[40,10],[130,50]],{c:'l sun'})+Ln([[150,70],[196,104]],{c:'l sun',d:'3 2'})+C(196,104,4,'dot c3s')+T(250,40,'glass sphere (lens)',{a:'start',fs:11})+T(250,104,'card burnt by focused\nsun: trace length = hours',{a:'start',fs:11})+Ln([[184,56],[246,40]],{c:'l thin'})+Ln([[200,104],[246,104]],{c:'l thin'});
  return wrap(430,150,s,'Campbell–Stokes sunshine recorder')}

/* ---------- ocean ---------- */
function otecClosed(){let s=B(150,30,130,46,'EVAPORATOR','c3',{fs:11.5,fw:600})+B(360,30,110,46,'TURBINE','c2',{fs:11.5,fw:600})+B(360,140,110,46,'CONDENSER','c1',{fs:11.5,fw:600})+B(150,140,130,46,'FEED PUMP','b',{fs:11.5,fw:600})+B(500,30,90,46,'Generator','c6',{fs:11});
  s+=A([[280,53],[358,53]])+T(320,42,'NH₃ vapour',{fs:10,c:'s'})+A([[415,76],[415,138]])+T(422,107,'low-p vapour',{a:'start',fs:10,c:'s'})+A([[360,163],[282,163]])+T(320,176,'liquid NH₃',{fs:10,c:'s'})+A([[215,140],[215,78]])+Ln([[470,53],[500,53]],{c:'l thick'});
  s+=A([[20,40],[148,40]],{c:'l hot'})+T(20,28,'warm surface water 26 °C',{a:'start',fs:10.5})+A([[148,66],[40,66],[40,80]],{c:'l hot'})+T(44,92,'out ≈ 23 °C',{a:'start',fs:10,c:'s'});
  s+=A([[600,150],[472,150]],{c:'l cold'})+T(600,128,'cold deep water 5 °C (≈1000 m)',{a:'end',fs:10.5})+A([[472,176],[600,176],[600,190]],{c:'l cold'});
  return wrap(620,200,s,'Closed-cycle (Anderson) OTEC')}
function otecOpen(){let s=flow([{t:'Warm seawater\n27 °C',c:'c3'},{t:'Deaerator',c:'b'},{t:'Flash evaporator\n(vacuum ≈ 3 kPa)',c:'c3'},{t:'LP steam turbine\n+ generator',c:'c2'},{t:'Surface condenser',c:'c1'},{t:'Fresh water',c:'c6'}],{cols:3,w:150,cap:'Open-cycle (Claude) OTEC: cold deep water condenses the steam; vacuum pump removes gases'});return s}
function otecHybrid(){let s=B(20,30,140,46,'Warm seawater','c3',{fs:11})+B(200,30,150,46,'Flash chamber\n(vacuum)','c3',{fs:11})+B(200,120,150,46,'Evaporator\n(steam → NH₃)','c7',{fs:11})+B(20,120,140,46,'Fresh water\n(condensate)','c6',{fs:11});
  s+=B(400,120,120,46,'NH₃ turbine\n+ generator','c2',{fs:11})+B(400,210,120,46,'Condenser','c1',{fs:11})+B(200,210,150,46,'Feed pump','b',{fs:11})+B(560,210,90,46,'Cold deep\nwater','c1',{fs:10.5});
  s+=A([[160,53],[198,53]])+A([[275,76],[275,118]])+T(282,97,'steam',{a:'start',fs:10,c:'s'})+A([[200,143],[162,143]])+A([[350,143],[398,143]])+T(374,132,'NH₃ vap.',{fs:10,c:'s'})+A([[460,166],[460,208]])+A([[400,233],[352,233]])+A([[275,210],[275,168]])+A([[560,233],[522,233]],{c:'l cold'});
  return wrap(660,265,s,'Hybrid-cycle OTEC: power from the NH₃ loop, fresh water from the flash steam')}
function tidalSingle(){let s=`<rect x="20" y="40" width="200" height="120" class="sea"/><rect x="260" y="40" width="200" height="120" class="basin"/><rect x="220" y="30" width="40" height="140" class="dam"/>`;
  s+=T(120,100,'SEA\n(tide rises and falls)',{fs:11})+T(360,100,'BASIN',{fs:12,fw:600})+B(225,64,30,26,'T','c2',{fs:10,r:3})+B(225,110,30,26,'S','c7',{fs:10,r:3});
  s+=A([[180,77],[300,77]],{c:'l'})+T(240,20,'dam / barrage',{fs:10.5,c:'s'})+A([[300,123],[180,123]],{c:'l',d:'4 3'})+T(240,184,'T = bulb turbines, S = sluice gates; ebb: basin → sea through T',{fs:10.5,c:'s'});
  return wrap(480,198,s,'Single-basin tidal power plant (plan)')}
function tidalDouble(){let s=`<rect x="20" y="20" width="440" height="50" class="sea"/>`+T(240,40,'OPEN SEA',{fs:12,fw:600})+`<rect x="20" y="80" width="200" height="110" class="basin"/><rect x="260" y="80" width="200" height="110" class="basin2"/><rect x="20" y="70" width="440" height="10" class="dam"/><rect x="220" y="70" width="40" height="120" class="dam"/>`;
  s+=T(120,140,'UPPER (HIGH)\nBASIN',{fs:11.5,fw:600})+T(360,140,'LOWER (LOW)\nBASIN',{fs:11.5,fw:600})+B(225,120,30,30,'T','c2',{fs:10,r:3})+A([[80,52],[80,92]])+T(86,64,'filled at high tide',{a:'start',fs:10,c:'s'})+A([[400,92],[400,52]])+T(394,64,'emptied at low tide',{a:'end',fs:10,c:'s'})+A([[200,135],[290,135]],{c:'l thick'});
  return wrap(480,205,s,'Double-basin tidal plant: turbines between the basins run continuously')}
function tides(){let s=P('M150 60 Q90 60 60 100 Q90 140 150 140 Q210 140 240 100 Q210 60 150 60 Z','sea2')+C(150,100,34,'earth')+T(150,100,'Earth',{fs:11,c:'w'})+C(420,100,14,'moon')+T(420,126,'Moon',{fs:11});
  s+=A([[250,100],[400,100]],{c:'l',d:'4 3'})+T(325,90,'gravitational pull',{fs:10.5,c:'s'})+T(240,40,'near-side bulge',{fs:10.5,c:'s'})+T(56,40,'far-side bulge',{fs:10.5,c:'s'})+T(150,170,'two high tides and two low tides every 24 h 50 min',{fs:10.5,c:'s'});
  return wrap(470,185,s,'Formation of tides')}

/* ---------- wind ---------- */
function streamTube(){let s=P('M20 70 C140 70 180 50 240 48 C300 46 340 30 460 22','l')+P('M20 130 C140 130 180 150 240 152 C300 154 340 170 460 178','l')+`<rect x="236" y="44" width="8" height="112" class="dam"/>`;
  [[40,'Vu'],[250,'V = (Vu+Vd)/2'],[420,'Vd']].forEach(([x,t],i)=>{s+=A([[x,100],[x+(i===1?36:i?30:50),100]],{c:'l hl'})+T(x+(i===1?60:20),116,t,{a:i===1?'start':'middle',fs:11.5,fw:600})});
  s+=T(60,52,'A₁',{fs:11})+T(240,30,'rotor (area A)',{fs:11})+T(430,10,'A₂ (wider)',{fs:11});return wrap(480,195,s,'Stream tube through an ideal rotor (actuator disc)')}
function hawt(){let s=`<rect x="236" y="96" width="16" height="140" class="tower"/>`+`<rect x="120" y="70" width="230" height="40" rx="12" class="nacelle"/>`+P('M92 90 Q100 66 120 80 L120 100 Q100 114 92 90 Z','b')+`<rect x="96" y="-10" width="10" height="90" rx="5" class="blade"/><rect x="96" y="100" width="10" height="100" rx="5" class="blade"/>`;
  s+=Ln([[120,90],[180,90]],{c:'l thick'})+B(180,78,40,24,'GB','c7',{fs:9.5,r:3})+Ln([[220,90],[260,90]],{c:'l thick'})+B(260,78,50,24,'Gen','c6',{fs:9.5,r:3})+B(146,80,22,20,'',`c3`,{r:3})+Ln([[330,70],[330,54]])+P('M330 54 L346 58 L330 62 Z','b');
  const L=[[100,20,'blade'],[106,90,'hub'],[150,104,'low-speed shaft + brake'],[200,78,'gearbox'],[285,78,'generator'],[338,56,'anemometer & wind vane'],[244,170,'tower'],[244,112,'yaw drive']];
  L.forEach(([x,y,t],i)=>{const tx=380,ty=20+i*24;s+=Ln([[x,y],[tx-6,ty]],{c:'l thin'})+T(tx,ty,t,{a:'start',fs:11})});s+=`<rect x="200" y="236" width="88" height="8" class="dam"/>`;
  return wrap(560,250,s,'Main parts of a horizontal-axis wind turbine')}
function airfoil(){let s=P('M60 120 C90 90 200 86 300 110 C200 120 100 130 60 120 Z','foil');s+=A([[10,150],[90,128]],{c:'l'})+T(20,160,'relative wind W',{a:'start',fs:11,c:'s'});
  s+=A([[180,105],[180,30]],{c:'l hl'})+T(186,40,'Lift L ⊥ W',{a:'start',fs:11.5,fw:600})+A([[180,105],[250,124]],{c:'l hot'})+T(256,130,'Drag D ∥ W',{a:'start',fs:11.5,fw:600})+P('M120 120 A40 40 0 0 1 128 106','l thin')+T(140,132,'α',{fs:11});
  return wrap(380,175,s,'Aerodynamic forces on a blade section')}
function savonius(){let s=P('M150 40 A50 50 0 0 0 150 140','l thick c2s')+P('M190 60 A50 50 0 0 1 190 160','l thick c2s')+C(170,100,4,'dot c1s');s+=A([[20,80],[90,80]],{c:'l hl'})+A([[20,110],[90,110]],{c:'l hl'})+T(20,66,'wind',{a:'start',fs:11});
  s+=A([[240,60],[262,92]],{c:'l'})+T(270,80,'rotation',{a:'start',fs:11,c:'s'})+T(170,182,'top view: two offset half-cylinders, gap lets air pass',{fs:10.5,c:'s'});return wrap(360,195,s,'Savonius rotor (drag type, vertical axis)')}
function propeller(){let s=`<rect x="146" y="100" width="12" height="120" class="tower"/>`+`<rect x="150" y="84" width="110" height="30" rx="10" class="nacelle"/>`+C(150,99,10,'b')+`<rect x="145" y="0" width="10" height="94" rx="5" class="blade"/>`+`<rect x="145" y="104" width="10" height="70" rx="5" class="blade" transform="rotate(60 150 99)"/><rect x="145" y="104" width="10" height="70" rx="5" class="blade" transform="rotate(-60 150 99)"/>`;
  s+=T(270,99,'nacelle: gearbox,\ngenerator, yaw drive',{a:'start',fs:11})+T(170,20,'airfoil blades (3)',{a:'start',fs:11})+T(166,200,'tall tower',{a:'start',fs:11,c:'s'});return wrap(400,225,s,'Propeller-type HAWT (lift type)')}
function darrieus(){let s=`<rect x="146" y="20" width="8" height="190" class="tower"/>`+P('M150 30 C60 70 60 160 150 200','l thick c2s')+P('M150 30 C240 70 240 160 150 200','l thick c2s')+Ln([[150,24],[60,6]],{c:'l thin'})+Ln([[150,24],[240,6]],{c:'l thin'})+B(110,210,80,26,'Gearbox + gen.','c6',{fs:9.5,r:4});
  s+=T(250,110,'curved airfoil blades\n(troposkien), lift type',{a:'start',fs:11})+T(250,40,'guy wires',{a:'start',fs:11,c:'s'});return wrap(420,245,s,'Darrieus (egg-beater) turbine')}
function multiblade(){let s=C(120,90,58,'b');for(let i=0;i<16;i++){const a=i*Math.PI/8;s+=P(`M${r1(120+14*Math.cos(a))} ${r1(90+14*Math.sin(a))} L${r1(120+56*Math.cos(a+0.18))} ${r1(90+56*Math.sin(a+0.18))} L${r1(120+56*Math.cos(a+0.36))} ${r1(90+56*Math.sin(a+0.36))} Z`,'bladeF')}
  s+=C(120,90,10,'cd')+Ln([[130,90],[250,90]],{c:'l thick'})+P('M250 70 L300 90 L250 110 Z','b')+`<rect x="116" y="100" width="8" height="110" class="tower"/>`+Ln([[120,150],[120,210]],{c:'l',d:'4 3'});
  s+=T(260,130,'tail vane keeps rotor\nfacing the wind',{a:'start',fs:11})+T(136,180,'pump rod',{a:'start',fs:11,c:'s'});return wrap(400,220,s,'Multi-bladed (American) windmill for water pumping')}
function anemometer(){let s=`<rect x="146" y="70" width="8" height="90" class="tower"/>`+Ln([[60,60],[240,60]],{c:'l thick'})+Ln([[150,20],[150,100]],{c:'l thick'})+P('M40 60 A20 20 0 0 1 80 60 Z','cup')+P('M220 60 A20 20 0 0 0 260 60 Z','cup')+C(150,60,6,'cd');
  s+=B(110,160,80,28,'Generator','c6',{fs:10.5,r:4})+A([[190,174],[260,174]])+B(262,160,100,28,'m/s display','b',{fs:10.5,r:4})+T(372,22,'cups on arms; speed ∝ wind',{a:'end',fs:11});
  return wrap(380,200,s,'Cup anemometer')}

/* ---------- biomass ---------- */
function gasifier(type){const up=type==='up';let s=`<rect x="110" y="30" width="160" height="200" rx="10" class="vessel"/>`;const z=up?[['DRYING 100–200 °C','c7'],['PYROLYSIS 200–600 °C','c3'],['REDUCTION 800–1000 °C','c1'],['COMBUSTION 1000–1200 °C','c4']]:[['DRYING','c7'],['PYROLYSIS','c3'],['COMBUSTION (throat)','c4'],['REDUCTION','c1']];
  z.forEach(([t,c],i)=>s+=`<rect x="118" y="${40+i*42}" width="144" height="38" rx="4" class="${c}"/>`+T(190,59+i*42,t,{fs:10}));s+=`<rect x="118" y="212" width="144" height="8" class="grate"/>`+B(150,0,80,24,'biomass feed','b',{fs:10,r:4})+A([[190,24],[190,38]]);
  if(up){s+=A([[40,224],[108,216]])+T(40,236,'air in',{a:'start',fs:10.5})+A([[272,50],[340,50]],{c:'l hot'})+T(344,50,'producer gas out\n(with tar)',{a:'start',fs:10.5})+A([[300,200],[300,70]],{c:'l',d:'4 3'})+T(306,140,'gas flows up',{a:'start',fs:10,c:'s'})}
  else{s+=A([[40,145],[108,145]])+A([[340,145],[272,145]])+T(30,132,'air nozzles',{a:'start',fs:10.5})+A([[272,216],[340,216]],{c:'l hot'})+T(344,216,'clean producer gas\n(low tar)',{a:'start',fs:10.5})+A([[300,60],[300,190]],{c:'l',d:'4 3'})+T(306,100,'fuel and gas\nmove down',{a:'start',fs:10,c:'s'})}
  s+=T(190,246,'ash out',{fs:10.5,c:'s'});return wrap(470,255,s,up?'Updraft (counter-current) gasifier':'Downdraft (co-current) gasifier')}
function kvic(){let s=`<rect x="140" y="70" width="200" height="150" class="slurryBox"/>`+`<rect x="150" y="40" width="180" height="72" rx="3" class="drum"/>`+T(240,62,'steel gas holder (floats)',{fs:10.5})+`<rect x="236" y="120" width="8" height="90" class="dam"/>`+Ln([[240,10],[240,40]],{c:'l thick'})+T(250,16,'gas outlet',{a:'start',fs:10.5});
  s+=`<rect x="20" y="80" width="70" height="40" class="slurryBox"/><rect x="390" y="100" width="70" height="40" class="slurryBox"/>`+Ln([[80,120],[170,210]],{c:'l thick'})+Ln([[310,210],[400,140]],{c:'l thick'});
  s+=T(55,70,'inlet tank',{fs:10.5})+T(425,90,'outlet tank',{fs:10.5})+T(240,232,'digester (brick, underground) with partition wall',{fs:10.5,c:'s'})+Ln([[140,96],[340,96]],{c:'l',d:'5 3'})+T(345,96,'slurry',{a:'start',fs:10,c:'s'});
  return wrap(480,245,s,'KVIC floating-drum biogas plant')}
function fixedDome(){let s=P('M120 120 A100 70 0 0 1 320 120 L320 220 L120 220 Z','domeBody')+P('M120 120 A100 70 0 0 1 320 120','l thick')+Ln([[220,50],[220,20]],{c:'l thick'})+C(220,30,5,'cd')+T(232,24,'gas valve',{a:'start',fs:10.5});
  s+=Ln([[120,130],[320,130]],{c:'l',d:'5 3'})+T(220,95,'gas stored under dome',{fs:10.5})+T(220,180,'DIGESTER (slurry)',{fs:11,fw:600});
  s+=`<rect x="20" y="70" width="60" height="36" class="slurryBox"/>`+Ln([[70,106],[150,200]],{c:'l thick'})+T(50,60,'inlet',{fs:10.5})+`<rect x="350" y="110" width="90" height="80" class="slurryBox"/>`+Ln([[320,200],[350,180]],{c:'l thick'})+T(395,100,'outlet / displacement\nchamber',{fs:10.5})+A([[395,170],[395,130]],{c:'l hl'});
  return wrap(470,235,s,'Fixed-dome (Janata / Deenbandhu) biogas plant')}

/* ---------- hydrogen, fuel cells ---------- */
function fuelCell(o={}){let s=`<rect x="120" y="60" width="70" height="150" class="anode"/><rect x="190" y="60" width="90" height="150" class="elec"/><rect x="280" y="60" width="70" height="150" class="cathode"/>`;
  s+=T(155,135,'ANODE\n(−)\nPt / C',{fs:10.5,fw:600})+T(235,92,o.el||'ELECTROLYTE',{fs:10})+T(315,135,'CATHODE\n(+)\nPt / C',{fs:10.5,fw:600});
  const ion=o.ion||'H⁺',left=o.dir==='l';s+=A(left?[[265,150],[205,150]]:[[205,150],[265,150]],{c:'l hl'})+T(235,170,ion,{fs:12,fw:600});
  s+=A([[20,100],[118,100]])+T(20,88,'H₂ in',{a:'start',fs:11})+A([[440,100],[352,100]])+T(440,88,'O₂ / air in',{a:'end',fs:11})+A([[118,180],[20,180]])+T(20,192,o.water==='anode'?'H₂O + unused H₂':'unused H₂',{a:'start',fs:10.5})+A([[352,180],[440,180]])+T(440,192,o.water==='anode'?'unused O₂':'H₂O + heat',{a:'end',fs:10.5});
  s+=P('M155 60 L155 22 L315 22 L315 60','l')+B(205,10,60,24,'LOAD','cd',{fs:10,r:4})+A([[170,22],[198,22]])+T(180,8,'e⁻',{fs:11});
  return wrap(460,220,s,o.cap||'Hydrogen–oxygen fuel cell')}
function electrolysis(){let s=`<rect x="80" y="60" width="300" height="150" rx="6" class="vessel"/><rect x="88" y="100" width="284" height="104" class="water"/>`+`<rect x="140" y="50" width="14" height="140" class="metal"/><rect x="306" y="50" width="14" height="140" class="metal"/><rect x="228" y="70" width="4" height="138" class="dam"/>`;
  s+=P('M147 50 L147 20 L313 20 L313 50','l')+B(196,8,68,24,'DC supply','cd',{fs:10,r:4})+T(147,40,'+',{fs:14,a:'end'})+T(316,40,'−',{fs:14,a:'start'});
  for(let i=0;i<4;i++){s+=C(165+i*6,170-i*20,3,'bub')+C(296-i*6,170-i*20,3,'bub')}s+=T(134,82,'ANODE\n(O₂)',{a:'end',fs:10})+T(326,82,'CATHODE\n(H₂)',{a:'start',fs:10})+T(230,222,'KOH electrolyte; diaphragm separates the gases',{fs:10.5,c:'s'});
  s+=A([[160,60],[160,30],[120,30]],{c:'l thin'})+A([[300,60],[300,30],[400,30]],{c:'l thin'})+T(70,30,'O₂ out',{fs:10.5})+T(430,30,'H₂ out',{fs:10.5});
  return wrap(470,232,s,'Electrolysis of water')}

/* ---------- hydro ---------- */
function francis(){let s=P('M220 40 A110 110 0 1 1 110 150 L60 150 L60 120 L110 120 A80 80 0 0 0 110 150','scroll')+C(220,150,70,'b')+C(220,150,46,'c1');
  for(let i=0;i<12;i++){const a=i*Math.PI/6;s+=Ln([[220+52*Math.cos(a),150+52*Math.sin(a)],[220+66*Math.cos(a+0.25),150+66*Math.sin(a+0.25)]],{c:'l thin'})}
  for(let i=0;i<10;i++){const a=i*Math.PI/5;s+=P(`M${r1(220+14*Math.cos(a))} ${r1(150+14*Math.sin(a))} Q${r1(220+30*Math.cos(a+0.5))} ${r1(150+30*Math.sin(a+0.5))} ${r1(220+44*Math.cos(a+0.2))} ${r1(150+44*Math.sin(a+0.2))}`,'l c1s')}
  s+=C(220,150,10,'cd')+A([[20,135],[58,135]],{c:'l hl'})+T(20,107,'from penstock',{a:'start',fs:10.5});
  [[[260,46],'spiral casing'],[[284,150],'guide vanes (adjustable)'],[[240,130],'runner: radial in, axial out'],[[220,150],'shaft → draft tube']].forEach(([[x,y],t],i)=>s+=Ln([[x,y],[360,50+i*34]],{c:'l thin'})+T(366,50+i*34,t,{a:'start',fs:11}));
  return wrap(540,275,s,'Francis turbine (plan view)')}
function kaplan(){let s=`<rect x="120" y="20" width="20" height="180" class="metal"/>`+P('M130 120 L60 100 L60 112 L130 128 Z','bladeF')+P('M130 120 L200 100 L200 112 L130 128 Z','bladeF')+P('M130 140 L80 160 L84 168 L130 148 Z','bladeF')+P('M130 140 L180 160 L176 168 L130 148 Z','bladeF');
  s+=A([[40,20],[40,90]],{c:'l hl'})+T(46,40,'axial flow',{a:'start',fs:10.5})+P('M60 200 L200 200 L230 250 L30 250 Z','draft')+T(130,228,'draft tube',{fs:10.5})+T(220,110,'adjustable runner blades on hub',{a:'start',fs:11});
  return wrap(420,260,s,'Kaplan (adjustable-blade propeller) turbine')}
function pelton(){let s=C(260,120,80,'b');for(let i=0;i<14;i++){const a=i*2*Math.PI/14,x=260+80*Math.cos(a),y=120+80*Math.sin(a);s+=`<ellipse cx="${r1(x)}" cy="${r1(y)}" rx="12" ry="8" transform="rotate(${r1(a*180/Math.PI)} ${r1(x)} ${r1(y)})" class="cup"/>`}
  s+=C(260,120,14,'cd')+`<rect x="20" y="28" width="140" height="16" class="metal"/>`+P('M160 28 L196 34 L196 38 L160 44 Z','metal')+P('M150 36 L184 36','l thick c3s')+A([[196,36],[248,40]],{c:'l hl'});
  s+=T(20,16,'penstock → nozzle with spear valve',{a:'start',fs:10.5})+T(224,26,'jet',{fs:10.5})+T(352,70,'double-cup (split)\nbuckets',{a:'start',fs:11})+T(352,170,'runner at\natmospheric pressure',{a:'start',fs:11})+T(260,220,'water falls to tail race',{fs:10.5,c:'s'});
  return wrap(470,232,s,'Pelton wheel (impulse turbine)')}
function crossflow(){let s=C(220,120,70,'b')+C(220,120,40,'b');for(let i=0;i<20;i++){const a=i*Math.PI/10;s+=P(`M${r1(220+40*Math.cos(a))} ${r1(120+40*Math.sin(a))} Q${r1(220+56*Math.cos(a-0.25))} ${r1(120+56*Math.sin(a-0.25))} ${r1(220+70*Math.cos(a-0.1))} ${r1(120+70*Math.sin(a-0.1))}`,'l c1s')}
  s+=P('M30 40 L170 40 L170 70 L30 70 Z','metal')+A([[40,55],[160,55]],{c:'l hl'})+P('M180 70 C200 110 230 120 260 170','l hl',{arrow:true})+T(30,26,'rectangular nozzle + guide vane',{a:'start',fs:10.5})+T(300,60,'drum runner with\ncurved blades',{a:'start',fs:11})+T(300,180,'water crosses the runner\ntwice (two stages)',{a:'start',fs:11});
  return wrap(470,215,s,'Cross-flow (Banki–Michell) turbine')}
function shpLayout(){let s=P('M10 60 L120 60 L120 70 L10 70 Z','sea')+`<rect x="110" y="44" width="14" height="30" class="dam"/>`+P('M124 66 L300 76','l thick c1s')+`<rect x="300" y="64" width="44" height="26" class="basin"/>`+P('M344 82 L520 200','l thick c3s')+B(510,190,90,40,'Powerhouse','c2',{fs:11})+P('M600 222 L680 230','l thick c1s');
  s+=P('M0 90 L120 90 L300 100 L344 106 L520 232 L700 240','l thin',{d:'2 3'});[[60,40,'river'],[117,30,'weir + intake'],[210,58,'head-race channel'],[322,50,'forebay'],[430,120,'penstock'],[555,248,'turbine + generator'],[650,214,'tail race']].forEach(([x,y,t])=>s+=T(x,y,t,{fs:10.5}));
  s+=Ln([[690,76],[690,226]],{c:'l',d:'4 3'})+T(696,150,'gross\nhead H',{a:'start',fs:10.5})+Ln([[344,76],[700,76]],{c:'l thin',d:'2 3'});
  return wrap(740,262,s,'Layout of a small (run-of-river) hydro scheme')}

/* ---------- MCN ---------- */
function domino(){let s='';const lab=['Ancestry &\nsocial environment','Fault of\nperson','Unsafe act /\nunsafe condition','Accident','Injury'];
  lab.forEach((t,i)=>{const x=20+i*100,tilt=i===2?0:0;s+=`<rect x="${x+30}" y="40" width="26" height="110" rx="3" class="${i===2?'dom3':'dom'}"/>`+T(x+43,170,t,{fs:10.5})+T(x+43,95,String(i+1),{fs:14,fw:600,c:i===2?'w':''})});
  s+=A([[90,30],[460,30]],{c:'l',d:'4 3'})+T(275,16,'sequence: each domino knocks the next',{fs:10.5,c:'s'})+T(243,210,'remove domino 3 → the chain stops',{fs:11,fw:600});
  return wrap(540,225,s,"Heinrich's domino theory")}
function orgChart(){let s=B(200,10,200,36,'Board / Managing Director','cd',{fs:11,fw:600})+B(10,70,170,36,'Central Safety Committee','c7',{fs:10.5})+B(420,70,170,36,'Safety Dept. (Chief Safety Officer)','c1',{fs:10})+B(215,70,170,36,'Works / Plant Manager','b',{fs:11});
  s+=Ln([[300,46],[300,68]])+Ln([[180,88],[213,88]],{d:'4 3'})+Ln([[385,88],[418,88]],{d:'4 3'});
  [0,1,2].forEach(i=>{const x=60+i*180;s+=Ln([[300,106],[300,120],[x+80,120],[x+80,134]])+B(x,134,160,34,'Department Manager','b',{fs:10.5})+Ln([[x+80,168],[x+80,182]])+B(x,182,160,34,'Supervisors / foremen','c2',{fs:10.5})+Ln([[x+80,216],[x+80,230]])+B(x,230,160,30,'Workers + safety reps','c6',{fs:10.5})});
  return wrap(600,270,s,'Line-and-staff safety organisation')}
function scaffold(){let s='';[60,200,340].forEach(x=>s+=`<rect x="${x}" y="30" width="8" height="200" class="metal"/>`);[80,150,220].forEach(y=>s+=`<rect x="60" y="${y}" width="288" height="6" class="metal"/>`);
  s+=`<rect x="60" y="72" width="288" height="8" class="plank"/>`+Ln([[60,40],[348,40]],{c:'l thick'})+Ln([[60,56],[348,56]],{c:'l'})+`<rect x="60" y="64" width="288" height="8" class="toe"/>`+Ln([[68,150],[200,86]])+Ln([[208,220],[340,156]]);
  s+=`<rect x="40" y="228" width="330" height="8" class="dam"/>`+`<rect x="370" y="20" width="40" height="216" class="wall"/>`+Ln([[348,110],[370,110]],{c:'l thick c3s'});
  [[[348,40],'guard rail (~1 m)'],[[348,56],'mid rail'],[[348,68],'toe board 150 mm'],[[348,76],'boarded platform ≥ 600 mm'],[[300,180],'diagonal brace'],[[364,110],'tie to building'],[[200,232],'base plate + sole board']].forEach(([[x,y],t],i)=>s+=Ln([[x,y],[430,22+i*30]],{c:'l thin'})+T(436,22+i*30,t,{a:'start',fs:10.5}));
  return wrap(600,245,s,'Independent tied scaffold: key safety features')}
function goggles(){let s=P('M40 60 Q40 30 90 30 L150 30 Q170 50 190 30 L250 30 Q300 30 300 60 Q300 100 250 100 L200 100 Q170 80 140 100 L90 100 Q40 100 40 60 Z','gog')+`<ellipse cx="100" cy="64" rx="44" ry="26" class="lens"/><ellipse cx="240" cy="64" rx="44" ry="26" class="lens"/>`+P('M40 60 L10 54','l thick')+P('M300 60 L330 54','l thick');
  s+=T(170,124,'sealed goggles: impact-resistant lenses, indirect vents, elastic strap',{fs:10.5,c:'s'});return wrap(340,135,s,'Safety goggles')}
function weldHelmet(){let s=P('M60 30 Q160 0 260 30 L270 170 Q160 200 50 170 Z','gog')+`<rect x="110" y="70" width="100" height="40" rx="4" class="dark"/>`+T(160,90,'filter lens',{fs:10.5,c:'w'})+T(160,140,'fibre shell covers face and neck',{fs:10.5,c:'s'});
  s+=T(290,90,'shade 9–14 lens\n+ clear cover glass\n(auto-darkening option)',{a:'start',fs:10.5});return wrap(440,195,s,'Welding helmet')}
function rope(kind){const W=380,y=40;let s='';const strand=(x0,x1,amp=6)=>{let d='';for(let x=x0;x<=x1;x+=4){d+=(x===x0?'M':'L')+x+' '+r1(y+amp*Math.sin(x/6))}return P(d,'l rope')+P(d.replace(/(\d+(\.\d+)?) (\d+(\.\d+)?)/g,(m,a,_,b)=>a+' '+r1(2*y-+b)),'l rope')};
  if(kind==='normal')s+=strand(20,360);
  else if(kind==='broken'){s+=strand(20,360);[150,170,200].forEach(x=>s+=Ln([[x,y-4],[x+8,y-18]],{c:'l hot'}))}
  else if(kind==='kink'){s+=strand(20,160)+P('M160 40 L190 12 L210 40','l rope')+strand(210,360)}
  else if(kind==='bird'){s+=strand(20,140)+P('M140 40 C160 0 200 0 220 40 C200 80 160 80 140 40','l rope')+P('M150 40 C170 14 190 14 210 40 C190 66 170 66 150 40','l rope')+strand(220,360)}
  else if(kind==='corrosion'){s+=strand(20,360)+`<rect x="130" y="28" width="110" height="24" rx="8" class="rust"/>`}
  else if(kind==='abrasion'){s+=strand(20,140)+`<rect x="140" y="34" width="100" height="12" class="metal"/>`+strand(240,360)}
  else if(kind==='crush'){s+=strand(20,140)+P('M140 36 L240 36 L240 44 L140 44 Z','metal')+strand(240,360)}
  else if(kind==='core'){s+=strand(20,360)+P('M170 40 C175 10 195 10 200 40','l hot thick')}
  return `<figure class="fig sm"><svg viewBox="0 0 ${W} 80" width="${W}" class="fx" role="img" aria-label="wire rope ${kind}">${s}</svg></figure>`}
function curtain(){let s=`<rect x="40" y="20" width="26" height="170" rx="4" class="metal"/><rect x="314" y="20" width="26" height="170" rx="4" class="metal"/>`+T(53,205,'emitter',{fs:10.5})+T(327,205,'receiver',{fs:10.5});
  for(let i=0;i<9;i++)s+=Ln([[66,32+i*18],[314,32+i*18]],{c:'l beam',d:'6 4'});s+=P('M170 120 C190 100 210 104 222 118 L216 150 L176 150 Z','hand')+T(196,170,'hand breaks beam',{fs:10.5,c:'s'});
  s+=B(380,80,120,40,'Safety controller','c1',{fs:11})+B(380,150,120,40,'Stop: clutch off,\nbrake on','c3',{fs:10.5})+A([[340,100],[378,100]])+A([[440,120],[440,148]]);return wrap(520,215,s,'Light curtain (presence-sensing device)')}
function fta(){let s=B(160,10,180,36,'Fire in storage tank','cd',{fs:11,fw:600})+Ln([[250,46],[250,62]])+P('M230 62 L270 62 L270 76 A20 14 0 0 1 230 76 Z','gate')+T(250,72,'AND',{fs:9.5,fw:600});
  s+=Ln([[250,90],[250,100],[120,100],[120,112]])+Ln([[250,100],[380,100],[380,112]])+B(50,112,140,34,'Flammable vapour','c3',{fs:11})+B(310,112,140,34,'Ignition source','c3',{fs:11})+Ln([[380,146],[380,160]])+P('M360 160 Q380 154 400 160 Q396 176 380 186 Q364 176 360 160 Z','gate')+T(380,170,'OR',{fs:9.5,fw:600});
  s+=Ln([[380,186],[380,196],[280,196],[280,206]])+Ln([[380,196],[380,206]])+Ln([[380,196],[480,196],[480,206]]);[[230,'Spark'],[330,'Static'],[430,'Hot work']].forEach(([x,t])=>s+=B(x,206,100,30,t,'b',{fs:11}));
  s+=Ln([[120,146],[120,206]])+C(120,222,14,'b')+T(120,222,'leak',{fs:9.5});return wrap(540,248,s,'Fault tree (top-down, AND / OR gates)')}
function pyramid(){const lv=[['Elimination','remove the chemical / process','c6'],['Substitution','use a less hazardous chemical','c2'],['Engineering controls','enclosure, LEV, closed transfer','c1'],['Administrative','SOPs, permits, training, rotation','c7'],['PPE','respirators, gloves, goggles','c3']];let s='';
  lv.forEach(([t,d,c],i)=>{const y=10+i*40,w1=110+i*56,w2=w1+56,cx=205;s+=P(`M${cx-w1/2} ${y} L${cx+w1/2} ${y} L${cx+w2/2} ${y+36} L${cx-w2/2} ${y+36} Z`,c)+T(cx,y+18,t,{fs:11,fw:600})+T(420,y+18,d,{a:'start',fs:11,c:'s'})});
  s+=A([[640,20],[640,200]],{c:'l'})+T(632,12,'most effective',{a:'end',fs:10,c:'s'})+T(632,208,'least effective',{a:'end',fs:10,c:'s'});return wrap(660,218,s,'Hierarchy of control of chemical hazards')}
function extinguisher(){let s=`<rect x="80" y="50" width="70" height="160" rx="30" class="ext"/><rect x="80" y="110" width="70" height="20" class="band"/>`+P('M100 50 L100 32 L140 32 L150 22 L156 28 L140 42 L130 42 L130 50','b')+P('M140 36 C190 36 200 80 200 120','l thick')+C(122,38,6,'gauge');
  [[[150,26],'operating lever + safety pin'],[[128,38],'pressure gauge'],[[200,120],'hose / horn / nozzle'],[[150,120],'colour band = agent type'],[[150,170],'cylinder: agent + expellant']].forEach(([[x,y],t],i)=>s+=Ln([[x,y],[250,24+i*40]],{c:'l thin'})+T(256,24+i*40,t,{a:'start',fs:11}));
  return wrap(470,225,s,'Portable fire extinguisher')}

/* ---------- CST ---------- */
function nist(){let s=B(10,10,130,60,'Cloud\nConsumer','c1',{fs:11.5,fw:600})+B(10,82,130,96,'Cloud Auditor\n• security audit\n• privacy impact\n• performance','c7',{fs:10.5})+B(470,10,140,100,'Cloud Broker\n• intermediation\n• aggregation\n• arbitrage','c5',{fs:10.5});
  s+=`<rect x="160" y="10" width="290" height="168" rx="8" class="c8"/>`+T(305,24,'Cloud Provider',{fs:12,fw:600});s+=B(172,38,160,26,'SaaS','c2',{fs:10.5,r:4})+B(172,68,160,26,'PaaS','c2',{fs:10.5,r:4})+B(172,98,160,26,'IaaS','c2',{fs:10.5,r:4})+B(172,128,160,20,'Resource abstraction & control','b',{fs:9.5,r:4})+B(172,152,160,20,'Physical resources','b',{fs:9.5,r:4});
  s+=B(340,38,100,134,'Service\nmanagement\n• business support\n• provisioning\n• portability','b',{fs:9.5,r:4})+B(10,192,600,30,'Cloud Carrier: network connectivity and transport','cd',{fs:11})+T(305,186,'',{});
  s+=Ln([[140,40],[158,40]],{d:'4 3'})+Ln([[450,60],[468,60]],{d:'4 3'})+Ln([[140,130],[158,130]],{d:'4 3'});return wrap(620,232,s,'NIST cloud computing reference architecture (five actors)')}
function respGrid(){const L=['Applications','Data','Runtime','Middleware','OS','Virtualisation','Servers / storage','Networking'],cols=['On-prem','IaaS','PaaS','SaaS'],you=[8,4,2,0];let s='';
  cols.forEach((c,j)=>{s+=T(170+j*100,16,c,{fs:12,fw:600});L.forEach((l,i)=>s+=`<rect x="${125+j*100}" y="${28+i*24}" width="90" height="20" rx="4" class="${i<you[j]?'cd':'c1'}"/>`)});
  L.forEach((l,i)=>s+=T(118,38+i*24,l,{a:'end',fs:10.5}));s+=`<rect x="125" y="226" width="14" height="12" rx="3" class="cd"/>`+T(144,232,'you manage',{a:'start',fs:10.5})+`<rect x="240" y="226" width="14" height="12" rx="3" class="c1"/>`+T(259,232,'provider manages',{a:'start',fs:10.5});
  return wrap(530,245,s,'Responsibility split across service models')}
function boundaries(){let s=`<rect x="20" y="40" width="200" height="90" rx="8" class="c1"/>`+T(120,56,'Consumer organisational boundary',{fs:10.5,fw:600})+B(50,74,140,36,'on-premise servers','b',{fs:10.5})+`<rect x="280" y="40" width="200" height="90" rx="8" class="c2"/>`+T(380,56,'Provider organisational boundary',{fs:10.5,fw:600})+B(310,74,140,36,'cloud VMs, storage','b',{fs:10.5});
  s+=P('M10 22 H252 V66 H464 V142 H10 Z','trust')+T(130,14,"consumer's trust boundary (extends into the cloud)",{fs:10.5,c:'s'})+Ln([[190,92],[310,92]],{d:'4 3'});return wrap(500,150,s,'Organisational vs trust boundaries')}
function storageVirt(){let s='';['App 1','App 2','App 3'].forEach((t,i)=>s+=B(60+i*140,10,110,32,t,'c1',{fs:11}));s+=B(40,66,440,30,'Logical volumes / virtual disks (LUNs)','b',{fs:11})+B(40,118,440,46,'VIRTUALIZATION LAYER: mapping logical → physical, pooling,\nthin provisioning, snapshots, replication','cd',{fs:10.5});
  ['Disk array','SAN array','NAS device'].forEach((t,i)=>s+=B(60+i*140,188,110,36,t,'c7',{fs:11})+A([[115+i*140,166],[115+i*140,186]]));[0,1,2].forEach(i=>s+=A([[115+i*140,42],[115+i*140,64]]));s+=A([[260,96],[260,116]]);
  return wrap(520,234,s,'Storage virtualization')}
function hdfs(){let s=B(150,10,220,44,'NameNode (master)\nnamespace, block map','cd',{fs:11})+B(10,10,96,44,'Client','c1',{fs:11})+B(400,10,120,44,'Secondary\nNameNode','b',{fs:10.5});
  s+=A([[106,32],[148,32]])+T(127,22,'metadata',{fs:9,c:'s'})+Ln([[370,32],[398,32]],{d:'4 3'});
  [['B1 B2',0],['B1 B3',1],['B2 B3',2]].forEach(([b,i])=>{const x=40+i*165;s+=B(x,110,140,60,'DataNode '+(i+1)+'\n'+b,'c2',{fs:11})+A([[x+70,108],[260,56]],{c:'l',d:'4 3'})});
  s+=A([[64,54],[100,108]])+T(70,86,'read / write blocks',{a:'start',fs:10,c:'s'})+T(260,190,'blocks of 128 MB, each replicated 3 times; heartbeats + block reports to NameNode',{fs:10.5,c:'s'});return wrap(530,200,s,'HDFS architecture')}
function mapreduce(){const col=(x,t)=>T(x,14,t,{fs:11,fw:600});let s=col(60,'Input splits')+col(210,'Map')+col(370,'Shuffle & sort')+col(510,'Reduce');
  const sp=['Deer Bear River','Car Car River','Deer Car Bear'],mp=['Deer,1 Bear,1 River,1','Car,1 Car,1 River,1','Deer,1 Car,1 Bear,1'],sh=['Bear [1,1]','Car [1,1,1]','Deer [1,1]','River [1,1]'],rd=['Bear 2','Car 3','Deer 2','River 2'];
  sp.forEach((t,i)=>{s+=B(10,30+i*56,100,40,t,'c7',{fs:10.5})+B(140,30+i*56,140,40,mp[i],'c1',{fs:9.5})+A([[110,50+i*56],[138,50+i*56]])});
  sh.forEach((t,i)=>{s+=B(310,26+i*42,120,32,t,'c5',{fs:10.5})+B(460,26+i*42,100,32,rd[i],'c6',{fs:11,fw:600})+A([[430,42+i*42],[458,42+i*42]])});
  [0,1,2].forEach(i=>[0,1,2,3].forEach(j=>{if((i+j)%2===0)s+=Ln([[280,50+i*56],[308,42+j*42]],{c:'l thin'})}));return wrap(570,200,s,'MapReduce word count: logical data flow')}
function isp(){let s=B(180,10,200,36,'Tier 1: backbone ISPs (core)','cd',{fs:11})+B(40,76,200,34,'Tier 2: regional ISP','c1',{fs:11})+B(320,76,200,34,'Tier 2: regional ISP','c1',{fs:11})+B(40,138,200,34,'Tier 3: local ISP','c2',{fs:11})+B(320,138,200,34,'Tier 3: local ISP','c2',{fs:11});
  s+=B(40,200,200,34,'Cloud consumer (LAN)','c7',{fs:11})+B(320,200,200,34,'Cloud provider data centre','c6',{fs:11});[[140,76],[420,76]].forEach(([x])=>s+=Ln([[x,76],[280,46]]));s+=Ln([[140,110],[140,138]])+Ln([[420,110],[420,138]])+Ln([[140,172],[140,200]])+Ln([[420,172],[420,200]])+Ln([[240,93],[320,93]],{d:'4 3'});
  s+=T(280,250,'packets routed hop by hop (TCP/IP) through interconnected routers',{fs:10.5,c:'s'});return wrap(560,262,s,'Internet architecture: hierarchy of ISPs')}
function euca(){let s=B(150,10,240,36,'Clients: euca2ools, AWS tools, console','b',{fs:10.5})+B(150,66,240,40,'CLOUD CONTROLLER (CLC)','cd',{fs:11.5,fw:600})+B(420,66,120,40,'Walrus\n(S3-like)','c7',{fs:10.5})+A([[270,46],[270,64]])+Ln([[390,86],[418,86]]);
  [0,1].forEach(i=>{const x=60+i*240;s+=B(x,130,180,40,'Cluster Ctrl (CC)\n+ Storage Ctrl (SC)','c1',{fs:10.5})+Ln([[270,106],[x+90,128]]);[0,1,2].forEach(j=>s+=B(x+j*62,196,56,40,'NC\nVMs','c2',{fs:10})+Ln([[x+90,170],[x+28+j*62,194]]))});
  return wrap(560,246,s,'Eucalyptus architecture (EC2/S3-compatible)')}
function secRel(){let s=B(10,20,130,40,'Threat agent','c3',{fs:11})+B(190,20,110,40,'Threat','c3',{fs:11})+B(350,20,130,40,'Vulnerability','c7',{fs:11})+B(350,110,130,40,'IT resource','c1',{fs:11})+B(190,110,110,40,'Risk','c4',{fs:11});
  s+=A([[140,40],[188,40]])+T(164,30,'poses',{fs:9.5,c:'s'})+A([[300,40],[348,40]])+T(324,30,'exploits',{fs:9.5,c:'s'})+A([[415,60],[415,108]])+A([[245,60],[245,108]])+T(252,84,'increases',{a:'start',fs:9.5,c:'s'});
  s+=B(10,190,140,40,'Security policy','c5',{fs:11})+B(190,190,140,40,'Security controls','c2',{fs:11})+B(370,190,150,40,'Mechanisms: encryption,\nIAM, firewall, IDS','c6',{fs:10})+A([[150,210],[188,210]])+A([[330,210],[368,210]])+A([[445,188],[445,152]])+T(452,170,'protect',{a:'start',fs:9.5,c:'s'});
  return wrap(530,240,s,'Threats, vulnerabilities, risks and countermeasures')}
function aws(){const g=[['Compute','EC2, AMI, Auto Scaling,\nLambda, Beanstalk','c1'],['Storage','S3, EBS, EFS, Glacier','c7'],['Database','RDS, DynamoDB,\nSimpleDB, Redshift','c5'],['Networking','VPC, Route 53,\nCloudFront, ELB','c2'],['App services','SQS, SNS, SES','c6'],['Mgmt & security','IAM, CloudWatch,\nCloudTrail, CloudFormation','c3']];
  let s=B(10,10,560,30,'Users / apps: console, CLI, SDK, APIs','b',{fs:11});g.forEach(([t,d,c],i)=>{const x=10+(i%3)*190,y=56+Math.floor(i/3)*82;s+=`<rect x="${x}" y="${y}" width="180" height="70" rx="8" class="${c}"/>`+T(x+90,y+16,t,{fs:11.5,fw:600})+T(x+90,y+44,d,{fs:10})});
  s+=B(10,226,560,28,'Global infrastructure: Regions → Availability Zones → data centres','cd',{fs:10.5});return wrap(580,262,s,'AWS ecosystem')}
function azure(){let s=B(10,10,600,30,'Applications / users (browser, REST, SDK)','b',{fs:11});[['Compute','Web role, Worker role,\nVM role, App Service','c1'],['Storage','Blobs, Tables,\nQueues, Files','c7'],['Networking','Virtual Network,\nCDN, Traffic Mgr','c2'],['App / data','SQL Database,\nAppFabric (Service Bus)','c5']].forEach(([t,d,c],i)=>{const x=10+i*152;s+=`<rect x="${x}" y="54" width="144" height="76" rx="8" class="${c}"/>`+T(x+72,70,t,{fs:11.5,fw:600})+T(x+72,102,d,{fs:10})});
  s+=B(10,144,600,34,'FABRIC CONTROLLER: deploys, monitors, scales and heals role instances','cd',{fs:11})+B(10,190,600,30,'Hyper-V based hypervisor on servers in global data centres','c8',{fs:10.5});return wrap(620,230,s,'Microsoft Azure platform architecture')}
function gae(){let s=B(10,10,140,36,'Users (HTTP)','b',{fs:11})+B(180,10,200,36,'Google Front End + load balancing','c1',{fs:10.5})+B(130,70,300,46,'App instances in sandboxed runtimes\n(Python, Java, Go, PHP, Node.js)','cd',{fs:10.5})+A([[150,28],[178,28]])+A([[280,46],[280,68]]);
  [['Datastore / Firestore,\nCloud SQL','c5'],['Memcache','c7'],['Task Queues, Cron,\nMail, URL Fetch, Users','c2']].forEach(([t,c],i)=>{s+=B(10+i*190,146,180,46,t,c,{fs:10})+A([[280,116],[100+i*190,144]])});
  s+=B(410,70,150,46,'Developer: SDK /\ngcloud deploy, console','c6',{fs:10})+A([[410,93],[432,93]]);return wrap(580,202,s,'Google App Engine (PaaS)')}

return {flow,stacks,tree,cycle,ivFamily,ivMpp,powerCurve,cell,equiv,fpc,ptc,tower,standalone,pyrano,pyrhelio,sunshine,otecClosed,otecOpen,otecHybrid,tidalSingle,tidalDouble,tides,
  streamTube,hawt,airfoil,savonius,propeller,darrieus,multiblade,anemometer,gasifier,kvic,fixedDome,fuelCell,electrolysis,francis,kaplan,pelton,crossflow,shpLayout,
  domino,orgChart,scaffold,goggles,weldHelmet,rope,curtain,fta,pyramid,extinguisher,nist,respGrid,boundaries,storageVirt,hdfs,mapreduce,isp,euca,secRel,aws,azure,gae};
})();
