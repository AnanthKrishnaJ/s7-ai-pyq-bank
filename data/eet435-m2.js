/* EET435 Module 2: OTEC and tidal */
(Q=>{Q.push(
{id:'tidal-site',m:2,s:['M26:Q3','A25:Q3','M24:Q14b'],q:'Site selection criteria for a tidal power plant',a:`
<ul><li><b>Large tidal range:</b> at least 5 m (preferably 7–10 m) since energy ∝ R².</li><li><b>Natural bay or estuary</b> with a narrow mouth so a short, cheap barrage can enclose a large basin area.</li><li><b>Firm foundation</b> for the dam/barrage and sluices; low wave action and protection from storms.</li><li><b>Minimum silting and sediment</b> transport into the basin.</li><li><b>Proximity to load centre / grid</b> to reduce transmission cost.</li><li><b>Acceptable environmental and social impact:</b> navigation, fisheries, mangroves, migratory birds.</li></ul>
<p>Indian sites: Gulf of Kutch and Gulf of Khambhat (Gujarat), Sunderbans (West Bengal).</p>`,ms:[['Three criteria explained',3]]},
{id:'biofouling',m:2,s:['M26:Q4','A25:Q4'],q:'Biofouling in OTEC and antifouling techniques',a:`
<p><b>Biofouling</b> is the growth of a layer of micro-organisms (bacterial slime), algae and shellfish on surfaces in contact with seawater, especially heat exchanger tubes. Even a 0.1 mm film greatly increases thermal resistance, so with OTEC's tiny ΔT (~20 °C) it can cut output by 30–50 %.</p>
<h4>Antifouling techniques</h4>
<ul><li><b>Chemical:</b> intermittent chlorination (low dose, e.g. 0.07 ppm for 1 h daily), ozone.</li><li><b>Mechanical cleaning:</b> sponge rubber balls (Amertap system) circulated through tubes, brushes, water jets.</li><li><b>Materials and coatings:</b> titanium or copper-nickel tubes, antifouling paints.</li><li>Higher seawater velocity, thermal shock, ultraviolet treatment.</li></ul>`,ms:[['Definition and effect',1],['Techniques',2]]},
{id:'tidal-calc',m:2,s:['M26:Q13a'],q:'Tidal plant: head 10 m, 7 million tonnes per tide, bidirectional; annual energy',a:`
<span class="eqb">Mass per filling/emptying  m = 7 × 10⁶ t = 7 × 10⁹ kg
Volume  V = m/ρ = 7 × 10⁹ / 1025 = 6.829 × 10⁶ m³
Basin area  A = V/h = 6.829 × 10⁶ / 10 = 6.829 × 10⁵ m²

Water falls through an average head of h/2 = 5 m as the basin empties (or fills):
E per flow = m g (h/2) = ρ g A h²/2
           = 7 × 10⁹ × 9.81 × 5 = 3.434 × 10¹¹ J

Bidirectional turbines generate on both flood and ebb:
E per tidal cycle = 2 × 3.434 × 10¹¹ = 6.867 × 10¹¹ J

Tidal cycles per year (period 12 h 25 min) = 365 × 24 / 12.42 ≈ 705
E annual = 705 × 6.867 × 10¹¹ = 4.84 × 10¹⁴ J

In MWh: 4.84 × 10¹⁴ / 3.6 × 10⁹ = 1.345 × 10⁵ MWh</span>
<p><b>Annual energy potential ≈ 1.34 × 10⁵ MWh (≈ 134,500 MWh)</b>, before turbine and generator losses. (Average power ≈ 134,500/8760 ≈ 15.4 MW.)</p>`,ms:[['Energy per flow',2],['Two-way and tides per year',2],['Annual energy in MWh',2]]},
{id:'otec-closed',m:2,s:['M26:Q13b','A25:Q13a'],q:'Closed-cycle (Anderson cycle) OTEC system',a:`
<p>The closed cycle proposed by d'Arsonval and developed by J. H. Anderson uses a <b>low-boiling working fluid</b> (ammonia, propane, R-134a) in a closed Rankine cycle.</p>
<span class="eqb">  warm surface water (25–28 °C)          cold deep water (4–7 °C, from 800–1000 m)
          │ pump                                     │ pump
          ▼                                          ▼
   ┌─────────────┐  NH₃ vapour   ┌─────────┐      ┌─────────────┐
   │ EVAPORATOR  │──────────────►│ TURBINE │─────►│  CONDENSER  │
   └─────────────┘   high p      └────┬────┘ low p└──────┬──────┘
          ▲                           │                  │ liquid NH₃
          │       ┌──────────────┐  generator ──► grid   │
          └───────│ FEED PUMP    │◄──────────────────────┘
                  └──────────────┘
   warm water out (≈23 °C)                       cold water out (≈10 °C)</span>
<h4>Working</h4><ol><li><b>Evaporator:</b> warm surface seawater flows through a heat exchanger and boils liquid ammonia at about 9–10 bar.</li><li><b>Turbine:</b> the high-pressure vapour expands through a turbine coupled to a generator.</li><li><b>Condenser:</b> exhaust vapour is condensed by cold seawater pumped from 800–1000 m depth.</li><li><b>Feed pump:</b> liquid ammonia is pumped back to the evaporator, completing the cycle.</li></ol>
<p><b>Features:</b> ΔT ≈ 20 °C, Carnot efficiency ≈ ΔT/T<sub>h</sub> ≈ 7 %, actual 2–3 %. Turbine is compact because ammonia vapour at high pressure has small specific volume. Large heat exchangers and pumping power (~30 % of gross output) are needed; biofouling must be controlled.</p>
<p><b>Advantages over open cycle:</b> smaller turbine, no vacuum deaerator. <b>Disadvantages:</b> no fresh water by-product, risk of ammonia leaks, costly heat exchangers.</p>`,ms:[['Block diagram',4],['Working',4],['Features / efficiency',2]]},
{id:'tidal-basins',m:2,s:['M26:Q14a'],q:'Single-basin and double-basin tidal plants: sketches and comparison',a:`
<h4>Single-basin scheme</h4>
<span class="eqb">   SEA        │ dam with sluice gates + turbines │      BASIN
 (tide rises  │        ═══▶ flood / ◀═══ ebb      │  (stored water)
  and falls)  │                                  │</span>
<p>One basin is separated from the sea by a dam. In <b>ebb generation</b> the basin fills through sluices at high tide and is emptied through turbines at low tide. <b>Two-way</b> schemes also generate on the flood. Power is intermittent: zero near slack tide.</p>
<h4>Double-basin scheme</h4>
<span class="eqb">        SEA
   ═══╤═══════════╤═══
      │ sluice    │ sluice
   ┌──▼───┐    ┌──┴───┐
   │ HIGH │═T═►│ LOW  │       T = turbines between the basins
   │BASIN │    │BASIN │
   └──────┘    └──────┘
 high basin filled at high tide, low basin emptied at low tide</span>
<p>The <b>upper basin</b> is filled from the sea at high tide; the <b>lower basin</b> is emptied to the sea at low tide. Turbines between them always have a head, so generation is <b>continuous</b> (with variable head).</p>
<div class="tw"><table class="t"><tr><th>Aspect</th><th>Single basin</th><th>Double basin</th></tr>
<tr><td>Energy production</td><td>Intermittent, 2–4 bursts per day; can be higher per unit area with two-way operation</td><td>Continuous, but lower total energy (average head smaller)</td></tr>
<tr><td>Matching with demand</td><td>Poor, needs storage/backup</td><td>Better, can be regulated</td></tr>
<tr><td>Civil works and cost</td><td>One dam, cheaper</td><td>Two basins and extra dam, costlier</td></tr>
<tr><td>Environmental concerns</td><td>Changes one estuary: tidal range, sediment, fish passage</td><td>Larger area affected; two basins with altered water levels, more habitat loss and siltation</td></tr>
<tr><td>Example</td><td>La Rance (France, 240 MW), Sihwa (Korea)</td><td>Proposed Passamaquoddy (USA/Canada)</td></tr></table></div>`,ms:[['Single-basin sketch + working',3],['Double-basin sketch + working',3],['Comparison: energy and environment',4]]},
{id:'otec-steady',m:2,s:['M26:Q14b'],q:'Why OTEC output varies less than solar or wind',a:`
<ul><li>The ocean surface layer is a huge thermal store: its temperature (25–28 °C in the tropics) changes by only 1–2 °C between day and night and across seasons.</li><li>Deep water at 800–1000 m stays at a nearly constant 4–6 °C all year.</li><li>So the temperature difference ΔT ≈ 20 °C, which drives the plant, is almost constant 24 h a day, unaffected by clouds, night or wind.</li><li>Hence OTEC can run as <b>base-load</b> with capacity factors above 90 %, unlike solar (~20 %) and wind (~30 %), which depend on instantaneous sunlight and wind speed.</li></ul>`,ms:[['Stable surface and deep temperatures',2],['Constant ΔT, base load',2]]},
{id:'otec-open',m:2,s:['M24:Q13a'],q:'Types of OTEC plants; open-cycle (Claude) OTEC',a:`
<p><b>Types:</b> (1) open cycle (Claude cycle), (2) closed cycle (Anderson cycle), (3) hybrid cycle. By location: land-based, shelf-mounted, floating.</p>
<h4>Open-cycle OTEC</h4>
<span class="eqb">warm seawater ─► DEAERATOR ─► FLASH EVAPORATOR (vacuum ~0.03 bar) ─► low-pressure steam
                                      │ unevaporated brine back to sea       │
                                      ▼                                      ▼
                                                                  TURBINE ─► generator
                                                                     │
cold deep seawater ─────────────────────────────────────────►  CONDENSER (surface type)
                                                                     │
                                         desalinated fresh water ◄───┘ (surface condenser)
                       non-condensable gases ─► VACUUM PUMP ─► atmosphere</span>
<ol><li>Warm surface water (~27 °C) is <b>deaerated</b> to remove dissolved gases.</li><li>It enters a vacuum chamber at about 3 kPa, where it <b>flash-evaporates</b>; only ~0.5 % becomes steam, the rest is discharged.</li><li>The low-pressure steam drives a large <b>low-pressure turbine</b> and generator.</li><li>The steam is condensed by cold deep water (~5 °C). A <b>surface condenser</b> gives fresh (desalinated) water; a direct-contact condenser is more efficient but mixes the water.</li><li>A <b>vacuum pump</b> removes non-condensable gases to maintain the vacuum.</li></ol>
<p><b>Advantages:</b> no separate working fluid, by-product of fresh water. <b>Disadvantages:</b> very low steam density so huge turbine, vacuum leakage, high pumping power. Example: 210 kW Keahole Point plant, Hawaii.</p>`,ms:[['Types',2],['Sketch',4],['Working',4]]},
{id:'otec-open-closed',m:2,s:['M23:Q13b','D23:Q3'],q:'Open cycle vs closed cycle OTEC',a:`
<h4>Open cycle (Claude)</h4>
<span class="eqb">warm water ─► flash evaporator (vacuum) ─► steam ─► turbine/generator ─► condenser ─► fresh water
                                                                  ▲ cold deep water</span>
<h4>Closed cycle (Anderson)</h4>
<span class="eqb">warm water ─► evaporator ─► NH₃ vapour ─► turbine/generator ─► condenser ─► pump ─┐
                  ▲                                                ▲ cold water    │
                  └────────────────────── liquid NH₃ ◄─────────────────────────────┘</span>
<div class="tw"><table class="t"><tr><th>Feature</th><th>Open cycle</th><th>Closed cycle</th></tr>
<tr><td>Working fluid</td><td>Seawater itself (steam)</td><td>Ammonia, propane, freon in a closed loop</td></tr>
<tr><td>Evaporation</td><td>Flash evaporation under vacuum (~3 kPa)</td><td>Boiling in a heat exchanger at ~10 bar</td></tr>
<tr><td>Turbine size</td><td>Very large (low-density steam)</td><td>Compact</td></tr>
<tr><td>Heat exchanger</td><td>Not needed for evaporation</td><td>Large evaporator and condenser</td></tr>
<tr><td>By-product</td><td>Fresh water</td><td>None</td></tr>
<tr><td>Problems</td><td>Vacuum maintenance, deaeration</td><td>Biofouling of exchangers, NH₃ leaks</td></tr></table></div>`,ms:[['Open cycle diagram/working',3],['Closed cycle diagram/working',3],['Differences',2]],
a3:`<div class="tw"><table class="t"><tr><th>Open cycle</th><th>Closed cycle</th></tr><tr><td>Seawater is the working fluid</td><td>Separate low-boiling fluid (NH₃) in a closed loop</td></tr><tr><td>Warm water flash-evaporated in vacuum</td><td>Fluid boiled in an evaporator by warm water</td></tr><tr><td>Huge low-pressure turbine</td><td>Compact turbine</td></tr><tr><td>Gives fresh water as by-product</td><td>No fresh water</td></tr></table></div>`,ms3:[['Three differences',3]]},
{id:'otec-hybrid',m:2,s:['D23:Q13a','N24:Q13a'],q:'Hybrid-cycle OTEC system',a:`
<p>A hybrid cycle combines the closed cycle (for power) with the open cycle (for fresh water), getting the advantages of both.</p>
<span class="eqb">warm seawater ─► FLASH CHAMBER (vacuum) ─► low-pressure steam
                     │ brine out                │
                     ▼                          ▼
              ┌──────────────────── EVAPORATOR (steam condenses on tubes)
              │                      │                  │
              │           NH₃ boils inside tubes   condensate = FRESH WATER
              │                      ▼
              │                  TURBINE ─► GENERATOR
              │                      ▼
              │                 CONDENSER ◄── cold deep seawater
              │                      │
              └─── feed pump ◄── liquid NH₃</span>
<h4>Working</h4>
<ol><li>Warm surface seawater enters a vacuum chamber and is <b>flash-evaporated</b> into steam (as in open cycle).</li><li>This steam passes over the <b>ammonia evaporator</b>; it condenses on the tubes and gives up latent heat, boiling the ammonia inside.</li><li>The condensed steam is collected as <b>desalinated fresh water</b>.</li><li>Ammonia vapour drives the <b>turbine–generator</b> (closed Rankine cycle).</li><li>Exhaust ammonia is condensed by <b>cold deep seawater</b> and pumped back to the evaporator.</li></ol>
<h4>Advantages</h4><ul><li>Produces both electricity and fresh water.</li><li>Compact ammonia turbine (closed cycle).</li><li>Ammonia evaporator is in contact with clean steam, not seawater, so less biofouling and corrosion.</li></ul>
<p><b>Disadvantages:</b> more complex, extra vacuum system and heat exchangers, higher cost.</p>`,ms:[['Block diagram',4],['Working',4],['Advantages',2]]},
{id:'tidal-double',m:2,s:['D23:Q14a','N24:Q14a','M23:Q14b'],q:'Double-basin tidal power plant: layout and working',a:`
<span class="eqb">                         OPEN SEA
   ══════╤═════════════════════════════════╤═════════
         │ inlet sluices                   │ outlet sluices
   ┌─────▼──────────────┐  ┌───────────────┴─────┐
   │                    │  │                     │
   │   UPPER (HIGH)     │T │    LOWER (LOW)      │
   │      BASIN         │══►      BASIN          │
   │                    │  │                     │
   └────────────────────┘  └─────────────────────┘
        T = powerhouse with turbines between the two basins</span>
<h4>Components</h4><ul><li>Two adjacent basins separated from the sea and from each other by dams (barrages).</li><li>Inlet sluice gates between sea and upper basin; outlet sluices between lower basin and sea.</li><li>Powerhouse with turbine–generator sets in the dam between the basins.</li></ul>
<h4>Working</h4>
<ol><li><b>Rising tide:</b> inlet sluices open; the upper basin fills to high-tide level, then the gates close.</li><li><b>Falling tide:</b> outlet sluices open; the lower basin drains to low-tide level, then they close.</li><li>Water flows from the upper basin to the lower basin through the turbines <b>continuously</b>, because a head always exists between them.</li><li>Flow is regulated so the upper basin does not empty and the lower does not fill before the next refill/drain.</li></ol>
<h4>Features</h4><ul><li><b>Advantage:</b> continuous, controllable output; can be partly matched to demand.</li><li><b>Disadvantages:</b> head is lower and variable, so total energy is less; two dams cost more; larger environmental impact.</li></ul>`,ms:[['Labelled layout',4],['Working',4],['Merits / demerits',2]]},
{id:'tidal-single',m:2,s:['A25:Q14a'],q:'Single-basin tidal power plant: schematic and working',a:`
<span class="eqb">   OPEN SEA             DAM / BARRAGE              BASIN
                   ┌─────────────────────┐
 high tide ~~~~~~  │ sluice gates   ⇄    │   ~~~~~~ basin level
                   │ powerhouse (bulb    │
 low tide  ~~~~~~  │ turbines)      ⇄    │
                   └─────────────────────┘</span>
<h4>Components</h4><ul><li>Dam or barrage across a bay/estuary, creating one basin.</li><li>Sluice gates to admit or release water quickly.</li><li>Powerhouse with low-head reversible bulb turbines (Kaplan type) and generators.</li></ul>
<h4>Modes of working</h4>
<ul><li><b>Ebb generation (one-way):</b> during flood tide the sluices open and the basin fills. Gates close at high tide. When the sea falls and a sufficient head builds up, water flows from basin to sea through the turbines, generating power until the head becomes too small.</li>
<li><b>Flood generation:</b> basin kept empty; water flows from sea into basin through turbines as the tide rises (less used because basin bottom is sloping).</li>
<li><b>Two-way generation:</b> reversible turbines generate on both ebb and flood; sluices used near slack water.</li>
<li><b>Pumping:</b> turbines can pump water into the basin at high tide using cheap off-peak power to increase head.</li></ul>
<p><b>Output:</b> intermittent; 2 or 4 generating periods per day. Example: La Rance, France (240 MW, 24 bulb units of 10 MW, tidal range 8 m).</p>`,ms:[['Schematic',4],['Components',2],['Working modes',4]]},
{id:'tidal-methods',m:2,s:['M24:Q14a'],q:'Methods of tidal power generation and their limitations',a:`
<h4>1. Single-basin, one-way (ebb) generation</h4><p>Basin fills through sluices at flood tide; water discharged through turbines at ebb. <b>Limitations:</b> generates only ~4–6 h per tide, intermittent; output timing shifts daily and does not match demand.</p>
<h4>2. Single-basin, two-way generation</h4><p>Reversible turbines generate during both flood and ebb. <b>Limitations:</b> expensive reversible turbines with lower efficiency; average head smaller; still zero output near slack water.</p>
<h4>3. Single-basin with pumping</h4><p>Off-peak power pumps extra water into the basin to increase the head. <b>Limitation:</b> needs pump-turbines and grid power; extra cost and complexity.</p>
<h4>4. Double-basin scheme</h4><p>High and low basins with turbines between them give continuous output. <b>Limitations:</b> two dams, high capital cost; lower head so less energy; larger environmental impact.</p>
<h4>5. Tidal stream (current) turbines</h4><p>Underwater turbines (like wind turbines) placed in strong tidal currents; no dam. <b>Limitations:</b> need currents above 2 m/s, corrosion, biofouling, difficult maintenance, navigation hazard.</p>
<h4>General limitations</h4><ul><li>Few suitable sites with tidal range above 5 m.</li><li>Very high initial cost of barrage; low capacity factor (~25 %).</li><li>Ecological effects: silting, fish passage, salinity changes.</li></ul>`,ms:[['Methods explained',6],['Limitations of each',4]]},
{id:'otec-site',m:2,s:['M23:Q3','N24:Q3'],q:'Site selection criteria for OTEC',a:`
<ul><li><b>Temperature difference:</b> at least 20 °C between surface and 1000 m depth, all year: tropical seas between latitudes 20° N and 20° S.</li><li><b>Deep water close to shore:</b> steep sea floor so cold water at 800–1000 m is within a short pipe length (for land-based plants).</li><li><b>Calm sea and low storm risk</b> (cyclones, hurricanes) for safe pipes and platforms.</li><li><b>Proximity to load/grid</b> and demand for fresh water or aquaculture by-products.</li><li>Low biofouling, low marine traffic, minimal ecological sensitivity.</li></ul>
<p>Indian sites: Lakshadweep, Andaman and Nicobar Islands, coast of Tamil Nadu (Kulasekarapattinam).</p>`,ms:[['Three criteria explained',3]]},
{id:'tidal-principle',m:2,s:['M23:Q4','N24:Q14b'],q:'Principle of tidal energy conversion',a:`
<p>Tides are periodic rise and fall of sea level caused by the gravitational pull of the moon (and sun) and the rotation of the earth. The difference between high and low water is the <b>tidal range R</b>.</p>
<p>A dam traps water in a basin at high tide. When the sea falls, a head develops between basin and sea; the water is released through low-head turbines, converting <b>potential energy</b> of the stored water into kinetic energy and then electricity (as in a hydro plant). Turbines may also run as water enters at flood tide.</p>
<span class="eqb">Energy per filling (or emptying) of a basin of area A:
E = ½ ρ g A R²      (average head R/2 for volume A·R)
Average power over a tidal cycle (T = 12.42 h):  P = ρ g A R² / (2T)  per flow</span>
<p>Since E ∝ R², sites with large tidal ranges (5–12 m) are needed.</p>`,ms:[['Cause of tides / tidal range',1],['Conversion principle',1.5],['Energy expression',1.5]]},
{id:'tides',m:2,s:['M23:Q14a'],q:'How tides occur; advantages and disadvantages of tidal energy',a:`
<h4>Formation of tides</h4>
<span class="eqb">           far-side bulge        near-side bulge
                ◖~~~(  EARTH  )~~~◗ ─ ─ ─ ─ ─ ─ ─ ─ ●  MOON
  (inertial/centrifugal effect)   (gravitational pull)</span>
<ul><li>The moon's gravity pulls the ocean on the near side of the earth, making a water bulge; on the far side, the centrifugal effect of the earth–moon system rotating about their common centre of mass makes a second bulge.</li><li>As the earth rotates through the two bulges, each place has two high and two low tides every lunar day (24 h 50 min), so one tidal cycle is ~12 h 25 min.</li><li><b>Spring tides:</b> at new and full moon, sun and moon are in line, their effects add: maximum range.</li><li><b>Neap tides:</b> at quarter moons, sun and moon at right angles: minimum range.</li><li>Local coastline shape (funnel-shaped bays) amplifies the range (Bay of Fundy ~16 m).</li></ul>
<h4>Advantages</h4><ul><li>Renewable and highly predictable years ahead, unlike wind or solar.</li><li>No fuel, no emissions; long plant life (~100 years); barrage can serve as a road bridge and flood protection.</li></ul>
<h4>Disadvantages</h4><ul><li>Very high capital cost; few sites with large tidal range.</li><li>Intermittent output with phase shifting daily; ecological effects on estuaries, fish and silting.</li></ul>`,ms:[['Tide formation with sketch',4],['Two advantages',1.5],['Two disadvantages',1.5]]},
{id:'tidal-env',m:2,s:['D23:Q14b','A25:Q14b','D23:Q4'],q:'Environmental impacts of tidal power plants',a:`
<ul><li><b>Change in tidal range and water levels</b> inside the basin; intertidal mudflats and wetlands may be flooded or exposed, destroying bird feeding grounds.</li><li><b>Sedimentation and silting</b> in the basin because the barrage slows water; changes in turbidity.</li><li><b>Water quality:</b> changes in salinity, temperature and dissolved oxygen; pollutants may accumulate.</li><li><b>Fish and marine life:</b> turbines injure fish; barrage blocks migration routes of fish and mammals.</li><li><b>Navigation and fishing</b> disrupted; locks needed.</li><li><b>Positive:</b> no air pollution or greenhouse gases; barrage protects coast from storm surges.</li></ul>`,ms:[['Four impacts',4]]},
{id:'otec-principle',m:2,s:['M23:Q13a'],q:'Principle of OTEC; advantages, limitations, environmental impacts',a:`
<p><b>Principle:</b> the sun heats the ocean surface to 25–28 °C in the tropics, while water at 800–1000 m stays at 4–7 °C. A heat engine operating between these two reservoirs (ΔT ≈ 20 °C) converts part of the heat into work: warm water evaporates a working fluid (or itself under vacuum), the vapour drives a turbine, and cold deep water condenses it. Carnot efficiency η = (T<sub>h</sub> − T<sub>c</sub>)/T<sub>h</sub> ≈ 20/300 ≈ 6.7 %; practical 2–3 %.</p>
<h4>Advantages</h4><ul><li>Continuous base-load power, not intermittent.</li><li>By-products: fresh water, cold water for air-conditioning and aquaculture.</li></ul>
<h4>Limitations</h4><ul><li>Very low efficiency, so huge flows and heat exchangers; high capital cost.</li><li>Long cold-water pipe, biofouling and corrosion; only tropical sites.</li></ul>
<h4>Environmental impacts</h4><ul><li>Discharge of cold, nutrient-rich water changes local temperature and ecosystems.</li><li>Release of dissolved CO₂ from deep water.</li><li>Ammonia or chlorine (antifouling) leaks.</li><li>Entrainment of fish and plankton in intake pipes; noise and disturbance of marine life.</li></ul>`,ms:[['Principle',2],['Advantages and limitations',2],['Environmental impacts',2]]},
{id:'otec-adv',m:2,s:['D23:Q13b','A25:Q13b'],q:'Advantages of OTEC systems',a:`
<ul><li><b>Renewable and continuous:</b> ocean temperature difference available 24 h, so base-load power (capacity factor &gt; 90 %).</li><li><b>No fuel and no emissions</b> during operation.</li><li><b>Fresh water</b> from open/hybrid cycles for islands.</li><li><b>Cold nutrient-rich deep water</b> for air-conditioning, mariculture and aquaculture.</li><li>Can produce hydrogen and ammonia on floating plants; energy security for island nations.</li></ul>`,ms:[['Four advantages',4]]},
{id:'otec-limits',m:2,s:['N24:Q13b'],q:'Limitations of OTEC systems',a:`
<ul><li><b>Very low efficiency</b> (2–3 %) because ΔT is only ~20 °C, so huge water flows, pumps and heat exchangers are needed; pumping uses 20–30 % of output.</li><li><b>High capital cost</b>; long cold-water pipe (1 m to 10 m diameter, ~1 km long) is difficult to build and moor.</li><li><b>Biofouling and corrosion</b> of heat exchangers in seawater.</li><li><b>Few sites:</b> only tropical oceans; far from load centres, so transmission by undersea cable is costly.</li><li>Open cycle needs huge low-pressure turbines; environmental concerns.</li></ul>`,ms:[['Four limitations',4]]},
{id:'otec-env',m:2,s:['M24:Q13b'],q:'Environmental impacts of OTEC plants',a:`
<ul><li><b>Cold-water discharge</b> at the surface lowers local temperature and brings up nutrients, which can trigger algal blooms and change ecosystems.</li><li><b>CO₂ release:</b> deep water holds more dissolved CO₂, partly released when warmed.</li><li><b>Chemical leaks:</b> ammonia from closed cycle; chlorine used for antifouling.</li><li><b>Entrainment and impingement</b> of fish, eggs and plankton at intakes; construction disturbs coral reefs and sea floor; noise.</li></ul>`,ms:[['Four impacts',4]]},
{id:'tidal-parts',m:2,s:['M24:Q4','N24:Q4'],q:'Main components of a tidal power plant',a:`
<ul><li><b>Dam / barrage / dyke:</b> a barrier across the bay or estuary that separates the basin from the sea and holds the water.</li><li><b>Sluice gates:</b> large gates in the dam to fill or empty the basin quickly when not generating.</li><li><b>Powerhouse:</b> houses low-head turbines (bulb, Kaplan or Straflo, often reversible) with generators and switchgear.</li></ul>
<p>Also: navigation locks for ships, and the basin itself.</p>`,ms:[['Dam',1],['Sluice gates',1],['Powerhouse/turbines',1]]}
)})(SUBJ.EET435.QB);
