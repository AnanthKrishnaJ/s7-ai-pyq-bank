/* EET435 quick-revision answers, Module 1 (energy sources and solar).
   L = long-question answer, S = 3-mark answer. Same mini format as data/cst423-qr.js:
   plain line = intro, "# " numbered point, "- " bullet, "Ex: " example, "= " conclusion, "@ " easy-way-to-remember line. */
(R=>{SUBJ.EET435.QB.forEach(c=>{const r=R[c.id];if(!r)return;if(r.L)c.qr=r.L;if(r.S)c.qr3=r.S})})({

'energy-class':{L:`
Energy sources are grouped in different ways depending on where they come from, whether they get used up, and how long they have been in use.
# Primary and secondary
- <b>Primary:</b> found in nature and used directly: coal, oil, gas, sunlight, wind, uranium.
- <b>Secondary:</b> made from primary sources: electricity, hydrogen, petrol, steam.
# Renewable and non-renewable
- <b>Renewable:</b> refilled by nature, never run out: solar, wind, hydro, biomass, tidal.
- <b>Non-renewable:</b> limited stock: coal, oil, natural gas, nuclear fuel.
# Conventional and non-conventional
- <b>Conventional:</b> used on a large scale for many years: coal, large hydro, oil, nuclear.
- <b>Non-conventional:</b> newer, mostly renewable: solar, wind, OTEC, tidal, geothermal, fuel cells.
# Commercial and non-commercial
- <b>Commercial:</b> bought and sold: electricity, LPG, petrol.
- <b>Non-commercial:</b> collected free: firewood, cow dung, crop waste.
# Why electricity is the best form to use
- Easy to send over long distances and available instantly.
- Easily changed into light, heat and motion; clean at the point of use; easy to control.
# Future of non-conventional energy in India
- Strong sun, long coastline, good wind sites; target of 500 GW non-fossil power by 2030.
- Cuts oil imports and pollution; creates jobs.
= Energy sources are classified by origin, renewability, tradition and trade; renewable, non-conventional sources are the future.
@ P-R-C-C: Primary or secondary, Renewable or not, Conventional or not, Commercial or not.`,
S:`
Energy sources are classified by origin, renewability and how long they have been used.
- <b>Primary vs secondary:</b> coal, sun, wind (natural) vs electricity, hydrogen (made from others).
- <b>Renewable vs non-renewable:</b> solar, wind, hydro vs coal, oil, nuclear.
- <b>Conventional vs non-conventional:</b> coal, large hydro vs solar, wind, tidal.
- <b>Why electricity:</b> easy to transmit and control, converts to any form, clean at the point of use.
@ P-R-C: Primary, Renewable, Conventional.`},

'conv-nonconv':{S:`
Conventional sources are the traditional fuels used for decades; non-conventional sources are newer, mostly renewable ones.
- <b>Examples:</b> coal, oil, gas, large hydro vs solar, wind, tidal, biomass.
- <b>Nature:</b> limited, will run out vs renewable, never run out.
- <b>Pollution:</b> high CO<sub>2</sub>, smoke, ash vs clean, little emission.
- <b>Reliability:</b> steady 24-hour supply vs intermittent, needs storage.
- <b>Cost:</b> cheap mature technology vs high initial cost, low running cost.
@ Conventional = Old, Polluting, Reliable; Non-conventional = New, Clean, Variable.`},

'energy-demand':{S:`
Energy demand is the amount of energy a country or region needs, and it grows with people and development.
- <b>Population and urbanisation:</b> more people and cities need more energy.
- <b>Industry and economic growth:</b> factories and higher GDP use more power.
- <b>Standard of living:</b> appliances, AC, vehicles raise demand.
- <b>Price and policy, climate, and efficiency</b> of devices also change demand.
@ People, Industry, Lifestyle, Price, Climate.`},

'pv-factors':{L:`
The power from a solar PV cell depends on sunlight, temperature and how well the panel is installed and matched to the load.
# Insolation (sunlight intensity)
- Current is almost directly proportional to irradiance.
- V<sub>oc</sub> rises only a little; so power falls almost in step with sunlight.
# Cell temperature
- Higher temperature lowers V<sub>oc</sub> by about 2.3 mV/°C per cell.
- Power drops about 0.4–0.5 % for every 1 °C rise.
# Installation
- Tilt angle about equal to latitude, facing south in India; tracking adds output.
- Shading, dust and dirt cut output; one shaded cell can limit the whole string.
# Panel choice (parameters to check)
- Rated power at STC, efficiency, fill factor.
- V<sub>oc</sub>, I<sub>sc</sub>, V<sub>mp</sub>, I<sub>mp</sub>, temperature coefficient, warranty.
# Effect of insolation on I–V and P–V curves
- I–V curve shifts down as sunlight falls; I<sub>sc</sub> ∝ insolation.
- P–V peak (MPP) moves down and slightly left.
= More sun means more power; more heat means less power, so panels must be cool, clean, well placed and matched.
@ Sun UP = current UP; Heat UP = voltage DOWN.`,
S:`
PV output depends mainly on sunlight, temperature and installation.
- <b>Insolation:</b> current and power rise almost linearly with sunlight.
- <b>Temperature:</b> higher cell temperature lowers voltage and power (~0.45 %/°C).
- <b>Shading, dust, tilt and orientation, MPP matching, ageing</b> also reduce output.
@ Sun up, current up; heat up, voltage down.`},

'pv-losses':{L:`
A solar cell turns only 18–23 % of sunlight into electricity because of several losses.
# Photon energy (spectral) losses
- Photons with energy below the band gap (1.1 eV for Si) are not absorbed.
- Extra energy of strong photons is lost as heat; limit about 33 %.
# Reflection and shading losses
- Bare silicon reflects about 30 % of light; reduced by anti-reflection coating and texturing.
- Front metal fingers block 5–10 % of the surface.
# Recombination losses
- Electron–hole pairs recombine before reaching the junction.
- Lowers both current and voltage.
# Resistance losses
- Series resistance causes I²R loss and lowers fill factor.
- Low shunt resistance allows leakage current.
# Temperature and system losses
- Efficiency falls about 0.4–0.5 % per °C rise.
- Mismatch, dust, wiring and inverter losses in a module or system.
= These losses together keep commercial cells near 20 % efficiency.
@ R-R-R-T: Reflection, Recombination, Resistance, Temperature.`},

'variability':{L:`
Solar and wind power change with weather and time of day, which makes the grid harder to run.
# Problems
- <b>Intermittency:</b> no solar at night, less on cloudy days; wind changes minute to minute.
- <b>Mismatch:</b> solar peaks at noon but demand peaks in the evening.
- <b>Grid stability:</b> frequency and voltage swings; little inertia.
- <b>Forecasting errors and curtailment;</b> low capacity factor (solar ~20 %, wind ~30 %).
# Mitigation
- <b>Energy storage:</b> batteries, pumped hydro, hydrogen, thermal storage.
- <b>Hybrid systems:</b> solar + wind + backup together.
- <b>Strong grid and spread-out plants</b> to smooth output.
- <b>Forecasting, demand-side management and flexible backup plants.</b>
= Variability is handled by storing, sharing and forecasting energy.
@ Problem: Sun sleeps, Wind sulks. Fix: Store, Share, Forecast.`},

'conc-collectors':{L:`
Concentrating collectors use mirrors to focus direct sunlight on a small absorber, giving high temperatures (150–1000 °C).
# Parabolic trough collector (line focus)
- Long curved parabolic mirror focuses sunlight on a tube along its focal line.
- Oil in the tube is heated to about 400 °C and used to make steam.
- Single-axis tracking; concentration ratio 30–80.
# Central tower collector (point focus)
- Many flat mirrors (heliostats) track the sun on two axes.
- All reflect onto a receiver at the top of a tall tower.
- Fluid (molten salt / water) heated to 500–1000 °C drives a steam turbine; salt also stores heat.
Ex: Andasol (trough, Spain); Gemasolar (tower, Spain).
= Concentrators give high temperature for power plants but use only direct sunlight and need tracking.
@ Trough = LINE focus; Tower = POINT focus.`},

'ptc':{L:`
A parabolic trough collector (PTC) is a long curved mirror that focuses sunlight onto a pipe to heat a fluid for a solar thermal power plant.
# Construction
- Parabolic mirror (silvered glass) in long rows.
- Black-coated steel absorber tube at the focal line, inside an evacuated glass tube.
- Heat transfer fluid (synthetic oil) and a single-axis tracking drive.
# Working
- Direct sunlight hits the mirror and is reflected to the focal line.
- The absorber tube heats the oil to about 390 °C.
# Use in a power plant
- Hot oil goes to a heat exchanger and makes superheated steam.
- Steam drives a turbine and generator; it is condensed and returned.
- Molten-salt storage lets the plant run after sunset.
# Features
- Concentration ratio 30–80; efficiency about 14–16 %.
- Uses only beam radiation; needs tracking.
Ex: SEGS (California), Andasol (Spain).
= The PTC turns sunlight into high-temperature heat that runs a normal steam power cycle.
@ Mirror bends light to a Line, Oil carries heat to the Turbine.`},

'central-tower':{L:`
A central tower plant uses a field of sun-tracking mirrors to focus sunlight onto a receiver on top of a tower and generate steam for electricity.
# Components
- <b>Heliostats:</b> flat mirrors with two-axis tracking.
- <b>Tower and receiver:</b> absorber at the top where all mirrors focus.
- <b>Heat transfer fluid:</b> water/steam or molten salt.
- <b>Thermal storage</b> (hot and cold salt tanks) and <b>power block</b> (steam generator, turbine, condenser).
# Working
- Heliostats reflect sunlight on the receiver (concentration 300–1500).
- Fluid is heated to 500–1000 °C and stored in the hot tank.
- Hot salt makes steam; steam runs the turbine and generator.
- Storage allows power for hours after sunset.
# Advantages
- High temperature gives higher efficiency (~20 %).
- Cheap heat storage, so power is available when needed.
- Large plant sizes (10–200 MW).
Ex: Solar Two (USA), Gemasolar (Spain).
= The central tower is the highest-temperature solar thermal plant and can supply power at night.
@ Many Mirrors, One Tower, Salt Stores heat.`},

'mppt':{L:`
Maximum Power Point Tracking (MPPT) is a control method that keeps a PV panel working at the point where it gives the most power.
# Why it is needed
- The I–V curve has one point (V<sub>mp</sub>, I<sub>mp</sub>) of maximum power, where dP/dV = 0.
- This point moves with sunlight and temperature; a directly connected load usually misses it.
# How it works
- A DC–DC converter (buck, boost or buck-boost) is placed between panel and load.
- Changing the duty cycle changes the resistance seen by the panel.
- The controller adjusts the duty cycle so the panel always sits at the MPP.
# Algorithms
- <b>Perturb and Observe:</b> change voltage a little; if power rises keep going, else reverse.
- <b>Incremental conductance:</b> at MPP dI/dV = −I/V.
- <b>Fractional V<sub>oc</sub>:</b> V<sub>mp</sub> ≈ 0.76 V<sub>oc</sub>.
# Benefit
- Gives 20–30 % more energy, especially in changing weather.
= MPPT keeps the panel at its best operating point automatically.
@ MPPT = keep the panel at its HAPPY point.`},

'pv-adv':{L:`
Solar PV converts sunlight directly into electricity; it has clear benefits but also some limits.
# Advantages
- Free, unlimited fuel; no fuel transport.
- No moving parts, silent, low maintenance, 25+ year life.
- No pollution while running.
- Modular: can be small (rooftop) or large; power made near the user, less transmission loss.
- Good for remote places with no grid.
# Disadvantages
- High initial cost.
- Low efficiency (15–22 %), so large area needed.
- No output at night, less on cloudy days; needs storage or grid.
- DC output needs an inverter; performance drops with heat and dust.
= PV is clean and simple to run but costly to start and depends on sunlight.
@ Pros: Free, Silent, Modular. Cons: Costly, Night-off, Large area.`},

'conc-vs-flat':{L:`
Flat plate (non-concentrating) collectors absorb sunlight directly, while concentrating collectors focus it with mirrors.
# Flat plate collector
- Uses both beam and diffuse radiation.
- Concentration ratio = 1; temperature below 100 °C.
- Fixed, no tracking; simple and cheap.
- Used for water heating, space heating, drying.
# Concentrating (focusing) collector
- Uses only direct (beam) radiation.
- Concentration ratio 10 to over 1000; temperature 150–1000 °C.
- Needs single- or two-axis tracking; costly, mirrors need cleaning.
- Used for power generation and industrial heat.
= Flat plates suit low-temperature heating; concentrators suit high-temperature power.
@ Flat = Low heat, No tracking; Focus = High heat, Needs tracking.`},

'standalone':{L:`
A stand-alone PV system works without the grid; it uses a battery to supply power day and night.
# PV array
- Panels in series and parallel make DC power.
- Bypass diodes protect from shading; blocking diode stops night discharge.
# Charge controller with MPPT
- Extracts maximum power from the array.
- Stops battery overcharge and deep discharge.
# Battery bank
- Stores energy for night and cloudy days (lead-acid or Li-ion).
# Inverter
- Converts DC to 230 V, 50 Hz AC for AC loads.
# Loads and balance of system
- DC lamps, fans, pumps or AC appliances; cables, fuses, earthing, mounting.
# Working
- Day: array supplies load and charges the battery.
- Night: battery supplies the load through the inverter.
Ex: solar home systems, telecom towers, street lights.
= Panel makes, controller protects, battery stores, inverter converts.
@ P-C-B-I: Panel, Controller, Battery, Inverter.`},

'standalone-apps':{S:`
Stand-alone PV systems supply power where there is no grid.
- <b>Solar water pumping</b> for irrigation and drinking water (PM-KUSUM).
- <b>Solar street lights and home lighting</b> in remote villages.
- <b>Telecom towers, railway signals, remote monitoring stations</b> and lighthouses.
@ Pumps, Lights, Towers.`},

'cell-types':{L:`
Solar cells are made from different materials, which changes their efficiency and cost.
# Monocrystalline silicon
- Cut from a single Si crystal; dark uniform colour.
- Efficiency 20–24 %; costly.
# Polycrystalline silicon
- Made from many crystals; blue speckled look.
- Efficiency 15–18 %; cheaper.
# Thin film cells
- <b>Amorphous Si:</b> 6–10 %, flexible, works in low light.
- <b>CdTe:</b> ~20 %, low cost per watt.
- <b>CIGS:</b> ~20 %, flexible.
# Advanced cells
- <b>Multi-junction (GaAs):</b> 30–47 %, used in space.
- <b>Perovskite, dye-sensitised, organic:</b> new, low-cost research cells.
= Mono is most efficient, poly is cheaper, thin film is flexible.
@ Mono best, Poly cheaper, Thin flexible.`},

'radiation-instr':{L:`
Solar radiation is measured with three main instruments: pyranometer, pyrheliometer and sunshine recorder.
# Pyranometer
- Measures <b>global</b> (beam + diffuse) radiation on a flat surface.
- Two glass domes let light fall on a black sensor (thermopile).
- Temperature difference gives an emf proportional to radiation.
- With a shading ring it measures only diffuse radiation.
# Pyrheliometer
- Measures <b>direct (beam)</b> radiation from the sun.
- A long tube with a small opening always points at the sun.
- Only beam radiation reaches the blackened sensor at the end.
- Ångström type compares a sunlit strip with an electrically heated strip.
# Sunshine recorder (Campbell–Stokes)
- Measures <b>hours of bright sunshine</b>.
- A glass sphere focuses sunlight onto a marked card and burns a trace.
- Length of the burnt trace gives sunshine hours.
= Pyranometer = whole sky, pyrheliometer = sun only, sunshine recorder = duration.
@ Pyrano = All sky; Pyrhelio = Sun only; Recorder = Hours.`},

'solar-cell':{L:`
A solar cell is a large p–n junction that turns sunlight directly into electricity by the photovoltaic effect.
# Construction
- Thin n-type silicon layer on a thick p-type silicon wafer; p–n junction near the surface.
- Front metal grid (fingers) lets light enter; full metal contact at the back.
- Anti-reflection coating and textured surface reduce reflection.
# Working
- Photons with energy above the band gap (1.1 eV) create electron–hole pairs.
- The junction's electric field pushes electrons to the n-side and holes to the p-side.
- This gives a voltage of about 0.5–0.6 V.
- When a load is connected, current flows through it.
# Module
- Cells are joined in series and parallel to make modules and arrays.
= Light makes charge pairs and the junction separates them to give electricity.
@ Light makes PAIRS, Junction PUSHES them apart.`,
S:`
A solar cell is a large p–n junction that converts sunlight into electricity.
- <b>Construction:</b> thin n-layer on p-type silicon, front grid, back contact, anti-reflection coating.
- <b>Working:</b> light creates electron–hole pairs; junction field separates them.
- Gives about 0.6 V; current flows when a load is connected.
@ Light makes pairs, junction pushes them apart.`},

'pv-params':{L:`
A practical solar cell is modelled by an equivalent circuit, and its performance is described by I<sub>sc</sub>, V<sub>oc</sub>, fill factor and efficiency.
# Equivalent circuit
- <b>Current source I<sub>L</sub>:</b> light-generated current, proportional to sunlight.
- <b>Diode D:</b> the p–n junction.
- <b>Series resistance R<sub>s</sub>:</b> contacts and bulk (should be small).
- <b>Shunt resistance R<sub>sh</sub>:</b> leakage paths (should be large).
# Short-circuit current (I<sub>sc</sub>)
- Current when the terminals are shorted (V = 0); maximum current.
# Open-circuit voltage (V<sub>oc</sub>)
- Voltage when no current flows (I = 0); about 0.6 V for Si.
# Maximum power point and fill factor
- P<sub>m</sub> = V<sub>mp</sub> × I<sub>mp</sub> is the largest rectangle under the I–V curve.
- FF = V<sub>mp</sub>I<sub>mp</sub> / (V<sub>oc</sub>I<sub>sc</sub>), usually 0.7–0.85.
# Efficiency
- η = P<sub>m</sub> / (G × A), where G is irradiance and A is cell area.
= Isc and Voc are the limits; FF and efficiency show how good the cell is.
@ FF = squareness of the I–V curve.`},

'fpc':{L:`
A flat plate collector absorbs sunlight on a black plate and transfers the heat to water or air, mainly for water heating.
# Construction
- <b>Absorber plate:</b> copper/aluminium sheet with black selective coating.
- <b>Tubes:</b> risers and headers bonded to the plate carry water.
- <b>Glass cover:</b> lets sunlight in, traps heat (greenhouse effect).
- <b>Insulation</b> at back and sides, and a weather-proof <b>casing</b>.
# Working
- Sunlight passes through glass and heats the black plate.
- Heat flows to the water in the tubes.
- Hot water rises to the tank (thermosiphon) or is pumped; cold water returns.
- Glass and insulation reduce heat loss.
# Performance
- Temperature up to about 80 °C; efficiency 40–60 %.
- Uses both beam and diffuse radiation; no tracking.
Ex: domestic and hotel solar water heaters.
= The flat plate collector is a simple, cheap way to get hot water from the sun.
@ Glass traps, Black absorbs, Pipes carry, Insulation keeps.`},

'solar-thermal-principle':{S:`
Solar energy is converted into heat when sunlight is absorbed by a dark surface.
- <b>Absorption:</b> a black surface absorbs short-wave sunlight and gets hot.
- <b>Greenhouse effect:</b> a glass cover lets sunlight in but traps the long-wave heat given out.
- <b>Heat transfer:</b> water, air or oil carries the heat away; insulation reduces loss.
@ Absorb, Trap, Transfer.`},

});
