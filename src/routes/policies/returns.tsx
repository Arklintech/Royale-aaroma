import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useCommerce, WHATSAPP_DISPLAY } from "../../lib/commerce-context";

export const Route = createFileRoute("/policies/returns")({
  head: () => ({
    meta: [
      { title: "Returns & Exchanges Policy | Royale Aaroma" },
      {
        name: "description",
        content:
          "Royale Aaroma return guidelines, hygiene standards for pure oils, and transit damage replacement protocols.",
      },
    ],
  }),
  component: ReturnsPolicyPage,
});

function ReturnsPolicyPage() {
  const { getWhatsAppGeneralUrl } = useCommerce();

  return (
    <div className="bg-background pb-24">
      <div className="site-container pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link to="/policies" className="hover:text-accent">Policies</Link>
          <span>/</span>
          <span className="font-bold text-accent">Returns & Exchanges</span>
        </div>
      </div>

      <section className="site-container mt-6 max-w-3xl">
        <span className="eyebrow text-accent">Client Protection</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl text-foreground">
          Returns & Exchanges Policy
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">Last updated: Autumn 2026</p>

        <div className="mt-8 space-y-6 text-xs sm:text-sm leading-relaxed text-foreground/80 font-sans">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">1. Hygiene & Purity Protocol</h2>
            <p>
              Because Royale Aaroma formulations consist of 100% uncut pure botanical perfume oils
              intended for direct pulse point skin contact, bottles that have been opened, unsealed,
              or used cannot be returned or resold. This guarantees that every client receives an
              untouched, freshly bottled flacon directly from our maturation vault.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">2. Transit Damage & Defect Resolution</h2>
            <p>
              If your parcel arrives with leakage, a broken crystal bottle, or defective applicator,
              please notify our WhatsApp concierge at {WHATSAPP_DISPLAY} within 48 hours of delivery
              with a clear photograph or short video of the package. We will dispatch an immediate
              priority replacement without requiring you to ship the damaged item back.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">3. Scent Preference & Samples</h2>
            <p>
              Fragrance perception is deeply subjective and transforms according to individual skin
              chemistry, temperature, and diet. We encourage new clients to consult with our master
              blenders via WhatsApp or take our interactive Fragrance Consultation Quiz before
              ordering larger bottles.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">4. Refunds Processing</h2>
            <p>
              In approved instances where a replacement cannot be fulfilled (such as out-of-stock
              vintage reserves), refunds are initiated back to the original payment source (UPI /
              Bank Account / Card) within 3 to 5 business days.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-accent/40 bg-secondary/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl">Need assistance with an existing order?</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Our concierge team is available on WhatsApp daily from 9:00 AM to 8:00 PM IST.
            </p>
          </div>
          <a
            href={getWhatsAppGeneralUrl("Returns & Order Support")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-[#25D366] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow shrink-0"
          >
            <MessageCircle className="size-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
