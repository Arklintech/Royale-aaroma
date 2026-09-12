import React, { useEffect, useRef, useState } from "react";

export interface ResponsiveVideoProps {
  src: string;
  fallbackSrc?: string;
  mode?: "background" | "card" | "product";
  focalPoint?: "center-right" | "center-left" | "center-bottom" | "top-center" | string;
  desktopPosition?: string | undefined;
  tabletPosition?: string | undefined;
  mobilePosition?: string | undefined;
  desktopOpacity?: number;
  mobileOpacity?: number;
  hoverOpacity?: number;
  activeOpacity?: number;
  isHovered?: boolean;
  isActive?: boolean;
  maskType?: "left-fade" | "radial" | "none" | "card-bottom";
  className?: string;
  videoClassName?: string;
}

/**
 * Unified Responsive Video Component for Royale Aaroma Storefront.
 * Supports background atmosphere, card discovery, and product showcase modes.
 * Implements performance optimization, safe areas, reduced-motion accessibility,
 * and responsive focal point mapping.
 */
export function ResponsiveVideo({
  src,
  fallbackSrc,
  mode = "background",
  focalPoint = "center-right",
  desktopPosition,
  tabletPosition,
  mobilePosition,
  desktopOpacity,
  mobileOpacity,
  hoverOpacity,
  activeOpacity,
  isHovered = false,
  isActive = false,
  maskType = "none",
  className = "",
  videoClassName = "",
}: ResponsiveVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion for accessibility
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // IntersectionObserver for performance (play when in viewport, pause when out)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsInView(true);
          videoRef.current?.play().catch(() => {});
        } else {
          setIsInView(false);
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Compute opacity dynamically - 100% crisp, zero wash, zero blurry opacity reduction
  const getComputedOpacity = () => {
    if (mode === "background") {
      return desktopOpacity ?? 1;
    }

    if (mode === "card") {
      return desktopOpacity ?? 1;
    }

    return desktopOpacity ?? 1;
  };

  // Mask styles based on maskType
  const getMaskStyle = (): React.CSSProperties => {
    if (maskType === "left-fade") {
      return {
        maskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,1) 50%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,1) 50%)",
      };
    }
    if (maskType === "radial") {
      return {
        maskImage:
          "radial-gradient(ellipse 90% 90% at 75% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 90% at 75% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, transparent 100%)",
      };
    }
    if (maskType === "card-bottom") {
      return {
        maskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,1) 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,1) 100%)",
      };
    }
    return {};
  };

  // Compute position classes for responsive breakpoints
  const positionClass =
    desktopPosition ||
    (focalPoint === "center-right"
      ? "object-[70%_center] sm:object-[65%_center] lg:object-[65%_center]"
      : focalPoint === "center-bottom"
      ? "object-[center_bottom]"
      : focalPoint === "top-center"
      ? "object-[center_top]"
      : "object-center");

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 size-full overflow-hidden transition-opacity duration-700 ease-out ${className}`}
      style={{
        opacity: getComputedOpacity(),
        ...getMaskStyle(),
      }}
      aria-hidden="true"
    >
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={`size-full object-cover transition-all duration-700 ease-out ${positionClass} ${videoClassName}`}
        >
          {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
        </video>
      )}
    </div>
  );
}
