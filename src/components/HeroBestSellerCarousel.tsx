import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Leaf,
  MessageCircle,
  Sparkles,
  Timer,
} from "lucide-react";
import { heroBestSellersData, HeroBestSellerSlide } from "../data/heroBestSellers";
import { useCommerce } from "../lib/commerce-context";

interface HeroBestSellerCarouselProps {
  slides?: HeroBestSellerSlide[];
  autoPlayInterval?: number;
}

export function HeroBestSellerCarousel({
  slides = heroBestSellersData,
  autoPlayInterval = 5500,
}: HeroBestSellerCarouselProps) {
  const { formatPrice, getWhatsAppGeneralUrl } = useCommerce();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex] || slides[0]!;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((index + totalSlides) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning, totalSlides]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Reset and pause autoplay upon manual user interaction
  const triggerManualInteraction = useCallback(() => {
    setIsPaused(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    const resumeTimer = setTimeout(() => {
      setIsPaused(false);
    }, 7000);
    return () => clearTimeout(resumeTimer);
  }, []);

  // Autoplay loop
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, autoPlayInterval, nextSlide, totalSlides]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        triggerManualInteraction();
        prevSlide();
      } else if (e.key === "ArrowRight") {
        triggerManualInteraction();
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, triggerManualInteraction]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!e.touches[0]) return;
    triggerManualInteraction();
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!e.touches[0]) return;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Zero-padded indicator string
  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalSlides).padStart(2, "0");

  return (
    <section
      className="relative w-full min-h-[100svh] lg:min-h-screen flex flex-col justify-between select-none bg-[#14100D] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="House Best-Sellers Hero Fragrance Worlds"
    >
      {/* =========================================================================
          1. FULL-BLEED BACKGROUND VISUAL WORLDS (CROSSFADE TRANSITION)
          ========================================================================= */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 size-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0 scale-100" : "opacity-0 -z-10 scale-105 pointer-events-none"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <img
              src={slide.background}
              alt={`${slide.name} — ${slide.category}`}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              className={`size-full object-cover transition-all duration-1000 ${
                slide.focalPointDesktop || "object-[60%_center]"
              }`}
            />
          </div>
        );
      })}

      {/* =========================================================================
          2. OUTER NAVIGATION CONTROLS (DEDICATED CONTROL LAYER - z-40, OUTSIDE CONTENT)
          ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 z-40 size-full hidden md:block">
        <button
          type="button"
          onClick={() => {
            triggerManualInteraction();
            prevSlide();
          }}
          aria-label="Previous best-seller fragrance world"
          className="pointer-events-auto absolute top-1/2 -translate-y-1/2 left-[clamp(18px,2vw,36px)] flex size-12 lg:size-14 items-center justify-center rounded-full border border-[#FFFDF8]/30 bg-black/20 hover:bg-black/45 text-[#FFFDF8] hover:border-[#FFFDF8]/70 hover:scale-105 transition-all duration-300 backdrop-blur-xs cursor-pointer group/arrow focus-visible:outline-2 focus-visible:outline-[#C8754E]"
        >
          <ChevronLeft className="size-5 lg:size-6 transition-transform duration-200 group-hover/arrow:-translate-x-1" />
        </button>

        <button
          type="button"
          onClick={() => {
            triggerManualInteraction();
            nextSlide();
          }}
          aria-label="Next best-seller fragrance world"
          className="pointer-events-auto absolute top-1/2 -translate-y-1/2 right-[clamp(18px,2vw,36px)] flex size-12 lg:size-14 items-center justify-center rounded-full border border-[#FFFDF8]/30 bg-black/20 hover:bg-black/45 text-[#FFFDF8] hover:border-[#FFFDF8]/70 hover:scale-105 transition-all duration-300 backdrop-blur-xs cursor-pointer group/arrow focus-visible:outline-2 focus-visible:outline-[#C8754E]"
        >
          <ChevronRight className="size-5 lg:size-6 transition-transform duration-200 group-hover/arrow:translate-x-1" />
        </button>
      </div>

      {/* Top Navigation Spacing Inset */}
      <div className="h-24 sm:h-28 lg:h-32 w-full shrink-0 pointer-events-none" />

      {/* =========================================================================
          3. SHARED HERO CONTENT CONTAINER (GUARANTEED SAFE ZONES, ZERO OVERLAP)
          ========================================================================= */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 lg:px-[clamp(88px,7vw,120px)] my-auto py-6 sm:py-8 lg:py-10">
        <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,1.05fr)] gap-[clamp(32px,5vw,96px)] items-center">
          {/* Left Column: Coherent Editorial Narrative Stack */}
          <div className="flex flex-col justify-center max-w-[620px] text-left">
            {/* Brand Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#F6F1E8]/90 drop-shadow-sm">
                {currentSlide.eyebrow}
              </span>
              <span className="h-px w-8 bg-[#C8754E]/60 hidden sm:inline-block" />
            </div>

            {/* Main Display Headline (Controlled Max-Width 700px) */}
            <h1 className="mt-3 sm:mt-4 font-display text-[clamp(2.35rem,5vw,4.5rem)] font-medium leading-[0.98] text-[#FFFDF8] tracking-tight whitespace-pre-line drop-shadow-md max-w-[700px]">
              {currentSlide.headline}
            </h1>

            {/* Supporting Statement (Controlled Max-Width 590px) */}
            <p className="mt-4 sm:mt-5 max-w-[590px] text-xs sm:text-sm lg:text-base leading-[1.55] text-[#F6F1E8]/85 drop-shadow-sm">
              {currentSlide.supportingCopy}
            </p>

            {/* Active Product Discovery Section (Max-Width 520px) */}
            <div className="mt-6 sm:mt-7 pt-4 border-t border-[#FFFDF8]/20 max-w-[520px] transition-all duration-500">
              <div className="flex items-baseline gap-3">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#FFFDF8] tracking-tight drop-shadow-sm">
                  {currentSlide.name}
                </h2>
                {currentSlide.badge && (
                  <span className="inline-block rounded-full bg-[#C8754E]/90 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FFFDF8] shadow-xs">
                    {currentSlide.badge}
                  </span>
                )}
              </div>

              <div className="mt-1 flex items-center gap-3">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8B382]">
                  {currentSlide.category}
                </span>
                <span className="text-[#FFFDF8]/40 text-xs">·</span>
                <span className="font-display text-lg sm:text-xl font-bold text-[#FFFDF8] drop-shadow-sm">
                  {formatPrice(currentSlide.price)}
                </span>
                {currentSlide.volume && (
                  <span className="text-[10px] uppercase tracking-wider text-[#FFFDF8]/70 hidden sm:inline">
                    ({currentSlide.volume})
                  </span>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/shop/$collection/$slug"
                  params={{
                    collection: currentSlide.collectionSlug,
                    slug: currentSlide.slug,
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#173529] hover:bg-[#1E4334] border border-[#2B5946] px-6 sm:px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#FFFDF8] shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Explore This Fragrance</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <a
                  href={getWhatsAppGeneralUrl(
                    `Order: ${currentSlide.name} (${currentSlide.category}) - ${formatPrice(currentSlide.price)}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#FFFDF8]/40 bg-black/25 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white px-5 sm:px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#FFFDF8] backdrop-blur-xs transition-all duration-300 shadow-sm"
                >
                  <MessageCircle className="size-3.5 text-[#25D366] group-hover:text-white" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Slide Indicator, 6-Segment Progress Bar & Dedicated Mobile Controls */}
            <div className="mt-6 sm:mt-8 flex items-center justify-between gap-4 max-w-[520px]">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono font-medium tracking-widest text-[#FFFDF8]">
                  {currentFormatted} <span className="text-[#FFFDF8]/40">/</span> {totalFormatted}
                </span>

                {/* 6 Progress Segments */}
                <div className="flex items-center gap-1.5 w-[130px] sm:w-[170px] lg:w-[220px]">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        triggerManualInteraction();
                        goToSlide(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className="h-1 flex-1 rounded-full overflow-hidden bg-[#FFFDF8]/25 hover:bg-[#FFFDF8]/50 transition-colors cursor-pointer"
                    >
                      <span
                        className={`block h-full transition-all duration-500 ${
                          idx === currentIndex ? "bg-[#C8754E] w-full" : "w-0"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Dedicated Mobile Controls (Touch-friendly 44px, strictly outside editorial text) */}
              <div className="flex md:hidden items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    triggerManualInteraction();
                    prevSlide();
                  }}
                  aria-label="Previous slide"
                  className="flex size-11 items-center justify-center rounded-full border border-[#FFFDF8]/30 bg-black/30 active:bg-black/50 text-[#FFFDF8] transition-colors"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    triggerManualInteraction();
                    nextSlide();
                  }}
                  aria-label="Next slide"
                  className="flex size-11 items-center justify-center rounded-full border border-[#FFFDF8]/30 bg-black/30 active:bg-black/50 text-[#FFFDF8] transition-colors"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage & Ambient Storytelling */}
          <div className="hidden lg:flex flex-col justify-start items-end text-right h-full pointer-events-none pr-2">
            <span className="text-[10px] xl:text-[11px] font-mono font-medium tracking-[0.28em] uppercase text-[#FFFDF8]/80 leading-relaxed whitespace-pre-line drop-shadow-sm pt-4">
              {currentSlide.rightVerticalBadge}
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. BOTTOM PROOF POINTS & EDITORIAL BRAND QUOTE (SHARED CONTAINER)
          ========================================================================= */}
      <div className="relative z-20 w-full border-t border-[#FFFDF8]/15 bg-black/20 backdrop-blur-xs py-4 sm:py-5">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 lg:px-[clamp(88px,7vw,120px)] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Proof Points */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 lg:gap-8 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F6F1E8]/90">
            <span className="inline-flex items-center gap-1.5">
              <Leaf className="size-3.5 text-[#C8754E]" />
              100% Alcohol-Free
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FlaskConical className="size-3.5 text-[#C8754E]" />
              Deg Bhapka Distilled
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-[#C8754E]" />
              Natural Ingredients
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Timer className="size-3.5 text-[#C8754E]" />
              Long Lasting Purity
            </span>
          </div>

          {/* Right Bottom Editorial Statement */}
          <div className="hidden lg:flex items-center gap-3 text-right">
            <span className="h-px w-10 bg-[#C8754E]/50" />
            <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#FFFDF8]/75">
              {currentSlide.bottomRightQuote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
