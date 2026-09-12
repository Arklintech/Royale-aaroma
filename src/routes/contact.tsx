import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Facebook,
  Gift,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { useCommerce, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "../lib/commerce-context";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Order Concierge | Royale Aaroma" },
      {
        name: "description",
        content:
          "Connect with the Royale Aaroma customer concierge. Direct WhatsApp ordering, bespoke corporate gifting, custom blending consultations, and general inquiries.",
      },
      { property: "og:title", content: "Contact & Order Concierge | Royale Aaroma" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { getWhatsAppGeneralUrl } = useCommerce();
  const [inquiryType, setInquiryType] = useState<string>("order");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Pre-populate WhatsApp message if desired
    const text = `Hello Royale Aaroma,
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Inquiry Type: ${inquiryType}
Details: ${formData.notes}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="bg-background pb-24">
      {/* Header Banner */}
      <section className="border-b border-border/80 bg-surface py-14 lg:py-20">
        <div className="site-container max-w-3xl">
          <span className="eyebrow text-accent">Personalized Concierge</span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl text-foreground">
            Let's Find Your Fragrance.
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Whether you are ordering your first Kannauj hydro-distilled attar, curating bespoke
            wedding favors, or designing a corporate gift suite, our master blenders are at your
            service.
          </p>

          {/* Primary Action Button */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={getWhatsAppGeneralUrl("Direct Concierge Chat")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-md bg-[#25D366] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#1EBE5D] transition-all"
            >
              <MessageCircle className="size-4" />
              <span>Chat on WhatsApp ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Direct Paths & Form */}
      <section className="site-container mt-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Inquiry Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="eyebrow text-accent">Dedicated Inquiry Paths</span>
              <h2 className="mt-2 font-display text-3xl">How Can We Assist You?</h2>
            </div>

            {/* Path 1: Order & Product Recommendation */}
            <a
              href={getWhatsAppGeneralUrl("Order & Product Guidance")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border/80 bg-surface p-6 hover:border-accent hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent">
                  Order & Scent Guidance
                </span>
                <MessageCircle className="size-4 text-[#25D366]" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Direct assistance with selecting attar notes, choosing between sizes (3ml, 6ml,
                12ml), and payment via UPI/Cards.
              </p>
            </a>

            {/* Path 2: Bulk & Corporate Gifting */}
            <a
              href={getWhatsAppGeneralUrl("Corporate & Bulk Gifting")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border/80 bg-surface p-6 hover:border-accent hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent">
                  Bulk & Corporate Gifting
                </span>
                <Gift className="size-4 text-accent" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Custom packaging, personalized calligraphy cards, and bespoke velvet gift presentation
                boxes for executive and festive gifting.
              </p>
            </a>

            {/* Path 3: Bespoke Blending Consultation */}
            <a
              href={getWhatsAppGeneralUrl("Bespoke Private Formulation")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border/80 bg-surface p-6 hover:border-accent hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-accent">
                  Private Reserve Consultation
                </span>
                <Sparkles className="size-4 text-accent" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Direct access to vintage Assam agarwood and rare Kashmiri saffron batches for serious
                connoisseurs and collectors.
              </p>
            </a>

            {/* Social & Direct Contact Links */}
            <div className="rounded-xl border border-border/80 bg-secondary/30 p-6 space-y-4 text-xs">
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="size-4 text-accent" />
                <span className="font-semibold">{WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="size-4 text-accent" />
                <span>concierge@royaleaaroma.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="size-4 text-accent" />
                <span>Distillery & Compounding: Kannauj, Uttar Pradesh, India</span>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground hover:text-accent transition-colors"
                >
                  <Instagram className="size-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground hover:text-accent transition-colors"
                >
                  <Facebook className="size-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Order Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-surface p-8 sm:p-10 shadow-sm">
              <span className="eyebrow text-accent">Order & Consultation Request</span>
              <h3 className="mt-2 font-display text-3xl">Send Us a Direct Note</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Fill in your requirements below. Submitting this form opens a private consultation
                window directly on WhatsApp with all your details pre-populated.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Type Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Inquiry Type:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Order Fragrance", value: "order" },
                      { label: "Corporate Gifting", value: "gifting" },
                      { label: "General Question", value: "general" },
                    ].map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setInquiryType(t.value)}
                        className={`rounded-lg border p-2.5 text-xs font-semibold text-center transition-all ${
                          inquiryType === t.value
                            ? "border-primary bg-primary text-primary-foreground shadow-sm"
                            : "border-border bg-background text-foreground hover:border-foreground"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-xs text-foreground outline-none focus:border-accent"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-xs text-foreground outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-xs text-foreground outline-none focus:border-accent"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                    Tell us what you are looking for (Fragrance, occasion, quantity):
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. I am interested in ordering Ruh Khus and Mitti Attar in 6ml bottles, and would like guidance on pulse point application..."
                    className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-xs text-foreground outline-none focus:border-accent"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow hover:bg-[#1EBE5D] transition-all"
                >
                  {submitted ? (
                    <>
                      <Check className="size-4" />
                      <span>Opening WhatsApp Concierge...</span>
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      <span>Connect via WhatsApp Concierge</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-muted-foreground text-center">
                  By clicking connect, you will be redirected to WhatsApp with your details
                  formatted for immediate response.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
