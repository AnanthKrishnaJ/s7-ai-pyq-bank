/* EET435 quick-revision answers, Module 2 (OTEC and tidal). Format as in data/cst423-qr.js. */
(R=>{SUBJ.EET435.QB.forEach(c=>{const r=R[c.id];if(!r)return;if(r.L)c.qr=r.L;if(r.S)c.qr3=r.S})})({

'tidal-site':{L:`
A good tidal power site must give a large head of water cheaply and safely.
# Large tidal range
- At least 5 m, better 7–10 m, because energy ∝ (range)².
# Suitable bay or estuary
- Narrow mouth so a short, cheap dam can enclose a large basin.
# Firm foundation and calm sea
- Strong rock for the barrage; low storm and wave risk.
# Little silting
- Low sediment so the basin does not fill up.
# Near the grid and load
- Reduces transmission cost.
# Low environmental and social impact
- Minimal effect on fishing, navigation, mangroves and birds.
Ex: Gulf of Kutch and Gulf of Khambhat (Gujarat), Sunderbans.
= The best site has a big tidal range in a narrow bay close to users.
@ Big Range, Narrow mouth, Good ground.`,
S:`
A tidal plant needs a site that gives a big head cheaply.
- <b>Large tidal range:</b> at least 5 m, since energy ∝ range².
- <b>Bay or estuary with a narrow mouth</b> so a short dam encloses a big basin.
- <b>Firm foundation, little silting, near the grid,</b> low environmental impact.
@ Big Range, Narrow mouth, Good ground.`},

'biofouling':{S:`
Biofouling is the growth of slime, algae and shellfish on surfaces in seawater, especially OTEC heat exchanger tubes; it blocks heat transfer.
- <b>Chemical:</b> small doses of chlorine at intervals.
- <b>Mechanical:</b> sponge balls pushed through tubes, brushes, water jets.
- <b>Materials:</b> titanium or copper-nickel tubes, antifouling paint, higher water speed.
@ Bio-fouling = sea creatures blanket the tubes: Chlorine, Clean, Coat.`},

'tidal-calc':{L:`
The energy from a tidal basin is the potential energy of the water falling through the average head.
# Data
- Head h = 10 m; mass per tide m = 7 × 10<sup>9</sup> kg; ρ = 1025 kg/m³; bidirectional turbines.
# Step 1: energy per flow
- Water falls through an average head of h/2 = 5 m.
- E = m g (h/2) = 7 × 10<sup>9</sup> × 9.81 × 5 = 3.43 × 10<sup>11</sup> J.
# Step 2: energy per tidal cycle
- Two-way generation (flood and ebb): 2 × 3.43 × 10<sup>11</sup> = 6.87 × 10<sup>11</sup> J.
# Step 3: tides per year
- Tidal period 12 h 25 min, so 365 × 24 / 12.42 ≈ 705 tides.
# Step 4: annual energy
- E = 705 × 6.87 × 10<sup>11</sup> = 4.84 × 10<sup>14</sup> J.
- In MWh: 4.84 × 10<sup>14</sup> / 3.6 × 10<sup>9</sup> ≈ <b>1.34 × 10<sup>5</sup> MWh</b>.
= Annual energy potential ≈ 134,500 MWh (average power about 15 MW).
@ Energy per flow = m g (h/2); double for two-way; multiply by 705.`},

'otec-closed':{L:`
The closed-cycle (Anderson) OTEC uses warm surface seawater to boil a low-boiling fluid like ammonia in a closed Rankine cycle.
# Evaporator
- Warm surface water (25–28 °C) boils liquid ammonia at about 10 bar.
# Turbine and generator
- High-pressure ammonia vapour expands through the turbine and drives the generator.
# Condenser
- Cold water pumped from 800–1000 m depth (4–7 °C) condenses the vapour.
# Feed pump
- Pumps liquid ammonia back to the evaporator; the cycle repeats.
# Features
- ΔT ≈ 20 °C; Carnot efficiency ≈ 7 %, actual 2–3 %.
- Compact turbine; large heat exchangers; biofouling must be controlled.
- No fresh water as by-product; risk of ammonia leaks.
= Warm sea boils ammonia, cold sea condenses it, and the loop drives a turbine.
@ E-T-C-P: Evaporate, Turbine, Condense, Pump.`},

'tidal-basins':{L:`
Tidal plants trap seawater behind a dam; the single-basin type has one basin and the double-basin type has two.
# Single-basin scheme
- One dam separates the basin from the sea, with sluices and turbines.
- Basin fills at high tide and empties through turbines at low tide (or both ways).
- Output is intermittent: 2–4 bursts a day.
# Double-basin scheme
- Upper basin filled at high tide; lower basin emptied at low tide.
- Turbines between the two basins run continuously.
# Comparison: energy
- Single: intermittent, more total energy per area (higher head).
- Double: continuous but less total energy (lower head).
# Comparison: cost and environment
- Single: one dam, cheaper, affects one estuary.
- Double: extra dam, costlier, larger area affected (silting, fish, habitat).
Ex: La Rance, France (single basin, 240 MW).
= Single basin is cheaper and stronger; double basin is steadier.
@ Single = Simple but Stop-start; Double = Dear but Continuous.`},

'otec-steady':{L:`
OTEC output stays almost constant because the ocean temperature difference hardly changes.
# Ocean is a huge heat store
- Surface water changes only 1–2 °C between day and night and over seasons.
# Deep water is always cold
- Water at 800–1000 m stays near 4–6 °C all year.
# Constant driving force
- ΔT ≈ 20 °C is available 24 hours, unaffected by clouds, night or wind.
# Result
- OTEC can run as base load with capacity factor above 90 %; solar ~20 %, wind ~30 %.
= Steady sea temperatures give OTEC steady power.
@ Ocean = giant hot-water bottle that never cools.`},

'otec-open':{L:`
OTEC plants are of three types: open cycle (Claude), closed cycle (Anderson) and hybrid. In the open cycle, seawater itself is the working fluid.
# Deaeration
- Warm surface water (~27 °C) has dissolved gases removed.
# Flash evaporation
- Water enters a vacuum chamber (~3 kPa) and partly boils into steam (~0.5 %).
# Turbine
- Low-pressure steam drives a large turbine and generator.
# Condenser
- Cold deep water (~5 °C) condenses the steam.
- A surface condenser gives fresh (desalinated) water.
# Vacuum pump
- Removes gases to keep the vacuum.
# Merits and demerits
- Merits: no separate fluid, fresh water by-product.
- Demerits: very large turbine, vacuum leaks, high pumping power.
Ex: 210 kW Keahole Point plant, Hawaii.
= Open cycle turns seawater into steam and gives both power and fresh water.
@ Open = Seawater itself is the steam.`},

'otec-open-closed':{L:`
Open and closed cycle OTEC differ in the working fluid and how it is evaporated.
# Open cycle (Claude)
- Seawater itself is flashed into steam in a vacuum chamber.
- Steam drives a large low-pressure turbine; cold water condenses it.
- Gives fresh water as a by-product.
# Closed cycle (Anderson)
- Separate low-boiling fluid (ammonia) in a closed loop.
- Warm water boils it in an evaporator; cold water condenses it; pump returns it.
- Compact turbine; no fresh water.
# Key differences
- <b>Fluid:</b> seawater vs ammonia.
- <b>Evaporation:</b> flash under vacuum vs boiling at ~10 bar.
- <b>Turbine:</b> huge vs compact.
- <b>By-product:</b> fresh water vs none.
- <b>Problems:</b> vacuum and deaeration vs biofouling and ammonia leaks.
= Open cycle gives water; closed cycle gives a smaller, more practical turbine.
@ Open = Water is fluid, gives Water; Closed = Ammonia loop, compact turbine.`,
S:`
Open and closed cycle OTEC differ in the working fluid.
- <b>Open:</b> seawater itself is flash-evaporated under vacuum; closed uses ammonia in a closed loop.
- <b>Turbine:</b> very large in open cycle; compact in closed cycle.
- <b>By-product:</b> open cycle gives fresh water; closed cycle gives none.
@ Open = water is the fluid; Closed = ammonia loop.`},

'otec-hybrid':{L:`
The hybrid-cycle OTEC combines the closed cycle for power with the open cycle for fresh water.
# Flash chamber
- Warm seawater is flash-evaporated into steam under vacuum.
# Ammonia evaporator
- The steam condenses on the evaporator tubes and boils ammonia inside.
- The condensed steam is collected as fresh water.
# Turbine and generator
- Ammonia vapour drives the turbine (closed Rankine cycle).
# Condenser and pump
- Cold deep water condenses ammonia; pump returns it to the evaporator.
# Advantages
- Gives both electricity and fresh water.
- Compact ammonia turbine; less biofouling because ammonia side sees clean steam.
# Disadvantage
- More complex and costly.
= Hybrid OTEC = open cycle for water + closed cycle for power.
@ Hybrid = Open for water + Closed for power.`},

'tidal-double':{L:`
A double-basin tidal plant uses two basins at different levels so turbines between them can run all the time.
# Components
- Upper (high) basin and lower (low) basin, separated from the sea and from each other by dams.
- Inlet sluices to the upper basin; outlet sluices from the lower basin.
- Powerhouse with turbines in the dam between the basins.
# Working
- Rising tide: inlet sluices open; upper basin fills to high-tide level.
- Falling tide: outlet sluices open; lower basin empties to low-tide level.
- Water always flows from upper to lower basin through the turbines.
# Merits and demerits
- Merit: continuous, controllable output.
- Demerits: lower, varying head; two dams cost more; bigger environmental impact.
= Keeping one basin high and one low gives non-stop generation.
@ Fill the High, Empty the Low, Run in between.`},

'tidal-single':{L:`
A single-basin tidal plant has one dam across a bay with sluice gates and turbines.
# Components
- Dam (barrage) creating one basin.
- Sluice gates to fill or empty the basin quickly.
- Powerhouse with low-head bulb turbines and generators.
# Ebb generation
- Basin fills through sluices on the rising tide; gates close at high tide.
- When the sea falls, water flows from basin to sea through the turbines.
# Other modes
- <b>Flood generation:</b> water flows sea to basin through turbines.
- <b>Two-way:</b> reversible turbines generate both ways.
- <b>Pumping:</b> off-peak power pumps extra water in to raise the head.
# Output
- Intermittent: 2 or 4 generating periods a day.
Ex: La Rance, France (240 MW, range 8 m).
= Single basin stores high tide water and releases it through turbines.
@ Fill at high tide, Release at low tide.`},

'tidal-methods':{L:`
Tidal power can be generated in several ways, each with its own limits.
# Single basin, one-way (ebb)
- Basin fills at high tide, discharges through turbines at low tide.
- Limit: only 4–6 hours per tide; timing does not match demand.
# Single basin, two-way
- Reversible turbines work on both flood and ebb.
- Limit: costly turbines, lower average head.
# Single basin with pumping
- Extra water pumped in at high tide to raise the head.
- Limit: needs pump-turbines and grid power.
# Double basin
- Two basins give continuous output.
- Limit: two dams, high cost, lower head, bigger impact.
# Tidal stream turbines
- Underwater turbines in strong currents; no dam.
- Limit: need fast currents, corrosion, difficult maintenance.
= All methods are predictable but costly and limited by sites.
@ One-way, Two-way, Pump, Double, Stream.`},

'otec-site':{S:`
OTEC needs a large, steady temperature difference close to users.
- <b>ΔT of at least 20 °C</b> between surface and 1000 m depth: tropical seas.
- <b>Deep water close to shore</b> so the cold-water pipe is short.
- <b>Calm sea, low storm risk, near the grid;</b> low biofouling. Ex: Lakshadweep, Andaman.
@ Warm top, Cold bottom, Close to shore.`},

'tidal-principle':{L:`
Tidal power converts the potential energy of water raised by tides into electricity.
# Cause of tides
- The moon's (and sun's) gravity and the earth's rotation make the sea rise and fall twice a day.
# Principle
- A dam stores water in a basin at high tide.
- When the sea falls, a head forms; water flows through low-head turbines.
- Potential energy → kinetic energy → electricity.
# Energy
- E = ½ ρ g A R² per filling or emptying (A = basin area, R = tidal range).
- Energy ∝ R², so large-range sites are needed.
= Tides lift water; the dam holds it; the fall runs turbines.
@ Trap the tide, Release through turbine.`,
S:`
Tidal power uses the rise and fall of the sea caused by the moon.
- A dam traps water in a basin at high tide.
- At low tide the water flows back through turbines and makes electricity.
- Energy E = ½ρgAR², so a large tidal range is needed.
@ Trap the tide, Release through turbine.`},

'tides':{L:`
Tides are the regular rise and fall of sea level caused mainly by the moon's gravity.
# How tides form
- The moon pulls the ocean on the near side, forming a bulge.
- On the far side, the earth–moon rotation (inertia) forms a second bulge.
- As the earth turns, each place passes two bulges: two high and two low tides every 24 h 50 min.
# Spring and neap tides
- <b>Spring tides:</b> sun and moon in line (new/full moon): largest range.
- <b>Neap tides:</b> sun and moon at right angles: smallest range.
- Funnel-shaped bays increase the range.
# Advantages of tidal energy
- Renewable and very predictable.
- No fuel or emission; long plant life; dam can be a road bridge.
# Disadvantages
- Very high cost; few suitable sites.
- Intermittent; harms estuary ecology and silting.
= Moon pulls the sea into two bulges, giving two tides a day that can be harnessed.
@ Moon pulls, Earth spins, two bulges, two tides.`},

'tidal-env':{L:`
Tidal barrages change the estuary they are built in.
# Water level changes
- Tidal range inside the basin changes; mudflats and wetlands are lost or flooded.
# Silting and water quality
- Slower water increases silting; salinity, temperature and oxygen change.
# Fish and marine life
- Turbines injure fish; the dam blocks migration.
# Navigation and fishing
- Ships need locks; fishing is affected.
# Positive impact
- No air pollution or greenhouse gas; barrage can protect against storm surges.
= Tidal plants are clean in air but change water, silt and wildlife.
@ Water, Silt, Fish, Ships.`,
S:`
Tidal plants change the estuary they are built in.
- <b>Water and land:</b> changed water levels, loss of mudflats and wetlands, more silting.
- <b>Life:</b> fish injured or blocked; bird habitats lost; water quality changes.
- <b>Positive:</b> no air pollution or greenhouse gas.
@ Water, Silt, Fish.`},

'otec-principle':{L:`
OTEC (Ocean Thermal Energy Conversion) runs a heat engine between warm surface seawater and cold deep seawater.
# Principle
- Surface water in the tropics is 25–28 °C; water at 1000 m is 4–7 °C.
- Warm water evaporates a fluid; vapour drives a turbine; cold water condenses it.
- Carnot efficiency ≈ 20/300 ≈ 7 %; actual 2–3 %.
# Advantages
- Continuous base-load power.
- Fresh water and cold nutrient-rich water as by-products.
# Limitations
- Very low efficiency: huge flows and heat exchangers; high cost.
- Long cold-water pipe, biofouling, tropical sites only.
# Environmental impacts
- Cold water discharge changes local ecosystems.
- CO<sub>2</sub> released from deep water.
- Ammonia or chlorine leaks.
- Fish and plankton drawn into intakes.
= OTEC is steady and renewable but costly and low in efficiency.
@ Warm sea up, Cold sea down, Engine in between.`},

'otec-adv':{L:`
OTEC has several advantages over other renewable sources.
# Continuous power
- Temperature difference exists 24 hours, so base-load supply (capacity factor > 90 %).
# Clean
- No fuel and no emissions while running.
# Fresh water
- Open and hybrid cycles produce desalinated water for islands.
# Cold deep water use
- Air-conditioning, aquaculture and mariculture.
# Other
- Can produce hydrogen and ammonia; energy security for island nations.
= OTEC gives steady clean power plus water and food benefits.
@ OTEC gives Power, Water, Food.`},

'otec-limits':{L:`
OTEC is limited mainly by its low efficiency and high cost.
# Low efficiency
- ΔT is only about 20 °C, so efficiency is 2–3 %; pumps use 20–30 % of output.
# High capital cost
- Huge heat exchangers and a long, wide cold-water pipe (about 1 km).
# Biofouling and corrosion
- Seawater fouls and corrodes heat exchangers.
# Few sites
- Only tropical seas; often far from users; costly undersea cables.
= OTEC is limited by small ΔT, big cost and few sites.
@ Low efficiency, High cost, Long pipe.`},

'otec-env':{L:`
OTEC plants can affect the marine environment in several ways.
# Cold water discharge
- Lowers local temperature and brings up nutrients; may cause algal blooms.
# CO<sub>2</sub> release
- Deep water holds dissolved CO<sub>2</sub>, released when warmed.
# Chemical leaks
- Ammonia from closed cycle; chlorine used against biofouling.
# Marine life
- Fish, eggs and plankton drawn into intakes; construction and noise disturb reefs.
= OTEC must manage discharge, chemicals and intakes to protect sea life.
@ Cold, CO<sub>2</sub>, Chemicals, Creatures.`},

'tidal-parts':{S:`
A tidal power plant has three main parts.
- <b>Dam / barrage:</b> separates the basin from the sea and holds the water.
- <b>Sluice gates:</b> fill or empty the basin quickly when not generating.
- <b>Powerhouse:</b> low-head bulb or Kaplan turbines with generators.
@ Dam, Gates, Powerhouse.`},

});
