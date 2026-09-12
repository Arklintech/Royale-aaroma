import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { faqItems } from "../data/faqs";
import { useCommerce, WHATSAPP_DISPLAY } from "../lib/commerce-context";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Royale Aaroma" },
      {
        name: "description",
        content:
          "Answers regarding pure alcohol-free attars, Kannauj Deg Bhapka distillation, Bakhoor incense rituals, shipping, and WhatsApp ordering.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Royale Aaroma" },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { getWhatsAppGeneralUrl } = useCommerce();

  const categories = [
    "all",
    "Attars & Composition",
    "Bakhoor & Rituals",
    "Ordering & WhatsApp",
    "Shipping & Policies",
  ];

  const filteredFaqs = faqItems.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-background pb-24">
      {/* Header */}
      <section className="border-b border-border/80 bg-surface py-14 lg:py-20">
        <div className="site-container max-w-3xl">
          <span className="eyebrow text-accent">Client Guidance & Authority</span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl text-foreground">
            Frequently Asked Questions.
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Everything you need to know about pure botanical attars, our traditional Kannauj Deg
            Bhapka hydro-distillation, sacred Bakhoor incense rituals, shipping policies, and
            WhatsApp-first ordering.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(null);
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/80 bg-background text-foreground hover:border-foreground"
                }`}
              >
                {cat === "all" ? "All Questions" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="site-container mt-12 max-w-3xl mx-auto">
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-border/80 bg-surface overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left hover:bg-secondary/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-4 text-accent shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-border/60 bg-secondary/20 p-5 sm:p-6 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-fade-in">
                    <p>{faq.answer}</p>
                    <span className="mt-3 block text-[10px] font-bold uppercase tracking-widest text-accent">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Callout */}
        <div className="mt-16 rounded-2xl border border-accent/40 bg-secondary/30 p-8 sm:p-10 text-center">
          <HelpCircle className="size-8 text-accent mx-auto" />
          <h3 className="mt-3 font-display text-2xl sm:text-3xl text-foreground">
            Still have a question?
          </h3>
          <p className="mt-2 text-xs text-muted-foreground max-w-md mx-auto">
            Our master compounding team and customer concierge are available daily via WhatsApp for
            bespoke recommendations and order assistance.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={getWhatsAppGeneralUrl("FAQ Support Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow hover:bg-[#1EBE5D] transition-all"
            >
              <MessageCircle className="size-4" />
              <span>Message Us on WhatsApp ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
