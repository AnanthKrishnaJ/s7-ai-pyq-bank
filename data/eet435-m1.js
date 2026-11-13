/* EET435 Module 1: energy sources and solar */
(Q=>{Q.push(
{id:'energy-class',m:1,s:['M26:Q1','M23:Q11a','M24:Q1'],q:'Classification of energy sources (primary/secondary, conventional/non-conventional), advantage of electrical energy, future in India',a:`
<div class="tw"><table class="t"><tr><th>Basis</th><th>Types</th><th>Examples</th></tr>
<tr><td>Origin</td><td><b>Primary:</b> found in nature, used directly or converted<br><b>Secondary:</b> derived from primary sources</td><td>Coal, oil, gas, sunlight, wind, uranium<br>Electricity, hydrogen, petrol, steam</td></tr>
<tr><td>Renewability</td><td><b>Renewable:</b> replenished naturally<br><b>Non-renewable:</b> finite stock</td><td>Solar, wind, hydro, biomass, tidal<br>Coal, oil, natural gas, nuclear fuel</td></tr>
<tr><td>Usage tradition</td><td><b>Conventional:</b> in large-scale use for decades<br><b>Non-conventional:</b> newer, mostly renewable</td><td>Coal, large hydro, oil, nuclear<br>Solar, wind, OTEC, tidal, geothermal, fuel cells</td></tr>
<tr><td>Commercial status</td><td><b>Commercial</b> vs <b>non-commercial</b></td><td>Electricity, LPG vs firewood, cow dung, crop waste</td></tr>
<tr><td>Form</td><td>Thermal, mechanical, chemical, electrical, nuclear</td><td>Steam, flowing water, fuels, grid power, fission</td></tr></table></div>
<h4>Why use energy as electricity</h4>
<ul><li>Easily transmitted over long distances with low loss and instantly available.</li><li>Easily converted to light, heat, motion and sound with high efficiency.</li><li>Clean at the point of use; precise control (switching, speed control).</li><li>Lets any primary source (coal, sun, wind, water) feed the same grid.</li></ul>
<h4>Future of non-conventional energy in India</h4>
<ul><li>High solar insolation (4–7 kWh/m²/day, ~300 sunny days), 7,500 km coastline, good wind sites in Tamil Nadu, Gujarat, Karnataka.</li><li>Target of 500 GW non-fossil capacity by 2030; National Solar Mission, Green Hydrogen Mission, solar parks, rooftop PV, PM-KUSUM for farm pumps.</li><li>Biomass and biogas suit rural areas; small hydro in hilly states.</li><li>Reduces oil imports and CO₂ emissions; creates jobs.</li></ul>`,ms:[['Classification with examples',4],['Advantage of electricity / future in India',2]],
a3:`<ul><li><b>Primary</b> (coal, oil, gas, sun, wind) vs <b>secondary</b> (electricity, hydrogen, petrol).</li><li><b>Renewable</b> (solar, wind, hydro, biomass) vs <b>non-renewable</b> (coal, oil, nuclear).</li><li><b>Conventional</b> (coal, large hydro) vs <b>non-conventional</b> (solar, wind, tidal, OTEC).</li></ul>
<p><b>Electricity's advantage:</b> easy to transmit and control, converts efficiently to any other form, clean at the point of use. <b>India's future:</b> excellent solar and wind resources, 500 GW non-fossil target by 2030, cuts oil imports.</p>`,ms3:[['Classification',2],['Second part',1]]},
{id:'conv-nonconv',m:1,s:['D23:Q1','A25:Q1','N24:Q1'],q:'Conventional vs non-conventional energy sources: differences, advantages and disadvantages',a:`
<div class="tw"><table class="t"><tr><th>Conventional</th><th>Non-conventional</th></tr>
<tr><td>Coal, oil, natural gas, large hydro, nuclear</td><td>Solar, wind, tidal, OTEC, biomass, geothermal</td></tr>
<tr><td>Mostly non-renewable, will run out</td><td>Renewable, inexhaustible</td></tr>
<tr><td>Polluting (CO₂, SO₂, ash)</td><td>Clean, little or no emission</td></tr>
<tr><td>Mature technology, high capacity factor, cheap per kWh</td><td>Newer technology, intermittent, high initial cost</td></tr>
<tr><td>Centralised large plants</td><td>Can be decentralised, near the load</td></tr></table></div>
<h4>Conventional sources</h4><p><b>Advantages:</b> reliable 24×7 base-load, high energy density, established technology and supply chains. <b>Disadvantages:</b> finite reserves, air pollution and global warming, fuel price volatility and import dependence, mining and waste disposal problems (ash, nuclear waste).</p>
<h4>Non-conventional sources</h4><p><b>Advantages:</b> free and inexhaustible fuel, clean, low running cost, suitable for remote areas. <b>Disadvantages:</b> intermittent and site-specific, low energy density so large area needed, high capital cost, need storage or backup.</p>`,ms:[['Differences / advantages',1.5],['Disadvantages',1.5]]},
{id:'energy-demand',m:1,s:['M24:Q3'],q:'Factors influencing the demand of energy',a:`
<ul><li><b>Population growth</b> and urbanisation.</li><li><b>Economic growth and industrialisation</b> (GDP, manufacturing).</li><li><b>Standard of living</b>: appliances, air conditioning, vehicles.</li><li><b>Price of energy</b> and government policies/subsidies.</li><li><b>Climate and season</b>: heating or cooling needs.</li><li><b>Technology and efficiency</b> of devices; electrification of transport.</li></ul>`,ms:[['Any six factors',3]]},
{id:'pv-factors',m:1,s:['M26:Q2','M23:Q12a','N24:Q12b'],q:'Factors affecting PV output; parameters for selecting a panel; effect of insolation on I-V and P-V curves',a:`
<h4>Factors affecting PV power</h4>
<ul><li><b>Insolation (irradiance):</b> current is almost proportional to irradiance.</li><li><b>Cell temperature:</b> V<sub>oc</sub> falls about 2.3 mV/°C per cell (≈0.4–0.5 %/°C power loss).</li><li><b>Tilt and orientation</b> (face south in India, tilt ≈ latitude), tracking.</li><li><b>Shading, dust and soiling</b>; one shaded cell limits the whole string.</li><li><b>Load matching</b> (operating at the maximum power point), cell type and efficiency, ageing, wiring losses.</li></ul>
<h4>Parameters for selecting a panel</h4>
<ul><li>Rated power P<sub>max</sub> at STC (1000 W/m², 25 °C, AM 1.5) and tolerance.</li><li>Efficiency and fill factor.</li><li>V<sub>oc</sub>, I<sub>sc</sub>, V<sub>mp</sub>, I<sub>mp</sub> (to match inverter/charge controller).</li><li>Temperature coefficient of power (smaller is better).</li><li>NOCT, degradation rate, warranty, cell technology (mono/poly/thin film), bypass diodes, size and weight.</li></ul>
<h4>Effect of insolation</h4>
<span class="eqb">  I                                  P
  │ ───────────╮   1000 W/m²          │        ╭╮  1000 W/m²
  │ ────────╮  │    600 W/m²          │     ╭╮ │ ╲
  │ ─────╮  │  │    300 W/m²          │  ╭╮ │ ╲│  ╲
  │      │  │  │                      │ ╱ ╲╱   ╲   ╲
  └──────┴──┴──┴── V                  └─────────────── V
      Voc rises only slightly             MPP moves up and slightly right</span>
<ul><li>I<sub>sc</sub> is directly proportional to insolation, so the I-V curve shifts up/down.</li><li>V<sub>oc</sub> increases only logarithmically: V<sub>oc</sub> ≈ (kT/q) ln(I<sub>L</sub>/I<sub>0</sub>).</li><li>So maximum power falls almost in proportion with insolation; the P-V peak moves down and slightly left at low light.</li></ul>`,ms:[['Factors / parameters',4],['Insolation effect with curves',3]],
a3:`<ul><li><b>Solar irradiance:</b> current and power rise almost linearly with insolation.</li><li><b>Temperature:</b> higher cell temperature lowers V<sub>oc</sub> and power (~0.45 %/°C).</li><li><b>Shading, dust, tilt/orientation,</b> load matching (MPP), cell efficiency and ageing.</li></ul>`,ms3:[['Three factors explained',3]]},
{id:'pv-losses',m:1,s:['M24:Q12a'],q:'Losses in a solar cell and how they reduce efficiency',a:`
<ul><li><b>Spectral (photon energy) losses:</b> photons with E &lt; E<sub>g</sub> (1.1 eV for Si) are not absorbed (~23 % loss); excess energy of high-energy photons is lost as heat (~33 %). This sets the Shockley–Queisser limit (~33 %).</li>
<li><b>Reflection loss:</b> bare silicon reflects ~30 % of light; reduced by anti-reflection coating (SiN) and surface texturing.</li>
<li><b>Shading by top contacts:</b> metal fingers cover 5–10 % of the surface.</li>
<li><b>Incomplete absorption / transmission:</b> thin cells let some long-wavelength light pass through.</li>
<li><b>Recombination losses:</b> electron–hole pairs recombine (surface, bulk, at defects) before reaching the junction, lowering I<sub>sc</sub> and V<sub>oc</sub>.</li>
<li><b>Series resistance</b> (contacts, emitter, bulk) causes I²R loss and lowers fill factor; <b>low shunt resistance</b> (leakage paths) diverts current.</li>
<li><b>Temperature:</b> efficiency falls ~0.4–0.5 % per °C rise.</li>
<li><b>Module and system losses:</b> mismatch between cells, dust, wiring, inverter.</li></ul>
<p><b>Result:</b> theoretical ~33 %, commercial Si cells 18–23 %, modules 16–21 %.</p>`,ms:[['Loss mechanisms',5],['Effect on efficiency',2]]},
{id:'variability',m:1,s:['M26:Q11a'],q:'Problems due to variability of wind and solar and their mitigation',a:`
<h4>Problems</h4>
<ul><li><b>Intermittency:</b> solar output is zero at night and drops with clouds; wind varies minute to minute and seasonally.</li><li><b>Supply–demand mismatch:</b> solar peaks at noon, demand peaks in the evening ("duck curve").</li><li><b>Frequency and voltage fluctuations</b>; inverter-based sources give little inertia.</li><li><b>Forecasting errors</b> make scheduling and unit commitment difficult; need spinning reserve.</li><li><b>Curtailment</b> and low capacity factor (solar ~20 %, wind ~25–35 %).</li></ul>
<h4>Mitigation</h4>
<ul><li><b>Energy storage:</b> batteries, pumped hydro, hydrogen, thermal storage in CSP plants.</li><li><b>Hybrid systems:</b> solar + wind + diesel/biomass complement each other.</li><li><b>Geographic spread</b> and strong interconnected grid to smooth output.</li><li><b>Accurate forecasting</b> of weather and generation.</li><li><b>Demand-side management</b>, smart grid, time-of-day tariff.</li><li><b>Flexible backup</b> (gas turbines, hydro) and grid-forming inverters.</li></ul>`,ms:[['Problems',3],['Mitigation',3]]},
{id:'conc-collectors',m:1,s:['M26:Q11b'],q:'Two concentrating solar collectors with sketches',a:`
<p>Concentrating collectors use mirrors or lenses to focus direct radiation onto a small absorber, giving high temperatures (150–1000 °C). Concentration ratio C = aperture area / absorber area.</p>
<h4>1. Parabolic trough collector (line focus)</h4>
<span class="eqb">      sun rays ↓ ↓ ↓ ↓
   ╲                      ╱
    ╲   ●  ← absorber    ╱    receiver tube in glass envelope
     ╲      tube        ╱     at the focal line
      ╲_______________╱       parabolic mirror (trough)
          tracking about one axis (N–S)</span>
<p>A long parabolic mirror reflects rays to a steel absorber tube along its focal line. Oil flowing in the tube is heated to ~400 °C and used to raise steam. Single-axis tracking; C ≈ 30–80.</p>
<h4>2. Central tower (heliostat field, point focus)</h4>
<span class="eqb">                 ▓ receiver
                 █
   ⟋  ⟋  ⟋       █ tower       ⟍  ⟍  ⟍
 heliostats (two-axis tracking mirrors) all aim at the receiver</span>
<p>Hundreds of flat mirrors each track the sun on two axes and reflect onto a receiver on a tall tower. Molten salt/water heated to 500–1000 °C produces steam for a turbine; molten salt also stores heat. C ≈ 300–1500.</p>
<p>(Other option: <b>parabolic dish</b>, point focus with a Stirling engine at the focus, C up to 2000.)</p>`,ms:[['First collector: sketch + working',4],['Second collector: sketch + working',4]]},
{id:'ptc',m:1,s:['A25:Q12a','M26:Q12b'],q:'Parabolic trough collector: construction, working and use in a solar thermal power plant',a:`
<span class="eqb">         direct beam ↓ ↓ ↓ ↓ ↓
   ╲                               ╱
    ╲         ⊙  absorber tube     ╱     glass envelope (vacuum)
     ╲    ↗       ↖              ╱      around black-coated steel tube
      ╲  reflected rays          ╱
       ╲______________________ ╱        silvered parabolic mirror
               │ pylon + single-axis tracking drive

 Solar field ──hot oil 390°C──► Heat exchanger / boiler ──steam──► Turbine ─► Generator
     ▲                               │                                │
     └────────── cool oil 290°C ─────┘        condenser ◄─────────────┘
                    (optional molten-salt thermal storage)</span>
<h4>Construction</h4>
<ul><li><b>Reflector:</b> long trough of parabolic cross-section, silvered glass or polished aluminium.</li><li><b>Receiver/absorber:</b> steel tube with selective black coating at the focal line, enclosed in an evacuated glass tube to cut convection losses.</li><li><b>Heat transfer fluid:</b> synthetic oil (or water for direct steam).</li><li><b>Tracking:</b> single-axis (usually N–S axis, tracking E–W).</li><li>Modules connected in long rows in series/parallel.</li></ul>
<h4>Working</h4>
<ul><li>Beam radiation falling parallel to the axis is reflected to the focal line and absorbed by the tube.</li><li>Oil is heated to ~390 °C and pumped to a heat exchanger that produces superheated steam.</li><li>Steam runs a Rankine-cycle turbine–generator; exhaust is condensed and returned.</li><li>Storage tanks of molten salt let the plant run after sunset.</li></ul>
<p><b>Features:</b> concentration ratio 30–80, temperature 150–400 °C, efficiency ~14–16 % solar to electric. Uses only direct (beam) radiation. Example: SEGS plants (California), Andasol (Spain).</p>`,ms:[['Sketch',3],['Construction',3],['Working in a power plant',4]]},
{id:'central-tower',m:1,s:['D23:Q11a','M23:Q11b'],q:'Central tower solar thermal electric power plant',a:`
<span class="eqb">                         ┌───────┐  receiver (molten salt / water)
                         │▓▓▓▓▓▓▓│
                         └───┬───┘
       ⟋ ⟋ ⟋ ⟋               │ tower (100–200 m)        ⟍ ⟍ ⟍ ⟍
    heliostat field ─────────┤                     heliostat field
                             │
     cold salt tank ◄────────┼──────► hot salt tank (565 °C)
         ▲                                   │
         │                         steam generator ──steam──► turbine ─► generator ─► grid
         └──────────── condenser ◄───────────────────────────────┘</span>
<h4>Components</h4>
<ul><li><b>Heliostats:</b> large flat or slightly curved mirrors, each on a two-axis sun-tracking mount, controlled by computer.</li><li><b>Tower and central receiver:</b> absorber panels at the top on which all heliostats focus.</li><li><b>Heat transfer fluid:</b> water/steam, molten nitrate salt, or air.</li><li><b>Thermal storage:</b> hot and cold molten-salt tanks.</li><li><b>Power block:</b> steam generator, turbine, generator, condenser, cooling tower.</li></ul>
<h4>Working</h4>
<ol><li>Heliostats track the sun and reflect beam radiation onto the receiver (concentration 300–1500).</li><li>The fluid in the receiver is heated to 500–1000 °C.</li><li>Hot salt is stored and pumped through the steam generator to make superheated steam.</li><li>Steam drives a Rankine-cycle turbine and generator; exhaust steam is condensed and returned.</li><li>Storage allows output after sunset (up to 15 h).</li></ol>
<h4>Advantages</h4><ul><li>High temperature gives high cycle efficiency (~20 %).</li><li>Easy, cheap thermal storage: dispatchable power.</li><li>Large unit sizes (10–200 MW).</li></ul>
<p><b>Limitations:</b> needs large land and direct sunlight, high capital cost, water for cooling. Examples: Solar Two (USA), Gemasolar (Spain).</p>`,ms:[['Labelled sketch',4],['Working',4],['Advantages',2]]},
{id:'mppt',m:1,s:['M26:Q12a'],q:'Maximum power point tracking (MPPT) with PV characteristics',a:`
<span class="eqb">   I,P
    │Isc ─────────────╮                P-V curve
    │                 │╲        ╭─╮
    │            Imp ─┼─●  MPP ╱   ╲
    │                 │  ╲    ╱     ╲
    │                 │   ╲  ╱       ╲
    └─────────────────┴────╲──────────╲── V
                     Vmp           Voc</span>
<p>A PV array has only one operating point, the <b>maximum power point (MPP)</b> at (V<sub>mp</sub>, I<sub>mp</sub>), where dP/dV = 0. It moves with insolation (current changes) and temperature (voltage changes). A directly connected load usually operates away from it.</p>
<h4>Principle</h4><p>A DC–DC converter (buck, boost or buck-boost) is placed between the array and the load/battery. By changing its duty cycle D, the converter changes the resistance seen by the array: R<sub>in</sub> = R<sub>load</sub>(1 − D)²/D² for a buck-boost. The MPPT controller adjusts D so that R<sub>in</sub> = V<sub>mp</sub>/I<sub>mp</sub>.</p>
<h4>Algorithms</h4>
<ul><li><b>Perturb and Observe (hill climbing):</b> change V by a small step; if P increases keep stepping in that direction, otherwise reverse. Simple, but oscillates around MPP.</li><li><b>Incremental conductance:</b> uses dP/dV = 0 ⇒ dI/dV = −I/V. If dI/dV &gt; −I/V the point is left of MPP (increase V); if less, right of MPP (decrease V).</li><li><b>Fractional V<sub>oc</sub>:</b> V<sub>mp</sub> ≈ 0.76 V<sub>oc</sub>; <b>fractional I<sub>sc</sub>:</b> I<sub>mp</sub> ≈ 0.9 I<sub>sc</sub>.</li></ul>
<span class="eqb">PV array ─► DC–DC converter ─► battery / inverter / load
   │  V, I sensed        ▲ duty cycle D
   └──► MPPT controller ─┘</span>
<p><b>Benefit:</b> extracts 20–30 % more energy than direct connection, especially in changing weather.</p>`,ms:[['I-V / P-V curves with MPP',3],['MPPT principle with converter',3],['Algorithm',2]]},
{id:'pv-adv',m:1,s:['M23:Q1','A25:Q11b','M24:Q11b'],q:'Advantages and disadvantages of solar PV systems (over conventional power)',a:`
<h4>Advantages</h4><ul><li>Free, inexhaustible fuel; no fuel transport.</li><li>No moving parts, silent, low maintenance, long life (25+ years).</li><li>No emissions during operation.</li><li>Modular: from watts to megawatts; can be installed at the point of use (rooftop), cutting transmission losses.</li><li>Ideal for remote areas without grid; quick installation.</li></ul>
<h4>Disadvantages</h4><ul><li>High initial cost (though falling).</li><li>Low efficiency (15–22 %), so large area needed.</li><li>Intermittent: no output at night, reduced on cloudy days; needs storage or grid backup.</li><li>Output DC, needs inverter; power quality issues.</li><li>Performance falls with temperature and dust; disposal of panels and batteries.</li></ul>`,ms:[['Advantages',2],['Disadvantages',2]]},
{id:'conc-vs-flat',m:1,s:['M23:Q2','D23:Q12b','N24:Q11b'],q:'Concentrating (focusing) vs non-concentrating (flat plate) collectors',a:`
<div class="tw"><table class="t"><tr><th>Feature</th><th>Flat plate (non-concentrating)</th><th>Concentrating / focusing</th></tr>
<tr><td>Radiation used</td><td>Beam and diffuse</td><td>Beam (direct) only</td></tr>
<tr><td>Concentration ratio</td><td>1</td><td>&gt; 1 (10 to 1000+)</td></tr>
<tr><td>Temperature</td><td>Below 100 °C</td><td>150–1000 °C+</td></tr>
<tr><td>Tracking</td><td>Not needed, fixed</td><td>Single or two-axis tracking needed</td></tr>
<tr><td>Heat loss</td><td>High (large absorber area)</td><td>Low (small absorber)</td></tr>
<tr><td>Cost and maintenance</td><td>Simple, cheap</td><td>Costly, mirrors need cleaning</td></tr>
<tr><td>Applications</td><td>Water heating, space heating, drying</td><td>Power generation, industrial process heat</td></tr></table></div>`,ms:[['Four points of comparison',3]]},
{id:'standalone',m:1,s:['M23:Q12b','N24:Q12a'],q:'Stand-alone PV system: components and working',a:`
<span class="eqb">  PV array ──► Charge controller / MPPT ──┬──► DC loads
  (modules,         │                     │
   bypass/          ▼                     └──► Inverter ──► AC loads
   blocking      Battery bank
   diodes)       (lead-acid / Li-ion)
                                    (optional backup: diesel generator via charger)</span>
<h4>Components and functions</h4>
<ul><li><b>PV array:</b> modules in series (voltage) and parallel (current) convert sunlight to DC. Bypass diodes protect against shading; a blocking diode stops battery discharge into the array at night.</li>
<li><b>Charge controller with MPPT:</b> extracts maximum power, regulates battery charging (prevents overcharge) and disconnects the load at low battery voltage (prevents deep discharge).</li>
<li><b>Battery bank:</b> stores energy for night and cloudy days; sized for days of autonomy.</li>
<li><b>Inverter:</b> converts DC to 230 V, 50 Hz AC for AC loads (sine-wave preferred).</li>
<li><b>Loads:</b> DC lamps, fans, pumps or AC appliances.</li>
<li><b>Balance of system:</b> cables, fuses, switches, earthing, mounting structure, meters.</li></ul>
<h4>Working</h4><p>In daytime the array supplies the load through the controller and the surplus charges the battery. At night or in low sunlight the battery supplies the load. The controller protects the battery at both ends. Not connected to the grid, so used in remote homes, telecom towers, street lights and water pumps.</p>`,ms:[['Block diagram',3],['Function of each component',5],['Working',2]]},
{id:'standalone-apps',m:1,s:['D23:Q2'],q:'Applications of stand-alone PV systems',a:`
<ul><li><b>Solar water pumping</b> for irrigation and drinking water (PM-KUSUM), no battery needed.</li><li><b>Solar street lights and home lighting systems</b> in villages without grid.</li><li><b>Telecom towers, railway signalling, remote monitoring stations</b>, navigation buoys and lighthouses.</li></ul>
<p>Also: vaccine refrigerators in health centres, battery charging, space satellites.</p>`,ms:[['Three applications explained',3]]},
{id:'cell-types',m:1,s:['M24:Q2','A25:Q12b'],q:'Types of solar cells',a:`
<ul><li><b>Monocrystalline silicon:</b> cut from a single Si crystal (Czochralski), uniform dark colour, efficiency 20–24 %, costly.</li>
<li><b>Polycrystalline (multicrystalline) silicon:</b> cast from many crystals, bluish speckled look, 15–18 %, cheaper.</li>
<li><b>Amorphous silicon (thin film):</b> non-crystalline Si deposited on glass, 6–10 %, flexible, works in low light, degrades.</li>
<li><b>Cadmium telluride (CdTe):</b> thin film, ~18–22 %, lowest cost per watt; Cd is toxic.</li>
<li><b>CIGS (copper indium gallium selenide):</b> thin film, ~20 %, flexible.</li>
<li><b>Gallium arsenide / multi-junction:</b> 30–47 %, used in space and concentrators.</li>
<li><b>Emerging:</b> perovskite, dye-sensitised (Grätzel), organic cells.</li></ul>`,ms:[['Three or more types described',3]]},
{id:'radiation-instr',m:1,s:['M24:Q11a'],q:'Pyranometer, pyrheliometer and sunshine recorder',a:`
<h4>(i) Pyranometer: measures global (beam + diffuse) radiation on a horizontal surface</h4>
<span class="eqb">        ╭──────╮  two concentric glass domes
       ╱ ▓░▓░▓░ ╲ black and white sectors / thermopile sensor
      ═══════════  white guard ring, level, base</span>
<p>Radiation passes through hemispherical glass domes onto a black surface (hot junctions of a thermopile); cold junctions are under white surfaces or the body. The temperature difference produces an emf (~10 µV per W/m²) proportional to irradiance. With a <b>shading ring</b> blocking the sun, it measures diffuse radiation only.</p>
<h4>(ii) Pyrheliometer: measures direct (beam) radiation at normal incidence</h4>
<span class="eqb">  sun ═══►  ┃ collimating tube (aperture ~5.7°) ┃► blackened thermopile / absorber</span>
<p>A long tube with a small aperture always points at the sun (tracking), so only beam radiation reaches the sensor at the bottom. In the <b>Ångström compensation type</b>, one blackened strip is exposed and an identical shaded strip is heated electrically until their temperatures match; the electrical power I²R equals the absorbed radiation. Thermopile (Eppley) types give an emf directly.</p>
<h4>(iii) Sunshine recorder (Campbell–Stokes): measures hours of bright sunshine</h4>
<span class="eqb">        ◯  glass sphere (lens)
      ╰───╯ curved card holder with calibrated card behind the sphere</span>
<p>A solid glass sphere focuses the sun onto a graduated card. When sunshine is bright, the focused spot burns a trace on the card; as the sun moves, the trace moves along the card. The total length of the burnt trace gives the duration of bright sunshine in hours. Cards are changed daily (different cards for seasons).</p>`,ms:[['Pyranometer',3.5],['Pyrheliometer',3.5],['Sunshine recorder',3]]},
{id:'solar-cell',m:1,s:['M24:Q12b','A25:Q2'],q:'Construction and working of a solar cell',a:`
<span class="eqb">        sunlight ↓ ↓ ↓
   ┃▀▀▀┃     ┃▀▀▀┃     ← front metal grid (fingers)
 ░░░░░░░░░░░░░░░░░░░░  ← anti-reflection coating
 ════ n-type Si (thin, ~0.3 µm, P-doped) ════
 ---------------- p–n junction / depletion layer (built-in field)
 ════ p-type Si (thick, ~200 µm, B-doped) ════
 ████████████████████  ← back metal contact
      ─► load ◄─  (electrons flow from n-side through load)</span>
<h4>Construction</h4><ul><li>A thin n-type layer diffused on a thicker p-type silicon wafer forms a p–n junction near the surface.</li><li>Front contact is a thin metal grid so light can enter; back contact covers the whole rear.</li><li>Anti-reflection coating and textured surface reduce reflection.</li></ul>
<h4>Working (photovoltaic effect)</h4><ol><li>Photons with energy greater than the band gap (1.1 eV for Si) create electron–hole pairs.</li><li>The built-in electric field of the depletion region separates them: electrons go to the n-side, holes to the p-side.</li><li>This builds a voltage (~0.5–0.6 V per cell); when a load is connected, current flows through it.</li><li>Cells are connected in series and parallel to form modules.</li></ol>`,ms:[['Diagram',2],['Construction',2],['Working',3]],
a3:`<p>A solar cell is a large-area p–n junction: a thin n-type layer on a p-type silicon wafer, with a front grid contact, anti-reflection coating and full back contact.</p><p>Photons with E &gt; E<sub>g</sub> create electron–hole pairs; the junction field drives electrons to the n-side and holes to the p-side, giving ~0.6 V. Connecting a load makes current flow (photovoltaic effect).</p>`,ms3:[['Construction',1.5],['Working',1.5]]},
{id:'pv-params',m:1,s:['N24:Q11a','D23:Q11b'],q:'Equivalent circuit of a practical solar cell; I-V curve, Isc, Voc, MPP, fill factor, efficiency',a:`
<h4>Equivalent circuit</h4>
<span class="eqb">        ┌──────────┬──────────┬──────Rs──────┬─── +
        │          │          │              │
       (↑) I_L     ▼ D       Rsh             V   (load)
        │          │          │              │
        └──────────┴──────────┴──────────────┴─── −
 I = I_L − I₀[exp(q(V + I·Rs)/(n·k·T)) − 1] − (V + I·Rs)/Rsh</span>
<ul><li><b>I<sub>L</sub></b>: light-generated current source, proportional to irradiance.</li><li><b>D</b>: the p–n junction diode (dark current I<sub>0</sub>).</li><li><b>R<sub>s</sub></b>: series resistance of contacts and bulk (should be small).</li><li><b>R<sub>sh</sub></b>: shunt resistance from leakage (should be large).</li></ul>
<h4>I-V curve</h4>
<span class="eqb">  I
 Isc ●────────────────╮
     │                │╲
 Imp ┼ - - - - - - - -● MPP (Vmp, Imp)
     │   area Vmp·Imp │  ╲
     │                │   ╲
     └────────────────┼────●──── V
                     Vmp   Voc</span>
<ul><li><b>Short-circuit current I<sub>sc</sub>:</b> current when V = 0; equals I<sub>L</sub> ideally. Maximum current.</li>
<li><b>Open-circuit voltage V<sub>oc</sub>:</b> voltage when I = 0; V<sub>oc</sub> = (nkT/q) ln(I<sub>L</sub>/I<sub>0</sub> + 1) ≈ 0.6 V for Si.</li>
<li><b>Maximum power point:</b> point on the curve where P = V·I is maximum, P<sub>m</sub> = V<sub>mp</sub>I<sub>mp</sub>.</li>
<li><b>Fill factor:</b> FF = V<sub>mp</sub>I<sub>mp</sub> / (V<sub>oc</sub>I<sub>sc</sub>), the ratio of the largest rectangle under the curve to the rectangle V<sub>oc</sub> × I<sub>sc</sub>. Typical 0.7–0.85; measures "squareness" of the curve.</li>
<li><b>Conversion efficiency:</b> η = P<sub>m</sub>/P<sub>in</sub> = FF·V<sub>oc</sub>·I<sub>sc</sub> / (G × A), where G is irradiance (W/m²) and A the cell area. Measured at STC.</li></ul>`,ms:[['Equivalent circuit + equation',4],['Definitions (Isc, Voc, FF, η)',4],['I-V curve with MPP',2]]},
{id:'fpc',m:1,s:['D23:Q12a','A25:Q11a'],q:'Flat plate solar collector: construction and working',a:`
<span class="eqb">         solar radiation ↓ ↓ ↓
   ┌─────────────────────────────────────┐ ← glass cover(s) (transparent to short-wave)
   │            air gap                  │
   │ ▬▬●▬▬▬▬●▬▬▬▬●▬▬▬▬●▬▬▬▬●▬▬▬▬●▬▬▬▬▬▬ │ ← black absorber plate with riser tubes (●)
   │▒▒▒▒▒▒▒▒▒▒ insulation (glass wool) ▒▒▒│
   └─────────────────────────────────────┘ ← metal casing
   cold water in → bottom header → risers → top header → hot water out</span>
<h4>Construction</h4>
<ul><li><b>Absorber plate:</b> copper or aluminium sheet with selective black coating (high absorptivity ~0.95, low emissivity).</li><li><b>Tubes (risers and headers):</b> bonded to the plate; carry water or air.</li><li><b>Transparent cover:</b> one or two glass sheets; lets in short-wave sunlight but blocks long-wave re-radiation (greenhouse effect) and reduces convection.</li><li><b>Insulation:</b> glass wool or polyurethane at the back and sides.</li><li><b>Casing:</b> weather-proof box, tilted at about latitude angle facing south.</li></ul>
<h4>Working</h4>
<ol><li>Beam and diffuse radiation pass through the glass and are absorbed by the black plate, which heats up.</li><li>Heat is conducted to the fluid in the tubes.</li><li>Hot water rises to the storage tank by natural circulation (thermosiphon) or is pumped; cold water returns from the bottom.</li><li>Glass and insulation keep heat losses low.</li></ol>
<p><b>Useful energy:</b> Q<sub>u</sub> = A<sub>c</sub>F<sub>R</sub>[S − U<sub>L</sub>(T<sub>i</sub> − T<sub>a</sub>)]; efficiency η = Q<sub>u</sub>/(A<sub>c</sub>I<sub>T</sub>), about 40–60 %. Temperature up to ~80 °C.</p>
<p><b>Applications:</b> domestic and hotel water heating, space heating, crop drying. <b>Advantages:</b> uses diffuse radiation, no tracking, simple and cheap.</p>`,ms:[['Labelled diagram',4],['Construction',3],['Working',3]]},
{id:'solar-thermal-principle',m:1,s:['N24:Q2'],q:'Principle of solar energy conversion into heat (photothermal conversion)',a:`
<ul><li>Short-wave solar radiation (0.3–3 µm) falls on a black absorber surface, which absorbs most of it (absorptivity α ≈ 0.95) and gets hot.</li><li>A glass cover is transparent to short-wave radiation but opaque to the long-wave infrared (&gt; 3 µm) re-emitted by the hot plate: the <b>greenhouse effect</b> traps the heat.</li><li>The heat is transferred to a fluid (water/air/oil) by conduction and convection and carried away; insulation reduces losses. Concentrating with mirrors gives higher temperatures.</li></ul>`,ms:[['Absorption by black surface',1],['Greenhouse effect',1],['Transfer to fluid',1]]}
)})(SUBJ.EET435.QB);
