import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Droplet,
  Flame,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import heroImage from "../assets/royale-hero.jpg";
import botanicalImage from "../assets/botanical-notes.jpg";
import workshopImage from "../assets/craft-workshop.jpg";
import { collections } from "../data/collections";
import { products } from "../data/products";
import { sourcingIngredients, heritageStats } from "../data/heritage";
import { journalArticles } from "../data/journal";
import { useCommerce, WHATSAPP_DISPLAY } from "../lib/commerce-context";
import { ProductCard } from "../components/ProductCard";
import { FormatDiscovery } from "../components/FormatDiscovery";
import { DegBhapkaInteractive } from "../components/DegBhapkaInteractive";
import { ResponsiveVideo } from "../components/ResponsiveVideo";
import { HeroBestSellerCarousel } from "../components/HeroBestSellerCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royale Aaroma | Fragrance Redefining Luxury" },
      {
        name: "description",
        content:
          "Contemporary Indian luxury fragrance house. Traditional Deg Bhapka hydro-distilled attars, pure botanical essences, and sacred scent rituals.",
      },
      { property: "og:title", content: "Royale Aaroma | Fragrance Redefining Luxury" },
      {
        property: "og:description",
        content:
          "Small-batch perfume oils composed with rare Mysore sandalwood, Kashmir saffron, and Kannauj damask roses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { setQuizOpen, getWhatsAppGeneralUrl, formatPrice } = useCommerce();

  // Signature featured products
  const featuredProducts = products.filter((p) => p.featured && !p.isPlaceholder).slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      {/* =========================================================================
          SECTION 01: FULL-SCREEN FEATURED BEST-SELLER HERO CAROUSEL
          ========================================================================= */}
      <HeroBestSellerCarousel />

      {/* =========================================================================
          SECTION 02: THE HOUSE OF ROYALE AAROMA
          Interactive Authentic Attar Making Process Film Media Layer
          ========================================================================= */}
      <HeritageProcessSection />

      {/* =========================================================================
          SECTION 03: FORMAT DISCOVERY (Attars, Bakhoor, Perfumes)
          ========================================================================= */}
      <FormatDiscovery />

      {/* =========================================================================
          SECTION 04: DISCOVER THE EIGHT COLLECTIONS
          ========================================================================= */}
      <section className="section-space bg-background">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow text-accent">Curated Fragrance Portfolios</span>
              <h2 className="title-section">Discover the Signature Collections.</h2>
              <p className="mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground">
                Each collection possesses its own distinct olfactory architecture, bottle presentation,
                and sensory intention—while remaining unmistakably Royale Aaroma.
              </p>
            </div>
            <Link
              to="/shop"
              className="text-link text-primary hover:text-accent transition-colors"
            >
              <span>View All Collections in Store</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 lg:gap-8">
            {collections
              .filter(
                (c) =>
                  c.slug !== "fruity-attars" &&
                  c.slug !== "bakhoor" &&
                  c.slug !== "perfumes"
              )
              .map((c) => {
              const isLuxury = c.themeStyle === "noir";
              const isParchment = c.themeStyle === "parchment";
              const isNavy = c.themeStyle === "navy";

              return (
                <div
                  key={c.slug}
                  className={`group relative flex flex-col justify-between rounded-xl border p-7 sm:p-8 transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.35rem)] min-h-[320px] ${
                    isLuxury
                      ? "bg-primary text-primary-foreground border-accent shadow-xl"
                      : isNavy
                        ? "bg-primary/95 text-primary-foreground border-primary"
                        : "bg-surface border-border/80 hover:border-accent shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[9px] font-bold uppercase tracking-widest ${
                          isLuxury || isNavy ? "text-accent" : "text-muted-foreground"
                        }`}
                      >
                        {c.seriesNumber}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider ${
                          isLuxury
                            ? "bg-accent text-accent-foreground"
                            : isNavy
                              ? "bg-primary-foreground/20 text-primary-foreground"
                              : "bg-secondary text-foreground"
                        }`}
                      >
                        {c.itemCountDescription}
                      </span>
                    </div>

                    <h3
                      className={`mt-4 font-display text-2xl font-medium leading-snug group-hover:text-accent transition-colors ${
                        isLuxury || isNavy ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {c.name}
                    </h3>

                    <p
                      className={`mt-1 text-[11px] font-semibold tracking-wider uppercase ${
                        isLuxury || isNavy ? "text-accent" : "text-accent"
                      }`}
                    >
                      {c.subtitle}
                    </p>

                    <p
                      className={`mt-4 text-xs leading-relaxed line-clamp-3 ${
                        isLuxury || isNavy ? "text-primary-foreground/75" : "text-muted-foreground"
                      }`}
                    >
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/50">
                    <Link
                      to="/shop/$collection"
                      params={{ collection: c.slug }}
                      className={`inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider transition-colors ${
                        isLuxury || isNavy
                          ? "text-accent group-hover:text-primary-foreground"
                          : "text-primary group-hover:text-accent"
                      }`}
                    >
                      <span>Explore Series</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: INTERACTIVE DEG BHAPKA PROCESS
          ========================================================================= */}
      <section className="section-space bg-surface border-y border-border/80">
        <div className="site-container">
          <DegBhapkaInteractive />
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: FEATURED BOTANICAL COMPOSITIONS
          ========================================================================= */}
      <section className="section-space bg-background">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow text-accent">Signature Extractions</span>
              <h2 className="title-section">Scents with an authentic sense of place.</h2>
              <p className="mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground">
                Small-batch perfume oils hydro-distilled in limited harvests. Tested on warm skin for
                optimal olfactory unfolding.
              </p>
            </div>
            <Link
              to="/shop"
              className="text-link text-primary hover:text-accent transition-colors"
            >
              <span>View All 30+ Fragrances</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: SOURCING & INGREDIENT ARCHIVE
          ========================================================================= */}
      <section className="section-space bg-primary text-primary-foreground">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow text-accent">Traceable Terroir</span>
              <h2 className="title-section text-primary-foreground">Noble Raw Materials.</h2>
              <p className="mt-3 max-w-xl text-xs sm:text-sm text-primary-foreground/75">
                True luxury begins at the source. Sourcing authentic Damask roses, aged sandalwood,
                and high-altitude saffron from their historical Indian origins.
              </p>
            </div>
            <Link
              to="/heritage/ingredients"
              className="text-link text-accent hover:text-primary-foreground transition-colors"
            >
              <span>View Complete Sourcing Archive</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sourcingIngredients.slice(0, 4).map((ing) => (
              <div
                key={ing.id}
                className="group relative flex flex-col justify-between rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 transition-all hover:border-accent"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    {ing.region}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-primary-foreground group-hover:text-accent transition-colors">
                    {ing.name}
                  </h3>
                  <p className="mt-1 text-xs italic text-primary-foreground/60">{ing.latinName}</p>

                  <p className="mt-4 text-xs leading-relaxed text-primary-foreground/75">
                    {ing.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-primary-foreground/10 text-[11px] text-accent">
                  <span>{ing.profile}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: PRIVATE FRAGRANCE CONSULTATION (QUIZ CALLOUT)
          ========================================================================= */}
      <section className="section-space bg-secondary/30 border-b border-border/80">
        <div className="site-container">
          <div className="rounded-2xl border border-border/80 bg-surface p-8 sm:p-14 lg:p-16 grid gap-8 lg:grid-cols-12 lg:items-center shadow-sm">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-accent">
                <Sparkles className="size-4" />
                <span className="eyebrow">Personal Scent Architecture</span>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl text-foreground">
                Find Your Royale Aaroma.
              </h2>
              <p className="mt-4 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Take our 2-minute private fragrance consultation. Answer five intuitive questions
                regarding mood, wear occasion, note preferences, and sillage to uncover your
                personalized botanical oil matches.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setQuizOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-all shadow-md"
                >
                  <Sparkles className="size-3.5 text-accent" />
                  <span>Start Consultation Quiz</span>
                </button>
                <a
                  href={getWhatsAppGeneralUrl("Master Perfumer Consultation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#25D366] bg-[#25D366]/10 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle className="size-4" />
                  <span>Consult via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl border border-border/70 bg-secondary/40 p-6 text-center">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                Private Consultation Benefit
              </span>
              <p className="mt-3 font-display text-2xl text-foreground">
                Complimentary Fragrance Recommendation
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Direct access to our senior compounding specialists for custom blending & corporate
                gifting inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: FRAGRANCE JOURNAL HIGHLIGHTS
          ========================================================================= */}
      <section className="section-space bg-background border-b border-border/80">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow text-accent">The Fragrance Journal</span>
              <h2 className="title-section">Notes on Scent & Memory.</h2>
              <p className="mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground">
                Historical essays, ingredient monographs, and pulse-point rituals authored by our
                distillers and compounding team.
              </p>
            </div>
            <Link
              to="/journal"
              className="text-link text-primary hover:text-accent transition-colors"
            >
              <span>Read Complete Journal</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {journalArticles.slice(0, 3).map((art) => (
              <article key={art.id} className="group flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src={art.image}
                      alt={art.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="text-accent font-bold">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="mt-2 font-display text-2xl leading-snug group-hover:text-accent transition-colors">
                    {art.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    to="/journal"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: TRUST, CLIENT VOICES & CATALOG CALLOUT
          ========================================================================= */}
      <section className="section-space bg-primary text-primary-foreground">
        <div className="site-container text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-1 text-accent text-lg">
            ★★★★★
          </div>
          <blockquote className="mt-6 font-display text-[clamp(1.75rem,3.8vw,3.5rem)] leading-tight text-primary-foreground">
            “An attar that behaves unlike anything in contemporary Western perfumery. The Ruh Khus
            settles into skin like monsoon petrichor, retaining its cooling jade depth well past
            fourteen hours.”
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            Vikram S. · Connoisseur & Private Collector, New Delhi
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-primary-foreground/20 pt-8 text-center">
            <div>
              <span className="font-display text-3xl font-bold text-accent">100%</span>
              <p className="mt-1 text-[10px] uppercase tracking-widest opacity-80">Alcohol-Free</p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-accent">24+</span>
              <p className="mt-1 text-[10px] uppercase tracking-widest opacity-80">Years Heritage</p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-accent">14h+</span>
              <p className="mt-1 text-[10px] uppercase tracking-widest opacity-80">Skin Longevity</p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-accent">Deg Bhapka</span>
              <p className="mt-1 text-[10px] uppercase tracking-widest opacity-80">Copper Distilled</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Interactive Heritage Section featuring the authentic attar-making process film background.
 * "THE CONTENT TELLS THE STORY. THE VIDEO PROVES THE STORY."
 * Video lives behind the content on the right, masked softly into the #F6F1E8 ivory surface,
 * with subtle section parallax, stat card focus alignment, and CTA hover transitions.
 */
/**
 * Redesigned Heritage Section: Split Editorial Composition
 * Left: Editorial Heritage story & philosophy (ivory background)
 * Right: Dedicated authentic process-video panel (5:6 aspect ratio, zero wash/blur)
 * Bottom: Horizontal editorial evidence metric rail with terracotta numbers
 */
function HeritageProcessSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [activeStatIndex, setActiveStatIndex] = React.useState<number | null>(null);

  const heritageMetrics = [
    {
      value: "24+",
      label: "EXPERIENCE",
      description: "YEARS OF FRAGRANCE HERITAGE & LEADERSHIP",
      position: "object-[75%_center]",
    },
    {
      value: "100%",
      label: "COPPER",
      description: "PURE COPPER DISTILLATION VESSELS",
      position: "object-[88%_center]",
    },
    {
      value: "0%",
      label: "DILUTION",
      description: "ALCOHOL, PHTHALATES & CHEMICAL SOLVENTS",
      position: "object-[65%_center]",
    },
    {
      value: "30+",
      label: "MATURATION",
      description: "NATURAL MATURATION IN LEATHER KUPPIS",
      position: "object-[95%_center]",
    },
  ];

  const currentObjectPosition =
    activeStatIndex !== null ? heritageMetrics[activeStatIndex]!.position : "object-[70%_center]";

  return (
    <section
      ref={sectionRef}
      className="section-space relative bg-[#F6F1E8] border-b border-border/80"
    >
      <div className="site-container relative z-10">
        {/* =========================================================================
            TOP SPLIT EDITORIAL GRID (LEFT CONTENT / RIGHT VIDEO PANEL)
            ========================================================================= */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-[#C8754E] tracking-[0.2em] font-semibold">
                THE HOUSE OF ROYALE AAROMA
              </span>
              <span className="h-px w-8 bg-[#C8754E]/40" />
            </div>

            <h2 className="mt-4 font-display text-[clamp(2.5rem,4.5vw,4.25rem)] font-medium leading-[1.04] text-[#1C1713] tracking-tight max-w-xl">
              A fragrance house<br className="hidden sm:inline" /> shaped by tradition.
            </h2>

            <div className="mt-6 space-y-4 max-w-[540px] text-sm sm:text-base leading-relaxed text-[#3F3933]">
              <p>
                Founded upon approximately 24 years of seasoned leadership in fine fragrance and
                botanical compounding, Royale Aaroma bridges the timeless legacy of Indian hydro-distillation
                with the refined restraint of world-class perfumery.
              </p>
              <p className="text-xs sm:text-sm text-[#3F3933]/90 leading-relaxed">
                We reject diluted alcohol sprays in favor of pure, uncut botanical perfume oils. Every
                flacon is composed patiently in copper stills, aged in leather kuppis, and absorbed
                directly into natural Mysore sandalwood.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/heritage"
                className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#173529] hover:text-[#C8754E] transition-colors"
              >
                <span className="relative pb-0.5 border-b border-[#173529]/40 group-hover:border-[#C8754E] transition-colors">
                  Discover Our Heritage Story
                </span>
                <ArrowRight className="size-4 text-[#173529] group-hover:text-[#C8754E] group-hover:translate-x-1.5 transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Column: Dedicated Authentic Process-Video Panel */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] lg:max-w-none aspect-[4/5] sm:aspect-[5/6] max-h-[520px] rounded-2xl overflow-hidden border border-border/80 bg-[#1C1713] shadow-md group/video transition-all duration-500">
              {/* AUTHENTIC PROCESS VIDEO (CLEAN / UNCONTAINED OVERLAYS) */}
              <video
                src="/attar_making_process.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className={`size-full object-cover transition-all duration-700 ease-out ${currentObjectPosition}`}
              >
                <source src="/Authentic_attar_making_process_film_20260911153637.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM HORIZONTAL EDITORIAL METRIC RAIL
            ========================================================================= */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#D8CFBF]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#D8CFBF]/70">
            {heritageMetrics.map((metric, idx) => (
              <div
                key={metric.label}
                onMouseEnter={() => setActiveStatIndex(idx)}
                onMouseLeave={() => setActiveStatIndex(null)}
                className={`flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  idx > 0 ? "md:pl-6 lg:pl-8" : ""
                } ${idx % 2 !== 0 ? "pt-6 md:pt-0" : ""}`}
              >
                <div>
                  <span className="font-display text-4xl sm:text-5xl font-medium text-[#C8754E]">
                    {metric.value}
                  </span>
                  <h4 className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1C1713]">
                    {metric.label}
                  </h4>
                </div>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-[#3F3933]/85 leading-snug max-w-[200px]">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
