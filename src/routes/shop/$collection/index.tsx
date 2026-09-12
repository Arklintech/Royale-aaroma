import React from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle, ShieldAlert, Sparkles } from "lucide-react";
import { collections, getCollectionBySlug } from "../../../data/collections";
import { getProductsByCollection } from "../../../data/products";
import { ProductCard } from "../../../components/ProductCard";
import { useCommerce } from "../../../lib/commerce-context";

export const Route = createFileRoute("/shop/$collection/")({
  loader: async ({ params }) => {
    const collection = getCollectionBySlug(params.collection);
    if (!collection) {
      throw notFound();
    }
    const products = getProductsByCollection(params.collection);
    return { collection, products };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.collection?.name || "Collection"} | Royale Aaroma`,
      },
      {
        name: "description",
        content: loaderData?.collection?.description || "Royale Aaroma fine fragrance collection.",
      },
      {
        property: "og:title",
        content: `${loaderData?.collection?.name || "Collection"} | Royale Aaroma`,
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const { collection, products } = Route.useLoaderData();
  const { getWhatsAppGeneralUrl } = useCommerce();

  const isLuxury = collection.themeStyle === "noir";
  const isNavy = collection.themeStyle === "navy";
  const isBright = collection.themeStyle === "bright";
  const isSmoke = collection.themeStyle === "smoke";

  return (
    <div
      className={`min-h-screen pb-24 ${
        isLuxury
          ? "bg-[#0D1017] text-[#FBF9F4]"
          : isNavy
            ? "bg-[#12162A] text-[#FBF9F4]"
            : "bg-background text-foreground"
      }`}
    >
      {/* Breadcrumb Navigation */}
      <div className="site-container pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="font-bold text-accent">{collection.name}</span>
        </div>
      </div>

      {/* Collection Hero Showcase */}
      <section
        className={`border-y py-16 lg:py-24 ${
          isLuxury || isNavy
            ? "border-primary/40 bg-primary text-primary-foreground"
            : isBright
              ? "border-border/80 bg-gradient-to-b from-secondary/40 to-background text-foreground"
              : "border-border/80 bg-surface text-foreground"
        }`}
      >
        <div className="site-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                  isLuxury || isNavy
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {collection.seriesNumber || "Signature Collection"}
              </span>
              <span
                className={`text-xs uppercase tracking-wider font-semibold ${
                  isLuxury || isNavy ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {collection.itemCountDescription}
              </span>
            </div>

            <h1
              className={`mt-4 font-display text-4xl sm:text-6xl font-medium tracking-tight ${
                isLuxury || isNavy ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {collection.name}
            </h1>

            <p
              className={`mt-2 font-display text-xl sm:text-2xl italic ${
                isLuxury || isNavy ? "text-accent" : "text-accent"
              }`}
            >
              {collection.subtitle}
            </p>

            <p
              className={`mt-6 text-sm sm:text-base leading-relaxed ${
                isLuxury || isNavy ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}
            >
              {collection.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppGeneralUrl(`Inquiry for ${collection.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-xs font-bold uppercase tracking-wider shadow transition-all ${
                  isLuxury || isNavy
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <MessageCircle className="size-4" />
                <span>Consult on WhatsApp</span>
              </a>

              <Link
                to="/catalogs"
                className={`inline-flex items-center gap-2 rounded-md border px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                  isLuxury || isNavy
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                <span>Download Series Catalog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspired Series Explicit Legal Disclaimer */}
      {collection.disclaimer && (
        <section className="bg-secondary/40 border-b border-border/80 py-5">
          <div className="site-container flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
            <ShieldAlert className="size-4 text-accent shrink-0 mt-0.5" />
            <p className="max-w-4xl">{collection.disclaimer}</p>
          </div>
        </section>
      )}

      {/* Bakhoor & Perfume Launch Educational Banner */}
      {collection.isUpcoming && (
        <section className="site-container mt-8">
          <div className="rounded-xl border border-accent/40 bg-accent/10 p-6">
            <div className="flex items-center gap-2 text-accent font-bold">
              <Sparkles className="size-4" />
              <span className="eyebrow">Upcoming Launch Reservation</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/90">
              The {collection.name} collection is undergoing its final maturation cycle in our
              Kannauj blending sanctuary. You may preview the formulations below and register your
              priority reservation via our private WhatsApp concierge.
            </p>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="site-container mt-12">
        <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-8">
          <h2 className="font-display text-2xl tracking-wide">
            {collection.name} Fragrances ({products.length})
          </h2>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-wider font-semibold text-accent hover:underline flex items-center gap-1"
          >
            <span>All Collections</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              theme={isLuxury ? "dark" : "light"}
            />
          ))}
        </div>
      </section>

      {/* Craft Narrative Section */}
      <section className="site-container mt-20">
        <div
          className={`rounded-2xl border p-8 sm:p-12 lg:p-14 ${
            isLuxury || isNavy
              ? "border-primary-foreground/20 bg-primary text-primary-foreground"
              : "border-border/80 bg-surface text-foreground"
          }`}
        >
          <span className="eyebrow text-accent">Compounding & Maturation</span>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl">The Philosophy of Slow Scent.</h3>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed max-w-3xl opacity-80">
            {collection.craftNarrative}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/heritage/deg-bhapka"
              className="text-xs font-bold uppercase tracking-widest text-accent hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore Kannauj Distillation</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
