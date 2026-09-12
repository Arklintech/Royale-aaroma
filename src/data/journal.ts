import botanicalImage from "../assets/botanical-notes.jpg";
import workshopImage from "../assets/craft-workshop.jpg";
import heroImage from "../assets/royale-hero.jpg";
import { JournalArticle } from "./types";

export const journalArticles: JournalArticle[] = [
  {
    id: "art-01",
    slug: "deg-bhapka-sacred-art-hydro-distillation",
    title: "The Fire and the Clay: Inside the Living Stills of Kannauj",
    category: "Heritage",
    readTime: "7 min read",
    date: "Autumn 2026",
    author: "Royale Aaroma Perfumery Guild",
    excerpt:
      "For centuries, along the banks of the Ganges, artisans have performed an alchemy untouched by modern machinery. An exploration of the Deg Bhapka method.",
    image: workshopImage,
    relatedProductSlugs: ["ruh-gulab", "ruh-khus", "mitti-attar"],
    content: [
      "Before dawn in Kannauj, when mist still lingers above the rose fields, wood fires are kindled beneath row upon row of bulbous copper cauldrons. This is the Deg Bhapka process—an unbroken ritual of botanical distillation that has survived in Northern India for over four hundred years.",
      "Unlike modern industrial steam distillation with automated electronic temperature controls, traditional Deg Bhapka relies entirely on sensory instinct. The master distiller, or 'Ustad', gauges the heat of the boiling mash simply by touching the exterior curve of the copper vessel with an experienced palm.",
      "The vapors do not travel through industrial stainless steel piping. Instead, they pass through a Chonga—a natural hollow bamboo tube wrapped in layers of insulating jute twine. As the steam descends into the underground water cistern (the Gachchi), it enters the submerged Bhapka receiver flask, pre-charged with pure Mysore sandalwood oil.",
      "Here, in the quiet darkness of the water bath, the volatile aromatic vapors condense directly into the sandalwood molecule. Day after day, new batches of fresh blooms are charged into the Deg while the same receiver absorbs layer upon layer of floral essence.",
      "The result is not merely a fragrance; it is living liquid history, saturated with the rainfall, the terroir, and the quiet human patience of India's perfume capital.",
    ],
  },
  {
    id: "art-02",
    slug: "how-to-apply-and-layer-pure-attar-oils",
    title: "The Ritual of Pulse Points: A Connoisseur's Guide to Wearing Attar",
    category: "How to Wear",
    readTime: "5 min read",
    date: "Summer 2026",
    author: "Senior Compounding Specialist",
    excerpt:
      "Because pure attars contain zero alcohol, their behavior on skin is completely different from spray fragrances. Here is how to unlock their full longevity.",
    image: heroImage,
    relatedProductSlugs: ["royal-white-musk", "shamama-tul-amber", "jannat-ul-firdaus"],
    content: [
      "When you spray an alcohol-based perfume, up to eighty percent of the bottle consists of volatile solvent that rapidly evaporates into the air, creating a brief blast of sillage before retreating. Pure attar oils, by contrast, are one hundred percent active aromatic compounds.",
      "The Golden Rule of Application: Never rub the oil aggressively between your wrists. Violent friction crushes delicate top notes and accelerates the breakdown of fragile floral molecules. Instead, gently dab a droplet onto one pulse point and press the other wrist against it with gentle stillness.",
      "Pulse Points That Radiate: The warmth of the inner wrists, the hollow beneath the jawline, behind the earlobes, and the collarbones activate the natural base oils over twelve to twenty-four hours.",
      "The Collar Trick: For extraordinary longevity that lasts through multiple days, apply a tiny trace of oil to the inner seams of your cotton or linen cuffs and collar. Unlike spray perfumes containing harsh dyes or alcohols, pure natural attars embed into natural fibers to release a subtle fragrant aura whenever you move.",
      "Artisanal Layering: One of the greatest pleasures of traditional perfumery is layering. Try applying a single drop of Mitti Attar (rain earth) as an earthy grounding base, followed by a light sweep of Ruh Gulab (pure Damask rose) on top. The result is an evocative sensory landscape that is uniquely yours.",
    ],
  },
  {
    id: "art-03",
    slug: "mysore-sandalwood-the-sacred-fixative",
    title: "The White Gold of Karnataka: Why Pure Mysore Sandalwood Remains Irreplaceable",
    category: "Ingredient Spotlight",
    readTime: "6 min read",
    date: "Spring 2026",
    author: "Botanical Sourcing Desk",
    excerpt:
      "Dense heartwood, sacred reverence, and unmatched creaminess. A deep dive into Santalum album—the soul of Indian perfumery.",
    image: botanicalImage,
    relatedProductSlugs: ["mysore-sandalwood-pure", "zafran-imperial-gold", "ruh-gulab"],
    content: [
      "No single ingredient defines classical Indian perfumery quite like Santalum album—the East Indian sandalwood of Karnataka. Renowned for its rich santalol concentration, it possesses a buttery, velvety richness that synthetic laboratory substitutes have never successfully duplicated.",
      "In traditional attar making, Mysore sandalwood is not simply an aromatic note; it is the living canvas. Because of its dense molecular structure and low volatility, sandalwood acts as the ultimate natural fixative, holding fleeting floral top notes like jasmine, kewda, and rose close to the skin for hours.",
      "At Royale Aaroma, every drop of sandalwood oil is obtained through legal government auctions and regulated forestry programs in Southern India. Only heartwood from trees aged over thirty years possesses the necessary depth and medicinal balsamic sweetness.",
      "When worn alone, aged Mysore sandalwood is meditative and grounding, known in Ayurveda for its cooling properties on the nervous system. As the oil warms with body heat, it transforms into an intimate second-skin aura that feels both sacred and profoundly luxurious.",
    ],
  },
  {
    id: "art-04",
    slug: "introducing-bakhoor-and-fine-fragrance-sprays",
    title: "Looking Forward: The Architecture of Bakhoor and Fine Fragrance Sprays",
    category: "New Launches",
    readTime: "4 min read",
    date: "2026 Release Note",
    author: "Creative Direction",
    excerpt:
      "As Royale Aaroma expands its sensory universe, we preview upcoming chapters: sacred spatial incenses and fine fragrance spray atomizers.",
    image: workshopImage,
    relatedProductSlugs: ["royale-oud-bakhoor-chips", "imperial-vetiver-edp"],
    content: [
      "Our foundation has always been pure, alcohol-free perfume oils. But a complete fragrance house lives beyond the skin—it enters the room, the fabrics, the morning rituals, and the evening gatherings.",
      "We are proud to preview two upcoming formats currently undergoing maturation in our blending studio: Royale Aaroma Bakhoor and Fine Fragrance Sprays.",
      "Bakhoor represents our dedication to spatial scent rituals. Hand-selected Assam agarwood chips and resinous tablet incenses are steeped in aged attars, ready to perfume living rooms and festive garments when gently heated over charcoal or electric burners.",
      "Simultaneously, our upcoming Spray Perfumes re-engineer our signature Kannauj extractions for high-diffusion European mist bottles, formulated at twenty-five to thirty percent concentrations to retain authentic attar tenacity while offering radiant, airy projection.",
      "Both formats will be available in strictly limited introductory batches. Clients may register their early interest via our private WhatsApp concierge.",
    ],
  },
];
