import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Cylinder, Flame, FlaskConical, Waves } from "lucide-react";
import { degBhapkaSteps } from "../../data/heritage";
import workshopImage from "../../assets/craft-workshop.jpg";
import { DegBhapkaInteractive } from "../../components/DegBhapkaInteractive";

export const Route = createFileRoute("/heritage/deg-bhapka")({
  head: () => ({
    meta: [
      { title: "The Deg Bhapka Process | Kannauj Hydro-Distillation | Royale Aaroma" },
      {
        name: "description",
        content:
          "Comprehensive technical guide to traditional Kannauj Deg Bhapka hydro-distillation: Bhatti hearth, copper Deg, bamboo Chonga, Bhapka receiver, and Gachchi cooling cisterns.",
      },
      {
        property: "og:title",
        content: "The Deg Bhapka Process | Kannauj Hydro-Distillation | Royale Aaroma",
      },
    ],
  }),
  component: DegBhapkaPage,
});

function DegBhapkaPage() {
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
          <span className="font-bold text-accent">The Deg Bhapka Process</span>
        </div>
      </div>

      {/* Header Monograph */}
      <section className="site-container mt-6">
        <div className="max-w-3xl">
          <span className="eyebrow text-accent">Technical Monograph · Kannauj Tradition</span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.05]">
            The Alchemy of Copper, Clay & Water.
          </h1>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
            The Deg Bhapka distillation system is one of the oldest chemical engineering techniques
            still practiced anywhere in the world. Requiring zero electricity, automated pressure
            gauges, or synthetic catalysts, it operates entirely on the thermal dynamics of copper,
            alluvial river mud, bamboo, and master human instinct.
          </p>
        </div>
      </section>

      {/* Interactive Process Component */}
      <section className="site-container mt-12">
        <DegBhapkaInteractive showFullLink={false} />
      </section>

      {/* Deep-dive Technical Stages */}
      <section className="site-container mt-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-accent">Anatomy of the Distillation</span>
          <h2 className="title-section">The Five Critical Components.</h2>
        </div>

        <div className="space-y-12">
          {degBhapkaSteps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl border border-border/80 bg-surface p-8 sm:p-10 shadow-sm grid gap-8 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-3">
                <span className="font-display text-5xl font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-3xl text-foreground">{step.name}</h3>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {step.subtitle}
                </p>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-2 text-xs">
                  <strong className="text-foreground">Construction Material: </strong>
                  <span className="text-muted-foreground">{step.material}</span>
                </div>
              </div>

              <div className="lg:col-span-3 rounded-lg bg-secondary/40 p-4 border border-border/60">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Key Function
                </span>
                <p className="mt-1 text-xs font-semibold text-foreground">{step.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Natural Series Connection CTA */}
      <section className="site-container mt-24 text-center">
        <div className="rounded-2xl border border-border/80 bg-secondary/30 p-10 sm:p-14 max-w-3xl mx-auto">
          <span className="eyebrow text-accent">Pure Hydro-Distillations in Bottle</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Taste the Craft in our Natural Series.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our Natural Series consists of 20 pure attars produced exclusively via the Deg Bhapka
            method into pure Mysore sandalwood.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/shop/$collection"
              params={{ collection: "natural-series" }}
              className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
            >
              <span>Explore Natural Series</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
