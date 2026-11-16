/* ================= APP (multi-subject) ================= */
const $=s=>document.querySelector(s);
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const PRINT=!!window.PRINT_MODE;
const store={get(k,d){try{const v=localStorage.getItem('pyq:'+k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('pyq:'+k,JSON.stringify(v))}catch(e){}}};
const ROMAN=['','I','II','III','IV','V'];
const SUBS=['AIT401','CST423','EET435','MCN401'].filter(c=>SUBJ[c]);
const SCOL={AIT401:'var(--s-ait)',CST423:'var(--s-cst)',EET435:'var(--s-eet)',MCN401:'var(--s-mcn)'};
let SUB,PAPERS,MODS,QB,PBY,ORDER,OCC,OBY;
const isExam=pid=>!PBY[pid].model;

/* ---- point-wise answers: long paragraphs become short bullets, long bullets get sub-points ---- */
const POINTS=(()=>{
  const ABBR=/(?:\b(?:e\.g|i\.e|etc|vs|viz|cf|approx|Fig|fig|Figs|Eq|eq|Eqs|No|Nos|Dr|Mr|Ms|St|al|Ltd|Inc|Sec|resp|esp|incl|Co|Corp|Dept|Govt|min|max|avg|wrt|w\.r\.t|ft|in|sq|mm|Vol|Ch|pp|Ref|Std)|(?:^|[\s(])[A-Z])\.$/;
  const START=/^["“‘(]?[A-Z0-9∂∇√ΔΣΩαβγδηλμσθπρω]/;
  const BOUND=/([.!?])(["”’)]?)(\s+)|(;)(\s+)/g;
  const semis=el=>[...el.childNodes].filter(n=>n.nodeType===3).map(n=>n.nodeValue.split(';').length-1).reduce((a,b)=>a+b,0);
  const BLOCK='table,figure,svg,ul,ol,img,.eqb,.tw,.calc,div,canvas';
  const txt=n=>n?n.textContent:'';
  function split(el){const out=[];let cur=[];const kids=[...el.childNodes],semi=semis(el)>=2;
    const push=()=>{if(cur.some(n=>n.nodeType===1||n.nodeValue.trim()))out.push(cur);cur=[]};
    kids.forEach((n,k)=>{
      if(n.nodeType===1&&n.tagName==='BR'){push();return}
      if(n.nodeType!==3){cur.push(n);return}
      const t=n.nodeValue;let last=0,m;BOUND.lastIndex=0;
      while((m=BOUND.exec(t))){
        if(m[4]){if(!semi)continue;cur.push(document.createTextNode(t.slice(last,m.index)));push();last=m.index+m[0].length;continue}
        const end=m.index+m[1].length+m[2].length,rest=t.slice(m.index+m[0].length);
        const nextTxt=rest.length?rest:txt(kids[k+1]);
        const before=cur.map(txt).join('')+t.slice(last,m.index+1);
        if(!START.test(nextTxt.trimStart())||ABBR.test(before.slice(-14)))continue;
        if(rest.length===0&&!(kids[k+1]&&kids[k+1].nodeType===1&&/^(B|STRONG|I|EM|CODE|SPAN|A|SUB|SUP)$/.test(kids[k+1].tagName)))continue;
        cur.push(document.createTextNode(t.slice(last,end)));push();last=m.index+m[0].length}
      if(last<t.length)cur.push(document.createTextNode(t.slice(last)))});
    push();return out}
  const li=(nodes,cls)=>{const e=document.createElement('li');nodes.forEach(n=>e.appendChild(n));if(cls)e.className=cls;return e};
  const trimStart=nodes=>{const f=nodes[0];if(f&&f.nodeType===3){f.nodeValue=f.nodeValue.replace(/^\s+/,'').replace(/^([a-z])(?=[a-z]+\b)/,c=>c.toUpperCase())}return nodes};
  function para(p,first){
    if(p.className||p.querySelector(BLOCK))return;
    const S=split(p);if(S.length<2)return;
    const frag=document.createDocumentFragment();
    // a bold "Label:" opening the paragraph becomes a small heading for its points
    const f0=S[0][0];
    if(f0&&f0.nodeType===1&&/^(B|STRONG)$/.test(f0.tagName)&&/:\s*$/.test(f0.textContent)){
      const h=document.createElement('p');h.className='lbl';h.appendChild(f0);frag.appendChild(h);S[0].shift();trimStart(S[0]);
      if(!S[0].length||!S[0].some(n=>txt(n).trim()))S.shift()}
    else if(first){const lead=document.createElement('p');lead.className='lead';S.shift().forEach(n=>lead.appendChild(n));frag.appendChild(lead)}
    let tail=null;if(S.length&&/:\s*$/.test(S[S.length-1].map(txt).join(''))){tail=document.createElement('p');S.pop().forEach(n=>tail.appendChild(n))}
    if(S.length){const ul=document.createElement('ul');ul.className='pts';S.forEach(s=>ul.appendChild(li(trimStart(s))));frag.appendChild(ul)}
    if(tail)frag.appendChild(tail);
    p.replaceWith(frag)}
  function item(e){
    if(e.querySelector(BLOCK)||e.textContent.length<110)return;
    const S=split(e);if(S.length<2)return;
    const f0=S[0][0];let head;
    if(semis(e)>=2&&f0&&f0.nodeType===1&&/^(B|STRONG)$/.test(f0.tagName)&&/:\s*$/.test(f0.textContent)){head=[S[0].shift()];trimStart(S[0])}else head=S.shift();e.textContent='';head.forEach(n=>e.appendChild(n));
    const ul=document.createElement('ul');ul.className='sub';S.forEach(s=>ul.appendChild(li(trimStart(s))));e.appendChild(ul)}
  return html=>{if(!html||typeof html!=='string')return html;const d=document.createElement('div');d.innerHTML=html;
    const ps=[...d.children].filter(e=>e.tagName==='P');ps.forEach((p,i)=>para(p,i===0&&d.firstElementChild===p));
    d.querySelectorAll('ul:not(.sub)>li,ol>li').forEach(e=>{if(!e.closest('table,figure'))item(e)});
    /* labels on top: draw each figure's text after its lines so the label halo can mask them */
    d.querySelectorAll('svg').forEach(svg=>[...svg.children].filter(e=>e.tagName.toLowerCase()==='text').forEach(t=>svg.appendChild(t)));
    return d.innerHTML}})();

/* build occurrences once per subject */
function prep(code){const X=SUBJ[code];if(X._occ)return X;applyFigs(X);X.QB.forEach(q=>{if(q.a)q.a=POINTS(q.a);if(q.a3)q.a3=POINTS(q.a3);if(q.qr)q.qr=QRF(q.qr);if(q.qr3)q.qr3=QRF(q.qr3)});
  const pby=Object.fromEntries(X.PAPERS.map(p=>[p.id,p])),order=X.PAPERS.map(p=>p.id),exam=pid=>!pby[pid].model,occ=[],oby={};
  /* Part A is always two per module: Q1–2 Module 1, Q3–4 Module 2, … Q9–10 Module 5 */
  X.PAPERS.forEach(P=>{P.A.forEach(([t],i)=>occ.push({key:`${P.id}:Q${i+1}`,pid:P.id,qno:i+1,sub:'',label:`Q${i+1}`,text:t,mk:3,part:'A',m:Math.ceil((i+1)/2)}));
    P.B.forEach(([m,qs])=>qs.forEach(([qno,parts])=>parts.forEach(([sub,t,mk])=>occ.push({key:`${P.id}:Q${qno}${sub}`,pid:P.id,qno,sub,label:`Q${qno}${sub?' '+sub:''}`,text:t,mk,part:'B',m}))))});
  occ.forEach(o=>oby[o.key]=o);
  const byk={};X.QB.forEach(c=>{c.s.forEach(k=>{(byk[k]=byk[k]||[]).push(c)});c.exams=[...new Set(c.s.map(k=>k.split(':')[0]).filter(exam))];c.rep=c.exams.length;
    c.text=(c.q+' '+[c.a,c.a3,c.qr,c.qr3].map(x=>(x||'').replace(/<[^>]+>/g,' ')).join(' ')).toLowerCase()});
  occ.forEach(o=>{o.cards=byk[o.key]||[];o.rep=Math.max(0,...o.cards.map(c=>c.rep));
    o.others=[...new Set(o.cards.flatMap(c=>c.s))].filter(k=>k!==o.key&&oby[k]).sort((a,b)=>order.indexOf(a.split(':')[0])-order.indexOf(b.split(':')[0])||oby[a].qno-oby[b].qno);
    o.search=(o.text+' '+o.cards.map(c=>c.text).join(' ')).toLowerCase()});
  const ex=X.PAPERS.filter(p=>!p.model),yrs=ex.map(p=>p.year);
  Object.assign(X,{_occ:occ,_oby:oby,_pby:pby,_order:order,_n:{papers:ex.length,q:occ.filter(o=>exam(o.pid)).length,r:X.QB.filter(c=>c.rep>=2).length,r3:X.QB.filter(c=>c.rep>=3).length,
    span:`${ex[ex.length-1].short} – ${ex[0].short}`}});
  return X}
function load(code){SUB=prep(code);({PAPERS,MODS,QB}=SUB);PBY=SUB._pby;ORDER=SUB._order;OCC=SUB._occ;OBY=SUB._oby}

const S={sub:store.get('sub','AIT401'),view:'mod',mod:'1',part:store.get('part','all'),rep:false,quiz:store.get('quiz',false),q:'',paper:'',tmod:'all',tog:new Set(),ptog:new Set()};
if(!SUBJ[S.sub])S.sub=SUBS[0];
const firstPaper=()=>PAPERS.find(p=>!p.model).id;
const occLabel=k=>{const o=OBY[k];return `${PBY[o.pid].short} · ${o.label}`};

/* helpers */
const CHEV='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ARROW='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const fmtM=v=>{const w=Math.floor(v),f=v-w;return (w||!f?String(w||''):'')+(f===.5?'½':'')||'0'};
function split(ms,mk){if(!ms)return '';const tot=ms.reduce((a,b)=>a+b[1],0);
  return `<div class="split"><span class="sl">How to score${tot!==mk?` <i>(split for ${fmtM(tot)}; scale to ${mk})</i>`:''}</span>${ms.map(([l,v])=>`<span class="chipm">${l}<b>${fmtM(v)}</b></span>`).join('')}</div>`}
function variant(o,c){const A=o.part==='A',q=A?(c.qr3||(!c.a3&&c.qr)):c.qr;return A&&c.a3?{a:c.a3,ms:c.ms3,v:'3',q}:{a:c.a,ms:c.ms,v:'L',q}}
/* quick-revision answer first (with the original diagrams), the full answer under "Full answer" */
function ansHTML(V){if(!V.q)return V.a;const d=document.createElement('div');d.innerHTML=V.a;const figs=[...d.querySelectorAll('figure.fig')].map(f=>{const h=f.outerHTML;f.remove();return h}).join('');
  let q=V.q;const i=q.indexOf('</p>');q=figs?(i>0?q.slice(0,i+4)+figs+q.slice(i+4):figs+q):q;
  return `<div class="qr">${q}</div>`+(PRINT?'':`<details class="more"><summary>Full answer</summary><div class="morein">${d.innerHTML}</div></details>`)}
/* quick-revision mini format: plain lines = intro, "# " numbered point, "- " bullet, "Ex: " example, "= " conclusion, "@ " memory line */
function QRF(t){if(!t)return t;let h='',k=0,ul=false;const end=()=>{if(ul){h+='</ul>';ul=false}};
  t.trim().split('\n').map(l=>l.trim()).filter(Boolean).forEach(l=>{
    if(l.startsWith('# ')){end();h+=`<h5 class="qh"><span>${++k}</span>${l.slice(2)}</h5>`}
    else if(l.startsWith('- ')||l.startsWith('Ex: ')){if(!ul){h+='<ul class="qb">';ul=true}h+=l.startsWith('Ex: ')?`<li class="ex"><i>Example:</i> ${l.slice(4)}</li>`:`<li>${l.slice(2)}</li>`}
    else if(l.startsWith('= ')){end();h+=`<p class="qc"><b>Conclusion:</b> ${l.slice(2)}</p>`}
    else if(l.startsWith('@ ')){end();h+=`<p class="qm"><b>Easy way to remember:</b> ${l.slice(2)}</p>`}
    else{end();h+=`<p class="qi">${l}</p>`}});end();return h}
let toastT;function toast(m){const t=$('#toast');if(!t)return;t.textContent=m;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),1800)}
function setHash(h){try{history.replaceState(null,'','#'+h)}catch(e){}}
function moveInd(sel,btn){const w=$(sel);if(!w)return;const ind=w.querySelector('.ind'),a=w.querySelector(btn+'[aria-pressed="true"]');if(!ind||!a)return;ind.style.width=a.offsetWidth+'px';ind.style.transform=`translateX(${a.offsetLeft}px)`}
function measure(){const t=$('#top');if(t)document.documentElement.style.setProperty('--hh',t.offsetHeight+'px')}

/* -------- one question row -------- */
function rowHTML(o,shown,opt={}){
  const rep=o.rep>=2?`<span class="rep" title="Asked in ${o.rep} university exams">Asked ${o.rep}×</span>`:'';
  const also=o.others.length?`<div class="also"><span class="l">Also asked:</span>${o.others.map(k=>`<button type="button" class="yr${isExam(k.split(':')[0])?'':' mq'}" data-jump="${k}">${occLabel(k)}<i>${OBY[k].mk}</i></button>`).join('')}</div>`:'';
  let ans='';
  o.cards.forEach((c,ci)=>{const V=variant(o,c),sk=c.id+V.v,first=shown?!shown.has(sk):true;if(shown&&first)shown.set(sk,o.key);
    const topic=o.cards.length>1?`<div class="topic">Part ${ci+1} of this question: ${c.q}</div>`:'';
    if(!first){const fk=shown.get(sk);ans+=`${topic}<div class="same">↑ Same question as <button type="button" class="lnk" data-jump="${fk}">${occLabel(fk)}</button>: see the answer there.${PRINT?'':` <button type="button" class="lnk" data-tg="${o.key}|${ci}">Show it here</button>`}</div>`;
      if(!PRINT)ans+=`<div class="answ" data-a="${o.key}|${ci}"><div class="ansin"><div class="body">${split(V.ms,o.mk)}${ansHTML(V)}</div></div></div>`;return}
    const id=o.key+'|'+ci,open=PRINT||(S.quiz?S.tog.has(id):!S.tog.has(id));
    ans+=topic+(PRINT?'':`<button type="button" class="reveal" data-tg="${id}" aria-expanded="${open}">${CHEV}<span>${open?'Hide answer':'Show answer'}</span></button>`)+`<div class="answ${open?' open':''}" data-a="${id}"><div class="ansin"><div class="body">${split(V.ms,o.mk)}${ansHTML(V)}</div></div></div>`});
  if(!o.cards.length)ans='<div class="same">No answer available.</div>';
  return `<article class="row" id="o-${o.key.replace(':','-')}" style="--mc:var(--m${o.m})">
    <div class="rtop"><span class="qn">${o.label}</span><div class="qt">${o.text}</div><span class="mkb${o.part==='B'?' long':''}">${o.mk}</span></div>
    ${rep||also?`<div class="meta">${rep}${also}</div>`:''}${opt.paperlink?`<div class="meta"><button type="button" class="lnk" data-open-mod="${o.key}">Open in Module ${o.m} →</button></div>`:''}
    <div class="ans">${ans}</div></article>`}

/* -------- module view: year by year -------- */
function visibleOcc(o){if(S.rep&&o.rep<2)return false;if(S.q&&!o.search.includes(S.q))return false;return true}
function moduleHTML(m,print){const M=MODS[m-1],shown=new Map();let h='';
  const hot=QB.filter(c=>c.m===m&&c.rep>=2).sort((a,b)=>b.rep-a.rep||b.s.length-a.s.length).slice(0,8);
  h+=`<section class="mod" style="--mc:var(--m${m})"><header class="mhead"><div class="k">${SUB.code} · Module ${ROMAN[m]}</div><h2>${M.title}</h2>${print?`<p class="syl">${M.syl}</p>`:`<details class="syld"><summary>Syllabus</summary><p>${M.syl}</p></details>`}
    ${hot.length?`<div class="hot"><span class="l">Most repeated:</span>${hot.map(c=>{const fk=c.s.slice().sort((a,b)=>ORDER.indexOf(a.split(':')[0])-ORDER.indexOf(b.split(':')[0]))[0];return `<button type="button" class="hotc" data-jump="${fk}">${c.q.length>58?c.q.slice(0,55)+'…':c.q}<b>${c.rep}×</b></button>`}).join('')}</div>`:''}</header>`;
  const DLI='<svg viewBox="0 0 24 24"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>';
  if(!print&&SUB.modPdf)h=h.replace(/<\/header>$/,`<div class="mdl"><span class="l">Download Module ${ROMAN[m]} with answers:</span>${['A','B'].map(p=>`<button type="button" class="pill sm${p==='A'?' dark':''}" data-mdl="${m}${p}">${DLI}Part ${p} PDF${p==='A'?' · 3 marks':' · 14 marks'}</button>`).join('')}${SUB.allA?`<button type="button" class="pill sm" data-alla="1">${DLI}All modules · 3 marks PDF</button>`:''}</div></header>`);
  for(const part of ['A','B']){if(print?(window.PRINT_PART&&window.PRINT_PART!==part):(S.part!=='all'&&S.part!==part))continue;
    const all=OCC.filter(o=>o.m===m&&o.part===part),vis=print?all:all.filter(visibleOcc);
    h+=`<div class="parth"><span class="pill">${part==='A'?'Part A':'Part B'}</span><span>${part==='A'?'3-mark questions':'Long questions (14 marks per question)'}</span><span class="cnt">${vis.length}</span></div>`;
    let any=false;
    for(const P of PAPERS){const os=vis.filter(o=>o.pid===P.id);if(!os.length)continue;any=true;
      h+=`<div class="yb"><div class="ybh"><span class="yy">${P.short}</span><span class="yt">${P.type}</span><span class="yq">${part==='A'?os.map(o=>o.label).join(', '):'Q'+[...new Set(os.map(o=>o.qno))].join(' or Q')}</span></div>`;
      if(part==='A')h+=os.map(o=>rowHTML(o,shown)).join('');
      else{const qs=[...new Set(os.map(o=>o.qno))];qs.forEach((q,i)=>{if(i)h+='<div class="or">OR</div>';h+=os.filter(o=>o.qno===q).map(o=>rowHTML(o,shown)).join('')})}
      h+='</div>'}
    if(!any)h+='<div class="empty">No questions match. Clear the search or turn off “Repeated only”.</div>'}
  return h+'</section>'}

/* -------- papers view -------- */
function paperHTML(P,withAns){let h=`<div class="sheet"><div class="reg"><span>Reg No.:</span><span>${P.qp||''}</span></div>
  <div class="uni"><div class="u">APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY</div><div class="e">${P.exam}</div><div class="c">Course Code: ${P.code}</div><div class="c">Course Name: ${SUB.name.toUpperCase()}</div></div>
  <div class="mm"><span>Max. Marks: 100</span><span>Duration: 3 Hours</span></div>${P.note&&!/Part A/.test(P.note)?`<p class="pnote">${P.note}</p>`:''}
  <div class="ph">PART A</div><p class="pi">Answer all questions, each carries 3 marks.</p>`;
  const prow=(o,first)=>{const tid='p|'+o.key,op=S.ptog.has(tid);let t=`<div class="prow" id="p-${o.key.replace(':','-')}"><span class="no">${first?o.qno+'.':''}</span><span class="sub">${o.sub?o.sub+')':''}</span><span class="txt">${o.text}</span><span class="pm">(${o.mk})</span>`;
    if(withAns){t+=`<span class="tools"><span class="tm">Module ${o.m}</span>${o.rep>=2?`<span class="rep">Asked ${o.rep}×</span>`:''}<button type="button" class="pbtn" data-pt="${tid}" aria-expanded="${op}">${CHEV}${op?'Hide answer':'Answer'}</button><button type="button" class="lnk" data-open-mod="${o.key}">Module view →</button></span>`;
      t+=`<div class="answ${op?' open':''}" data-pa="${tid}"><div class="ansin"><div class="body">${o.cards.map((c,ci)=>{const V=variant(o,c);return (o.cards.length>1?`<div class="topic">Part ${ci+1}: ${c.q}</div>`:'')+split(V.ms,o.mk)+ansHTML(V)}).join('')}</div></div></div>`}
    return t+'</div>'};
  OCC.filter(o=>o.pid===P.id&&o.part==='A').forEach(o=>h+=prow(o,true));
  h+=`<div class="ph">PART B</div><p class="pi">Answer any one full question from each module, each carries 14 marks.</p>`;
  P.B.forEach(([m,qs])=>{h+=`<div class="pmod">Module ${ROMAN[m]}</div>`;qs.forEach(([qno,parts],j)=>{if(j)h+='<div class="or">OR</div>';OCC.filter(o=>o.pid===P.id&&o.part==='B'&&o.qno===qno).forEach((o,k)=>h+=prow(o,k===0))})});
  return h+'<div class="end">****</div></div>'}

/* -------- repeat table -------- */
function tableHTML(){const rows=QB.filter(c=>c.rep>=1&&(S.tmod==='all'||c.m===+S.tmod));let b='';
  for(const M of MODS){if(S.tmod!=='all'&&M.n!==+S.tmod)continue;const rs=rows.filter(c=>c.m===M.n).sort((a,b)=>b.rep-a.rep);if(!rs.length)continue;
    b+=`<tr class="mrow" style="--mc:var(--m${M.n})"><td colspan="${ORDER.length+2}">Module ${ROMAN[M.n]} · ${M.title}</td></tr>`;
    b+=rs.map(c=>`<tr><td class="qc" style="--mc:var(--m${c.m})"><button type="button" data-jump="${c.s.slice().sort((x,y)=>ORDER.indexOf(x.split(':')[0])-ORDER.indexOf(y.split(':')[0]))[0]}"><i></i><span>${c.q}</span></button></td>${ORDER.map(pid=>{const ks=c.s.filter(k=>k.startsWith(pid+':'));return `<td>${ks.length?ks.map(k=>`<button type="button" class="cell${isExam(pid)?'':' mq'}" data-paper-jump="${k}">${OBY[k].label.replace(' ','')}<small>${OBY[k].mk}</small></button>`).join(' '):'<span class="cell none">–</span>'}</td>`}).join('')}<td><span class="tot${c.rep>=3?' hi3':c.rep>=2?' hi':''}">${c.rep}×</span></td></tr>`).join('')}
  const model=PAPERS.some(p=>p.model);
  return `<div class="mx"><table class="m"><thead><tr><th class="qc">Topic</th>${ORDER.map(pid=>`<th>${PBY[pid].short}<small>${PBY[pid].model?'not an exam':PBY[pid].type.split(' (')[0]}</small></th>`).join('')}<th>Exams</th></tr></thead><tbody>${b}</tbody></table></div>
   <div class="legend"><span><span class="cell">Q4<small>3</small></span> question number and marks</span><span><span class="tot hi3">3×</span> asked in 3+ exams</span><span><span class="tot hi">2×</span> asked in 2 exams</span>${model?'<span>Model QP is shown but not counted.</span>':''}</div>`}

/* -------- home sections (reference-style landing) -------- */
const SBG={AIT401:'#e9edfc',CST423:'#e3f2f9',EET435:'#e6f4ea',MCN401:'#fbefe1'};
function subjArt(c){const k=SCOL[c];
  const scenes={
   AIT401:`<g stroke="${k}" stroke-width="1.4" opacity=".55">${[[60,70],[60,110],[60,150]].flatMap(a=>[[150,55],[150,95],[150,135],[150,175]].map(b=>`<path d="M${a[0]} ${a[1]} L${b[0]} ${b[1]}"/>`)).join('')}${[[150,55],[150,95],[150,135],[150,175]].flatMap(a=>[[240,90],[240,140]].map(b=>`<path d="M${a[0]} ${a[1]} L${b[0]} ${b[1]}"/>`)).join('')}</g><g fill="${k}">${[[60,70],[60,110],[60,150],[150,55],[150,95],[150,135],[150,175],[240,90],[240,140]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9"/>`).join('')}</g><circle cx="240" cy="140" r="15" fill="none" stroke="${k}" stroke-width="2"/>`,
   CST423:`<path d="M70 150 a30 30 0 0 1 30 -30 a42 42 0 0 1 76 6 a28 28 0 0 1 34 46 h-130 a24 24 0 0 1 -10 -22z" fill="#fff" stroke="${k}" stroke-width="2.5"/><g fill="${k}">${[0,1,2].map(i=>`<rect x="${110+i*34}" y="178" width="26" height="40" rx="3"/>`).join('')}</g><g stroke="#fff" stroke-width="2">${[0,1,2].map(i=>`<path d="M${115+i*34} 190 h16 M${115+i*34} 202 h16"/>`).join('')}</g><path d="M143 168 v10 M177 168 v10 M211 168 v10" stroke="${k}" stroke-width="2"/>`,
   EET435:`<circle cx="240" cy="60" r="22" fill="#f5c451"/><path d="M0 200 Q80 170 150 190 T300 180 L300 225 L0 225Z" fill="${k}" opacity=".35"/>${[[90,195,90],[170,190,110],[235,185,70]].map(([x,y,h])=>`<path d="M${x} ${y} L${x} ${y-h}" stroke="#7a8494" stroke-width="3"/><g fill="#fff" stroke="#7a8494"><path d="M${x} ${y-h} L${x-3} ${y-h-38} L${x+3} ${y-h-38}Z"/><path d="M${x} ${y-h} L${x+32} ${y-h+20} L${x+29} ${y-h+25}Z"/><path d="M${x} ${y-h} L${x-29} ${y-h+25} L${x-32} ${y-h+20}Z"/></g>`).join('')}<polygon points="30,215 70,195 110,205 70,225" fill="#1d4fa0" opacity=".8"/>`,
   MCN401:`<path d="M90 150 a60 55 0 0 1 120 0 z" fill="${k}"/><path d="M70 150 h160 a6 6 0 0 1 0 12 h-160 a6 6 0 0 1 0 -12z" fill="#a85d14"/><path d="M150 95 v52" stroke="#f3c48b" stroke-width="6"/><path d="M230 70 l26 10 v22 c0 18 -12 30 -26 36 c-14 -6 -26 -18 -26 -36 v-22z" fill="#fff" stroke="${k}" stroke-width="2.5"/><path d="M219 100 l8 8 l14 -16" fill="none" stroke="${k}" stroke-width="3"/>`};
  return `<svg viewBox="0 0 300 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="300" height="225" fill="${SBG[c]}"/>${scenes[c]||''}</svg>`}
function picker(){const tot=SUBS.reduce((a,c)=>a+prep(c)._n.papers,0);$('#pickn').textContent=`${SUBS.length} courses · ${tot} papers`;
  $('#picker').innerHTML=SUBS.map(c=>{const X=prep(c),n=X._n;return `<button type="button" class="scard" data-sub="${c}" aria-pressed="${S.sub===c}" style="--sc:${SCOL[c]};--sc2:${SBG[c]}">
    <span class="pic">${subjArt(c)}<span class="tag">${c}</span><span class="go">${ARROW}</span></span>
    <b>${X.name}</b><small>${X.blurb}</small><span class="sm">${n.papers} papers · ${n.q} questions</span></button>`}).join('');
  const strip=dup=>'<span>KTU</span>'+SUBS.map(c=>`<button type="button" data-sub="${c}" aria-pressed="${S.sub===c}"${dup?' tabindex="-1"':''}>${c}</button><span>${SUBJ[c].short}</span>`).join('')+'<span>2019 scheme</span><span>S7 B.Tech AI</span>';
  $('#strip').innerHTML=`<div class="marq"><div>${strip(0)}</div><div aria-hidden="true">${strip(1)}</div></div>`;
  $('#subsel').innerHTML=SUBS.map(c=>`<option value="${c}"${S.sub===c?' selected':''}>${c} · ${SUBJ[c].name}</option>`).join('')}
function modGrid(){$('#modh').textContent=`Modules in ${SUB.code}`;
  $('#mgrid').innerHTML=MODS.map(M=>{const a=OCC.filter(o=>o.m===M.n&&isExam(o.pid)),na=a.filter(o=>o.part==='A').length,nb=a.length-na,hot=QB.filter(c=>c.m===M.n&&c.rep>=2).length;
    return `<button type="button" class="mitem" data-mgo="${M.n}" aria-current="${S.view==='mod'&&S.mod===String(M.n)}" style="--mc:var(--m${M.n})"><span class="no">0${M.n}</span><span class="th">${ROMAN[M.n]}</span><span><b>${M.title}</b><small>${na} short and ${nb} long questions · ${hot} repeated topics</small></span><span class="go">${ARROW}</span></button>`}).join('')}
function figures(){const n=SUB._n,P0=PAPERS.find(p=>!p.model);
  $('#statement').innerHTML=`${SUB.code} ${SUB.name}: ${n.papers} university papers from ${n.span}, <span>every question sorted by module and answered to its marks.</span>`;
  $('#figures').innerHTML=[[n.q,'questions with answers'],[n.r,'topics asked in 2 or more exams']].map(([v,l])=>`<div class="fig1"><b data-v="${v}">${v}</b><span>${l}</span></div>`).join('')+
   `<div class="figtxt"><p>${SUB.blurb} ${n.r3} topics have come in three or more exams; they are the safest to prepare first. Each answer starts with how the marks are split, so you know how much to write.</p><button type="button" class="more" id="toRep2">See the repeat table ›</button></div>`;
  $('#books').innerHTML=SUB.books;
  $('#dl').hidden=!SUB.pdf;$('#allA').hidden=!SUB.allA;
  $('#ctaMod').textContent=`Start ${SUB.code} Module I`;
  $('#disct').innerHTML=`Open the newest paper<br>${SUB.code} · ${P0.short}`;$('#newest').textContent=P0.short;
  $('#studyh').textContent=`${SUB.code} questions and answers`;
  document.querySelectorAll('[data-sub]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.sub===S.sub));
  $('#subsel').value=S.sub;modGrid();if($('#figures').classList.contains('in'))countUp()}
function countUp(){if(RM)return;document.querySelectorAll('#figures .fig1 b').forEach(b=>{const v=+b.dataset.v;if(!v)return;const t0=performance.now();
  const f=t=>{const k=Math.min(1,(t-t0)/1100),e=1-Math.pow(1-k,3);b.textContent=Math.round(v*e);if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)})}
/* -------- exam countdown (KTU forenoon session, 09:30 IST) -------- */
const EXAMS=[['AIT401','2026-11-23'],['CST423','2026-11-25'],['EET435','2026-11-27'],['MCN401','2026-12-02']].filter(([c])=>SUBJ[c]).map(([c,d])=>({c,t:new Date(d+'T09:30:00+05:30').getTime()}));
const EXAM_LEN=3*3600e3,WINDOW=30*864e5;
function examsInit(){const el=$('#exams');if(!el||!EXAMS.length)return;
  const fmt=t=>new Date(t).toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short',year:'numeric',timeZone:'Asia/Kolkata'});
  el.innerHTML=`<div class="exh"><h2>Exam countdown</h2><p>KTU S7 university exams · forenoon session, 09:30 AM IST</p></div><div class="exgrid">`+
   EXAMS.map((e,i)=>`<button type="button" class="exc" data-sub="${e.c}" style="--sc:${SCOL[e.c]};--d:${i*.08}s"><span class="top1"><i></i>${e.c}<em></em></span><b class="nm2">${SUBJ[e.c].name}</b><span class="when">${fmt(e.t)}</span>
     <span class="cd">${['days','hrs','min','sec'].map(u=>`<span class="u"><b data-u="${u}">–</b><span>${u}</span></span>`).join('')}</span><span class="msg" hidden></span><span class="bar"><i></i></span></button>`).join('')+`</div>`;
  el.addEventListener('click',e=>{const b=e.target.closest('[data-sub]');if(b)setSub(b.dataset.sub,true)});
  $('#nextx').addEventListener('click',()=>{const n=EXAMS.find(e=>e.t+EXAM_LEN>Date.now());if(n)setSub(n.c,true)});
  examTick();setInterval(examTick,1000)}
function examTick(){const now=Date.now(),cards=document.querySelectorAll('#exams .exc');const next=EXAMS.findIndex(e=>e.t+EXAM_LEN>now);
  EXAMS.forEach((e,i)=>{const card=cards[i];if(!card)return;const d=e.t-now,live=d<=0&&d>-EXAM_LEN,done=d<=-EXAM_LEN;
    card.classList.toggle('next',i===next);card.classList.toggle('done',done);
    card.querySelector('em').textContent=done?'done':live?'in progress':i===next?'next exam':`exam ${i+1}`;
    const msg=card.querySelector('.msg');msg.hidden=!(live||done);msg.textContent=live?'Exam in progress. All the best!':done?'Exam over':'';
    card.querySelector('.cd').hidden=live||done;
    if(d>0){const s=Math.floor(d/1e3),v={days:Math.floor(s/86400),hrs:Math.floor(s%86400/3600),min:Math.floor(s%3600/60),sec:s%60};
      card.querySelectorAll('[data-u]').forEach(b=>{const t=String(v[b.dataset.u]).padStart(b.dataset.u==='days'?1:2,'0');if(b.textContent!==t){b.textContent=t;if(!RM){b.classList.remove('t');void b.offsetWidth;b.classList.add('t')}}})}
    card.querySelector('.bar i').style.setProperty('--p',Math.max(0,Math.min(100,100*(1-d/WINDOW)))+'%')});
  const nx=$('#nextx');if(next<0){nx.hidden=true;return}const e=EXAMS[next],d=e.t-now;nx.hidden=false;
  nx.querySelector('span').textContent=d<=0?`${e.c} exam in progress`:`${e.c} in ${Math.floor(d/864e5)}d ${Math.floor(d%864e5/36e5)}h ${Math.floor(d%36e5/6e4)}m`}
function setupMotion(){
  if(RM)document.querySelectorAll('.smil').forEach(a=>a.remove());
  document.querySelectorAll('.statement,.figures,.strip,.sech,.cards,.mgrid').forEach(e=>e.classList.add('rv'));
  const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');if(e.target.id==='figures')countUp();io.unobserve(e.target)}),{threshold:.12,rootMargin:'0px 0px -5% 0px'}):null;
  document.querySelectorAll('.rv').forEach(e=>io?io.observe(e):e.classList.add('in'));
  const prog=$('#prog');addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;prog.style.transform=`scaleX(${h>0?Math.min(1,scrollY/h):0})`},{passive:true});
  if(!RM&&matchMedia('(pointer:fine)').matches){const art=$('.art'),t=$('#tilt');
    art.addEventListener('pointermove',e=>{const r=art.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform=`translate(${(x*16).toFixed(1)}px,${(y*12).toFixed(1)}px)`});
    art.addEventListener('pointerleave',()=>t.style.transform='')}}
function toShell(){const y=$('.shell').getBoundingClientRect().top+scrollY-$('#top').offsetHeight-6;window.scrollTo({top:y,behavior:RM?'auto':'smooth'})}

/* -------- shell -------- */
function rail(){let h='<div class="navrow">';
  if(S.view==='mod'||S.view==='tab'){const cur=S.view==='mod'?S.mod:S.tmod;
    const items=(S.view==='tab'?[['all','All modules','']]:[]).concat(MODS.map(M=>[String(M.n),`Module ${ROMAN[M.n]}`,M.short]));
    h+=`<div class="grp"><h4>${SUB.code} modules</h4><div class="nav">`+items.map(([v,l,sub])=>{const a=OCC.filter(o=>(v==='all'||o.m===+v)&&isExam(o.pid)),na=a.filter(o=>o.part==='A').length,nb=a.filter(o=>o.part==='B').length;
      return `<button type="button" data-mod="${v}" aria-current="${cur===v}" style="--mc:${v==='all'?'var(--ink)':'var(--m'+v+')'}"><span class="dot"></span><span>${l}</span><span class="n">${na+nb}</span>${sub?`<span class="sub">${sub} · ${na} short, ${nb} long</span>`:''}</button>`}).join('')+`</div></div>`;
    h+=`<div class="grp"><div class="railnote">${S.view==='mod'?'Each module lists every year’s questions, newest first: <b>Part A</b> (3 marks), then <b>Part B</b>. A yellow <b>Asked N×</b> tag means the same question came in N university exams.':'Each cell is the question number and its marks in that paper. Click a cell to open the paper, or a topic to see its answer.'}</div></div>`}
  else{h+=`<div class="grp"><h4>${SUB.code} exams</h4><div class="nav">`+PAPERS.filter(p=>!p.model).map(P=>`<button type="button" data-paper="${P.id}" aria-current="${S.paper===P.id}"><span class="dot" style="--mc:var(--accent)"></span><span>${P.short}</span><span class="n">${P.year}</span><span class="sub">${P.type}</span></button>`).join('')+`</div></div>`;
    const ref=PAPERS.filter(p=>p.model);
    if(ref.length)h+=`<div class="grp"><h4>Reference</h4><div class="nav">`+ref.map(P=>`<button type="button" data-paper="${P.id}" aria-current="${S.paper===P.id}"><span class="dot" style="--mc:var(--faint)"></span><span>${P.short}</span><span class="n">KTU</span><span class="sub">${P.type}</span></button>`).join('')+`</div></div>`}
  $('#rail').innerHTML=h+'</div>'}
function toolHTML(){return `<div class="tool">
  <div class="seg" id="seg"><span class="ind"></span>${[['all','All'],['A','Part A · 3 marks'],['B','Part B']].map(([v,l])=>`<button type="button" data-part="${v}" aria-pressed="${S.part===v}">${l}</button>`).join('')}</div>
  <div class="search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="search" type="search" placeholder="Search ${SUB.code} questions and answers" value="${S.q.replace(/"/g,'&quot;')}" autocomplete="off"></div>
  <label class="sw"><input type="checkbox" id="rep"${S.rep?' checked':''}><span class="tr"></span>Repeated only</label>
  <label class="sw"><input type="checkbox" id="quiz"${S.quiz?' checked':''}><span class="tr"></span>Hide answers</label></div><div id="list"></div>`}
function listMod(){$('#list').innerHTML=moduleHTML(+S.mod,false);initCalc($('#list'))}
function render(top){[...$('#views').querySelectorAll('button')].forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===S.view));moveInd('#views','button');rail();if(!PRINT)modGrid();
  if(S.view==='mod'){$('#main').innerHTML=`<div class="view">${toolHTML()}</div>`;listMod();moveInd('#seg','button')}
  else if(S.view==='pap'){const P=PBY[S.paper];$('#main').innerHTML=`<div class="view"><div class="ptop"><div><b>${P.short}</b> · ${P.type}</div><span class="pqp">${P.qp?'QP code '+P.qp:''}</span></div>${paperHTML(P,true)}</div>`;initCalc($('#main'))}
  else $('#main').innerHTML=`<div class="view">${tableHTML()}</div>`;
  if(top){const y=$('.shell').getBoundingClientRect().top+scrollY-$('#top').offsetHeight-6;if(scrollY>y)window.scrollTo({top:y,behavior:'auto'})}}
