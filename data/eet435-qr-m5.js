/* EET435 quick-revision answers, Module 5 (small hydro, hydrogen, fuel cells). Format as in data/cst423-qr.js. */
(R=>{SUBJ.EET435.QB.forEach(c=>{const r=R[c.id];if(!r)return;if(r.L)c.qr=r.L;if(r.S)c.qr3=r.S})})({

'hi-head-turb':{S:`
High head with low to medium flow suits impulse-type turbines.
- <b>Pelton wheel:</b> impulse turbine for heads above ~150 m, low discharge.
- <b>Turgo impulse turbine:</b> jet strikes at an angle; heads 50–250 m, more flow than Pelton.
- <b>Francis turbine</b> (medium–high head) or <b>cross-flow</b> turbine for small hydro.
@ High head = Pelton.`},

'fc-adv':{S:`
A fuel cell converts the chemical energy of hydrogen and oxygen directly into electricity, heat and water.
- <b>Advantages:</b> high efficiency (40–60 %), silent, no moving parts, modular, fast response.
- <b>Environmental benefits for city transport:</b> no tailpipe pollution (CO, NOx, PM); little or no CO<sub>2</sub>; quiet streets.
- <b>Applications:</b> fuel-cell buses and cars, backup power for hospitals and telecom, laptops, spacecraft.
@ Fuel cell = Clean, Quiet, Efficient.`},

'shp-adv':{L:`
Small hydro (up to 25 MW) has many advantages over large (mega) hydro projects.
# Environment and people
- Mostly run-of-river; little or no reservoir.
- No large flooding of villages and forests; no big displacement of people.
- Less change to river ecology and fish.
# Cost and time
- Small investment; built in 1–3 years (mega: 8–15 years).
# Simple engineering
- Local materials and labour; low dam-safety and earthquake risk.
# Local supply
- Powers remote hilly villages directly; low transmission losses.
# Other
- Standard equipment, community or private ownership, low running cost, long life.
= Small hydro gives clean local power with little harm, low cost and quick build.
@ Small dam, Small cost, Small time, Small harm.`},

'fc-h2o2':{L:`
A hydrogen–oxygen fuel cell produces electricity directly from H<sub>2</sub> and O<sub>2</sub>, with water as the only product.
# Construction
- Two porous carbon electrodes with platinum catalyst: anode (H<sub>2</sub> side) and cathode (O<sub>2</sub> side).
- Electrolyte between them (acid, polymer membrane or KOH).
- Gas channels supply H<sub>2</sub> and O<sub>2</sub>; external circuit carries electrons.
# Reactions (acid electrolyte)
- Anode: 2H<sub>2</sub> → 4H<sup>+</sup> + 4e<sup>−</sup>.
- Cathode: O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O.
- Overall: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O + electricity + heat (1.23 V ideal).
# Working
- H<sub>2</sub> splits into protons and electrons at the anode.
- Protons pass through the electrolyte; electrons flow through the load.
- They join with O<sub>2</sub> at the cathode to form water; cells are stacked for higher voltage.
# Advantages
- 40–60 % efficiency, no pollution, silent, modular.
# Disadvantages / difficulties
- Costly platinum and membranes; hydrogen production, storage and supply problems.
- Catalyst poisoning and limited life; DC output needs converters.
= Hydrogen gives electrons at the anode, oxygen takes them at the cathode, and water is formed.
@ Hydrogen gives electrons at Anode; Oxygen takes them at Cathode.`},

'h2-prod':{L:`
Hydrogen is mainly produced by steam reforming of natural gas and by electrolysis of water.
# Steam methane reforming (SMR)
- Methane and steam react over nickel catalyst at 700–1000 °C: CH<sub>4</sub> + H<sub>2</sub>O → CO + 3H<sub>2</sub>.
- Shift reaction: CO + H<sub>2</sub>O → CO<sub>2</sub> + H<sub>2</sub>.
- CO<sub>2</sub> removed by pressure swing adsorption; cheapest, but emits CO<sub>2</sub>.
# Electrolysis of water
- DC current splits water: 2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub>.
- H<sub>2</sub> at the cathode, O<sub>2</sub> at the anode; KOH or PEM electrolyte.
- Very pure H<sub>2</sub>; green if powered by solar or wind.
# Other methods
- Coal/biomass gasification, thermochemical cycles, biological (algae).
= SMR is cheap but dirty; electrolysis is clean if the electricity is renewable.
@ SMR = Gas + Steam; Electrolysis = Water + Current.`},

'francis':{L:`
The Francis turbine is a reaction turbine where water enters the runner radially and leaves axially; it suits medium heads.
# Spiral casing
- Closed passage of reducing area around the runner; spreads water evenly.
# Stay vanes and guide vanes
- Stay vanes support the casing; adjustable guide vanes control flow and direct water onto the runner.
# Runner
- Wheel with 16–24 curved blades; water enters at the outer edge and leaves at the centre.
# Draft tube
- Expanding pipe from runner to tail race; recovers exit energy.
# Working principle
- Water has both pressure and kinetic energy at the runner inlet.
- As it flows through the blades, pressure falls and direction changes; the reaction turns the runner.
# Range
- Heads 30–300 m; efficiency 90–95 %; cavitation at part load.
= Spiral casing → guide vanes → runner → draft tube.
@ S-V-R-D: Spiral, Vanes, Runner, Draft.`},

'electrolysis':{L:`
Electrolysis splits water into hydrogen and oxygen using direct current.
# Construction
- Cell with two electrodes (nickel/steel) in 25–30 % KOH solution.
- Porous diaphragm keeps H<sub>2</sub> and O<sub>2</sub> apart; DC power supply.
# Reactions
- Cathode (−): 2H<sub>2</sub>O + 2e<sup>−</sup> → H<sub>2</sub> + 2OH<sup>−</sup>.
- Anode (+): 2OH<sup>−</sup> → ½O<sub>2</sub> + H<sub>2</sub>O + 2e<sup>−</sup>.
- Overall: H<sub>2</sub>O → H<sub>2</sub> + ½O<sub>2</sub>; at least 1.23 V (1.8–2.2 V in practice).
# Working
- Water is reduced at the cathode giving H<sub>2</sub>; OH<sup>−</sup> moves to the anode giving O<sub>2</sub>.
- Gases collected separately, dried and compressed.
# Features
- Types: alkaline, PEM, solid oxide; ~5 kWh per m³ H<sub>2</sub>; 60–80 % efficiency.
- Very pure hydrogen; green with renewable power; electricity cost is the drawback.
= Current splits water: hydrogen at the cathode, oxygen at the anode.
@ Cathode gets Hydrogen (C-H).`},

'smr':{L:`
Steam methane reforming (SMR) makes hydrogen from natural gas and steam.
# Desulphurisation
- Sulphur removed from methane because it poisons the catalyst.
# Reforming
- Methane + steam over nickel catalyst at 800–900 °C, 20–30 bar.
- CH<sub>4</sub> + H<sub>2</sub>O → CO + 3H<sub>2</sub> (needs heat).
# Water–gas shift
- CO + H<sub>2</sub>O → CO<sub>2</sub> + H<sub>2</sub> (extra hydrogen).
# Purification
- CO<sub>2</sub> removed by pressure swing adsorption or amine scrubbing.
# Features
- Overall CH<sub>4</sub> + 2H<sub>2</sub>O → CO<sub>2</sub> + 4H<sub>2</sub>; 70–80 % efficient.
- Cheapest method (~50 % of world H<sub>2</sub>) but emits CO<sub>2</sub>.
= Reform, shift and purify gives 99.9 % hydrogen.
@ Reform, Shift, Purify.`},

'reaction-turb':{L:`
Reaction turbines run full of water; pressure drops across the runner. Small hydro uses Francis, propeller and Kaplan types.
# Francis turbine
- Mixed flow: water enters radially, leaves axially; guide vanes and draft tube.
- Heads 10–300 m, medium flow.
# Propeller turbine
- Axial flow with 3–6 fixed blades like a ship propeller.
- Low heads (2–30 m), large flow; poor at part load.
# Kaplan turbine
- Propeller turbine with adjustable runner blades (and guide vanes).
- High efficiency over a wide flow range; heads 2–40 m.
# Other small-hydro types
- Bulb and tubular turbines for very low heads; pumps used as turbines in micro hydro.
= Francis for medium head; Kaplan/propeller for low head and high flow.
@ Francis = medium head; Kaplan = low head, adjustable blades.`},

'shp-turbines':{L:`
Small hydro uses impulse turbines for high heads and reaction turbines for low heads.
# Types
- <b>Impulse:</b> Pelton (50–1000 m), Turgo (30–250 m), cross-flow (3–200 m).
- <b>Reaction:</b> Francis (10–300 m), propeller and Kaplan (2–40 m), bulb.
# Pelton wheel
- Nozzle with spear valve makes a high-speed jet.
- Jet hits split buckets on the wheel rim and turns them; runs at air pressure.
- Good for high head, low flow; ~90 % efficient.
# Cross-flow (Banki) turbine
- Drum-shaped runner with curved blades between two discs.
- Water crosses the runner twice; simple, cheap, flat efficiency curve; used in micro hydro.
# Selection criteria
- Net head and discharge; specific speed N<sub>s</sub> = N√P / H<sup>5/4</sup>.
- Flow variation, generator speed, cavitation, cost, silt, maintenance.
= Head decides the turbine: high Pelton, medium Francis, low Kaplan.
@ High head Pelton, Medium Francis, Low Kaplan.`},

'turb-select':{S:`
The turbine for a small hydro plant is chosen mainly by head and flow.
- <b>Net head:</b> high → Pelton/Turgo; medium → Francis/cross-flow; low → Kaplan/propeller.
- <b>Discharge and its variation</b> (part-load efficiency); <b>specific speed</b> and generator speed.
- <b>Cavitation, silt, cost, local availability and maintenance.</b>
@ Head first, then Flow.`},

'impulse':{L:`
An impulse (Pelton) turbine uses a high-speed water jet hitting buckets; it is used for high heads in small hydro.
# Nozzle with spear valve
- Converts pressure head into a high-velocity jet; spear controls the flow.
# Jet deflector
- Quickly turns the jet away on sudden load loss.
# Runner
- Disc with double-cup (split) buckets; splitter divides the jet, which is turned back ~165°.
# Casing and tail race
- Casing stops splashing; runner works in air at atmospheric pressure; water falls to the tail race.
# Working
- Jet momentum pushes the buckets and turns the wheel (impulse).
# When preferred in SHP
- High head (above ~100 m) and low flow, typical of hill streams.
- Varying flow (change number of jets); silty water; easy maintenance; no draft tube.
= Jet hits buckets and spins the wheel; best for high heads.
@ Jet hits Buckets, wheel Spins.`},

'shp-layout':{L:`
A small (run-of-river) hydro scheme diverts part of a stream through a channel and penstock to a powerhouse.
# Weir and intake
- Low dam raises water level and diverts flow; trash rack keeps out debris.
# Head-race channel
- Canal carrying water along the hillside with a gentle slope.
# Desilting tank
- Slows water so sand settles, protecting the turbine.
# Forebay
- Small tank at the top of the penstock; steady inflow and spillway.
# Penstock
- Pressure pipe running steeply down to the powerhouse; creates the head.
# Powerhouse
- Turbine (Pelton, cross-flow, Francis or Kaplan), generator, governor or load controller.
# Tail race and transmission
- Returns water to the river; lines carry power to users.
# Working
- Potential energy → pressure and kinetic energy → mechanical → electrical.
- Power P = ρgQHη.
= Divert, carry, settle, drop, generate and return.
@ W-C-F-P-P-T: Weir, Channel, Forebay, Penstock, Powerhouse, Tail race.`},

'shp-class':{S:`
Small hydro plants are classified by capacity, head and scheme.
- <b>By capacity (India):</b> pico (&lt; 5 kW), micro (5–100 kW), mini (100 kW–2 MW), small (2–25 MW).
- <b>By head:</b> low (&lt; 30 m), medium (30–75 m), high (&gt; 75 m).
- <b>By scheme:</b> run-of-river, canal-based, dam-toe / storage-based.
@ Micro &lt; 100 kW, Mini &lt; 2 MW, Small &lt; 25 MW.`},

'h2-storage':{L:`
Hydrogen is a very light gas, so it must be compressed, cooled or chemically held to be stored.
# Compressed gas
- Stored at 350–700 bar in steel or carbon-fibre tanks.
- Simple; used in fuel-cell cars; but tanks are heavy and compression uses energy.
# Liquid hydrogen
- Cooled to −253 °C in insulated cryogenic tanks.
- High density; used in rockets; liquefaction uses ~30 % of energy; boil-off losses.
# Metal hydrides
- Metals/alloys (LaNi<sub>5</sub>, MgH<sub>2</sub>) absorb H<sub>2</sub> and release it when heated.
- Safe and compact, but heavy and slow.
# Chemical and other storage
- As ammonia, methanol or liquid organic carriers.
- Adsorption on carbon materials; underground salt caverns for large amounts.
= Squeeze it, freeze it or lock it in a solid.
@ Squeeze, Freeze, Absorb.`,
S:`
Hydrogen can be stored in three main ways.
- <b>Compressed gas</b> at 350–700 bar in strong cylinders.
- <b>Liquid hydrogen</b> at −253 °C in insulated tanks.
- <b>Metal hydrides</b> that absorb H<sub>2</sub> and release it on heating; also chemical carriers like ammonia.
@ Squeeze, Freeze, Absorb.`},

'h2-benefits':{L:`
Hydrogen is a clean, high-energy fuel that can store renewable energy.
# Advantages
- Clean: only water when burnt or used in a fuel cell.
- Highest energy per kg (~120–142 MJ/kg, about 3 times petrol).
- Storable energy carrier made from water using renewable electricity.
- Can be piped; used in fuel cells, engines and turbines; cuts oil imports.
# Applications
- Fuel-cell cars, buses, trucks, trains; rocket fuel.
- Electricity in fuel cells and gas turbines; backup power.
- Industry: ammonia, methanol, refining, steel making.
- Heating by blending with natural gas; welding.
= Hydrogen is clean, powerful and storable, with uses in transport, power and industry.
@ Hydrogen = Clean, Powerful, Storable.`,
S:`
Hydrogen is a good fuel for three main reasons.
- <b>Clean:</b> using it gives only water; no CO<sub>2</sub> or smoke.
- <b>High energy:</b> about 120 MJ/kg, three times petrol; efficient in fuel cells.
- <b>Storable carrier:</b> made from water with renewable power and used in vehicles, power and industry.
@ Clean, Powerful, Storable.`},

'h2-props':{S:`
Hydrogen is the lightest gas and a very energy-rich fuel.
- <b>Properties:</b> colourless, odourless, non-toxic; density 0.09 kg/m³; 120 MJ/kg but low energy per volume.
- Very wide flammability range (4–75 %), easy ignition, boils at −253 °C, leaks easily.
- <b>Secondary source:</b> free hydrogen is not found in nature; it must be made from other sources (gas, water + electricity), so it is an energy carrier like electricity.
@ H<sub>2</sub> must be MADE, so it is secondary.`},

'polarisation':{S:`
Polarisation is the drop of fuel cell voltage below the ideal 1.23 V when current flows; lower voltage means lower efficiency.
- <b>Activation polarisation:</b> energy needed to start the reactions; main loss at low current.
- <b>Ohmic polarisation:</b> IR drop in electrolyte and contacts; grows with current.
- <b>Concentration polarisation:</b> gases cannot reach the electrodes fast enough at high current. Cell voltage falls to about 0.6–0.7 V.
@ Polarisation = voltage leaks: Start, Resistance, Supply.`},

'afc':{L:`
An alkaline fuel cell (AFC) uses potassium hydroxide (KOH) as the electrolyte; hydroxide ions carry the charge.
# Construction
- Porous anode (Ni/Pt) and cathode (Ag/Ni/Pt).
- KOH solution (30–45 %) between them; works at 60–90 °C; needs pure H<sub>2</sub> and O<sub>2</sub>.
# Reactions
- Anode: H<sub>2</sub> + 2OH<sup>−</sup> → 2H<sub>2</sub>O + 2e<sup>−</sup>.
- Cathode: ½O<sub>2</sub> + H<sub>2</sub>O + 2e<sup>−</sup> → 2OH<sup>−</sup>.
- Overall: H<sub>2</sub> + ½O<sub>2</sub> → H<sub>2</sub>O + electricity.
# Working
- Hydrogen reacts with OH<sup>−</sup> at the anode, releasing electrons to the load.
- At the cathode, oxygen forms OH<sup>−</sup>, which moves back through the KOH.
# Features and applications
- ~60 % efficiency; cheaper catalysts possible.
- CO<sub>2</sub> spoils the KOH, so pure oxygen needed.
- Used in Apollo and Space Shuttle (power + drinking water), submarines, backup power.
= AFC runs on KOH, moves OH<sup>−</sup> ions and is famous for space use.
@ AFC = Apollo's Fuel Cell, KOH inside.`},

'pemfc':{L:`
A PEM (proton exchange membrane) fuel cell uses a thin polymer membrane as the electrolyte; it is used in vehicles.
# Construction
- Nafion membrane (25–200 µm) that conducts protons when wet.
- Porous carbon electrodes with platinum catalyst bonded to the membrane (MEA).
- Gas diffusion layers and bipolar plates with flow channels; works at 60–80 °C.
# Reactions
- Anode: H<sub>2</sub> → 2H<sup>+</sup> + 2e<sup>−</sup>.
- Cathode: ½O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>O.
# Working
- Protons pass through the wet membrane; electrons flow through the external load.
- They meet oxygen from air at the cathode to form water; ~0.7 V per cell; cells stacked.
# Merits and demerits
- Merits: low temperature, quick start, compact, solid electrolyte.
- Demerits: costly platinum; CO poisoning; membrane must stay humid.
= PEM fuel cells pass protons through a membrane and suit cars.
@ PEM = Proton passes the Membrane.`},

});
