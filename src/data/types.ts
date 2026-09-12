export type FragranceFormat = "attar" | "bakhoor" | "perfume";

export type CollectionSlug =
  | "natural-series"
  | "traditional-series"
  | "inspired-series"
  | "musk-series"
  | "luxury-series"
  | "fruity-attars"
  | "bakhoor"
  | "perfumes";

export interface NotePyramid {
  top: string[];
  heart: string[];
  base: string[];
}

export interface SizeOption {
  size: string; // e.g. "3 ml", "6 ml", "12 ml", "50 ml"
  price: number; // in INR
}

export type TrustBadgeKey =
  | "natural"
  | "deg-bhapka"
  | "alcohol-free"
  | "long-lasting"
  | "premium-quality"
  | "traditional-craft";

export interface Product {
  id: string;
  slug: string;
  name: string;
  collectionSlug: CollectionSlug;
  collectionName: string;
  format: FragranceFormat;
  headline: string;
  description: string;
  story?: string;
  family: string;
  notes: NotePyramid;
  sizes: SizeOption[];
  startingPrice: number;
  image: string;
  additionalImages?: string[];
  badges: TrustBadgeKey[];
  featured?: boolean;
  bestseller?: boolean;
  newLaunch?: boolean;
  isPlaceholder?: boolean; // For Bakhoor and Perfumes upcoming releases
  inspiredBy?: string; // For Inspired Series only
  distillationDetail?: string;
  longevityHours?: string;
}

export interface CollectionMeta {
  slug: CollectionSlug;
  name: string;
  seriesNumber?: string;
  subtitle: string;
  format: FragranceFormat;
  itemCountDescription: string;
  accentColor: string;
  themeStyle: "parchment" | "navy" | "noir" | "amber" | "bright" | "smoke";
  description: string;
  craftNarrative: string;
  heroImage: string;
  disclaimer?: string;
  isUpcoming?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: SizeOption;
  quantity: number;
}

export interface HeritageStep {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  material: string;
  description: string;
  role: string;
  icon: string;
}

export interface SourcingIngredient {
  id: string;
  name: string;
  region: string;
  latinName?: string;
  profile: string;
  description: string;
  harvestNote: string;
  image: string;
}

export interface CatalogDownload {
  id: string;
  title: string;
  series: string;
  description: string;
  pageCount: string;
  fileSize: string;
  downloadUrl: string;
  featured?: boolean;
}

export interface PriceListRow {
  sku: string;
  name: string;
  collection: string;
  format: string;
  sizes: string;
  priceInr: string;
  notesSummary: string;
  inspiredBy?: string;
  status: "In Stock" | "Upcoming";
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: "Heritage" | "How to Wear" | "Ingredient Spotlight" | "New Launches";
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
  relatedProductSlugs?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Attars & Composition" | "Bakhoor & Rituals" | "Ordering & WhatsApp" | "Shipping & Policies";
}
