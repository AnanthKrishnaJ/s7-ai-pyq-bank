/* MCN401 quick-revision answers, Module 5 (hazard analysis, chemicals, fire). Format as in data/cst423-qr.js. */
(R=>{SUBJ.MCN401.QB.forEach(c=>{const r=R[c.id];if(!r)return;if(r.L)c.qr=r.L;if(r.S)c.qr3=r.S})})({

'hazard-risk':{S:`
Hazard and risk are different ideas.
- <b>Hazard:</b> anything with the potential to cause harm (a source or situation). Ex: a chlorine tank, a live wire, a wet floor.
- <b>Risk:</b> the chance that the hazard actually causes harm, combined with how serious it is: Risk = Probability × Severity. Ex: chance of a worker being poisoned by a chlorine leak.
- A hazard exists anyway; risk depends on exposure and controls.
@ Hazard = CAN harm; Risk = WILL it harm, and how badly.`},

'msds':{L:`
A Material Safety Data Sheet (MSDS, now SDS) is a document from the chemical supplier giving full details of its hazards and safe handling.
# Legal basis
- Required by the Factories Act (Sec. 41B) and hazardous chemical rules; GHS 16-section format.
# Contents (16 sections)
- Identification, hazards (pictograms, signal word), composition.
- First aid, fire-fighting, spill measures.
- Handling and storage; exposure limits and PPE.
- Physical and chemical properties (flash point, boiling point).
- Stability and reactivity; toxicology; ecology.
- Disposal, transport (UN number), regulations, date of revision.
# Uses
- Tells workers the hazards and how to protect themselves.
- Helps choose PPE and controls; guides fire-fighters and doctors in emergencies; used in training.
- Must be available at the workplace in a language workers understand.
= MSDS is the chemical's full safety guide.
@ MSDS = chemical's ID card + instruction manual.`,
S:`
An <b>MSDS</b> (Material Safety Data Sheet) is a document supplied with every hazardous chemical.
- It gives the chemical's identity, hazards, composition and physical/chemical properties.
- It explains toxicity, safe handling and storage, PPE, first aid, fire-fighting, spill response and disposal (16 GHS sections).
- Workers and emergency teams use it to work and respond safely.
@ MSDS = chemical's ID card + instruction manual.`},

'msds-why':{S:`
MSDS is mandatory for chemicals for three main reasons.
- <b>Right to know:</b> workers must be told the hazards of chemicals they handle; legal duty under the Factories Act and chemical rules.
- <b>Safe handling:</b> data like flash point, exposure limits and reactivity are needed to plan storage, ventilation and PPE.
- <b>Emergency response:</b> first aid, fire-fighting and spill details for responders and doctors; also guides transport and disposal.
@ Know it, Handle it, Treat it.`},

'msds-label':{L:`
Both the MSDS and the product label give hazard information, but in different detail and for different uses.
# MSDS
- Detailed document of 16 sections, several pages.
- Kept on file and given to users, safety staff and doctors.
- Covers composition, properties, toxicology, PPE, first aid, fire-fighting, spills, disposal, transport, laws.
- Used for planning, training and emergencies.
# Product label
- Short information printed on the container.
- Seen at the point of use.
- Shows product name, GHS pictograms, signal word (Danger/Warning), hazard and precaution statements, supplier.
- Used for quick identification and warning.
= Label warns quickly; MSDS explains fully; the label points to the MSDS.
@ Label = quick warning; MSDS = full story.`},

'fire-class':{L:`
Fire needs fuel, heat and oxygen (fire triangle) plus a chain reaction. Fires are classified by fuel so the right extinguisher is used.
# Class A: ordinary solids
- Wood, paper, cloth, rubber, plastics.
- Use water, foam, ABC powder.
# Class B: flammable liquids
- Petrol, diesel, oils, paints, solvents.
- Use foam, CO<sub>2</sub>, dry powder; never water jet.
# Class C: flammable gases
- LPG, acetylene, methane; shut off the gas first, then dry powder or CO<sub>2</sub>.
# Class D: metals
- Magnesium, sodium, aluminium powder; special dry powders; never water.
# Electrical fires and Class K
- Live equipment: switch off, then CO<sub>2</sub> or dry powder; cooking oil fires: wet chemical.
# Extinguisher types
- Water, foam (AFFF), CO<sub>2</sub>, dry chemical powder, clean agent, wet chemical, special powder.
# Using an extinguisher (PASS)
- Pull the pin, Aim at the base, Squeeze the lever, Sweep side to side.
= Know the fuel, pick the agent, and use PASS.
@ A Ash, B Barrel (liquid), C Cylinder (gas), D Dense metal.`,
S:`
Fires are classified by the fuel burning.
- <b>Class A:</b> ordinary solids (wood, paper, cloth): water, foam. <b>Class B:</b> flammable liquids (petrol, oil): foam, CO<sub>2</sub>, powder.
- <b>Class C:</b> flammable gases (LPG): shut off gas, dry powder. <b>Class D:</b> metals (Mg, Na): special powder.
- <b>Electrical fires:</b> switch off, then CO<sub>2</sub> or dry powder; never water.
@ A Ash, B Barrel, C Cylinder, D Dense metal.`},

'extinguishers':{L:`
Portable fire extinguishers fight small fires; each uses an agent that cools, smothers or breaks the chain reaction.
# Water type
- Water pushed out by stored pressure or a gas cartridge; cools burning material.
- For Class A only; never on oil or live electrical fires.
# Foam (AFFF) type
- Foam blanket smothers and cools; seals vapours.
- For Class A and B (oil, petrol); not on live electrical.
# CO<sub>2</sub> type
- Liquid CO<sub>2</sub> comes out as gas and snow through a horn; displaces oxygen; leaves no residue.
- Best for electrical and Class B fires; do not hold the horn; ventilate small rooms after use.
# Dry chemical powder (DCP / ABC) type
- Powder pushed by gas; breaks the chain reaction and blankets the fuel.
- For Class B, C and electrical (ABC also A); leaves residue.
# Special types
- Clean agent for computer rooms; wet chemical for kitchen oil; special powder for metals.
# Use and maintenance
- PASS: Pull, Aim, Squeeze, Sweep.
- Mounted at reachable points; monthly checks; yearly service; pressure test every 3–5 years; refill after use.
= Water cools, foam covers, CO<sub>2</sub> chokes, powder breaks the chain.
@ Water Cools, Foam Covers, CO<sub>2</sub> Chokes, Powder Breaks the chain.`},

'electrical-fire':{L:`
Electrical fires involve live equipment or start from electrical faults; water and foam must never be used.
# Causes
- Short circuits causing arcs and sparks; overloaded circuits and overheated cables.
- Loose connections creating hot spots; damaged insulation.
- Earth faults, faulty appliances, static sparks in flammable areas, lightning.
- Overheated transformers, motors and switchgear.
# First step
- Switch off and isolate the power supply.
# CO<sub>2</sub> extinguisher
- Pull pin, aim the horn at the base, squeeze; CO<sub>2</sub> displaces oxygen and cools slightly.
- Non-conductive, no residue; ideal for panels and computers; do not hold the horn.
# Dry chemical powder extinguisher
- Pull pin, aim, squeeze and sweep; powder breaks the chain reaction and covers the fuel.
- Non-conductive; works on electrical, B and C fires; residue can harm electronics.
= Switch off first, then use CO<sub>2</sub> or dry powder.
@ Switch OFF, then CO<sub>2</sub> or Powder.`},

'hazop':{L:`
HAZOP (Hazard and Operability Study) is a team method that finds hazards and operating problems in a process plant by studying deviations from the design intent using guide words.
# Significance
- Finds hazards (fire, explosion, toxic release) and operability problems early, when changes are cheap.
- Multi-skilled team brainstorming gives thorough coverage; well documented.
- Needed for process safety and before plant changes.
# Guide words
- No, More, Less, As well as, Part of, Reverse, Other than.
- Deviation = guide word + parameter (flow, pressure, temperature, level).
# Four phases
- <b>Definition:</b> scope, objectives, team (leader, scribe, engineers, operators).
- <b>Preparation:</b> collect P&amp;IDs, procedures, MSDS; divide plant into nodes.
- <b>Examination:</b> for each node apply guide words; find causes, consequences, safeguards and actions.
- <b>Documentation and follow-up:</b> worksheets, report, assign and track actions.
Ex: "No flow" of cooling water → runaway reaction → add low-flow trip and standby pump.
= HAZOP asks "what if it goes wrong?" for every part of the plant, systematically.
@ Guide words: No, More, Less, As well as, Part of, Reverse, Other than.`},

'chem-hazards':{L:`
Hazardous chemicals are grouped by the type of harm they cause.
# Physical hazards
- <b>Flammable:</b> petrol, acetone, LPG; low flash point.
- <b>Explosive:</b> TNT, ammonium nitrate.
- <b>Oxidising:</b> hydrogen peroxide, nitric acid; feed fires.
- <b>Reactive / pyrophoric:</b> sodium with water, white phosphorus in air; compressed gases.
# Health hazards
- <b>Toxic:</b> H<sub>2</sub>S, CO, chlorine, MIC (Bhopal).
- <b>Corrosive:</b> sulphuric acid, caustic soda.
- <b>Irritant and sensitiser:</b> ammonia, isocyanates.
- <b>Carcinogen, mutagen, reproductive toxin:</b> benzene, asbestos, lead.
- <b>Asphyxiant:</b> N<sub>2</sub>, CO<sub>2</sub> (displace oxygen); CO, HCN (block oxygen use).
# Environmental hazards
- Toxic to water life; persistent and building up (pesticides, heavy metals).
# Rating properties
- Flash point, flammability limits, exposure limits (TLV), LD50, reactivity, pH; NFPA diamond.
= Chemicals can burn, blow up, poison, corrode or pollute.
@ Physical (Fire/Boom), Health (Poison/Burn), Environment (Pollute).`},

'hierarchy':{L:`
The hierarchy of control lists ways to control chemical hazards from most to least effective.
# 1. Elimination
- Remove the hazardous chemical or process completely.
# 2. Substitution
- Use a less hazardous chemical. Ex: water-based paint instead of solvent paint; toluene for benzene.
# 3. Engineering controls
- Enclosure, local exhaust ventilation, fume hoods, closed transfer systems.
# 4. Administrative controls
- Safe procedures, permits, training, labels and MSDS, job rotation, exposure monitoring.
# 5. PPE
- Respirators, gloves, goggles, chemical suits: the last line of defence.
= Higher controls protect everyone without relying on worker behaviour; PPE is the last resort.
@ Every Safe Engineer Avoids Problems: E-S-E-A-P.`,
S:`
The hierarchy of control ranks ways to control chemical hazards, best first.
- <b>Elimination</b> (remove it) → <b>Substitution</b> (use a safer chemical).
- <b>Engineering controls</b> (enclosure, exhaust ventilation) → <b>Administrative controls</b> (procedures, training, rotation).
- <b>PPE</b> (respirators, gloves, goggles) as the last resort.
@ E-S-E-A-P: Eliminate, Substitute, Engineer, Administer, Protect.`},

'pha':{L:`
Preliminary Hazard Analysis (PHA) is an early-stage study that lists the major hazards of a plant or project, ranks them and suggests controls before detailed design.
# Need in hazardous industry
- Finds hazards early, when design changes are cheap.
- Guides site, layout and process choice.
- Ranks hazards so effort goes to the worst ones; basis for HAZOP and fault trees.
# Characteristics
- Done at the concept or design stage.
- Broad, qualitative or semi-quantitative; uses checklists and experience.
- Covers materials, energy sources, equipment, operations and surroundings.
- Ranks by severity and probability in a risk matrix; updated as design grows.
# How to conduct a PHA
- Define the system and collect data; form a team.
- Identify hazards; find their causes and effects.
- Assign severity and probability; rank the risk.
- Recommend preventive measures; record in a PHA worksheet and follow up.
Ex: toxic gas release from a storage tank (valve failure) → gas detectors, scrubber, double valves, emergency plan.
= PHA is the first look at plant hazards.
@ PHA = First Look at hazards.`,
S:`
<b>Preliminary Hazard Analysis (PHA)</b> is an early, broad hazard study done at the concept or design stage of a plant.
- It lists major hazards (materials, energy, equipment, operations) with their causes and effects.
- It ranks them by severity and probability.
- It recommends controls early and is the base for detailed studies like HAZOP.
@ PHA = First Look at hazards.`},

'criticality':{L:`
Criticality analysis (FMECA) extends Failure Mode and Effects Analysis by ranking each failure by how serious and how likely it is.
# Procedure
- Break the system into components and note their functions.
- List each failure mode (leak, rupture, stuck open/closed).
- Find causes and effects on the plant.
- Give a severity class: I catastrophic, II critical, III marginal, IV minor.
- Estimate how often it happens.
- Work out criticality (or RPN = Severity × Occurrence × Detection).
- Plot on a criticality matrix and rank.
# How it helps
- Shows the most dangerous failures and single-point failures.
- Focuses design changes, backups, inspection and maintenance on them.
- Gives a documented basis for safety decisions.
Ex: reactor cooling pump "fails to run" → runaway reaction → high criticality → standby pump and low-flow trip.
= Rank failures by severity × probability and fix the top ones first.
@ Criticality = Severity × Probability.`,
S:`
<b>Criticality analysis (FMECA)</b> ranks each possible component failure by its criticality.
- List failure modes, their causes and effects.
- Score <b>severity × probability</b> (or RPN = S × O × D) and plot on a criticality matrix.
- The most critical failures get design changes, backups or extra maintenance first. Ex: reactor cooling pump failure → add standby pump.
@ Criticality = Severity × Probability.`},

'dow':{L:`
The Dow Fire and Explosion Index (F&amp;EI) is a step-by-step rating of the fire and explosion risk of process units.
# Material Factor (MF)
- 1 to 40; based on the flammability and reactivity of the most hazardous material.
# General process hazards factor (F<sub>1</sub>)
- Penalties for reactions, material handling, enclosed units, poor access, drainage.
# Special process hazards factor (F<sub>2</sub>)
- Penalties for toxic materials, vacuum, near-flammable operation, dust, pressure, low temperature, quantity, leaks, fired heaters.
# Calculation
- Unit hazard factor F<sub>3</sub> = F<sub>1</sub> × F<sub>2</sub>.
- <b>F&amp;EI = F<sub>3</sub> × MF</b>.
# Ranking
- 1–60 light, 61–96 moderate, 97–127 intermediate, 128–158 heavy, 159+ severe.
# Further results
- Radius of exposure; damage factor; maximum probable property damage and days of outage.
# Uses
- Ranks units; guides layout, spacing and fire protection; supports insurance and management decisions.
= F&amp;EI = Material Factor × hazard penalties, giving a ranked risk.
@ F&amp;EI = Material Factor × Hazard Factors.`},

'risk-tools':{L:`
Risk assessment tools find hazards, estimate likelihood and effect, and judge risk.
# Qualitative tools
- <b>Checklist:</b> compare against standards; simple.
- <b>What-if analysis:</b> team asks "what if…?" questions.
- <b>PHA:</b> early listing and ranking of hazards.
- <b>Job Safety Analysis:</b> hazards at each step of a job.
- <b>HAZOP:</b> guide words on process parameters.
# Semi-quantitative tools
- <b>Risk matrix:</b> likelihood × severity.
- <b>FMEA / FMECA:</b> failure modes and criticality; RPN.
- <b>Dow and Mond indices; LOPA</b> (layers of protection).
# Quantitative tools
- <b>Fault Tree Analysis:</b> top-down; AND/OR gates find causes of a top event and its probability.
- <b>Event Tree Analysis:</b> bottom-up; outcomes after an initiating event.
- <b>Bow-tie:</b> causes and consequences around one event with barriers.
- <b>QRA:</b> consequence models + frequencies give individual and societal risk.
= Choose the tool by project stage, complexity and data.
@ Qualitative, Semi, Quantitative.`},

'hira':{L:`
Hazard Identification and Risk Assessment (HIRA) finds hazards in all activities and decides the controls needed.
# Classify activities
- List routine and non-routine jobs, areas, equipment and people involved.
# Identify hazards
- Physical, chemical, biological, ergonomic, electrical, mechanical, fire; use inspections, checklists, JSA, past records, MSDS.
# Who may be harmed and how
- Workers, contractors, visitors; possible consequences.
# Evaluate existing controls
- What is already in place.
# Assess risk
- Risk = Likelihood × Severity using a risk matrix; decide if tolerable.
# Plan more controls
- Use the hierarchy: eliminate, substitute, engineer, administer, PPE; assign people and dates.
# Record and review
- HIRA register; share with workers; review after incidents or changes.
= Find, rate, control, record and review.
@ Find, Rate, Control, Record, Review.`},

'inventory':{S:`
<b>Inventory analysis</b> lists every hazardous material in a plant with its quantity, location, storage conditions and hazards (from MSDS).
- Quantities are compared with <b>threshold limits</b> in the hazardous chemical rules to see if the site is a major accident hazard unit.
- Helps rank hazards, reduce stock (inherent safety), plan layout and emergencies, and guide HAZOP and Dow index studies.
@ How much, Where, How dangerous.`},

'electric-hazards':{S:`
Electrical hazards cause shock, burns, arc flash, fire and explosion.
- <b>Contact with live parts:</b> exposed conductors, damaged insulation, working without isolation, cranes touching overhead lines.
- <b>Equipment faults:</b> poor earthing, overloaded or loose wiring, faulty tools, no fuses/MCB/ELCB.
- <b>Environment and people:</b> wet places, flammable atmospheres, static, lightning, untrained workers.
@ Contact, Faults, Environment.`},

'toxic-release':{S:`
Toxic gases can be released by leaks, runaway reactions, fires and explosions.
- <b>Causes:</b> loss of containment (leaks, ruptures), runaway reactions, burning chemicals and plastics (CO, HCN, HCl, phosgene).
- <b>Effects:</b> a toxic cloud spreads (dense gases stay low) and harms workers and public. Ex: Bhopal 1984 methyl isocyanate.
- <b>Control:</b> small inventories, interlocks, gas detectors, scrubbers, emergency shutdown, on-site and off-site emergency plans.
@ Leak, React, Burn → Toxic cloud.`},

});
