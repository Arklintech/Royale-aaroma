import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import workshopImage from "../assets/craft-workshop.jpg";
import botanicalImage from "../assets/botanical-notes.jpg";
import heroImage from "../assets/royale-hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Visual Gallery & Distillation Archive | Royale Aaroma" },
      {
        name: "description",
        content:
          "Behind-the-scenes visual archive: The Craft, The Materials, The House, and The Perfumer at Royale Aaroma Kannauj.",
      },
      { property: "og:title", content: "Visual Gallery & Distillation Archive | Royale Aaroma" },
    ],
  }),
  component: GalleryPage,
});

interface GalleryItem {
  id: string;
  category: "The Craft" | "The Materials" | "The House" | "The Perfumer";
  title: string;
  location: string;
  description: string;
  image: string;
}

function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const galleryItems: GalleryItem[] = [
    {
      id: "craft-01",
      category: "The Craft",
      title: "Firing the Copper Deg Cauldron",
      location: "Kannauj Stillhouse, Uttar Pradesh",
      description:
        "Master fire-tenders regulating the Bhatti flame under the morning's first load of Misri rose petals.",
      image: workshopImage,
    },
    {
      id: "craft-02",
      category: "The Craft",
      title: "The Twine-Bound Bamboo Chonga",
      location: "Distillation Bay 04, Kannauj",
      description:
        "The angled natural bamboo pipe channeling delicate botanical steam from boiling cauldron to submerged copper flask.",
      image: heroImage,
    },
    {
      id: "mat-01",
      category: "The Materials",
      title: "Pampore Mongra Saffron Stigmas",
      location: "Pampore Valley, Kashmir",
      description:
        "Hand-separated Grade-1 saffron threads resting before being infused into warm sandalwood carrier oil.",
      image: botanicalImage,
    },
    {
      id: "mat-02",
      category: "The Materials",
      title: "Assam Wild Agarwood Heartwood",
      location: "Upper Assam Forest Allocations",
      description:
        "Naturally resinous Aquilaria wood chips selected for our reserve vintage Dehnal Oud hydro-distillations.",
      image: workshopImage,
    },
    {
      id: "house-01",
      category: "The House",
      title: "Hand-Bottling into Heavy Crystal Flacons",
      location: "Packaging Atelier, Royale Aaroma",
      description:
        "Pure uncut perfume oils decanted by hand with glass pipettes and sealed with royal blue thread.",
      image: heroImage,
    },
    {
      id: "house-02",
      category: "The House",
      title: "The Maturation Cellar in Leather Kuppis",
      location: "Aging Vaults, Kannauj",
      description:
        "Attar oils resting in breathing leather containers for 30 to 45 days to eliminate moisture and mature ester complexes.",
      image: botanicalImage,
    },
    {
      id: "perf-01",
      category: "The Perfumer",
      title: "Sensory Olfactory Evaluation",
      location: "Compounding Studio",
      description:
        "Senior master blenders evaluating the 24-hour pulse-point persistence of new experimental attar accords.",
      image: workshopImage,
    },
    {
      id: "perf-02",
      category: "The Perfumer",
      title: "Formulating the Scent of Rain",
      location: "Kannauj Clay Distillation",
      description:
        "Testing alluvial terracotta shards baked in summer sun before hydro-distillation into pure sandalwood base.",
      image: heroImage,
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div className="bg-background pb-24">
      {/* Header */}
      <section className="border-b border-border/80 bg-surface py-14 lg:py-20">
        <div className="site-container max-w-3xl">
          <span className="eyebrow text-accent">Visual Documentation</span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl text-foreground">
            The Living Archive.
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            A photographic chronicle of our daily rituals: the wood fires of Kannauj, raw botanical
            terroirs, patient leather cellar maturation, and the quiet precision of the master
            perfumer.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { label: "All Archives", value: "all" },
              { label: "The Craft", value: "The Craft" },
              { label: "The Materials", value: "The Materials" },
              { label: "The House", value: "The House" },
              { label: "The Perfumer", value: "The Perfumer" },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/80 bg-background text-foreground hover:border-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="site-container mt-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl border border-border/80 bg-surface shadow-sm hover:border-accent hover:shadow-md transition-all"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-background/90 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-foreground">
                  {item.category}
                </span>
              </div>

              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  {item.location}
                </span>
                <h3 className="mt-1 font-display text-2xl group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage CTA */}
      <section className="site-container mt-20 text-center">
        <div className="rounded-xl border border-border/80 bg-secondary/30 p-8 max-w-xl mx-auto">
          <span className="eyebrow text-accent">Kannauj Terroir</span>
          <h3 className="mt-2 font-display text-2xl">Want to learn more about the distillation?</h3>
          <p className="mt-2 text-xs text-muted-foreground">
            Explore our interactive Deg Bhapka monograph or download the official compendium.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              to="/heritage/deg-bhapka"
              className="inline-flex items-center gap-1.5 rounded bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              <span>Explore Distillation</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              to="/catalogs"
              className="inline-flex items-center gap-1.5 rounded border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
            >
              <span>View Price List</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
