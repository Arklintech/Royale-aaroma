import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import botanicalImage from "../assets/botanical-notes.jpg";

interface ShopMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShopMegaMenu({ isOpen, onClose }: ShopMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-x-0 top-full z-50 border-b border-border bg-background/98 shadow-2xl backdrop-blur-xl animate-fade-in"
      onMouseLeave={onClose}
    >
      <div className="site-container py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Column 1: Attar Collections (6 Series) */}
          <div className="lg:col-span-5 border-b pb-8 lg:border-b-0 lg:border-r lg:border-border/80 lg:pr-8">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="eyebrow text-accent">Core Heritage</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Alcohol-Free Oils
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl tracking-wide text-[#1B5E34] font-semibold">
              Attars & Perfume Oils
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "natural-series" }}
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                    Natural Series
                    <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    20 Pure Deg Bhapka botanicals
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "traditional-series" }}
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                    Traditional Series
                    <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    19 Timeless classical blends
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "inspired-series" }}
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                    Inspired Series
                    <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Contemporary international profiles
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "musk-series" }}
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                    Musk Series
                    <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    13 Sensual skin musks
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "luxury-series" }}
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                    Luxury Series
                    <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Master reserve vintage agarwoods
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "fruity-attars" }}
                  onClick={onClose}
                  className="group block"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                    Fruity Attars
                    <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    6 Vibrant, juicy perfume oils
                  </p>
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50">
              <Link
                to="/shop"
                onClick={onClose}
                className="text-[11px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5"
              >
                <span>Browse All Fragrances</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: New Sibling Formats (Bakhoor & Perfumes) */}
          <div className="lg:col-span-3 border-b pb-8 lg:border-b-0 lg:border-r lg:border-border/80 lg:pr-8">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="eyebrow text-accent flex items-center gap-1">
                <Sparkles className="size-3" />
                New Formats
              </span>
              <span className="rounded bg-accent/20 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-accent-foreground">
                Sibling Categories
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl tracking-wide">Ritual & Mist</h3>

            <div className="mt-6 space-y-6">
              <div className="group rounded-md border border-border/70 p-4 transition-all hover:border-accent hover:bg-secondary/30">
                <Link
                  to="/shop/$collection"
                  params={{ collection: "bakhoor" }}
                  onClick={onClose}
                  className="block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent">
                      Bakhoor
                    </span>
                    <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[9px] font-semibold text-primary">
                      Upcoming
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Sacred agarwood chips and resin incenses for fragrant spaces and garments.
                  </p>
                  <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-accent inline-flex items-center gap-1">
                    Explore Ritual <ArrowRight className="size-3" />
                  </span>
                </Link>
              </div>

              <div className="group rounded-md border border-border/70 p-4 transition-all hover:border-accent hover:bg-secondary/30">
                <Link
                  to="/shop/$collection"
                  params={{ collection: "perfumes" }}
                  onClick={onClose}
                  className="block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent">
                      Perfumes (Fine Sprays)
                    </span>
                    <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[9px] font-semibold text-primary">
                      Upcoming
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Extrait & Eau de Parfum atomizers combining Indian tenacity with airy sillage.
                  </p>
                  <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-accent inline-flex items-center gap-1">
                    Explore Sprays <ArrowRight className="size-3" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Featured Editorial Card */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-lg bg-surface p-5 border border-border/70">
            <div>
              <span className="eyebrow text-accent">Seasonal Highlight</span>
              <h4 className="mt-2 font-display text-xl leading-snug">
                Ruh Gulab: Dawn Damask Rose Hydro-Distillation
              </h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Experience the living bloom of Kannauj. Four tons of morning petals yielding pure
                concentrated essence into aged Mysore sandalwood.
              </p>
            </div>

            <div className="mt-5 relative aspect-[16/9] w-full overflow-hidden rounded">
              <img
                src={botanicalImage}
                alt="Ruh Gulab botanical harvest"
                width={600}
                height={337}
                className="size-full object-cover"
              />
            </div>

            <div className="mt-5 flex items-center justify-between pt-3 border-t border-border/60">
              <Link
                to="/shop/$collection/$slug"
                params={{ collection: "natural-series", slug: "ruh-gulab" }}
                onClick={onClose}
                className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                <span>View Ruh Gulab</span>
                <ArrowRight className="size-3" />
              </Link>
              <Link
                to="/catalogs"
                onClick={onClose}
                className="text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                Download Price List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
