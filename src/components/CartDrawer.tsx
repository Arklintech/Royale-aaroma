import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCommerce } from "../lib/commerce-context";

export function CartDrawer() {
  const {
    cart,
    cartCount,
    subtotal,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
    formatPrice,
    getWhatsAppCartUrl,
  } = useCommerce();

  if (!cartOpen) return null;

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div
      className="fixed inset-0 z-50 bg-overlay backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag"
    >
      {/* Backdrop click to close */}
      <button
        type="button"
        className="absolute inset-0 size-full cursor-default"
        onClick={() => setCartOpen(false)}
        aria-label="Close cart"
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background p-6 shadow-2xl animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/80 pb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5 text-accent" />
            <h2 className="font-display text-2xl tracking-wide">
              Your Bag <span className="text-sm font-sans text-muted-foreground">({cartCount})</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
            className="rounded-full p-2 text-foreground hover:bg-muted transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Shipping Progress */}
        <div className="mt-4 rounded-lg bg-secondary/50 p-3.5 border border-border/60">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-foreground">Complimentary Shipping in India</span>
            <span className="text-muted-foreground">{progressPercent}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {subtotal >= freeShippingThreshold
              ? "✓ You qualify for complimentary express insured shipping."
              : `Add ${formatPrice(amountNeeded)} more to unlock complimentary shipping.`}
          </p>
        </div>

        {/* Cart Items List */}
        <div className="mt-6 flex-1 overflow-y-auto space-y-4 pr-1">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center p-6">
              <ShoppingBag className="size-10 text-muted-foreground/50 stroke-1" />
              <p className="mt-4 font-display text-2xl">Your fragrance bag is empty.</p>
              <p className="mt-1 text-xs text-muted-foreground max-w-xs">
                Explore our pure attar collections, traditional distillations, and seasonal discoveries.
              </p>
              <Link
                to="/shop"
                onClick={() => setCartOpen(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              >
                <span>Browse Fragrances</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-lg border border-border/70 p-3.5 bg-surface"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  width={80}
                  height={80}
                  className="size-20 rounded object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-base leading-snug">
                        {item.product.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                        className="text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] font-semibold text-accent mt-0.5">
                      {item.selectedSize.size} · {item.product.collectionName}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    {/* Quantity controls */}
                    <div className="flex items-center rounded border border-border">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                        className="p-1 hover:bg-muted transition-colors"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                        className="p-1 hover:bg-muted transition-colors"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>

                    <span className="text-xs font-bold text-foreground">
                      {formatPrice(item.selectedSize.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="mt-4 border-t border-border/80 pt-4 space-y-3">
            <div className="flex items-center justify-between font-display text-xl">
              <span>Subtotal</span>
              <span className="font-bold text-primary">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[10.5px] text-muted-foreground">
              Taxes and insured shipping included. Seamless payment via UPI, Cards, NetBanking.
            </p>

            {/* Primary Action: Order on WhatsApp */}
            <a
              href={getWhatsAppCartUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-md bg-[#25D366] px-4 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#1EBE5D] transition-all"
            >
              <MessageCircle className="size-4" />
              <span>Checkout via WhatsApp</span>
            </a>

            {/* Secondary Standard Checkout Button */}
            <Link
              to="/contact"
              onClick={() => setCartOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-primary/40 bg-transparent px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <span>Place Consultation Order</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <div className="pt-2 text-center text-[9.5px] uppercase tracking-widest text-muted-foreground">
              <span>UPI · Google Pay · PhonePe · Cards · NetBanking</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
