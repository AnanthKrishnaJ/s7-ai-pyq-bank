/* MCN401 quick-revision answers, Module 2 (PPE, housekeeping, permits, performance). Format as in data/cst423-qr.js. */
(R=>{SUBJ.MCN401.QB.forEach(c=>{const r=R[c.id];if(!r)return;if(r.L)c.qr=r.L;if(r.S)c.qr3=r.S})})({

'permit-obj':{L:`
A work permit (permit-to-work, PTW) is a written approval for specific people to do non-routine hazardous work at a set place and time, after precautions are taken.
# Identify hazards
- Hazards of the job and the area are found before work starts.
# Ensure precautions
- Isolation (lock-out/tag-out), gas testing, purging, ventilation, PPE, fire watch.
# Authorise and control
- Only trained, authorised people issue and receive permits.
# Communicate
- Operations, maintenance and contractors know what work is going on, including at shift change.
# Limit time and scope
- Valid only for the stated job and period.
# Safe hand-back and records
- Plant returned only after work is done and checked; permit kept as a record.
= A permit makes sure risky work is planned, protected, approved and recorded.
@ Permit = Plan, Protect, Permit, Proof.`,
S:`
The work permit system controls risky, non-routine jobs.
- <b>Hazard control:</b> hazards found and precautions (isolation, gas test, PPE) taken before work starts.
- <b>Authorisation and communication:</b> only competent people do the job; everyone is informed; time and scope are fixed.
- <b>Safe completion and records:</b> plant handed back safely; permit is a record for audits.
@ Plan, Protect, Permit, Proof.`},

'permit-types':{L:`
A permit-to-work is a written system to control hazardous non-routine work. Different jobs need different permits.
# Hot work permit
- For work that makes heat, sparks or flame: welding, gas cutting, grinding.
- Precautions: gas test (LEL &lt; 1 %), remove combustibles within 15 m, isolate lines, fire watch and extinguisher; valid for one shift.
# Cold work permit
- For hazardous work without heat or sparks: opening flanges, valve repair, painting, cleaning.
- Precautions: depressurise, drain and isolate; check toxic gases; PPE; barricade.
# Confined space entry permit
- For tanks, vessels, sewers: isolation, purging, ventilation, O<sub>2</sub> and gas tests, attendant, rescue plan.
# Other permits
- Electrical isolation, work at height, excavation, crane lifting.
# Procedure
- Apply → assess hazards → isolate and test → issue and display → work and check → close permit.
= Hot work = fire risk; cold work = chemical and pressure risk; both need written approval.
@ Hot = Fire risk; Cold = No fire but chemicals and pressure.`,
S:`
A <b>permit to work (PTW)</b> is a written approval to do a specific hazardous job after hazards are checked and precautions taken.
- <b>Hot work permit:</b> for welding, cutting, grinding; main risk fire/explosion; gas test, remove combustibles, fire watch.
- <b>Cold work permit:</b> for valve/flange repair, cleaning, painting; risk of toxic release and pressure; isolate, depressurise, drain.
- Cold permits matter because routine-looking maintenance can release toxic or pressurised material.
@ Hot = Fire risk; Cold = Chemicals and pressure.`},

'hot-work':{L:`
Hot work (welding, cutting, grinding) can start fires and explosions, so it needs a hot work permit with strict measures.
# Hazards
- Fire from sparks and slag reaching combustibles up to 15 m away.
- Explosion of flammable vapours in tanks and pipes.
- Burns and arc radiation (eye flash).
- Toxic fumes and gases; electric shock; oxygen problems in confined spaces.
# Safety measures in the permit
- Gas test: flammables below 1 % LEL, repeated during work.
- Remove or cover combustibles within 11–15 m; cover drains.
- Isolate, drain, purge and blind equipment.
- Trained fire watcher with extinguisher during and 30 min after work.
- Ventilation and fume extraction; oxygen check.
- PPE: welding helmet, leather gloves, apron, safety shoes.
- Inspect equipment, hoses, flashback arrestors; earthing.
- Permit valid for one shift; signed, displayed and closed after inspection.
= Test the gas, clear the area, and watch for fire.
@ Test gas, Clear area, Watch fire.`},

'rates':{S:`
These rates measure and compare safety performance.
- <b>Frequency rate</b> = lost-time injuries × 10<sup>6</sup> / man-hours worked (how often).
- <b>Severity rate</b> = man-days lost × 10<sup>6</sup> / man-hours worked (how serious). <b>Incidence rate</b> = injuries × 1000 / average workers.
- <b>Activity rate</b> = safety activities × 10<sup>5</sup> / (employees × hours). They let firms of different sizes be compared and trends tracked.
@ FR = how Often, SR = how Serious, IR = per 1000 workers.`},

'perf-monitor':{L:`
Safety performance is monitored with reactive (after accidents) and proactive (before accidents) measures.
# Reactive measures (lagging)
- Accident statistics: frequency rate, severity rate, incidence rate.
- Investigation of accidents, near misses and dangerous occurrences; cost records.
# Proactive measures (leading)
- Inspections, safety audits, safety sampling, surveys.
- Training hours, meetings, permit and PPE compliance checks; health checks.
# Measurement indicators
- FR = injuries × 10<sup>6</sup> / man-hours; SR = days lost × 10<sup>6</sup> / man-hours; IR = injuries × 1000 / workers.
# Comparing two industries
- Use rates, not raw numbers, because size and hours differ.
- Compare FR, SR, IR and leading indicators; use the Safe-T-score for significance.
Ex: Firm A 6 injuries / 1.2 million hours (FR 5) is safer than Firm B 4 injuries / 0.5 million hours (FR 8).
= Reactive looks back, proactive looks ahead; compare with rates.
@ Reactive looks Back; Proactive looks Ahead.`,
S:`
Safety performance is monitored in two ways.
- <b>Reactive (lagging):</b> accident statistics like frequency, severity and incidence rates; accident investigations.
- <b>Proactive (leading):</b> inspections, audits, safety sampling, training and compliance checks.
- Results are compared with targets, past years and other firms.
@ Reactive looks Back; Proactive looks Ahead.`},

'hk-adv':{S:`
Good housekeeping keeps the workplace clean and orderly.
- <b>Fewer accidents:</b> no slips, trips, falls; clear gangways; less fire risk.
- <b>More productivity and quality:</b> less time searching; smooth material flow.
- <b>Better use of space,</b> easier maintenance, better morale and image.
@ Clean = Safe + Fast.`},

'5s':{L:`
Housekeeping means keeping the workplace clean and orderly; 5S is a Japanese method to achieve it.
# Benefits of good housekeeping
- Fewer slips, trips, falls and fires.
- Less time searching; better productivity and quality.
- Better space use, easy inspection, healthy workplace, good morale.
# Seiri (Sort)
- Remove unnecessary items (red-tag them).
# Seiton (Set in order)
- A place for everything: labelled shelves, shadow boards, floor markings.
# Seiso (Shine)
- Clean regularly; cleaning also finds leaks and loose parts.
# Seiketsu (Standardise)
- Make rules, schedules and checklists so the first 3 S are kept.
# Shitsuke (Sustain)
- Make 5S a habit through training, audits and recognition.
= 5S keeps the workplace safe, clean and productive; some add Safety as the 6th S.
@ 5S = Sort, Set, Shine, Standardise, Sustain.`},

'hk-roles':{L:`
Good housekeeping needs management, employees and a housekeeping head to play their part.
# Management
- Set housekeeping standards (5S); provide racks, bins, cleaning tools and waste disposal.
- Assign areas; schedule inspections; reward good work.
# Employees
- Keep their own area clean; return tools; use bins.
- Keep aisles and exits clear; report spills and leaks.
# Housekeeping head (key responsibilities)
- Prepare plans, standards and checklists; allot duties and schedules.
- Keep exits, stairs and fire equipment clear; arrange storage and stacking.
- Arrange waste collection and disposal; clean spills quickly.
- Maintain lighting, ventilation and toilets; inspect and record.
- Train staff in 5S and safe use of cleaning chemicals; coordinate with other departments.
= Management provides, employees practise, the head plans and checks.
@ Management Provides, Employees Practise, Head Plans.`},

'confined':{L:`
A confined space is an enclosed area with limited entry and exit where dangerous air can build up: tanks, vessels, sewers, pits, silos.
# Hazards
- Too little oxygen (&lt; 19.5 %) or too much (&gt; 23.5 %).
- Toxic gases (H<sub>2</sub>S, CO, solvents); flammable vapours or dust.
- Engulfment, drowning, moving parts, heat, poor exit.
# Precautions before and during entry
- Issue a confined space entry permit.
- Isolate all pipes (blinds) and lock out machines and power.
- Empty, clean and purge; ventilate continuously.
- Test the air: O<sub>2</sub> 19.5–23.5 %, flammables &lt; 10 % LEL, toxics below limits.
- PPE: harness with lifeline, breathing apparatus if needed, 24 V flameproof lamps.
- Attendant outside at all times; rescue equipment and plan ready.
# Key elements of the permit
- Location and job, hazards, isolation details, gas test results.
- PPE, ventilation, communication; names of entrants, attendant, supervisor; rescue plan; signatures.
= Isolate, purge, ventilate, test, permit, guard and be ready to rescue.
@ I-P-V-T-P-A-R: Isolate, Purge, Ventilate, Test, Permit, Attendant, Rescue.`},

'confined-erp':{S:`
An emergency response plan for confined spaces makes rescue fast and safe.
- <b>Trained rescue team</b> and an attendant who never enters alone; alarm and communication.
- <b>Rescue equipment ready:</b> tripod and winch, harness and lifeline, SCBA, gas detector, first aid.
- <b>Procedures and drills:</b> non-entry rescue first, call emergency services, regular practice.
@ Team, Tools, Talk, Train.`},

'ppe':{L:`
Personal protective equipment (PPE) is worn to protect the worker from hazards; it is the last line of defence after other controls.
# Classification
- <b>Respiratory:</b> dust masks, cartridge respirators, SCBA, airline respirators.
- <b>Non-respiratory:</b> head, eye/face, ear, hand, foot, body and fall protection.
# Types and suitability
- <b>Safety helmet:</b> falling objects: construction, mines, cranes.
- <b>Goggles / spectacles:</b> flying particles, splashes: grinding, labs.
- <b>Face shield / welding helmet:</b> sparks, UV/IR: welding, foundry.
- <b>Ear plugs / muffs:</b> noise above 85–90 dB(A): press shops.
- <b>Respirators:</b> dust, fumes, gases, low O<sub>2</sub>: mines, painting, confined spaces.
- <b>Gloves:</b> cuts, heat, chemicals, electricity.
- <b>Safety shoes:</b> falling objects, nails, slips.
- <b>Harness:</b> work above 2 m. <b>Aprons, coveralls:</b> splashes, heat.
# Selection
- Match to hazard; BIS standard; comfort and fit; training and maintenance.
= Right PPE for the right hazard, from head to toe.
@ Head to Toe: Helmet, Goggles, Ear muffs, Mask, Gloves, Shoes, Harness.`,
S:`
PPE protects each part of the body from workplace hazards.
- <b>Head and face:</b> safety helmet, goggles, face shield, welding helmet; <b>ear:</b> plugs, muffs.
- <b>Respiratory:</b> dust mask, cartridge respirator, SCBA, airline respirator.
- <b>Hand, foot, body, fall:</b> gloves, safety shoes, gum boots, apron, coverall, safety harness.
@ Head to Toe.`},

'rpe':{L:`
Respiratory protective equipment (RPE) protects against breathing harmful dust, fumes, gases or air with too little oxygen.
# Classification
- <b>Air-purifying:</b> clean the surrounding air with filters.
- <b>Air-supplying:</b> give clean air from a separate source.
# Air-purifying types
- <b>Dust / particulate mask (N95):</b> traps dust and fumes; grinding, cement.
- <b>Cartridge respirator:</b> charcoal cartridges remove specific vapours; spray painting.
- <b>Canister gas mask:</b> higher concentrations of specific gases; escape.
- <b>Powered air-purifying respirator:</b> blower pushes filtered air into a hood.
# Air-supplying types
- <b>SCBA:</b> compressed air cylinder on the back; for toxic/low-O<sub>2</sub> air, confined spaces, fire fighting.
- <b>Airline respirator:</b> air through a hose from outside; long jobs in tanks.
- <b>Hose mask:</b> fresh air through a large hose.
# Selection
- Type and amount of contaminant, oxygen level, time, fit test; never use air-purifying types in low oxygen.
= Purify the air if it is only dirty; supply air if it is unsafe to breathe.
@ Purify the air or Supply the air.`,
S:`
<b>Respiratory protective equipment (RPE)</b> protects the worker from breathing harmful dust, fumes, gases or oxygen-poor air.
- <b>Types:</b> air-purifying (dust mask, cartridge respirator, gas mask) and air-supplying (SCBA, airline).
- <b>Example, SCBA:</b> air cylinder on the back supplies a full face mask for 30–60 min, independent of the surroundings; used in confined spaces and fire fighting.
@ Purify the air or Supply the air.`},

'eye-ppe':{L:`
Eye protection guards against flying particles, splashes and strong light.
# Safety goggles / spectacles
- Impact-resistant polycarbonate lenses; side shields or sealed frame with strap.
- Chemical goggles have indirect vents.
- Use: grinding, chipping, machining, labs (IS 5983).
# Welding helmet and face shield
- Helmet with dark filter lens (shade 9–14) and clear cover glass; auto-darkening type available.
- Protects eyes and face from UV/IR, sparks and spatter.
- Clear face shield protects the whole face from splashes; worn over goggles.
# Functions
- Prevent impact injuries, burns, arc eye and chemical injuries.
- Must fit well, give clear vision, and be cleaned and replaced when scratched.
= Goggles for particles and splashes; helmet for arc light and sparks.
@ Goggles for Particles; Helmet for Arc light.`,
S:`
Two common PPE for eye protection:
- <b>Safety goggles:</b> impact-resistant lenses sealed around the eyes with a strap; protect from flying particles, dust and chemical splashes.
- <b>Welding helmet / face shield:</b> dark filter lens (shade 9–14) protects eyes and face from UV/IR, sparks and spatter.
- Both must fit well and be kept clean.
@ Goggles for Particles; Helmet for Arc light.`},

'head-ppe':{S:`
Head protection guards against falling and striking objects.
- <b>Safety helmet (hard hat, IS 2925):</b> rigid HDPE/ABS shell with a suspension harness leaving a 25–30 mm gap that absorbs impact; chin strap; insulated types for electrical work.
- <b>Bump cap:</b> light cap for bumping into low objects (not for falling loads).
- Others: hair caps near rotating machines; firefighter helmets.
@ Shell + Suspension = Safe head.`},

'foot-ppe':{L:`
Foot and leg protection guards against falling objects, sharp objects, chemicals, heat and electricity.
# Safety shoes / boots with steel toe caps
- Protect toes from heavy falling objects; oil- and slip-resistant soles (IS 15298).
# Puncture-proof soles and metatarsal guards
- Steel or Kevlar plate stops nails; metatarsal guard protects the top of the foot.
# Rubber / PVC gum boots
- Waterproof and chemical-resistant; wet areas, concreting, sewers.
# Electrical and anti-static footwear
- Insulating soles against shock; conductive shoes in explosive areas.
# Heat-resistant boots, leggings and spats
- Quick-release foundry boots; leather or aluminised leggings for welders.
# Knee pads and anti-slip footwear
- For kneeling work and oily or icy floors.
= Choose footwear by hazard; inspect for wear and damage.
@ Toe cap, Sole plate, Rubber boot, Leggings.`},

'ppe-fields':{L:`
Many workplaces need personal protection because their hazards cannot be fully removed.
# Construction
- Helmets, harnesses, safety shoes: falling objects, falls, nails.
# Welding and foundries
- Welding helmets, leather gloves, aprons, leggings: UV light, sparks, molten metal.
# Chemical industries and labs
- Goggles, face shields, chemical gloves, respirators: splashes and toxic vapours.
# Mining and cement plants
- Helmets with lamps, dust masks, ear muffs: falling rock, dust, noise.
# Electrical work and healthcare
- Insulated gloves and shoes against shock; gloves and masks against infection.
= Every field gets PPE matched to its own hazard.
@ Build, Weld, Mix, Dig, Wire.`},

'ppe-comfort':{L:`
Workers use PPE regularly only when it is comfortable and they understand why it matters.
# Involve workers
- Let them try and choose models and sizes; fit-test respirators.
# Choose comfortable PPE
- Light, ventilated, breathable, suited to hot climate.
# Train and explain
- Explain the hazards and show correct use.
# Lead and support
- Managers and supervisors wear PPE too; give PPE free, clean and well maintained; allow breaks in heat.
= Comfortable, well-fitting, explained PPE gets worn.
@ Choose, Fit, Explain, Lead.`},

});
