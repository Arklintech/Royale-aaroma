import botanicalImage from "../assets/botanical-notes.jpg";
import workshopImage from "../assets/craft-workshop.jpg";
import heroImage from "../assets/royale-hero.jpg";
import { CollectionMeta } from "./types";

export const collections: CollectionMeta[] = [
  {
    slug: "natural-series",
    name: "Natural Series",
    seriesNumber: "Series 01",
    subtitle: "Traditional Distilled Attars",
    format: "attar",
    itemCountDescription: "20 Pure Botanicals",
    accentColor: "#C9A84C",
    themeStyle: "parchment",
    description:
      "Hydro-distilled using the centuries-old Deg Bhapka method over firewood furnaces. 100% pure botanical extractions into natural Mysore sandalwood bases without synthetic diluents.",
    craftNarrative:
      "Crafted exclusively through slow hydro-distillation in copper stills. Every harvest reflects the rainfall, soil minerals, and seasonal blooms of Kannauj, Kashmir, and Mysore.",
    heroImage: botanicalImage,
  },
  {
    slug: "traditional-series",
    name: "Traditional Series",
    seriesNumber: "Series 02",
    subtitle: "Timeless Compositions",
    format: "attar",
    itemCountDescription: "19 Alcohol-Free Blends",
    accentColor: "#1B2461",
    themeStyle: "navy",
    description:
      "Classic Indian and Middle Eastern compounding traditions. Masterfully balancing pure botanicals with premium accords for enduring depth, sillage, and comforting familiarity.",
    craftNarrative:
      "Rooted in classical attar formulas celebrated across generations. Each blend matures in seasoned leather kuppi containers to reach optimal olfactory equilibrium.",
    heroImage: workshopImage,
  },
  {
    slug: "inspired-series",
    name: "Inspired Series",
    seriesNumber: "Series 03",
    subtitle: "Contemporary Interpretations",
    format: "attar",
    itemCountDescription: "Original Fine Formulations",
    accentColor: "#C9A84C",
    themeStyle: "noir",
    description:
      "Modern international scent profiles re-imagined as concentrated, alcohol-free perfume oils. Intimate wear with modern sillage, high longevity, and exceptional skin affinity.",
    craftNarrative:
      "Formulated by our master blenders to pay homage to the world's most celebrated contemporary scent architectures while retaining Royale Aaroma's oil-based permanence.",
    heroImage: heroImage,
    disclaimer:
      "Royale Aaroma Inspired Series compositions are independent artisanal creations inspired by world-famous fragrances. Royale Aaroma is not affiliated with, sponsored by, or endorsed by any referenced trademark owners. Names and references are provided solely for olfactory comparative purposes.",
  },
  {
    slug: "musk-series",
    name: "Musk Series",
    seriesNumber: "Series 04",
    subtitle: "Sensual & Intimate Skin Scents",
    format: "attar",
    itemCountDescription: "13 Musk Perfume Oils",
    accentColor: "#C59A44",
    themeStyle: "amber",
    description:
      "From creamy Kashmiri white musks to deep velvety black musk accords. Designed to melt into the body's natural heat and project an intoxicating, subtle halo.",
    craftNarrative:
      "Compounded with ethical cruelty-free musk accords, ambrette seeds, and warm resins. Each oil rests for 45 days to eliminate sharpness and achieve signature velvety softness.",
    heroImage: botanicalImage,
  },
  {
    slug: "luxury-series",
    name: "Luxury Series",
    seriesNumber: "Series 05",
    subtitle: "The Master Reserve",
    format: "attar",
    itemCountDescription: "Private Reserve Distillations",
    accentColor: "#C9A84C",
    themeStyle: "noir",
    description:
      "The pinnacle of Indian fragrance craftsmanship. Vintage aged Dehnal Oud from wild Assam agarwood, aged Kashmiri saffron, and reserve vintage Mysore sandalwood.",
    craftNarrative:
      "Small-batch reserve extractions bottled in heavy lead crystal decanters with gold-finished closures. These are heritage treasures formulated for connoisseurs.",
    heroImage: heroImage,
  },
  {
    slug: "fruity-attars",
    name: "Fruity Attars",
    seriesNumber: "Series 06",
    subtitle: "Vibrant & Expressive Perfume Oils",
    format: "attar",
    itemCountDescription: "6 Radiant Compositions",
    accentColor: "#D97736",
    themeStyle: "bright",
    description:
      "Luminous, uplifting, and effervescent. Pure fruit nectar accords blended with soft musks and white florals for a contemporary, youthful fragrance experience.",
    craftNarrative:
      "Formulated to preserve top-note vibrancy without alcohol evaporation. Zesty citrus rinds, ripe berries, and tropical lychee remain crisp and uplifting for hours.",
    heroImage: botanicalImage,
  },
  {
    slug: "bakhoor",
    name: "Bakhoor",
    seriesNumber: "New Format",
    subtitle: "Sacred Scent Rituals for Home & Fabric",
    format: "bakhoor",
    itemCountDescription: "Upcoming Release",
    accentColor: "#C9A84C",
    themeStyle: "smoke",
    description:
      "Aromatic wood chips, resinous agarwood, and botanical incenses soaked in pure oils. Designed to be warmed over charcoal or electric burners to perfume spaces and garments.",
    craftNarrative:
      "Infused with rare oud shavings, frankincense tears, and spiced attars. The upcoming Bakhoor collection expands the Royale Aaroma sensory world into spatial perfumery.",
    heroImage: workshopImage,
    isUpcoming: true,
  },
  {
    slug: "perfumes",
    name: "Perfumes",
    seriesNumber: "New Format",
    subtitle: "Fine Fragrance Sprays",
    format: "perfume",
    itemCountDescription: "Upcoming Release",
    accentColor: "#1B2461",
    themeStyle: "navy",
    description:
      "Extrait de Parfum and Eau de Parfum spray formulations composed for radiant projection, complex diffusion, and effortless day-to-evening wear.",
    craftNarrative:
      "Engineered with high perfume oil concentrations (25–35%) to bridge Indian attar longevity with the airy sillage of fine European atomizers.",
    heroImage: heroImage,
    isUpcoming: true,
  },
];

export const getCollectionBySlug = (slug: string): CollectionMeta | undefined => {
  return collections.find((c) => c.slug === slug);
};
