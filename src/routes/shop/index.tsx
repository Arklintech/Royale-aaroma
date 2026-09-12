import React, { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Filter, Sparkles } from "lucide-react";
import { products } from "../../data/products";
import { collections } from "../../data/collections";
import { FragranceFormat, CollectionSlug } from "../../data/types";
import { ProductCard } from "../../components/ProductCard";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop All Collections | Royale Aaroma" },
      {
        name: "description",
        content:
          "Explore all eight Royale Aaroma fragrance collections. Traditional Deg Bhapka attars, alcohol-free pure oils, Bakhoor rituals, and spray perfumes.",
      },
      { property: "og:title", content: "Shop All Collections | Royale Aaroma" },
    ],
  }),
  component: ShopIndexPage,
});

function ShopIndexPage() {
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [selectedCollection, setSelectedCollection] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Format filter
        if (selectedFormat !== "all" && p.format !== selectedFormat) return false;

        // Collection filter
        if (selectedCollection !== "all" && p.collectionSlug !== selectedCollection) return false;

        // Price range filter
        if (selectedPriceRange === "under-1500" && p.startingPrice >= 1500) return false;
        if (selectedPriceRange === "1500-3000" && (p.startingPrice < 1500 || p.startingPrice > 3000))
          return false;
        if (selectedPriceRange === "above-3000" && p.startingPrice < 3000) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.startingPrice - b.startingPrice;
        if (sortBy === "price-desc") return b.startingPrice - a.startingPrice;
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return 0; // default order
      });
  }, [selectedFormat, selectedCollection, selectedPriceRange, sortBy]);

  return (
    <div className="bg-background pb-24">
      {/* Header Banner */}
      <div className="border-b border-border/80 bg-surface py-14 lg:py-20">
        <div className="site-container">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent">Royale Aaroma Sanctuary</span>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl text-foreground">
              Shop the Collections.
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore 30+ pure alcohol-free attar distillations, sacred spatial Bakhoor incenses, and
              modern spray perfumes. Formulated from noble Indian botanicals in Kannauj.
            </p>
          </div>

          {/* Format Discovery Quick Tabs */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              { label: "All Formats", value: "all" },
              { label: "Attars & Perfume Oils (Core)", value: "attar" },
              { label: "Bakhoor (Home Rituals)", value: "bakhoor" },
              { label: "Perfumes (Fine Sprays)", value: "perfume" },
            ].map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setSelectedFormat(f.value)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedFormat === f.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/80 bg-background text-foreground/80 hover:border-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Collection Quick Navigation Bar */}
      <div className="border-b border-border/70 bg-secondary/30 py-4">
        <div className="site-container flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground shrink-0 mr-2">
            Collection:
          </span>
          <button
            type="button"
            onClick={() => setSelectedCollection("all")}
            className={`rounded-full px-3.5 py-1 text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCollection === "all"
                ? "bg-foreground text-background"
                : "border border-border bg-background/80 text-foreground hover:bg-muted"
            }`}
          >
            All Collections (8)
          </button>
          {collections.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setSelectedCollection(c.slug)}
              className={`rounded-full px-3.5 py-1 text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCollection === c.slug
                  ? "bg-foreground text-background font-bold"
                  : "border border-border bg-background/80 text-foreground hover:bg-muted"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Discovery Grid & Filters */}
      <div className="site-container mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "Fragrance" : "Fragrances"}
          </p>

          {/* Secondary Sorting & Price Filters */}
          <div className="flex items-center gap-4">
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="rounded border border-border bg-background px-3 py-1.5 text-xs text-foreground outline-none cursor-pointer"
            >
              <option value="all">All Prices</option>
              <option value="under-1500">Under ₹1,500</option>
              <option value="1500-3000">₹1,500 – ₹3,000</option>
              <option value="above-3000">Above ₹3,000 (Reserve)</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded border border-border bg-background px-3 py-1.5 text-xs text-foreground outline-none cursor-pointer"
            >
              <option value="featured">Featured Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-display text-2xl text-muted-foreground">
              No fragrances match the chosen filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedFormat("all");
                setSelectedCollection("all");
                setSelectedPriceRange("all");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded bg-primary px-5 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