const hashFor=()=>S.sub.toLowerCase()+'-'+(S.view==='mod'?'m'+S.mod:S.view==='pap'?'paper-'+S.paper.toLowerCase():'repeats');
function go(view,o={}){Object.assign(S,{view},o);setHash(hashFor());render(true)}
function setSub(code,scroll){if(!SUBJ[code])return;if(code!==S.sub){S.sub=code;store.set('sub',code);load(code);Object.assign(S,{mod:'1',paper:firstPaper(),tmod:'all',q:'',rep:false});S.tog.clear();S.ptog.clear();
    if(S.view==='pap'&&!PBY[S.paper])S.paper=firstPaper()}
  figures();setHash(hashFor());render(false);
  if(scroll){const y=$('#figures').getBoundingClientRect().top+scrollY-$('#top').offsetHeight-8;window.scrollTo({top:y,behavior:RM?'auto':'smooth'})}
  toast(`${SUB.code} · ${SUB.name}`)}
function flash(el){if(!el)return;el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');el.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'})}
function jumpOcc(k){const o=OBY[k];if(!o)return;if(S.view!=='mod'||S.mod!==String(o.m)||(S.part!=='all'&&S.part!==o.part)||S.rep||S.q){S.part=S.part!=='all'&&S.part!==o.part?'all':S.part;S.rep=false;S.q='';go('mod',{mod:String(o.m)})}
  requestAnimationFrame(()=>flash(document.getElementById('o-'+k.replace(':','-'))))}
