import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, MapPin, Sparkles } from "lucide-react";
import { sourcingIngredients } from "../../data/heritage";

export const Route = createFileRoute("/heritage/ingredients")({
  head: () => ({
    meta: [
      { title: "Sourcing & Noble Raw Ingredients | Royale Aaroma" },
      {
        name: "description",
        content:
          "Traceable Indian terroir: Mysore Sandalwood, Kashmir Zafran, Assam Dehnal Oud, Misri Damask Rose, and Natural Musk bases.",
      },
      { property: "og:title", content: "Sourcing & Noble Raw Ingredients | Royale Aaroma" },
    ],
  }),
  component: SourcingIngredientsPage,
});

function SourcingIngredientsPage() {
  return (
    <div className="bg-background pb-24">
      {/* Breadcrumb */}
      <div className="site-container pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <Link to="/heritage" className="hover:text-accent">
            Heritage
          </Link>
          <span>/</span>
          <span className="font-bold text-accent">Sourcing & Ingredients</span>
        </div>
      </div>

      {/* Header */}
      <section className="site-container mt-6">
        <div className="max-w-3xl">
          <span className="eyebrow text-accent">Traceable Terroir Archive</span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.05]">
            Noble Raw Botanicals.
          </h1>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
            True luxury cannot be manufactured in a laboratory. It begins in the microclimates of
            the Indian subcontinent: the red volcanic loam of Karnataka, the high-altitude saffron
            plateaus of Pampore, the wild humid jungles of Assam, and the fertile alluvial plains of
            the Ganges.
          </p>
        </div>
      </section>

      {/* Five Authentic Ingredients Archive */}
      <section className="site-container mt-16 space-y-16">
        {sourcingIngredients.map((ing, idx) => (
          <div
            key={ing.id}
            className={`grid gap-10 lg:grid-cols-12 lg:items-center rounded-2xl border border-border/80 bg-surface p-8 sm:p-12 shadow-sm ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Box */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-border/70 shadow">
              <img
                src={ing.image}
                alt={ing.name}
                width={800}
                height={600}
                className="size-full object-cover"
              />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                <MapPin className="size-3 text-accent" />
                <span>{ing.region}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  Terroir 0{idx + 1}
                </span>
                <h2 className="mt-1 font-display text-3xl sm:text-4xl text-foreground font-medium">
                  {ing.name}
                </h2>
                {ing.latinName && (
                  <p className="mt-0.5 text-xs italic text-muted-foreground font-serif">
                    {ing.latinName}
                  </p>
                )}
              </div>

              <div className="rounded-lg bg-secondary/40 px-3.5 py-2 border border-border/60 text-xs font-semibold text-foreground inline-block">
                Olfactory Profile: {ing.profile}
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ing.description}
              </p>

              <div className="pt-2 text-xs border-t border-border/60">
                <strong className="text-foreground">Harvest & Ethical Protocol: </strong>
                <span className="text-muted-foreground">{ing.harvestNote}</span>
              </div>

              <div className="pt-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
                >
                  <span>Explore Fragrances Featuring {ing.name}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
