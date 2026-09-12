import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { useCommerce, WHATSAPP_DISPLAY } from "../lib/commerce-context";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { setQuizOpen, getWhatsAppGeneralUrl } = useCommerce();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full border-t border-border bg-primary text-primary-foreground pt-16 pb-28 lg:pb-16">
      <div className="site-container">
        {/* Top VIP Broadcast Row */}
        <div className="grid gap-8 border-b border-primary-foreground/15 pb-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow text-accent">Private Correspondence & Releases</span>
            <h3 className="mt-2 font-display text-2xl lg:text-3xl text-primary-foreground">
              Join the Royale Aaroma Guild.
            </h3>
            <p className="mt-2 max-w-xl text-xs text-primary-foreground/75 leading-relaxed">
              Receive private notices on limited single-barrel hydro-distillations, harvest yield
              reports, and priority reservation access for upcoming Bakhoor and Spray releases.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-11 flex-1 rounded bg-primary-foreground/10 px-4 text-xs text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:border-accent outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded bg-accent px-5 text-xs font-bold uppercase tracking-widest text-accent-foreground hover:opacity-90 transition-opacity"
              >
                {subscribed ? (
                  <>
                    <Check className="size-4" />
                    <span>Joined</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>
            </form>
            <div className="mt-2 flex items-center justify-between text-[10px] text-primary-foreground/60">
              <span>Zero spam. Only rare releases.</span>
              <a
                href={getWhatsAppGeneralUrl("VIP Broadcast List")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent underline inline-flex items-center gap-1"
              >
                <MessageCircle className="size-3" />
                Join via WhatsApp Broadcast
              </a>
            </div>
          </div>
        </div>

        {/* Multi-column Navigation Grid */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-primary-foreground/15">
          {/* Brand Col */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 pr-4">
            <Link to="/" className="inline-block group">
              <span className="font-display text-2xl uppercase tracking-[0.16em] text-primary-foreground">
                Royale Aaroma
              </span>
              <p className="text-[9px] uppercase tracking-[0.24em] text-accent -mt-0.5">
                Fragrance Redefining Luxury
              </p>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-primary-foreground/75 max-w-sm">
              An established Indian luxury fragrance house built upon centuries of Kannauj Deg Bhapka
              hydro-distillation, pure alcohol-free attars, and patient craftsmanship.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={getWhatsAppGeneralUrl("Storefront Concierge")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <MessageCircle className="size-3.5 text-accent" />
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Shop Column (All 8 Collections) */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Shop</p>
            <ul className="mt-4 space-y-2.5 text-xs text-primary-foreground/80">
              <li>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "natural-series" }}
                  className="hover:text-accent transition-colors"
                >
                  Natural Series
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "traditional-series" }}
                  className="hover:text-accent transition-colors"
                >
                  Traditional Series
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "inspired-series" }}
                  className="hover:text-accent transition-colors"
                >
                  Inspired Series
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "musk-series" }}
                  className="hover:text-accent transition-colors"
                >
                  Musk Series
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "luxury-series" }}
                  className="hover:text-accent transition-colors"
                >
                  Luxury Series
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "fruity-attars" }}
                  className="hover:text-accent transition-colors"
                >
                  Fruity Attars
                </Link>
              </li>
              <li className="pt-1 border-t border-primary-foreground/10">
                <Link
                  to="/shop/$collection"
                  params={{ collection: "bakhoor" }}
                  className="text-accent font-semibold hover:underline flex items-center justify-between"
                >
                  <span>Bakhoor</span>
                  <span className="text-[8px] uppercase">New</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "perfumes" }}
                  className="text-accent font-semibold hover:underline flex items-center justify-between"
                >
                  <span>Perfumes</span>
                  <span className="text-[8px] uppercase">New</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Heritage Column */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Heritage</p>
            <ul className="mt-4 space-y-2.5 text-xs text-primary-foreground/80">
              <li>
                <Link to="/heritage" className="hover:text-accent transition-colors">
                  Our Story & Legacy
                </Link>
              </li>
              <li>
                <Link to="/heritage/deg-bhapka" className="hover:text-accent transition-colors">
                  The Deg Bhapka Process
                </Link>
              </li>
              <li>
                <Link to="/heritage/ingredients" className="hover:text-accent transition-colors">
                  Sourcing & Ingredients
                </Link>
              </li>
              <li>
                <span className="text-[10px] text-primary-foreground/50 block pt-1">
                  24+ Years Leadership
                </span>
              </li>
              <li>
                <span className="text-[10px] text-primary-foreground/50 block">
                  Kannauj Copper Stills
                </span>
              </li>
            </ul>
          </div>

          {/* Discover Column */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Discover</p>
            <ul className="mt-4 space-y-2.5 text-xs text-primary-foreground/80">
              <li>
                <Link to="/catalogs" className="hover:text-accent transition-colors">
                  Catalogs & Price List
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-accent transition-colors">
                  Fragrance Journal
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accent transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setQuizOpen(true)}
                  className="hover:text-accent text-left transition-colors text-accent font-medium"
                >
                  Fragrance Consultation Quiz
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Policies Column */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Concierge</p>
            <ul className="mt-4 space-y-2.5 text-xs text-primary-foreground/80">
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact & Orders
                </Link>
              </li>
              <li>
                <a
                  href={getWhatsAppGeneralUrl("Corporate & Bulk Gifting")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Corporate Gifting
                </a>
              </li>
              <li className="pt-2 border-t border-primary-foreground/10 text-[11px] text-primary-foreground/60">
                Policies:
              </li>
              <li>
                <Link to="/policies/shipping" className="hover:text-accent transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/policies/returns" className="hover:text-accent transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/policies/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Trust Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-primary-foreground/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-accent" />
            <span>© 2026 Royale Aaroma. All rights reserved. Handcrafted with patience in India.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="uppercase tracking-widest text-[9.5px]">
              Kannauj · Kashmir · Mysore · Assam
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
