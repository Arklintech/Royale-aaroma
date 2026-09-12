import { CollectionSlug } from "./types";

export interface HeroBestSellerSlide {
  id: string;
  name: string;
  category: string;
  price: number;
  volume?: string;
  badge?: string;
  background: string;
  slug: string;
  collectionSlug: CollectionSlug;
  theme: "dark" | "light";
  navTheme?: "light" | "dark";
  eyebrow: string;
  headline: string;
  supportingCopy: string;
  rightVerticalBadge: string;
  bottomRightQuote: string;
  focalPointDesktop?: string;
  focalPointMobile?: string;
}

export const heroBestSellersData: HeroBestSellerSlide[] = [
  {
    id: "rose-royale",
    name: "Rose Royale",
    category: "KANNAUJ ROSE ATTAR",
    price: 2850,
    volume: "3 ml Pure Attar",
    badge: "Hydro-Distilled",
    background: "/hero/rose-royale.jpg",
    slug: "gulab-attar",
    collectionSlug: "traditional-series",
    theme: "dark",
    navTheme: "light",
    eyebrow: "THE HOUSE OF ROYALE AAROMA · EST. 2002",
    headline: "Fragrance\nRedefining Luxury.",
    supportingCopy:
      "Traditional craftsmanship. Exceptional ingredients. A distinguished house of pure alcohol-free attars, rare botanical hydro-distillations, and sacred scent rituals.",
    rightVerticalBadge: "NATURE\nDISTILLED\nINTO\nPURITY",
    bottomRightQuote: "THE ESSENCE\nOF TIMELESS BEAUTY",
    focalPointDesktop: "object-[60%_center]",
    focalPointMobile: "object-[65%_center]",
  },
  {
    id: "royal-musk",
    name: "Royal Musk",
    category: "SIGNATURE MUSK ATTAR",
    price: 2600,
    volume: "6 ml Pure Attar",
    badge: "Signature",
    background: "/hero/royal-musk.jpg",
    slug: "royal-musk",
    collectionSlug: "musk-series",
    theme: "dark",
    navTheme: "light",
    eyebrow: "THE HOUSE OF ROYALE AAROMA · EST. 2002",
    headline: "Fragrance\nRedefining Luxury.",
    supportingCopy:
      "Traditional craftsmanship. Exceptional ingredients. A distinguished house of pure alcohol-free attars, rare botanical hydro-distillations, and sacred scent rituals.",
    rightVerticalBadge: "SACRED\nRITUAL OF\nSCENT\nMASTERY",
    bottomRightQuote: "TIMELESS SENSUALITY\n& MYSTERY",
    focalPointDesktop: "object-[62%_center]",
    focalPointMobile: "object-[65%_center]",
  },
  {
    id: "kashmir-saffron",
    name: "Kashmir Saffron",
    category: "MOGRA SAFFRON ATTAR",
    price: 3900,
    volume: "3 ml Pure Attar",
    badge: "Rare Harvest",
    background: "/hero/kashmir-saffron.jpg",
    slug: "kashmir-saffron",
    collectionSlug: "natural-series",
    theme: "dark",
    navTheme: "light",
    eyebrow: "THE HOUSE OF ROYALE AAROMA · EST. 2002",
    headline: "Fragrance\nRedefining Luxury.",
    supportingCopy:
      "Traditional craftsmanship. Exceptional ingredients. A distinguished house of pure alcohol-free attars, rare botanical hydro-distillations, and sacred scent rituals.",
    rightVerticalBadge: "RARE\nBOTANICAL\nHARVEST\nGOLD",
    bottomRightQuote: "THE SACRED PULSE\nOF HIMALAYAN DAWN",
    focalPointDesktop: "object-[58%_center]",
    focalPointMobile: "object-[65%_center]",
  },
  {
    id: "royal-oudh",
    name: "Royal Oudh",
    category: "PREMIUM OUDH ATTAR",
    price: 4200,
    volume: "3 ml Pure Attar",
    badge: "Aged Assam Stills",
    background: "/hero/royal-oudh.jpg",
    slug: "royal-oudh",
    collectionSlug: "luxury-series",
    theme: "dark",
    navTheme: "light",
    eyebrow: "THE HOUSE OF ROYALE AAROMA · EST. 2002",
    headline: "Fragrance\nRedefining Luxury.",
    supportingCopy:
      "Traditional craftsmanship. Exceptional ingredients. A distinguished house of pure alcohol-free attars, rare botanical hydro-distillations, and sacred scent rituals.",
    rightVerticalBadge: "AGED\nTIMBER &\nANCIENT\nSTILLS",
    bottomRightQuote: "DEEP EARTHY LUXURY\nUNCUT & UNCOMPROMISED",
    focalPointDesktop: "object-[64%_center]",
    focalPointMobile: "object-[68%_center]",
  },
  {
    id: "mysore-sandal",
    name: "Mysore Sandal",
    category: "PURE SANDALWOOD ATTAR",
    price: 3200,
    volume: "6 ml Pure Attar",
    badge: "Heartwood",
    background: "/hero/mysore-sandal.jpg",
    slug: "mysore-sandalwood",
    collectionSlug: "natural-series",
    theme: "dark",
    navTheme: "light",
    eyebrow: "THE HOUSE OF ROYALE AAROMA · EST. 2002",
    headline: "Fragrance\nRedefining Luxury.",
    supportingCopy:
      "Traditional craftsmanship. Exceptional ingredients. A distinguished house of pure alcohol-free attars, rare botanical hydro-distillations, and sacred scent rituals.",
    rightVerticalBadge: "SACRED\nHEARTWOOD\nDISTILLATION\nPURITY",
    bottomRightQuote: "THE SERENE CALM\nOF MYSORE HERITAGE",
    focalPointDesktop: "object-[60%_center]",
    focalPointMobile: "object-[65%_center]",
  },
  {
    id: "amber-royale",
    name: "Amber Royale",
    category: "TRADITIONAL AMBER ATTAR",
    price: 2950,
    volume: "6 ml Pure Attar",
    badge: "Matured 6 Mo",
    background: "/hero/amber-royale.jpg",
    slug: "shamama-amber",
    collectionSlug: "traditional-series",
    theme: "dark",
    navTheme: "light",
    eyebrow: "THE HOUSE OF ROYALE AAROMA · EST. 2002",
    headline: "Fragrance\nRedefining Luxury.",
    supportingCopy:
      "Traditional craftsmanship. Exceptional ingredients. A distinguished house of pure alcohol-free attars, rare botanical hydro-distillations, and sacred scent rituals.",
    rightVerticalBadge: "CENTURIES\nOF BOTANICAL\nWARMTH &\nRESIN",
    bottomRightQuote: "MATURED PATIENTLY\nIN LEATHER KUPPIS",
    focalPointDesktop: "object-[65%_center]",
    focalPointMobile: "object-[70%_center]",
  },
];