function jumpPaper(k){go('pap',{paper:k.split(':')[0]});requestAnimationFrame(()=>flash(document.getElementById('p-'+k.replace(':','-'))))}
function fromHash(){let h=location.hash.slice(1).toLowerCase(),m;
  if((m=/^([a-z]{3}\d{3})-(.+)$/.exec(h))&&SUBJ[m[1].toUpperCase()]){const c=m[1].toUpperCase();if(c!==S.sub){S.sub=c;store.set('sub',c)}h=m[2]}
  load(S.sub);if(!S.paper||!PBY[S.paper])S.paper=firstPaper();
  if((m=/^m([1-5])$/.exec(h)))Object.assign(S,{view:'mod',mod:m[1]});
  else if((m=/^paper-(\w+)$/.exec(h))&&PAPERS.some(p=>p.id.toLowerCase()===m[1]))Object.assign(S,{view:'pap',paper:PAPERS.find(p=>p.id.toLowerCase()===m[1]).id});
  else if(h==='repeats')S.view='tab'}

/* -------- backprop calculator (AIT401 Nov 2025 Q12a) -------- */
function initCalc(root){root.querySelectorAll('.calc[data-calc="bp"]').forEach(el=>{if(el.dataset.ready)return;el.dataset.ready=1;el.classList.add('live');
  el.innerHTML=`<div class="calcf"><span>Values from your paper:</span><label>w₂₄ <input type="number" step="0.1" value="-0.3" data-w="w24"></label><label>w₃₅ <input type="number" step="0.1" value="-0.2" data-w="w35"></label></div><div class="calco"></div>`;
  const run=()=>{const g=n=>parseFloat(el.querySelector(`[data-w="${n}"]`).value);const w24=isFinite(g('w24'))?g('w24'):-.3,w35=isFinite(g('w35'))?g('w35'):-.2;el.querySelector('.calco').innerHTML=bpCalc(w24,w35)};
  el.addEventListener('input',run);run()})}
