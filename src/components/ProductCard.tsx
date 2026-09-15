import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Eye, MessageCircle } from "lucide-react";
import { Product } from "../data/types";
import { useCommerce } from "../lib/commerce-context";
import { TrustBadges } from "./TrustBadges";

interface ProductCardProps {
  product: Product;
  className?: string;
  theme?: "light" | "dark";
}

export function ProductCard({ product, className = "", theme = "light" }: ProductCardProps) {
  const { formatPrice, setQuickViewProduct, getWhatsAppProductUrl } = useCommerce();

  const isDark = theme === "dark";

  return (
    <article
      className={`group relative flex flex-col justify-between transition-all duration-300 ${
        isDark ? "text-primary-foreground" : "text-foreground"
      } ${className}`}
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted/60">
        <Link
          to="/shop/$collection/$slug"
          params={{ collection: product.collectionSlug, slug: product.slug }}
          className="block size-full"
          aria-label={`View details for ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            width={1000}
            height={1250}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Collection & Status Badges */}
        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5">
          <span
            className={`rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] ${
              isDark
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {product.collectionName}
          </span>
          {product.bestseller && (
            <span className="rounded bg-background/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur-sm">
              Bestseller
            </span>
          )}
          {product.isPlaceholder && (
            <span className="rounded bg-accent/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-accent-foreground backdrop-blur-sm">
              Upcoming
            </span>
          )}
        </div>

        {/* Quick View Floating Action */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(product)}
          aria-label={`Quick view ${product.name}`}
          className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded bg-background/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground opacity-0 shadow-md backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground"
        >
          <Eye className="size-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Content Details */}
      <div className="mt-4 flex flex-1 flex-col">
        {/* Inspired By tag if applicable */}
        {product.inspiredBy && (
          <p className="mb-1 text-[11px] italic text-accent font-medium">
            Inspired by {product.inspiredBy}
          </p>
        )}

        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl leading-tight">
            <Link
              to="/shop/$collection/$slug"
              params={{ collection: product.collectionSlug, slug: product.slug }}
              className="hover:text-accent transition-colors"
            >
              {product.name}
            </Link>
          </h3>
          <span className="shrink-0 font-sans text-xs font-semibold tracking-wide">
            {product.isPlaceholder
              ? "Preview"
              : `From ${formatPrice(product.startingPrice)}`}
          </span>
        </div>

        <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{product.family}</p>

        {/* Available Sizes preview */}
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[10px] text-muted-foreground">
          <span className="font-semibold uppercase tracking-wider text-[9px] opacity-70">Sizes:</span>
          {product.sizes.map((s) => (
            <span
              key={s.size}
              className="rounded border border-border/80 px-1.5 py-0.5 font-medium"
            >
              {s.size}
            </span>
          ))}
        </div>

        {/* Minimal trust badge preview */}
        <div className="mt-2.5">
          <TrustBadges badges={product.badges.slice(0, 2)} variant="minimal" />
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex items-center gap-2 pt-1 border-t border-border/60">
          <Link
            to="/shop/$collection/$slug"
            params={{ collection: product.collectionSlug, slug: product.slug }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded border border-foreground/30 bg-transparent py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all hover:bg-foreground hover:text-background"
          >
            <span>View Fragrance</span>
            <ArrowRight className="size-3" />
          </Link>

          <a
            href={getWhatsAppProductUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            title="Order via WhatsApp"
            className="inline-flex items-center justify-center rounded border border-[#25D366]/40 bg-[#25D366]/10 p-2.5 text-[#128C7E] transition-all hover:bg-[#25D366] hover:text-white"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <MessageCircle className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
