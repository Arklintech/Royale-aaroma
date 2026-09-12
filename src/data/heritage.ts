import botanicalImage from "../assets/botanical-notes.jpg";
import workshopImage from "../assets/craft-workshop.jpg";
import heroImage from "../assets/royale-hero.jpg";
import { HeritageStep, SourcingIngredient } from "./types";

export const heritageStats = [
  { value: "24+", label: "Years of Fragrance Heritage & Leadership" },
  { value: "100%", label: "Pure Copper Distillation Vessels" },
  { value: "0%", label: "Alcohol, Phthalates & Chemical Solvents" },
  { value: "30+", label: "Days Natural Maturation in Leather Kuppis" },
];

export const degBhapkaSteps: HeritageStep[] = [
  {
    id: "bhatti",
    number: "01",
    name: "Bhatti",
    subtitle: "The Firewood Hearth",
    material: "Clay furnace & seasoned dry hardwood",
    role: "Gentle, disciplined heating",
    description:
      "A traditional masonry brick hearth fuelled by cured firewood and dried cow-dung cakes. Master fire-tenders regulate the flame purely by instinct and sound, maintaining a low, even simmer that gently coaxes volatile aroma molecules without scorching delicate petals.",
    icon: "Flame",
  },
  {
    id: "deg",
    number: "02",
    name: "Deg",
    subtitle: "The Hand-Forged Copper Still",
    material: "Pure hammered virgin copper",
    role: "Botanical distillation cauldron",
    description:
      "Large, bulbous copper pots hand-hammered by Kannauj metalsmiths. Packed by dawn with thousands of fresh petals and river water. The lid is sealed hermetically with a ribbon of raw alluvial clay and cotton jute cloth (the 'Sarson' paste) to withstand steam pressure naturally.",
    icon: "Cylinder",
  },
  {
    id: "chonga",
    number: "03",
    name: "Chonga",
    subtitle: "The Twine-Bound Bamboo Conduit",
    material: "Hollow natural bamboo & twine insulation",
    role: "Vapor transport conduit",
    description:
      "A specialized hollow bamboo pipe bent at precise geometric angles and bound tightly with natural jute twine. It channels volatile botanical vapors from the boiling Deg into the cooling receiver below, cooling the steam gradually along its length without metal contamination.",
    icon: "Compass",
  },
  {
    id: "bhapka",
    number: "04",
    name: "Bhapka",
    subtitle: "The Submerged Copper Receiver",
    material: "Tinned round-bottom copper vessel",
    role: "Condensation & sandalwood infusion",
    description:
      "A long-necked copper flask pre-charged with pure base oil (traditionally pure Mysore sandalwood or food-grade mineral carrier). As vapor arrives from the Chonga, the essential oils dissolve directly into the sandalwood base over days of continuous distillation.",
    icon: "FlaskConical",
  },
  {
    id: "gachchi",
    number: "05",
    name: "Gachchi",
    subtitle: "The Underground Cooling Basin",
    material: "Natural brick & deep circulating cold water",
    role: "Thermal regulation bath",
    description:
      "A large stone cistern filled with constantly circulating cold water where the Bhapka remains fully submerged during the firing cycle. The abrupt temperature drop condenses the hot botanical steam instantly into precious aromatic drops.",
    icon: "Waves",
  },
];

export const sourcingIngredients: SourcingIngredient[] = [
  {
    id: "sandalwood",
    name: "Mysore Sandalwood",
    region: "Karnataka, Southern India",
    latinName: "Santalum album",
    profile: "Buttery, creamy, sacred balsamic woodiness",
    description:
      "Regarded for centuries as the world's most noble perfume base. Sourced through regulated government allocations, its high santalol content acts as a natural fixative, cradling top notes and binding them to the skin for over 24 hours.",
    harvestNote: "Only mature trees aged 30+ years with dense heartwood development are harvested.",
    image: heroImage,
  },
  {
    id: "saffron",
    name: "Kashmir Zafran",
    region: "Pampore Valley, Kashmir",
    latinName: "Crocus sativus",
    profile: "Golden bittersweet, honeyed leather, warm spice",
    description:
      "Hand-plucked in autumn from the purple crocus flowers of the Pir Panjal foothills. Only the top red stigmas (Mongra grade) are selected, imparting an unmistakable golden sun-warmth and regal presence to our blends.",
    harvestNote: "Over 75,000 blossoms are hand-plucked at sunrise to yield a single pound of pure Mongra threads.",
    image: workshopImage,
  },
  {
    id: "oud",
    name: "Assam & Tripura Dehnal Oud",
    region: "Upper Assam & Tripura Forests",
    latinName: "Aquilaria agallocha",
    profile: "Dark resin, wild forest honey, smoky leather, animalic depth",
    description:
      "Born from the natural defense mechanism of ancient agarwood trees against fungal infection. Slow hydro-distillation in copper stills produces a resin of mesmerizing complexity and legendary spiritual gravitas.",
    harvestNote: "Naturally infected wild and semi-wild agarwood aged between 25 and 40 years.",
    image: heroImage,
  },
  {
    id: "rose",
    name: "Misri Gulab (Damask Rose)",
    region: "Kannauj & Aligarh Fields, Uttar Pradesh",
    latinName: "Rosa damascena",
    profile: "Luminous, velvety, dewy, sweet nectar",
    description:
      "Harvested exclusively during the cool dawn hours between 4:00 AM and 7:00 AM while the morning dew protects the fragile volatile essential oils before the hot sun burns away their sweetness.",
    harvestNote: "Distilled within two hours of sunrise to preserve live petal indoles and dewy green facets.",
    image: botanicalImage,
  },
  {
    id: "musk",
    name: "Natural Musk Bases",
    region: "Artisanal Plant & Botanical Formulations",
    latinName: "Ambrette & Botanical Accords",
    profile: "Soft, skin-like warmth, powdery intimacy, velvet sillage",
    description:
      "Cruelty-free botanical and ethical synthetic musk formulations featuring hibiscus Abelmoschus moschatus (ambrette seeds), Angelica root, and warm labdanum tears to provide seductive warmth without harming animal life.",
    harvestNote: "Ethically compounded and aged for 45 days to eliminate sharp top notes.",
    image: botanicalImage,
  },
];
