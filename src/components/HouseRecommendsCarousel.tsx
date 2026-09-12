import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { houseRecommendsData, HouseRecommendProduct } from "../data/houseRecommends";
import { useCommerce } from "../lib/commerce-context";

export interface HouseRecommendsCarouselProps {
  items?: HouseRecommendProduct[];
  eyebrow?: string;
  title?: string;
  autoPlayInterval?: number;
  className?: string;
}

export function HouseRecommendsCarousel({
  items = houseRecommendsData,
  eyebrow = "THE HOUSE RECOMMENDS",
  title = "Curated Best-Sellers",
  autoPlayInterval = 4000,
  className = "",
}: HouseRecommendsCarouselProps) {
  const { formatPrice } = useCommerce();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalItems = items.length;

  // Determine items per view based on viewport width dynamically for loop wrapping
  const getItemsPerView = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  }, []);

  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(getItemsPerView());
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [getItemsPerView]);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Pause autoplay temporarily on manual interaction
  const triggerManualInteraction = useCallback(() => {
    setIsPaused(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  }, []);

  // Autoplay interval effect
  useEffect(() => {
    if (isPaused || totalItems <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval, nextSlide, totalItems]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  // Touch Swipe Event Handlers
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
    const minSwipeDistance = 35;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Formatted position counter (e.g. 01 / 06)
  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalItems).padStart(2, "0");

  return (
    <div
      className={`relative rounded-2xl border border-border/80 bg-background/80 backdrop-blur-md p-4 sm:p-5 lg:p-6 shadow-lg transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header & Navigation Controls */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <Sparkles className="size-3.5 text-accent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
          <span className="hidden sm:inline text-border">·</span>
          <span className="hidden sm:inline text-xs font-display font-medium text-foreground/80">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Position Indicator (e.g., 01 / 06) */}
          <div className="text-[11px] font-mono font-medium tracking-widest text-muted-foreground">
            <span className="text-foreground font-semibold">{currentFormatted}</span>
            <span className="mx-1 text-border">/</span>
            <span>{totalFormatted}</span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                triggerManualInteraction();
                prevSlide();
              }}
              aria-label="Previous product recommendation"
              className="flex items-center justify-center size-7 rounded-full border border-border bg-surface text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="size-3.5" />
            </button>
            <button
              onClick={() => {
                triggerManualInteraction();
                nextSlide();
              }}
              aria-label="Next product recommendation"
              className="flex items-center justify-center size-7 rounded-full border border-border bg-surface text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-sm cursor-pointer"
            >
              <ChevronRight className="size-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Touch & Track Container */}
      <div
        className="overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
          }}
        >
          {items.map((item) => {
            const collectionSlug = item.collectionSlug || "natural-series";
            return (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-1.5 group/card"
              >
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-border/70 bg-surface/80 hover:bg-surface hover:border-accent/60 hover:shadow-md transition-all duration-300">
                  {/* Product Image Thumbnail */}
                  <div className="relative size-16 sm:size-18 rounded-lg overflow-hidden flex-shrink-0 border border-border/60 bg-background/50">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="size-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-1 left-1 rounded bg-primary/90 px-1 py-0.5 text-[8px] font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-muted-foreground truncate">
                      {item.subtitle} {item.volume ? `· ${item.volume}` : ""}
                    </span>
                    <h4 className="font-display text-sm font-medium text-foreground tracking-tight truncate group-hover/card:text-accent transition-colors">
                      {item.name}
                    </h4>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-accent">
                        {formatPrice(item.price)}
                      </span>
                      <Link
                        to="/shop/$collection/$slug"
                        params={{ collection: collectionSlug, slug: item.slug }}
                        className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary group-hover/card:text-accent transition-colors"
                      >
                        <span>View</span>
                        <ArrowRight className="size-3 transition-transform group-hover/card:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
