import React from "react";
import whiteLogo from "../assets/royale-aaroma-logo-white.png";
import goldLogo from "../assets/royale-aaroma-logo-gold.png";
import darkLogo from "../assets/royale-aaroma-logo-dark.png";

interface RoyaleAaromaCrestLogoProps {
  className?: string;
  theme?: "light" | "dark" | "gold";
  showSubtitle?: boolean;
}

export function RoyaleAaromaCrestLogo({
  className = "h-[54px] sm:h-[64px] lg:h-[74px] w-auto max-w-[245px] object-contain",
  theme = "light",
}: RoyaleAaromaCrestLogoProps) {
  const logoSrc =
    theme === "dark"
      ? darkLogo
      : theme === "gold"
        ? goldLogo
        : whiteLogo;

  return (
    <img
      src={logoSrc}
      alt="Royale Aaroma — Fragrance Redefining Luxury"
      className={`object-contain select-none transition-transform duration-200 ${className}`}
      loading="eager"
      fetchPriority="high"
    />
  );
}