function bpCalc(w24,w35){const s=z=>1/(1+Math.exp(-z)),x=[0,1,1],w14=.1,w15=.3,w25=.2,w34=.6,w46=.2,w56=.2,b4=.3,b5=.1,b6=.1,lr=.92,T=1,f=(v,d=4)=>(+v).toFixed(d).replace('-','−');
  const I4=x[0]*w14+x[1]*w24+x[2]*w34+b4,O4=s(I4),I5=x[0]*w15+x[1]*w25+x[2]*w35+b5,O5=s(I5),I6=O4*w46+O5*w56+b6,O6=s(I6),E6=O6*(1-O6)*(T-O6),E4=O4*(1-O4)*E6*w46,E5=O5*(1-O5)*E6*w56;
  const U=[['w₄₆',w46,lr*E6*O4],['w₅₆',w56,lr*E6*O5],['w₁₄',w14,0],['w₂₄',w24,lr*E4],['w₃₄',w34,lr*E4],['w₁₅',w15,0],['w₂₅',w25,lr*E5],['w₃₅',w35,lr*E5],['b₆',b6,lr*E6],['b₄',b4,lr*E4],['b₅',b5,lr*E5]];
  return `<h4>Step 1: forward pass</h4><span class="eqb">I₄ = 0(0.1) + 1(${f(w24,2)}) + 1(0.6) + 0.3 = ${f(I4)}     O₄ = σ(I₄) = ${f(O4)}
I₅ = 0(0.3) + 1(0.2) + 1(${f(w35,2)}) + 0.1 = ${f(I5)}     O₅ = σ(I₅) = ${f(O5)}
I₆ = 0.2(${f(O4)}) + 0.2(${f(O5)}) + 0.1 = ${f(I6)}    O₆ = σ(I₆) = ${f(O6)}</span>
<h4>Step 2: error terms</h4><span class="eqb">Err₆ = O₆(1 − O₆)(1 − O₆) = ${f(E6)}
Err₄ = O₄(1 − O₄) · Err₆ · w₄₆ = ${f(E4,5)}
Err₅ = O₅(1 − O₅) · Err₆ · w₅₆ = ${f(E5,5)}</span>
<h4>Step 3: updates (η = 0.92)</h4><div class="tw"><table class="t"><tr><th>Weight / bias</th><th>Old</th><th>Change</th><th>New</th></tr>${U.map(([n,o,d])=>`<tr><td>${n}</td><td>${f(o,2)}</td><td>${f(d)}</td><td><b>${f(o+d)}</b></td></tr>`).join('')}</table></div>`}

