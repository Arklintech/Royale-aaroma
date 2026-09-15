import React, { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Droplets,
  Eye,
  Heart,
  Layers,
  Leaf,
  MessageCircle,
  PackageSearch,
  Sparkles,
  Zap,
} from "lucide-react";
import { CollectionMeta, Product, SizeOption } from "../data/types";
import { collections } from "../data/collections";
import { useCommerce } from "../lib/commerce-context";
import { ProductCard } from "./ProductCard";

// Visual Botanical & Cabinet Assets
import cabinetKewdaImg from "../assets/cabinet_kewda_1789464971745.jpg";
import cabinetSandalImg from "../assets/cabinet_sandal_1789465000270.jpg";
import cabinetGulabImg from "../assets/cabinet_gulab_1789465026162.jpg";
import nicheNaturalImg from "../assets/house_niche_natural_1789464627843.jpg";
import nicheTraditionalImg from "../assets/house_niche_traditional_1789464650812.jpg";
import nicheInspiredImg from "../assets/house_niche_inspired_1789464668532.jpg";
import nicheMuskImg from "../assets/house_niche_musk_1789464690991.jpg";
import nicheLuxuryImg from "../assets/house_niche_luxury_1789464710694.jpg";
import nicheFruityImg from "../assets/house_niche_fruity_1789464866958.jpg";
import roseHighlightImg from "../assets/house_rose_highlight_1789464943686.jpg";
import perfumeThumbImg from "../assets/house_perfume_thumb_1789464915775.jpg";

interface FragranceCabinetProps {
  collection: CollectionMeta;
  products: Product[];
  currentRoutePrefix?: "/collections" | "/shop";
}

