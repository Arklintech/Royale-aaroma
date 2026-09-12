import React from "react";
import { Droplet, Flame, Heart, Hourglass, Leaf, Sparkles, ShieldCheck } from "lucide-react";
import { TrustBadgeKey } from "../data/types";

interface TrustBadgesProps {
  badges: TrustBadgeKey[];
  className?: string;
  variant?: "pill" | "minimal" | "full";
}

const BADGE_CONFIG: Record<
  TrustBadgeKey,
  { label: string; icon: React.FC<{ className?: string }> }
> = {
  natural: {
    label: "100% Natural Botanicals",
    icon: Leaf,
  },
  "deg-bhapka": {
    label: "Deg Bhapka Distilled",
    icon: Flame,
  },
  "alcohol-free": {
    label: "Alcohol-Free Pure Oil",
    icon: ShieldCheck,
  },
  "long-lasting": {
    label: "14h+ Enduring Wear",
    icon: Hourglass,
  },
  "premium-quality": {
    label: "Master Reserve Quality",
    icon: Sparkles,
  },
  "traditional-craft": {
    label: "Traditional Craftsmanship",
    icon: Heart,
  },
};

export function TrustBadges({ badges, className = "", variant = "pill" }: TrustBadgesProps) {
  if (!badges || badges.length === 0) return null;

  if (variant === "minimal") {
    return (
      <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground ${className}`}>
        {badges.map((key) => {
          const config = BADGE_CONFIG[key];
          if (!config) return null;
          const Icon = config.icon;
          return (
            <span key={key} className="inline-flex items-center gap-1.5">
              <Icon className="size-3 text-accent" />
              <span>{config.label}</span>
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {badges.map((key) => {
        const config = BADGE_CONFIG[key];
        if (!config) return null;
        const Icon = config.icon;
        return (
          <span
            key={key}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/80"
          >
            <Icon className="size-3 text-accent" />
            {config.label}
          </span>
        );
      })}
    </div>
  );
}
