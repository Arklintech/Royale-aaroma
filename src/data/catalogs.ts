import { CatalogDownload, PriceListRow } from "./types";
import { products } from "./products";

export const catalogDownloads: CatalogDownload[] = [
  {
    id: "full-house-2026",
    title: "Royale Aaroma Complete House Compendium",
    series: "All Collections · 2026 Edition",
    description:
      "The definitive guide to the House of Royale Aaroma. Complete collection stories, Deg Bhapka technical notes, ingredients, and full price index.",
    pageCount: "48 Pages",
    fileSize: "14.2 MB",
    downloadUrl: "#download-full-catalog",
    featured: true,
  },
  {
    id: "natural-series-pdf",
    title: "Natural Series Catalog & Distillation Monograph",
    series: "Series 01 · Pure Hydro-Distillations",
    description:
      "Detailed profiles of 20 pure botanical attars, harvest regions, seasonal yield variations, and Kannauj Deg Bhapka distillation details.",
    pageCount: "24 Pages",
    fileSize: "8.6 MB",
    downloadUrl: "#download-natural-catalog",
  },
  {
    id: "luxury-series-pdf",
    title: "The Master Reserve Luxury Compendium",
    series: "Series 05 · Private Reserve Agarwoods",
    description:
      "Archival guide to vintage Assam Dehnal Oud, vintage sandalwood, and bespoke crystal decanters crafted for private collectors.",
    pageCount: "16 Pages",
    fileSize: "6.1 MB",
    downloadUrl: "#download-luxury-catalog",
  },
  {
    id: "traditional-musk-pdf",
    title: "Traditional & Musk Series Guide",
    series: "Series 02 & 04 · Classic Alcohol-Free Blends",
    description:
      "Formula history, maceration methods, and longevity charts for our timeless traditional and skin musk compositions.",
    pageCount: "20 Pages",
    fileSize: "7.4 MB",
    downloadUrl: "#download-traditional-catalog",
  },
];

export const priceListData: PriceListRow[] = products.map((p, idx) => {
  const prefixMap: Record<string, string> = {
    natural: "RA-NAT",
    traditional: "RA-TRD",
    inspired: "RA-INS",
    musk: "RA-MSK",
    luxury: "RA-LUX",
    fruity: "RA-FRT",
    bakhoor: "RA-BKH",
    perfumes: "RA-PRF",
  };
  const prefix = prefixMap[p.collection] || "RA-ATT";
  const sku = `${prefix}-${String(idx + 1).padStart(3, "0")}`;
  const sizesStr = p.sizes.map((s) => s.size).join(" / ");
  const priceStr = p.isPlaceholder
    ? "Announcing Soon"
    : p.sizes.map((s) => `₹${s.price.toLocaleString("en-IN")}`).join(" / ");
  const notesSummary = [
    ...(p.notes?.top || []),
    ...(p.notes?.heart || []),
    ...(p.notes?.base || []),
  ]
    .slice(0, 3)
    .join(", ");

  return {
    sku,
    name: p.name,
    collection: p.collectionName,
    format:
      p.format === "attar"
        ? "Attar Oil"
        : p.format === "bakhoor"
          ? "Aromatic Wood"
          : "Fine Spray",
    sizes: sizesStr,
    priceInr: priceStr,
    notesSummary,
    ...(p.inspiredBy ? { inspiredBy: p.inspiredBy } : {}),
    status: p.isPlaceholder ? "Upcoming" : "In Stock",
  };
});
