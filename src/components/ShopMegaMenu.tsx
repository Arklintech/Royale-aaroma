import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getProductsByCollection } from "../data/products";

// Luxury Architectural Niches & Reference Image Assets
import nicheNatural from "../assets/house_niche_natural_1789464627843.jpg";
import nicheTraditional from "../assets/house_niche_traditional_1789464650812.jpg";
import nicheInspired from "../assets/house_niche_inspired_1789464668532.jpg";
import nicheMusk from "../assets/house_niche_musk_1789464690991.jpg";
import nicheLuxury from "../assets/house_niche_luxury_1789464710694.jpg";
import nicheFruity from "../assets/house_niche_fruity_1789464866958.jpg";
import thumbBakhoor from "../assets/house_bakhoor_thumb_1789464891989.jpg";
import highlightRose from "../assets/house_rose_highlight_1789464943686.jpg";

interface ShopMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShopMegaMenu({ isOpen, onClose }: ShopMegaMenuProps) {
  if (!isOpen) return null;

  // 6 Primary Architectural Collections
  const nicheData = [
    {
      slug: "natural-series",
      shortTitle: "NATURAL",
      subtitle: "Pure Botanicals",
      image: nicheNatural,
      sampleNames: ["Ruh Khus", "Gulab Special", "Kewda"],
      isComingSoon: false,
    },
    {
      slug: "traditional-series",
      shortTitle: "TRADITIONAL",
      subtitle: "Timeless Classics",
      image: nicheTraditional,
      sampleNames: ["Sandal (Creamy)", "Mysore Sandal", "Kesar Candan"],
      isComingSoon: false,
    },
    {
      slug: "inspired-series",
      shortTitle: "INSPIRED",
      subtitle: "Modern Interpretations",
      image: nicheInspired,
      sampleNames: ["Majestic Oud", "Imperium", "Alpha"],
      isComingSoon: false,
    },
    {
      slug: "musk-series",
      shortTitle: "MUSK",
      subtitle: "Intimate Essences",
      image: nicheMusk,
      sampleNames: ["White Musk", "Musk Rijali", "Musk Tahara"],
      isComingSoon: false,
    },
    {
      slug: "luxury-series",
      shortTitle: "LUXURY",
      subtitle: "Exceptional Blends",
      image: nicheLuxury,
      sampleNames: ["Mukhallat Maliki", "Mukhallat Suyufi", "Oud Mukhallat"],
      isComingSoon: false,
    },
    {
      slug: "fruity-attars",
      shortTitle: "FRUITY",
      subtitle: "Vibrant Expressions",
      image: nicheFruity,
      sampleNames: [],
      isComingSoon: true,
    },
  ];

