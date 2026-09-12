import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Flame, Sparkles } from "lucide-react";
import { ResponsiveVideo } from "./ResponsiveVideo";

interface FormatItem {
  format: "attar" | "bakhoor" | "perfume";
  title: string;
  subtitle: string;
  icon: React.ElementType;
  concentration: string;
  application: string;
  longevity: string;
  aura: string;
  description: string;
  cta: string;
  href: string;
  badge: string;
}

/**
 * Enhanced luxury Attar Card powered by ResponsiveVideo component.
 * Features 100% crisp video visibility with zero opacity wash or blur.
 */
function AttarVideoCard({ format }: { format: FormatItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = format.icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-[#F6F1E8] p-7 hover:border-accent transition-all duration-500 overflow-hidden"
    >
      <ResponsiveVideo
        src="/Fragrance_bottle_video_in_shadow_20260910155717.mp4"
        mode="card"
        focalPoint="top-center"
        desktopPosition="object-top"
        desktopOpacity={1}
        hoverOpacity={1}
        isHovered={isHovered}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-secondary px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-foreground">
              {format.badge}
            </span>
            <Icon className="size-5 text-accent transition-transform duration-300 group-hover:scale-110" />
          </div>

          <h3 className="mt-5 font-display text-2xl text-foreground group-hover:text-accent transition-all duration-300 group-hover:-translate-y-0.5">
            {format.title}
          </h3>
          <p className="text-xs font-semibold text-accent -mt-0.5 transition-colors duration-300">
            {format.subtitle}
          </p>

          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            {format.description}
          </p>

          <dl className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs transition-colors duration-300 group-hover:border-accent/40">
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Concentration & Base:
              </dt>
              <dd className="font-semibold text-foreground mt-0.5">{format.concentration}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Application Method:
              </dt>
              <dd className="text-foreground/90 mt-0.5">{format.application}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Endurance & Sillage:
              </dt>
              <dd className="text-foreground/90 mt-0.5">
                {format.longevity}{" \u00B7 "}{format.aura}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 pt-4 border-t border-border/60 transition-colors duration-300 group-hover:border-accent/40">
          <Link
            to={format.href}
            className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors"
          >
            <span>{format.cta}</span>
            <ArrowRight className="size-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Interactive Bakhoor Card powered by ResponsiveVideo component.
 * Features 100% crisp burning Bakhoor video background with zero opacity wash.
 */
function BakhoorVideoCard({ format }: { format: FormatItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = format.icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-[#F6F1E8] p-7 hover:border-accent transition-all duration-500 overflow-hidden"
    >
      <ResponsiveVideo
        src="/bakhoor_burning_ritual.mp4"
        mode="card"
        focalPoint="center-bottom"
        desktopPosition="object-[center_bottom]"
        desktopOpacity={1}
        hoverOpacity={1}
        isHovered={isHovered}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-secondary px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-foreground">
              {format.badge}
            </span>
            <Icon className="size-5 text-accent transition-transform duration-300 group-hover:scale-110" />
          </div>

          <h3 className="mt-5 font-display text-2xl text-foreground group-hover:text-accent transition-all duration-300 group-hover:-translate-y-0.5">
            {format.title}
          </h3>
          <p className="text-xs font-semibold text-accent -mt-0.5 transition-colors duration-300">
            {format.subtitle}
          </p>

          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            {format.description}
          </p>

          <dl className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs transition-colors duration-300 group-hover:border-accent/40">
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Concentration & Base:
              </dt>
              <dd className="font-semibold text-foreground mt-0.5">{format.concentration}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Application Method:
              </dt>
              <dd className="text-foreground/90 mt-0.5">{format.application}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Endurance & Sillage:
              </dt>
              <dd className="text-foreground/90 mt-0.5">
                {format.longevity}{" \u00B7 "}{format.aura}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 pt-4 border-t border-border/60 transition-colors duration-300 group-hover:border-accent/40">
          <Link
            to={format.href}
            className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors"
          >
            <span>{format.cta}</span>
            <ArrowRight className="size-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Interactive Perfume Spray Card powered by ResponsiveVideo component.
 * Features 100% crisp fine mist spraying video background with zero opacity wash.
 */
function PerfumeVideoCard({ format }: { format: FormatItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = format.icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-[#F6F1E8] p-7 hover:border-accent transition-all duration-500 overflow-hidden"
    >
      <ResponsiveVideo
        src="/perfume_spraying_ritual.mp4"
        mode="card"
        focalPoint="center-bottom"
        desktopPosition="object-[center_bottom]"
        desktopOpacity={1}
        hoverOpacity={1}
        isHovered={isHovered}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-secondary px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-foreground">
              {format.badge}
            </span>
            <Icon className="size-5 text-accent transition-transform duration-300 group-hover:scale-110" />
          </div>

          <h3 className="mt-5 font-display text-2xl text-foreground group-hover:text-accent transition-all duration-300 group-hover:-translate-y-0.5">
            {format.title}
          </h3>
          <p className="text-xs font-semibold text-accent -mt-0.5 transition-colors duration-300">
            {format.subtitle}
          </p>

          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            {format.description}
          </p>

          <dl className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs transition-colors duration-300 group-hover:border-accent/40">
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Concentration & Base:
              </dt>
              <dd className="font-semibold text-foreground mt-0.5">{format.concentration}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Application Method:
              </dt>
              <dd className="text-foreground/90 mt-0.5">{format.application}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Endurance & Sillage:
              </dt>
              <dd className="text-foreground/90 mt-0.5">
                {format.longevity}{" \u00B7 "}{format.aura}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 pt-4 border-t border-border/60 transition-colors duration-300 group-hover:border-accent/40">
          <Link
            to={format.href}
            className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors"
          >
            <span>{format.cta}</span>
            <ArrowRight className="size-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const formats: FormatItem[] = [
  {
    format: "attar",
    title: "Attars & Perfume Oils",
    subtitle: "The Sacred Second-Skin",
    icon: Droplets,
    concentration: "100% Pure Oil · Zero Alcohol",
    application: "Directly on warm pulse points & garment seams",
    longevity: "12 to 24+ Hours",
    aura: "Intimate, warm, develops with body chemistry",
    description:
      "Traditional hydro-distilled botanical essences absorbed into Mysore sandalwood bases. Worn close to the skin like a private scented prayer.",
    cta: "Explore 6 Attar Collections",
    href: "/shop/attars",
    badge: "Core Heritage",
  },
  {
    format: "bakhoor",
    title: "Bakhoor & Incense",
    subtitle: "Sacred Smoke Rituals",
    icon: Flame,
    concentration: "Agarwood Chips & Resinous Tablets",
    application: "Electric Mabkhara or natural charcoal burners",
    longevity: "Persistent space & fabric scenting",
    aura: "Enveloping, ceremonial, atmospheric",
    description:
      "Precious agarwood shavings steeped in aged oils, frankincense, and floral attars. Perfumes ceremonial garments and welcomes guests with regal hospitality.",
    cta: "Discover Bakhoor Rituals",
    href: "/shop/bakhoor",
    badge: "Upcoming Release",
  },
  {
    format: "perfume",
    title: "Fine Fragrance Sprays",
    subtitle: "Radiant Mist Atomization",
    icon: Sparkles,
    concentration: "Extrait (30%) & Eau de Parfum (25%)",
    application: "Airy spray cloud over body & clothing",
    longevity: "8 to 14 Hours",
    aura: "Expansive, radiant diffusion & modern projection",
    description:
      "Re-engineered Indian botanicals composed for European mist bottles. Offers the effortless daily projection of fine spray atomizers without losing oriental depth.",
    cta: "Discover Perfume Sprays",
    href: "/shop/perfumes",
    badge: "Upcoming Release",
  },
];

export function FormatDiscovery() {
  return (
    <section className="section-space bg-surface border-y border-border/80">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-accent">Education & Scent Rituals</span>
          <h2 className="title-section">Find Your Format.</h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            From intimate alcohol-free body oils to sacred spatial smoke and modern fine sprays,
            explore how each olfactory medium lives and transforms in your daily rituals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <AttarVideoCard format={formats[0]!} />
          <BakhoorVideoCard format={formats[1]!} />
          <PerfumeVideoCard format={formats[2]!} />
        </div>
      </div>
    </section>
  );
}
