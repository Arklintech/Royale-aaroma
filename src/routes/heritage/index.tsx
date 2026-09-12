import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Flame, Flower2, Heart, ShieldCheck, Sparkles } from "lucide-react";
import workshopImage from "../../assets/craft-workshop.jpg";
import botanicalImage from "../../assets/botanical-notes.jpg";
import heroImage from "../../assets/royale-hero.jpg";
import { heritageStats } from "../../data/heritage";
import { DegBhapkaInteractive } from "../../components/DegBhapkaInteractive";

export const Route = createFileRoute("/heritage/")({
  head: () => ({
    meta: [
      { title: "Our Heritage & Craftsmanship | Royale Aaroma" },
      {
        name: "description",
        content:
          "Discover the centuries-old Deg Bhapka hydro-distillation method, 24+ years of fragrance mastery, and noble Indian botanical sourcing.",
      },
      { property: "og:title", content: "Our Heritage & Craftsmanship | Royale Aaroma" },
    ],
  }),
  component: HeritageIndexPage,
});

function HeritageIndexPage() {
  const destinations = [
    {
      title: "Our Story & Legacy",
      subtitle: "24+ Years of Fragrance Mastery",
      description:
        "The philosophical foundation of Royale Aaroma. How decades of compounding mastery, patient distillation, and modern restraint created a distinguished contemporary Indian fragrance house.",
      href: "/heritage/story",
      image: heroImage,
      badge: "The House",
    },
    {
      title: "The Deg Bhapka Process",
      subtitle: "Living Copper Stills of Kannauj",
      description:
        "An annotated, step-by-step interactive journey through the ancient hydro-distillation process: Bhatti, Deg, Chonga, Bhapka, and Gachchi cooling cisterns.",
      href: "/heritage/deg-bhapka",
      image: workshopImage,
      badge: "The Distillation",
    },
    {
      title: "Sourcing & Ingredients",
      subtitle: "Traceable Terroir Archive",
      description:
        "Noble raw materials from their historical origins: Mysore sandalwood heartwood, Kashmir Mongra saffron, wild Assam agarwood, and Misri Damask roses.",
      href: "/heritage/ingredients",
      image: botanicalImage,
      badge: "The Botanicals",
    },
  ];

  return (
    <div className="bg-background pb-24">
      {/* Header Banner */}
      <section className="relative min-h-[50vh] flex items-center bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="absolute inset-0 opacity-25">
          <img
            src={workshopImage}
            alt="Kannauj craft workshop"
            className="size-full object-cover"
          />
        </div>
        <div className="relative site-container max-w-3xl">
          <span className="eyebrow text-accent">Kannauj · Est. 2002</span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl text-primary-foreground leading-[1.05]">
            Centuries of Memory. Distilled Slowly.
          </h1>
          <p className="mt-4 text-xs sm:text-base text-primary-foreground/80 leading-relaxed">
            In an era of synthetic speed and mass-manufactured alcohol sprays, Royale Aaroma stands
            as a custodian of authentic Indian hydro-distillation. We compose pure botanical
            perfume oils with time, patience, and copper stills.
          </p>
        </div>
      </section>

      {/* Heritage Stats Strip */}
      <section className="border-b border-border/80 bg-secondary/30 py-8">
        <div className="site-container grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {heritageStats.map((s) => (
            <div key={s.label}>
              <span className="font-display text-3xl sm:text-4xl font-bold text-primary">
                {s.value}
              </span>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Three Major Heritage Destinations */}
      <section className="site-container mt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow text-accent">Signature Destinations</span>
          <h2 className="title-section">Three Pillars of Our Craft.</h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            Explore the history, technical science, and noble botanical origins of Royale Aaroma.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.title}
              className="flex flex-col justify-between rounded-xl border border-border/80 bg-surface overflow-hidden shadow-sm hover:border-accent hover:shadow-md transition-all group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    width={800}
                    height={500}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded bg-background/90 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-foreground">
                    {dest.badge}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-accent">
                    {dest.subtitle}
                  </span>
                  <h3 className="mt-2 font-display text-2xl group-hover:text-accent transition-colors">
                    {dest.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {dest.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={dest.href}
                  className="inline-flex items-center justify-between w-full rounded border border-border/80 p-3 text-xs font-bold uppercase tracking-wider text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  <span>Explore Destination</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Distillation Process Teaser */}
      <section className="site-container mt-20">
        <DegBhapkaInteractive showFullLink={false} />
      </section>
    </div>
  );
}