  return (
    <div
      id="shop-mega-menu"
      role="region"
      aria-label="The House of Fragrances Shop Menu"
      className="absolute inset-x-0 top-full z-50 transition-all duration-200 ease-out max-h-[85vh] overflow-y-auto"
      style={{
        animation: "fadeInTranslate 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      {/* Top pointer beak pointing to the SHOP trigger */}
      <div className="relative mx-auto w-full max-w-[1560px] px-6 sm:px-10 lg:px-[clamp(20px,3.5vw,48px)]">
        <div className="absolute left-[38%] lg:left-[41.5%] -top-2.5 size-0 border-x-[10px] border-x-transparent border-b-[10px] border-b-[#F6F1E8] z-20" />
      </div>

      {/* Main Luxury Parchment Panel */}
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-[clamp(20px,3.5vw,48px)] py-3">
        <div className="rounded-2xl border border-[#D8CFBF] bg-[#F6F1E8] p-6 lg:p-8 shadow-2xl backdrop-blur-xl text-[#1C1713]">
          
          {/* =========================================================================
              1. TOP INTRODUCTION (PROMINENT AT THE TOP, NO CLIPPING)
              ========================================================================= */}
          <div className="text-center border-b border-[#D8CFBF]/70 pb-6">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.26em] text-[#C8754E] block">
              EXPLORE
            </span>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1713]">
              THE HOUSE OF FRAGRANCES
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-[#3F3933]/85 tracking-wide font-sans max-w-md mx-auto">
              Six collections. A world of scents.
            </p>
          </div>

          {/* =========================================================================
              2. SIX COLLECTIONS (HORIZONTALLY ORGANIZED DIRECTLY BELOW HEADING)
              ========================================================================= */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {nicheData.map((niche) => {
              // Fetch dynamic products from authoritative catalog
              const catalogProducts = getProductsByCollection(niche.slug);
              const displayNames = niche.isComingSoon
                ? []
                : catalogProducts.length > 0
                  ? catalogProducts.slice(0, 3).map((p) => p.name)
                  : niche.sampleNames;

              return (
                <Link
                  key={niche.slug}
                  to="/shop/$collection"
                  params={{ collection: niche.slug }}
                  onClick={onClose}
                  className="group flex flex-col justify-between rounded-xl p-2.5 transition-all duration-300 hover:bg-[#EFE9DF]/80 hover:shadow-sm"
                >
                  {/* Arched Architectural Window */}
                  <div>
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[36px] rounded-b-md bg-[#E5DEC9]/50 border border-[#D8CFBF]/60 shadow-inner">
                      <img
                        src={niche.image}
                        alt={`${niche.shortTitle} Series Collection`}
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Collection Title & Subtitle */}
                    <div className="mt-3 text-center">
                      <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#1C1713] group-hover:text-[#C8754E] transition-colors">
                        {niche.shortTitle}
                      </h3>
                      <p className="mt-0.5 font-display text-[11px] italic text-[#C8754E] font-medium leading-tight">
                        {niche.subtitle}
                      </p>
                    </div>

                    {/* Sample Products List / Status */}
                    <div className="mt-2.5 pt-2 border-t border-[#D8CFBF]/40 text-center space-y-1">
                      {niche.isComingSoon ? (
                        <span className="block text-[9px] font-semibold uppercase tracking-wider text-[#3F3933]/70 pt-1">
                          COLLECTION COMING SOON
                        </span>
                      ) : (
                        displayNames.map((name, i) => (
                          <span
                            key={i}
                            className="block text-[10.5px] text-[#3F3933] font-sans truncate hover:text-[#1C1713] transition-colors"
                          >
                            {name}
                          </span>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Bottom Explore Link */}
                  <div className="mt-3 pt-2 text-center border-t border-transparent group-hover:border-[#D8CFBF]/40">
                    <span className="inline-flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#1C1713] group-hover:text-[#C8754E] transition-colors">
                      EXPLORE <ArrowRight className="size-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* =========================================================================
              3. HORIZONTAL SEPARATOR
              ========================================================================= */}
          <div className="my-6 h-[1px] w-full bg-[#D8CFBF]" />

          {/* =========================================================================
              4. NEW FORMATS (LEFT) & SEASONAL HIGHLIGHT (RIGHT) BELOW DIVIDER
              ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* NEW FORMATS (BAKHOOR ONLY - Fine Sprays Removed) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C8754E] flex items-center gap-1">
                  NEW FORMATS
                </span>
                <span className="rounded-full bg-[#E5DEC9] px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-[#3F3933]">
                  SIBLING CATEGORIES
                </span>
              </div>

              {/* Bakhoor Only */}
              <Link
                to="/shop/$collection"
                params={{ collection: "bakhoor" }}
                onClick={onClose}
                className="group flex gap-4 rounded-xl border border-[#D8CFBF] bg-[#FAF7F0] p-4 transition-all duration-300 hover:border-[#C8754E] hover:bg-[#FAF7F0]/90 hover:shadow-sm"
              >
                <div className="size-20 shrink-0 overflow-hidden rounded-lg border border-[#D8CFBF]/60 bg-muted">
                  <img
                    src={thumbBakhoor}
                    alt="Royale Aaroma Bakhoor Ritual"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C1713] group-hover:text-[#C8754E] transition-colors">
                        BAKHOOR
                      </h4>
                      <span className="rounded bg-[#183426]/10 px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider text-[#183426]">
                        UPCOMING
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#3F3933]/85 line-clamp-2">
                      Sacred agarwood chips and resin incenses for fragrant spaces and garments.
                    </p>
                  </div>
                  <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#C8754E]">
                    EXPLORE RITUAL <ArrowRight className="size-2.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </div>

            {/* SEASONAL HIGHLIGHT SECTION */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C8754E] block">
                SEASONAL HIGHLIGHT
              </span>

              <div className="rounded-xl border border-[#D8CFBF] bg-[#FAF7F0] p-4">
                <div className="flex gap-4">
                  <div className="size-20 shrink-0 overflow-hidden rounded-lg border border-[#D8CFBF]/60 bg-muted">
                    <img
                      src={highlightRose}
                      alt="Ruh Gulab Damask Rose Harvest"
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h4 className="font-display text-base font-semibold text-[#1C1713] leading-tight">
                        Ruh Gulab: <span className="italic font-normal text-xs text-[#C8754E]">Dawn Damask Rose Hydro-Distillation</span>
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-[#3F3933]/80 line-clamp-2">
                        Experience the living bloom of Kannauj. Four tons of morning petals yielding pure rose extract master-infused in aged Mysore sandalwood.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2 pt-2.5 border-t border-[#D8CFBF]/50">
                  <Link
                    to="/shop/$collection/$slug"
                    params={{ collection: "natural-series", slug: "ruh-gulab" }}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 rounded-md bg-[#183426] px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#183426]/90 cursor-pointer"
                  >
                    <span>VIEW RUH GULAB</span>
                    <ArrowRight className="size-2.5" />
                  </Link>

                  <Link
                    to="/catalogs"
                    onClick={onClose}
                    className="text-[10px] font-bold uppercase tracking-wider text-[#3F3933] hover:text-[#C8754E] transition-colors cursor-pointer"
                  >
                    DOWNLOAD PRICE LIST
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInTranslate {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