/* -------- events -------- */
function setOpen(id,open){document.querySelectorAll(`[data-a="${CSS.escape(id)}"]`).forEach(a=>a.classList.toggle('open',open));document.querySelectorAll(`.reveal[data-tg="${CSS.escape(id)}"]`).forEach(b=>{b.setAttribute('aria-expanded',open);b.querySelector('span').textContent=open?'Hide answer':'Show answer'})}
function bind(){
$('#views').addEventListener('click',e=>{const b=e.target.closest('button');if(b)go(b.dataset.v)});
['#picker','#strip'].forEach(sel=>$(sel).addEventListener('click',e=>{const b=e.target.closest('[data-sub]');if(b)setSub(b.dataset.sub,true)}));
$('#subsel').addEventListener('change',e=>{setSub(e.target.value,false);render(true)});
$('#home').addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:RM?'auto':'smooth'})});
$('#ctaMod').addEventListener('click',()=>{go('mod',{mod:'1'});toShell()});
$('#ctaPap').addEventListener('click',()=>{go('pap',{paper:firstPaper()});toShell()});
$('#disc').addEventListener('click',()=>{go('pap',{paper:firstPaper()});toShell()});
$('#toRep').addEventListener('click',()=>{go('tab');toShell()});
$('#allA').addEventListener('click',e=>downloadAllA(e.currentTarget));
$('#figures').addEventListener('click',e=>{if(e.target.closest('#toRep2')){go('tab');toShell()}});
$('#mgrid').addEventListener('click',e=>{const b=e.target.closest('[data-mgo]');if(b){go('mod',{mod:b.dataset.mgo});toShell()}});
addEventListener('scroll',()=>$('#top').classList.toggle('scrolled',scrollY>8),{passive:true});
$('#rail').addEventListener('click',e=>{const m=e.target.closest('[data-mod]'),p=e.target.closest('[data-paper]');if(m){S.view==='mod'?go('mod',{mod:m.dataset.mod}):(S.tmod=m.dataset.mod,render(true))}if(p)go('pap',{paper:p.dataset.paper})});
$('#main').addEventListener('input',e=>{if(e.target.id==='search'){clearTimeout(S._t);S._t=setTimeout(()=>{S.q=e.target.value.trim().toLowerCase();listMod()},160)}});
$('#main').addEventListener('change',e=>{const t=e.target;if(t.id==='rep'){S.rep=t.checked;listMod()}if(t.id==='quiz'){S.quiz=t.checked;S.tog.clear();store.set('quiz',S.quiz);listMod();toast(S.quiz?'Answers hidden: tap “Show answer” to check yourself':'Answers shown')}});
$('#main').addEventListener('click',e=>{const t=e.target;let b;
  if((b=t.closest('[data-part]'))){S.part=b.dataset.part;store.set('part',S.part);[...$('#seg').querySelectorAll('button')].forEach(x=>x.setAttribute('aria-pressed',x===b));moveInd('#seg','button');listMod();return}
  if((b=t.closest('[data-tg]'))){const id=b.dataset.tg;const el=document.querySelector(`[data-a="${CSS.escape(id)}"]`);const open=!(el&&el.classList.contains('open'));
    if(b.classList.contains('reveal')){const def=!S.quiz;(open===def)?S.tog.delete(id):S.tog.add(id)}setOpen(id,open);if(b.classList.contains('lnk'))b.textContent=open?'Hide':'Show it here';return}
  if((b=t.closest('[data-pt]'))){const id=b.dataset.pt,o=!S.ptog.has(id);o?S.ptog.add(id):S.ptog.delete(id);b.setAttribute('aria-expanded',o);b.lastChild.textContent=o?'Hide answer':'Answer';b.closest('.prow').querySelector('.answ').classList.toggle('open',o);return}
  if((b=t.closest('[data-mdl]'))){downloadMod(b.dataset.mdl,b);return}
  if((b=t.closest('[data-alla]'))){downloadAllA(b);return}
  if((b=t.closest('[data-jump]'))){jumpOcc(b.dataset.jump);return}
  if((b=t.closest('[data-paper-jump]'))){jumpPaper(b.dataset.paperJump);return}
  if((b=t.closest('[data-open-mod]'))){jumpOcc(b.dataset.openMod);return}});
