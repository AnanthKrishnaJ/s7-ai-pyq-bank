/* EET435 Module 3: wind */
(Q=>{Q.push(
{id:'pitch-yaw',m:3,s:['M26:Q5','M23:Q6'],q:'Pitch control and yaw control in wind turbines: need and importance',a:`
<ul><li><b>Pitch control:</b> rotating each blade about its long axis to change the angle of attack. <b>Need:</b> (i) below rated wind, set the best pitch for maximum Cp and easy start-up; (ii) above rated wind, feather the blades to spill excess power and hold output at rated value; (iii) at cut-out speed or emergency, feather fully to stop the rotor (aerodynamic brake).</li>
<li><b>Yaw control:</b> turning the nacelle about the tower axis using yaw motors and a wind vane signal so the rotor always faces the wind. <b>Need:</b> maximum power capture (power falls with cos³ of the yaw error), reduced uneven loads and fatigue, and yawing out of the wind in storms.</li></ul>`,ms:[['Pitch control: meaning + need',1.5],['Yaw control: meaning + need',1.5]]},
{id:'wind-terms',m:3,s:['A25:Q5','N24:Q5'],q:'Wind turbine terms: rotor hub, pitch control, anemometer, yaw control, nacelle, wind vane',a:`
<ul><li><b>Rotor hub:</b> the central part of the rotor to which the blades are fixed; it connects them to the main (low-speed) shaft and houses the pitch mechanism.</li>
<li><b>Pitch control:</b> mechanism that rotates the blades about their axis to vary the angle of attack, limiting power above rated speed and stopping the rotor in high winds.</li>
<li><b>Anemometer:</b> instrument on the nacelle that measures wind speed; the controller uses it to start the turbine at cut-in and stop it at cut-out speed.</li>
<li><b>Yaw control:</b> yaw motors and bearing turn the nacelle about the tower so the rotor faces the wind.</li>
<li><b>Nacelle:</b> the housing on top of the tower containing the gearbox, generator, shafts, brake, controller and yaw drive.</li>
<li><b>Wind vane:</b> measures wind direction and signals the yaw controller to align the turbine.</li></ul>`,ms:[['Each term',1]]},
{id:'wind-env',m:3,s:['M26:Q6','M24:Q7','A25:Q6'],q:'Environmental impacts of wind energy / large wind farms',a:`
<ul><li><b>Noise:</b> aerodynamic swish of blades and mechanical gearbox noise; low-frequency noise near homes.</li><li><b>Visual impact and shadow flicker:</b> tall towers spoil landscapes; rotating blades cast flickering shadows.</li><li><b>Birds and bats:</b> collision with blades, disturbance of migratory routes and habitats.</li><li><b>Land use:</b> large area, though land between turbines can still be farmed; access roads cause deforestation.</li><li><b>Electromagnetic interference</b> with TV, radio and radar signals.</li><li><b>Offshore farms:</b> effects on marine life and fishing during construction; blade disposal (composite waste).</li></ul>
<p>Positive: no fuel, no air or water pollution, no greenhouse gas during operation.</p>`,ms:[['Three impacts explained',3]]},
{id:'power-curve',m:3,s:['M26:Q15a','A25:Q16a','M24:Q16b'],q:'Power vs wind speed (power–speed) characteristic: cut-in, rated, cut-out speeds',a:`
<span class="eqb">  P
 Pr │                ●━━━━━━━━━━━━━━━━━━●          Region III: constant
    │               ╱  (pitch/stall      │           rated power
    │              ╱    regulation)      │
    │   Region II ╱  P ∝ V³             │ Region IV:
    │   (Cp max)╱                        │ shut down
    │        ╱                           │
    │──────●╯                            ●━━━━━━━━━━ (P = 0)
    └──────┼───────────┼─────────────────┼─────────── V (m/s)
          Vci         Vr                Vco
       cut-in       rated            cut-out
       3–4 m/s     11–15 m/s         20–25 m/s</span>
<ul><li><b>Region I (0 to cut-in V<sub>ci</sub>):</b> wind too weak to overcome friction and losses; no output.</li>
<li><b>Region II (V<sub>ci</sub> to rated V<sub>r</sub>):</b> output rises steeply as P = ½ρAC<sub>p</sub>V³. The controller (variable speed, MPPT) keeps tip speed ratio at the optimum so C<sub>p</sub> is maximum.</li>
<li><b>Region III (V<sub>r</sub> to cut-out V<sub>co</sub>):</b> output limited to rated power P<sub>r</sub> (generator rating) by pitch control (feathering) or stall regulation; excess wind energy is spilled.</li>
<li><b>Region IV (above V<sub>co</sub>):</b> the turbine is shut down to protect it from damage.</li></ul>
<h4>Handling wind above cut-out speed</h4><ul><li>Blades are fully <b>feathered</b> (pitched to 90°) so they produce no lift.</li><li>Mechanical/disc <b>brake</b> is applied and the rotor parked/locked.</li><li>The nacelle is <b>yawed</b> out of the wind (furling for small turbines).</li><li>Restart when wind falls below a restart speed (hysteresis to avoid frequent stops).</li></ul>
<p><b>Use of the curve:</b> combined with the wind speed frequency distribution (Weibull) of a site, it gives annual energy and capacity factor.</p>`,ms:[['Curve with Vci, Vr, Vco',4],['Explanation of regions',4],['Above cut-out handling',2]],
a3:null},
{id:'betz',m:3,s:['M26:Q15b','M23:Q15b','M24:Q15a','D23:Q16a','N24:Q15a'],q:'Betz limit: maximum power extraction when downstream velocity = upstream/3 (Cp max = 16/27)',a:`
<p><b>Betz limit:</b> no wind turbine can extract more than <b>16/27 = 59.3 %</b> of the kinetic power in the wind passing through its swept area.</p>
<span class="eqb">  Vu (upstream)        V (at rotor)        Vd (downstream)
  ───────►   ════════   ───►  ║  ───►   ════════  ──►
   area A₁              rotor ║ area A           area A₂ (wider)
        stream tube expands as air slows down</span>
<h4>Derivation (actuator disc / momentum theory)</h4>
<span class="eqb">Mass flow through rotor:        ṁ = ρ A V

Thrust on rotor (change of momentum):  F = ṁ (Vu − Vd) = ρ A V (Vu − Vd)

Power absorbed by rotor:  P = F · V = ρ A V² (Vu − Vd)              ...(1)

Power = loss of kinetic energy of the air:
P = ½ ṁ (Vu² − Vd²) = ½ ρ A V (Vu − Vd)(Vu + Vd)                     ...(2)

Equating (1) and (2):   V = (Vu + Vd)/2                              ...(3)
(the velocity at the rotor is the average of upstream and downstream)

Substitute (3) in (2):
P = ¼ ρ A (Vu + Vd)(Vu² − Vd²)

Let x = Vd / Vu:
P = ¼ ρ A Vu³ (1 + x)(1 − x²)

For maximum power, dP/dx = 0:
d/dx[(1 + x)(1 − x²)] = d/dx[1 + x − x² − x³] = 1 − 2x − 3x² = 0
(3x − 1)(x + 1) = 0  ⇒  x = 1/3   (x = −1 is not physical)

∴ Vd = Vu / 3   and   V = (Vu + Vu/3)/2 = 2Vu/3

P_max = ¼ ρ A Vu³ (1 + 1/3)(1 − 1/9) = ¼ ρ A Vu³ · (4/3)(8/9)
      = (8/27) ρ A Vu³ = (16/27) · ½ ρ A Vu³

Power available in the wind: P₀ = ½ ρ A Vu³
Cp,max = P_max / P₀ = 16/27 = 0.593</span>
<h4>Meaning</h4><ul><li>If the air were stopped completely (V<sub>d</sub> = 0) no more air could flow through; if not slowed at all (V<sub>d</sub> = V<sub>u</sub>) no energy is taken. The optimum is in between, at V<sub>d</sub> = V<sub>u</sub>/3.</li><li>Real turbines reach C<sub>p</sub> ≈ 0.40–0.50 because of blade drag, tip losses and wake rotation; with gearbox and generator losses, overall ~0.35–0.45.</li></ul>`,ms:[['Definition / stream-tube sketch',2],['Momentum and energy equations, V = (Vu+Vd)/2',3],['dP/dx = 0 ⇒ Vd = Vu/3',3],['Cp,max = 16/27',2]]},
{id:'wind-power-eq',m:3,s:['M23:Q5'],q:'Derive the power available in the wind',a:`
<span class="eqb">Air of density ρ moving at speed V through area A (swept area):
Volume flow per second = A V,   mass flow ṁ = ρ A V
Kinetic energy per second = ½ ṁ V² = ½ (ρ A V) V²

P = ½ ρ A V³     (watts),   A = π D²/4
Power density P/A = ½ ρ V³  (W/m²)</span>
<p>So power is proportional to <b>V³</b> (doubling speed gives 8× power), to <b>swept area</b> (∝ D²) and to air density. A turbine extracts P = ½ρAV³C<sub>p</sub>, with C<sub>p</sub> ≤ 0.593.</p>`,ms:[['Mass flow',1],['KE per second',1],['Final expression and remarks',1]]},
{id:'betz-cf',m:3,s:['A25:Q16b'],q:'Define Betz limit and capacity factor',a:`
<ul><li><b>Betz limit:</b> the theoretical maximum fraction of the wind's kinetic power that any turbine can extract: C<sub>p,max</sub> = 16/27 ≈ 0.593. It occurs when the wind behind the rotor is slowed to one-third of the free-stream speed.</li>
<li><b>Capacity factor:</b> ratio of the actual energy produced in a period (usually a year) to the energy that would be produced if the turbine ran at rated power the whole time:
<span class="eqb">CF = Actual annual energy (kWh) / (Rated power (kW) × 8760 h)</span>
Typical values: onshore wind 25–35 %, offshore 40–50 %.</li></ul>`,ms:[['Betz limit',2],['Capacity factor',2]]},
{id:'cf-calc',m:3,s:['M23:Q15a'],q:'Capacity factor: WES producing 10,000 GWh in 10 years, rating 300 MW',a:`
<p><b>Capacity factor</b> = actual energy output over a period ÷ energy if run at rated power for the whole period.</p>
<span class="eqb">Average energy per year = 10,000 GWh / 10 = 1,000 GWh = 1,000,000 MWh
Maximum possible per year = 300 MW × 8760 h = 2,628,000 MWh

CF = 1,000,000 / 2,628,000 = 0.3805 ≈ 38 %</span>`,ms:[['Definition',2],['Calculation',3]]},
{id:'tsr-calc',m:3,s:['M26:Q16a'],q:'Offshore turbine 12 rpm, 2 MW at 10 m/s, D = 90 m: tip speed ratio and Cp',a:`
<span class="eqb">R = 90/2 = 45 m,   N = 12 rpm
ω = 2πN/60 = 2π × 12/60 = 1.257 rad/s
Tip speed = ωR = 1.257 × 45 = 56.55 m/s

Tip speed ratio  λ = ωR / V = 56.55 / 10 = 5.65

Swept area  A = πR² = π × 45² = 6361.7 m²
Power in wind (ρ = 1.225 kg/m³):
P_w = ½ ρ A V³ = 0.5 × 1.225 × 6361.7 × 10³ = 3.897 × 10⁶ W = 3.90 MW

Power coefficient  Cp = P_out / P_w = 2 / 3.90 = 0.513</span>
<p><b>Answer:</b> λ ≈ 5.65, C<sub>p</sub> ≈ 0.51 (51 % of the wind power, below the Betz limit of 0.593). A TSR of 5–7 is typical of fast three-bladed turbines.</p>`,ms:[['Tip speed and TSR',3],['Power in wind',3],['Cp',2]]},
{id:'offshore',m:3,s:['M26:Q16b'],q:'Why offshore sites are preferred for large wind farms',a:`
<ul><li><b>Higher and steadier wind speeds:</b> the sea surface is smooth (low roughness), so wind is 20–30 % faster and less turbulent; since P ∝ V³, energy can be 50–100 % more. Capacity factor 40–50 %.</li><li><b>Low wind shear and turbulence</b> reduce fatigue loads, so shorter towers suffice and machines last longer.</li><li><b>Large unobstructed area:</b> no land acquisition; very large turbines (10–15 MW) and big farms are possible.</li><li><b>Less public objection:</b> noise and visual impact are far from people.</li><li><b>Near coastal load centres</b> (cities) where land is costly.</li><li>Sea breeze effect gives good output during daytime peaks.</li></ul>
<p><b>Trade-offs:</b> costly foundations, cables and maintenance; corrosion.</p>`,ms:[['Wind resource advantage',2],['Space / social reasons',2],['Other reasons',2]]},
{id:'wecs-site',m:3,s:['D23:Q5','D23:Q16b'],q:'Site selection criteria for a WECS',a:`
<ul><li><b>High average wind speed:</b> annual mean above ~5–6 m/s at hub height, with steady wind; study at least one year of data.</li><li><b>Low turbulence and obstacles:</b> open plains, hilltops, ridges, coasts and offshore; avoid buildings and trees.</li><li><b>Altitude and air density:</b> power ∝ ρ, which falls at height.</li><li><b>Ground conditions:</b> firm soil for tower foundations.</li><li><b>Access</b> for transporting large blades and cranes; nearness to the <b>grid</b> and load.</li><li><b>Environmental and social factors:</b> distance from homes (noise), bird routes, airports, land cost.</li></ul>`,ms:[['Key criteria',4]],a3:`<ul><li><b>High, steady mean wind speed</b> (&gt; 5–6 m/s) with low turbulence: open plains, hilltops, coasts.</li><li><b>Good foundation soil, access roads and nearness to the grid.</b></li><li><b>Environmental factors:</b> away from homes, airports and bird routes; low land cost.</li></ul>`,ms3:[['Three criteria',3]]},
{id:'hawt-parts',m:3,s:['M23:Q16a'],q:'Parts of a horizontal-axis wind turbine; aerodynamic forces on blades',a:`
<span class="eqb">        ╲
         ╲ blade        ┌──────────────── NACELLE ────────────────┐
          ╲             │ low-speed  gear-   high-speed  generator │ ◄ anemometer,
   ── hub ●═══ shaft ═══│═[brake]══[box]══════════════[ G ]       │   wind vane
          ╱             │        controller, yaw motors            │
         ╱              └──────────────────┬───────────────────────┘
        ╱                         yaw bearing
                                           █
                                           █ tower
                                           █
                                     ▀▀▀▀▀▀▀▀▀▀▀ foundation</span>
<h4>Parts</h4><ul><li><b>Rotor blades</b> (usually 3), airfoil-shaped, of glass/carbon fibre; capture wind energy.</li><li><b>Hub</b> holds the blades and contains the pitch mechanism.</li><li><b>Low-speed shaft</b> (15–30 rpm), <b>gearbox</b> stepping up to ~1500 rpm, <b>high-speed shaft</b>.</li><li><b>Generator</b> (induction/DFIG or permanent-magnet synchronous).</li><li><b>Brake</b> (disc) for stopping and parking.</li><li><b>Nacelle</b>: housing for drive train and controls.</li><li><b>Yaw system</b>: yaw motors and bearing turn the nacelle into the wind.</li><li><b>Anemometer and wind vane</b>: wind speed and direction for the controller.</li><li><b>Controller, power electronics, transformer.</b></li><li><b>Tower</b> (tubular steel, 80–150 m) and <b>foundation</b>.</li></ul>
<h4>Aerodynamic forces on the blades</h4>
<span class="eqb">      Lift L (⊥ relative wind)
          ↑
   ══════◤══ airfoil ──► Drag D (∥ relative wind)
   relative wind W = vector sum of wind V and −blade speed ωr</span>
<ul><li><b>Lift</b> acts perpendicular to the relative wind, caused by the pressure difference between the curved upper surface (low pressure) and the lower surface. Its component in the plane of rotation produces the driving torque.</li><li><b>Drag</b> acts along the relative wind and opposes motion; it adds to thrust on the tower.</li><li>Good blades have a high lift-to-drag ratio; the angle of attack (set by pitch) controls both. Resultant forces split into <b>torque</b> (useful) and <b>axial thrust</b> (bends the blades and tower).</li></ul>`,ms:[['Sketch',3],['Parts explained',4],['Lift and drag forces',3]]},
{id:'lift-drag',m:3,s:['A25:Q15b'],q:'Working principle of WECS; importance of lift and drag forces',a:`
<p><b>Working principle:</b> moving air has kinetic energy (P = ½ρAV³). Blades of the turbine slow the wind and convert part of its kinetic energy into rotational mechanical energy of the rotor (C<sub>p</sub> ≤ 0.593). The rotor shaft drives a generator through a gearbox (or directly), producing electricity that is conditioned by power electronics and fed to the grid or a battery.</p>
<span class="eqb">Wind ─► Rotor (aero → mechanical) ─► Gearbox ─► Generator ─► Converter ─► Grid/Load
                                     controller (pitch, yaw, speed)</span>
<h4>Lift and drag</h4>
<ul><li><b>Drag force</b> acts in the direction of the relative wind. <b>Drag-type</b> machines (Savonius, cup anemometer) are pushed by the wind; their blade speed cannot exceed the wind speed (TSR &lt; 1), so efficiency is low (C<sub>p</sub> ≈ 0.15–0.2), but torque at start is high.</li><li><b>Lift force</b> acts perpendicular to the relative wind due to pressure difference across an airfoil. <b>Lift-type</b> machines (modern HAWTs, Darrieus) can run with blade tips much faster than the wind (TSR 5–8), reaching C<sub>p</sub> ≈ 0.45.</li><li>For lift machines, drag must be minimised: high lift-to-drag ratio at the right angle of attack gives maximum torque; pitch control uses this to regulate power.</li><li>Lift and drag together give torque (useful) and thrust (structural load).</li></ul>`,ms:[['Working principle',3],['Lift vs drag importance',3]]},
{id:'wind-calc1',m:3,s:['M23:Q16b'],q:'Power in wind at 8 m/s, blade 50 m; Betz maximum; output at 20 m/s with Cp 0.30',a:`
<span class="eqb">A = πR² = π × 50² = 7854 m²,  ρ = 1.23 kg/m³

(i) Power in the wind at 8 m/s:
P = ½ ρ A V³ = 0.5 × 1.23 × 7854 × 8³ = 0.5 × 1.23 × 7854 × 512
  = 2.473 × 10⁶ W ≈ 2.47 MW

(ii) Maximum extractable (Betz, Cp = 16/27 = 0.593):
P_max = 0.593 × 2.473 = 1.466 MW

(iii) At 20 m/s, Cp = 0.30:
P_wind = 0.5 × 1.23 × 7854 × 20³ = 3.864 × 10⁷ W = 38.64 MW
P_out = 0.30 × 38.64 = 11.59 MW</span>`,ms:[['Power in wind',2],['Betz maximum',1.5],['Output at 20 m/s',1.5]]},
{id:'wind-calc2',m:3,s:['N24:Q15b'],q:'Power in wind at 20 m/s, blade length 50 m, ρ = 1.23',a:`
<span class="eqb">A = π × 50² = 7854 m²
P = ½ ρ A V³ = 0.5 × 1.23 × 7854 × 20³
  = 0.5 × 1.23 × 7854 × 8000 = 3.864 × 10⁷ W ≈ 38.6 MW</span>
<p>The maximum a turbine could extract is 0.593 × 38.6 ≈ 22.9 MW (Betz limit).</p>`,ms:[['Area',1],['Formula and result',3]]},
{id:'cp-calc',m:3,s:['D23:Q6'],q:'Rotor D = 20 m, V = 16 m/s, P = 270 kW, ρ = 1.2: power coefficient',a:`
<span class="eqb">A = π D²/4 = π × 20²/4 = 314.16 m²
P_wind = ½ ρ A V³ = 0.5 × 1.2 × 314.16 × 16³ = 0.6 × 314.16 × 4096 = 772.1 kW
Cp = 270 / 772.1 = 0.35</span>
<p>The turbine converts about <b>35 %</b> of the wind power (Betz maximum would be 59.3 %).</p>`,ms:[['Power in wind',2],['Cp',1]]},
{id:'density-calc',m:3,s:['M24:Q15b'],q:'Aero-generator 1800 W at 6 m/s (1 atm, 24 °C); output on a hill at 0.85 atm, 10 °C, 8 m/s',a:`
<p>Power P = ½ρAC<sub>p</sub>V³, so for the same machine P ∝ ρV³, with air density ρ = p/(RT).</p>
<span class="eqb">Site 1: ρ₁ = 1.01325 × 10⁵ / (287 × 297.15) = 101325 / 85282 = 1.188 kg/m³
Site 2: ρ₂ = 0.85 × 1.01325 × 10⁵ / (287 × 283.15) = 86126 / 81264 = 1.060 kg/m³

P₂ = P₁ × (ρ₂/ρ₁) × (V₂/V₁)³
   = 1800 × (1.060/1.188) × (8/6)³
   = 1800 × 0.892 × 2.370
   = 3806 W ≈ 3.8 kW</span>
<p>Lower density on the hill cuts power by ~11 %, but the higher wind speed more than doubles it.</p>`,ms:[['Air densities',3],['P ∝ ρV³ and result',3]]},
{id:'hellmann-calc',m:3,s:['M24:Q16a'],q:'Propeller turbine: 13 m/s at 10 m, α = 0.14, hub 100 m, D = 80 m, 20% velocity drop, ηg = 80%',a:`
<span class="eqb">Wind at hub height (power law):
V₁₀₀ = V₁₀ (h/10)^α = 13 × (100/10)^0.14 = 13 × 1.380 = 17.95 m/s

A = π × 40² = 5026.5 m²

(i) Total power available:
P₀ = ½ ρ A V³ = 0.5 × 1.226 × 5026.5 × 17.95³
   = 0.5 × 1.226 × 5026.5 × 5779 = 1.781 × 10⁷ W ≈ 17.8 MW

(ii) Power extracted: velocity at turbine reduced by 20 % ⇒ axial induction a = 0.2
Cp = 4a(1 − a)² = 4 × 0.2 × 0.8² = 0.512
P_t = 0.512 × 17.81 = 9.12 MW

(iii) Electrical power:  P_e = 0.8 × 9.12 = 7.29 MW</span>
<p>(Check with momentum theory: V at rotor = 0.8V, downstream V<sub>d</sub> = 0.6V; P = ½ρA(0.8V)(V² − 0.36V²) = ½ρAV³ × 0.512.)</p>`,ms:[['Hub-height wind speed',2],['Total power',2],['Extracted power',2],['Electrical power',2]]},
{id:'hawt-vawt',m:3,s:['M24:Q6','N24:Q6'],q:'Horizontal axis vs vertical axis wind turbines',a:`
<div class="tw"><table class="t"><tr><th>HAWT</th><th>VAWT</th></tr>
<tr><td>Rotor axis horizontal, parallel to wind</td><td>Rotor axis vertical, perpendicular to wind</td></tr>
<tr><td>Needs yaw mechanism to face the wind</td><td>Accepts wind from any direction, no yaw</td></tr>
<tr><td>Generator and gearbox on top of tall tower (nacelle)</td><td>Generator and gearbox at ground level, easy maintenance</td></tr>
<tr><td>Higher efficiency (Cp 0.4–0.5), self-starting</td><td>Lower efficiency; Darrieus is not self-starting</td></tr>
<tr><td>Large ratings (MW), wind farms</td><td>Small ratings, urban/rooftop use</td></tr>
<tr><td>Examples: propeller (3-blade), multi-blade</td><td>Examples: Savonius, Darrieus</td></tr></table></div>`,ms:[['Constructional differences',1.5],['Operational differences',1.5]]},
{id:'wecs-class',m:3,s:['D23:Q15a'],q:'Classification of wind energy conversion systems',a:`
<h4>1. By axis of rotation</h4><ul><li><b>Horizontal axis (HAWT):</b> single-blade, two-blade, three-blade propeller, multi-blade (American farm windmill), Dutch type. Rotor upwind or downwind of the tower.</li><li><b>Vertical axis (VAWT):</b> Savonius (drag, S-shaped), Darrieus (lift, egg-beater), H-rotor (giromill), cyclogiro.</li></ul>
<h4>2. By aerodynamic force used</h4><ul><li><b>Drag type:</b> Savonius, cup anemometer, Persian windmill; low speed, low efficiency.</li><li><b>Lift type:</b> modern propellers, Darrieus; high TSR and efficiency.</li></ul>
<h4>3. By size / rating</h4><ul><li>Small (&lt; 100 kW): homes, farms, battery charging.</li><li>Medium (100 kW–1 MW): villages, industries.</li><li>Large (&gt; 1 MW): grid-connected wind farms.</li></ul>
<h4>4. By rotor speed</h4><ul><li><b>Constant speed:</b> squirrel-cage induction generator connected directly to grid (fixed speed, stall/pitch regulated).</li><li><b>Variable speed:</b> DFIG or PMSG with power converter; better energy capture (MPPT), less stress.</li></ul>
<h4>5. By application / connection</h4><ul><li><b>Stand-alone</b> with battery, <b>hybrid</b> (wind–solar–diesel), <b>grid-connected</b>.</li></ul>
<h4>6. By location</h4><ul><li><b>Onshore</b> and <b>offshore</b>.</li></ul>
<h4>7. By rotor position and drive</h4><ul><li>Upwind / downwind; geared / direct-drive (gearless).</li></ul>`,ms:[['Axis-based classification',3],['Force, size, speed, connection',5],['Examples',2]]},
{id:'anemometer',m:3,s:['D23:Q15b'],q:'Measuring wind speed with an anemometer',a:`
<span class="eqb">      ◖     ◗        cups
       ╲   ╱
        ╲ ╱
    ◖────●────◗      rotating arms
         │ vertical shaft ─► generator / pulse counter ─► display</span>
<ul><li><b>Cup anemometer (most common):</b> three or four hemispherical cups on horizontal arms on a vertical shaft. The concave side of a cup has a higher drag than the convex side, so the rotor spins at a speed proportional to wind speed. The shaft drives a small dc generator (voltage ∝ speed) or a pulse generator (frequency ∝ speed), calibrated in m/s.</li>
<li><b>Propeller (vane) anemometer:</b> a propeller kept facing the wind by a tail vane; rpm ∝ wind speed; also gives direction.</li>
<li><b>Hot-wire anemometer:</b> wind cools an electrically heated wire; change in resistance/current gives the speed.</li>
<li><b>Sonic (ultrasonic) anemometer:</b> measures transit time of sound pulses between transducers; no moving parts, gives 3-D speed.</li></ul>
<p>For wind resource assessment, anemometers are mounted at several heights on a met mast (e.g. 10 m and hub height) and data are logged over a year.</p>`,ms:[['Cup anemometer principle',2.5],['Other types',1.5]]},
{id:'savonius',m:3,s:['A25:Q15a'],q:'Savonius and propeller-type wind turbines: construction and comparison',a:`
<h4>Savonius rotor (vertical axis, drag type)</h4>
<span class="eqb"> Top view:          ╭──╮
                  ( ⟵ │     two half-cylinders (S-shape),
     wind ──►         │ ⟶ )  offset with a gap so air passes
                      ╰──╯   from one bucket into the other</span>
<p>Made from two (or three) half-cylindrical buckets fixed between end plates on a vertical shaft, overlapping in an S-shape. The concave bucket facing the wind has more drag than the convex one moving against it, so the rotor turns. Air flowing through the central gap pushes the returning bucket too. Simple, self-starting, high starting torque, accepts any wind direction. Low speed (TSR ≈ 1) and low C<sub>p</sub> (≈ 0.15–0.25). Used for pumping water, ventilation, small chargers.</p>
<h4>Propeller type (horizontal axis, lift type)</h4>
<span class="eqb">   ╲
    ╲  airfoil blades (2 or 3)
 ────●═══ hub/shaft ═══[gearbox]═[generator]  in nacelle on tall tower, yaw drive
    ╱
   ╱</span>
<p>Two or three slender airfoil blades on a hub at the top of a tall tower; the nacelle contains shaft, gearbox, generator, brake and controls; yaw drive keeps it facing the wind, pitch control limits power. Lift on blades drives the rotor at TSR 5–8 with C<sub>p</sub> 0.4–0.5. Used for MW-scale grid power.</p>
<div class="tw"><table class="t"><tr><th>Feature</th><th>Savonius</th><th>Propeller</th></tr>
<tr><td>Axis</td><td>Vertical</td><td>Horizontal</td></tr><tr><td>Force</td><td>Drag</td><td>Lift</td></tr><tr><td>Tip speed ratio</td><td>≤ 1</td><td>5–8</td></tr><tr><td>Cp</td><td>0.15–0.25</td><td>0.40–0.50</td></tr><tr><td>Starting torque</td><td>High, self-starting</td><td>Low</td></tr><tr><td>Yaw</td><td>Not needed</td><td>Needed</td></tr><tr><td>Material use</td><td>Heavy for its output</td><td>Light, slender blades</td></tr><tr><td>Use</td><td>Water pumping, small loads</td><td>Grid power, wind farms</td></tr></table></div>`,ms:[['Savonius sketch + construction',3],['Propeller sketch + construction',3],['Comparison',2]]},
{id:'darrieus',m:3,s:['N24:Q16a'],q:'Darrieus and multi-bladed wind turbines: construction and applications',a:`
<h4>Darrieus turbine (vertical axis, lift type)</h4>
<span class="eqb">        ┬ top bearing
      ╭─┼─╮
     (  │  )   two or three curved (troposkien / egg-beater)
     (  │  )   airfoil blades fixed at top and bottom of the
      ╰─┼─╯   vertical shaft
        │  guy wires
   [gearbox + generator at ground level]</span>
<ul><li>Two or three thin curved blades of airfoil section, bow-shaped (troposkien) so they carry centrifugal load in pure tension.</li><li>Blades attached to a vertical rotating tube; gearbox, brake and generator at ground level; tower held by guy wires.</li><li>Works on lift; TSR 4–6, C<sub>p</sub> ≈ 0.35–0.40; accepts wind from any direction; <b>not self-starting</b> (started by the generator as a motor or by a Savonius rotor).</li><li>Variants: H-rotor (straight blades), giromill (variable pitch).</li><li><b>Applications:</b> grid-connected and stand-alone electricity generation, urban rooftops, hybrid systems.</li></ul>
<h4>Multi-bladed turbine (horizontal axis, American windmill)</h4>
<span class="eqb">     ╱╲╱╲╱╲
    ─ ◉ ─   12–24 curved sheet-metal blades on a wheel (2–5 m dia)
     ╲╱╲╱╲╱         │ crank → reciprocating pump rod
          ╲════╡ tail vane (keeps rotor facing wind)
                    │ lattice tower</span>
<ul><li>A rotor of many (12–24) slightly curved steel sheet blades covering most of the swept area (high solidity), with a tail vane for yaw.</li><li>Low speed (TSR ≈ 1), very high starting torque, starts in light winds (2–3 m/s); low C<sub>p</sub> (≈ 0.3) but robust and cheap.</li><li>Rotation is converted by a crank or gear to reciprocating motion of a piston pump rod.</li><li><b>Applications:</b> water pumping for farms, livestock and irrigation; small mechanical drives.</li></ul>`,ms:[['Darrieus construction + sketch',4],['Multi-blade construction + sketch',4],['Applications',2]]},
{id:'wecs-limits',m:3,s:['N24:Q16b'],q:'Limitations of wind energy conversion systems',a:`
<ul><li><b>Intermittent and variable</b> output; needs storage or backup; low capacity factor (25–35 %).</li><li><b>Low energy density</b>: large rotor areas and spacing needed; only certain windy sites are viable.</li><li><b>High initial cost</b>; transport and installation of huge blades and towers.</li><li><b>Environmental:</b> noise, visual impact, bird deaths, radio/TV interference.</li><li>Power quality issues (flicker, harmonics) and grid integration problems; maintenance of gearbox at height.</li></ul>`,ms:[['Four limitations',4]]}
)})(SUBJ.EET435.QB);
