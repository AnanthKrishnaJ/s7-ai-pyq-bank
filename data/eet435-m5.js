/* EET435 Module 5: small hydro, hydrogen, fuel cells */
(Q=>{Q.push(
{id:'hi-head-turb',m:5,s:['M26:Q9'],q:'Turbines for low-to-medium discharge and high head',a:`
<ul><li><b>Pelton wheel:</b> impulse turbine, heads above ~150 m (up to 1000+ m), low discharge.</li><li><b>Turgo impulse turbine:</b> jet strikes the runner at an angle; heads 50–250 m, handles larger flow than Pelton of the same size.</li><li><b>Francis turbine</b> (for medium–high head 30–300 m and medium discharge); <b>cross-flow (Banki–Michell)</b> for small hydro at 5–200 m heads.</li></ul>`,ms:[['Three turbines',3]]},
{id:'fc-adv',m:5,s:['M24:Q10','A25:Q10','N24:Q10','M26:Q10'],q:'Fuel cells: definition, advantages (incl. environmental) and applications',a:`
<p>A <b>fuel cell</b> is an electrochemical device that converts the chemical energy of a fuel (hydrogen) and an oxidant (oxygen/air) directly into dc electricity, heat and water, without combustion. It works continuously as long as fuel is supplied.</p>
<h4>Advantages of fuel cell power plants</h4><ul><li>High efficiency (40–60 %, up to 85 % with heat recovery); not limited by Carnot efficiency.</li><li>Zero or very low emissions: only water with H₂; no NOx, SOx or particulates.</li><li>Silent, no moving parts, low maintenance; modular and quick to install near the load.</li><li>Good part-load efficiency and fast response.</li></ul>
<h4>Environmental benefits for city transport</h4><ul><li>No tailpipe pollutants (CO, NOx, PM): better urban air quality.</li><li>Lower CO₂ emissions (zero with green hydrogen).</li><li>Quiet operation reduces noise pollution.</li></ul>
<h4>Applications</h4><ul><li><b>Transport:</b> fuel-cell cars, buses, trucks, trains, forklifts, ships.</li><li><b>Stationary power:</b> backup power for hospitals, data centres, telecom towers; combined heat and power.</li><li><b>Portable:</b> laptops, military equipment.</li><li><b>Space:</b> power and drinking water in spacecraft (Apollo, Space Shuttle used alkaline cells).</li></ul>`,ms:[['Definition / advantages',1.5],['Applications / environmental benefits',1.5]]},
{id:'shp-adv',m:5,s:['M26:Q19a'],q:'Advantages of small hydro over mega hydroelectric projects',a:`
<div class="tw"><table class="t"><tr><th>Small hydro (up to 25 MW)</th><th>Mega hydro</th></tr>
<tr><td>Mostly run-of-river; little or no reservoir</td><td>Large dam and reservoir</td></tr>
<tr><td>Little submergence: no large-scale displacement of people or forests</td><td>Submerges villages and forests; rehabilitation problems</td></tr>
<tr><td>Small capital, short gestation (1–3 years)</td><td>Huge investment, 8–15 years to build</td></tr>
<tr><td>Simple civil works, local materials and labour</td><td>Complex engineering, seismic and dam-safety risk</td></tr>
<tr><td>Decentralised: supplies remote hilly villages, low transmission loss</td><td>Needs long transmission lines</td></tr>
<tr><td>Minimal ecological disturbance (fish, sedimentation)</td><td>Changes river ecology, methane from reservoirs</td></tr></table></div>
<p>Also: standardised equipment, can be owned by local communities/private developers, eligible for renewable energy incentives, low operation cost and long life.</p>`,ms:[['Environmental / social',2],['Economic / time',2],['Technical / decentralised',2]]},
{id:'fc-h2o2',m:5,s:['D23:Q19a','M26:Q19b','M24:Q20a'],q:'Hydrogen–oxygen fuel cell: schematic, reactions, working; advantages, disadvantages, practical difficulties',a:`
<span class="eqb">              e⁻ ──────────► [ LOAD ] ──────────► e⁻
              │                                    │
   H₂ in ──► ┌┴──────┐  ┌──────────────┐  ┌───────┴┐ ◄── O₂ (air) in
             │ ANODE │  │  ELECTROLYTE │  │CATHODE │
             │  (−)  │  │   H⁺ ──►     │  │  (+)   │
             │porous │  │ (or OH⁻ ◄── │  │ porous │
             │C + Pt │  │  in alkaline)│  │ C + Pt │
   H₂ out ◄─ └───────┘  └──────────────┘  └────────┘ ──► H₂O + heat out</span>
<h4>Construction</h4><ul><li>Two porous carbon electrodes coated with platinum catalyst: <b>anode</b> (fuel side) and <b>cathode</b> (oxygen side).</li><li><b>Electrolyte</b> between them: acid (H⁺ conducting, e.g. phosphoric acid or polymer membrane) or alkaline KOH (OH⁻ conducting).</li><li>Gas channels/bipolar plates supply H₂ and O₂; external circuit carries electrons.</li></ul>
<h4>Reactions (acid electrolyte)</h4>
<span class="eqb">Anode:   2H₂ → 4H⁺ + 4e⁻
Cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O
Overall: 2H₂ + O₂ → 2H₂O + electricity + heat      (E° = 1.23 V per cell)

(Alkaline: Anode 2H₂ + 4OH⁻ → 4H₂O + 4e⁻;  Cathode O₂ + 2H₂O + 4e⁻ → 4OH⁻)</span>
<h4>Working</h4><ol><li>Hydrogen at the anode is split by the catalyst into protons and electrons.</li><li>Protons pass through the electrolyte to the cathode; electrons cannot, so they flow through the external load as dc current.</li><li>At the cathode, oxygen combines with protons and electrons to form water.</li><li>Each cell gives ~0.7 V on load; cells are stacked in series for higher voltage. Waste heat can be used.</li></ol>
<h4>Advantages</h4><ul><li>High efficiency (40–60 %), not Carnot-limited; pollution-free (only water); silent, no moving parts; modular; fast response; water by-product useful in space.</li></ul>
<h4>Disadvantages / practical difficulties in wide adoption</h4><ul><li><b>High cost</b> of platinum catalyst, membranes and stacks.</li><li><b>Hydrogen production, storage and distribution</b>: most H₂ comes from natural gas; storage needs high pressure (700 bar) or cryogenics; few refuelling stations.</li><li><b>Durability</b>: catalyst poisoning by CO and sulphur; membrane degradation; limited life.</li><li>Low voltage dc output needs converters; water and heat management; safety concerns (H₂ flammable).</li></ul>`,ms:[['Schematic',3],['Reactions',2],['Working',3],['Advantages / difficulties',2]]},
{id:'h2-prod',m:5,s:['M26:Q20a','M24:Q19b'],q:'Two methods of hydrogen production',a:`
<h4>1. Steam methane reforming (SMR)</h4>
<span class="eqb">CH₄ + H₂O ──(Ni catalyst, 700–1000 °C, 3–25 bar)──► CO + 3H₂   (endothermic)
CO + H₂O ──(shift reactor, 200–400 °C)──► CO₂ + H₂
Overall: CH₄ + 2H₂O → CO₂ + 4H₂</span>
<p>Desulphurised natural gas and steam react over nickel catalyst in externally heated tubes; the water-gas shift raises H₂ yield; CO₂ is removed by pressure swing adsorption to give 99.9 % H₂. Cheapest and most common (~50 % of world H₂), but emits CO₂ ("grey" hydrogen).</p>
<h4>2. Electrolysis of water</h4>
<span class="eqb">2H₂O ──(dc electricity)──► 2H₂ + O₂
Cathode (−): 2H₂O + 2e⁻ → H₂ + 2OH⁻        Anode (+): 2OH⁻ → ½O₂ + H₂O + 2e⁻</span>
<p>DC current passed through water with KOH electrolyte (or a PEM) splits it into H₂ at the cathode and O₂ at the anode. Very pure hydrogen; efficiency 60–80 %; "green" when powered by solar or wind.</p>
<p>Other methods: coal/biomass gasification, thermochemical cycles, photo-electrolysis, biological (algae).</p>`,ms:[['Method 1 with reaction',3],['Method 2 with reaction',3]]},
{id:'francis',m:5,s:['M26:Q20b'],q:'Francis turbine: construction and principle of operation',a:`
<span class="eqb">     water from penstock
            ║
     ╭──────╨──────────────╮  SPIRAL (SCROLL) CASING
    ╱   ╭──────────────╮    ╲
   │   │ stay vanes     │    │     guide vanes (wicket gates,
   │   │  ╭─────────╮   │    │     adjustable) direct water
   │   │  │ RUNNER  │   │    │     onto runner blades
   │   │  │ (radial │   │    │
   │   │  │ in, axial│  │    │
   │   │  │  out)    │  │    │
    ╲   ╰──╰────┬────╯──╯   ╱
     ╰─────────┼──────────╯
               ║ DRAFT TUBE (diverging) ──► tail race</span>
<h4>Construction</h4><ul><li><b>Spiral (scroll) casing:</b> a closed passage of decreasing cross-section around the runner, so water enters all around at uniform velocity.</li><li><b>Stay vanes:</b> fixed vanes that support the casing and guide flow.</li><li><b>Guide vanes (wicket gates):</b> adjustable vanes controlled by the governor; they regulate flow and give water the correct angle onto the runner.</li><li><b>Runner:</b> a wheel with 16–24 fixed curved blades; water enters radially at the outer edge and leaves axially at the centre (mixed flow).</li><li><b>Draft tube:</b> diverging pipe from runner outlet to tail race, below tail-water level; recovers kinetic energy and allows the turbine to be placed above tail water.</li><li>Shaft (usually vertical) coupled to the generator.</li></ul>
<h4>Principle of operation</h4><ul><li>A <b>reaction turbine</b>: water at the runner inlet has both pressure and kinetic energy; the runner is completely filled with water and enclosed.</li><li>As water flows inward through the curved blades, its pressure falls and its direction changes; the <b>reaction</b> of the water accelerating relative to the blades, plus the change of momentum, produces torque.</li><li>Pressure at outlet is below atmospheric; the draft tube converts exit velocity head into pressure.</li></ul>
<p><b>Range:</b> heads 30–300 m, medium discharge, specific speed 60–300, efficiency 90–95 %. Used in medium-head small and large hydro plants. Problem: cavitation at part load.</p>`,ms:[['Sketch',3],['Construction parts',3],['Operating principle',2]]},
{id:'electrolysis',m:5,s:['M23:Q19b','A25:Q20b','D23:Q20b'],q:'Hydrogen production by electrolysis of water',a:`
<span class="eqb">           + ────────── DC SOURCE ────────── −
           │                                  │
      ┌────┴──────────────┬──────────────────┴────┐
      │   ANODE (+)       ┊       CATHODE (−)     │
      │   O₂ ↑ bubbles    ┊       H₂ ↑ bubbles    │
      │                   ┊ diaphragm / membrane  │
      │       KOH (25–30 %) aqueous electrolyte    │
      └───────────────────┴──────────────────────┘
       O₂ out                                H₂ out</span>
<p><b>Principle:</b> passing direct current through water containing an electrolyte decomposes it into hydrogen and oxygen.</p>
<span class="eqb">Cathode (−): 2H₂O + 2e⁻ → H₂ + 2OH⁻
Anode (+):   2OH⁻ → ½O₂ + H₂O + 2e⁻
Overall:     H₂O → H₂ + ½O₂     (min. voltage 1.23 V; practical 1.8–2.2 V)</span>
<h4>Construction and working</h4><ul><li>Cell contains two nickel (or steel) electrodes in 25–30 % KOH solution (pure water conducts poorly).</li><li>A porous diaphragm separates the electrodes so H₂ and O₂ do not mix.</li><li>DC current: water is reduced at the cathode releasing H₂; hydroxide ions migrate to the anode and release O₂.</li><li>Gases are collected separately, dried and compressed. Many cells connected in series (bipolar stack).</li></ul>
<p><b>Types:</b> alkaline, PEM (solid polymer membrane, pure water), solid-oxide (high temperature). <b>Energy:</b> ~4.5–5 kWh per Nm³ H₂; efficiency 60–80 %. <b>Merits:</b> very pure H₂ (99.9 %), green with renewable power. <b>Demerit:</b> electricity cost.</p>`,ms:[['Diagram',2.5],['Reactions',2],['Working / features',2.5]],
a3:null},
{id:'smr',m:5,s:['N24:Q20b'],q:'Steam reformation method of hydrogen production',a:`
<span class="eqb">Natural gas ─► Desulphuriser ─► REFORMER (Ni catalyst tubes, 800–900 °C, 20–30 bar) + steam
           ─► Shift reactors (HT 350 °C, LT 200 °C) ─► CO₂ removal / PSA ─► 99.9 % H₂</span>
<ol><li><b>Desulphurisation:</b> sulphur removed from methane (it poisons the catalyst).</li><li><b>Reforming:</b> methane and steam (ratio ~3 : 1) react over nickel catalyst in externally fired tubes:
<span class="eqb">CH₄ + H₂O → CO + 3H₂      ΔH = +206 kJ/mol (endothermic)</span></li><li><b>Water–gas shift:</b> CO reacts with more steam to make extra hydrogen:
<span class="eqb">CO + H₂O → CO₂ + H₂       ΔH = −41 kJ/mol</span></li><li><b>Purification:</b> CO₂ removed by amine scrubbing or pressure swing adsorption; traces of CO by methanation.</li></ol>
<p>Overall CH₄ + 2H₂O → CO₂ + 4H₂; efficiency 70–80 %. Cheapest method, ~50 % of world hydrogen, but releases ~9 kg CO₂ per kg H₂ unless captured (blue hydrogen).</p>`,ms:[['Steps',3],['Reactions',3]]},
{id:'reaction-turb',m:5,s:['N24:Q19a'],q:'Types of reaction turbines for small hydro',a:`
<ul><li><b>Francis turbine (mixed flow):</b> water enters the runner radially inward from a spiral casing through adjustable guide vanes and leaves axially into a draft tube. Heads 10–300 m, medium flow.
<span class="eqb">spiral casing → guide vanes → runner (radial in, axial out) → draft tube</span></li>
<li><b>Propeller turbine (axial flow, fixed blades):</b> 3–6 fixed blades like a ship propeller; water flows parallel to the shaft. Low heads (2–30 m), large flow; efficiency drops at part load.</li>
<li><b>Kaplan turbine:</b> propeller turbine with <b>adjustable runner blades</b> (and guide vanes), giving high efficiency over a wide flow range; low heads 2–40 m.
<span class="eqb">      ║ flow ↓
   ───╫─── adjustable blades on hub
      ║ → draft tube</span></li>
<li>Variants for small hydro: <b>bulb</b> and <b>tubular (S-type)</b> turbines with horizontal axis for very low heads; pumps run as turbines (PAT) for micro hydro.</li></ul>
<p>All are pressure turbines: water fills the runner, pressure falls across it, and a draft tube recovers exit energy.</p>`,ms:[['Francis',2],['Propeller / Kaplan',3],['Diagram / other types',1]]},
{id:'shp-turbines',m:5,s:['D23:Q20a','M23:Q20b'],q:'Turbines used in small hydro plants (sketches of two) and selection criteria',a:`
<div class="tw"><table class="t"><tr><th>Type</th><th>Turbine</th><th>Head range</th></tr>
<tr><td rowspan="3">Impulse</td><td>Pelton</td><td>High, 50–1000 m</td></tr><tr><td>Turgo</td><td>Medium–high, 30–250 m</td></tr><tr><td>Cross-flow (Banki–Michell)</td><td>Low–medium, 3–200 m</td></tr>
<tr><td rowspan="3">Reaction</td><td>Francis</td><td>Medium, 10–300 m</td></tr><tr><td>Propeller / Kaplan</td><td>Low, 2–40 m</td></tr><tr><td>Bulb / tubular, pump-as-turbine</td><td>Very low</td></tr></table></div>
<h4>Pelton wheel (impulse)</h4>
<span class="eqb">  penstock ═══► nozzle with spear valve ═══► jet ──►  ◡◡ double-cup buckets
                                                   ( runner wheel ) on shaft → generator
                                     casing open to air; water falls to tail race</span>
<p>All the head is converted into a high-velocity jet by a nozzle; the jet strikes split (double-hemispherical) buckets on the wheel rim and is deflected nearly 165°, transferring momentum. Runs at atmospheric pressure; flow controlled by a spear valve and jet deflector. Efficiency ~90 %; high head, low flow.</p>
<h4>Cross-flow (Banki) turbine</h4>
<span class="eqb">  water ═► rectangular nozzle + guide vane ═► ║ drum-shaped runner with curved blades ║
                     water crosses the runner twice: outside→in, then in→out</span>
<p>A drum runner with long curved blades fixed between two discs. Water enters through a rectangular nozzle, passes through the blades into the runner, crosses the interior and leaves through the blades on the other side (two stages). Simple, cheap, locally manufacturable, flat efficiency curve (~80 %) at part loads; widely used in micro hydro.</p>
<p>(Alternatively sketch the <b>Francis</b> or <b>Kaplan</b> turbine.)</p>
<h4>Selection criteria</h4><ul><li><b>Net head</b> and <b>design discharge</b> (main factors).</li><li><b>Specific speed</b> N<sub>s</sub> = N√P / H<sup>5/4</sup>: Pelton 10–35, cross-flow 20–80, Francis 60–300, Kaplan 300–1000.</li><li>Variation of flow (part-load efficiency): Kaplan, cross-flow and Pelton handle varying flow well.</li><li>Required runner speed for direct coupling to generator; cavitation and setting level.</li><li>Cost, local manufacture, silt content of water, ease of maintenance.</li></ul>`,ms:[['Types list',3],['Two turbines with sketches',5],['Selection criteria',2]]},
{id:'turb-select',m:5,s:['A25:Q9'],q:'Factors for selecting a turbine for small hydro (SHP)',a:`
<ul><li><b>Available net head</b>: high → Pelton/Turgo; medium → Francis/cross-flow; low → Kaplan/propeller.</li><li><b>Design discharge</b> and its seasonal variation (part-load efficiency).</li><li><b>Specific speed</b> N<sub>s</sub> = N√P/H<sup>5/4</sup> and required generator speed.</li><li>Cavitation (setting height), silt in water, cost, local availability and maintenance.</li></ul>`,ms:[['Three or more factors',3]]},
{id:'impulse',m:5,s:['A25:Q19a'],q:'Impulse (Pelton) turbine for SHP: construction; when preferred',a:`
<span class="eqb">                         ╭───────── casing ─────────╮
  penstock ══► NOZZLE ══►  jet  ─►  ◡ ◡ ◡  buckets   │
     spear valve ┃     deflector   (  RUNNER  )──shaft──► generator
                                     ◠ ◠ ◠           │
                         ╰──────── tail race ─────────╯</span>
<h4>Construction</h4><ul><li><b>Nozzle with spear (needle) valve:</b> converts the full pressure head into a high-velocity jet; the spear controls flow.</li><li><b>Jet deflector:</b> quickly turns the jet away on sudden load rejection (avoids water hammer).</li><li><b>Runner:</b> disc with double-hemispherical (split) buckets on its rim; the splitter divides the jet into two halves deflected by ~165°.</li><li><b>Casing:</b> prevents splashing; runner works in air at atmospheric pressure.</li><li><b>Breaking jet</b> to stop the wheel; tail race below the runner.</li><li>One to six jets on a horizontal or vertical shaft.</li></ul>
<p><b>Working:</b> the jet's momentum is transferred to the buckets (impulse); pressure stays atmospheric across the runner; water drops to the tail race.</p>
<h4>When an impulse turbine is preferred in SHP</h4><ul><li>High head (above ~100 m, Turgo from ~50 m) and low discharge, typical of hilly streams.</li><li>Large variation in flow (good part-load efficiency by changing number of jets).</li><li>Silt-laden water (buckets easy to repair), simple maintenance, no cavitation, no draft tube needed.</li></ul>`,ms:[['Sketch',3],['Construction',3],['When preferred',2]]},
{id:'shp-layout',m:5,s:['M24:Q19a','N24:Q19b','M23:Q19a'],q:'Layout and components of a small / micro hydro (hydel) power scheme',a:`
<span class="eqb">  RIVER ═══► WEIR + INTAKE (trash rack, gate)
                    │
                    ▼  HEAD-RACE CHANNEL (canal, gentle slope)
                    │
              DESILTING TANK (settles sand)
                    │
                    ▼
              FOREBAY TANK (with spillway, trash rack)
                    │
                    ▼  PENSTOCK (steel/HDPE pipe down the slope)  ← gross head H
                    │
              ┌─────▼──────┐
              │ POWERHOUSE │  turbine + generator + governor/ELC + switchgear
              └─────┬──────┘
                    ▼  TAIL RACE ═══► back to river          ──► transmission to village/grid</span>
<h4>Components</h4><ul><li><b>Diversion weir and intake:</b> a low dam across the stream raises water level and diverts part of the flow into the intake; trash rack keeps out debris. (Run-of-river, no big reservoir.)</li><li><b>Head-race channel:</b> canal carrying water along the contour with a small slope.</li><li><b>Desilting tank:</b> slows water so sand settles, protecting the turbine.</li><li><b>Forebay:</b> small tank at the top of the penstock; provides steady inflow and spills excess water; smooths load changes.</li><li><b>Penstock:</b> pressure pipe that carries water steeply down to the powerhouse, creating the head.</li><li><b>Powerhouse:</b> turbine (Pelton, cross-flow, Francis, Kaplan as per head), generator (synchronous or induction), governor or electronic load controller (ELC), control panel.</li><li><b>Tail race:</b> returns water to the river.</li><li><b>Transmission/distribution lines</b> to consumers.</li></ul>
<h4>Working</h4><p>Water diverted from the stream flows through the channel to the forebay and down the penstock, converting potential energy to pressure and kinetic energy. The turbine converts it to mechanical power: P = ρgQHη (W). The generator produces electricity; the ELC keeps frequency constant by diverting surplus power to dump loads.</p>
<p><b>Classification:</b> micro (&lt; 100 kW), mini (100 kW–2 MW), small (2–25 MW in India).</p>`,ms:[['Layout diagram',4],['Components explained',3],['Working',1]]},
{id:'shp-class',m:5,s:['N24:Q9'],q:'Classification of small hydro power plants',a:`
<ul><li><b>By capacity (India, MNRE):</b> pico (&lt; 5 kW), micro (5–100 kW), mini (100 kW–2 MW), small (2–25 MW).</li><li><b>By head:</b> low head (&lt; 30 m), medium head (30–75 m), high head (&gt; 75 m).</li><li><b>By scheme:</b> run-of-river, canal-based (on irrigation canal falls), dam-toe / storage-based.</li></ul>`,ms:[['Capacity',1],['Head',1],['Scheme type',1]]},
{id:'h2-storage',m:5,s:['M23:Q9','D23:Q9','D23:Q19b','A25:Q19b'],q:'Methods of hydrogen storage',a:`
<ul><li><b>Compressed gas storage:</b> H₂ compressed to 350–700 bar in steel or carbon-fibre composite cylinders. Simple and common in fuel-cell vehicles, but tanks are heavy/bulky and compression uses ~10–15 % of energy.</li>
<li><b>Liquid hydrogen (cryogenic):</b> cooled to −253 °C and stored in super-insulated dewar tanks; high density (71 kg/m³), used in rockets. Liquefaction consumes ~30 % of energy; boil-off losses.</li>
<li><b>Metal hydrides:</b> H₂ absorbed into metals or alloys (LaNi₅, FeTi, MgH₂) forming hydrides; released by heating or reducing pressure. Safe and compact by volume, but heavy and slow to charge.</li>
<li><b>Chemical storage:</b> as ammonia, methanol or liquid organic hydrogen carriers (LOHC); complex hydrides (NaBH₄).</li>
<li><b>Adsorption</b> on carbon nanotubes, activated carbon, MOFs (research stage).</li>
<li><b>Underground storage</b> in salt caverns or depleted gas fields; pipelines for large quantities.</li></ul>`,ms:[['Compressed gas',1.5],['Liquid',1.5],['Metal hydride',1.5],['Others',1.5]],
a3:`<ul><li><b>Compressed gas</b> in high-pressure (350–700 bar) composite cylinders.</li><li><b>Liquid hydrogen</b> at −253 °C in insulated cryogenic tanks.</li><li><b>Metal hydrides</b> (LaNi₅, MgH₂) that absorb H₂ and release it on heating; also chemical carriers like ammonia.</li></ul>`,ms3:[['Three methods',3]]},
{id:'h2-benefits',m:5,s:['D23:Q10','M24:Q20b'],q:'Benefits, advantages and applications of hydrogen as a fuel / energy',a:`
<h4>Advantages</h4><ul><li><b>Clean:</b> burning or using it in a fuel cell gives only water; no CO₂, SOx, particulates.</li><li><b>Highest energy per unit mass:</b> 120–142 MJ/kg (about 3× petrol).</li><li><b>Versatile energy carrier:</b> can be produced from water using renewable electricity and stored for long periods, balancing intermittent solar/wind.</li><li>Can be transported by pipeline; usable in fuel cells, IC engines and turbines.</li><li>Abundant (in water); reduces oil imports.</li></ul>
<h4>Applications</h4><ul><li>Fuel-cell vehicles (cars, buses, trucks, trains) and rocket fuel (liquid H₂ + O₂).</li><li>Electricity generation in fuel cells and gas turbines; backup power.</li><li>Industry: ammonia (fertiliser), methanol, petroleum refining (hydrocracking), hydrogenation of oils, steel making (direct reduction).</li><li>Domestic heating and cooking by blending with natural gas; welding (oxy-hydrogen).</li></ul>`,ms:[['Advantages',3],['Applications',3]],
a3:`<ul><li><b>Clean:</b> combustion or fuel-cell use gives only water, no CO₂ or pollutants.</li><li><b>High energy per kg</b> (~120 MJ/kg, 3× petrol); efficient in fuel cells.</li><li><b>Storable energy carrier</b> made from water with renewable electricity; usable in vehicles, power and industry.</li></ul>`,ms3:[['Three benefits',3]]},
{id:'h2-props',m:5,s:['M24:Q9'],q:'Properties of hydrogen; why it is a secondary energy source',a:`
<ul><li>Lightest element; colourless, odourless, non-toxic gas; density 0.09 kg/m³.</li><li>Highest energy per mass (LHV 120 MJ/kg) but low energy per volume (10.8 MJ/m³).</li><li>Very wide flammability range (4–75 % in air), low ignition energy, high flame speed; boils at −253 °C; diffuses quickly and embrittles metals.</li></ul>
<p><b>Secondary source:</b> free hydrogen does not occur in nature in usable quantities; it must be produced from primary sources (natural gas, coal, water using electricity from solar/wind/nuclear) by spending energy. Like electricity, it is an <b>energy carrier</b>, not a primary source.</p>`,ms:[['Properties',2],['Why secondary',1]]},
{id:'polarisation',m:5,s:['M23:Q10'],q:'Polarisation in a fuel cell and its effect on efficiency',a:`
<p>Polarisation (overpotential) is the drop of actual cell voltage below the ideal 1.23 V as current is drawn. Since efficiency η = V<sub>actual</sub>/1.48 V (HHV), every volt lost lowers efficiency.</p>
<ul><li><b>Activation polarisation:</b> energy needed to start the electrode reactions (slow O₂ reduction); dominant at low current.</li><li><b>Ohmic polarisation:</b> IR drop in electrolyte, electrodes and contacts; increases linearly with current.</li><li><b>Concentration (mass-transport) polarisation:</b> reactants cannot reach the electrodes fast enough at high current; voltage collapses.</li></ul>
<span class="eqb">V = E₀ − η_act − I·R − η_conc     → cell voltage falls from ~1.0 V (no load) to ~0.6–0.7 V</span>`,ms:[['Meaning',1],['Three polarisations and effect',2]]},
{id:'afc',m:5,s:['M23:Q20a','A25:Q20a'],q:'Alkaline fuel cell (AFC): construction, working, applications',a:`
<span class="eqb">              e⁻ ────────► [ LOAD ] ────────► e⁻
              │                                │
   H₂ ──► ┌───┴────┐ ┌─────────────────┐ ┌─────┴───┐ ◄── O₂
          │ ANODE  │ │  KOH electrolyte │ │ CATHODE │
          │ porous │ │  (30–45 %)       │ │ porous  │
          │ Ni / Pt│ │   ◄── OH⁻ ions   │ │ Ni / Ag │
  H₂O ◄── └────────┘ └─────────────────┘ └─────────┘
  (water formed at anode, removed with excess H₂)</span>
<h4>Construction</h4><ul><li>Two porous electrodes: anode (nickel or platinum catalyst) and cathode (silver, nickel or platinum).</li><li>Electrolyte: aqueous potassium hydroxide (30–45 % KOH), circulating or held in an asbestos matrix.</li><li>Operating temperature 60–90 °C (up to 250 °C at high pressure); pure H₂ and O₂ required.</li></ul>
<h4>Reactions</h4>
<span class="eqb">Anode:   H₂ + 2OH⁻ → 2H₂O + 2e⁻
Cathode: ½O₂ + H₂O + 2e⁻ → 2OH⁻
Overall: H₂ + ½O₂ → H₂O + electricity + heat</span>
<h4>Working</h4><p>Hydrogen at the anode reacts with hydroxide ions to form water and release electrons, which flow through the external load to the cathode. At the cathode, oxygen, water and electrons form OH⁻ ions, which move through the KOH electrolyte back to the anode. Water produced at the anode is removed.</p>
<h4>Features and applications</h4><ul><li>High efficiency (~60 %), fast oxygen reduction in alkali, non-precious catalysts possible.</li><li>Drawback: CO₂ (even from air) reacts with KOH forming K₂CO₃, poisoning the electrolyte; needs pure O₂.</li><li><b>Applications:</b> spacecraft (Apollo, Space Shuttle: power + drinking water), submarines, military, backup power.</li></ul>`,ms:[['Diagram',2],['Construction',2],['Reactions / working',2.5],['Applications',1]]},
{id:'pemfc',m:5,s:['N24:Q20a'],q:'PEM (proton exchange membrane) fuel cell: construction and working',a:`
<span class="eqb">  bipolar   gas diffusion   catalyst   NAFION    catalyst  gas diffusion   bipolar
  plate │      layer        layer(Pt) MEMBRANE   layer(Pt)    layer       │ plate
   H₂ ═►│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▓▓▓▓│  H⁺ ──►   │▓▓▓▓│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│◄═ O₂/air
        │   ANODE (−)       └────┴───────────┴────┘   CATHODE (+)      │═► H₂O
        └──────── e⁻ ──────────► [ LOAD ] ─────────────────────────────┘
                    membrane electrode assembly (MEA)</span>
<h4>Construction</h4><ul><li><b>Electrolyte:</b> thin (~25–200 µm) solid polymer membrane (Nafion, perfluorosulfonic acid) that conducts protons when hydrated but blocks electrons and gases.</li><li><b>Electrodes:</b> porous carbon with platinum catalyst bonded to both sides of the membrane (membrane electrode assembly, MEA).</li><li><b>Gas diffusion layers</b> (carbon paper) spread gases evenly.</li><li><b>Bipolar plates</b> (graphite/metal) with flow channels supply gases, remove water and connect cells in series in a stack.</li><li>Operating temperature 60–80 °C.</li></ul>
<h4>Working</h4>
<span class="eqb">Anode:   H₂ → 2H⁺ + 2e⁻
Cathode: ½O₂ + 2H⁺ + 2e⁻ → H₂O
Overall: H₂ + ½O₂ → H₂O + electricity + heat</span>
<p>Hydrogen is split at the anode catalyst; protons move through the wet membrane to the cathode while electrons flow through the external circuit. At the cathode oxygen from air combines with them to form water. Cell voltage ~0.7 V on load; stacks give the required voltage.</p>
<h4>Features</h4><ul><li><b>Merits:</b> low temperature, quick start-up, high power density, solid electrolyte (no leakage), compact: ideal for vehicles and portable power.</li><li><b>Demerits:</b> costly platinum; CO poisoning (needs pure H₂); membrane must be kept humidified (water management).</li></ul>`,ms:[['Diagram',2],['Construction',3],['Working with reactions',3]]}
)})(SUBJ.EET435.QB);
