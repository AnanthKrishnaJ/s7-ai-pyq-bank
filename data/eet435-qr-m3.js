/* EET435 quick-revision answers, Module 3 (wind). Format as in data/cst423-qr.js. */
(R=>{SUBJ.EET435.QB.forEach(c=>{const r=R[c.id];if(!r)return;if(r.L)c.qr=r.L;if(r.S)c.qr3=r.S})})({

'pitch-yaw':{S:`
Pitch and yaw control keep a wind turbine efficient and safe.
- <b>Pitch control:</b> turns each blade about its own axis to change the angle of attack; gives best power at low wind, limits power above rated wind, and stops the rotor in storms (feathering).
- <b>Yaw control:</b> turns the nacelle with yaw motors, using the wind vane signal, so the rotor always faces the wind; also yaws it away in storms.
@ Pitch = tilt the blade; Yaw = turn the head.`},

'wind-terms':{S:`
These are the key parts and controls of a wind turbine.
- <b>Rotor hub:</b> centre piece holding the blades and the pitch mechanism. <b>Nacelle:</b> housing on top of the tower with gearbox, generator, brake and controls.
- <b>Pitch control:</b> changes blade angle to limit power. <b>Yaw control:</b> turns the nacelle to face the wind.
- <b>Anemometer:</b> measures wind speed for start and stop. <b>Wind vane:</b> measures wind direction for yaw control.
@ Hub holds, Nacelle houses, Pitch tilts, Yaw turns, Anemometer speeds, Vane points.`},

'wind-env':{S:`
Wind farms are clean but have some local effects.
- <b>Noise and shadow flicker</b> near homes; <b>visual impact</b> on landscapes.
- <b>Birds and bats</b> hit by blades; habitat disturbance.
- <b>Land use and access roads;</b> TV/radar interference; offshore: effect on marine life.
@ Noise, View, Birds, Land.`},

'power-curve':{L:`
The power curve shows how a wind turbine's output changes with wind speed.
# Region I: below cut-in speed (0–3.5 m/s)
- Wind too weak to overcome losses; no output.
# Region II: cut-in to rated speed
- Output rises steeply as P = ½ρAC<sub>p</sub>V³.
- Controller keeps the best tip speed ratio so C<sub>p</sub> is maximum.
# Region III: rated to cut-out speed (~12–25 m/s)
- Output held at rated power by pitch control (feathering) or stall.
- Extra wind energy is spilled.
# Region IV: above cut-out speed
- Turbine shut down to avoid damage.
# How high winds are handled
- Blades fully feathered (no lift), brake applied, rotor parked, nacelle yawed away.
- Restarts when wind falls below a set speed.
= The curve plus the site's wind data gives yearly energy and capacity factor.
@ Start (cut-in), Full (rated), Stop (cut-out).`},

'betz':{L:`
The Betz limit says no wind turbine can extract more than 16/27 = 59.3 % of the power in the wind.
# Set-up (actuator disc)
- Wind speed upstream V<sub>u</sub>, at rotor V, downstream V<sub>d</sub>; rotor area A.
- Mass flow ṁ = ρAV.
# Two expressions for power
- From thrust: P = F × V = ρAV²(V<sub>u</sub> − V<sub>d</sub>).
- From loss of kinetic energy: P = ½ρAV(V<sub>u</sub>² − V<sub>d</sub>²).
- Equating gives V = (V<sub>u</sub> + V<sub>d</sub>)/2.
# Power in terms of x = V<sub>d</sub>/V<sub>u</sub>
- P = ¼ρAV<sub>u</sub>³(1 + x)(1 − x²).
# Maximise
- dP/dx = 0 gives 1 − 2x − 3x² = 0, so x = 1/3.
- So downstream speed V<sub>d</sub> = V<sub>u</sub>/3 for maximum power.
# Result
- P<sub>max</sub> = (8/27)ρAV<sub>u</sub>³ = (16/27) × ½ρAV<sub>u</sub>³.
- C<sub>p,max</sub> = 16/27 = 0.593.
= Real turbines reach Cp 0.40–0.50 because of drag, tip and wake losses.
@ Betz = 59: no turbine can take more than 59 % of the wind.`},

'wind-power-eq':{S:`
The power in the wind is the kinetic energy of air passing through the rotor area each second.
- Mass flow ṁ = ρAV (air density × swept area × speed).
- Kinetic energy per second = ½ṁV² = ½(ρAV)V².
- <b>P = ½ρAV³</b>: power ∝ V³, so doubling wind speed gives 8 times power.
@ P = ½ ρ A V³: V-cubed is king.`},

'betz-cf':{L:`
Betz limit and capacity factor measure how much wind power a turbine can and does deliver.
# Betz limit
- Maximum fraction of wind power any turbine can extract: C<sub>p,max</sub> = 16/27 ≈ 0.593.
- Occurs when downstream wind speed is one-third of upstream speed.
# Capacity factor
- Ratio of actual energy produced in a year to energy at rated power all year.
- CF = actual annual energy / (rated power × 8760 h).
- Onshore 25–35 %, offshore 40–50 %.
= Betz is the theoretical ceiling; capacity factor is the real-life score.
@ Betz = max 59 %; CF = real ÷ ideal.`},

'cf-calc':{L:`
Capacity factor compares actual energy with the maximum possible energy.
# Definition
- CF = actual energy in a period / (rated power × hours in that period).
# Data
- 10,000 GWh produced in 10 years; rating 300 MW.
# Calculation
- Average per year = 10,000 / 10 = 1000 GWh = 1,000,000 MWh.
- Maximum per year = 300 MW × 8760 h = 2,628,000 MWh.
- CF = 1,000,000 / 2,628,000 = 0.38.
= Capacity factor ≈ 38 %.
@ Divide what you GOT by what you COULD.`},

'tsr-calc':{L:`
Tip speed ratio and power coefficient tell how fast and how efficiently the rotor runs.
# Data
- N = 12 rpm, D = 90 m (R = 45 m), V = 10 m/s, P = 2 MW, ρ = 1.225 kg/m³.
# Tip speed ratio
- ω = 2πN/60 = 1.257 rad/s.
- Tip speed = ωR = 1.257 × 45 = 56.55 m/s.
- λ = 56.55 / 10 = <b>5.65</b>.
# Power in wind
- A = π × 45² = 6362 m².
- P<sub>wind</sub> = ½ × 1.225 × 6362 × 10³ = 3.90 MW.
# Power coefficient
- C<sub>p</sub> = 2 / 3.90 = <b>0.51</b>.
= λ ≈ 5.65 and Cp ≈ 0.51, below the Betz limit of 0.593.
@ TSR = tip speed ÷ wind speed; Cp = turbine power ÷ wind power.`},

'offshore':{L:`
Large wind farms are often built offshore because the sea gives better wind and more space.
# Higher, steadier wind
- Smooth sea surface: wind 20–30 % faster; P ∝ V³ so 50–100 % more energy.
- Capacity factor 40–50 %.
# Less turbulence
- Lower fatigue loads; shorter towers enough; longer life.
# Large free area
- No land purchase; very big turbines (10–15 MW) and big farms possible.
# Less public objection
- Noise and visual impact far from people.
# Close to coastal cities
- Many big load centres are on the coast.
# Trade-off
- Costly foundations, undersea cables, maintenance and corrosion.
= Offshore sites give more, steadier wind and space, at higher building cost.
@ Sea = Strong, Steady, Spacious.`},

'wecs-site':{L:`
The right site is the most important factor for a wind energy system's output.
# High average wind speed
- Mean above 5–6 m/s at hub height; study at least one year of wind data.
# Low turbulence
- Open plains, hilltops, ridges, coasts; away from buildings and trees.
# Air density and altitude
- Power ∝ ρ, which falls with height.
# Ground and access
- Firm soil for foundations; roads for big blades and cranes.
# Grid and load
- Close to the grid to cut transmission cost.
# Environment and society
- Away from homes (noise), airports and bird routes; low land cost.
= Choose windy, open, accessible sites close to the grid and away from people and birds.
@ Wind, Ground, Grid, Green.`,
S:`
A wind turbine site must have strong, steady wind and be practical to build on.
- <b>High, steady mean wind speed</b> (above 5–6 m/s) with low turbulence: open plains, hilltops, coasts.
- <b>Firm soil, road access and nearness to the grid.</b>
- <b>Away from homes, airports and bird routes;</b> low land cost.
@ Wind, Ground, Grid.`},

'hawt-parts':{L:`
A horizontal-axis wind turbine (HAWT) has a rotor on a horizontal shaft at the top of a tower, with the drive train in a nacelle.
# Rotor
- Usually 3 airfoil-shaped blades of glass/carbon fibre; hub with pitch mechanism.
# Drive train
- Low-speed shaft (15–30 rpm), gearbox (to ~1500 rpm), high-speed shaft, brake.
# Generator and controls
- Induction/DFIG or permanent-magnet generator; controller and power electronics.
# Nacelle and yaw system
- Nacelle houses the drive train; yaw motors turn it into the wind.
- Anemometer and wind vane on top give speed and direction.
# Tower and foundation
- Tubular steel tower 80–150 m on a concrete foundation.
# Aerodynamic forces on blades
- <b>Lift:</b> perpendicular to relative wind; drives rotation (torque).
- <b>Drag:</b> along relative wind; resists motion and adds thrust on the tower.
- High lift-to-drag ratio at the right angle of attack gives most power.
= Blades catch the wind with lift; the nacelle turns it into electricity.
@ Blades catch, Gearbox speeds, Generator makes, Tower holds.`},

'lift-drag':{L:`
A wind energy conversion system turns the kinetic energy of wind into electricity.
# Working principle
- Moving air has power P = ½ρAV³.
- Blades slow the wind and take part of its energy (C<sub>p</sub> ≤ 0.593).
- Rotor turns a shaft → gearbox → generator → converter → grid or battery.
# Drag force
- Acts along the wind direction; pushes the blade.
- Drag machines (Savonius, cup anemometer) are slow (TSR &lt; 1) with low C<sub>p</sub> (~0.2), but have high starting torque.
# Lift force
- Acts at right angles to the relative wind due to pressure difference on the airfoil.
- Lift machines (modern HAWT, Darrieus) run fast (TSR 5–8) with C<sub>p</sub> ~0.45.
# Importance
- High lift-to-drag ratio gives most torque; pitch control uses this to limit power.
- Lift and drag together produce torque and thrust on the structure.
= Lift-type turbines are efficient for power; drag types suit slow, high-torque jobs.
@ Drag pushes slowly; Lift pulls fast.`},

'wind-calc1':{L:`
Power in the wind is found from P = ½ρAV³.
# Data
- Blade length R = 50 m, ρ = 1.23 kg/m³.
- A = πR² = π × 50² = 7854 m².
# Power at 8 m/s
- P = ½ × 1.23 × 7854 × 8³ = 2.47 × 10<sup>6</sup> W = <b>2.47 MW</b>.
# Maximum extractable (Betz)
- P<sub>max</sub> = 0.593 × 2.47 = <b>1.47 MW</b>.
# Output at 20 m/s with C<sub>p</sub> = 0.30
- P<sub>wind</sub> = ½ × 1.23 × 7854 × 20³ = 38.64 MW.
- P<sub>out</sub> = 0.30 × 38.64 = <b>11.59 MW</b>.
= Power rises with V³, so wind speed matters most.
@ Area, Cube, Multiply.`},

'wind-calc2':{L:`
Power in the wind: P = ½ρAV³.
# Data
- V = 20 m/s, R = 50 m, ρ = 1.23 kg/m³.
# Area
- A = π × 50² = 7854 m².
# Power
- P = 0.5 × 1.23 × 7854 × 20³ = 0.5 × 1.23 × 7854 × 8000.
- P ≈ 3.86 × 10<sup>7</sup> W = <b>38.6 MW</b>.
= A turbine could take at most 0.593 × 38.6 ≈ 22.9 MW (Betz).
@ Half, rho, area, V cubed.`},

'cp-calc':{S:`
Power coefficient C<sub>p</sub> = turbine output ÷ power in the wind.
- A = π × 20²/4 = 314.16 m².
- P<sub>wind</sub> = ½ × 1.2 × 314.16 × 16³ = 772.1 kW.
- C<sub>p</sub> = 270 / 772.1 = <b>0.35</b> (35 % of wind power).
@ Cp = what the turbine gives ÷ what the wind has.`},

'density-calc':{L:`
For the same turbine, power is proportional to air density and to the cube of wind speed: P ∝ ρV³.
# Air density from ρ = p/(RT)
- Site 1: ρ<sub>1</sub> = 101325 / (287 × 297.15) = 1.188 kg/m³.
- Site 2: ρ<sub>2</sub> = 0.85 × 101325 / (287 × 283.15) = 1.060 kg/m³.
# New power
- P<sub>2</sub> = P<sub>1</sub> × (ρ<sub>2</sub>/ρ<sub>1</sub>) × (V<sub>2</sub>/V<sub>1</sub>)³.
- P<sub>2</sub> = 1800 × (1.060/1.188) × (8/6)³ = 1800 × 0.892 × 2.370.
- P<sub>2</sub> ≈ <b>3806 W ≈ 3.8 kW</b>.
= Thinner air on the hill cuts power by about 11 %, but faster wind more than doubles it.
@ New power = old × (ρ ratio) × (V ratio)³.`},

'hellmann-calc':{L:`
Wind speed is first raised to hub height, then power is found step by step.
# Wind at hub height (power law)
- V<sub>100</sub> = V<sub>10</sub>(h/10)<sup>α</sup> = 13 × 10<sup>0.14</sup> = 13 × 1.380 = 17.95 m/s.
# Rotor area
- A = π × 40² = 5026.5 m².
# (i) Total power in wind
- P<sub>0</sub> = ½ × 1.226 × 5026.5 × 17.95³ ≈ <b>17.8 MW</b>.
# (ii) Power extracted
- Speed at rotor reduced by 20 %, so axial induction a = 0.2.
- C<sub>p</sub> = 4a(1 − a)² = 4 × 0.2 × 0.64 = 0.512.
- P<sub>t</sub> = 0.512 × 17.81 ≈ <b>9.12 MW</b>.
# (iii) Electrical power
- P<sub>e</sub> = 0.8 × 9.12 ≈ <b>7.29 MW</b>.
= Hub-height wind, then Cp, then generator efficiency.
@ Raise the speed to hub height first.`},

'hawt-vawt':{S:`
Wind turbines are horizontal-axis (HAWT) or vertical-axis (VAWT).
- <b>Axis and direction:</b> HAWT shaft is horizontal and needs yaw to face the wind; VAWT shaft is vertical and accepts wind from any direction.
- <b>Construction:</b> HAWT gearbox and generator are on top of a tall tower; VAWT has them at ground level (easy maintenance).
- <b>Performance and use:</b> HAWT has higher Cp (0.4–0.5) for MW wind farms; VAWT has lower Cp for small urban use. Ex: propeller vs Savonius, Darrieus.
@ HAWT = High and efficient; VAWT = Very easy, any wind.`},

'wecs-class':{L:`
Wind energy conversion systems are classified in several ways.
# By axis of rotation
- <b>Horizontal axis:</b> one, two, three-blade propeller, multi-blade.
- <b>Vertical axis:</b> Savonius, Darrieus, H-rotor.
# By aerodynamic force
- <b>Drag type:</b> Savonius, cup type; slow, low efficiency.
- <b>Lift type:</b> propeller, Darrieus; fast, high efficiency.
# By size
- Small (&lt; 100 kW), medium (100 kW–1 MW), large (&gt; 1 MW).
# By rotor speed
- <b>Constant speed:</b> induction generator connected to grid.
- <b>Variable speed:</b> DFIG or PMSG with converters; more energy.
# By connection and location
- Stand-alone, hybrid, grid-connected; onshore and offshore.
- Upwind or downwind rotor; geared or direct-drive.
= Classify by Axis, Force, Size, Speed, Connection and Location.
@ A-F-S-S-C-L: Axis, Force, Size, Speed, Connection, Location.`},

'anemometer':{L:`
An anemometer measures wind speed; the cup anemometer is the most common type.
# Cup anemometer
- Three or four hollow cups on horizontal arms on a vertical shaft.
- Concave side catches more wind than the convex side, so the cups spin.
- Spin speed is proportional to wind speed.
- Shaft drives a small generator or pulse counter, read in m/s.
# Other types
- <b>Propeller (vane):</b> propeller with tail vane; also gives direction.
- <b>Hot-wire:</b> wind cools a heated wire; change in resistance gives speed.
- <b>Sonic:</b> time of sound pulses gives speed; no moving parts.
# Use in wind studies
- Mounted at several heights on a mast; data logged for a year.
= Faster wind spins the cups faster, and the signal shows the speed.
@ Cups spin faster when wind blows faster.`},

'savonius':{L:`
Savonius and propeller turbines differ in axis, working force and efficiency.
# Savonius rotor
- Vertical axis; two half-cylinder buckets in an S-shape.
- Works by drag: concave bucket is pushed more than the convex one.
- Self-starting, high torque, any wind direction.
- Slow (TSR ~1), low C<sub>p</sub> (0.15–0.25); used for water pumping, ventilation.
# Propeller turbine
- Horizontal axis; 2–3 slender airfoil blades on a tall tower.
- Works by lift; nacelle holds gearbox and generator; needs yaw.
- Fast (TSR 5–8), high C<sub>p</sub> (0.4–0.5); used for grid power.
# Key differences
- Axis: vertical vs horizontal. Force: drag vs lift.
- Efficiency: low vs high. Starting torque: high vs low.
= Savonius is simple and strong; propeller is efficient.
@ Savonius = Slow, Simple, S-shape; Propeller = Fast, Fine blades.`},

'darrieus':{L:`
Darrieus and multi-bladed turbines are two special wind machine designs.
# Darrieus turbine
- Vertical axis; 2–3 curved airfoil blades shaped like an egg-beater (troposkien).
- Works by lift; TSR 4–6, C<sub>p</sub> 0.35–0.40.
- Gearbox and generator at ground level; accepts any wind direction.
- Not self-starting; needs a motor or Savonius rotor to start.
- Applications: grid and stand-alone electricity, rooftops, hybrid systems.
# Multi-bladed turbine (American windmill)
- Horizontal axis; 12–24 curved sheet-metal blades; tail vane for direction.
- Slow (TSR ~1), very high starting torque; starts in light wind.
- Rotation drives a crank and pump rod.
- Applications: water pumping on farms, small mechanical drives.
= Darrieus is for electricity; multi-blade is for pumping water.
@ Darrieus = Egg-beater for power; Multi-blade = Many blades for water.`},

'wecs-limits':{L:`
Wind energy has some practical limitations.
# Variable output
- Intermittent; needs storage or backup; capacity factor 25–35 %.
# Low energy density
- Large rotors and spacing; only windy sites work.
# High initial cost
- Transport and erection of huge blades and towers.
# Environmental issues
- Noise, visual impact, bird deaths, radio interference.
# Grid issues
- Flicker, harmonics, stability; gearbox maintenance at height.
= Wind is clean but variable, site-dependent and costly to start.
@ Variable, Big, Costly, Noisy.`},

});