export function FragranceCabinet({
  collection,
  products,
  currentRoutePrefix = "/shop",
}: FragranceCabinetProps) {
  const { addToCart, formatPrice, getWhatsAppProductUrl } = useCommerce();

  // Active product inside cabinet
  const [activeProductId, setActiveProductId] = useState<string>(() => {
    // Default to Kewda if available in Natural Series, or first product
    const kewda = products.find((p) => p.name.toLowerCase().includes("kewda"));
    if (kewda) return kewda.id;
    return products[0]?.id || "";
  });

  // Selected size for the active product
  const [selectedSize, setSelectedSize] = useState<string>("3 ML");
  const [addedToast, setAddedToast] = useState(false);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [showFullArchive, setShowFullArchive] = useState(false);

  // Active product object
  const activeProduct = useMemo(() => {
    return products.find((p) => p.id === activeProductId) || products[0];
  }, [products, activeProductId]);

  // Selected size price calculation
  const currentSizeOption: SizeOption = useMemo(() => {
    if (!activeProduct || !activeProduct.sizes || activeProduct.sizes.length === 0) {
      return { size: "3 ML", price: activeProduct?.startingPrice || 1000 };
    }
    const match = activeProduct.sizes.find((s) => s.size === selectedSize);
    return match ?? activeProduct.sizes[0] ?? { size: "3 ML", price: activeProduct.startingPrice || 1000 };
  }, [activeProduct, selectedSize]);

  // Handle Add To Cart
  const handleAddToCart = () => {
    if (!activeProduct) return;
    addToCart(activeProduct, currentSizeOption);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  // Toggle Wishlist
  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper to assign atmospheric botanical imagery to cabinet cells
  const getBotanicalImageForProduct = (p: Product) => {
    const name = p.name.toLowerCase();
    const fam = p.family.toLowerCase();

    if (name.includes("kewda") || name.includes("keora")) return cabinetKewdaImg;
    if (name.includes("sandal") || name.includes("chandan")) return cabinetSandalImg;
    if (name.includes("gulab") || name.includes("rose")) return cabinetGulabImg || roseHighlightImg;
    if (name.includes("khus") || name.includes("vetiver") || name.includes("hina")) return nicheNaturalImg;
    if (name.includes("chameli") || name.includes("motia") || name.includes("jasmine") || name.includes("raat")) return perfumeThumbImg;
    if (name.includes("oud") || name.includes("dehnal") || name.includes("mukhallat")) return nicheLuxuryImg;
    if (name.includes("musk") || name.includes("kasturi") || name.includes("tahara")) return nicheMuskImg;
    if (name.includes("nimbu") || name.includes("citrus") || name.includes("orange") || fam.includes("citrus") || fam.includes("fruity")) return nicheFruityImg;
    if (name.includes("mitti") || name.includes("amber") || name.includes("kesar")) return nicheTraditionalImg;

    if (p.collectionSlug === "inspired-series") return nicheInspiredImg;
    if (p.collectionSlug === "luxury-series") return nicheLuxuryImg;
    if (p.collectionSlug === "musk-series") return nicheMuskImg;
    if (p.collectionSlug === "traditional-series") return nicheTraditionalImg;
    return p.image || nicheNaturalImg;
  };

  // Collection-specific descriptors and quotes
  const collectionQuotes: Record<string, { quote: string; tag1: string; tag2: string }> = {
    "natural-series": {
      quote: "From earth's finest botanicals to your everyday moments.",
      tag1: "TRADITIONAL DISTILLATION",
      tag2: "100% NATURAL ORIGINS",
    },
    "traditional-series": {
      quote: "Classical Indian and Middle Eastern compounding heritage.",
      tag1: "TIMELESS COMPOSITIONS",
      tag2: "ALCOHOL-FREE FORMULAS",
    },
    "inspired-series": {
      quote: "Modern international profiles crafted into pure perfume oils.",
      tag1: "CONTEMPORARY INTERPRETATIONS",
      tag2: "HIGH LONGEVITY OILS",
    },
    "musk-series": {
      quote: "Velvety second-skin musks that warm with your natural pulse.",
      tag1: "INTIMATE SKIN SCENTS",
      tag2: "CRUELTY-FREE ACCORDS",
    },
    "luxury-series": {
      quote: "The master reserve of vintage Assam agarwoods and rare blooms.",
      tag1: "PRIVATE RESERVE DISTILLATIONS",
      tag2: "MASTER CONNOISSEUR RESERVE",
    },
    "fruity-attars": {
      quote: "Vibrant and uplifting nectar accords resting on warm woods.",
      tag1: "VIBRANT EXPRESSIONS",
      tag2: "UPCOMING RELEASE",
    },
  };

  const currentMeta = collectionQuotes[collection.slug] || {
    quote: "Artisanal fine fragrances formulated from noble botanicals in Kannauj.",
    tag1: "ARTISANAL COMPOUNDING",
    tag2: "100% ALCOHOL-FREE",
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          TOP HEADER BAR (Reference Image 02)
          ========================================================================= */}
      <div className="border-b border-[#D8CFBF] bg-[#F6F1E8] py-8 lg:py-10">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left Title & Descriptor */}
            <div>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#C8754E]">
                {collection.name.toUpperCase()}
              </span>
              <h1 className="mt-1 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1713]">
                {collection.subtitle.toUpperCase()}
              </h1>
              <p className="mt-2 font-display italic text-sm sm:text-base text-[#3F3933]/85">
                {currentMeta.quote}
              </p>
            </div>

            {/* Right Trust Badges / Dynamic Metadata */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[#1C1713]">
              {/* Dynamic Count */}
              <div className="flex items-center gap-2.5">
                <Leaf className="size-4 text-[#C8754E] stroke-[1.5]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
                  {products.length > 0 ? `${products.length} FRAGRANCES` : "COMING SOON"}
                </span>
              </div>

              {/* Distillation Tag */}
              <div className="flex items-center gap-2.5">
                <Layers className="size-4 text-[#C8754E] stroke-[1.5]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
                  {currentMeta.tag1}
                </span>
              </div>

              {/* Origin Tag */}
              <div className="flex items-center gap-2.5">
                <Droplets className="size-4 text-[#C8754E] stroke-[1.5]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
                  {currentMeta.tag2}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          COLLECTION QUICK SELECTOR BAR
          ========================================================================= */}
      <div className="border-b border-[#D8CFBF]/70 bg-[#FAF7F0] py-3.5">
        <div className="site-container">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3F3933]/70 shrink-0 mr-2">
              COLLECTIONS:
            </span>
            {collections
              .filter((c) => !["bakhoor", "perfumes"].includes(c.slug))
              .map((c) => {
                const isActive = c.slug === collection.slug;
                return (
                  <Link
                    key={c.slug}
                    to={`${currentRoutePrefix}/$collection`}
                    params={{ collection: c.slug }}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "bg-[#183426] text-[#FAF7F0] shadow-sm font-bold"
                        : "border border-[#D8CFBF] bg-[#F6F1E8] text-[#1C1713] hover:border-[#C8754E] hover:text-[#C8754E]"
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className="ml-1.5 opacity-70 text-[10px] italic">
                      ({c.subtitle})
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN CABINET PRESENTATION (Reference Image 02)
          ========================================================================= */}
      <div className="site-container py-10 lg:py-14">
        {products.length === 0 ? (
          /* Empty / Coming Soon Cabinet State (Fruity Series) */
          <div className="rounded-2xl border-4 border-[#3F2B1D] bg-[#221811] p-10 sm:p-16 text-center text-[#FBF9F4] shadow-2xl">
            <div className="mx-auto size-16 rounded-full border border-[#C8754E]/40 bg-[#C8754E]/10 flex items-center justify-center">
              <PackageSearch className="size-8 text-[#C8754E]" />
            </div>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl text-[#F6F1E8]">
              {collection.name} Cabinet In Preparation
            </h2>
            <p className="mt-3 max-w-md mx-auto text-xs sm:text-sm text-[#D8CFBF]/80 leading-relaxed">
              The {collection.name} formulation sanctuary is currently undergoing final maturation. Product slots in this cabinet will automatically populate upon official release.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/shop/$collection"
                params={{ collection: "natural-series" }}
                className="inline-flex items-center gap-2 rounded-md bg-[#183426] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#183426]/90 transition-all"
              >
                <span>EXPLORE NATURAL SERIES</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          /* Active Wooden Cabinet Grid with Spotlight Cells and Illuminated Active Card */
          <div className="rounded-2xl border-[6px] border-[#362417] bg-[#1E140D] p-3 sm:p-5 lg:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
            
            {/* Cabinet Top Header Trim */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-[#4A3525]/80 text-[#D8CFBF]/70 text-[10px] uppercase tracking-[0.2em] font-semibold">
              <span className="flex items-center gap-1.5 text-[#C8754E]">
                <Sparkles className="size-3" />
                THE FRAGRANCE CABINET
              </span>
              <span>ROYALE AAROMA ARTISANAL VAULT</span>
            </div>

            {/* The Shelving Matrix (5 columns on desktop, 3 on tablet, 2 on mobile) */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
              {products.map((product) => {
                const isActive = product.id === activeProduct?.id;
                const botanicalImg = getBotanicalImageForProduct(product);
                const isSaved = wishlist[product.id] || false;

                if (isActive) {
                  {/* =========================================================================
                      ACTIVE / EXPANDED PRODUCT CARD (Matching Kewda Card in Ref Image 02)
                      ========================================================================= */}
                  return (
                    <div
                      key={product.id}
                      className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 row-span-2 relative flex flex-col justify-between rounded-xl border-2 border-[#C8754E] bg-gradient-to-b from-[#FAF7F0] via-[#F6F1E8] to-[#EFE9DF] p-4 text-[#1C1713] shadow-[0_12px_32px_rgba(0,0,0,0.45)] z-20 transition-all duration-300 transform scale-[1.02]"
                    >
                      {/* Top Action Icons */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#C8754E]">
                          <Leaf className="size-3 text-[#C8754E]" />
                          FEATURED
                        </span>
                        <button
                          type="button"
                          onClick={(e) => toggleWishlist(product.id, e)}
                          className="p-1 text-[#3F3933] hover:text-[#C8754E] transition-colors"
                          title="Save to Wishlist"
                        >
                          <Heart
                            className={`size-4 ${
                              isSaved ? "fill-[#C8754E] text-[#C8754E]" : "text-[#3F3933]"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Center Bottle & Botanical Image */}
                      <div className="my-2 relative aspect-square w-full overflow-hidden rounded-lg bg-[#E5DEC9]/40 border border-[#D8CFBF]/60">
                        <img
                          src={botanicalImg}
                          alt={product.name}
                          className="size-full object-cover"
                          loading="lazy"
                        />
                        {/* Soft botanical warm wash */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1713]/20 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Product Metadata & Notes */}
                      <div className="text-center mt-1">
                        {product.inspiredBy && (
                          <span className="block text-[10px] italic text-[#C8754E] font-medium leading-tight mb-1">
                            Inspired by: {product.inspiredBy}
                          </span>
                        )}
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1C1713] leading-tight">
                          {product.name}
                        </h3>
                        <p className="mt-0.5 text-[11px] font-sans text-[#3F3933]/90 line-clamp-1">
                          {product.headline || product.family}
                        </p>
                      </div>

                      {/* Available Sizes & Dynamic Price Selector */}
                      <div className="my-3 pt-2 border-t border-[#D8CFBF]/70">
                        <div className="grid grid-cols-3 gap-1.5">
                          {product.sizes.map((s) => {
                            const isSelected = currentSizeOption.size === s.size;
                            return (
                              <button
                                key={s.size}
                                type="button"
                                onClick={() => setSelectedSize(s.size)}
                                className={`flex flex-col items-center justify-center rounded-md py-1 px-0.5 border text-center transition-all ${
                                  isSelected
                                    ? "border-[#183426] bg-[#183426] text-white shadow-sm font-bold"
                                    : "border-[#D8CFBF] bg-white/70 text-[#1C1713] hover:border-[#C8754E]"
                                }`}
                              >
                                <span className="text-[10.5px] font-bold tracking-tight">
                                  {formatPrice(s.price)}
                                </span>
                                <span className="text-[8.5px] uppercase tracking-wider opacity-80">
                                  {s.size}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Add to Cart CTA & Detail Link */}
                      <div className="space-y-1.5">
                        <button
                          type="button"
                          onClick={handleAddToCart}
                          className="w-full flex items-center justify-center gap-2 rounded-md bg-[#183426] py-2.5 px-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow hover:bg-[#183426]/90 active:scale-[0.99] transition-all cursor-pointer"
                        >
                          {addedToast ? (
                            <>
                              <Check className="size-3.5 text-[#86efac]" />
                              <span>ADDED TO CART</span>
                            </>
                          ) : (
                            <span>ADD TO CART</span>
                          )}
                        </button>

                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider pt-1 text-[#3F3933]">
                          <Link
                            to="/shop/$collection/$slug"
                            params={{ collection: product.collectionSlug, slug: product.slug }}
                            className="hover:text-[#C8754E] transition-colors inline-flex items-center gap-1"
                          >
                            <span>VIEW DETAILS</span>
                            <ArrowRight className="size-2.5" />
                          </Link>

                          <a
                            href={getWhatsAppProductUrl(product)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#128C7E] hover:underline inline-flex items-center gap-1"
                          >
                            <MessageCircle className="size-3" />
                            <span>WHATSAPP</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }

                {/* =========================================================================
                    STANDARD CABINET COMPARTMENT CELL
                    ========================================================================= */}
                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => {
                      setActiveProductId(product.id);
                      setSelectedSize("3 ML");
                    }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-[#443022] bg-gradient-to-b from-[#2B1D14] via-[#241710] to-[#1C120C] text-left transition-all duration-300 hover:border-[#C8754E] hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] cursor-pointer"
                  >
                    {/* Top Overhead Spotlight Glow Beam */}
                    <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-amber-200/20 via-amber-300/5 to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 size-2 rounded-full bg-amber-200/80 shadow-[0_0_8px_rgba(251,191,36,0.9)] -mt-1" />

                    {/* Bottle and Botanical Imagery Stage */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden p-3 flex items-center justify-center">
                      <img
                        src={botanicalImg}
                        alt={product.name}
                        className="size-full object-cover rounded shadow-md transition-transform duration-500 ease-out group-hover:scale-106"
                        loading="lazy"
                      />
                      {/* Subtle hover prompt */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="rounded bg-[#FAF7F0] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#1C1713] shadow">
                          Inspect Scent
                        </span>
                      </div>
                    </div>

                    {/* Bottom Engraved Brass Nameplate */}
                    <div className="w-full border-t border-[#4A3525] bg-[#160E08] px-2 py-2 text-center shadow-inner group-hover:bg-[#20140D] transition-colors">
                      <span className="font-serif text-[11px] sm:text-[11.5px] uppercase tracking-[0.14em] text-[#E5C388] font-semibold drop-shadow-sm truncate block group-hover:text-[#F3D7A0]">
                        {product.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Cabinet Bottom Control Bar: Explore Full Archive Toggle */}
            <div className="mt-6 pt-4 border-t border-[#4A3525]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-[#D8CFBF]/75 tracking-wide">
                Showing all {products.length} formulated attars in the {collection.name} cabinet.
              </span>

              <button
                type="button"
                onClick={() => setShowFullArchive(!showFullArchive)}
                className="inline-flex items-center gap-2 rounded-md border border-[#D8CFBF]/40 bg-[#2C1D14] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#FAF7F0] hover:border-[#C8754E] hover:bg-[#3A261A] transition-all cursor-pointer"
              >
                <span>
                  {showFullArchive ? "HIDE PRODUCT ARCHIVE" : `EXPLORE ALL ${products.length} FRAGRANCES`}
                </span>
                <ArrowRight className="size-3.5 text-[#C8754E]" />
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            FULL PRODUCT ARCHIVE / GRID (When toggled or requested)
            ========================================================================= */}
        {showFullArchive && products.length > 0 && (
          <section className="mt-16 pt-10 border-t border-[#D8CFBF]/80">
            <div className="flex items-center justify-between border-b border-[#D8CFBF]/70 pb-4 mb-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8754E]">
                  COMPLETE ARCHIVE
                </span>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl text-[#1C1713]">
                  All {collection.name} Products ({products.length})
                </h2>
              </div>

              <Link
                to="/shop"
                className="text-xs uppercase tracking-wider font-semibold text-[#C8754E] hover:underline flex items-center gap-1"
              >
                <span>All 6 Collections</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} theme="light" />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
