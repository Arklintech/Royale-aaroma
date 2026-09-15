import React, { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock,
  Droplet,
  Flame,
  Heart,
  Hourglass,
  Info,
  MessageCircle,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { getProductBySlug, getProductsByCollection } from "../../../data/products";
import { getCollectionBySlug, normalizeCollectionSlug } from "../../../data/collections";
import { useCommerce } from "../../../lib/commerce-context";
import { TrustBadges } from "../../../components/TrustBadges";
import { ProductCard } from "../../../components/ProductCard";

export const Route = createFileRoute("/shop/$collection/$slug")({
  loader: async ({ params }) => {
    const product = getProductBySlug(params.slug);
    const normalizedColl = normalizeCollectionSlug(params.collection);
    if (!product || product.collectionSlug !== normalizedColl) {
      throw notFound();
    }
    const collection = getCollectionBySlug(params.collection);
    const relatedProducts = getProductsByCollection(params.collection)
      .filter((p) => p.slug !== params.slug)
      .slice(0, 3);

    return { product, collection, relatedProducts };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.product?.name || "Fragrance"} | Royale Aaroma`,
      },
      {
        name: "description",
        content:
          loaderData?.product?.description ||
          "Fine concentrated alcohol-free fragrance from Royale Aaroma.",
      },
      {
        property: "og:title",
        content: `${loaderData?.product?.name || "Fragrance"} | Royale Aaroma`,
      },
      {
        property: "og:description",
        content: loaderData?.product?.headline || "",
      },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product, collection, relatedProducts } = Route.useLoaderData();
  const { formatPrice, addToCart, getWhatsAppProductUrl } = useCommerce();

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0] || {
    size: "Standard",
    price: product.startingPrice,
  };

  const handleAddToCart = () => {
    addToCart(product, currentSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isLuxury = product.collectionSlug === "luxury-series";

  return (
    <div className="min-h-screen pb-24 bg-background text-foreground">
      {/* Breadcrumb Navigation */}
      <div className="site-container pt-8 pb-4">
        <nav
          className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link
            to="/shop/$collection"
            params={{ collection: product.collectionSlug }}
            className="hover:text-accent transition-colors"
          >
            {product.collectionName}
          </Link>
          <span>/</span>
          <span className="font-bold text-accent truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Showcase Grid */}
      <section className="site-container mt-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Product Imagery Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border/80 bg-muted/40 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                width={1200}
                height={1500}
                fetchPriority="high"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute left-4 top-4 flex flex-col gap-1.5">
                <span className="rounded bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow">
                  {product.collectionName}
                </span>
                {product.bestseller && (
                  <span className="rounded bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow">
                    Bestseller
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Preview strip */}
            <div className="grid grid-cols-4 gap-3">
              <div className="aspect-square rounded-md border-2 border-accent overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Fragrance Information & Buying Flow */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Inspired By indicator & disclaimer */}
              {product.inspiredBy && (
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold italic text-accent">
                  <span>Inspired by {product.inspiredBy}</span>
                </div>
              )}

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-medium leading-[1.05]">
                {product.name}
              </h1>

              <p className="mt-2 text-sm sm:text-base font-semibold text-accent">
                {product.headline}
              </p>

              {/* Price Display */}
              <div className="mt-4 flex items-baseline gap-4 border-y border-border/70 py-4">
                <span className="font-display text-3xl sm:text-4xl font-bold text-accent">
                  {product.isPlaceholder ? "Upcoming Launch" : formatPrice(currentSize.price)}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  {product.format === "attar"
                    ? "Pure Oil Concentrate · 0% Alcohol"
                    : product.format === "bakhoor"
                      ? "Aromatic Wood & Incense"
                      : "Fine Mist Spray"}
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Size Selector */}
              {!product.isPlaceholder && (
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2.5">
                    <span>Select Size:</span>
                    <span className="text-muted-foreground">Complimentary Glass Pipette Included</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {product.sizes.map((s, idx) => (
                      <button
                        key={s.size}
                        type="button"
                        onClick={() => setSelectedSizeIndex(idx)}
                        className={`rounded-lg border p-3 text-center transition-all ${
                          selectedSizeIndex === idx
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-border/80 bg-surface text-foreground hover:border-foreground"
                        }`}
                      >
                        <span className="block text-xs font-bold uppercase tracking-wider">
                          {s.size}
                        </span>
                        <span className="block text-[11px] opacity-80 mt-0.5">
                          {formatPrice(s.price)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trust Badges */}
              <div className="mt-6">
                <TrustBadges badges={product.badges} variant="pill" />
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3 pt-4 border-t border-border/70">
                {!product.isPlaceholder ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Primary CTA: Order on WhatsApp */}
                    <a
                      href={getWhatsAppProductUrl(product, currentSize)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 rounded-md bg-[#25D366] py-4 px-6 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#1EBE5D] transition-all"
                    >
                      <MessageCircle className="size-4" />
                      <span>Order on WhatsApp</span>
                    </a>

                    {/* Secondary CTA: Add to Bag */}
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="flex items-center justify-center gap-2 rounded-md bg-primary py-4 px-6 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-all shadow-md"
                    >
                      {added ? (
                        <>
                          <Check className="size-4" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <span>Add to Bag</span>
                      )}
                    </button>
                  </div>
                ) : (
                  <a
                    href={getWhatsAppProductUrl(product, currentSize)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-md bg-[#25D366] py-4 px-6 text-xs font-bold uppercase tracking-widest text-white shadow-md"
                  >
                    <MessageCircle className="size-4" />
                    <span>Reserve on WhatsApp Concierge</span>
                  </a>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 text-[11px] text-muted-foreground border-t border-border/50">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-accent" />
                    100% Insured Express Shipping in India
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Hourglass className="size-3.5 text-accent" />
                    {product.longevityHours || "14+ Hours Wear"}
                  </span>
                </div>
              </div>

              {/* Inspired by Legal Disclaimer (if applicable) */}
              {product.inspiredBy && (
                <div className="mt-6 rounded-lg bg-secondary/40 p-3.5 border border-border/70 text-[11px] leading-relaxed text-muted-foreground flex items-start gap-2">
                  <ShieldAlert className="size-4 text-accent shrink-0 mt-0.5" />
                  <p>
                    <strong>Disclaimer:</strong> This is an original Royale Aaroma artisanal
                    composition inspired by the olfactory profile of {product.inspiredBy}. Royale
                    Aaroma is not affiliated with or endorsed by the referenced brand.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED SECTIONS: NOTES, CRAFTSMANSHIP, HOW TO WEAR
          ========================================================================= */}
      <section className="site-container mt-20 pt-12 border-t border-border/80">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Olfactory Pyramid (Notes) */}
          <div className="lg:col-span-6 rounded-xl border border-border/80 bg-surface p-8 shadow-sm">
            <span className="eyebrow text-accent">Olfactory Architecture</span>
            <h2 className="mt-2 font-display text-3xl">The Fragrance Pyramid.</h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Because attars contain zero alcohol, the transition between top, heart, and base notes
              unfolds slowly with skin heat over several hours.
            </p>

            <div className="mt-8 space-y-6">
              {/* Top Notes */}
              <div className="border-l-2 border-accent pl-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  Opening Notes (0 – 30 Minutes)
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.notes.top.map((n) => (
                    <span
                      key={n}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Heart Notes */}
              <div className="border-l-2 border-primary pl-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Heart Notes (30 Minutes – 6 Hours)
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.notes.heart.map((n) => (
                    <span
                      key={n}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Base Notes */}
              <div className="border-l-2 border-accent pl-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  Base & Drydown (6 – 24+ Hours)
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.notes.base.map((n) => (
                    <span
                      key={n}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Craftsmanship & Distillation */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-border/80 bg-surface p-8 shadow-sm">
            <div>
              <span className="eyebrow text-accent">Kannauj Heritage Chemistry</span>
              <h2 className="mt-2 font-display text-3xl">Craftsmanship & Terroir.</h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {product.story ||
                  "Distilled patiently in small copper cauldrons over firewood furnaces. Sealed hermetically with alluvial clay paste to ensure that no volatile botanical vapor escapes."}
              </p>

              <dl className="mt-6 space-y-3 border-t border-border/60 pt-4 text-xs">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Distillation Method:
                  </dt>
                  <dd className="font-semibold text-foreground mt-0.5">
                    {product.distillationDetail || "Traditional Deg Bhapka hydro-distillation in copper stills."}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Alcohol & Solvent Content:
                  </dt>
                  <dd className="font-semibold text-foreground mt-0.5">
                    0.0% Ethyl Alcohol · 100% Pure Active Botanical Oil
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Skin Endurance:
                  </dt>
                  <dd className="font-semibold text-foreground mt-0.5">
                    {product.longevityHours || "14+ hours on skin, days on cotton fabric"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 pt-4 border-t border-border/60">
              <Link
                to="/heritage/deg-bhapka"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors"
              >
                <span>Learn How Deg Bhapka Distillation Works</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RELATED FRAGRANCES
          ========================================================================= */}
      {relatedProducts.length > 0 && (
        <section className="site-container mt-24">
          <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-8">
            <h2 className="font-display text-2xl tracking-wide">
              Complementary Compositions from {product.collectionName}
            </h2>
            <Link
              to="/shop/$collection"
              params={{ collection: product.collectionSlug }}
              className="text-xs uppercase tracking-wider font-semibold text-accent hover:underline flex items-center gap-1"
            >
              <span>View Collection</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} theme="light" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
