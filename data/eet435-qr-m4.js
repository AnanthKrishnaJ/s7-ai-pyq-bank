/* EET435 quick-revision answers, Module 4 (biomass). Format as in data/cst423-qr.js. */
(R=>{SUBJ.EET435.QB.forEach(c=>{const r=R[c.id];if(!r)return;if(r.L)c.qr=r.L;if(r.S)c.qr3=r.S})})({

'biogas-factors':{L:`
Biogas is made by bacteria, so anything that affects bacterial activity affects gas output.
# Temperature
- Best at 30–40 °C (mesophilic); almost stops below 15 °C; digesters are buried or insulated.
# pH
- Best 6.8–7.5; overfeeding makes the slurry acidic and kills methane bacteria.
# C/N ratio and solids
- C/N ratio 25–30 : 1 (cow dung ≈ 25 : 1).
- 7–10 % solids: dung and water mixed 1 : 1.
# Seeding
- Adding digested slurry (full of bacteria) starts a new plant quickly and keeps it stable.
# Retention time
- Slurry stays 30–60 days; too short washes bacteria out, too long needs a big digester.
# Feeding rate
- Regular, equal daily feeding; overfeeding lowers pH, underfeeding lowers gas.
# Others
- Mixing to break scum; no toxic substances (detergents, antibiotics); small feed particles.
= Warm, neutral, well-fed, well-seeded slurry gives the most biogas.
@ T-P-C-S-R-F: Temperature, pH, C/N, Seeding, Retention, Feeding.`,
S:`
Seeding, retention time and feeding rate decide how well bacteria make biogas.
- <b>Seeding:</b> adding digested slurry full of methane bacteria starts gas production quickly and keeps it stable.
- <b>Retention time:</b> slurry must stay 30–60 days; too short washes out bacteria and lowers yield.
- <b>Feeding rate:</b> regular, correct daily feeding; overloading makes the slurry acidic and stops methane.
@ Seed it, Keep it, Feed it.`},

'ethanol-blend':{S:`
Ethanol blending means mixing ethanol (10–20 %) with petrol.
- <b>Higher octane number</b> (~108): less knocking, better engine performance.
- <b>Cleaner burning:</b> ethanol has 35 % oxygen, so less CO and unburnt hydrocarbons; renewable, lower net CO<sub>2</sub>.
- <b>Less oil import</b> and more income for farmers (E10/E20 programme).
@ Better Octane, Cleaner burn, Less import.`},

'gasifier':{L:`
A gasifier turns solid biomass into a combustible gas (producer gas) by burning it with limited air. In the updraft type, air enters at the bottom and gas leaves at the top.
# Construction
- Vertical lined steel shell; fuel hopper on top; grate at the bottom.
- Air inlet below the grate; gas outlet at the top; ash pit below.
- Fuel moves down while air and gas move up (counter-current).
# Zones and process (bottom to top)
- <b>Combustion (1000–1200 °C):</b> C + O<sub>2</sub> → CO<sub>2</sub>; gives heat.
- <b>Reduction (800–1000 °C):</b> C + CO<sub>2</sub> → 2CO; C + H<sub>2</sub>O → CO + H<sub>2</sub>.
- <b>Pyrolysis (200–600 °C):</b> biomass breaks into char, tar and gases.
- <b>Drying (100–200 °C):</b> moisture removed.
# Products
- Producer gas: CO ~20 %, H<sub>2</sub> ~18 %, CH<sub>4</sub> 1–5 %, CO<sub>2</sub>, N<sub>2</sub> ~50 %; 4–6 MJ/m³.
- By-products: tar, char, ash.
# Features
- High efficiency, takes wet fuel; but gas is tarry, so used for direct heating.
= Updraft gasifier: limited air turns biomass into producer gas through four zones.
@ Bottom to top: Combustion, Reduction, Pyrolysis, Drying.`},

'gasifier-downdraft':{L:`
In a downdraft gasifier, fuel and gas both move down, and tar is burnt in the hot throat, giving clean gas.
# Construction
- Vertical reactor with a hopper on top and a narrow throat in the middle.
- Air nozzles (tuyeres) just above the throat.
- Grate below; gas outlet below the grate; gas cleaning train (cyclone, cooler, filter).
# Working
- Biomass dries and pyrolyses as it moves down.
- Tar vapours pass through the hot combustion zone at the throat and are cracked.
- In the reduction zone: C + CO<sub>2</sub> → 2CO, C + H<sub>2</sub>O → CO + H<sub>2</sub>.
- Clean producer gas leaves from the bottom.
# Features
- Low tar: suitable for IC engines (10 kW–1 MW).
- Needs dry, sized fuel; lower thermal efficiency.
= Downdraft gives clean gas because tar is burnt on the way down.
@ Downdraft = Down goes everything, Dirt (tar) burnt.`},

'gasif-stages':{L:`
Biomass gasification turns solid biomass into producer gas by partial oxidation at 800–1200 °C.
# Product
- Producer gas: CO, H<sub>2</sub>, CH<sub>4</sub> with CO<sub>2</sub> and N<sub>2</sub>; 4–6 MJ/m³; used in engines and furnaces.
# Drying (100–200 °C)
- Moisture evaporates.
# Pyrolysis (200–600 °C)
- Biomass breaks down without oxygen into char, tar and volatile gases.
# Combustion (1000–1200 °C)
- Part of the char burns: C + O<sub>2</sub> → CO<sub>2</sub>; gives heat.
# Reduction (800–1000 °C)
- C + CO<sub>2</sub> → 2CO and C + H<sub>2</sub>O → CO + H<sub>2</sub> make the fuel gas.
= Dry, break down, burn a little, then reduce to fuel gas.
@ D-P-C-R: Dry, Pyrolyse, Combust, Reduce.`,
S:`
Gasification turns biomass into producer gas (CO + H<sub>2</sub>) using limited air.
- <b>Drying:</b> moisture removed. <b>Pyrolysis:</b> biomass breaks into char, tar, gas.
- <b>Combustion:</b> some char burns to give heat. <b>Reduction:</b> C + CO<sub>2</sub> → 2CO, C + H<sub>2</sub>O → CO + H<sub>2</sub>.
@ D-P-C-R: Dry, Pyrolyse, Combust, Reduce.`},

'gasifier-types':{S:`
Gasifiers are named by the direction of air and gas flow.
- <b>Updraft:</b> air enters at the bottom, gas leaves at the top; high tar, high efficiency; for heating.
- <b>Downdraft:</b> air enters at the throat in the middle, gas leaves below; low tar; for engines.
- <b>Cross-draft:</b> air enters from one side, gas leaves from the other side; quick response; small units.
@ Up = tarry, Down = clean, Cross = quick.`},

'producer-gas':{S:`
Producer gas is a low-energy fuel gas (4–6 MJ/m³) made by partly burning biomass with limited air.
- <b>Composition:</b> CO ~20 %, H<sub>2</sub> ~18 %, CH<sub>4</sub> 2–3 %, CO<sub>2</sub> ~10 %, N<sub>2</sub> ~50 %.
- <b>Production:</b> in a gasifier biomass is dried, pyrolysed, partly burnt (C + O<sub>2</sub> → CO<sub>2</sub>), then reduced over hot char (C + CO<sub>2</sub> → 2CO; C + H<sub>2</sub>O → CO + H<sub>2</sub>).
- Gas is cooled and cleaned before use in engines or burners.
@ Producer gas = CO + H<sub>2</sub> (+ N<sub>2</sub>).`},

'biogas-rural':{L:`
Biogas suits rural Indian farm families because raw material is free and the benefits are many.
# Free raw material
- Cattle dung, crop waste and kitchen waste are on every farm.
# Simple, low-cost technology
- KVIC and Deenbandhu plants built with local materials and labour.
# Clean cooking fuel
- Replaces firewood and dung cakes; no indoor smoke; saves women's time; less deforestation.
# Rich manure
- Digested slurry is better fertiliser than raw dung.
# Other benefits
- Better sanitation (toilet-linked), local energy, less methane release.
= Biogas turns farm waste into clean fuel and fertiliser.
@ Dung to Dinner gas to Farm manure.`},

'ethanol':{L:`
Ethanol is made from biomass by breaking it into sugar (hydrolysis) and turning the sugar into alcohol (fermentation).
# Feedstocks
- Sugar crops (sugarcane, molasses), starch crops (maize, cassava), cellulose (bagasse, straw).
# Pre-treatment
- Milling; steam, acid or alkali treatment to open the fibres.
# Hydrolysis (saccharification)
- Starch or cellulose broken into glucose by acid or enzymes.
- (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub> + nH<sub>2</sub>O → nC<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.
# Fermentation
- Yeast at 30–35 °C, pH 4–5, for 2–3 days.
- C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>; beer has 8–12 % ethanol.
# Distillation and dehydration
- Distillation gives 95 % ethanol; molecular sieves give 99.5 % for petrol blending.
# By-products
- CO<sub>2</sub>, stillage (biogas/fertiliser), lignin (boiler fuel).
= Biomass → sugar → ethanol → distil → fuel.
@ H-F-D: Hydrolyse, Ferment, Distil.`,
S:`
Ethanol is made from biomass in a few steps.
- Biomass → pre-treatment → <b>hydrolysis</b> (starch/cellulose → glucose).
- <b>Fermentation</b> by yeast: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>.
- <b>Distillation</b> to 95 %, dehydration to 99.5 % fuel ethanol.
@ H-F-D: Hydrolyse, Ferment, Distil.`},

'plastic':{L:`
Plastic waste in cities is handled by separating it and then recycling or recovering energy from it.
# Segregation
- Separate wet, dry and plastic waste at source; sort by plastic type.
# Reduce and reuse
- Bans on single-use plastic; extended producer responsibility.
# Recycling
- Wash, shred, melt and pelletise into new products.
# Energy recovery
- Non-recyclable plastic used as refuse-derived fuel in cement kilns.
- Pyrolysis to fuel oil; plastic-bitumen roads.
# Last option
- Landfill only as a last resort; open burning not allowed (dioxins).
= Separate, recycle, and burn only what cannot be reused.
@ Separate, Recycle, Recover energy.`},

'msw':{L:`
Municipal solid waste (MSW) can be turned into electricity using burning or digestion routes.
# Collection and segregation
- Collect waste; remove metals, glass, stones; shred and dry.
# Incineration
- Combustible waste burnt at 850–1100 °C; heat makes steam for a turbine.
- Reduces waste volume by about 90 %.
# Refuse-derived fuel (RDF)
- Dry part shredded and pelletised as fuel for boilers or cement kilns.
# Anaerobic digestion
- Wet organic waste digested to biogas (55–65 % CH<sub>4</sub>) for gas engines; slurry used as compost.
# Landfill gas and gasification
- Methane collected from landfills; waste gasified to syngas.
# Pollution control
- Electrostatic precipitators, filters, scrubbers; ash used in bricks.
Ex: Okhla and Ghazipur waste-to-energy plants, Delhi.
= Sort waste, then burn the dry part and digest the wet part to make power.
@ Sort, Burn or Digest, Generate.`},

'kvic':{L:`
The KVIC model is a floating-drum biogas plant where a steel drum floats on the slurry and stores the gas.
# Construction
- Underground brick digester (well) with a central partition wall.
- Steel gas holder (drum) floating on the slurry, guided by a central pipe.
- Inlet tank and pipe for dung–water slurry; outlet pipe and tank for spent slurry.
- Gas outlet pipe with valve on top of the drum.
# Working
- Slurry (dung : water = 1 : 1) is fed daily; it pushes digested slurry out.
- Bacteria digest the organic matter in 30–50 days.
- Biogas (55–65 % CH<sub>4</sub>) collects under the drum, which rises.
- When gas is used, the drum sinks; drum height shows gas stored.
# Merits and demerits
- Merits: constant gas pressure, gas quantity visible, good yield.
- Demerits: costly steel drum that corrodes; heat loss in winter.
= KVIC stores biogas in a floating steel drum.
@ KVIC drum Floats up as gas grows.`},

'biogas-plants':{L:`
Biogas plants are mainly of two types: floating-drum (KVIC) and fixed-dome (Janata/Deenbandhu).
# Types
- Floating drum (KVIC), fixed dome (Janata, Deenbandhu), bag/balloon type; batch or continuous.
# Floating-drum plant
- Brick digester with partition wall; steel drum floats on slurry and stores gas.
- Drum rises as gas forms; gives constant pressure.
- Drum is costly and corrodes.
# Fixed-dome plant
- Digester and dome built together of brick and cement; no moving parts.
- Gas collects under the dome and pushes slurry into the outlet chamber.
- When gas is used, slurry flows back; pressure varies.
# Comparison
- Pressure: constant vs variable. Cost: higher vs 30–40 % lower.
- Life: drum corrodes vs 20+ years. Gas level: visible vs not visible.
= Floating drum moves the holder; fixed dome moves the slurry.
@ Floating = drum Moves; Fixed = slurry Moves.`},

'fixed-dome':{L:`
A fixed-dome biogas plant has a masonry digester with a dome roof that stores the gas; it has no moving parts.
# Construction
- Underground digester with a dome-shaped roof, built as one unit of brick and cement.
- Inlet pipe from a mixing tank to the bottom of the digester.
- Outlet (displacement) chamber at a higher level.
- Gas pipe with valve at the top of the dome.
# Working
- Dung and water (1 : 1) fed daily through the inlet.
- Bacteria make biogas, which collects under the dome.
- Gas pressure pushes slurry into the outlet chamber.
- When the valve opens, gas flows out and slurry returns.
- Spent slurry overflows to a compost pit.
# Merits and demerits
- Merits: low cost, no corrosion, long life, stable temperature underground.
- Demerits: varying gas pressure; cracks cause leaks; needs skilled masons.
= Gas pushes slurry out; using gas lets it come back.
@ Gas pushes slurry OUT, use gas, slurry comes BACK.`},

'kvic-janata':{L:`
KVIC and Janata are the two main Indian biogas plant designs.
# Gas holder
- KVIC: separate steel drum that floats.
- Janata: fixed dome built into the digester.
# Digester
- KVIC: deep cylindrical well with partition wall.
- Janata: shallow cylinder with dome roof; no partition.
# Pressure and moving parts
- KVIC: constant pressure; drum moves.
- Janata: varying pressure; no moving parts.
# Cost and life
- KVIC: higher cost; drum corrodes, ~15 years.
- Janata: 30–40 % cheaper; 20+ years.
# Skill and gas indication
- KVIC: simple masonry + fabricated drum; gas level visible.
- Janata: skilled masonry for a gas-tight dome; gas level not visible.
= KVIC costs more but gives steady pressure; Janata is cheaper but pressure varies.
@ KVIC = Costly, Constant; Janata = Cheap, Changing.`},

'biogas-select':{L:`
The right biogas plant model depends on local needs and conditions.
# Feedstock available
- Amount of dung per day decides plant size.
# Gas demand
- How much gas is needed and whether constant pressure matters.
# Cost
- Fixed dome is cheaper; floating drum costs more.
# Climate and soil
- Cold areas need deeper or insulated plants; water table and rock affect digging.
# Skills and materials
- Skilled masons and steel availability; maintenance ability.
= Choose by feed, need, money, weather and skill.
@ Feed, Need, Money, Weather, Skill.`},

'biogas-sources':{S:`
Biogas can be made from any wet organic waste.
- <b>Animal waste:</b> cattle dung, poultry droppings, pig manure.
- <b>Agricultural waste:</b> crop residues, straw, water hyacinth, algae.
- <b>Domestic and urban waste:</b> kitchen waste, human excreta, sewage sludge, market waste; also dairy and distillery effluents.
@ Animals, Agriculture, Homes.`},

'biomass-resources':{S:`
Biomass for fuel comes from plants, animals and waste.
- <b>Wood and forest residues</b> and energy plantations; <b>agricultural residues</b> like rice husk, bagasse, straw.
- <b>Energy crops:</b> sugarcane, maize (ethanol); jatropha, pongamia (biodiesel).
- <b>Animal and human waste, aquatic biomass</b> (algae) and <b>urban organic waste</b>.
@ Wood, Waste, Crops, Animals, Water plants.`},

'anaerobic':{L:`
Biogas is produced from wet biomass by anaerobic digestion: bacteria break down organic matter without oxygen at 30–40 °C.
# Hydrolysis
- Enzymes break fats, proteins and carbohydrates into simple sugars, amino acids and fatty acids.
# Acidogenesis
- Acid-forming bacteria turn these into volatile fatty acids, alcohols, H<sub>2</sub> and CO<sub>2</sub>.
# Acetogenesis
- Higher acids converted to acetic acid, H<sub>2</sub> and CO<sub>2</sub>.
# Methanogenesis
- Methane bacteria: CH<sub>3</sub>COOH → CH<sub>4</sub> + CO<sub>2</sub>; CO<sub>2</sub> + 4H<sub>2</sub> → CH<sub>4</sub> + 2H<sub>2</sub>O.
# Product
- Biogas: 55–65 % CH<sub>4</sub>, 35–45 % CO<sub>2</sub>, traces of H<sub>2</sub>S; digested slurry as manure.
= Big molecules → small → acids → methane.
@ H-A-A-M: Hydrolysis, Acid, Acetic, Methane.`,
S:`
Biogas is made from wet biomass by <b>anaerobic digestion</b>: bacteria break it down without oxygen.
- <b>Hydrolysis:</b> complex matter → simple sugars, amino acids, fatty acids.
- <b>Acid formation:</b> → volatile acids, acetic acid, H<sub>2</sub>, CO<sub>2</sub>.
- <b>Methane formation:</b> CH<sub>3</sub>COOH → CH<sub>4</sub> + CO<sub>2</sub>; CO<sub>2</sub> + 4H<sub>2</sub> → CH<sub>4</sub> + 2H<sub>2</sub>O.
@ H-A-M: Hydrolysis, Acid, Methane.`},

'bio-conv':{L:`
Biomass is converted into useful fuel by four main routes.
# Direct combustion
- Burnt in stoves, furnaces or boilers for heat or steam power.
Ex: bagasse cogeneration in sugar mills.
# Thermochemical conversion
- <b>Gasification:</b> partial burning → producer gas.
- <b>Pyrolysis:</b> heating without oxygen → charcoal, bio-oil, gas.
- <b>Carbonisation and liquefaction:</b> charcoal and bio-crude.
# Biochemical conversion
- <b>Anaerobic digestion:</b> wet waste → biogas + manure.
- <b>Fermentation:</b> sugars → ethanol.
# Physico-chemical conversion
- <b>Transesterification:</b> vegetable oil + methanol → biodiesel.
- <b>Densification:</b> loose residue → briquettes and pellets.
# Choosing a route
- Dry woody biomass → combustion or gasification; wet biomass → digestion; sugar/starch → fermentation; oils → biodiesel.
= Biomass can be burnt, heated, digested or chemically changed into fuel.
@ Burn, Heat-split, Bugs, Chemistry.`},

});
