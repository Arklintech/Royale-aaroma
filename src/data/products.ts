import botanicalImage from "../assets/botanical-notes.jpg";
import workshopImage from "../assets/craft-workshop.jpg";
import heroImage from "../assets/royale-hero.jpg";
import { Product } from "./types";

export const products: Product[] = [
  // ==========================================
  // NATURAL SERIES (Traditional Deg Bhapka Distilled)
  // ==========================================
  {
    id: "nat-01",
    slug: "ruh-gulab",
    name: "Ruh Gulab (Pure Rose)",
    collectionSlug: "natural-series",
    collectionName: "Natural Series",
    format: "attar",
    headline: "Pure hydro-distilled Damask Rose from Kannauj",
    description:
      "Hydro-distilled from freshly harvested Rosa damascena petals at dawn into pure Mysore sandalwood. Luminous, velvety, and deeply restorative with honeyed undertones.",
    story:
      "Over four tons of fresh Misri rose petals are distilled into a single copper still during the brief dawn harvest to produce less than a liter of pure Ruh Gulab.",
    family: "Floral · Noble Rosy",
    notes: {
      top: ["Fresh Dew", "Green Rose Petals", "Morning Ozone"],
      heart: ["Kannauj Misri Rose", "Spiced Geranium", "Clover Honey"],
      base: ["Mysore Sandalwood", "Soft Ambergris Accord"],
    },
    sizes: [
      { size: "3 ml", price: 2800 },
      { size: "6 ml", price: 5200 },
      { size: "12 ml", price: 9800 },
    ],
    startingPrice: 2800,
    image: botanicalImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "long-lasting"],
    featured: true,
    bestseller: true,
    distillationDetail: "Deg Bhapka hydro-distillation in copper vessels over wood fire.",
    longevityHours: "14+ hours on skin, 48 hours on cotton fabric.",
  },
  {
    id: "nat-02",
    slug: "ruh-khus",
    name: "Ruh Khus (Green Vetiver)",
    collectionSlug: "natural-series",
    collectionName: "Natural Series",
    format: "attar",
    headline: "Wild Northern Indian Vetiver Root Distillation",
    description:
      "The soul of Indian monsoon earth. Distilled from wild vetiver roots harvested from the banks of the Ganges. Distinctive emerald hue, earthy, cooling, and profound.",
    story:
      "Unlike Haitian or Bourbon vetiver, Kannauj Khus is copper-distilled slowly over 20 days, yielding a thick, natural jade-tinted oil that cools the pulse points.",
    family: "Woody · Earthy · Green",
    notes: {
      top: ["Rain-washed Vetiver Greens", "Crushed Grass", "Petrichor"],
      heart: ["Smoked Roots", "Cedarwood Bark", "Wild Earth"],
      base: ["Kannauj Sandalwood Base", "Damp Loam"],
    },
    sizes: [
      { size: "3 ml", price: 2400 },
      { size: "6 ml", price: 4500 },
      { size: "12 ml", price: 8400 },
    ],
    startingPrice: 2400,
    image: heroImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "long-lasting"],
    featured: true,
    bestseller: true,
    distillationDetail: "Copper Deg distillation with natural emerald essential oil retention.",
    longevityHours: "16+ hours on skin.",
  },
  {
    id: "nat-03",
    slug: "mitti-attar",
    name: "Mitti Attar (The Scent of Rain)",
    collectionSlug: "natural-series",
    collectionName: "Natural Series",
    format: "attar",
    headline: "The monsoon baked earth of Kannauj captured in sandalwood",
    description:
      "Unbaked clay shards baked in summer heat and hydro-distilled into aging Mysore sandalwood oil. Recreates the unforgettable scent of first monsoon rain touching parched soil.",
    story:
      "Local alluvial soil is shaped into small terracotta discs, baked in sunlight, and submerged into boiling copper stills to capture the elusive geosmin molecule.",
    family: "Mineral · Petrichor · Earthy",
    notes: {
      top: ["First Monsoon Drops", "Baked Red Clay", "Sun-warmed Dust"],
      heart: ["Alluvial Terracotta", "Mineral Ozone", "Geosmin"],
      base: ["Mysore Sandalwood", "Clean Rain Base"],
    },
    sizes: [
      { size: "3 ml", price: 2200 },
      { size: "6 ml", price: 4100 },
      { size: "12 ml", price: 7800 },
    ],
    startingPrice: 2200,
    image: workshopImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "long-lasting"],
    featured: true,
    bestseller: true,
    distillationDetail: "Sun-baked earth hydro-distilled into pure sandalwood oil receiver.",
    longevityHours: "12+ hours on pulse points.",
  },
  {
    id: "nat-04",
    slug: "shamama-tul-amber",
    name: "Shamama Tul Amber",
    collectionSlug: "natural-series",
    collectionName: "Natural Series",
    format: "attar",
    headline: "A confidential blend of 40+ herbs, spices, and precious roots",
    description:
      "The crown jewel of traditional Indian compound distillation. Over forty rare botanicals, lichens, spices, and resins co-distilled in successive stages over thirty days.",
    story:
      "A recipe preserved by Kannauj perfumers for over a century, Shamama matures over changing lunar cycles in buffalo leather vessels to achieve resinous warmth.",
    family: "Amber · Spiced · Resinous",
    notes: {
      top: ["Saffron", "Clove Bud", "Cardamom", "Nutmeg"],
      heart: ["Spikenard (Jatamansi)", "Sugandh Mantri", "Cinnamon Bark"],
      base: ["Sandalwood", "Ambergris Accord", "Olibanum", "Natural Resins"],
    },
    sizes: [
      { size: "3 ml", price: 2600 },
      { size: "6 ml", price: 4900 },
      { size: "12 ml", price: 9200 },
    ],
    startingPrice: 2600,
    image: botanicalImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "traditional-craft"],
    featured: true,
    bestseller: false,
    distillationDetail: "Successive multi-week co-distillation of 40+ raw botanicals.",
    longevityHours: "18+ hours on skin.",
  },
  {
    id: "nat-05",
    slug: "motia-jasmine",
    name: "Motia Attar (Jasmine Sambac)",
    collectionSlug: "natural-series",
    collectionName: "Natural Series",
    format: "attar",
    headline: "Night-blooming Indian Jasmine Sambac in pure sandalwood",
    description:
      "Freshly hand-plucked night-blooming white jasmine flowers harvested at midnight and immediately sealed into copper stills before morning heat diminishes their delicate indoles.",
    family: "White Floral · Luminous",
    notes: {
      top: ["Night Jasmine Buds", "Morning Dew", "Green Stems"],
      heart: ["Indolic Jasmine Sambac", "Orange Blossom", "Sweet Cream"],
      base: ["Creamy Mysore Sandalwood", "Clean Amber"],
    },
    sizes: [
      { size: "3 ml", price: 2400 },
      { size: "6 ml", price: 4500 },
      { size: "12 ml", price: 8400 },
    ],
    startingPrice: 2400,
    image: heroImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "long-lasting"],
    distillationDetail: "Midnight-plucked Jasmine Sambac distilled into copper Degs.",
    longevityHours: "14+ hours on pulse points.",
  },
  {
    id: "nat-06",
    slug: "zafran-attar",
    name: "Kashmir Zafran (Pure Saffron)",
    collectionSlug: "natural-series",
    collectionName: "Natural Series",
    format: "attar",
    headline: "Pampore Grade-1 Saffron threads infused in sandalwood",
    description:
      "Rare Mongra saffron stigmas from the high-altitude plateaus of Pampore, Kashmir. Golden, bitter-sweet, leathery warmth that radiantly embraces the wearer.",
    family: "Spiced · Leathery · Golden",
    notes: {
      top: ["Kashmir Saffron Stigmas", "Golden Hay", "Bitter Almond"],
      heart: ["Leather Accord", "Warm Thyme", "Cardamom Seed"],
      base: ["Mysore Sandalwood", "Aged Ambergris Base"],
    },
    sizes: [
      { size: "3 ml", price: 3200 },
      { size: "6 ml", price: 5900 },
      { size: "12 ml", price: 11000 },
    ],
    startingPrice: 3200,
    image: workshopImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "premium-quality"],
    distillationDetail: "Pure saffron stigma infusion into low-heat copper receiver.",
    longevityHours: "16+ hours on skin.",
  },
  {
    id: "nat-07",
    slug: "kewda-attar",
    name: "Kewda Attar (Pandanus)",
    collectionSlug: "natural-series",
    collectionName: "Natural Series",
    format: "attar",
    headline: "Coastal Odisha Screwpine Blossoms",
    description:
      "Distilled from the intensely fragrant spiky inflorescences of Pandanus fascicularis from coastal Ganjam, Odisha. Hyacinth-like floral sweetness with honey-citrus notes.",
    family: "Floral · Fruity · Exotic",
    notes: {
      top: ["Kewda Blossom Nectar", "Crisp Hyacinth", "Green Bamboo"],
      heart: ["Sweet Honeyed Pollen", "White Lily", "Melon Undertones"],
      base: ["Mysore Sandalwood Base", "Soft Musk"],
    },
    sizes: [
      { size: "3 ml", price: 2100 },
      { size: "6 ml", price: 3900 },
      { size: "12 ml", price: 7200 },
    ],
    startingPrice: 2100,
    image: botanicalImage,
    badges: ["natural", "deg-bhapka", "alcohol-free"],
  },
  {
    id: "nat-08",
    slug: "mysore-sandalwood-pure",
    name: "Pure Mysore Sandalwood (Santalum Album)",
    collectionSlug: "natural-series",
    collectionName: "Natural Series",
    format: "attar",
    headline: "Aged heartwood distillation with sublime buttery creaminess",
    description:
      "Sourced exclusively from legal government-regulated heartwood allocations in Karnataka. Rich, buttery, meditative, and smooth as silk with unmatched tenacity.",
    family: "Woody · Meditative · Sacred",
    notes: {
      top: ["Warm Wood Shavings", "Dry Cedar Bark"],
      heart: ["Creamy Sandalwood Heartwood", "Sweet Milk Accord"],
      base: ["Deep Balsamic Amber", "Subtle Resins"],
    },
    sizes: [
      { size: "3 ml", price: 4200 },
      { size: "6 ml", price: 7900 },
      { size: "12 ml", price: 14800 },
    ],
    startingPrice: 4200,
    image: heroImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "premium-quality"],
    featured: true,
  },

  // ==========================================
  // TRADITIONAL SERIES (Alcohol-Free Classic Blends)
  // ==========================================
  {
    id: "trad-01",
    slug: "jannat-ul-firdaus",
    name: "Jannat-ul-Firdaus",
    collectionSlug: "traditional-series",
    collectionName: "Traditional Series",
    format: "attar",
    headline: "The legendary Garden of Paradise fragrance",
    description:
      "A majestic classical composition blending garden herbals, crisp bergamot, aromatic spices, and a grand heart of jasmine and lotus on a noble mossy-amber base.",
    family: "Herbal · Spiced · Amber",
    notes: {
      top: ["Garden Greens", "Sweet Basil", "Bergamot", "Coriander"],
      heart: ["Blue Lotus", "Indian Rose", "Jasmine Sambac", "Clove"],
      base: ["Oakmoss", "Golden Amber", "White Musk", "Cedarwood"],
    },
    sizes: [
      { size: "3 ml", price: 1200 },
      { size: "6 ml", price: 2100 },
      { size: "12 ml", price: 3800 },
    ],
    startingPrice: 1200,
    image: workshopImage,
    badges: ["alcohol-free", "long-lasting", "traditional-craft"],
    bestseller: true,
    featured: true,
    longevityHours: "12+ hours on garments.",
  },
  {
    id: "trad-02",
    slug: "majmua-96",
    name: "Majmua 96 Supreme",
    collectionSlug: "traditional-series",
    collectionName: "Traditional Series",
    format: "attar",
    headline: "The masterful harmony of four classic Indian attars",
    description:
      "Compounded from Ruh Khus, Mitti Attar, Kewda, and Jasmine Sambac resting in a velvety sandalwood base. Earthy, floral, and deeply cooling.",
    family: "Earthy · Floral · Balsamic",
    notes: {
      top: ["Cooling Vetiver", "Kewda Blossom"],
      heart: ["Monsoon Earth (Mitti)", "Night Jasmine"],
      base: ["Sandalwood", "Amber Resins"],
    },
    sizes: [
      { size: "3 ml", price: 1400 },
      { size: "6 ml", price: 2500 },
      { size: "12 ml", price: 4600 },
    ],
    startingPrice: 1400,
    image: botanicalImage,
    badges: ["alcohol-free", "long-lasting", "traditional-craft"],
    bestseller: true,
  },
  {
    id: "trad-03",
    slug: "mukhallat-royale",
    name: "Mukhallat Royale",
    collectionSlug: "traditional-series",
    collectionName: "Traditional Series",
    format: "attar",
    headline: "An opulent palace blend of Taif rose, saffron, and oudh",
    description:
      "A rich regal attar that wraps Damascene rose petals, saffron threads, and warm smoky oudh in a cocoon of sweet amber and white musk.",
    family: "Oriental · Rose · Oudh",
    notes: {
      top: ["Kashmiri Saffron", "Pink Peppercorn", "Bergamot"],
      heart: ["Taif Rose", "Turkish Rose", "Geranium"],
      base: ["Cambodian Oudh", "Amber", "Frankincense", "Vanilla"],
    },
    sizes: [
      { size: "3 ml", price: 1800 },
      { size: "6 ml", price: 3200 },
      { size: "12 ml", price: 5900 },
    ],
    startingPrice: 1800,
    image: heroImage,
    badges: ["alcohol-free", "long-lasting", "premium-quality"],
    featured: true,
  },
  {
    id: "trad-04",
    slug: "white-oudh",
    name: "White Oudh Classic",
    collectionSlug: "traditional-series",
    collectionName: "Traditional Series",
    format: "attar",
    headline: "A luminous, clean, and modern interpretation of agarwood",
    description:
      "Stripping away barnyard heaviness to reveal the ethereal, crystalline facets of agarwood. Paired with white amber, soft spices, and clean powder.",
    family: "Woody · Clean · Luminous",
    notes: {
      top: ["White Cardamom", "Mandarin", "Lemon Blossom"],
      heart: ["Sweet Tobacco Leaf", "Soft Incense", "White Amber"],
      base: ["Clean Agarwood", "Cedarwood", "Cashmeran"],
    },
    sizes: [
      { size: "3 ml", price: 1500 },
      { size: "6 ml", price: 2700 },
      { size: "12 ml", price: 4900 },
    ],
    startingPrice: 1500,
    image: workshopImage,
    badges: ["alcohol-free", "long-lasting"],
    bestseller: true,
  },
  {
    id: "trad-05",
    slug: "aab-e-zamzam",
    name: "Aab-e-Zamzam",
    collectionSlug: "traditional-series",
    collectionName: "Traditional Series",
    format: "attar",
    headline: "Pure aquatic spirituality and gentle white blossoms",
    description:
      "Formulated to evoke serenity and peaceful contemplation. Crystal-clear aquatic accords balanced with soft white lilies and clean musk.",
    family: "Fresh · Aquatic · Spiritual",
    notes: {
      top: ["Clear Water Accord", "Lotus Blossom", "Sweet Melon"],
      heart: ["White Lily", "Cyclamen", "Rosewater"],
      base: ["White Musk", "Smooth Sandalwood"],
    },
    sizes: [
      { size: "3 ml", price: 1200 },
      { size: "6 ml", price: 2100 },
      { size: "12 ml", price: 3800 },
    ],
    startingPrice: 1200,
    image: botanicalImage,
    badges: ["alcohol-free", "traditional-craft"],
  },

  // ==========================================
  // INSPIRED SERIES (Contemporary Fine Interpretations)
  // ==========================================
  {
    id: "insp-01",
    slug: "souverain-sauvage",
    name: "Souverain (Inspired by Sauvage)",
    collectionSlug: "inspired-series",
    collectionName: "Inspired Series",
    format: "attar",
    headline: "Raw bergamot, Sichuan pepper, and radiant ambroxan",
    description:
      "A fierce, charismatic, and fresh composition with intense longevity in an alcohol-free pure oil format that outlasts traditional spray formulations.",
    inspiredBy: "Dior Sauvage",
    family: "Aromatic · Fresh Spicy · Woody",
    notes: {
      top: ["Calabrian Bergamot", "Spicy Pepper", "Mandarin"],
      heart: ["Sichuan Pepper", "Lavender", "Pink Pepper", "Vetiver", "Patchouli"],
      base: ["Ambroxan", "Cedarwood", "Labdanum"],
    },
    sizes: [
      { size: "6 ml", price: 899 },
      { size: "12 ml", price: 1599 },
    ],
    startingPrice: 899,
    image: heroImage,
    badges: ["alcohol-free", "long-lasting"],
    featured: true,
    bestseller: true,
    longevityHours: "16+ hours on skin.",
  },
  {
    id: "insp-02",
    slug: "rouge-imperial-540",
    name: "Rouge Imperial (Inspired by Baccarat Rouge 540)",
    collectionSlug: "inspired-series",
    collectionName: "Inspired Series",
    format: "attar",
    headline: "Luminous amber, Egyptian jasmine, and spun sugar cedar",
    description:
      "A poetic alchemy of breeze, crystal, and fire. The intoxicating signature of saffron, mineral ambergris, and freshly cut cedarwood in a concentrated oil.",
    inspiredBy: "Maison Francis Kurkdjian Baccarat Rouge 540",
    family: "Amber · Floral · Woody",
    notes: {
      top: ["Bitter Almond", "Saffron"],
      heart: ["Egyptian Jasmine Grandiflorum", "Cedarwood"],
      base: ["Ambergris", "Woody Musk", "Spun Sugar Accord"],
    },
    sizes: [
      { size: "6 ml", price: 999 },
      { size: "12 ml", price: 1799 },
    ],
    startingPrice: 999,
    image: workshopImage,
    badges: ["alcohol-free", "long-lasting"],
    featured: true,
    bestseller: true,
    longevityHours: "24+ hours on fabric.",
  },
  {
    id: "insp-03",
    slug: "aventus-supremacy",
    name: "Sovereign Creed (Inspired by Aventus)",
    collectionSlug: "inspired-series",
    collectionName: "Inspired Series",
    format: "attar",
    headline: "Blackcurrant, smoked pineapple, birch bark, and oakmoss",
    description:
      "Sensual, audacious, and contemporary. Juicy fruit openings tempered by noble smoky birch and rich gray ambergris.",
    inspiredBy: "Creed Aventus",
    family: "Fruity · Chypre · Smoky",
    notes: {
      top: ["Pineapple", "Bergamot", "Blackcurrant", "Apple"],
      heart: ["Birch", "Patchouli", "Moroccan Jasmine", "Rose"],
      base: ["Musk", "Oakmoss", "Ambergris", "Vanilla"],
    },
    sizes: [
      { size: "6 ml", price: 999 },
      { size: "12 ml", price: 1799 },
    ],
    startingPrice: 999,
    image: botanicalImage,
    badges: ["alcohol-free", "long-lasting"],
    bestseller: true,
  },
  {
    id: "insp-04",
    slug: "santal-sanctum-33",
    name: "Santal Sanctum (Inspired by Santal 33)",
    collectionSlug: "inspired-series",
    collectionName: "Inspired Series",
    format: "attar",
    headline: "Smoky Australian sandalwood, cardamom, iris, and leather",
    description:
      "An intoxicating touch of smoky woods, spicy cardamom, and violet petals. The defining scent of modern artisanal minimalism.",
    inspiredBy: "Le Labo Santal 33",
    family: "Woody · Leather · Spiced",
    notes: {
      top: ["Cardamom", "Violet Accord", "Papyrus"],
      heart: ["Iris", "Amber", "Cedarwood"],
      base: ["Australian Sandalwood", "Leather", "Smoke"],
    },
    sizes: [
      { size: "6 ml", price: 949 },
      { size: "12 ml", price: 1699 },
    ],
    startingPrice: 949,
    image: heroImage,
    badges: ["alcohol-free", "long-lasting"],
  },
  {
    id: "insp-05",
    slug: "nomade-desert-oud",
    name: "Nomade Desert (Inspired by Ombre Nomade)",
    collectionSlug: "inspired-series",
    collectionName: "Inspired Series",
    format: "attar",
    headline: "Dark Assam oudh, raspberry, incense, and rose",
    description:
      "A vortex of dark swirling smoke, raspberry sweetness, and animalic agarwood. Majestic sillage for cool evening wear.",
    inspiredBy: "Louis Vuitton Ombre Nomade",
    family: "Oriental · Oudh · Smoky",
    notes: {
      top: ["Raspberry", "Saffron", "Rose"],
      heart: ["Frankincense", "Benzoin", "Birch Tar"],
      base: ["Aged Agarwood (Oud)", "Amberwood", "Leather"],
    },
    sizes: [
      { size: "6 ml", price: 1099 },
      { size: "12 ml", price: 1999 },
    ],
    startingPrice: 1099,
    image: workshopImage,
    badges: ["alcohol-free", "long-lasting", "premium-quality"],
  },

  // ==========================================
  // MUSK SERIES (Sensual & Intimate Skin Scents)
  // ==========================================
  {
    id: "musk-01",
    slug: "royal-white-musk",
    name: "Royal White Musk",
    collectionSlug: "musk-series",
    collectionName: "Musk Series",
    format: "attar",
    headline: "A silky, comforting second-skin white musk",
    description:
      "Pure, velvety, and delicately powdered. Blooms on warm pulse points to produce an irresistible clean skin sensation.",
    family: "Musk · Clean · Powdery",
    notes: {
      top: ["White Lily", "Cotton Flower", "Ylang Ylang"],
      heart: ["Velvety Musk Accord", "Sweet Jasmine", "Powder"],
      base: ["White Sandalwood", "Clean Amber", "Cashmere"],
    },
    sizes: [
      { size: "3 ml", price: 1100 },
      { size: "6 ml", price: 1950 },
      { size: "12 ml", price: 3500 },
    ],
    startingPrice: 1100,
    image: botanicalImage,
    badges: ["alcohol-free", "long-lasting"],
    bestseller: true,
    featured: true,
  },
  {
    id: "musk-02",
    slug: "musk-tahara",
    name: "Musk Tahara Imperial",
    collectionSlug: "musk-series",
    collectionName: "Musk Series",
    format: "attar",
    headline: "Thick creamy lotion-textured white musk of purification",
    description:
      "Celebrated across the Arabian peninsula for its rich honeyed cream texture and soft floral-soapy purity. Applied after bathing for day-long serenity.",
    family: "Musk · Creamy · Fresh",
    notes: {
      top: ["Violet Blossom", "White Lotus"],
      heart: ["Thick Creamy Musk", "Honey Accord", "Taif Rose"],
      base: ["White Amber", "Vanilla Bean"],
    },
    sizes: [
      { size: "3 ml", price: 1250 },
      { size: "6 ml", price: 2200 },
      { size: "12 ml", price: 3900 },
    ],
    startingPrice: 1250,
    image: heroImage,
    badges: ["alcohol-free", "long-lasting"],
    bestseller: true,
  },
  {
    id: "musk-03",
    slug: "kashmiri-black-musk",
    name: "Kashmiri Musk Supreme",
    collectionSlug: "musk-series",
    collectionName: "Musk Series",
    format: "attar",
    headline: "Deep, warm, magnetic amber-tinted musk",
    description:
      "A darker, animalic-faceted musk blended with spiced amber, benzoin tears, and aged labdanum for mysterious evening allure.",
    family: "Musk · Dark · Sensual",
    notes: {
      top: ["Spiced Nutmeg", "Dark Plum"],
      heart: ["Black Musk Accord", "Patchouli Leaf", "Incense"],
      base: ["Warm Ambergris", "Smoked Leather", "Labdanum"],
    },
    sizes: [
      { size: "3 ml", price: 1500 },
      { size: "6 ml", price: 2700 },
      { size: "12 ml", price: 4800 },
    ],
    startingPrice: 1500,
    image: workshopImage,
    badges: ["alcohol-free", "long-lasting", "traditional-craft"],
  },

  // ==========================================
  // LUXURY SERIES (The Master Reserve)
  // ==========================================
  {
    id: "lux-01",
    slug: "royal-dehnal-oudh-vintage",
    name: "Royal Dehnal Oudh Vintage (Assam Reserve)",
    collectionSlug: "luxury-series",
    collectionName: "Luxury Series",
    format: "attar",
    headline: "Wild-harvested, thirty-year aged Assam Aquilaria Agallocha",
    description:
      "The pinnacle of natural perfumery. Distilled in 1994 from naturally fallen wild agarwood trees in Upper Assam. Smooth leather, dried fruit, deep woody balsam, and sacred temple smoke.",
    story:
      "Distilled in strictly limited quantities and matured in dark glass carboys for three decades. Contains zero synthetic enhancers, carriers, or dilution.",
    family: "Oudh · Sacred · Vintage",
    notes: {
      top: ["Aged Leather", "Dried Plum", "Wild Honey"],
      heart: ["Deep Resinous Agarwood", "Smoked Vetiver", "Sweet Tobacco"],
      base: ["Precious Wood Balsam", "Ancient Amber", "Forest Loam"],
    },
    sizes: [
      { size: "3 ml", price: 7500 },
      { size: "6 ml", price: 14200 },
      { size: "12 ml", price: 26500 },
    ],
    startingPrice: 7500,
    image: heroImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "premium-quality"],
    featured: true,
    bestseller: false,
    longevityHours: "24+ hours on skin, weeks on fabric.",
  },
  {
    id: "lux-02",
    slug: "kalakassi-private-reserve",
    name: "Kalakassi Oudh Private Reserve",
    collectionSlug: "luxury-series",
    collectionName: "Luxury Series",
    format: "attar",
    headline: "Rare century-old extraction profile of sweet, golden agarwood",
    description:
      "Renowned among collectors for its sweet, radiant apricot and floral top notes that transition into a serene, deeply woody drydown.",
    family: "Oudh · Sweet · Regal",
    notes: {
      top: ["Sun-ripened Apricot", "Sweet Smoke", "Saffron Blossom"],
      heart: ["Golden Agarwood Resin", "Aged Sandalwood", "Myrrh"],
      base: ["Warm Animalic Ambergris", "Precious Woods"],
    },
    sizes: [
      { size: "3 ml", price: 8500 },
      { size: "6 ml", price: 16000 },
      { size: "12 ml", price: 29900 },
    ],
    startingPrice: 8500,
    image: workshopImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "premium-quality"],
    featured: true,
  },
  {
    id: "lux-03",
    slug: "zafran-imperial-gold",
    name: "Zafran Imperial Gold Reserve",
    collectionSlug: "luxury-series",
    collectionName: "Luxury Series",
    format: "attar",
    headline: "Double-distilled Kashmiri Mongra Saffron in 20-year Sandalwood",
    description:
      "A lavish private reserve pairing the most potent first-grade saffron harvest with vintage government-auction Mysore sandalwood.",
    family: "Spiced · Saffron · Golden Woods",
    notes: {
      top: ["Imperial Mongra Saffron", "Golden Honey", "Cardamom"],
      heart: ["Sandalwood Heartwood", "Rose Damascena", "Incense"],
      base: ["Ancient Amber", "Velvet Musk"],
    },
    sizes: [
      { size: "3 ml", price: 6200 },
      { size: "6 ml", price: 11800 },
      { size: "12 ml", price: 21900 },
    ],
    startingPrice: 6200,
    image: botanicalImage,
    badges: ["natural", "deg-bhapka", "alcohol-free", "premium-quality"],
  },

  // ==========================================
  // FRUITY ATTARS (6 Radiant Compositions)
  // ==========================================
  {
    id: "frt-01",
    slug: "zesty-orange",
    name: "Zesty Orange",
    collectionSlug: "fruity-attars",
    collectionName: "Fruity Attars",
    format: "attar",
    headline: "Sun-drenched Nagpur citrus, orange blossom, and soft amber",
    description:
      "Uplifting and effervescent. Bursting with cold-pressed orange peels, mandarine zest, and honeyed neroli over a light white musk base.",
    family: "Citrus · Fruity · Sparkling",
    notes: {
      top: ["Nagpur Sweet Orange", "Blood Orange Zest", "Bergamot"],
      heart: ["Neroli", "Orange Blossom", "Sweet Peach"],
      base: ["White Musk", "Cedarwood", "Soft Amber"],
    },
    sizes: [
      { size: "3 ml", price: 850 },
      { size: "6 ml", price: 1450 },
      { size: "12 ml", price: 2600 },
    ],
    startingPrice: 850,
    image: botanicalImage,
    badges: ["alcohol-free", "long-lasting"],
    bestseller: true,
  },
  {
    id: "frt-02",
    slug: "crown-fruit",
    name: "Crown Fruit",
    collectionSlug: "fruity-attars",
    collectionName: "Fruity Attars",
    format: "attar",
    headline: "An exotic tropical royal cocktail of passion fruit and guava",
    description:
      "Exotic, luscious, and celebratory. Crisp passionfruit, pink guava, and golden pineapple rounded out with gentle gardenia blossoms.",
    family: "Tropical · Fruity · Floral",
    notes: {
      top: ["Passionfruit", "Pink Guava", "Pineapple"],
      heart: ["Gardenia", "Mango Blossom", "Coconut Water"],
      base: ["Sandalwood", "Warm Musk", "Vanilla Cream"],
    },
    sizes: [
      { size: "3 ml", price: 850 },
      { size: "6 ml", price: 1450 },
      { size: "12 ml", price: 2600 },
    ],
    startingPrice: 850,
    image: heroImage,
    badges: ["alcohol-free", "long-lasting"],
    featured: true,
  },
  {
    id: "frt-03",
    slug: "strawberry",
    name: "Strawberry Nectar",
    collectionSlug: "fruity-attars",
    collectionName: "Fruity Attars",
    format: "attar",
    headline: "Sweet garden strawberries, spun vanilla, and jasmine dew",
    description:
      "Playful yet refined. Ripe wild strawberries picked at peak sweetness, wrapped in delicate white flowers and whipped vanilla cream.",
    family: "Fruity · Sweet · Gourmand",
    notes: {
      top: ["Wild Strawberries", "Red Currant", "Sparkling Cassis"],
      heart: ["Jasmine Buds", "Sweet Rosewater", "Raspberry Leaf"],
      base: ["Whipped Vanilla", "Clean White Musk"],
    },
    sizes: [
      { size: "3 ml", price: 850 },
      { size: "6 ml", price: 1450 },
      { size: "12 ml", price: 2600 },
    ],
    startingPrice: 850,
    image: workshopImage,
    badges: ["alcohol-free", "long-lasting"],
  },
  {
    id: "frt-04",
    slug: "litchi",
    name: "Litchi Blossom",
    collectionSlug: "fruity-attars",
    collectionName: "Fruity Attars",
    format: "attar",
    headline: "Dewy Himalayan lychee, peony petals, and white cedar",
    description:
      "Crisp, aquatic, and exquisitely feminine. Translucent lychee pulp balanced with fragile pink peony petals and sparkling white woods.",
    family: "Fruity · Floral · Aquatic",
    notes: {
      top: ["Chilled Lychee", "Rhubarb", "Bergamot"],
      heart: ["Pink Peony", "Turkish Rose", "Magnolia"],
      base: ["White Cedar", "Soft Cashmeran", "Clean Musk"],
    },
    sizes: [
      { size: "3 ml", price: 850 },
      { size: "6 ml", price: 1450 },
      { size: "12 ml", price: 2600 },
    ],
    startingPrice: 850,
    image: botanicalImage,
    badges: ["alcohol-free", "long-lasting"],
    bestseller: true,
  },
  {
    id: "frt-05",
    slug: "mango",
    name: "Mango Alphonso",
    collectionSlug: "fruity-attars",
    collectionName: "Fruity Attars",
    format: "attar",
    headline: "Golden Ratnagiri Alphonso mango, spiced cardamom, and coconut",
    description:
      "Capturing the golden essence of Indian summer. Rich, ripe Alphonso mango nectar warmed with a hint of green cardamom and creamy woods.",
    family: "Fruity · Tropical · Gourmand",
    notes: {
      top: ["Ripe Alphonso Mango", "Green Mango Peel", "Cardamom"],
      heart: ["Coconut Milk", "Frangipani Blossom", "Peach"],
      base: ["Sandalwood", "Golden Amber", "White Musk"],
    },
    sizes: [
      { size: "3 ml", price: 850 },
      { size: "6 ml", price: 1450 },
      { size: "12 ml", price: 2600 },
    ],
    startingPrice: 850,
    image: heroImage,
    badges: ["alcohol-free", "long-lasting"],
  },
  {
    id: "frt-06",
    slug: "berries",
    name: "Wild Berries Supreme",
    collectionSlug: "fruity-attars",
    collectionName: "Fruity Attars",
    format: "attar",
    headline: "Dark blackberries, forest cranberries, and cedarwood",
    description:
      "Rich and mysterious. Deep tart berry compote balanced with crushed pine needles and dry woods for a sophisticated fruit profile.",
    family: "Fruity · Woody · Tart",
    notes: {
      top: ["Blackberry", "Cranberry", "Wild Raspberry"],
      heart: ["Red Rose", "Violet Leaves", "Pine Needles"],
      base: ["Cedarwood", "Dark Amber", "Forest Musk"],
    },
    sizes: [
      { size: "3 ml", price: 850 },
      { size: "6 ml", price: 1450 },
      { size: "12 ml", price: 2600 },
    ],
    startingPrice: 850,
    image: workshopImage,
    badges: ["alcohol-free", "long-lasting"],
  },

  // ==========================================
  // BAKHOOR — NEW (Upcoming Launch Architecture)
  // ==========================================
  {
    id: "bkh-01",
    slug: "royale-oud-bakhoor-chips",
    name: "Royale Oudh Muattar Chips",
    collectionSlug: "bakhoor",
    collectionName: "Bakhoor",
    format: "bakhoor",
    headline: "Aromatic agarwood chips steeped in amber and pure taif rose",
    description:
      "High-grade agarwood chips carefully saturated with aged sandalwood oil, amber resin, and rose essence. Designed for traditional charcoal or electric mabkhara burners to perfume sacred spaces and evening garments.",
    story:
      "Bakhoor perfuming is an ancient ritual of hospitality and sanctity. Unlike spray air fresheners, authentic Bakhoor embeds natural aromatic smoke into fabrics and upholstery for days.",
    family: "Smoky · Resinous · Incense",
    notes: {
      top: ["Incense Smoke", "Pink Peppercorn", "Frankincense"],
      heart: ["Damascena Rose", "Cardamom", "Myrrh Resin"],
      base: ["Agarwood Chips", "Amber Tears", "Benzoin"],
    },
    sizes: [{ size: "50 g Jar", price: 0 }],
    startingPrice: 0,
    image: workshopImage,
    badges: ["traditional-craft", "premium-quality"],
    isPlaceholder: true,
    newLaunch: true,
  },
  {
    id: "bkh-02",
    slug: "amber-resin-tablets",
    name: "Golden Amber Bakhoor Tablets",
    collectionSlug: "bakhoor",
    collectionName: "Bakhoor",
    format: "bakhoor",
    headline: "Compressed botanical incenses and rich honeyed labdanum",
    description:
      "Pressed fragrant squares of aromatic sandalwood powder, amber crystals, and floral extracts. Gently releases soothing fragrant smoke without harsh charcoal burn.",
    family: "Amber · Balsamic · Sweet Smoke",
    notes: {
      top: ["Sweet Frankincense", "Bergamot Zest"],
      heart: ["Amber Crystals", "Jasmine Buds", "Nutmeg"],
      base: ["Labdanum", "Vanilla Wood", "Olibanum"],
    },
    sizes: [{ size: "40 g Box", price: 0 }],
    startingPrice: 0,
    image: botanicalImage,
    badges: ["traditional-craft", "premium-quality"],
    isPlaceholder: true,
    newLaunch: true,
  },

  // ==========================================
  // PERFUMES — NEW (Upcoming Fine Fragrance Spray Architecture)
  // ==========================================
  {
    id: "prf-01",
    slug: "imperial-vetiver-edp",
    name: "Imperial Vetiver (Eau de Parfum)",
    collectionSlug: "perfumes",
    collectionName: "Perfumes",
    format: "perfume",
    headline: "Fine fragrance spray featuring Kannauj vetiver and bergamot",
    description:
      "Our signature Indian vetiver reimagined with fine European mist atomization. Combining the cooling depths of Kannauj roots with bright sparkling citrus and breezy cedarwood.",
    story:
      "Engineered with a high 25% fragrance oil concentration, bridging the lasting adherence of attars with radiant, airy diffusion.",
    family: "Aromatic · Woody · Radiant Spray",
    notes: {
      top: ["Calabrian Bergamot", "Pink Grapefruit", "Cardamom"],
      heart: ["Kannauj Vetiver", "Geranium Bourbon", "Clary Sage"],
      base: ["Atlas Cedar", "Haitian Vetiver", "Clean Ambergris"],
    },
    sizes: [
      { size: "50 ml Spray", price: 0 },
      { size: "100 ml Spray", price: 0 },
    ],
    startingPrice: 0,
    image: heroImage,
    badges: ["long-lasting", "premium-quality"],
    isPlaceholder: true,
    newLaunch: true,
  },
  {
    id: "prf-02",
    slug: "mysore-rose-extrait",
    name: "Mysore Rose (Extrait de Parfum)",
    collectionSlug: "perfumes",
    collectionName: "Perfumes",
    format: "perfume",
    headline: "Concentrated 30% extrait of Damask Rose and sandalwood",
    description:
      "A rich, regal spray perfume created for black-tie gatherings and festive evenings. Velvety roses, sparkling spices, and enduring sandalwood trail.",
    family: "Floral · Woody · Regal Spray",
    notes: {
      top: ["Rose Dewdrops", "Saffron Threads", "Blackcurrant"],
      heart: ["Misri Damask Rose", "Taif Rose Accord", "Patchouli"],
      base: ["Mysore Sandalwood", "Cashmere Amber", "Vanilla"],
    },
    sizes: [
      { size: "50 ml Spray", price: 0 },
      { size: "100 ml Spray", price: 0 },
    ],
    startingPrice: 0,
    image: botanicalImage,
    badges: ["long-lasting", "premium-quality"],
    isPlaceholder: true,
    newLaunch: true,
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  return products.filter((p) => p.collectionSlug === collectionSlug);
};

export const getProductsByFormat = (format: string): Product[] => {
  return products.filter((p) => p.format === format);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured && !p.isPlaceholder);
};
