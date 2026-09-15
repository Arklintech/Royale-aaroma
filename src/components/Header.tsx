import React, { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ChevronDown,
  Menu,
  MessageCircle,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { useCommerce, WHATSAPP_DISPLAY } from "../lib/commerce-context";
import { ShopMegaMenu } from "./ShopMegaMenu";
import { RoyaleAaromaCrestLogo } from "./RoyaleAaromaCrestLogo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    cartCount,
    setCartOpen,
    currency,
    setCurrency,
    setSearchOpen,
    setQuizOpen,
    getWhatsAppGeneralUrl,
  } = useCommerce();
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "";

  const shopContainerRef = React.useRef<HTMLDivElement>(null);
  const shopTriggerRef = React.useRef<HTMLButtonElement>(null);

  // Scroll listener for homepage transparent -> solid #292C4F transition at scrollY > 60px
  React.useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
      setIsScrolled(scrolled);
    };

    // Check scroll state on mount / navigation
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Click outside and ESC key handlers for SHOP dropdown (Click to open only, no hover)
  React.useEffect(() => {
    if (!megaMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        shopContainerRef.current &&
        !shopContainerRef.current.contains(event.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMegaMenuOpen(false);
        shopTriggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [megaMenuOpen]);

  const centerNavLinks = [
    { label: "HOME", href: "/" },
    { label: "SHOP", href: "/shop", isShop: true },
    { label: "OUR HERITAGE", href: "/heritage" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/" || location.pathname === "";
    }
    return location.pathname.startsWith(href);
  };

  const headerWrapperClass = isHomePage
    ? `fixed top-0 inset-x-0 z-50 w-full transition-colors duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#292C4F] text-[#FFFDF8]"
          : "bg-transparent text-[#FFFDF8]"
      }`
    : "sticky top-0 z-50 w-full bg-[#292C4F] text-[#FFFDF8]";

  return (
    <>
      <header className={headerWrapperClass} ref={shopContainerRef}>
        {/* Top announcement bar: Shown on inner pages, hidden on homepage hero */}
        {!isHomePage && (
          <div className="w-full bg-[#1E203A] px-4 py-2 text-center text-[10.5px] font-medium tracking-[0.16em] text-[#FFFDF8]/90 sm:px-6 border-b border-[#FFFDF8]/10">
            <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-[clamp(20px,3.5vw,48px)] flex flex-col items-center justify-between gap-1 sm:flex-row">
              <span>Complimentary insured shipping across India on orders above ₹999</span>
              <span className="hidden sm:inline-flex items-center gap-2 font-semibold">
                <span className="opacity-80">Direct WhatsApp Concierge:</span>
                <a
                  href={getWhatsAppGeneralUrl("Ordering Concierge")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8754E] underline underline-offset-2 hover:opacity-85"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </span>
            </div>
          </div>
        )}

        {/* Main 3-Zone Luxury Navigation Bar (84px Desktop, 68px Mobile — Matching Reference) */}
        <div className="relative flex h-[68px] lg:h-[84px] w-full items-center justify-between px-[clamp(20px,3.5vw,48px)]">
          {/* LEFT ZONE: Official Royale Aaroma Logo + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 z-10 shrink-0 h-full">
            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="p-1.5 text-[#FFFDF8] hover:text-[#C8754E] transition-colors cursor-pointer lg:hidden"
            >
              <Menu className="size-6" />
            </button>

            {/* Official Logo on LEFT (Strictly contained inside navbar, vertically centered) */}
            <Link
              to="/"
              className="flex items-center h-full group cursor-pointer shrink-0"
              aria-label="Royale Aaroma Home"
            >
              <RoyaleAaromaCrestLogo
                theme="light"
                className="h-[48px] sm:h-[54px] lg:h-[60px] max-h-[60px] w-auto max-w-[200px] object-contain opacity-100 group-hover:opacity-95 transition-opacity"
              />
            </Link>
          </div>

          {/* CENTER ZONE: HOME / SHOP ▾ / OUR HERITAGE (Independently Centered, 13px, 500 weight, 0.14em tracking, zero drift) */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-full"
            aria-label="Main Navigation"
          >
            {centerNavLinks.map((link) => {
              const active = isLinkActive(link.href);
              if (link.isShop) {
                return (
                  <div key={link.label} className="relative flex items-center h-full">
                    <button
                      ref={shopTriggerRef}
                      type="button"
                      id="shop-menu-trigger"
                      aria-expanded={megaMenuOpen}
                      aria-controls="shop-mega-menu"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMegaMenuOpen((prev) => !prev);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setMegaMenuOpen((prev) => !prev);
                        }
                      }}
                      className={`text-[13px] font-medium uppercase tracking-[0.14em] transition-colors flex items-center gap-1.5 py-2 cursor-pointer bg-transparent border-none outline-none ${
                        active || megaMenuOpen
                          ? "text-[#C8754E]"
                          : "text-[#FFFDF8] hover:text-[#C8754E]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-200 ${
                          megaMenuOpen ? "rotate-180 text-[#C8754E]" : "text-current opacity-80"
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[13px] font-medium uppercase tracking-[0.14em] transition-colors py-2 flex items-center ${
                    active
                      ? "text-[#C8754E]"
                      : "text-[#FFFDF8] hover:text-[#C8754E]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ZONE: ORDER ON WHATSAPP / INR (₹) ▾ / SEARCH (Icon) / CART (Icon) */}
          <div className="flex items-center justify-end gap-5 xl:gap-6 z-10 shrink-0 h-full">
            {/* ORDER ON WHATSAPP Button (Dark Forest Green Pill Matching Reference) */}
            <a
              href={getWhatsAppGeneralUrl("Direct Ordering")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#183426] hover:bg-[#12281d] text-white px-4 py-2 text-[11px] xl:text-[11.5px] font-bold tracking-[0.08em] uppercase transition-all shadow-sm border border-white/10"
            >
              <MessageCircle className="size-4 shrink-0 text-white" />
              <span>ORDER ON WHATSAPP</span>
            </a>

            {/* Currency Selector: INR (₹) ▾ */}
            <div className="hidden md:flex items-center relative">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                aria-label="Select Currency"
                className="appearance-none bg-transparent pr-4 text-[13px] font-normal tracking-[0.08em] text-[#FFFDF8] hover:text-[#C8754E] transition-colors cursor-pointer outline-none border-none"
              >
                <option value="INR" className="text-black bg-white">INR (₹)</option>
                <option value="USD" className="text-black bg-white">USD ($)</option>
                <option value="AED" className="text-black bg-white">AED (د.إ)</option>
                <option value="GBP" className="text-black bg-white">GBP (£)</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 size-3.5 text-[#FFFDF8]/80" />
            </div>

            {/* Search Icon Only (Matching Reference Screenshot) */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search Fragrances"
              className="p-1 text-[#FFFDF8] hover:text-[#C8754E] transition-colors cursor-pointer flex items-center justify-center group"
            >
              <Search className="size-5 text-[#FFFDF8] group-hover:text-[#C8754E] transition-colors" />
            </button>

            {/* Cart Icon Only (Matching Reference Screenshot) */}
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label={`Shopping bag with ${cartCount} items`}
              className="relative p-1 text-[#FFFDF8] hover:text-[#C8754E] transition-colors cursor-pointer flex items-center justify-center group"
            >
              <ShoppingBag className="size-5 text-[#FFFDF8] group-hover:text-[#C8754E] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-[#C8754E] text-[9.5px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Shop Mega Menu */}
        <ShopMegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation drawer"
        >
          <div className="absolute inset-y-0 left-0 flex w-full max-w-sm flex-col bg-[#292C4F] text-[#FFFDF8] p-6 shadow-2xl animate-slide-in overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#FFFDF8]/20 pb-4">
              <RoyaleAaromaCrestLogo theme="light" className="h-[52px] w-auto max-w-[165px] object-contain opacity-100" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 text-[#FFFDF8] hover:text-[#C8754E]"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-4 font-display text-2xl">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C8754E] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C8754E] transition-colors"
              >
                Shop All Collections
              </Link>
              <div className="pl-4 text-sm space-y-2.5 font-sans text-[#F6F1E8]/75 border-l border-[#C8754E]/40">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#C8754E] pt-1">
                  The Six Collections
                </span>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "natural-series" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C8754E]"
                >
                  Natural Series <span className="opacity-70 text-xs italic">(Pure Botanicals)</span>
                </Link>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "traditional-series" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C8754E]"
                >
                  Traditional Series <span className="opacity-70 text-xs italic">(Timeless Classics)</span>
                </Link>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "inspired-series" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C8754E]"
                >
                  Inspired Series <span className="opacity-70 text-xs italic">(Modern Interpretations)</span>
                </Link>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "musk-series" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C8754E]"
                >
                  Musk Series <span className="opacity-70 text-xs italic">(Intimate Essences)</span>
                </Link>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "luxury-series" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C8754E]"
                >
                  Luxury Series <span className="opacity-70 text-xs italic">(Exceptional Blends)</span>
                </Link>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "fruity-attars" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#C8754E]"
                >
                  Fruity Series <span className="opacity-70 text-xs italic">(Vibrant Expressions)</span>
                </Link>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "bakhoor" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#C8754E] font-semibold"
                >
                  Bakhoor (New Format)
                </Link>
                <Link
                  to="/shop/$collection"
                  params={{ collection: "perfumes" }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[#C8754E] font-semibold"
                >
                  Perfumes (New Sprays)
                </Link>
              </div>

              <Link
                to="/heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C8754E] transition-colors"
              >
                Our Heritage
              </Link>
              <Link
                to="/catalogs"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C8754E] transition-colors"
              >
                Catalogs & Price List
              </Link>
              <Link
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C8754E] transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/journal"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C8754E] transition-colors"
              >
                Journal
              </Link>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C8754E] transition-colors"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C8754E] transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="mt-8 border-t border-[#FFFDF8]/20 pt-6 space-y-4">
              <a
                href={getWhatsAppGeneralUrl("Mobile Concierge")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-xs font-bold uppercase tracking-widest text-white shadow transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" />
                <span>Order on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuizOpen(true);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-[#FFFDF8]/30 px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#FFFDF8] hover:bg-white/10 transition-colors"
              >
                <Sparkles className="size-4 text-[#C8754E]" />
                <span>Find Your Fragrance (Quiz)</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#F6F1E8]/70 pt-2">
                <span>Currency:</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent font-semibold text-[#FFFDF8] outline-none"
                >
                  <option value="INR" className="text-black">INR (₹)</option>
                  <option value="USD" className="text-black">USD ($)</option>
                  <option value="EUR" className="text-black">EUR (€)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
