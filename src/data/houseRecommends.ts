import { CollectionSlug } from "./types";

export interface HouseRecommendProduct {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  slug: string;
  collectionSlug?: CollectionSlug;
  badge?: string;
  volume?: string;
}

export const houseRecommendsData: HouseRecommendProduct[] = [
  {
    id: "rec-1",
    name: "Royal Oudh",
    subtitle: "Dehnal Oudh Attar",
    price: 4200,
    volume: "3 ml",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    slug: "royal-oudh",
    collectionSlug: "luxury-series",
    badge: "Best Seller",
  },
  {
    id: "rec-2",
    name: "Mysore Sandal",
    subtitle: "Pure Sandalwood Attar",
    price: 3200,
    volume: "6 ml",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=800",
    slug: "mysore-sandalwood",
    collectionSlug: "natural-series",
    badge: "Signature",
  },
  {
    id: "rec-3",
    name: "Rose Royale",
    subtitle: "Kannauj Rose Attar",
    price: 2850,
    volume: "3 ml",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    slug: "gulab-attar",
    collectionSlug: "traditional-series",
    badge: "Hydro-Distilled",
  },
  {
    id: "rec-4",
    name: "Royal Musk",
    subtitle: "Signature Musk Attar",
    price: 2600,
    volume: "6 ml",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
    slug: "royal-musk",
    collectionSlug: "musk-series",
    badge: "Classic",
  },
  {
    id: "rec-5",
    name: "Kashmir Saffron",
    subtitle: "Mogra Saffron Attar",
    price: 3900,
    volume: "3 ml",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    slug: "kashmir-saffron",
    collectionSlug: "natural-series",
    badge: "Rare Harvest",
  },
  {
    id: "rec-6",
    name: "Amber Royale",
    subtitle: "Traditional Amber Attar",
    price: 2950,
    volume: "6 ml",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800",
    slug: "shamama-amber",
    collectionSlug: "traditional-series",
    badge: "Aged 6 Mo",
  },
];
