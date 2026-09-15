import React from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { getCollectionBySlug } from "../../../data/collections";
import { getProductsByCollection } from "../../../data/products";
import { FragranceCabinet } from "../../../components/FragranceCabinet";

export const Route = createFileRoute("/collections/$collection/")({
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

  return (
    <div className="min-h-screen pb-24 bg-background text-foreground">
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

      {/* The Fragrance Cabinet Signature Showcase (Reference Image 02) */}
      <FragranceCabinet
        collection={collection}
        products={products}
        currentRoutePrefix="/collections"
      />

      {/* Inspired Series Explicit Legal Disclaimer */}
      {collection.disclaimer && (
        <section className="site-container mt-10">
          <div className="rounded-xl bg-[#FAF7F0] border border-[#D8CFBF] p-5 flex items-start gap-3.5 text-xs leading-relaxed text-[#3F3933]">
            <ShieldAlert className="size-4 text-[#C8754E] shrink-0 mt-0.5" />
            <p className="max-w-4xl">{collection.disclaimer}</p>
          </div>
        </section>
      )}

      {/* Craft Narrative Section */}
      <section className="site-container mt-16 lg:mt-20">
        <div className="rounded-2xl border border-border/80 bg-surface p-8 sm:p-12 lg:p-14 text-foreground">
          <span className="eyebrow text-accent">Compounding & Maturation</span>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl text-foreground">The Philosophy of Slow Scent.</h3>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed max-w-3xl text-muted-foreground">
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