$('#dl').addEventListener('click',downloadPdf);
addEventListener('resize',()=>{measure();moveInd('#views','button');moveInd('#seg','button')});
addEventListener('hashchange',()=>{const was=S.sub;fromHash();if(was!==S.sub)figures();render(false)});
addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&S.view==='mod'){e.preventDefault();$('#search').focus()}});
}

/* -------- PDF download (downloads capability) -------- */
let DL=null;
async function saveFile(path,filename,btn){path=(window.PDF_BASE||'')+path;
  if(!DL){/* outside the claude.ai viewer (e.g. Vercel): a plain download link works */
    const a=document.createElement('a');a.href=path;a.download=filename;document.body.appendChild(a);a.click();a.remove();toast('Download started');return}
  if(btn)btn.disabled=true;toast('Preparing PDF…');
  try{const r=await fetch(path);if(!r.ok)throw new Error('fetch');const blob=await r.blob();await DL.save({filename,data:blob});toast('PDF saved')}
  catch(err){const c=err&&err.code;toast(c==='declined'?'Download cancelled':c==='rate_limited'?'A download prompt is already open':'Couldn’t download the PDF here.')}
  finally{if(btn)btn.disabled=false}}
function downloadPdf(){if(SUB.pdf)saveFile(SUB.pdf,`${SUB.code}-PYQ-with-answers.pdf`,$('#dl'))}
function downloadAllA(btn){if(SUB.allA)saveFile(`${SUB.code.toLowerCase()}-all-part-a.pdf`,`${SUB.code}-All-Modules-Part-A-3-mark-answers.pdf`,btn)}
function downloadMod(key,btn){const m=+key[0],p=key[1];saveFile(`${SUB.code.toLowerCase()}-m${m}-part-${p.toLowerCase()}.pdf`,`${SUB.code}-Module-${ROMAN[m]}-Part-${p}-${p==='A'?'3-mark':'14-mark'}-answers.pdf`,btn)}

