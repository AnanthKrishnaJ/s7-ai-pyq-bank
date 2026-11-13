/* EET435 Module 4: biomass */
(Q=>{Q.push(
{id:'biogas-factors',m:4,s:['M26:Q7','N24:Q7','M23:Q17b','A25:Q18a','D23:Q18b'],q:'Factors affecting biogas production (seeding, retention time, feeding rate, temperature, pH, C/N ratio...)',a:`
<ul><li><b>Temperature:</b> methane bacteria work best at 30–40 °C (mesophilic) or 50–60 °C (thermophilic). Below 15 °C gas production nearly stops, so winter output falls; digesters are buried or insulated.</li>
<li><b>pH:</b> optimum 6.8–7.5. Overloading makes the slurry acidic (volatile acids), which kills methanogens.</li>
<li><b>Carbon/nitrogen (C/N) ratio:</b> optimum 25–30 : 1. Cow dung ≈ 25 : 1; too much carbon (straw) slows digestion, too much nitrogen gives ammonia toxicity.</li>
<li><b>Solid concentration (dilution):</b> 7–10 % total solids; cow dung mixed with water 1 : 1.</li>
<li><b>Seeding:</b> adding digested slurry from a working plant (rich in methanogenic bacteria) to a new plant or fresh feed shortens start-up time and stabilises digestion.</li>
<li><b>Retention time (HRT):</b> time the slurry stays in the digester, 30–60 days depending on temperature. Too short washes bacteria out and leaves undigested matter; too long needs a bigger digester.</li>
<li><b>Feeding rate / loading rate:</b> regular, uniform daily feeding keeps bacteria active. Overfeeding causes acid build-up and pH drop; underfeeding lowers gas output.</li>
<li><b>Mixing / stirring:</b> prevents scum formation and keeps bacteria in contact with feed.</li>
<li><b>Toxic substances:</b> detergents, antibiotics, heavy metals, excess ammonia inhibit bacteria.</li>
<li><b>Pressure</b> (low gas pressure is better) and <b>particle size</b> of feed.</li></ul>`,ms:[['Temperature, pH, C/N',3],['Seeding, retention time, feeding rate',2],['Other factors',1]],
a3:`<ul><li><b>Seeding:</b> adding digested slurry (rich in methane bacteria) to fresh feed or a new plant starts gas production quickly and keeps digestion stable.</li><li><b>Retention time:</b> slurry must stay 30–60 days (longer in cold weather) for complete digestion; too short washes out bacteria and lowers yield.</li><li><b>Feeding rate:</b> regular, uniform daily feeding of the right quantity; overloading makes the digester acidic (low pH) and stops methane formation, underfeeding lowers output.</li></ul>`,ms3:[['Each factor',1]]},
{id:'ethanol-blend',m:4,s:['M26:Q8'],q:'Advantages of ethanol blending in gasoline',a:`
<ul><li><b>Higher octane number</b> (ethanol ~108): better anti-knock, allows higher compression ratio.</li><li><b>Cleaner combustion:</b> ethanol contains 35 % oxygen, so less CO and unburnt hydrocarbons; renewable, lower net CO₂.</li><li><b>Reduces oil imports</b> and supports farmers (sugarcane, grain); India's E20 programme. Blends up to 10–20 % need little or no engine modification.</li></ul>`,ms:[['Three advantages',3]]},
{id:'gasifier',m:4,s:['M26:Q17a','M23:Q18a'],q:'Updraft biomass gasifier: construction, process of gasification, products',a:`
<span class="eqb">              biomass feed (hopper, airlock)
                     │
          ┌──────────▼──────────┐ ──► producer gas out (top, 100–300 °C)
          │   DRYING   (100–200 °C)│      + tar vapour
          │   PYROLYSIS (200–600 °C)│
          │   REDUCTION (800–1000 °C)│  ↑ gas flows upward
          │   COMBUSTION (1000–1200 °C)│
          │ ▓▓▓▓▓ grate ▓▓▓▓▓│
          └──────────▲──────────┘
       air in ──────┘      ash out (bottom)</span>
<h4>Construction</h4><ul><li>Vertical refractory-lined steel shell with a hopper and airlock at the top for biomass.</li><li>Grate at the bottom supporting the bed; air (or steam/oxygen) enters below the grate.</li><li>Gas outlet at the top; ash pit at the bottom.</li><li>Fuel moves down while air and gas move up: <b>counter-current</b>.</li></ul>
<h4>Process of gasification (zones from bottom)</h4>
<ol><li><b>Combustion (oxidation) zone, 1000–1200 °C:</b> char burns with limited air: C + O₂ → CO₂ (exothermic), 2H₂ + O₂ → 2H₂O. Provides heat for the other zones.</li>
<li><b>Reduction zone, 800–1000 °C:</b> hot CO₂ and steam react with glowing char:
<span class="eqb">C + CO₂ → 2CO            (Boudouard, endothermic)
C + H₂O → CO + H₂        (water–gas)
CO + H₂O → CO₂ + H₂      (shift)
C + 2H₂ → CH₄            (methanation)</span></li>
<li><b>Pyrolysis zone, 200–600 °C:</b> rising hot gas decomposes biomass without oxygen into char, tar vapours, CH₄, CO, H₂, CO₂.</li>
<li><b>Drying zone, 100–200 °C:</b> moisture in fresh biomass evaporates.</li></ol>
<h4>Products</h4><ul><li><b>Producer gas</b>: CO 18–22 %, H₂ 15–20 %, CH₄ 1–5 %, CO₂ 8–12 %, N₂ 45–55 %; calorific value 4–6 MJ/Nm³.</li><li>By-products: <b>tar</b> and pyrolysis oils (high in updraft type), <b>char</b>, <b>ash</b>, water vapour.</li></ul>
<p><b>Features of updraft type:</b> high thermal efficiency (gas leaves cool), handles wet biomass, simple; but gas is tarry, so suited to direct heating (furnaces, boilers) rather than engines.</p>`,ms:[['Sketch',3],['Construction',2],['Process zones with reactions',4],['Products',1]]},
{id:'gasifier-downdraft',m:4,s:['A25:Q17b'],q:'Downdraft gasifier: construction and working',a:`
<span class="eqb">            biomass feed (top, sealed lid)
                   │  ↓ fuel and gas move DOWN (co-current)
        ┌──────────▼──────────┐
        │      DRYING          │
        │     PYROLYSIS        │
   air ─►  ══ COMBUSTION ══    ◄─ air nozzles (tuyeres) around the throat
        │      ╲ throat ╱      │   (1000–1200 °C)
        │     REDUCTION        │
        │ ▓▓▓▓ grate ▓▓▓▓      │──► clean producer gas out (below grate)
        └──────────┬──────────┘
                ash out</span>
<h4>Construction</h4><ul><li>Vertical cylindrical reactor with a fuel hopper on top and a constriction (<b>throat</b>) in the middle.</li><li>Air enters through nozzles (tuyeres) just above the throat.</li><li>Grate below the reduction zone; gas outlet below the grate; ash pit at the bottom.</li><li>Gas cleaning train: cyclone, cooler, filters before use in an engine.</li></ul>
<h4>Working</h4><ol><li>Biomass moves down through drying and pyrolysis zones heated by the hot zone below.</li><li>Pyrolysis products (tar vapours) are drawn down through the hot <b>combustion zone</b> at the throat, where they are burnt and <b>cracked</b> into simple gases.</li><li>Hot CO₂ and H₂O pass through the glowing charcoal in the <b>reduction zone</b>: C + CO₂ → 2CO, C + H₂O → CO + H₂.</li><li>Producer gas leaves from the bottom, almost tar-free.</li></ol>
<p><b>Advantages:</b> low tar (&lt; 0.5 g/m³), suitable for IC engines and power generation (10 kW–1 MW). <b>Limitations:</b> needs dry (&lt; 20 % moisture), sized fuel; lower thermal efficiency (gas leaves hot); not easily scaled up.</p>`,ms:[['Sketch',3],['Construction',2],['Working',3]]},
{id:'gasif-stages',m:4,s:['M23:Q8','N24:Q18b','D23:Q7','M24:Q5'],q:'Biomass gasification: meaning, product and stages',a:`
<p><b>Gasification</b> is the thermochemical conversion of solid biomass into a combustible gas by partial oxidation with a limited supply of air (or oxygen/steam) at 800–1200 °C. The product is <b>producer gas</b> (CO, H₂, CH₄ with CO₂ and N₂; 4–6 MJ/m³), used in engines, boilers and furnaces.</p>
<h4>Stages</h4>
<ol><li><b>Drying (100–200 °C):</b> moisture evaporates.</li><li><b>Pyrolysis / devolatilisation (200–600 °C):</b> biomass breaks down without oxygen into char, tar and volatile gases.</li><li><b>Combustion / oxidation (1000–1200 °C):</b> part of the char and volatiles burns: C + O₂ → CO₂; supplies heat.</li><li><b>Reduction (800–1000 °C):</b> C + CO₂ → 2CO, C + H₂O → CO + H₂, producing the combustible gases.</li></ol>`,ms:[['Definition / product',1],['Four stages',2]]},
{id:'gasifier-types',m:4,s:['A25:Q7'],q:'Types of gasifiers by construction and their differences',a:`
<div class="tw"><table class="t"><tr><th>Type</th><th>Construction / flow</th><th>Gas quality</th></tr>
<tr><td><b>Updraft (counter-current)</b></td><td>Air enters at the bottom below the grate; gas leaves at the top; fuel moves down, gas up.</td><td>High tar; high efficiency; for heating.</td></tr>
<tr><td><b>Downdraft (co-current)</b></td><td>Air enters at the middle through nozzles at a throat; gas drawn down and out below the grate.</td><td>Low tar (cracked in hot zone); for engines.</td></tr>
<tr><td><b>Cross-draft</b></td><td>Air enters through a nozzle on one side; gas leaves from the opposite side at the same level.</td><td>Fast response, small units; needs low-ash fuel like charcoal.</td></tr></table></div>
<p>Others: fluidised-bed and entrained-flow gasifiers for large plants.</p>`,ms:[['Three types',1.5],['Construction differences',1.5]]},
{id:'producer-gas',m:4,s:['N24:Q8'],q:'Producer gas and how it is produced from biomass',a:`
<p><b>Producer gas</b> is a low-calorific combustible gas (4–6 MJ/Nm³) made by partial combustion of biomass with limited air. Typical composition: CO 20 %, H₂ 18 %, CH₄ 2–3 %, CO₂ 10 %, N₂ 50 %.</p>
<p><b>Production:</b> in a gasifier biomass is dried, pyrolysed into char and volatiles, a part burnt (C + O₂ → CO₂) to provide heat, and the CO₂ and steam reduced over hot char (C + CO₂ → 2CO; C + H₂O → CO + H₂). The gas is cooled and cleaned of tar and dust before use in engines or burners.</p>`,ms:[['Definition and composition',1],['Production process',2]]},
{id:'biogas-rural',m:4,s:['M26:Q17b'],q:'Why biogas suits rural Indian agricultural communities',a:`
<ul><li><b>Raw material is free and plentiful:</b> cattle dung, crop residues and kitchen waste are available on every farm (India has ~300 million cattle).</li><li><b>Simple, low-cost technology:</b> KVIC/Deenbandhu plants built with local materials and labour; easy to operate.</li><li><b>Clean cooking fuel:</b> replaces firewood and dung cakes, removing indoor smoke that causes eye and lung disease; saves women's time collecting wood; reduces deforestation.</li><li><b>Digested slurry is a rich organic manure</b> (N, P, K) better than raw dung; improves farm yields.</li><li>Improves sanitation (toilets can be linked), decentralised energy, reduces methane emission and LPG dependence.</li></ul>`,ms:[['Four reasons',4]]},
{id:'ethanol',m:4,s:['M26:Q18a','M23:Q7','D23:Q17b','M24:Q17b','A25:Q17a'],q:'Biomass to ethanol: hydrolysis and fermentation (with equations and block diagram)',a:`
<span class="eqb">Biomass ─► Pre-treatment ─► Hydrolysis ─► Fermentation ─► Distillation ─► Dehydration ─► Fuel ethanol
(sugarcane,  (milling,       (starch /      (yeast,          (95% ethanol)  (molecular     (99.5%)
 grains,      steam explosion, cellulose     30–35 °C,                       sieves)
 bagasse,     acid/alkali)    → glucose)     2–3 days)        ▲
 straw)                                         └ CO₂ by-product   stillage → biogas / fertiliser</span>
<h4>Feedstocks</h4><ul><li><b>Sugar crops</b> (sugarcane, molasses, beet): sugar ready to ferment.</li><li><b>Starch crops</b> (maize, cassava, broken rice): need hydrolysis to sugar.</li><li><b>Lignocellulosic biomass</b> (bagasse, straw, wood): need pre-treatment plus hydrolysis (2G ethanol).</li></ul>
<h4>1. Pre-treatment</h4><p>Size reduction and treatment with steam, dilute acid or alkali to break the lignin seal and open cellulose fibres.</p>
<h4>2. Hydrolysis (saccharification)</h4><p>Long chains of starch or cellulose are broken into glucose by acids or enzymes (amylase for starch, cellulase for cellulose):</p>
<span class="eqb">(C₆H₁₀O₅)ₙ + n H₂O ──(acid / enzyme)──► n C₆H₁₂O₆
  starch / cellulose                       glucose
Hemicellulose → xylose (C₅H₁₀O₅)
Sucrose: C₁₂H₂₂O₁₁ + H₂O → 2 C₆H₁₂O₆ (invertase)</span>
<h4>3. Fermentation</h4><p>Yeast (<i>Saccharomyces cerevisiae</i>) converts glucose anaerobically at 30–35 °C, pH 4–5, in 36–72 h:</p>
<span class="eqb">C₆H₁₂O₆ ──(yeast)──► 2 C₂H₅OH + 2 CO₂ + heat
 glucose                 ethanol    carbon dioxide</span>
<p>The fermented "beer" contains 8–12 % ethanol (yeast dies at higher concentration).</p>
<h4>4. Distillation and dehydration</h4><p>Distillation gives ~95 % ethanol (azeotrope); molecular sieves or benzene azeotropic distillation give 99.5 % anhydrous ethanol for blending with petrol.</p>
<h4>By-products</h4><p>CO₂ (beverages, dry ice), stillage/vinasse (biogas, fertiliser), lignin (boiler fuel).</p>
<p><b>Uses:</b> E10/E20 petrol blending, solvent, fuel cells. Yield ~70 L per tonne of sugarcane, ~400 L per tonne of maize.</p>`,ms:[['Block diagram',2],['Hydrolysis with equation',3],['Fermentation with equation',3],['Distillation / products',2]],
a3:`<span class="eqb">Biomass ─► Pre-treatment / milling ─► Hydrolysis (acid/enzyme) ─► Glucose
        ─► Fermentation (yeast) ─► Distillation ─► Dehydration ─► Ethanol (99.5%)</span>
<p>(C₆H₁₀O₅)ₙ + nH₂O → nC₆H₁₂O₆;  C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂</p>`,ms3:[['Block diagram',2],['Equations',1]]},
{id:'plastic',m:4,s:['M26:Q18b'],q:'Handling plastic waste in urban waste management',a:`
<ul><li><b>Segregation at source</b> into wet, dry and plastic waste; collection and sorting by type (PET, HDPE, PVC, LDPE).</li><li><b>Reduce and reuse:</b> bans on single-use plastic, extended producer responsibility (EPR).</li><li><b>Mechanical recycling:</b> washing, shredding, melting and pelletising into new products.</li><li><b>Energy recovery:</b> non-recyclable plastics used as refuse-derived fuel (RDF) in cement kilns, <b>pyrolysis</b> into fuel oil, or co-processing; use in road construction (plastic-bitumen roads).</li><li>Landfilling only as the last resort; open burning is prohibited (dioxins).</li></ul>`,ms:[['Segregation / reduce',1],['Recycling',1.5],['Energy recovery / disposal',1.5]]},
{id:'msw',m:4,s:['D23:Q17a','N24:Q18a','M23:Q17a'],q:'Urban / municipal solid waste to energy: scheme and process',a:`
<span class="eqb">Collection ─► Segregation & pre-processing ─┬─► Wet organic fraction ─► Anaerobic digester ─► Biogas ─► Gas engine ─► Electricity
(households,   (sorting, magnets for metals,  │                                     └─► digestate → compost
 markets)       shredding, drying)            │
                                              ├─► Dry combustible ─► RDF ─► Incinerator / boiler ─► Steam ─► Turbine ─► Generator ─► Grid
                                              │    (paper, plastic,          │ flue gas cleaning (ESP, scrubber) ─► stack
                                              │     textiles)               └ bottom ash → bricks / landfill
                                              ├─► Recyclables (metal, glass, PET) ─► recycling
                                              └─► Inerts ─► sanitary landfill ─► landfill gas ─► engine</span>
<h4>Step-by-step process</h4>
<ol><li><b>Collection and transport</b> of municipal solid waste (MSW) to the plant; weighing and storage in a bunker.</li><li><b>Segregation and pre-processing:</b> removal of metals (magnetic separator), glass, stones; shredding; drying.</li><li><b>Energy conversion routes:</b>
<ul><li><b>Incineration (mass burning):</b> combustible waste burnt at 850–1100 °C in a grate furnace; heat raises steam in a boiler for a turbine–generator. Volume reduced by 90 %.</li><li><b>Refuse-derived fuel (RDF):</b> dry fraction shredded and pelletised to a uniform fuel for boilers or cement kilns.</li><li><b>Anaerobic digestion (biomethanation):</b> wet organic waste digested to biogas (55–65 % CH₄), burnt in gas engines; slurry used as compost.</li><li><b>Gasification / pyrolysis:</b> waste converted to syngas or oil.</li><li><b>Landfill gas recovery:</b> methane collected from sanitary landfills through pipes.</li></ul></li>
<li><b>Power generation:</b> steam turbine or gas engine drives a generator; power fed to the grid.</li><li><b>Pollution control:</b> electrostatic precipitators, bag filters, scrubbers for SO₂, HCl, dioxins; ash used in bricks or landfilled; leachate treated.</li></ol>
<h4>Benefits</h4><ul><li>Solves urban waste disposal and saves landfill space.</li><li>Produces electricity and compost; reduces methane emissions.</li></ul>
<p><b>Problems:</b> Indian MSW has high moisture and low calorific value (~1000–1500 kcal/kg), so segregation is essential; high cost; emissions control. Example: Okhla and Ghazipur (Delhi) WtE plants.</p>`,ms:[['Block diagram',4],['Step-by-step process',4],['Benefits / problems',2]]},
{id:'kvic',m:4,s:['D23:Q18a'],q:'KVIC (floating-drum) biogas plant: schematic and working',a:`
<span class="eqb">         gas outlet pipe (to kitchen)
                │  ← guide pipe
           ┌────┴────┐  steel GAS HOLDER (floating drum) rises/falls with gas
   inlet   │▒ gas ▒▒▒│                                      outlet
   tank    │~~~~~~~~~│ slurry level                        tank
  ┌───┐    │         │                                    ┌───┐
  │   │╲   │  DIGESTER (brick masonry well, underground)  │   │
  │   │ ╲  │   ┃ partition wall ┃                      ╱ │   │
  └───┘  ╲ │   ┃                ┃                     ╱  └───┘
   inlet pipe ╲________________________________________╱ outlet pipe → spent slurry</span>
<h4>Construction</h4><ul><li><b>Digester:</b> cylindrical underground well of brick and cement, 3.5–10 m deep, with a central <b>partition wall</b> dividing it into two halves so fresh slurry travels the full path before leaving.</li><li><b>Gas holder:</b> a mild-steel drum inverted over the digester, floating on the slurry and guided by a central pipe; it rises as gas collects. Its weight gives a constant gas pressure (~8–10 cm of water).</li><li><b>Inlet tank and pipe</b> for mixing dung and water (1 : 1) and feeding the bottom of the digester; <b>outlet tank and pipe</b> for digested slurry.</li><li>Gas outlet pipe with valve at the top of the drum.</li></ul>
<h4>Working</h4><ol><li>Dung–water slurry is fed daily through the inlet; it displaces an equal amount of digested slurry through the outlet.</li><li>Anaerobic bacteria break down organic matter in 30–50 days (hydrolysis → acid formation → methane formation).</li><li>Biogas (CH₄ 55–65 %, CO₂ 35–45 %) rises and collects under the drum, which floats up.</li><li>When gas is used, the drum sinks. Drum height indicates the gas stored.</li><li>The drum is rotated to break the scum layer.</li></ol>
<p><b>Advantages:</b> constant gas pressure, easy to see gas quantity, high gas yield, no gas leakage. <b>Disadvantages:</b> steel drum is costly (~40 % of plant cost), corrodes and needs painting, heat loss in winter.</p>`,ms:[['Schematic',4],['Construction',3],['Working',3]]},
{id:'biogas-plants',m:4,s:['M24:Q18a'],q:'Types of biogas plants; fixed-dome and floating-drum plants',a:`
<p><b>Types:</b> (1) <b>floating-drum</b> (KVIC), (2) <b>fixed-dome</b> (Janata, Deenbandhu, Chinese), (3) bag/balloon (flexible plastic), (4) batch vs continuous; by layout: vertical/horizontal.</p>
<h4>Floating-drum (KVIC) plant</h4>
<span class="eqb">   inlet ─╲      ┌──[steel drum]──┐ ← floats on slurry, gas outlet on top     ╱─ outlet
           ╲     │   gas           │                                         ╱
            ╲____│__ digester well (brick), partition wall __│_____________╱</span>
<p>Underground brick digester with a partition wall; a steel gas holder floats over the slurry and rises with gas. Fresh slurry fed daily pushes digested slurry out. Constant pressure; costly drum that corrodes.</p>
<h4>Fixed-dome (Janata / Deenbandhu) plant</h4>
<span class="eqb">                      gas outlet valve
                         ┃
   inlet ──╲      ╭──────┸──────╮  fixed brick/concrete DOME (gas storage)
   tank     ╲    ╱   gas ▒▒▒▒▒▒   ╲            ┌──────────┐ outlet / displacement
             ╲  │~~~~~~~~~~~~~~~~~ │──────────►│ slurry   │ tank (slurry rises here
              ╲ │   DIGESTER        │            │          │  as gas accumulates)
               ╲╰───────────────────╯            └──────────┘</span>
<p><b>Construction:</b> an underground digester and a dome-shaped roof built as one unit of brick and cement (Deenbandhu uses two spherical segments), no moving parts. Inlet pipe and an outlet (displacement) chamber at a higher level.</p>
<p><b>Working:</b> gas collects under the fixed dome. As gas accumulates, its pressure pushes slurry out of the digester into the outlet chamber, where the slurry level rises. When gas is used, slurry flows back. Gas pressure therefore varies (up to ~90 cm water column).</p>
<div class="tw"><table class="t"><tr><th>Floating drum</th><th>Fixed dome</th></tr><tr><td>Constant pressure</td><td>Variable pressure</td></tr><tr><td>Steel drum: costly, corrodes</td><td>All masonry: 30–40 % cheaper, long life</td></tr><tr><td>Gas quantity visible</td><td>Gas quantity not visible</td></tr><tr><td>Easy to build</td><td>Needs skilled masons; risk of leaks from cracks</td></tr></table></div>`,ms:[['Types',2],['Floating-drum: sketch + working',4],['Fixed-dome: sketch + working',4]]},
{id:'fixed-dome',m:4,s:['A25:Q18b'],q:'Fixed-dome biogas plant: construction and working',a:`
<span class="eqb">                        gas pipe + valve
                            ┃
   mixing  ──╲        ╭─────┸─────╮  fixed DOME (brick & cement, gas-tight plaster)
   tank       ╲      ╱  ▒▒ gas ▒▒  ╲                 ┌────────────┐
               ╲    │~~~~~~~~~~~~~~~│─── manhole ───►│ OUTLET /    │ slurry rises when
   inlet pipe   ╲   │   DIGESTER    │  outlet opening │ DISPLACEMENT│ gas is stored,
                 ╲  │  (slurry)     │                 │ CHAMBER     │ falls when gas used
                  ╲_╰───────────────╯                 └─────┬──────┘
                                                       overflow → compost pit</span>
<h4>Construction</h4><ul><li>Underground cylindrical or spherical <b>digester</b> with a <b>dome-shaped roof</b>, made monolithically of bricks and cement mortar; inner surface plastered with a gas-tight coating.</li><li><b>Inlet pipe</b> from a mixing tank to the lower part of the digester.</li><li><b>Outlet (displacement) chamber</b> connected through an opening near the bottom; its volume equals the gas storage volume.</li><li><b>Gas outlet pipe</b> with valve at the crown of the dome. No moving parts.</li></ul>
<h4>Working</h4><ol><li>Cow dung and water (1 : 1) are mixed and fed daily through the inlet.</li><li>Anaerobic digestion produces biogas (55–65 % CH₄), which collects in the dome.</li><li>Gas pressure pushes slurry down in the digester and up into the displacement chamber; the level difference equals gas pressure.</li><li>When the valve is opened, gas flows to the burner and slurry returns to the digester.</li><li>Digested slurry overflows from the outlet chamber to a compost pit as manure.</li></ol>
<p><b>Merits:</b> low cost, no corrosion, long life (20+ years), underground so stable temperature. <b>Demerits:</b> varying gas pressure, cracks cause leakage, needs skilled construction. Example: Deenbandhu and Janata models.</p>`,ms:[['Sketch',3],['Construction',2.5],['Working',2.5]]},
{id:'kvic-janata',m:4,s:['M23:Q18b'],q:'KVIC vs Janata biogas plants: constructional comparison',a:`
<span class="eqb">KVIC (floating drum)                          Janata (fixed dome)
     ┌─[steel drum]─┐                              ╭───┸───╮ masonry dome
 in ╲│  gas        │╱ out                   in ╲ ╱  gas    ╲ ┌──────┐
     │ digester ┃  │                            │ digester  │─│outlet│
     └──────────┸──┘ partition wall              ╰───────────╯ └──────┘</span>
<div class="tw"><table class="t"><tr><th>Feature</th><th>KVIC (floating drum)</th><th>Janata (fixed dome)</th></tr>
<tr><td>Gas holder</td><td>Separate movable mild-steel drum floating on slurry</td><td>Fixed dome, integral with digester (brick/concrete)</td></tr>
<tr><td>Digester</td><td>Deep cylindrical well with partition wall</td><td>Shallow cylinder with dome roof, no partition</td></tr>
<tr><td>Moving parts</td><td>Drum and guide pipe</td><td>None</td></tr>
<tr><td>Gas pressure</td><td>Constant (~10 cm water)</td><td>Variable (up to ~90 cm water)</td></tr>
<tr><td>Outlet</td><td>Outlet pipe to tank</td><td>Large displacement (outlet) chamber</td></tr>
<tr><td>Cost and life</td><td>Higher; drum corrodes, needs painting; life ~15 years</td><td>30–40 % cheaper; life 20+ years</td></tr>
<tr><td>Construction skill</td><td>Simple masonry + fabricated drum</td><td>Skilled masonry needed for gas-tight dome</td></tr>
<tr><td>Gas storage indication</td><td>Visible by drum height</td><td>Not visible</td></tr></table></div>`,ms:[['Sketches',3],['Comparison points',4]]},
{id:'biogas-select',m:4,s:['M24:Q18b'],q:'Factors affecting choice of a biogas plant model',a:`
<ul><li><b>Availability and type of feedstock</b> (quantity of dung per day decides plant size).</li><li><b>Gas requirement</b> of the family/community and need for constant pressure.</li><li><b>Cost and funds</b>: fixed dome is cheaper; floating drum costlier.</li><li><b>Climate and soil:</b> cold regions need deep or insulated plants; high water table or rocky soil affects excavation.</li><li><b>Availability of skilled masons</b> and materials (steel, bricks) locally; maintenance capability.</li><li>Space available and distance to kitchen and fields.</li></ul>`,ms:[['Four factors',4]]},
{id:'biogas-sources',m:4,s:['M24:Q8'],q:'Sources (feedstock) for biogas generation',a:`
<ul><li><b>Animal waste:</b> cattle dung, poultry droppings, pig and sheep manure.</li><li><b>Agricultural residues:</b> crop stalks, leaves, straw, sugarcane trash, water hyacinth and algae.</li><li><b>Domestic and municipal waste:</b> kitchen and food waste, human excreta (night soil), sewage sludge, vegetable market waste.</li></ul>
<p>Also industrial organic effluents: distillery, dairy, sugar and paper mill waste.</p>`,ms:[['Three categories with examples',3]]},
{id:'biomass-resources',m:4,s:['A25:Q8'],q:'Types of biomass resources for fuel conversion',a:`
<ul><li><b>Woody biomass / forest residues:</b> wood, twigs, sawdust, energy plantations (eucalyptus, subabul).</li><li><b>Agricultural residues:</b> rice husk, straw, bagasse, coconut shells, cotton stalks.</li><li><b>Energy crops:</b> sugarcane, maize, sweet sorghum (for ethanol), jatropha, pongamia (for biodiesel).</li><li><b>Animal and human waste:</b> dung, poultry litter, sewage.</li><li><b>Aquatic biomass:</b> algae, water hyacinth.</li><li><b>Urban and industrial organic waste:</b> MSW, food processing waste.</li></ul>`,ms:[['Categories with examples',3]]},
{id:'anaerobic',m:4,s:['D23:Q8','N24:Q17b'],q:'Anaerobic digestion: stages of biogas production',a:`
<p>Biogas is produced from wet biomass by <b>anaerobic digestion</b>: decomposition by bacteria in the absence of oxygen at 30–40 °C.</p>
<ol><li><b>Hydrolysis:</b> extracellular enzymes of fermentative bacteria break complex organics (carbohydrates, proteins, fats) into soluble simple sugars, amino acids and fatty acids.</li><li><b>Acidogenesis (acid formation):</b> acid-forming bacteria convert these into volatile fatty acids (acetic, propionic, butyric), alcohols, H₂ and CO₂.</li><li><b>Acetogenesis:</b> higher acids are converted into acetic acid, H₂ and CO₂.</li><li><b>Methanogenesis:</b> methanogenic bacteria convert acetic acid and H₂/CO₂ into methane:
<span class="eqb">CH₃COOH → CH₄ + CO₂        CO₂ + 4H₂ → CH₄ + 2H₂O</span></li></ol>
<p>Product: biogas ≈ 55–65 % CH₄, 35–45 % CO₂, traces of H₂S, N₂ (CV ≈ 20–24 MJ/m³) plus digested slurry as manure.</p>`,ms:[['Process named',1],['Stages',3]],a3:`<p>Process: <b>anaerobic digestion</b> (decomposition by bacteria without oxygen).</p><ol><li><b>Hydrolysis:</b> complex organics → simple sugars, amino acids, fatty acids.</li><li><b>Acid formation (acidogenesis/acetogenesis):</b> → volatile acids, acetic acid, H₂, CO₂.</li><li><b>Methane formation:</b> CH₃COOH → CH₄ + CO₂; CO₂ + 4H₂ → CH₄ + 2H₂O.</li></ol>`,ms3:[['Name of process',1],['Stages',2]]},
{id:'bio-conv',m:4,s:['M24:Q17a','N24:Q17a'],q:'Biomass conversion technologies / methods of biomass-fuel conversion',a:`
<span class="eqb">                         BIOMASS
       ┌──────────────┬──────────┴─────────┬────────────────┐
  DIRECT COMBUSTION  THERMOCHEMICAL       BIOCHEMICAL       PHYSICO-CHEMICAL
  (heat, steam,     ├ Gasification → producer gas   ├ Anaerobic digestion → biogas    ├ Densification (briquettes, pellets)
   power)           ├ Pyrolysis → char, bio-oil, gas├ Fermentation → ethanol          └ Transesterification → biodiesel
                    ├ Liquefaction / HTL → bio-crude└ Composting
                    └ Carbonisation → charcoal</span>
<h4>1. Direct combustion</h4><p>Biomass burnt in stoves, furnaces or boilers to give heat or steam for power (bagasse cogeneration in sugar mills). Simple; efficiency 10–35 %.</p>
<h4>2. Thermochemical conversion</h4><ul><li><b>Gasification:</b> partial oxidation at 800–1200 °C to producer gas (CO, H₂, CH₄) for engines.</li><li><b>Pyrolysis:</b> heating to 400–600 °C without oxygen gives charcoal, bio-oil and gas; fast pyrolysis maximises oil.</li><li><b>Carbonisation:</b> slow pyrolysis for charcoal.</li><li><b>Liquefaction / hydrothermal:</b> wet biomass at high pressure gives bio-crude.</li></ul>
<h4>3. Biochemical conversion</h4><ul><li><b>Anaerobic digestion:</b> wet biomass (dung, food waste) converted by bacteria into biogas (60 % CH₄) and manure.</li><li><b>Fermentation:</b> sugars (after hydrolysis of starch/cellulose) converted by yeast into ethanol.</li></ul>
<h4>4. Physico-chemical conversion</h4><ul><li><b>Transesterification:</b> vegetable oils (jatropha, pongamia) + methanol with catalyst → biodiesel + glycerol.</li><li><b>Densification:</b> loose residues compressed into briquettes/pellets.</li></ul>
<p><b>Choice of route:</b> dry woody biomass → combustion/gasification; wet biomass → digestion; sugar/starch → fermentation; oils → biodiesel.</p>`,ms:[['Classification chart',2],['Thermochemical',3],['Biochemical',3],['Others',2]]}
)})(SUBJ.EET435.QB);
