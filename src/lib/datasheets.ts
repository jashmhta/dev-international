// Auto-generated from Dev International technical datasheets (PDF extraction).
// Each entry is a full on-page rendering of the corresponding PDF datasheet.

export type DatasheetRow = { parameter: string; value: string };

export type DatasheetSection = {
  heading: string;
  rows: DatasheetRow[];
  paragraphs: string[];
};

export type Datasheet = {
  slug: string;
  name: string;
  family: string;
  pdf: string;
  packing: string;
  certifications: string;
  originNotes: string;
  broadUses: string;
  sections: DatasheetSection[];
};

export const datasheets: Record<string, Datasheet> = {
  "sophorolipid": {
    slug: "sophorolipid",
    name: "Sophorolipid",
    family: "oleo-derivatives",
    pdf: "/pdfs/Sophorolipid.pdf",
    packing: "",
    certifications: "",
    originNotes: "natural preservative based on green manufacturing process and natural raw material",
    broadUses: "Skin care, Hair Care, Colour Cosmetics, Home Care, Agriculture",
    sections: [
    {
      heading: "Sophorolipid Product Details",
      rows: [
        { parameter: "Chemical Name/ INCI Name", value: "Sophorolipid" },
        { parameter: "Functionality", value: "Enhances Colour & Fragrance, Synergic effect in Mixed Surfactants, Forms Micro & Nano Emulsion" },
        { parameter: "Features", value: "Completely Biodegradable, Possess Broad Antimicrobial Character, Solubilisier, Emulsion Stabiliser" },
        { parameter: "Industry/ Application Categories", value: "Skin care, Hair Care, Colour Cosmetics, Home Care, Agriculture" }
      ],
      paragraphs: [],
    },
    {
      heading: "GINOGUARD GP Product Details",
      rows: [
        { parameter: "Chemical Name/ INCI Name", value: "GINOGUARD GP (Mixed Glycerides & Sophorolipids)" },
        { parameter: "Functionality", value: "Antimicrobial & emoliency" },
        { parameter: "Features", value: "Broad Base Natural Preservative" },
        { parameter: "Industry/ Application Categories", value: "Skin care, Hair Care, Colour Cosmetics, Home Care" }
      ],
      paragraphs: ["GINOGUARD GP is natural preservative based on green manufacturing process and natural raw material"],
    }
    ],
  },
  "speciality-emulsifiers": {
    slug: "speciality-emulsifiers",
    name: "Speciality Emulsifiers",
    family: "oleo-derivatives",
    pdf: "/pdfs/Speciality Emulsifiers.pdf",
    packing: "",
    certifications: "",
    originNotes: "",
    broadUses: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Textile, Home Care, Mascaras, Eyeliner, Kohl Stick",
    sections: [
    {
      heading: "Product Comparison Table",
      rows: [
        { parameter: "Ceteareth-12", value: "Nature of Emulsifier: Oil in Water with Mild Detergency; Application & Functionality: Emulsifier in O/W emulsions, stable at Low pH; Texture: Light to Medium; Usage Level: Usage 3% to 7%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Body Care" },
        { parameter: "Ceteareth-20", value: "Nature of Emulsifier: Oil in Water; Application & Functionality: Emulsifier & Emollient Stabilizer in O/W emulsions like Hair Cream, Skin Cream, Lotions; Texture: Light to Medium; Usage Level: Usage 1% to 6%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care" },
        { parameter: "Ceteareth-25", value: "Nature of Emulsifier: Oil in Water; Application & Functionality: Surfactant, Solubilizing agent, Thickener used in Hair Cream, Skin Cream, Lotions; Texture: Light to Medium; Usage Level: Usage 1% to 5%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Textile, Home Care" },
        { parameter: "Ceteareth - 30", value: "Nature of Emulsifier: Oil in Water; Application & Functionality: Surfactant, Solubilizing agent, Thickener used in Hair Cream, Skin Cream, Lotions; Texture: Light to Medium; Usage Level: Usage 1% to 5%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care" },
        { parameter: "Ceteareth -50", value: "Nature of Emulsifier: Oil in Water; Application & Functionality: Emulsifier, Thickner, Stabiliser; Texture: Light to Medium; Usage Level: Usage 2% to 4%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Textile" },
        { parameter: "Ceteareth -80", value: "Nature of Emulsifier: Oil in Water; Application & Functionality: Surfactant & Emulsifier; Texture: Light to Medium; Usage Level: Usage 2% to 4%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Textile" },
        { parameter: "Steareth-2", value: "Nature of Emulsifier: Water in Oil; Application & Functionality: Emulsifier & Co-Emulsifier, Dispersant, Stable at extreme pH; Texture: Medium to Heavy; Usage Level: Usage 0.5% to 5%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care" },
        { parameter: "Steareth-20", value: "Nature of Emulsifier: Water in Oil; Application & Functionality: Cleansing agent, Surfactant and emulsifier used in anti-ageing creams, eye creams; Texture: Medium to Heavy; Usage Level: Usage 0.5% to 5%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care" },
        { parameter: "Steareth - 21", value: "Nature of Emulsifier: Water in Oil; Application & Functionality: Emulsifier; Texture: Medium to Heavy; Usage Level: Usage 0.5% to 5%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care" },
        { parameter: "Behenyl Alcohol based Ethoxylate", value: "Nature of Emulsifier: Water in Oil; Application & Functionality: Hair Color, Hair Conditioner; Texture: Heavy, slippery; Usage Level: Usage 0.5 % to 4%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Mascaras, Eyeliner, Kohl Stick" },
        { parameter: "Behenyl Alcohol based Ethoxylate", value: "Nature of Emulsifier: Water in Oil; Application & Functionality: Hair Color, Hair Conditioner; Texture: Heavy, slippery; Usage Level: Usage 0.5 % to 4%; Industry / Application Categories: Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Mascaras, Eyeliner, Kohl Stick" }
      ],
      paragraphs: [],
    }
    ],
  },
  "speciality-ingredients": {
    slug: "speciality-ingredients",
    name: "Speciality Ingredients",
    family: "oleo-derivatives",
    pdf: "/pdfs/Speciality ingredients.pdf",
    packing: "",
    certifications: "",
    originNotes: "Natural Index: (BCI = 0 to 100) No leaf (BCI = 0), One leaf (BCI = < 20) , Two Leaf (BCI = 20 to 40), Three Leaf (BCI=40 - 60), Four leaf (BCI = 60-80), Five leaf (BCI=80-100) Maximum Index - 5 leaves - 100% Natural RM base product Min - NO Leaf means no natural RM used",
    broadUses: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Home Care",
    sections: [
    {
      heading: "Natural Index Legend",
      rows: [
        
      ],
      paragraphs: ["Natural Index: (BCI = 0 to 100) No leaf (BCI = 0), One leaf (BCI = < 20) , Two Leaf (BCI = 20 to 40), Three Leaf (BCI=40 - 60), Four leaf (BCI = 60-80), Five leaf (BCI=80-100) Maximum Index - 5 leaves - 100% Natural RM base product Min - NO Leaf means no natural RM used"],
    },
    {
      heading: "Propriety Product (Row 1)",
      rows: [
        { parameter: "Chemical Name/INCI Name", value: "Propriety Product" },
        { parameter: "Functionality", value: "Palm Free, Can absorb Quickly Oil as well as Actives." },
        { parameter: "Features", value: "Gives Smooth Powdery Feel, Imparts Skin Moisturisation" },
        { parameter: "Incorporation Level", value: "Usage level- 3% to 7%" },
        { parameter: "Natural Index", value: "Four leaf (BCI = 60-80)" },
        { parameter: "Industry / Application Categories", value: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "Propriety Product (Row 2)",
      rows: [
        { parameter: "Chemical Name/INCI Name", value: "Propriety Product" },
        { parameter: "Functionality", value: "Greater Oil Deposition making Skin & hair Conditioned" },
        { parameter: "Features", value: "Emulsifying & Conditioning Wax, Anti Ageing Preparations, Hair Relaxers, Depilatories, Sunscreen Preparation" },
        { parameter: "Incorporation Level", value: "Usage level- 3% to 7%" },
        { parameter: "Natural Index", value: "Four leaf (BCI = 60-80)" },
        { parameter: "Industry / Application Categories", value: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "Polyethylene Glycol 7 Glyceryl Cocoate",
      rows: [
        { parameter: "Chemical Name/INCI Name", value: "Polyethylene Glycol 7 Glyceryl Cocoate" },
        { parameter: "Functionality", value: "Emollient , Emulsifier, Solubiliser for Oil & Actives" },
        { parameter: "Features", value: "Cleansers, Bath Preparations, Sun Care Preparations, Color Cosmetics like Lipstick, Mossue, Foudations." },
        { parameter: "Incorporation Level", value: "Usage Level- 1% to 5%" },
        { parameter: "Natural Index", value: "Three Leaf (BCI = 40 - 60)" },
        { parameter: "Industry / Application Categories", value: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "Glyceryl Stearate (and) PEG-100 Stearate",
      rows: [
        { parameter: "Chemical Name/INCI Name", value: "Glyceryl Stearate (and) PEG-100 Stearate" },
        { parameter: "Functionality", value: "Self Emulsifying Non Ionic Emulsifier, Acid Stable, Opacifier, Wetting Agent" },
        { parameter: "Features", value: "Creams & Lotions that are rich in non polar oils & waxes, Shampoos, Face Wash, Hand Wash." },
        { parameter: "Incorporation Level", value: "Usage Level- 3% to 5%" },
        { parameter: "Natural Index", value: "One leaf (BCI = < 20)" },
        { parameter: "Industry / Application Categories", value: "Hair Care, Body Care" }
      ],
      paragraphs: [],
    }
    ],
  },
  "secondary-ingredients": {
    slug: "secondary-ingredients",
    name: "Secondary Ingredients",
    family: "oleo-derivatives",
    pdf: "/pdfs/Secondary ingredients.pdf",
    packing: "",
    certifications: "",
    originNotes: "",
    broadUses: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Home Care",
    sections: [
    {
      heading: "Viscosity Modifiers",
      rows: [
        { parameter: "Coco Diethanolamide (CDEA)", value: "Application: Foam booster and viscosity Modifier; Functionality: Cleansing Products as a stabilizer & Thickening agents; Industry: Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Home Care" },
        { parameter: "Coco Monoethanolamide (CMEA)", value: "Application: Foam booster and viscosity Modifier; Functionality: Viscosity builder in Cleansing Products.; Industry: Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "LA Ethoxylates - This category extents to LA 4/5/9",
      rows: [
        { parameter: "Laureth - 2", value: "Application: Emulsifier; Functionality: Viscosity builder; Industry: Home Care" },
        { parameter: "Laureth - 7", value: "Application: Emulsifier; Functionality: Surfactant, Stable in both aqueous acidic and alkaline solutions; Industry: Home Care" },
        { parameter: "Laureth 23", value: "Application: Emulsifier; Functionality: Emulsifier; Industry: Home Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "Pearlizing Agent",
      rows: [
        { parameter: "Ethylene Glycol Mono stearate (EGMS)", value: "Application: Pearlizing Agent; Functionality: Rinse off formulation; Industry: Skin Care (Face Care & Cosmetics), Hair Care, Body Care, Home Care" },
        { parameter: "Ethylene Glycol Distearate (EGDS)", value: "Application: Pearlizing Agent; Functionality: Rinse off formulation; Industry: Hair Care, Body Care, Home Care" }
      ],
      paragraphs: [],
    }
    ],
  },
  "hair-colour-protection-molecule": {
    slug: "hair-colour-protection-molecule",
    name: "Hair Colour Protection Molecule",
    family: "oleo-derivatives",
    pdf: "/pdfs/Hair Colour Protection Molecule.pdf",
    packing: "",
    certifications: "",
    originNotes: "100% Natural RM base product",
    broadUses: "Hair Care",
    sections: [
    {
      heading: "Product Specifications",
      rows: [
        { parameter: "Chemical Name/ INCI Name", value: "Propriety Product" },
        { parameter: "Functionality", value: "Color Protector Molecule plus conditioners" },
        { parameter: "Features", value: "Contribute to viscosity, 100% purity , Can be used in extreme pH range, Easy to rinse off from the hair" },
        { parameter: "Incorporation Level", value: "Usage level- 0.5% to3%" },
        { parameter: "Natural Index: (BCI = 0 to 100) No leaf (BCI =0), One leaf (BCI = < 20) , Two Leaf (BCI = 20 to 40), Three Leaf (BCI=40 - 60), Four leaf (BCI = 60-80), Five leaf (BCI=80-100) Maximum Index - 5 leaves - 100% Natural RM base product Min - NO Leaf means no natural RM used", value: "Five leaf" },
        { parameter: "INDUSTRY / APPLICATION CATEGORIES - Skin Care (Face Care & Cosmetics)", value: "" },
        { parameter: "INDUSTRY / APPLICATION CATEGORIES - Hair Care", value: "Checked" },
        { parameter: "INDUSTRY / APPLICATION CATEGORIES - Body Care", value: "" },
        { parameter: "INDUSTRY / APPLICATION CATEGORIES - Home Care", value: "" }
      ],
      paragraphs: [],
    }
    ],
  },
  "preservatives-antimicrobials-biocides": {
    slug: "preservatives-antimicrobials-biocides",
    name: "Preservatives, Antimicrobials and Biocides",
    family: "oleo-derivatives",
    pdf: "/pdfs/Preservative - Antimicrobials - Biocides.pdf",
    packing: "",
    certifications: "",
    originNotes: "",
    broadUses: "Personal Care (Leave On and Rinse Off applications), Home Care, Other Industrial Application",
    sections: [
    {
      heading: "Product Portfolio",
      rows: [
        { parameter: "Phenoxyethanol", value: "Features: Free Phenol 150 ppm; Functionality: Preservative; Applications: Personal Care - Leave On applications, Personal Care - Rinse Off Application" },
        { parameter: "Phenoxyethanol", value: "Features: Free Phenol 25 ppm; Functionality: Preservative; Applications: Personal Care - Leave On applications, Personal Care - Rinse Off Application" },
        { parameter: "Phenoxyethanol", value: "Features: Free Phenol 10 ppm; Functionality: Preservative; Applications: Personal Care - Leave On applications, Personal Care - Rinse Off Application" },
        { parameter: "Phenoxyethanol", value: "Features: Free Phenol 5 ppm; Functionality: Preservative; Applications: Personal Care - Leave On applications, Personal Care - Rinse Off Application" },
        { parameter: "Mixed Glycerides & Sophorolipids", value: "Features: Antimicrobail & emolliency; Functionality: Broad Base Natural Preservative; Applications: Personal Care - Leave On applications, Personal Care - Rinse Off Application, Home Care, Other Industrial Application" },
        { parameter: "Benzalkonium Chloride", value: "Features: Antimicrobial & Surfactant; Functionality: Biocide, Bactericide; Applications: Personal Care - Leave On applications, Home Care, Other Industrial Application" },
        { parameter: "Benzalkonium Chloride", value: "Features: Antimicrobial & Surfactant; Functionality: Biocide, Bactericide; Applications: Personal Care - Leave On applications, Home Care, Other Industrial Application" }
      ],
      paragraphs: [],
    }
    ],
  },
  "mild-surfactants": {
    slug: "mild-surfactants",
    name: "Mild Surfactants",
    family: "oleo-derivatives",
    pdf: "/pdfs/Mild Surfactants.pdf",
    packing: "",
    certifications: "",
    originNotes: "",
    broadUses: "Skin Care - Face wash, Make up remover, Hair Care - Shampoo, Body Wash, Baby Care, Home Care",
    sections: [
    {
      heading: "Industry / Application Categories",
      rows: [
        { parameter: "Coco Amido Propyl Betaine (CAPB)", value: "Functionality: Foam Booster, Thickener, Stabilizer; Industry / Application Categories: Skin Care - Face wash, Make up remover, Hair Care - Shampoo, Body Wash, Baby Care, Home Care" },
        { parameter: "Disodium Laureth Sulfosuccinate (DELSS)", value: "Functionality: Mild Anionic Surfactant (Liquid); Industry / Application Categories: Skin Care - Face wash, Make up remover, Hair Care - Shampoo, Body Wash, Baby Care" },
        { parameter: "Disodium Lauryl Sulfosuccinate (DLSS)", value: "Functionality: Mild Anionic Surfactant (Powder); Industry / Application Categories: Skin Care - Face wash, Make up remover, Hair Care - Shampoo, Body Wash, Baby Care" },
        { parameter: "Sodium Lauryl Sulfoacetate", value: "Functionality: Mild Anionic Surfactant (Powder); Industry / Application Categories: Skin Care - Face wash, Make up remover, Hair Care - Shampoo, Body Wash, Baby Care, Home Care" },
        { parameter: "Lauryl amine oxide", value: "Functionality: Secondary Surfactant; Industry / Application Categories: Home Care" }
      ],
      paragraphs: [],
    }
    ],
  },
  "lauric-acid": {
    slug: "lauric-acid",
    name: "Lauric Acid",
    family: "fatty-acids",
    pdf: "/pdfs/Lauric Acid.pdf",
    packing: "25 Kg HDPE/PP Laminated bags having LDPE liner.",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE - BSE free.",
    broadUses: "Personal Care & Cosmetics, Fabric Care & Industrial Surfactants.",
    sections: [
    {
      heading: "Carbon Chain Distribution by GC (%)",
      rows: [
        { parameter: "C10 & Below", value: "1.0 max" },
        { parameter: "C12", value: "99.0 Max" },
        { parameter: "C14", value: "1.0 Max" }
      ],
      paragraphs: [],
    },
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "Small white free flowing flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 5.25\" Lovibond Cell - Red", value: "0.2 Max" },
        { parameter: "Colour 5.25\" Lovibond Cell - Yellow", value: "1.0 Max" },
        { parameter: "Titre °C", value: "43.0 Min" },
        { parameter: "Acid Value, mgm KOH/gm", value: "279.50 - 281.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "0.20 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "280.00 - 282.00" }
      ],
      paragraphs: [],
    }
    ],
  },
  "myristic-acid": {
    slug: "myristic-acid",
    name: "Myristic Acid",
    family: "fatty-acids",
    pdf: "/pdfs/Myristic Acid.pdf",
    packing: "25 Kg HDPE/PP Laminated bags having LDPE liner.",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE - BSE free.",
    broadUses: "Personal Care & Cosmetics, Fabric Care & Industrial Surfactants.",
    sections: [
    {
      heading: "Carbon Chain Distribution by GC (%)",
      rows: [
        { parameter: "C12", value: "1.0 max" },
        { parameter: "C14", value: "99.0 Min" },
        { parameter: "C16", value: "1.0 Max" }
      ],
      paragraphs: [],
    },
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "Small white free flowing flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 5.25\" Lovibond Cell - Red", value: "0.5 Max" },
        { parameter: "Colour 5.25\" Lovibond Cell - Yellow", value: "2.0 Max" },
        { parameter: "Titre °C", value: "53.0 - 55.0" },
        { parameter: "Acid Value, mgm KOH/gm", value: "244.00 - 246.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "0.20 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "245.00 - 247.00" }
      ],
      paragraphs: [],
    }
    ],
  },
  "palmitic-acid": {
    slug: "palmitic-acid",
    name: "Palmitic Acid",
    family: "fatty-acids",
    pdf: "/pdfs/Palmitc Acid.pdf",
    packing: "25 Kg HDPE/PP Laminated bags having LDPE liner & Bulk in containers",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE-BSE free.",
    broadUses: "",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "C14 & Lowers", value: "2.0 Max" },
        { parameter: "C16", value: "90.0 Min" },
        { parameter: "C18 (Total)", value: "10.0 Max" },
        { parameter: "Appearance", value: "White free flowing flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 5.25\" Lovibond Cell - Red", value: "1.0 Max" },
        { parameter: "Colour 5.25\" Lovibond Cell - Yellow", value: "5.0 Max" },
        { parameter: "Titre OC", value: "59.0 - 65.0" },
        { parameter: "Acid Value, mgm KOH/gm", value: "216.00 - 221.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "10.0 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "217.00 - 222.00" }
      ],
      paragraphs: ["Carbon Chain Distribution by GC (%)"],
    }
    ],
  },
  "behenic-acid": {
    slug: "behenic-acid",
    name: "Behenic Acid",
    family: "fatty-acids",
    pdf: "/pdfs/Behenic Acid.pdf",
    packing: "25 Kg HDPE/PP laminated bags, 500 Kg HDPE Laminated bags, Stainless Steel /ISO tank.",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE - BSE free.",
    broadUses: "Personal Care & Cosmetics, Fabric Care & Industrial Surfactants.",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Carbon Chain Distribution by GC (%) - C18 & Below", value: "5.0 Max" },
        { parameter: "Carbon Chain Distribution by GC (%) - C20", value: "12.0 Max" },
        { parameter: "Carbon Chain Distribution by GC (%) - C22", value: "85.0 Min" },
        { parameter: "Carbon Chain Distribution by GC (%) - C22 1=", value: "1.0 Max" },
        { parameter: "Carbon Chain Distribution by GC (%) - C24 & Above", value: "5.0 Max" },
        { parameter: "Appearance", value: "White free flowing flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 5.25\" Lovibond Cell - Red", value: "1.0 Max" },
        { parameter: "Colour 5.25\" Lovibond Cell - Yellow", value: "3.0 Max" },
        { parameter: "Titre °C", value: "74.0 Min" },
        { parameter: "Acid Value, mgm KOH/gm", value: "161.00 - 169.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "1.0 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "162.00 - 170.00" }
      ],
      paragraphs: [],
    }
    ],
  },
  "distilled-coconut-fatty-acid": {
    slug: "distilled-coconut-fatty-acid",
    name: "Distilled Coconut Fatty Acid",
    family: "fatty-acids",
    pdf: "/pdfs/Distilled coconut fatty acid.pdf",
    packing: "105 Kg HDPE Carboy & Stainless Steel Tank",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE-BSE free.",
    broadUses: "Personal Care & Cosmetics, Fabric Care & Industrial Surfactants.",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "C8", value: "2.0 Max" },
        { parameter: "C10", value: "4.0 Max" },
        { parameter: "C12", value: "45.0 Min" },
        { parameter: "C14", value: "18.0 Max" },
        { parameter: "C16", value: "12.0 Max" },
        { parameter: "C18", value: "4.0 Max" },
        { parameter: "C18¹=", value: "15.0 Max" },
        { parameter: "C18²=", value: "3.0 Max" },
        { parameter: "Appearance", value: "Pale yellow colour liquid @ 30°C" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 1\" Lovibond Cell - Red", value: "0.5 Max" },
        { parameter: "Colour 1\" Lovibond Cell - Yellow", value: "2.5 Max" },
        { parameter: "Titre °C", value: "23.0 - 29.0" },
        { parameter: "Acid Value, mgm KOH/gm", value: "250.00 Min" },
        { parameter: "Iodine Value, g I2/100gms", value: "21.0 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "251.00 Min" },
        { parameter: "% Moisture", value: "0.20 Max" }
      ],
      paragraphs: ["Carbon Chain Distribution by GC (%)"],
    }
    ],
  },
  "stearic-acid-60": {
    slug: "stearic-acid-60",
    name: "Stearic Acid 60%",
    family: "stearic-acid",
    pdf: "/pdfs/Stearic Acid 60%.pdf",
    packing: "25 Kg HDPE/PP Laminated bags having LDPE liner",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE-BSE free.",
    broadUses: "Personal Care & Cosmetics, Textile Axiliaries, Fabric Care & Industrial Surfactants",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "C12", value: "1.0 Max" },
        { parameter: "C14", value: "3.0 Max" },
        { parameter: "C16", value: "20.0 - 35.0" },
        { parameter: "C18", value: "65.0 - 80.0" },
        { parameter: "C181=", value: "3.0 Max" },
        { parameter: "C20", value: "3.0 Max" },
        { parameter: "C22", value: "1.0 Max" },
        { parameter: "C221=", value: "0.5 Max" },
        { parameter: "Appearance", value: "White free flowing flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 5.25\" Lovibond Cell - Red", value: "1.0 Max" },
        { parameter: "Colour 5.25\" Lovibond Cell - Yellow", value: "3.0 Max" },
        { parameter: "Titre °C", value: "61.0 - 65.0" },
        { parameter: "Acid Value, mgm KOH/gm", value: "196.00 - 203.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "3.00 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "197.00 - 204.00" }
      ],
      paragraphs: ["Carbon Chain Distribution by GC (%)"],
    }
    ],
  },
  "stearic-acid-70": {
    slug: "stearic-acid-70",
    name: "Stearic Acid 70%",
    family: "stearic-acid",
    pdf: "/pdfs/Stearic Acid 70%.pdf",
    packing: "25 Kg HDPE/PP Laminated bags",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE - BSE free.",
    broadUses: "Personal Care & Cosmetics, Plastic, coatings & Inks, Textile Axillaries, Fabric Care & Industrial Surfactants, Lubricants & Greases",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "C12", value: "1.0 Max" },
        { parameter: "C14", value: "3.0 Max" },
        { parameter: "C16", value: "30.0 - 40.0" },
        { parameter: "C18", value: "60.0 - 70.0" },
        { parameter: "C181=", value: "3.0 Max" },
        { parameter: "C20", value: "3.0 Max" },
        { parameter: "C221=", value: "0.5 Max" },
        { parameter: "Appearance", value: "White free flowing flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 5.25\" Lovibond Cell - Red", value: "1.0 Max" },
        { parameter: "Colour 5.25\" Lovibond Cell - Yellow", value: "3.0 Max" },
        { parameter: "Titre °C", value: "58.0 - 62.0" },
        { parameter: "Acid Value, mgm KOH/gm", value: "200.00 - 207.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "3.00 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "201.0 - 208.00" }
      ],
      paragraphs: ["Carbon Chain Distribution by GC (%)"],
    }
    ],
  },
  "stearic-acid-90": {
    slug: "stearic-acid-90",
    name: "Stearic Acid 90%",
    family: "stearic-acid",
    pdf: "/pdfs/Stearic Acid 90%.pdf",
    packing: "25 Kg HDPE/PP Laminated bags having LDPE liner",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE - BSE free.",
    broadUses: "Personal Care & Cosmetics",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "C16 & Below", value: "8.0 Max" },
        { parameter: "C18", value: "90.0 Min" },
        { parameter: "C18:1=", value: "3.0 Max" },
        { parameter: "C20", value: "3.0 Max" },
        { parameter: "C22", value: "1.0 Max" },
        { parameter: "Appearance", value: "White free flowing flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 5.25\" Lovibond Cell - Red", value: "1.0 Max" },
        { parameter: "Colour 5.25\" Lovibond Cell - Yellow", value: "3.0 Max" },
        { parameter: "Titre °C", value: "65.0 - 68.0" },
        { parameter: "Acid Value, mgm KOH/gm", value: "195.00 - 200.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "3.00 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "196.00 - 201.00" }
      ],
      paragraphs: ["Carbon Chain Distribution by GC (%)"],
    }
    ],
  },
  "commercial-grade-stearic-acid": {
    slug: "commercial-grade-stearic-acid",
    name: "Commercial Grade Stearic Acid",
    family: "stearic-acid",
    pdf: "/pdfs/Commercial Grade Stearic Acid.pdf",
    packing: "25 Kg HDPE /PP Laminated bags.",
    certifications: "ISO 9001, 14001, 18001/45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE-BSE free.",
    broadUses: "Rubber & Tyres, Plastic, Coatings & Inks, Textile Axiliaries, Surfactants, Lubricants & Greases",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Carbon Chain Distribution by GC (%)", value: "VARIABLE" },
        { parameter: "Appearance", value: "White free flowing flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 5.25\" Lovibond Cell - Red", value: "2.0 Max" },
        { parameter: "Colour 5.25\" Lovibond Cell - Yellow", value: "10.0 Max" },
        { parameter: "Titre °C", value: "54.0 - 61.0" },
        { parameter: "Acid Value, mgm KOH/gm", value: "200.00 - 215.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "4.0 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "201.00 - 216.00" }
      ],
      paragraphs: [],
    }
    ],
  },
  "rubber-grade-stearic-acid": {
    slug: "rubber-grade-stearic-acid",
    name: "Rubber Grade Stearic Acid",
    family: "stearic-acid",
    pdf: "/pdfs/Rubber Grade Stearic Acid.pdf",
    packing: "25 Kg HDPE/PP Laminated bags , ISO tanks",
    certifications: "ISO 9001, 14001, 18001/45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE-BSE free.",
    broadUses: "Rubber & Tyres",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Carbon Chain Distribution by GC (%)", value: "VARIABLE" },
        { parameter: "Appearance", value: "Light cream to brown flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 1\" Lovibond Cell - Red", value: "20.0 Max" },
        { parameter: "Colour 1\" Lovibond Cell - Yellow", value: "80.0 Max" },
        { parameter: "Titre °C", value: "50.0 - 64.0" },
        { parameter: "Acid Value, mgm KOH/gm", value: "195.00 - 210.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "9.0 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "196.00 - 215.00" },
        { parameter: "% Moisture", value: "0.5 Max" },
        { parameter: "% Ash", value: "0.1 Max" }
      ],
      paragraphs: [],
    }
    ],
  },
  "stearic-acid-cosmetic-grade": {
    slug: "stearic-acid-cosmetic-grade",
    name: "Stearic Acid, Cosmetic Grade",
    family: "stearic-acid",
    pdf: "/pdfs/Stearic Acid - Cosmetic Grade.pdf",
    packing: "25 Kg HDPE/PP Laminated bags having LDPE liner",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE-BSE free.",
    broadUses: "Personal Care & Cosmetics, Fabric Care & Industrial Surfactants",
    sections: [
    {
      heading: "Specifications:",
      rows: [
        { parameter: "C12", value: "1.0 Max" },
        { parameter: "C14", value: "3.0 max" },
        { parameter: "C16", value: "50 - 60" },
        { parameter: "C18", value: "40 - 50" },
        { parameter: "C18 1=", value: "3.0 Max" },
        { parameter: "C20", value: "1.5 Max" },
        { parameter: "Appearance", value: "White free flowing flakes" },
        { parameter: "Odour", value: "Characteristic" },
        { parameter: "Colour 5.25\" Lovibond Cell - Red", value: "0.5 Max" },
        { parameter: "Colour 5.25\" Lovibond Cell - Yellow", value: "2.0 Max" },
        { parameter: "Titre °C", value: "54.0 - 56.0" },
        { parameter: "Acid Value, mgm KOH/gm", value: "208.00 - 210.00" },
        { parameter: "Iodine Value, g I2/100gms", value: "3.00 Max" },
        { parameter: "Saponification Value, mgm KOH/gm", value: "209.00 - 211.00" }
      ],
      paragraphs: ["Carbon Chain Distribution by GC (%)"],
    }
    ],
  },
  "cetyl-alcohol-99": {
    slug: "cetyl-alcohol-99",
    name: "Cetyl Alcohol 99%",
    family: "fatty-alcohol",
    pdf: "/pdfs/Cetyl Alcohol 99%.pdf",
    packing: "25 Kgs. Nett in HDPE Laminated Preprinted / Plain Paper Bags with Poly Liner, 300 & 500 Kg. Jumbo Bags or 20 Kgs. Preprinted / Plain Plastic Bags or available in ISO Tanks.",
    certifications: "ISO 9001,14001,18001 certified, Halal & Kosher Certified",
    originNotes: "Vegetable Origin, Non GMO, TSE BSE Free",
    broadUses: "Personal Care, pharmaceuticals, coatings",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Carbon Chain Distribution by GLC (%) C14", value: "1.0 Max" },
        { parameter: "Carbon Chain Distribution by GLC (%) C16", value: "99.0 Min" },
        { parameter: "Carbon Chain Distribution by GLC (%) C18", value: "1.0 Max" },
        { parameter: "Appearance", value: "Fused / Flakes / Pastilles" },
        { parameter: "Hydrocarbons (% BY WT)", value: "0.5 Max." },
        { parameter: "Moisture (% BY WT)", value: "0.10 Max. (Fused) 0.15 Max. (Flakes / Pastilles)" },
        { parameter: "Acid Value", value: "0.05 Max." },
        { parameter: "Saponification Value", value: "0.20 Max." },
        { parameter: "Iodine Value", value: "0.20 Max." },
        { parameter: "Avg. Molecular Weight", value: "238 - 246" },
        { parameter: "Hydroxyl Value", value: "227 - 235" },
        { parameter: "Solidification Range (°C)", value: "47 - 50" },
        { parameter: "Flash Point (°C)", value: "Ca 175" },
        { parameter: "Density (GMS/CC) @ 60 °C", value: "0.805 - 0.815" },
        { parameter: "Colour (APHA)", value: "10 Max." },
        { parameter: "Boiling Range (°C)", value: "305 - 320" },
        { parameter: "Carbonyl Value (as PPM CO)", value: "50 Max" }
      ],
      paragraphs: [],
    }
    ],
  },
  "ceto-stearyl-alcohol-50-50": {
    slug: "ceto-stearyl-alcohol-50-50",
    name: "Ceto-Stearyl Alcohol 50:50",
    family: "fatty-alcohol",
    pdf: "/pdfs/Ceto - Stearyl Alcohol 50-50.pdf",
    packing: "25 Kgs. Nett in HDPE Laminated Preprinted Paper Bags with Poly Liner or 7 Ply Corrugated Folding Box with Poly Liner, 20 Kg. Plastic Bags or available in ISO Tanks",
    certifications: "ISO 9001,14001,18001 certified, Halal & Kosher Certified",
    originNotes: "Vegetable Origin, Non GMO, TSE BSE Free",
    broadUses: "Personal Care, Coatings, agrochemicals, pharmaceuticals",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Carbon Chain Distribution by GLC (%) C12", value: "0.50 Max" },
        { parameter: "Carbon Chain Distribution by GLC (%) C14", value: "2.0 Max" },
        { parameter: "Carbon Chain Distribution by GLC (%) C16", value: "45-55" },
        { parameter: "Carbon Chain Distribution by GLC (%) C18", value: "45-55" },
        { parameter: "Carbon Chain Distribution by GLC (%) C20", value: "2.0 Max" },
        { parameter: "Appearance", value: "Pastilles / Flakes / Fused" },
        { parameter: "Hydrocarbons (% BY WT)", value: "0.5 Max." },
        { parameter: "Moisture (% BY WT)", value: "0.10 Max. (Fused) 0.30 Max. (Flakes/Pastilles)" },
        { parameter: "Acid Value", value: "0.2 Max." },
        { parameter: "Saponification Value", value: "0.4 Max." },
        { parameter: "Iodine Value", value: "0.25 Max." },
        { parameter: "Avg. Molecular Weight", value: "249 - 267" },
        { parameter: "Hydroxyl Value", value: "210 - 225" },
        { parameter: "Solidification Range (°C)", value: "48 - 52" },
        { parameter: "Flash Point (°C)", value: "Ca. 170" },
        { parameter: "Density (GMS/CC) @ 60 °C", value: "0.805 - 0.815" },
        { parameter: "Colour (APHA)", value: "10 Max." },
        { parameter: "Boiling Range (°C)", value: "310 - 360" }
      ],
      paragraphs: [],
    }
    ],
  },
  "ceto-stearyl-alcohol-ps": {
    slug: "ceto-stearyl-alcohol-ps",
    name: "Ceto-Stearyl Alcohol PS",
    family: "fatty-alcohol",
    pdf: "/pdfs/Ceto - Stearyl Alcohol PS.pdf",
    packing: "25 Kgs. Nett in HDPE Laminated Preprinted Paper Bags with Poly Liner or 7 Ply Corrugated Folding Box with Poly Liner, 20 Kg. Plastic Bags or available in ISO Tanks",
    certifications: "ISO 9001,14001,18001 certified, Halal & Kosher Certified",
    originNotes: "Vegetable Origin, Non GMO, TSE BSE Free",
    broadUses: "Personal Care, Coatings, agrochemicals, pharmaceuticals",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "C12", value: "0.5 Max" },
        { parameter: "C14", value: "2.0 Max" },
        { parameter: "C16", value: "55-65" },
        { parameter: "C18", value: "35-45" },
        { parameter: "C20", value: "2.0 Max" },
        { parameter: "Appearance", value: "Pastilles / Flakes / Fused" },
        { parameter: "Hydrocarbons (% BY WT)", value: "0.5 Max." },
        { parameter: "Moisture (% BY WT)", value: "0.10 Max. (Fused) 0.30 Max. (Flakes/Pastilles)" },
        { parameter: "Acid Value", value: "0.20 Max." },
        { parameter: "Saponification Value", value: "0.40 Max." },
        { parameter: "Iodine Value", value: "0.25 Max." },
        { parameter: "Avg. Molecular Weight", value: "246 - 257" },
        { parameter: "Hydroxyl Value", value: "218 - 228" },
        { parameter: "Solidification Range (°C)", value: "47 - 51" },
        { parameter: "Flash Point (°C)", value: "Ca. 160" },
        { parameter: "Density (GMS/CC) @ 60 °C", value: "0.805 - 0.815" },
        { parameter: "Colour (APHA)", value: "10 Max." },
        { parameter: "Boiling Range (°C)", value: "305 - 355" }
      ],
      paragraphs: ["Carbon Chain Distribution by GLC (%)"],
    }
    ],
  },
  "stearyl-alcohol-95": {
    slug: "stearyl-alcohol-95",
    name: "Stearyl Alcohol 95%",
    family: "fatty-alcohol",
    pdf: "/pdfs/Stearyl Alcohol 95%.pdf",
    packing: "25 Kgs. Nett in HDPE Laminated Preprinted / Plain Paper Bags with Poly Liner, 300 & 500 Kg. Jumbo Bags or 20 Kgs. Preprinted / Plain Plastic Bags or available in ISO Tanks.",
    certifications: "ISO 9001,14001,18001 certified, Halal & Kosher Certified",
    originNotes: "Vegetable Origin, Non GMO, TSE BSE Free",
    broadUses: "Personal Care, pharmaceuticals, coatings, agrochemicals",
    sections: [
    {
      heading: "Carbon Chain Distribution by GLC (%)",
      rows: [
        { parameter: "C14", value: "0.5 Max" },
        { parameter: "C16", value: "5.0 Max" },
        { parameter: "C18", value: "95.0 Min" },
        { parameter: "C20", value: "2.0 Max" },
        { parameter: "C22", value: "0.2 Max" }
      ],
      paragraphs: [],
    },
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "Flakes / Fused / Pastilles" },
        { parameter: "Hydrocarbons (% BY WT)", value: "0.5 Max." },
        { parameter: "Moisture (% BY WT)", value: "0.10 Max. (Fused) 0.15 Max. (Flakes / Pastilles)" },
        { parameter: "Acid Value", value: "0.1 Max." },
        { parameter: "Saponification Value", value: "0.3 Max." },
        { parameter: "Iodine Value", value: "0.3 Max." },
        { parameter: "Avg. Molecular Weight", value: "267 - 280" },
        { parameter: "Hydroxyl Value", value: "200 - 210" },
        { parameter: "Solidification Range (°C)", value: "55 - 58" },
        { parameter: "Flash Point (°C)", value: "Ca. 195" },
        { parameter: "Density (GMS/CC) @ 60 °C", value: "0.805 - 0.815" },
        { parameter: "Colour (APHA)", value: "10 Max." },
        { parameter: "Boiling Range (°C)", value: "330 - 360" }
      ],
      paragraphs: [],
    }
    ],
  },
  "behenyl-alcohol": {
    slug: "behenyl-alcohol",
    name: "Behenyl Alcohol",
    family: "fatty-alcohol",
    pdf: "/pdfs/Behenyl Alcohol.pdf",
    packing: "25 Kgs. Nett in HDPE Laminated Paper Bags with Poly Liner, 20 Kg Plastic Bags, 165 Kgs, Nett in Mildsteel Lacquerlined Drums.",
    certifications: "ISO 9001,14001,18001 certified, Halal & Kosher Certified",
    originNotes: "Vegetable Origin, Non GMO, TSE BSE Free",
    broadUses: "Personal Care, Cosmetics",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Carbon Chain Distribution by GLC (%) C16", value: "1.0 Max" },
        { parameter: "Carbon Chain Distribution by GLC (%) C18", value: "13-17" },
        { parameter: "Carbon Chain Distribution by GLC (%) C20", value: "13-17" },
        { parameter: "Carbon Chain Distribution by GLC (%) C22", value: "66-73" },
        { parameter: "Carbon Chain Distribution by GLC (%) C24", value: "1.0 Max" },
        { parameter: "Appearance", value: "Flakes / Fused / Pastilles" },
        { parameter: "Hydrocarbons (% BY WT)", value: "1.0 Max." },
        { parameter: "Moisture (% BY WT)", value: "0.15 Max." },
        { parameter: "Acid Value", value: "0.1 Max." },
        { parameter: "Saponification Value", value: "0.7 Max." },
        { parameter: "Iodine Value", value: "1.0 Max." },
        { parameter: "Avg. Molecular Weight", value: "310 - 320" },
        { parameter: "Hydroxyl Value", value: "170 - 180" },
        { parameter: "Solidification Range (°C)", value: "63 - 65" },
        { parameter: "Flash Point (°C)", value: "Ca. 204" },
        { parameter: "Density (GMS/CC) @80 °C", value: "0.805 - 0.815" },
        { parameter: "Colour (APHA)", value: "20 Max." },
        { parameter: "Boiling Range (°C)", value: "360 - 400" }
      ],
      paragraphs: [],
    }
    ],
  },
  "glycerin-bp": {
    slug: "glycerin-bp",
    name: "Glycerin BP",
    family: "glycerin",
    pdf: "/pdfs/Glycerin BP.pdf",
    packing: "250 Kg HMHDPE Carboy",
    certifications: "ISO 9001, 14001, 18001/45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE - BSE free.",
    broadUses: "Pharmaceuticals",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "A syrupy liquid, Unctuous to the touch, colourless or almost colourless, clear, very hygroscopic." },
        { parameter: "Solubility", value: "Miscible with water and with ethanol (96%), slightly soluble in acetone, practically insoluble in fatty oil and in essential oil." },
        { parameter: "Appearance of solution", value: "Solution S is clear & diluted solution S is colourless." },
        { parameter: "Identification", value: "A) It complies with test for Refractive Index B) By IR: The Infra red absorption spectrum of the resulting solution is concordant with the reference spectrum of Glycerol (85%) C) Relative Density: 1.258 to 1.268" },
        { parameter: "% Assay", value: "Not less than 98.0 & not more than 101.0" },
        { parameter: "Acidity/alkalinity (50 ML of 50% w/v solution), Max", value: "0.2 ML of 0.1 M NaOH" },
        { parameter: "Refractive index at 20 ° C", value: "1.470 - 1.475" },
        { parameter: "Aldehydes ppm, Max", value: "10.0" },
        { parameter: "Ester Min", value: "8.0 ml 0.1 M HCl" },
        { parameter: "Halogenated compounds ppm, Max", value: "35.0" },
        { parameter: "Sugars", value: "The solution is clear & blue on addition of Copper Sulphate solution R. It remains blue & no precipitate is formed on heating continuously on water bath for 5 minutes" },
        { parameter: "Chlorides ppm, Max", value: "10.0" },
        { parameter: "% Water, Max", value: "2.0" },
        { parameter: "% Sulphated ash, Max", value: "0.01" },
        { parameter: "Impurity A & related substances by GC", value: "Impurity A = NMT 0.10% Any other impurities with retention time less than retention time of glycerol = NMT 0.10% Total of all impurities with retention time greater than retention time of Glycerol = NMT 0.5%" }
      ],
      paragraphs: [],
    }
    ],
  },
  "glycerin-ip": {
    slug: "glycerin-ip",
    name: "Glycerin IP",
    family: "glycerin",
    pdf: "/pdfs/Glycerin IP.pdf",
    packing: "250 Kg HMHDPE Carboy",
    certifications: "ISO 9001, 14001, 18001/45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE - BSE free.",
    broadUses: "Pharmaceuticals",
    sections: [
    {
      heading: "Specifications:",
      rows: [
        { parameter: "Description", value: "Clear colourless or almost colourless, syrupy liquid, odourless, very hygroscopic" },
        { parameter: "Identification", value: "To Pass The Test B, C & D or A & D" },
        { parameter: "Acidity (ml of 0.1 N NaOH)", value: "0.20 Max" },
        { parameter: "Appearance of solution", value: "The solution A is clear & diluted solution A is colourless" },
        { parameter: "Heavy metal as Pb ppm", value: "5.0 Max" },
        { parameter: "Iron as Fe ppm", value: "4.0 Max" },
        { parameter: "Chloride as Cl in ppm", value: "25.0 Max" },
        { parameter: "Sulphate as SO4 in ppm", value: "30.0 Max" },
        { parameter: "Aldehydes & reducing substances", value: "To pass the test" },
        { parameter: "Ester", value: "Min 8 ml of 0.1 M HCL required" },
        { parameter: "Ethylene glycol, diethylene glycol & related substances", value: "To pass the test" },
        { parameter: "Sugars", value: "To pass the test" },
        { parameter: "% Sulphated ash", value: "0.01 Max" },
        { parameter: "% Water (w/w)", value: "2.00 Max" },
        { parameter: "% Glycerol content on anhydrous basis", value: "Not less than 98.0 & not more than 101.0" }
      ],
      paragraphs: [],
    }
    ],
  },
  "glycerin-usp": {
    slug: "glycerin-usp",
    name: "Glycerin USP",
    family: "glycerin",
    pdf: "/pdfs/Glycerin USP.pdf",
    packing: "250 Kg HMHDPE Carboy",
    certifications: "ISO 9001, 14001, 18001/45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE - BSE free.",
    broadUses: "Pharmaceuticals",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "Clear" },
        { parameter: "Odour", value: "Odourless" },
        { parameter: "% Assay on anhydrous basis", value: "99.0 - 101.0" },
        { parameter: "Colour", value: "To pass the test" },
        { parameter: "Fatty acids & esters (ml of 0.5 N NaOH)", value: "1.0 Max" },
        { parameter: "Chloride ppm", value: "10.0 Max" },
        { parameter: "Sulphate ppm", value: "20.0 Max" },
        { parameter: "Chlorinated Compound ppm", value: "30.0 Max" },
        { parameter: "% Water", value: "5.0 Max" },
        { parameter: "% Residue on ignition", value: "0.01 Max" },
        { parameter: "Specific gravity @ 25.0°C", value: "1.249 Min" },
        { parameter: "Organic impurities A) % Total impurities (chromatographic) Including Diethylene glycol.", value: "1.0 Max" },
        { parameter: "Organic impurities B) % individual impurities (chromatographic)", value: "0.1 Max" },
        { parameter: "Identification Test A", value: "To pass the test" },
        { parameter: "Identification Test B", value: "To pass the test" },
        { parameter: "Identification % DEG", value: "0.10 Max" },
        { parameter: "Identification % MEG", value: "0.10 Max" },
        { parameter: "Identification Test C", value: "To pass the test" }
      ],
      paragraphs: [],
    }
    ],
  },
  "glycerin-cp": {
    slug: "glycerin-cp",
    name: "Glycerin CP",
    family: "glycerin",
    pdf: "/pdfs/Glycerin CP.pdf",
    packing: "250 Kg HMHDPE Carboy",
    certifications: "ISO 9001, 14001, 18001/45001, Kosher, Halal certified.",
    originNotes: "Vegetable origin, Non GMO, TSE - BSE free.",
    broadUses: "Pharmaceuticals",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "Clear, Colourless, syrupy liquid, Free from foreign matter." },
        { parameter: "Odour", value: "Odourless" },
        { parameter: "Colour 5.25” Lovibond Cell (Red + Yellow)", value: "1.0 Max" },
        { parameter: "% Fatty Acids & Ester as Na2O", value: "0.03 Max" },
        { parameter: "Chloride as Cl in ppm", value: "10.0 Max" },
        { parameter: "Sulphate as SO4 in ppm", value: "10.0 Max" },
        { parameter: "% Ash by mass", value: "0.01 Max" },
        { parameter: "% Glycerol by mass", value: "98.0 Min" },
        { parameter: "Arsenic as As, ppm", value: "2.00 Max" },
        { parameter: "Iron as Fe, ppm", value: "0.50 Max" },
        { parameter: "Lead as Pb, ppm", value: "1.0 Max" },
        { parameter: "Silver nitrate test", value: "To pass the test" },
        { parameter: "Copper", value: "To pass the test" },
        { parameter: "Acraldehyde & Glucose", value: "To pass the test" },
        { parameter: "Reducing substances", value: "To pass the test" },
        { parameter: "Relative density at 30°C", value: "1.2552 Min" },
        { parameter: "% Alkalinity as Na2O", value: "Nil" }
      ],
      paragraphs: [],
    }
    ],
  },
  "emulsifying-waxes": {
    slug: "emulsifying-waxes",
    name: "Emulsifying Waxes",
    family: "wax",
    pdf: "/pdfs/Emulsifying Waxes.pdf",
    packing: "",
    certifications: "",
    originNotes: "",
    broadUses: "Self-Emulsifying wax suitable for topical preparations, hair dye creams, ointments, conditioners, cleansers, depilatory cream, message cream, foot creams, elbow creams, hair cream, skin cream, and lotions.",
    sections: [
    {
      heading: "Cetearyl alcohol and Ceteareth 20",
      rows: [
        { parameter: "Nature of Emulsifier", value: "Non- Ionic" },
        { parameter: "Application & Functionality", value: "Self-Emulsifying wax suitable for topical preparations. Used for low level of emulsifiable ingredients, excellent solubilizer" },
        { parameter: "Texture", value: "Light to Medium" },
        { parameter: "Usage Level", value: "Usage : 2% to 7%" },
        { parameter: "Industry / Application Categories", value: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "Cetearyl alcohol and Sodium Alkyl Sulphate",
      rows: [
        { parameter: "Nature of Emulsifier", value: "Anionic" },
        { parameter: "Application & Functionality", value: "Self-Emulsifying wax for Oil in Water emulsions Emulsion Stabiliser, used in hair dye creams, ointments, Conditioners, Cleansers" },
        { parameter: "Texture", value: "Light to medium Heaviness" },
        { parameter: "Usage Level", value: "Usage upto 20%" },
        { parameter: "Industry / Application Categories", value: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "Cetearyl Alcohol & SCS",
      rows: [
        { parameter: "Nature of Emulsifier", value: "Anionic" },
        { parameter: "Application & Functionality", value: "" },
        { parameter: "Texture", value: "" },
        { parameter: "Usage Level", value: "" },
        { parameter: "Industry / Application Categories", value: "" }
      ],
      paragraphs: [],
    },
    {
      heading: "Cetearyl alcohol and Ceteareth-20",
      rows: [
        { parameter: "Nature of Emulsifier", value: "Non-Ionic" },
        { parameter: "Application & Functionality", value: "Used for Depilatory Cream, Message Cream, Foot Creams, Elbow Creams" },
        { parameter: "Texture", value: "Waxier, Heavy & Thick Texture" },
        { parameter: "Usage Level", value: "Usage : 2% to 6%" },
        { parameter: "Industry / Application Categories", value: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "Cetearyl alcohol and Polysorbate 60",
      rows: [
        { parameter: "Nature of Emulsifier", value: "Non-Ionic" },
        { parameter: "Application & Functionality", value: "Oil in Water Emulsion like Hair Cream, Skin Cream, Lotions Good Electrolyte tolerance, Dispersing agent& Thickening" },
        { parameter: "Texture", value: "Light to Medium" },
        { parameter: "Usage Level", value: "In general : 2% to 25% In Creams: 5% to 10% In Lotions : 3% to 5%" },
        { parameter: "Industry / Application Categories", value: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "Cetearyl alcohol & PEG-20 stearate",
      rows: [
        { parameter: "Nature of Emulsifier", value: "Non-Ionic" },
        { parameter: "Application & Functionality", value: "Hair Cream, Skin Cream, Lotions" },
        { parameter: "Texture", value: "Light to Medium" },
        { parameter: "Usage Level", value: "Usage level : 4% to 5%" },
        { parameter: "Industry / Application Categories", value: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    },
    {
      heading: "Cetearyl alcohol and Ceteareth-30",
      rows: [
        { parameter: "Nature of Emulsifier", value: "Non-Ionic" },
        { parameter: "Application & Functionality", value: "Hair Cream, Skin Cream, Lotions" },
        { parameter: "Texture", value: "Light to Medium" },
        { parameter: "Usage Level", value: "Usage level : 4% to 5%" },
        { parameter: "Industry / Application Categories", value: "Skin Care (Face Care & Cosmetics), Hair Care, Body Care" }
      ],
      paragraphs: [],
    }
    ],
  },
  "sls-liquid-natural-based": {
    slug: "sls-liquid-natural-based",
    name: "SLS Liquid (Natural Based)",
    family: "surfactants",
    pdf: "/pdfs/1SLS Liquid Natural based.pdf",
    packing: "200 Kg Nett HDPE Drums, Bulk in SS Tanker Lorry, Flexi Tanks, 1000 Kg. IBC, 50 Kg Carboy",
    certifications: "ISO 9001,14001,18001 certified, Halal & Kosher Certified",
    originNotes: "Vegetable Origin, Non GMO, TSE BSE Free",
    broadUses: "fine fragrances, soap, cosmetic cleansers, fertilizers, dispersion products, Processing aids",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "Clear Liquid" },
        { parameter: "Active Matter %", value: "28 +/- 1" },
        { parameter: "pH (10% AD Solution)", value: "8.5 - 10.5" },
        { parameter: "Free Alkali % (as NaOH)", value: "0.3 Max" },
        { parameter: "Sodium Sulphate %", value: "1.5 Max" },
        { parameter: "Sodium Chloride %", value: "1.0 Max" },
        { parameter: "Un-Sulfated Matter %", value: "1.0 Max" }
      ],
      paragraphs: [],
    }
    ],
  },
  "sls-needles-natural-based": {
    slug: "sls-needles-natural-based",
    name: "SLS Needles (Natural Based)",
    family: "surfactants",
    pdf: "/pdfs/2SLS Needles Natural based.pdf",
    packing: "20 /25 Kg Nett Paper Bags",
    certifications: "ISO 9001,14001,18001 certified, Halal & Kosher Certified",
    originNotes: "Vegetable Origin, Non GMO, TSE BSE Free",
    broadUses: "fine fragrances, soap, cosmetic cleansers, fertilizers, dispersion products, Processing aids",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "Off White Needles" },
        { parameter: "Active Matter %", value: "94 Min" },
        { parameter: "Colour (5 % aqueous) APHA", value: "40.0 Max" },
        { parameter: "pH (1% Aqueous Solution)", value: "8.5 - 10.5" },
        { parameter: "Sodium Sulphate %", value: "1.5 Max" },
        { parameter: "Sodium Chloride %", value: "0.5 Max" },
        { parameter: "Un-Sulfated Matter %", value: "2.0 Max" },
        { parameter: "Moisture %", value: "3.0 Max" }
      ],
      paragraphs: [],
    }
    ],
  },
  "sls-powder-natural-based": {
    slug: "sls-powder-natural-based",
    name: "SLS Powder (Natural Based)",
    family: "surfactants",
    pdf: "/pdfs/3SLS Powder Natural based.pdf",
    packing: "20 Kg Nett HDPE Bags",
    certifications: "ISO 9001,14001,18001 certified, Halal & Kosher Certified",
    originNotes: "Vegetable Origin, Non GMO, TSE BSE Free",
    broadUses: "fine fragrances, soap, cosmetic cleansers, fertilizers, dispersion products, Processing aids",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "White Powder" },
        { parameter: "Active Matter %", value: "95 Min" },
        { parameter: "Colour (5 % aqueous) APHA", value: "25.0 Max" },
        { parameter: "pH (1% Aqueous Solution)", value: "8.5 - 10.5" },
        { parameter: "Sodium Sulphate %", value: "4.0 Max" },
        { parameter: "Sodium Chloride %", value: "0.5 Max" },
        { parameter: "Un-Sulfated Matter %", value: "2.0 Max" },
        { parameter: "Moisture %", value: "2.0 Max" }
      ],
      paragraphs: [],
    }
    ],
  },
  "aos-liquid-cosmetic-grade": {
    slug: "aos-liquid-cosmetic-grade",
    name: "AOS Liquid (Cosmetic Grade)",
    family: "surfactants",
    pdf: "/pdfs/1AOS Liquid - Cometic Grade.pdf",
    packing: "200 & 235 Kgs HMHDPE Drums & 1000 Ltr.",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Non GMO, TSE-BSE free.",
    broadUses: "",
    sections: [
    {
      heading: "Specifications:",
      rows: [
        { parameter: "Appearance", value: "Clear Pale Yellow Liquid" },
        { parameter: "Active Matter % (AD)", value: "38 + / - 1" },
        { parameter: "Colour (5% A.D. basis) Klett", value: "60 Max" },
        { parameter: "pH (5% A.D. basis)", value: "7 - 9" },
        { parameter: "Sodium Sulphate %", value: "1.0 Max" },
        { parameter: "Sodium Chloride %", value: "2.0 Max" },
        { parameter: "NDOM %", value: "1.5 Max" },
        { parameter: "Viscosity at 27 °C, cps", value: "250.0 - 500.0" }
      ],
      paragraphs: [],
    }
    ],
  },
  "aos-paste": {
    slug: "aos-paste",
    name: "AOS Paste",
    family: "surfactants",
    pdf: "/pdfs/2AOS Paste.pdf",
    packing: "200 & 235 Kgs HMHDPE Drums, Tanker Lorry.",
    certifications: "ISO 9001, 14001, 45001, Kosher, Halal certified.",
    originNotes: "Non GMO, TSE-BSE free",
    broadUses: "",
    sections: [
    {
      heading: "Specifications",
      rows: [
        { parameter: "Appearance", value: "Creamish Paste" },
        { parameter: "Active Matter % (AD)", value: "70 + / - 1" },
        { parameter: "Colour (5% A.D. basis) Klett", value: "120 Max" },
        { parameter: "Free Alkali % (as NaOH)", value: "1.0 Max" },
        { parameter: "Sodium Sulphate %", value: "2.0 Max" },
        { parameter: "Sodium Chloride %", value: "2.0 Max" },
        { parameter: "NDOM %", value: "1.5 Max" },
        { parameter: "Total Sultones (ppm)", value: "200 Max" },
        { parameter: "Terminal Sultones (ppm)", value: "100 Max" },
        { parameter: "ENE Sultones (ppm)", value: "NIL" }
      ],
      paragraphs: [],
    }
    ],
  },
};

export const datasheetList = Object.values(datasheets);

export function datasheetsForFamily(family: string): Datasheet[] {
  return datasheetList.filter((d) => d.family === family);
}
