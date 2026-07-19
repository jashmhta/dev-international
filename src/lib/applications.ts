import { applicationImages } from "./brand";

export type Application = {
  slug: string;
  name: string;
  title: string;
  image: string;
  description: string;
  detail: string;
  chemicals: string[];
  relatedProducts: string[]; // product slugs
  sector: string;
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const defs: Omit<Application, "slug" | "image">[] = [
  {
    name: "Cosmetic",
    title: "Cosmetics & Beauty",
    sector: "Personal Care & Pharma",
    description:
      "Emollients, emulsifiers, and mild surfactants for creams, lotions, serums, and colour cosmetics.",
    detail:
      "Cosmetic formulators rely on Dev International for a complete raw-material basket — from isopropyl myristate and cetyl palmitate emollients to cetearyl alcohol emulsifier systems, sophorolipid biosurfactants, and hair colour protection molecules. Every lot ships with COA and TDS documentation, with cosmetic-grade and COSMOS-approved source options for natural and organic-certified product lines.",
    chemicals: [
      "Isopropyl Myristate (IPM)",
      "Isopropyl Palmitate (IPP)",
      "Cetyl Palmitate",
      "Cetearyl Alcohol & Ceteareth-20",
      "Emulsifying Wax",
      "Glycerol Mono Stearate",
      "Sophorolipid",
      "Stearic Acid Cosmetic Grade",
      "Cetyl Alcohol 99%",
      "Glycerin BP / USP",
    ],
    relatedProducts: ["oleo-derivatives", "fatty-alcohol", "glycerin", "stearic-acid", "wax"],
  },
  {
    name: "Pharmaceutical",
    title: "Pharmaceutical Manufacturing",
    sector: "Personal Care & Pharma",
    description:
      "Pharma-grade excipients, glycerin BP/IP/USP, and stearates for tablets, syrups, and topicals.",
    detail:
      "Pharmaceutical manufacturers source pharmacopeia-grade raw materials from Dev International — Glycerin BP, IP, and USP for oral liquids and syrups, stearic acid and magnesium stearate for tabletting, cetostearyl alcohol for ointment bases, and phosphorous compounds for API synthesis. GMP-compliant handling and full traceability support regulatory audit requirements.",
    chemicals: [
      "Glycerin BP / IP / USP",
      "Stearic Acid (Pharma)",
      "Cetostearyl Alcohol",
      "Cetyl Alcohol 99%",
      "Isopropyl Myristate",
      "Soft Paraffin Wax",
      "Tri Ethyl Phosphate",
      "Phenoxyethanol",
    ],
    relatedProducts: ["glycerin", "fatty-alcohol", "stearic-acid", "wax", "phosphorous"],
  },
  {
    name: "Skin Care Products",
    title: "Skin Care Formulations",
    sector: "Personal Care & Pharma",
    description:
      "Emollient esters, humectants, and biosurfactants for moisturisers, sunscreens, and anti-ageing lines.",
    detail:
      "Skin care brands formulate with our light emollient esters (2-ethyl hexyl palmitate, caprylic capric triglyceride), humectant glycerin, structuring waxes, and mild preservative systems. Sophorolipid biosurfactants and plant-derived feedstocks support clean-beauty and eco-labelled claims without compromising sensory performance.",
    chemicals: [
      "Caprylic Capric Triglyceride",
      "2-Ethyl Hexyl Palmitate",
      "Myristyl Myristate",
      "Cetearyl Octanoate",
      "Glycerin USP",
      "Body Wax",
      "Sophorolipid",
      "Mild Surfactants",
    ],
    relatedProducts: ["oleo-derivatives", "glycerin", "wax", "fatty-esters"],
  },
  {
    name: "Bathing Soap Products",
    title: "Bathing Soap & Syndet Bars",
    sector: "Personal Care & Pharma",
    description:
      "Soap noodles, fatty acids, and SLS/AOS actives for toilet soaps and syndet bars.",
    detail:
      "Soap manufacturers depend on our soap noodles, distilled fatty acids (palm, palm kernel, coconut), stearic acid, and glycerin for consistent bar quality. For syndet and combo bars we supply SLS needles/powder, AOS paste, and mild co-surfactants — with grades tuned for lather profile, hardness, and mildness.",
    chemicals: [
      "Soap Noodles",
      "Palm Fatty Acid",
      "Palm Kernel Fatty Acid",
      "Distilled Coconut Fatty Acid",
      "Stearic Acid 90%",
      "SLS Needles / Powder",
      "AOS Paste",
      "Glycerin CP",
    ],
    relatedProducts: ["fatty-acids", "surfactants", "glycerin", "more-products"],
  },
  {
    name: "Home Care Cleaning",
    title: "Home Care & Cleaning",
    sector: "Personal Care & Pharma",
    description:
      "Surfactant systems, betaines, and solvents for dishwash, laundry, and surface cleaners.",
    detail:
      "Home care formulators source complete surfactant systems from Dev International — SLS and SLES primaries, CAPB and coco betaine foam boosters, AOS for hard-water tolerance, and amine oxides for thickening and foam stability. Solvent esters and glycol ethers complete degreaser and hard-surface cleaner formulations.",
    chemicals: [
      "SLS Liquid / Needles / Powder",
      "AOS Liquid / Paste",
      "Coco Amido Propyl Betaine (CAPB)",
      "Lauryl Amine Oxide",
      "Benzalkonium Chloride",
      "Butyl Acetate",
      "Various Mole Ethoxylates",
    ],
    relatedProducts: ["surfactants", "various-mole-ethoxylates", "solvent-esters", "oleo-derivatives"],
  },
  {
    name: "Food",
    title: "Food & Beverage Processing",
    sector: "Food & Agro",
    description:
      "Food-grade glycerin, emulsifiers, and release agents for bakery, confectionery, and processing.",
    detail:
      "Food processors use our food-grade glycerin as humectant and sweetener carrier, glycerol mono stearate as emulsifier in bakery and dairy applications, and food-contact-compliant waxes as glazing and release agents. FDA-compliant grades and full documentation support food-safety management systems.",
    chemicals: [
      "Glycerin (Food Grade)",
      "Glycerol Mono Stearate",
      "Refined Vegetable Oils",
      "Beeswax",
      "Carnauba Wax",
      "Stearic Acid (Food Contact)",
    ],
    relatedProducts: ["glycerin", "vegetable-oil", "wax", "fatty-esters"],
  },
  {
    name: "Paint",
    title: "Paints & Coatings",
    sector: "Coatings & Polymers",
    description:
      "Dispersing aids, driers, and solvent esters for decorative and industrial coatings.",
    detail:
      "Paint producers source fatty acids for alkyd resin cooking, solvent esters (butyl acetate, ethyl acetate) as fast-evaporating solvents, metallic stearates as matting and sanding aids, and lecithin-type dispersants. Our linseed and soya fatty acids are staples for long-oil and medium-oil alkyd systems.",
    chemicals: [
      "Linseed Fatty Acid",
      "Soya Fatty Acid",
      "Butyl Acetate",
      "Ethyl Acetate",
      "Zinc Stearate",
      "Calcium Stearate",
      "12-Hydroxy Stearic Acid",
      "Tri Phenyl Phosphate",
    ],
    relatedProducts: ["fatty-acids", "solvent-esters", "more-products", "phosphorous"],
  },
  {
    name: "Ink / Printing Ink",
    title: "Inks & Printing",
    sector: "Coatings & Polymers",
    description:
      "Wax additives, solvent esters, and oleic acid derivatives for gravure, flexo, and offset inks.",
    detail:
      "Ink manufacturers use our PE and carnauba waxes for rub resistance and slip, solvent esters for controlled evaporation in gravure and flexo systems, and oleic acid derivatives as pigment wetting agents. Consistent lot-to-lot quality keeps colour strength and press performance stable.",
    chemicals: [
      "PE Wax",
      "Carnauba Wax",
      "Butyl Acetate",
      "Iso Propyl Acetate",
      "Oleic Acid",
      "Butyl Oleate",
      "Tri Butyl Phosphate",
    ],
    relatedProducts: ["wax", "solvent-esters", "oleic-acid", "phosphorous"],
  },
  {
    name: "Resin",
    title: "Resin Manufacturing",
    sector: "Coatings & Polymers",
    description:
      "Fatty acids, glycerin, and phosphorous intermediates for alkyd, polyester, and epoxy resins.",
    detail:
      "Resin producers cook alkyds from our soya, linseed, and rice bran fatty acids with glycerin and pentaerythritol. Phosphorous compounds serve as catalysts and flame-retardant intermediates. We supply drum-to-tanker volumes with consistent acid value and colour specifications.",
    chemicals: [
      "Soya Fatty Acid",
      "Linseed Fatty Acid",
      "Rice Bran Fatty Acid",
      "Glycerin CP",
      "Phosphorous Acid",
      "Tri Phenyl Phosphate",
      "Maleic Anhydride Esters",
    ],
    relatedProducts: ["fatty-acids", "glycerin", "phosphorous", "vegetable-oil"],
  },
  {
    name: "Varnish",
    title: "Varnishes & Wood Finishes",
    sector: "Coatings & Polymers",
    description:
      "Drying oils, fatty acids, and solvents for clear coats and wood finishes.",
    detail:
      "Varnish makers source refined linseed oil and drying-oil fatty acids for oxidative-cure clear coats, solvent esters for viscosity cut-back, and waxes for satin-effect finishes. Consistent iodine values ensure predictable drying performance.",
    chemicals: [
      "Linseed Oil",
      "Linseed Fatty Acid",
      "Butyl Acetate",
      "Carnauba Wax",
      "Oleic Acid",
    ],
    relatedProducts: ["vegetable-oil", "fatty-acids", "solvent-esters", "wax"],
  },
  {
    name: "Adhesive & Glues",
    title: "Adhesives & Glues",
    sector: "Coatings & Polymers",
    description:
      "Tackifier intermediates, plasticiser esters, and waxes for hot-melt and solvent adhesives.",
    detail:
      "Adhesive formulators use our plasticiser esters for flexibility, paraffin and microcrystalline waxes for open-time control in hot melts, solvent esters as carrier solvents, and casein for label and woodworking glues.",
    chemicals: [
      "Di Octyl Maleate",
      "Paraffin Wax",
      "Microcrystalline Wax",
      "Ethyl Acetate",
      "Casein",
      "Tri Butyl Phosphate",
    ],
    relatedProducts: ["wax", "solvent-esters", "more-products", "fatty-esters"],
  },
  {
    name: "Adhesive Tapes",
    title: "Adhesive Tapes",
    sector: "Coatings & Polymers",
    description:
      "Release coatings, waxes, and esters for pressure-sensitive tape production.",
    detail:
      "Tape manufacturers depend on our stearates and waxes for release-liner coatings, plasticiser esters for adhesive mass tuning, and solvents for coating operations — with consistent quality that keeps unwind force and tack in specification.",
    chemicals: [
      "Zinc Stearate",
      "Paraffin Wax",
      "2-Ethyl Hexyl Palmitate",
      "Ethyl Acetate",
      "Butyl Stearate",
    ],
    relatedProducts: ["wax", "more-products", "fatty-esters", "solvent-esters"],
  },
  {
    name: "Plastic Industry",
    title: "Plastics & Polymers",
    sector: "Industrial & Manufacturing",
    description:
      "Metallic stearates, lubricants, and plasticisers for PVC, polyolefin, and engineering plastics.",
    detail:
      "Plastic processors use calcium, zinc, and magnesium stearates as heat stabilisers and lubricants in PVC, stearic acid polymer grade as external lubricant, glycerol mono stearate as antistatic and anti-fog agent, and phosphate esters as flame-retardant plasticisers.",
    chemicals: [
      "Calcium Stearate",
      "Zinc Stearate",
      "Stearic Acid Polymer Grade",
      "Glycerol Mono Stearate",
      "Tri Phenyl Phosphate",
      "PE Wax",
      "12-Hydroxy Stearic Acid",
    ],
    relatedProducts: ["more-products", "stearic-acid", "phosphorous", "wax"],
  },
  {
    name: "Rubber",
    title: "Rubber & Elastomers",
    sector: "Industrial & Manufacturing",
    description:
      "Rubber-grade stearic acid, zinc stearate, and process aids for tyre and moulded goods.",
    detail:
      "Rubber compounders rely on our rubber-grade stearic acid as activator with zinc oxide in vulcanisation systems, zinc stearate as dusting and release agent, and paraffin waxes for ozone protection. Consistent quality keeps cure characteristics stable batch after batch.",
    chemicals: [
      "Stearic Acid Rubber Grade",
      "Zinc Stearate",
      "Paraffin Wax",
      "Microcrystalline Wax",
      "Oleic Acid",
      "Tri Butyl Phosphate",
    ],
    relatedProducts: ["stearic-acid", "more-products", "wax", "oleic-acid"],
  },
  {
    name: "Textile Industries",
    title: "Textile Processing",
    sector: "Industrial & Manufacturing",
    description:
      "Softeners, scouring agents, and ethoxylates for dyeing, finishing, and yarn processing.",
    detail:
      "Textile mills source our fatty acid ethoxylates and alcohol ethoxylates as wetting and scouring agents, glycerol mono stearate and waxes for softener formulations, and surfactant systems for dye levelling — supporting consistent hand-feel and shade reproducibility.",
    chemicals: [
      "Various Mole Ethoxylates",
      "Glycerol Mono Stearate",
      "Paraffin Wax Emulsion Grade",
      "Oleic Acid",
      "Coco Amido Propyl Betaine",
      "Tri Sodium Phosphate",
    ],
    relatedProducts: ["various-mole-ethoxylates", "oleic-acid", "wax", "surfactants"],
  },
  {
    name: "Paper",
    title: "Paper & Board",
    sector: "Industrial & Manufacturing",
    description:
      "Sizing waxes, defoamers, and stearates for paper making and converting.",
    detail:
      "Paper mills use our waxes for coating and moisture barrier applications, metallic stearates in speciality coatings, and fatty alcohol based defoamer intermediates in the wet end — improving machine runnability and sheet quality.",
    chemicals: [
      "Paraffin Wax",
      "Calcium Stearate",
      "Cetyl Alcohol",
      "AOS Liquid",
      "Glycerin CP",
    ],
    relatedProducts: ["wax", "more-products", "fatty-alcohol", "glycerin"],
  },
  {
    name: "Carbon Paper",
    title: "Carbon Paper & Transfer Media",
    sector: "Industrial & Manufacturing",
    description:
      "Specialty waxes and oleic derivatives for carbon coating and one-time carbon media.",
    detail:
      "Carbon paper and transfer media producers use our carnauba, paraffin, and microcrystalline wax blends as carbon-ink carriers, with oleic acid and butyl stearate tuning release and transfer clarity.",
    chemicals: [
      "Carnauba Wax",
      "Paraffin Wax",
      "Microcrystalline Wax",
      "Oleic Acid",
      "Butyl Stearate",
    ],
    relatedProducts: ["wax", "oleic-acid", "fatty-esters"],
  },
  {
    name: "Aluminium Foil",
    title: "Aluminium Foil Converting",
    sector: "Industrial & Manufacturing",
    description:
      "Rolling lubricants and coating waxes for foil rolling and lamination.",
    detail:
      "Foil rollers and converters source fatty alcohols and esters as rolling-oil additives, and waxes for heat-seal and barrier coatings in laminates — with low-residue grades that meet food-contact requirements.",
    chemicals: [
      "Cetyl Alcohol",
      "Stearyl Alcohol 95%",
      "Butyl Stearate",
      "Paraffin Wax",
      "Oleic Acid",
    ],
    relatedProducts: ["fatty-alcohol", "fatty-esters", "wax", "oleic-acid"],
  },
  {
    name: "Cable",
    title: "Wire & Cable",
    sector: "Industrial & Manufacturing",
    description:
      "Stearates, waxes, and flame-retardant phosphates for cable compounds and fillers.",
    detail:
      "Cable compounders use calcium and zinc stearates as lubricant-stabilisers in PVC insulation, petroleum jelly and waxes in filling compounds, and phosphate esters as flame-retardant plasticisers for low-smoke formulations.",
    chemicals: [
      "Calcium Stearate",
      "Zinc Stearate",
      "Petroleum Jelly",
      "Paraffin Wax",
      "Tri Phenyl Phosphate",
      "Tri Butyl Phosphate",
    ],
    relatedProducts: ["more-products", "wax", "phosphorous", "stearic-acid"],
  },
  {
    name: "Wood and Laminates",
    title: "Wood & Laminates",
    sector: "Industrial & Manufacturing",
    description:
      "Release agents, waxes, and resin intermediates for plywood, MDF, and decorative laminates.",
    detail:
      "Laminate and panel producers source our waxes as water repellents in particle board, metallic stearates as release agents in press operations, and fatty acids for resin modification — improving board quality and press cycle efficiency.",
    chemicals: [
      "Paraffin Wax Emulsion Grade",
      "Zinc Stearate",
      "Stearic Acid 60%",
      "Soya Fatty Acid",
      "Glycerin CP",
    ],
    relatedProducts: ["wax", "stearic-acid", "fatty-acids", "glycerin"],
  },
  {
    name: "Construction Chemical",
    title: "Construction Chemicals",
    sector: "Infrastructure & Energy",
    description:
      "Air-entrainers, water repellents, and mould-release agents for concrete and mortar systems.",
    detail:
      "Construction chemical producers use our oleic acid and stearates in water-repellent admixtures, SLS/AOS surfactants as air-entraining and foaming agents in lightweight concrete, and waxes in curing compounds and mould-release formulations.",
    chemicals: [
      "Oleic Acid",
      "Calcium Stearate",
      "Zinc Stearate",
      "SLS Powder",
      "AOS Liquid",
      "Paraffin Wax",
      "Tri Butyl Phosphate (defoamer)",
    ],
    relatedProducts: ["oleic-acid", "more-products", "surfactants", "wax"],
  },
  {
    name: "Water Treatment",
    title: "Water Treatment",
    sector: "Infrastructure & Energy",
    description:
      "Phosphates, sulphites, and amines for boiler, cooling, and effluent treatment programs.",
    detail:
      "Water treatment companies source our phosphoric acid and phosphate salts for scale control, sodium sulphite and metabisulphite as oxygen scavengers, and amines for condensate line protection — with consistent purity for reliable dosing programs.",
    chemicals: [
      "Phosphoric Acid",
      "Tri Sodium Phosphate",
      "Sodium Sulphite",
      "Sodium Metabisulphite",
      "Cyclohexylamine",
      "Morpholine",
    ],
    relatedProducts: ["amines-phosphates-sulphites", "phosphorous"],
  },
  {
    name: "Metal Treatment Chemical",
    title: "Metal Pre-Treatment",
    sector: "Infrastructure & Energy",
    description:
      "Phosphating chemicals, degreasers, and rust preventives for metal finishing lines.",
    detail:
      "Metal finishers use our phosphoric acid and zinc phosphate systems for conversion coating, surfactant blends for alkaline degreasing, and oleic derivatives in rust-preventive oil formulations — supporting paint adhesion and corrosion protection.",
    chemicals: [
      "Phosphoric Acid",
      "Zinc Phosphate",
      "Tri Sodium Phosphate",
      "Various Mole Ethoxylates",
      "Oleic Acid",
      "Lauryl Amine Oxide",
    ],
    relatedProducts: ["phosphorous", "amines-phosphates-sulphites", "various-mole-ethoxylates", "oleic-acid"],
  },
  {
    name: "Cutting Oil",
    title: "Cutting & Lubricating Oils",
    sector: "Infrastructure & Energy",
    description:
      "Emulsifiers, oleic acid, and esters for soluble cutting oils and metalworking fluids.",
    detail:
      "Metalworking fluid blenders use our oleic acid and tall oil fatty acids as emulsifier bases, ethoxylates as coupling agents, and phosphate esters as extreme-pressure additives — delivering stable emulsions and improved tool life.",
    chemicals: [
      "Oleic Acid",
      "Various Mole Ethoxylates",
      "Tri Butyl Phosphate",
      "Butyl Oleate",
      "Coco Fatty Acid",
    ],
    relatedProducts: ["oleic-acid", "various-mole-ethoxylates", "phosphorous", "fatty-acids"],
  },
  {
    name: "Foundry Chemical",
    title: "Foundry Chemicals",
    sector: "Infrastructure & Energy",
    description:
      "Core binders, release agents, and coating carriers for casting operations.",
    detail:
      "Foundries source our linseed-oil based core binders, waxes and stearates as pattern release agents, and solvent carriers for refractory coatings — supporting clean strip, surface finish, and dimensional accuracy in castings.",
    chemicals: [
      "Linseed Oil",
      "Zinc Stearate",
      "Paraffin Wax",
      "Iso Propyl Alcohol Esters",
      "Oleic Acid",
    ],
    relatedProducts: ["vegetable-oil", "more-products", "wax", "solvent-esters"],
  },
  {
    name: "Dyes & Intermediates",
    title: "Dyes & Intermediates",
    sector: "Specialty & Fine Chemicals",
    description:
      "Sulphites, phosphorous compounds, and dispersants for dyestuff synthesis and standardisation.",
    detail:
      "Dyestuff manufacturers use our sodium sulphide and sulphites in reduction steps, phosphorous compounds in intermediate synthesis, and ethoxylate dispersants in finishing and standardisation — with reliable supply that keeps multi-step syntheses on schedule.",
    chemicals: [
      "Sodium Sulphite",
      "Sodium Hydrosulphite",
      "Phosphorous Acid",
      "Various Mole Ethoxylates",
      "Oleic Acid",
    ],
    relatedProducts: ["amines-phosphates-sulphites", "phosphorous", "various-mole-ethoxylates"],
  },
  {
    name: "Oil Field",
    title: "Oil Field Chemicals",
    sector: "Infrastructure & Energy",
    description:
      "Demulsifiers, corrosion inhibitors, and surfactant intermediates for upstream operations.",
    detail:
      "Oil field service companies source our ethoxylates as demulsifier intermediates, amine derivatives for corrosion inhibition, and phosphate esters for scale control — engineered for the high-salinity, high-temperature environments of producing wells.",
    chemicals: [
      "Various Mole Ethoxylates",
      "Cyclohexylamine",
      "Tri Butyl Phosphate",
      "Oleic Acid",
      "Coco Amido Propyl Betaine",
    ],
    relatedProducts: ["various-mole-ethoxylates", "amines-phosphates-sulphites", "phosphorous", "surfactants"],
  },
  {
    name: "Ointment",
    title: "Ointments & Topicals",
    sector: "Personal Care & Pharma",
    description:
      "Ointment bases, petroleum jelly, and lanolin substitutes for dermatological products.",
    detail:
      "Topical formulation manufacturers use our white soft paraffin and petroleum jelly as ointment bases, cetostearyl alcohol and emulsifying wax for cream systems, and IPM for skin-feel modification — all in pharma-grade quality with GMP documentation.",
    chemicals: [
      "White Soft Paraffin",
      "Petroleum Jelly",
      "Cetostearyl Alcohol",
      "Emulsifying Wax",
      "Isopropyl Myristate",
      "Glycerin IP",
    ],
    relatedProducts: ["wax", "fatty-alcohol", "glycerin", "oleo-derivatives"],
  },
  {
    name: "Cough Syrup",
    title: "Cough Syrups & Oral Liquids",
    sector: "Personal Care & Pharma",
    description:
      "Pharma-grade glycerin and excipients for oral liquid formulations.",
    detail:
      "Oral liquid manufacturers rely on our Glycerin BP/IP/USP as sweetener, humectant, and viscosity builder in cough syrups and suspensions, plus sorbitol solutions and preservative systems — with pharmacopeia compliance on every lot.",
    chemicals: [
      "Glycerin BP / IP / USP",
      "Sorbitol 70%",
      "Propylene Glycol",
      "Sodium Benzoate",
    ],
    relatedProducts: ["glycerin", "solvent-esters", "more-products"],
  },
  {
    name: "Metallic Stearate Products",
    title: "Metallic Stearates",
    sector: "Specialty & Fine Chemicals",
    description:
      "Zinc, calcium, magnesium, and aluminium stearates for plastics, rubber, and coatings.",
    detail:
      "We supply the full metallic stearate family — zinc stearate for rubber dusting and PVC stabilisation, calcium stearate as lubricant and water repellent, magnesium stearate for pharma tabletting, and aluminium stearate for grease and paint thickening.",
    chemicals: [
      "Zinc Stearate",
      "Calcium Stearate",
      "Magnesium Stearate",
      "Aluminium Stearate",
      "Stearic Acid 90%",
    ],
    relatedProducts: ["more-products", "stearic-acid", "fatty-acids"],
  },
  {
    name: "Alkyd Resin Products",
    title: "Alkyd Resins",
    sector: "Specialty & Fine Chemicals",
    description:
      "Fatty acid feedstocks and polyols for long, medium, and short-oil alkyd production.",
    detail:
      "Alkyd resin plants cook with our soya, linseed, castor, and rice bran fatty acids alongside glycerin and pentaerythritol polyols. We supply consistent acid-value feedstocks in drum and tanker quantities, keeping resin colour and viscosity within specification.",
    chemicals: [
      "Soya Fatty Acid",
      "Linseed Fatty Acid",
      "Rice Bran Fatty Acid",
      "Ricinoleic Acid",
      "Glycerin CP",
      "Phthalic Anhydride",
    ],
    relatedProducts: ["fatty-acids", "glycerin", "vegetable-oil", "phosphorous"],
  },
  {
    name: "Specialty Chemical",
    title: "Specialty Chemicals",
    sector: "Specialty & Fine Chemicals",
    description:
      "Custom intermediates, niche esters, and specialty blends for fine chemical manufacturing.",
    detail:
      "For specialty chemical producers we source niche esters, custom ethoxylates, phosphorous intermediates, and specialty blends — leveraging our vetted manufacturer network to solve one-off and recurring sourcing challenges across fine chemical value chains.",
    chemicals: [
      "Specialty Emulsifiers",
      "Custom Ethoxylates",
      "Tridecyl Salicylate",
      "Phosphorous Intermediates",
      "Specialty Ingredients",
    ],
    relatedProducts: ["oleo-derivatives", "various-mole-ethoxylates", "phosphorous", "fatty-esters"],
  },
];

export const applicationsData: Application[] = defs.map((d) => ({
  ...d,
  slug: slugify(d.name),
  image: applicationImages[d.name] ?? "/images/brand/banner1.webp",
}));

export const sectors = [
  "Personal Care & Pharma",
  "Coatings & Polymers",
  "Industrial & Manufacturing",
  "Infrastructure & Energy",
  "Food & Agro",
  "Specialty & Fine Chemicals",
] as const;

export function getApplication(slug: string): Application | undefined {
  return applicationsData.find((a) => a.slug === slug);
}

export function applicationsBySector(sector: string): Application[] {
  return applicationsData.filter((a) => a.sector === sector);
}
