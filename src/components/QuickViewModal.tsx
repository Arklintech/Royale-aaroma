import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, X } from "lucide-react";
import { useCommerce } from "../lib/commerce-context";
import { TrustBadges } from "./TrustBadges";

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, formatPrice, getWhatsAppProductUrl } =
    useCommerce();

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const currentSize = quickViewProduct.sizes[selectedSizeIndex] || quickViewProduct.sizes[0] || {
    size: "Standard",
    price: quickViewProduct.startingPrice,
  };

  const handleAdd = () => {
    addToCart(quickViewProduct, currentSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/80 p-4 sm:p-6 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view ${quickViewProduct.name}`}
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-background shadow-2xl border border-border/80 lg:grid lg:grid-cols-2">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-foreground hover:bg-muted transition-colors backdrop-blur-sm"
        >
          <X className="size-5" />
        </button>

        {/* Product Image Stage */}
        <div className="relative aspect-square w-full bg-muted">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            width={800}
            height={800}
            className="size-full object-cover"
          />
          <div className="absolute left-4 top-4">
            <span className="rounded bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
              {quickViewProduct.collectionName}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            {quickViewProduct.inspiredBy && (
              <p className="text-xs italic text-accent font-medium mb-1">
                Inspired by {quickViewProduct.inspiredBy}
              </p>
            )}

            <h2 className="font-display text-3xl sm:text-4xl text-foreground">
              {quickViewProduct.name}
            </h2>

            <div className="mt-2 flex items-baseline gap-3">
              <span className="font-display text-2xl text-accent font-bold">
                {quickViewProduct.isPlaceholder
                  ? "Upcoming Release"
                  : formatPrice(currentSize.price)}
              </span>
              <span className="text-xs text-muted-foreground">{quickViewProduct.family}</span>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {quickViewProduct.description}
            </p>

            {/* Sizes Selection */}
            {!quickViewProduct.isPlaceholder && (
              <div className="mt-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                  Select Bottle Size:
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((s, idx) => (
                    <button
                      key={s.size}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`rounded border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                        selectedSizeIndex === idx
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border bg-background text-foreground hover:border-foreground"
                      }`}
                    >
                      {s.size} · {formatPrice(s.price)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Notes preview */}
            <div className="mt-6 rounded-lg bg-secondary/40 p-3.5 border border-border/60">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Olfactory Character:
              </span>
              <div className="mt-1.5 flex flex-wrap gap-1.5 text-xs">
                {[
                  ...quickViewProduct.notes.top.slice(0, 2),
                  ...quickViewProduct.notes.heart.slice(0, 2),
                  ...quickViewProduct.notes.base.slice(0, 2),
                ].map((n) => (
                  <span
                    key={n}
                    className="rounded-full bg-background px-2.5 py-0.5 text-[11px] text-foreground border border-border/60"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <TrustBadges badges={quickViewProduct.badges.slice(0, 3)} variant="minimal" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 space-y-3 pt-4 border-t border-border/60">
            {!quickViewProduct.isPlaceholder ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex items-center justify-center gap-2 rounded bg-primary py-3 px-4 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  {added ? (
                    <>
                      <Check className="size-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag</span>
                  )}
                </button>

                <a
                  href={getWhatsAppProductUrl(quickViewProduct, currentSize)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded border border-[#25D366] bg-[#25D366]/10 py-3 px-4 text-xs font-bold uppercase tracking-widest text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle className="size-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            ) : (
              <a
                href={getWhatsAppProductUrl(quickViewProduct, currentSize)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] py-3.5 px-4 text-xs font-bold uppercase tracking-widest text-white shadow"
              >
                <MessageCircle className="size-4" />
                <span>Reserve on WhatsApp</span>
              </a>
            )}

            <div className="text-center pt-2">
              <Link
                to="/shop/$collection/$slug"
                params={{
                  collection: quickViewProduct.collectionSlug,
                  slug: quickViewProduct.slug,
                }}
                onClick={() => setQuickViewProduct(null)}
                className="text-xs font-bold uppercase tracking-widest text-foreground hover:text-accent underline underline-offset-4 inline-flex items-center gap-1.5"
              >
                <span>View Full Fragrance Story & Craftsmanship</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
