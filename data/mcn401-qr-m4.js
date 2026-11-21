/* MCN401 quick-revision answers, Module 4 (machine guarding, welding, material handling). Format as in data/cst423-qr.js. */
(R=>{SUBJ.MCN401.QB.forEach(c=>{const r=R[c.id];if(!r)return;if(r.L)c.qr=r.L;if(r.S)c.qr3=r.S})})({

'wire-defects':{L:`
Wire ropes on cranes and hoists must be inspected regularly; a rope with any of these defects beyond limits must be thrown away.
# Broken wires
- Wire ends stick out; caused by fatigue over small pulleys, wear, overload.
# Kinking
- A loop pulled tight leaves a sharp permanent bend; big loss of strength.
# Bird-caging
- Outer strands open out like a cage due to sudden load release or twisting.
# Corrosion
- Rust and pitting from no lubrication or moisture; inside corrosion is hidden and dangerous.
# Abrasion / wear
- Outer wires flattened and shiny; diameter reduced by more than ~10 %.
# Crushing / flattening
- Rope squashed by bad winding on the drum or being run over.
# Core or strand protrusion (and heat damage)
- Core pushed out between strands; waviness; discoloration from heat or arcs.
# Prevention
- Correct rope and safety factor (≥ 5); right pulley size; lubrication; correct spooling; avoid shock loads.
- Daily visual checks and periodic thorough examination; discard by rules.
= Inspect ropes often and discard when these seven defects appear.
@ B-K-B-C-A-C-C: Broken, Kink, Bird-cage, Corrode, Abrade, Crush, Core out.`},

'wire-hazards':{S:`
Wire ropes used for lifting can cause serious accidents.
- <b>Rope failure and dropped loads</b> from overload, broken wires, corrosion or kinks.
- <b>Snap-back:</b> a broken rope under tension whips back and hits workers.
- <b>Cuts and crushing:</b> broken wire ends pierce hands; hands caught between rope and drum; swinging loads.
@ Snap, Drop, Cut.`},

'grinding':{L:`
Grinding wheels spin very fast, so wheel bursts, flying particles and contact injuries are the main risks.
# Hazards
- Wheel bursting from cracks, overspeed, wrong mounting or side grinding.
- Flying particles and sparks: eye injuries.
- Contact with the wheel; work caught between wheel and rest.
- Entanglement of loose clothing or gloves.
- Dust (silica, metal), noise, vibration, fire, electric shock.
# Safety precautions
- Guard covering most of the wheel; tongue guard close to the wheel.
- Work rest set within 3 mm of the wheel.
- Ring test before mounting; wheel speed rating ≥ machine speed; correct flanges.
- Run new wheel for 1 minute with nobody in line; stand aside when starting.
- Do not grind on the side of a straight wheel; feed gently.
- PPE: goggles/face shield, ear protection, dust mask; no loose clothing.
- Dust extraction; keep flammables away; earthed tools.
= Guard it, set the rest, test the wheel and protect the eyes.
@ Guard, Gap, Ring, Goggles.`,
S:`
Safety precautions for grinding:
- <b>Guard</b> covering most of the wheel; work rest within 3 mm of the wheel.
- <b>Ring-test</b> the wheel, check rated speed, mount correctly; stand aside when starting; no side grinding.
- <b>PPE and dust control:</b> goggles or face shield, ear protection, dust mask; no loose clothing; dust extraction.
@ Guard, Gap, Ring, Goggles.`},

'arc-welding':{L:`
Arc welding uses a strong electric arc, so shock, radiation, fumes and fire are the main hazards.
# Hazards
- Electric shock from live electrode, holder or damaged cables, especially in damp places.
- UV and IR radiation: arc eye and skin burns.
- Fumes and gases: metal oxides, ozone, NOx, CO.
- Burns from spatter and hot metal; fire from sparks.
- Noise, awkward posture, falls when welding at height.
# Safety practices
- <b>Electrical:</b> earth the machine and job; insulated holders and good cables; switch off when not in use; dry gloves.
- <b>Eye and skin:</b> welding helmet with shade 10–14 filter; flame-resistant clothes, leather gloves, apron; screens for others.
- <b>Ventilation:</b> local fume extraction; respirators in confined spaces.
- <b>Fire:</b> hot work permit; remove combustibles; extinguisher and fire watch; never weld unpurged containers.
- <b>Workplace and training:</b> dry, clean area; trained welders; first aid.
= Guard against shock, shine, smoke and sparks.
@ Shock, Shine, Smoke, Sparks.`,
S:`
Arc welding safety covers three main hazards.
- <b>Electric shock:</b> earth the machine and job; use insulated holders and good cables; dry gloves.
- <b>Radiation and burns:</b> welding helmet with correct filter, leather gloves, apron, screens for others.
- <b>Fumes and fire:</b> local exhaust ventilation; remove combustibles, hot work permit, extinguisher ready.
@ Shock, Shine, Smoke, Sparks.`},

'gas-welding':{L:`
Gas (oxy-acetylene) welding uses flammable gas and pure oxygen, so fire and explosion are the main risks.
# Hazards
- Acetylene is highly flammable and unstable above 1.5 bar; leaks from hoses and valves.
- Flashback: flame travels back into hose or cylinder.
- Oxygen with oil or grease can catch fire; oxygen-rich air makes clothes burn fast.
- Falling or heated cylinders; burns, eye injury, fumes.
# Safety measures
- Store and use cylinders upright and chained; keep oxygen and fuel cylinders apart; valve caps on.
- Fit flashback arrestors and non-return valves.
- Correct regulators and colour-coded hoses; leak test with soapy water, never a flame.
- No oil or grease on oxygen fittings; never use oxygen to blow dust.
- Acetylene pressure below 1 bar; open valves slowly; light with a spark lighter.
- Goggles (shade 4–6), gloves, flame-resistant clothes; hot work permit; extinguisher; ventilation.
= Keep cylinders safe, stop flashback and keep oil away from oxygen.
@ Upright cylinders, Arrestors on, Soap test.`,
S:`
Gas welding (oxy-acetylene) safety issues:
- <b>Fire and explosion</b> from acetylene leaks, flashback, and oxygen contact with oil or grease.
- <b>Cylinder safety:</b> keep upright and secured; flashback arrestors; leak test with soap solution; correct regulators.
- <b>Burns, eye injury, fumes:</b> goggles with filter, gloves, ventilation, remove combustibles, extinguisher ready.
@ Upright cylinders, Arrestors on, Soap test.`},

'guard-principles':{L:`
Machine guarding stops workers from touching dangerous moving parts. A good guard follows these principles.
# Prevent contact
- Keep hands, body and clothes away from the point of operation, gears, belts and nip points.
# Secure and durable
- Firmly fixed, strong and tamper-proof; cannot be easily removed or bypassed.
# Protect from falling and flying objects
- Nothing should fall into moving parts or be thrown out.
# Create no new hazard
- No sharp edges or new pinch points.
# Do not hinder work
- Allow normal work, lubrication and maintenance without removing the guard.
# Fail-safe design
- Interlocks stop the machine if the guard is opened; meet standards and the Factories Act.
= A good guard stops contact, stays put, adds no danger and lets work go on.
@ Guard must Stop, Stay, Not harm, Not hinder.`,
S:`
Machinery safeguards have these objectives:
- <b>Prevent contact</b> with dangerous moving parts and stop falling or flying objects.
- <b>Be secure and durable</b> so they cannot be easily removed or bypassed.
- <b>Create no new hazard and not hinder work;</b> allow safe lubrication and maintenance.
@ Stop, Stay, Not harm, Not hinder.`},

'point-op':{S:`
The <b>point of operation</b> is the place on a machine where work is actually done on the material: cutting, shaping, punching, pressing or drilling.
- Ex: die area of a power press, blade of a saw, cutter of a milling machine.
- It is the most dangerous zone because the operator's hands come close while feeding material.
- It is protected by fixed or interlocked guards, two-hand controls, light curtains or feeding tools.
@ Point of operation = where the work is done.`},

'guard-types':{L:`
Machines are safeguarded by guards (physical barriers) and safeguarding devices (which sense or control the operator).
# Fixed guard
- Permanent barrier fixed with screws; no moving parts.
- Suits belts, pulleys, gears and points not needing frequent access; simplest and most reliable.
# Interlocked guard
- Machine cannot start unless the guard is closed; stops if opened.
- Suits places needing frequent access: presses, mixers, CNC doors.
# Adjustable and self-adjusting guards
- Adjustable for different stock sizes (band saws); self-adjusting opens with the stock (circular saws).
# Presence-sensing devices
- Light curtains, pressure mats stop the machine when a body part enters.
- Suit power presses and robot cells.
# Pull-back and restraint devices
- Wrist cables pull hands away or limit reach; for presses.
# Two-hand controls and trip devices
- Both hands needed to run the stroke; body bars and trip wires for emergency stop.
# Other methods
- Distance, automatic feeding, push sticks and tongs.
= Guards block access; devices detect the operator and stop the machine.
@ Guards BLOCK; Devices DETECT.`},

'presence':{L:`
A presence-sensing device stops a machine when a person enters the danger zone; the light curtain is the most common.
# Construction
- Emitter column sends many infrared beams across the danger zone.
- Receiver column on the other side detects the beams.
- Safety controller with dual-channel outputs linked to the machine's stop circuit.
# Operation
- While all beams are received, the machine can run.
- If a hand breaks any beam, the controller stops the motion at once (clutch off, brake on).
- The machine restarts only after the zone is clear and reset is pressed.
# Safety distance
- Mounted far enough (S = K × T + C) that the machine stops before the hand reaches danger.
# Use
- Power presses, press brakes, robot cells; also pressure mats and laser scanners.
= Break the beam and the machine stops.
@ Break the beam, Stop the machine.`},

'fixed-guard':{S:`
A <b>fixed guard</b> is a permanent barrier fastened to a machine that needs tools to remove.
- It has no moving parts, so it is the simplest, most reliable and cheapest guard with little maintenance.
- It suits parts that do not need access during normal running.
- Ex: a fixed mesh cover over the belt and pulleys of a lathe or compressor stops fingers being drawn into the nip point.
@ Fixed = Fastened forever.`},

'mmh-hazards':{S:`
Manual material handling (lifting, carrying, pushing) causes many injuries.
- <b>Back and muscle injuries:</b> strains, slipped disc, hernia from heavy or awkward loads and twisting.
- <b>Cuts and crushing</b> of fingers and feet from sharp edges or dropped loads.
- <b>Slips, trips and falls</b> when loads block vision or floors are uneven; fatigue.
@ Back, Hands, Feet.`},

'mmh-areas':{L:`
Manual handling risk is assessed using four key areas, remembered as TILE.
# Task
- Holding loads away from the body, twisting, stooping, reaching up, long carrying, repetition, pushing/pulling, too little rest.
# Individual
- Strength, height, age, health, pregnancy, training and fitness of the worker.
# Load
- Heavy, bulky, hard to grip, unstable (liquids), sharp, hot or cold.
# Environment
- Narrow spaces, slippery or uneven floors, steps, poor lighting, heat, wind.
# Control
- Avoid manual handling (mechanise); reduce risk with lifting aids, smaller loads, better layout, team lifting, training.
= Check Task, Individual, Load and Environment before lifting.
@ TILE = Task, Individual, Load, Environment.`},

'mmh-capacity':{L:`
Capacity assessment finds how much a worker can safely lift, push or pull.
# Lifting assessment
- Use TILE and the NIOSH lifting equation: RWL = LC × HM × VM × DM × AM × FM × CM (LC = 23 kg).
- Lifting Index LI = load / RWL; LI above 1 means risk.
- Guide weights: about 25 kg for men and 16 kg for women close to the body at waist height; less if far, high, low or frequent.
# Pushing and pulling
- Check starting and keep-moving force: about 20 kg and 10 kg force for men.
- Push rather than pull; hands between waist and shoulder; good trolleys with large wheels; avoid slopes.
# Safety guidelines
- Use aids (hoists, trolleys); smaller loads; team lifting.
- Lift with bent knees, straight back, load close, no twisting, smooth movement.
- Training, rest breaks, gloves and safety shoes.
= Assess the load, use aids and lift the right way.
@ Lift close, Bend knees, Back straight.`},

'mmh-vs-mech':{L:`
Material can be moved by human effort (manual) or by equipment (mechanised).
# Manual handling
- Lifting, carrying, pushing by hand.
- For light, small loads, short distances, irregular jobs.
- Low cost and flexible, but slow.
- Hazards: back injuries, MSDs, crushing, fatigue.
Ex: workers carrying cement bags to a mixer.
# Mechanised handling
- Cranes, hoists, conveyors, forklifts.
- For heavy, bulky, repeated loads over long distances.
- High capital cost but fast and cheap per unit.
- Hazards: dropped loads, collisions, entanglement, equipment failure.
Ex: EOT crane lifting steel coils; belt conveyor for coal; forklift stacking pallets.
= Manual uses muscles; mechanised uses machines; each has its own hazards.
@ Manual = Muscles; Mechanised = Machines.`},

'mh-safety':{L:`
Material handling, manual or mechanical, needs planned safety measures.
# General
- Avoid unnecessary handling; mechanise heavy and repeated jobs; plan short routes.
# Manual handling
- Assess the load; team lifting for heavy or bulky items.
- Correct lifting: feet apart, bend knees, straight back, load close, no twisting.
- Gloves, safety shoes; trolleys and hand trucks.
# Cranes and hoists
- Show and never exceed safe working load (SWL); limit switches and overload cut-outs.
- Thorough examination every 12 months; trained operators; signalman; nobody under loads.
# Slings, ropes, chains and hooks
- Correct choice and SWL for the sling angle; inspect before use; safety latches; pad sharp edges.
# Conveyors and forklifts
- Guards on nip points; pull cords and stop buttons; lock-out during maintenance.
- Trained drivers, rated capacity, speed limits, marked aisles.
# Storage and hazardous materials
- Stable stacking with height limits; racks with load ratings; labels, MSDS, spill kits.
= Never exceed SWL, never stand under a load, and lift the right way.
@ Never exceed SWL; Never stand under a load.`,
S:`
Safety considerations in material handling:
- <b>Manual:</b> use aids; correct lifting (bend knees, straight back, load close); team lifting.
- <b>Equipment:</b> never exceed SWL of cranes, slings and hoists; inspect lifting gear; trained operators; nobody under loads.
- <b>Workplace:</b> clear aisles, stable stacking, conveyor guards and emergency stops; gloves and safety shoes.
@ Never exceed SWL; Never stand under a load.`},

'maint-obj':{S:`
Maintenance keeps equipment in good, safe condition.
- <b>Safety:</b> keep machines, lifting gear and guards safe to prevent accidents.
- <b>Reliability:</b> avoid breakdowns and downtime; extend equipment life.
- <b>Efficiency and quality</b> at low cost; meet legal inspection requirements.
@ Safe, Reliable, Efficient.`},

'mh-maint':{L:`
Material handling equipment such as an EOT crane needs a planned maintenance strategy.
# Daily operator checks
- Test limit switches, brakes, emergency stop, horn and lights.
- Look at wire rope, hook and latch, pendant controls, leaks and noise.
# Preventive maintenance
- Lubricate ropes, gears, bearings and wheels; adjust brakes.
- Check rope anchorage, pulleys, rails, bolts, end stops, electrical panels and earthing.
# Condition monitoring
- Vibration analysis, thermography, oil analysis, rope and hook testing.
# Statutory examination and load test
- Thorough examination every 12 months (Factories Act); load test at 125 % SWL after repairs; records kept.
# Safe maintenance work
- Permit to work, lock-out/tag-out, crane parked, area barricaded, harness at height, trained staff.
# Records and review
- Logbooks, breakdown analysis, discard defective ropes and hooks.
= Check daily, maintain on schedule, test by law and record everything.
@ Daily, Planned, Predict, Test, Record.`},

'chains-slings':{L:`
Chains and slings must be inspected, used correctly and stored well to prevent load drops.
# Identification
- Each chain or sling tagged with SWL, size, grade and ID; register kept.
# Inspection
- Visual check before every use; thorough examination by a competent person at least every 6 months.
# Discard criteria
- Chains: stretch over 5 %, link wear over 10 %, cracks, nicks, bent or twisted links, heat damage, corrosion.
- Wire rope slings: many broken wires, kinks, bird-caging, crushed eyes; fibre slings: cuts, burns, chemical damage.
# Correct use
- Never exceed SWL; allow for sling angle (wider angle, more load per leg).
- Pad sharp edges; never knot chains; no dragging; no shock loads.
# Storage and repair
- Hang on racks in a dry place away from heat and chemicals; lubricate wire slings.
- Repairs only by competent persons; proof-test after repair.
= Tag, check, discard when damaged and store properly.
@ Tag, Check, Discard, Store.`},

'clamps':{L:`
Lifting clamps grip plates or beams with jaws and teeth, so their grip must be kept reliable.
# Marking
- SWL, grip range, serial number and type marked; use only for its purpose (vertical or horizontal).
# Pre-use inspection
- Jaws and teeth not worn or clogged; spring and locking lever working; pins secure; body not bent or cracked.
# Periodic examination
- Thorough examination at least every 6 months; proof test after repair; records kept.
# Cleaning and lubrication
- Clean teeth for good grip; lubricate pivots and springs.
# Replacement
- Replace worn cams, pads and springs with genuine parts; discard cracked or opened clamps.
# Correct use and storage
- Do not exceed SWL or grip range; lock before lifting; one plate at a time; dry storage.
= Clean teeth, check spring, lock before lifting.
@ Clean teeth, Check spring, Lock before lift.`},

'hooks':{S:`
Lifting hooks must be safe because the whole load hangs on them.
- <b>Marking and latch:</b> SWL and ID marked; safety latch fitted so the sling cannot slip off.
- <b>Inspection:</b> discard if the throat has opened more than ~15 %, twisted, worn, cracked; never weld or heat a hook.
- <b>Use:</b> load sits in the bowl (saddle), never on the tip; never exceed SWL; periodic examination.
@ Latch on, Load in bowl, Never weld.`},

'hearing':{L:`
A hearing conservation programme (HCP) prevents hearing loss where noise is 85 dB(A) or more (8-hour average). The limit in India is 90 dB(A) for 8 hours.
# Noise monitoring
- Sound level surveys and personal dosimeters; noise maps; find workers above 85 dB(A).
# Engineering controls
- Quieter machines, maintenance, vibration mounts, silencers, enclosures, barriers, remote control rooms.
# Administrative controls
- Job rotation, scheduling noisy work, warning signs, hearing protection zones.
# Hearing protection devices
- Ear plugs and ear muffs with good noise reduction; free issue, fit check; double protection above 105 dB(A).
# Audiometric testing
- Baseline hearing test at joining, then yearly tests to catch early loss.
# Training, records and review
- Yearly training on noise and HPD use; keep noise and audiogram records; check the programme works.
= Measure noise, control it, protect ears, test hearing and train workers.
@ M-C-P-A-T-R: Monitor, Control, Protect, Audiogram, Train, Record.`,
S:`
A hearing conservation programme protects workers from noise-induced hearing loss.
- <b>Noise monitoring</b> to find areas and workers above 85 dB(A).
- <b>Controls and protection:</b> quieter machines, enclosures, job rotation, ear plugs and ear muffs.
- <b>Audiometric testing</b> (baseline and yearly), <b>training</b> and <b>record keeping</b>.
@ Monitor, Control, Protect, Test, Train.`},

'turning':{L:`
A lathe (turning) rotates the workpiece at speed, so entanglement and flying chips are the main dangers.
# Critical hazards
- Entanglement of loose clothes, gloves, hair or jewellery in the chuck or lead screw.
- Flying hot, sharp chips: eye injuries, cuts, burns.
- Chuck key or loose workpiece thrown out when the machine starts.
- Contact with rotating parts and the tool; noise; coolant dermatitis; shock.
# Safety measures
- Chuck guard, chip/splash guard; fixed guards on belts and gears.
- Self-ejecting chuck key; never leave it in the chuck.
- Close-fitting clothes; no gloves, ties or jewellery near rotating parts; tie long hair.
- Safety goggles or face shield and safety shoes.
- Grip the work firmly; correct speed and feed.
- Remove chips with a brush or hook, never by hand, and only after stopping.
- Stop the machine before measuring or cleaning; emergency stop within reach.
- Lock-out for maintenance; clean non-slip floor; good light; trained operators.
= Guard the chuck, remove the key, avoid loose clothing and protect the eyes.
@ Guard the chuck, Remove the key, No loose clothes.`},

});
