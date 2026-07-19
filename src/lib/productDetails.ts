/**
 * Per-product enrichment content - analysis derived from the original
 * devinternational.in website copy and technical datasheets (PDFs).
 */

export type ProductDetail = {
  overview: string[];
  specs?: { label: string; value: string }[];
  pdfs?: { name: string; file: string }[];
  applications: string[]; // application slugs from applications.ts
  faqs?: { q: string; a: string }[];
};

export const productDetails: Record<string, ProductDetail> = {
  "oleo-derivatives": {
    overview: [
      "Oleo derivatives are the workhorses of modern personal care and industrial formulation, esters, emulsifiers, biosurfactants, and conditioning agents derived from natural fats and oils. Dev International supplies one of the widest oleo baskets in India, covering more than 60 specialty ingredients from a single point of contact.",
      "The range spans light emollient esters such as Isopropyl Myristate (IPM), Isopropyl Palmitate (IPP), and Caprylic Capric Triglyceride; self-emulsifying bases built on cetearyl alcohol systems; mild sulfosuccinate and betaine co-surfactants; and green biosurfactants including Sophorolipid, a fermentation-derived, fully biodegradable surfactant for clean-label formulations.",
      "Every ingredient ships with COA and TDS documentation. Cosmetic-grade, pharma-grade, and industrial-grade options are stocked at our Bhiwandi warehouse for fast pan-India dispatch.",
    ],
    specs: [
      { label: "Ingredient count", value: "60+ specialty ingredients" },
      { label: "Key grades", value: "Cosmetic · Pharma · Industrial" },
      { label: "Feedstock", value: "Plant-derived (palm, coconut, soya)" },
      { label: "Documentation", value: "COA · TDS · MSDS per lot" },
    ],
    pdfs: [
      { name: "Sophorolipid", file: "/pdfs/Sophorolipid.pdf" },
      { name: "Speciality Emulsifiers", file: "/pdfs/Speciality Emulsifiers.pdf" },
      { name: "Speciality Ingredients", file: "/pdfs/Speciality ingredients.pdf" },
      { name: "Secondary Ingredients", file: "/pdfs/Secondary ingredients.pdf" },
      { name: "Hair Colour Protection Molecule", file: "/pdfs/Hair Colour Protection Molecule.pdf" },
      { name: "Preservatives · Antimicrobials · Biocides", file: "/pdfs/Preservative - Antimicrobials - Biocides.pdf" },
      { name: "Mild Surfactants", file: "/pdfs/Mild Surfactants.pdf" },
    ],
    applications: ["cosmetic", "skin-care-products", "pharmaceutical", "home-care-cleaning", "ointment"],
    faqs: [
      {
        q: "Which oleo derivatives are suitable for natural or clean-label cosmetics?",
        a: "Sophorolipid biosurfactant, plant-derived emollient esters (IPM, IPP, cetyl palmitate), and our cetearyl alcohol emulsifier systems are all plant-based and suitable for clean-label positioning. COSMOS-approved source options are available on request.",
      },
      {
        q: "What is the minimum order quantity for specialty ingredients?",
        a: "MOQs vary by ingredient, typically 25 kg to 200 kg drums. Contact our sales team for grade-specific MOQs and pricing.",
      },
    ],
  },
  "fatty-acids": {
    overview: [
      "Fatty acids are foundational raw materials for soaps, alkyd resins, rubber compounding, candles, and lubricants. Dev International supplies distilled and fractionated fatty acids from coconut, palm, palm kernel, soya, rice bran, linseed, and castor feedstocks.",
      "The portfolio includes saturated single-cut acids, lauric (C12), myristic (C14), palmitic (C16), stearic (C18), and behenic (C22), alongside unsaturated soya and linseed acids for oxidative-cure resin systems, and 12-hydroxy stearic acid for grease manufacture.",
      "Technical datasheets specify acid value, saponification value, iodine value, titre, and colour for each grade, letting formulators match cuts precisely to their process requirements.",
    ],
    specs: [
      { label: "Chain lengths", value: "C8, C22 single cuts & blends" },
      { label: "Feedstocks", value: "Coconut · Palm · PK · Soya · Rice bran · Linseed · Castor" },
      { label: "Key parameters", value: "AV · SV · IV · Titre · Colour" },
      { label: "Packaging", value: "25/50 kg bags · drums · bulk" },
    ],
    pdfs: [
      { name: "Lauric Acid", file: "/pdfs/Lauric Acid.pdf" },
      { name: "Myristic Acid", file: "/pdfs/Myristic Acid.pdf" },
      { name: "Palmitic Acid", file: "/pdfs/Palmitc Acid.pdf" },
      { name: "Behenic Acid", file: "/pdfs/Behenic Acid.pdf" },
      { name: "Distilled Coconut Fatty Acid", file: "/pdfs/Distilled coconut fatty acid.pdf" },
    ],
    applications: ["bathing-soap-products", "alkyd-resin-products", "rubber", "paint", "resin"],
    faqs: [
      {
        q: "Which fatty acid should I use for soap making?",
        a: "For toilet soap, distilled palm/palm kernel and coconut fatty acids give the classic lather-hardness balance. Stearic acid 90% raises bar hardness; lauric acid boosts quick lather.",
      },
    ],
  },
  "oleic-acid": {
    overview: [
      "Oleic acid (C18:1) is the most versatile unsaturated fatty acid in industrial chemistry, a liquid emulsifier base, lubricant additive, and chemical intermediate. Dev International stocks multiple grades from technical to low-titre double-distilled quality.",
      "In metalworking, oleic acid is the backbone of soluble cutting-oil emulsifier packages. In construction, its calcium and sodium soaps deliver water repellency in mortars. In textiles it serves as a softener intermediate, and in ore beneficiation as a flotation collector.",
      "Grades are differentiated by iodine value, titre, colour, and oleic content, our team helps match the right specification to your process and budget.",
    ],
    specs: [
      { label: "Chemistry", value: "cis-9-Octadecenoic acid (C18:1)" },
      { label: "Grades", value: "Technical · DD · Low-titre" },
      { label: "Form", value: "Clear liquid" },
      { label: "Packaging", value: "180/200 kg HDPE drums · tanker" },
    ],
    applications: ["cutting-oil", "construction-chemical", "textile-industries", "ink-printing-ink", "metal-treatment-chemical"],
  },
  "stearic-acid": {
    overview: [
      "Stearic acid is among the highest-volume oleochemicals in Indian industry, essential to rubber vulcanisation, PVC processing, cosmetics, candles, and metallic stearate manufacture. Dev International is a leading Mumbai supplier with grades from 60% to 90%+ purity.",
      "Rubber-grade stearic acid acts as the activator for zinc oxide in sulphur cure systems, consistency in titre and acid value directly affects cure kinetics. Cosmetic grade (triple-pressed) provides pearlescence and body in creams. Polymer grades serve as external lubricants in PVC extrusion.",
      "All grades come with full technical datasheets covering acid value, saponification value, iodine value, titre, and colour, sourced from vetted manufacturers with RSPO Mass Balance options.",
    ],
    specs: [
      { label: "Purity range", value: "60% · 70% · 90% · Triple-pressed" },
      { label: "Grades", value: "Rubber · Cosmetic · Polymer · Commercial" },
      { label: "Certification", value: "RSPO MB available" },
      { label: "Packaging", value: "25 kg bags · 50 kg bags" },
    ],
    pdfs: [
      { name: "Stearic Acid 60%", file: "/pdfs/Stearic Acid 60%.pdf" },
      { name: "Stearic Acid 70%", file: "/pdfs/Stearic Acid 70%.pdf" },
      { name: "Stearic Acid 90%", file: "/pdfs/Stearic Acid 90%.pdf" },
      { name: "Commercial Grade Stearic Acid", file: "/pdfs/Commercial Grade Stearic Acid.pdf" },
      { name: "Rubber Grade Stearic Acid", file: "/pdfs/Rubber Grade Stearic Acid.pdf" },
      { name: "Stearic Acid, Cosmetic Grade", file: "/pdfs/Stearic Acid - Cosmetic Grade.pdf" },
    ],
    applications: ["rubber", "plastic-industry", "cosmetic", "metallic-stearate-products", "bathing-soap-products"],
    faqs: [
      {
        q: "What is the difference between rubber grade and cosmetic grade stearic acid?",
        a: "Rubber grade prioritises consistent titre and acid value for predictable cure activation, with commercial colour tolerance. Cosmetic (triple-pressed) grade is refined for low colour, low odour, and high purity suitable for skin-contact formulations.",
      },
    ],
  },
  "fatty-alcohol": {
    overview: [
      "Fatty alcohols are the backbone of emulsion systems in personal care and pharma, and key intermediates for surfactant manufacture. Dev International supplies the complete C8-C22 alcohol range: cetyl, stearyl, cetostearyl, behenyl, lauryl, and oleyl alcohols.",
      "Cetyl alcohol 99% and cetostearyl alcohol (50:50 and PS grades) are the standard consistency-builders in creams, lotions, and ointment bases. Stearyl alcohol 95% serves pharma ointments; behenyl alcohol delivers superior thickening in premium hair care.",
      "All grades are plant-derived from RSPO-certifiable palm and palm kernel feedstock, with typical hydroxyl value, iodine value, and carbon distribution documented per lot.",
    ],
    specs: [
      { label: "Range", value: "C8, C22 (lauryl to behenyl)" },
      { label: "Key grades", value: "Cetyl 99% · CS 50:50 · CS PS · Stearyl 95% · Behenyl" },
      { label: "Feedstock", value: "Palm / PK, plant-derived" },
      { label: "Form", value: "Flakes / pastilles" },
    ],
    pdfs: [
      { name: "Cetyl Alcohol 99%", file: "/pdfs/Cetyl Alcohol 99%.pdf" },
      { name: "Ceto-Stearyl Alcohol 50:50", file: "/pdfs/Ceto - Stearyl Alcohol 50-50.pdf" },
      { name: "Ceto-Stearyl Alcohol PS", file: "/pdfs/Ceto - Stearyl Alcohol PS.pdf" },
      { name: "Stearyl Alcohol 95%", file: "/pdfs/Stearyl Alcohol 95%.pdf" },
      { name: "Behenyl Alcohol", file: "/pdfs/Behenyl Alcohol.pdf" },
    ],
    applications: ["cosmetic", "pharmaceutical", "ointment", "skin-care-products", "aluminium-foil"],
  },
  "fatty-esters": {
    overview: [
      "Fatty esters bridge the gap between oils and specialty performance, delivering emolliency, lubricity, and plasticisation across cosmetics, textiles, plastics, and metalworking. Dev International supplies both cosmetic-grade emollient esters and industrial ester lubricants.",
      "The cosmetic line includes IPM, IPP, myristyl myristate, cetyl palmitate, and caprylic capric triglyceride. Industrial esters, butyl stearate, butyl oleate, and methyl esters, serve as plasticisers, fibre lubricants, and rolling-oil additives.",
      "Esters are supplied with acid value, saponification value, moisture, and colour specifications, in packaging from 25 kg carboys to bulk tankers.",
    ],
    specs: [
      { label: "Cosmetic esters", value: "IPM · IPP · Myristyl Myristate · CCT" },
      { label: "Industrial esters", value: "Butyl Stearate · Butyl Oleate · Methyl Esters" },
      { label: "Functions", value: "Emollient · Lubricant · Plasticiser" },
      { label: "Packaging", value: "25 kg, bulk" },
    ],
    applications: ["cosmetic", "skin-care-products", "textile-industries", "adhesive-tapes", "carbon-paper"],
  },
  glycerin: {
    overview: [
      "Glycerin (glycerol) is one of the most widely used humectants and multifunctional ingredients in the world, and Dev International is a trusted Mumbai supplier of refined glycerin in BP, IP, USP, and CP pharmacopeia grades since 1995.",
      "Pharma-grade glycerin (99.5%+) serves cough syrups, oral liquids, and topical formulations. Cosmetic formulators use it as the workhorse humectant in creams, cleansers, and toothpaste. CP (chemically pure) grade covers industrial uses, alkyd resins, foundry binders, and plasticisers.",
      "Our glycerin is sourced from vegetable oleochemical splitting, a renewable, plant-based origin, with each lot accompanied by pharmacopeia-compliance certificates, specific gravity, and assay documentation.",
    ],
    specs: [
      { label: "Grades", value: "BP · IP · USP · CP" },
      { label: "Assay", value: "≥ 99.5% (pharma grades)" },
      { label: "Origin", value: "Vegetable (oleochemical route)" },
      { label: "Packaging", value: "250 kg HDPE drums · IBC · tanker" },
    ],
    pdfs: [
      { name: "Glycerin BP", file: "/pdfs/Glycerin BP.pdf" },
      { name: "Glycerin IP", file: "/pdfs/Glycerin IP.pdf" },
      { name: "Glycerin USP", file: "/pdfs/Glycerin USP.pdf" },
      { name: "Glycerin CP", file: "/pdfs/Glycerin CP.pdf" },
    ],
    applications: ["pharmaceutical", "cough-syrup", "cosmetic", "food", "resin"],
    faqs: [
      {
        q: "What is the difference between BP, IP, and USP glycerin?",
        a: "They are pharmacopeia standards, British (BP), Indian (IP), and United States (USP). Assay and impurity limits are broadly similar (≥99.5%); the choice depends on the regulatory market your finished product targets.",
      },
      {
        q: "Is your glycerin vegetable-derived?",
        a: "Yes, our glycerin comes from vegetable oil splitting and transesterification routes, making it suitable for vegan, halal, and kosher requirements. Certificates available on request.",
      },
    ],
  },
  wax: {
    overview: [
      "Waxes deliver structure, barrier, gloss, and release across industries, from lip balm to corrugated board. Dev International stocks the complete wax portfolio: natural (beeswax, carnauba), mineral (paraffin, microcrystalline), synthetic (PE wax), and self-emulsifying systems.",
      "Emulsifying wax NF is the backbone of cream and lotion manufacture. Paraffin waxes (fully and semi-refined, multiple melt points) serve candles, coatings, and rubber protection. Carnauba adds high-gloss slip in inks and polishes; microcrystalline provides flexibility in cosmetic sticks and hot melts.",
      "Every wax is specified by melt point, congealing point, oil content, penetration, and colour, with food-contact and cosmetic-grade documentation where required.",
    ],
    specs: [
      { label: "Natural", value: "Beeswax · Carnauba" },
      { label: "Mineral", value: "Paraffin FR/SR · Microcrystalline · Petroleum Jelly" },
      { label: "Synthetic", value: "PE Wax · Emulsifying Wax" },
      { label: "Key specs", value: "Melt point · Oil content · Penetration" },
    ],
    pdfs: [{ name: "Emulsifying Waxes", file: "/pdfs/Emulsifying Waxes.pdf" }],
    applications: ["cosmetic", "ointment", "carbon-paper", "paper", "rubber", "adhesive-and-glues"],
  },
  phosphorous: {
    overview: [
      "Phosphorous compounds serve as flame retardants, plasticisers, extraction solvents, and synthesis intermediates. Dev International supplies phosphate esters, tri butyl phosphate (TBP), tri phenyl phosphate (TPP), tri ethyl phosphate (TEP), alongside phosphoric acid and phosphorous acid.",
      "TBP is the industry-standard defoamer in concrete admixtures and an extraction solvent in metal refining. TPP delivers flame-retardant plasticisation in cables, films, and engineering plastics. Phosphoric acid grades serve metal pre-treatment and water treatment programs.",
      "Purity, moisture, colour, and acidity specifications are documented per lot, with packaging from 35 kg carboys to bulk.",
    ],
    specs: [
      { label: "Esters", value: "TBP · TPP · TEP" },
      { label: "Acids", value: "Phosphoric · Phosphorous" },
      { label: "Functions", value: "Flame retardant · Defoamer · Extraction" },
      { label: "Packaging", value: "35 kg carboys, bulk" },
    ],
    applications: ["cable", "water-treatment", "metal-treatment-chemical", "plastic-industry", "dyes-and-intermediates"],
  },
  "amines-phosphates-sulphites": {
    overview: [
      "This portfolio covers the inorganic and amine chemistry that keeps utilities and process industries running, boiler and cooling water programs, dye synthesis, and metal finishing lines.",
      "Amines (cyclohexylamine, morpholine, DEHA) protect steam condensate systems from corrosion. Phosphates (TSP, STPP, zinc phosphate) handle scale control and conversion coating. Sulphites (sodium sulphite, metabisulphite, hydrosulphite) serve as oxygen scavengers and reducing agents in dye manufacture.",
      "Consistent purity and reliable supply keep dosing programs and multi-step syntheses on schedule, with technical support for grade selection.",
    ],
    specs: [
      { label: "Amines", value: "Cyclohexylamine · Morpholine · DEHA" },
      { label: "Phosphates", value: "TSP · STPP · Zinc Phosphate" },
      { label: "Sulphites", value: "Sulphite · Metabisulphite · Hydrosulphite" },
      { label: "Sectors", value: "Water · Dyes · Metal finishing" },
    ],
    applications: ["water-treatment", "dyes-and-intermediates", "metal-treatment-chemical", "oil-field"],
  },
  "solvent-esters": {
    overview: [
      "Solvent esters are the fast-evaporating, low-toxicity workhorses of coatings, inks, and adhesives. Dev International supplies acetate esters, ethyl, butyl, isopropyl, plus propylene glycol acetates and specialty slow-evaporating esters.",
      "Butyl acetate is the standard solvent in NC lacquers and 2K PU systems; ethyl acetate drives flexo and gravure ink evaporation; PMA (propylene glycol methyl ether acetate) provides balanced evaporation in industrial coatings.",
      "Purity ≥99%, moisture, and distillation-range specifications are documented per lot, in drum and tanker quantities.",
    ],
    specs: [
      { label: "Range", value: "Ethyl · Butyl · IPA acetates · PMA" },
      { label: "Purity", value: "≥ 99%" },
      { label: "Sectors", value: "Coatings · Inks · Adhesives · Pharma" },
      { label: "Packaging", value: "180 kg drums · tanker" },
    ],
    applications: ["paint", "ink-printing-ink", "adhesive-and-glues", "varnish", "foundry-chemical"],
  },
  surfactants: {
    overview: [
      "Surfactants are where Dev International's eco-conscious sourcing shines, SLS and AOS actives built on natural, plant-derived feedstocks. Our natural-based SLS (liquid, needles, powder) and AOS (liquid, paste) serve personal care, home care, and construction.",
      "SLS needles and powder deliver dense foam in toothpaste, shampoo bases, and syndet bars. AOS provides excellent hard-water tolerance for detergent powders and liquid cleaners. Cosmetic-grade AOS liquid serves mild personal wash systems.",
      "Active matter, unsulphated matter, and salt content are documented per lot, with mild co-surfactants (CAPB, betaines, sulfosuccinates) available to complete formulations.",
    ],
    specs: [
      { label: "SLS", value: "Liquid · Needles · Powder (natural-based)" },
      { label: "AOS", value: "Liquid (cosmetic) · Paste" },
      { label: "Co-surfactants", value: "CAPB · Betaines · Sulfosuccinates" },
      { label: "Feedstock", value: "Plant-derived, natural-based" },
    ],
    pdfs: [
      { name: "SLS Liquid (Natural Based)", file: "/pdfs/1SLS Liquid Natural based.pdf" },
      { name: "SLS Needles (Natural Based)", file: "/pdfs/2SLS Needles Natural based.pdf" },
      { name: "SLS Powder (Natural Based)", file: "/pdfs/3SLS Powder Natural based.pdf" },
      { name: "AOS Liquid (Cosmetic Grade)", file: "/pdfs/1AOS Liquid - Cometic Grade.pdf" },
      { name: "AOS Paste", file: "/pdfs/2AOS Paste.pdf" },
      { name: "Mild Surfactants", file: "/pdfs/Mild Surfactants.pdf" },
    ],
    applications: ["home-care-cleaning", "bathing-soap-products", "cosmetic", "construction-chemical", "oil-field"],
    faqs: [
      {
        q: "What does 'natural based' SLS mean?",
        a: "Our SLS is manufactured from lauryl alcohol derived from plant feedstocks (coconut/palm kernel) rather than petrochemical routes, supporting natural-origin index claims under ISO 16128.",
      },
    ],
  },
  "various-mole-ethoxylates": {
    overview: [
      "Ethoxylates are tunable nonionic surfactants, by varying moles of ethylene oxide on fatty alcohol, acid, or amine bases, HLB can be dialled precisely for emulsification, wetting, or detergency. Dev International supplies the full mole range across multiple hydrophobe families.",
      "Fatty alcohol ethoxylates (2-30 EO) serve textile scouring and metal cleaning. Castor oil ethoxylates (10-40 EO) emulsify agrochemical and textile oil systems. Nonyl phenol alternatives and specialty ethoxylates support demulsifier and cutting-oil formulations.",
      "Cloud point, HLB, and moisture specifications are documented per grade, our team recommends mole ratios based on your target application.",
    ],
    specs: [
      { label: "Bases", value: "Fatty alcohol · Castor oil · Fatty acid · Amine" },
      { label: "EO range", value: "2, 40 moles" },
      { label: "Key specs", value: "HLB · Cloud point · Moisture" },
      { label: "Packaging", value: "50/200 kg drums" },
    ],
    applications: ["textile-industries", "cutting-oil", "oil-field", "metal-treatment-chemical", "home-care-cleaning"],
  },
  "vegetable-oil": {
    overview: [
      "Refined vegetable oils are renewable feedstocks for resins, soaps, lubricants, and foundry binders. Dev International supplies castor, linseed, soybean, rice bran, palm, and coconut oils in refined and double-boiled grades.",
      "Linseed oil (raw and double-boiled) is the classic oxidative-cure binder for varnishes, putties, and foundry cores. Castor oil serves polyurethane polyols and hydraulic fluids; rice bran and soya oils feed alkyd resin plants.",
      "Oils are specified by acid value, iodine value, moisture, and colour, packed in drums, IBCs, or tankers with consistent lot-to-lot quality.",
    ],
    specs: [
      { label: "Range", value: "Castor · Linseed · Soya · Rice bran · Palm · Coconut" },
      { label: "Grades", value: "Refined · Double-boiled (linseed)" },
      { label: "Key specs", value: "AV · IV · Moisture · Colour" },
      { label: "Packaging", value: "Drums · IBC · tanker" },
    ],
    applications: ["varnish", "foundry-chemical", "alkyd-resin-products", "food", "resin"],
  },
  "more-products": {
    overview: [
      "Beyond the core oleochemical families, Dev International sources the specialty items that complete industrial formulations, metallic stearates, soap noodles, casein, petroleum jelly, and niche intermediates.",
      "The metallic stearate family (zinc, calcium, magnesium, aluminium) serves PVC stabilisation, rubber dusting, pharma tabletting, and grease thickening. Soap noodles feed toilet-soap plants; casein serves label adhesives and paper coating; petroleum jelly anchors ointments and cable filling compounds.",
      "If a chemical is not listed anywhere in our catalogue, ask, our vetted manufacturer network can usually source it at competitive Mumbai pricing.",
    ],
    specs: [
      { label: "Stearates", value: "Zn · Ca · Mg · Al" },
      { label: "Soap bases", value: "Soap noodles (multiple grades)" },
      { label: "Others", value: "Casein · Petroleum Jelly · Custom sourcing" },
      { label: "Service", value: "Custom sourcing via vetted network" },
    ],
    applications: ["metallic-stearate-products", "plastic-industry", "bathing-soap-products", "cable", "specialty-chemical"],
  },
};

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails[slug];
}