/* -------- print document (used to make the PDF) -------- */
function printDoc(){const ex=PAPERS.filter(p=>!p.model),model=PAPERS.some(p=>p.model);
  if(window.PRINT_MOD==='all'){document.body.classList.add('allmods');const n=OCC.filter(o=>o.part==='A').length;
    return `<section class="mcover"><div class="cv-k">KTU · S7 B.Tech · ${SUB.code} ${SUB.name}</div><h1>All modules · Part A</h1><p class="cv-s">Every 3-mark question from Module I to Module V, with answers</p>
     <p class="mmeta">${n} questions from ${ex.map(P=>P.short).join(', ')}. Grouped by module, newest paper first. Each answer starts with how the 3 marks are split; a yellow <span class="rep">Asked N×</span> tag means it repeated in N exams.</p></section>`+MODS.map(M=>moduleHTML(M.n,true)).join('')}
  if(window.PRINT_MOD){const m=+window.PRINT_MOD,p=window.PRINT_PART,M=MODS[m-1],n=OCC.filter(o=>o.m===m&&o.part===p).length;
    return `<section class="mcover"><div class="cv-k">KTU · S7 B.Tech · ${SUB.code} ${SUB.name}</div><h1>Module ${ROMAN[m]} · Part ${p}</h1><p class="cv-s">${M.title} · ${p==='A'?'3-mark questions':'14-mark long questions (parts a and b)'} with answers</p>
     <p class="mmeta">${n} questions from ${ex.map(P=>P.short).join(', ')}. Newest paper first. Each answer starts with how the marks are split; a yellow <span class="rep">Asked N×</span> tag means it repeated in N exams.</p></section>`+moduleHTML(m,true)}
  const top=QB.filter(c=>c.rep>=3).sort((a,b)=>b.rep-a.rep||a.m-b.m);
  let h=`<section class="cover"><div class="cv-k">KTU · S7 B.Tech · 2019 scheme</div><h1>${SUB.code} ${SUB.name}</h1><p class="cv-s">Previous year questions with answers, module by module and year by year</p>
   <div class="cv-papers">${ex.map(P=>`<div><b>${P.short}</b><span>${P.type}</span></div>`).join('')}${model?'<div><b>Model QP</b><span>KTU model paper</span></div>':''}</div>
   <h3>How to use this book</h3><ul><li>Each module lists <b>Part A</b> (3 marks) and then <b>Part B</b> questions for every paper, newest first.</li><li><span class="rep">Asked N×</span> means the same question appeared in N university exams. <b>Also asked</b> shows where else.</li><li>Every answer starts with <b>How to score</b>: how the marks are usually split. Write at least one point per mark.</li><li>A repeated question is answered once, at its newest occurrence; later occurrences point back to it.</li><li>The original papers are reproduced at the end.</li></ul>
   ${top.length?`<h3>Most repeated topics (3 or more exams)</h3><table class="t cvt"><tr><th>Module</th><th>Topic</th><th>Exams</th><th>Asked in</th></tr>${top.map(c=>`<tr><td>${ROMAN[c.m]}</td><td>${c.q}</td><td><b>${c.rep}×</b></td><td>${c.s.filter(k=>isExam(k.split(':')[0])).sort((a,b)=>ORDER.indexOf(a.split(':')[0])-ORDER.indexOf(b.split(':')[0])).map(occLabel).join('; ')}</td></tr>`).join('')}</table>`:''}</section>`;
  MODS.forEach(M=>h+=moduleHTML(M.n,true));
  h+=`<section class="appx"><h2 class="ah">Original question papers</h2>${PAPERS.map(P=>paperHTML(P,false)).join('')}</section>`;
  return h}

