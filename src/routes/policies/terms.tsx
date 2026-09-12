import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/policies/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Royale Aaroma" },
      {
        name: "description",
        content:
          "Official terms of service governing the Royale Aaroma digital boutique, trade pricing, orders, and intellectual property.",
      },
    ],
  }),
  component: TermsPolicyPage,
});

function TermsPolicyPage() {
  return (
    <div className="bg-background pb-24">
      <div className="site-container pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link to="/policies" className="hover:text-accent">Policies</Link>
          <span>/</span>
          <span className="font-bold text-accent">Terms of Service</span>
        </div>
      </div>

      <section className="site-container mt-6 max-w-3xl">
        <span className="eyebrow text-accent">Legal Standards</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl text-foreground">
          Terms of Service
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">Last updated: Autumn 2026</p>

        <div className="mt-8 space-y-6 text-xs sm:text-sm leading-relaxed text-foreground/80 font-sans">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">1. Operating Entity & Jurisdiction</h2>
            <p>
              This digital boutique and trade directory is operated by Royale Aaroma, originating from
              Kannauj, Uttar Pradesh, India. All transactions, order commitments, and dispute
              resolutions are governed by the applicable laws of India.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">2. Product Descriptions & Artisanal Variation</h2>
            <p>
              Because our Natural and Traditional attars are hydro-distilled from natural botanical
              harvests (such as monsoon vetiver, spring damask roses, and wild agarwood), subtle
              variations in natural color, viscosity, and olfactory nuance between seasonal batches
              are normal and celebrated marks of authentic craft perfumery.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">3. Inspired Series Comparative Clarification</h2>
            <p>
              Compositions listed within the Royale Aaroma Inspired Series are independent, original
              oil-based olfactory formulations created to pay homage to classic and contemporary
              fragrance architectures. References to external brand names, trademarks, or titles are
              conducted strictly for comparative olfactory description. Royale Aaroma holds no
              affiliation, sponsorship, or association with referenced third-party trademark holders.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">4. Pricing & Availability Adjustments</h2>
            <p>
              Due to natural raw ingredient market fluctuations (such as government auction rates for
              Mysore sandalwood and Kashmir saffron yields), prices listed in our catalog and live
              price directory are subject to scheduled periodic revision.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">5. Intellectual Property</h2>
            <p>
              All editorial essays, distillation monographs, visual photography, iconography, and
              curated fragrance descriptions on this website remain the exclusive intellectual
              property of Royale Aaroma.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