/* -------- boot -------- */
/* PDF: give a white halo only to figure labels that a line or curve actually runs through
   (a halo on every label would bloat the PDFs; on screen every label gets one via CSS) */
function haloFigs(root){root.querySelectorAll('figure.fig svg').forEach(svg=>{
  const geoms=[...svg.querySelectorAll('line,path,polyline,polygon,circle,ellipse,rect')].filter(g=>{const cs=getComputedStyle(g);return cs.stroke!=='none'&&parseFloat(cs.strokeWidth)>0});
  const pts=[];geoms.forEach(g=>{let L=0;try{L=g.getTotalLength()}catch(e){return}const M=g.getScreenCTM();if(!M||!L)return;const n=Math.min(600,Math.max(4,Math.ceil(L/2)));
    for(let i=0;i<=n;i++){const p=g.getPointAtLength(L*i/n);pts.push([M.a*p.x+M.c*p.y+M.e,M.b*p.x+M.d*p.y+M.f])}});
  svg.querySelectorAll('text').forEach(t=>{const f=t.getAttribute('fill');if(t.classList.contains('w')||/^(#fff|#ffffff|white)$/i.test(f||''))return;
    const r=t.getBoundingClientRect(),py=r.height*.2;let c=0;for(const [x,y] of pts){if(x>r.left&&x<r.right&&y>r.top+py&&y<r.bottom-py&&++c>1){t.classList.add('halo');break}}});
  /* PDF renderers ignore paint-order, so the halo is a white copy drawn underneath the label */
  svg.querySelectorAll('text.halo,text[paint-order]').forEach(t=>{if(t.previousElementSibling&&t.previousElementSibling.classList.contains('halo-bg'))return;
    const b=t.cloneNode(true);b.setAttribute('class','halo-bg');b.setAttribute('fill','#fff');b.setAttribute('stroke','#fff');b.setAttribute('stroke-width','3.5');b.setAttribute('stroke-linejoin','round');b.removeAttribute('paint-order');b.setAttribute('aria-hidden','true');
    t.parentNode.insertBefore(b,t);t.removeAttribute('stroke');t.removeAttribute('paint-order');t.removeAttribute('stroke-width');t.classList.remove('halo')})})}
/* dark mode: header button toggles and remembers; "auto" follows the phone / computer setting */
const THEME={get dark(){return document.documentElement.dataset.theme==='dark'},
  apply(d){const h=document.documentElement;h.classList.add('theming');if(d)h.dataset.theme='dark';else delete h.dataset.theme;
    const b=$('#thm');if(b){b.setAttribute('aria-label',d?'Light mode':'Dark mode');b.title=d?'Light mode':'Dark mode'}
    try{window.AndroidApp&&AndroidApp.setTheme&&AndroidApp.setTheme(d)}catch(e){}setTimeout(()=>h.classList.remove('theming'),300)},
  init(){if(PRINT)return;this.apply(this.dark);const b=$('#thm');if(b)b.addEventListener('click',()=>{const d=!this.dark;store.set('theme',d?'dark':'light');this.apply(d)});
    const sys=d=>{if(store.get('theme','auto')==='auto')this.apply(d)};window.__appNight=sys;
    try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',e=>{if(!window.AndroidApp)sys(e.matches)})}catch(e){}}};
THEME.init();
if(PRINT){load(window.PRINT_SUBJ||'AIT401');document.body.classList.add('print');$('#app').innerHTML=printDoc();$('#app').querySelectorAll('button').forEach(b=>{b.outerHTML=`<span class="${b.className}">${b.innerHTML}</span>`});haloFigs(document);if(document.fonts)document.fonts.ready.then(()=>haloFigs(document))}
else{fromHash();picker();figures();measure();bind();render(false);setupMotion();examsInit();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{measure();moveInd('#views','button');moveInd('#seg','button')});
  try{window.claude&&window.claude.use&&window.claude.use('downloads').then(d=>{DL=d}).catch(()=>{})}catch(e){}}
