import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/policies/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery Policy | Royale Aaroma" },
      {
        name: "description",
        content:
          "Royale Aaroma shipping timelines, courier partners, complimentary delivery thresholds, and transit insurance in India.",
      },
    ],
  }),
  component: ShippingPolicyPage,
});

function ShippingPolicyPage() {
  return (
    <div className="bg-background pb-24">
      <div className="site-container pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link to="/policies" className="hover:text-accent">Policies</Link>
          <span>/</span>
          <span className="font-bold text-accent">Shipping Policy</span>
        </div>
      </div>

      <section className="site-container mt-6 max-w-3xl">
        <span className="eyebrow text-accent">House Protocol</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl text-foreground">
          Shipping & Delivery Policy
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">Last updated: Autumn 2026</p>

        <div className="mt-8 space-y-6 text-xs sm:text-sm leading-relaxed text-foreground/80 font-sans">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">1. Delivery Coverage in India</h2>
            <p>
              Royale Aaroma delivers across all serviceable postal pin codes throughout the Republic
              of India through recognized express air logistics partners (including Blue Dart,
              Delhivery, and DTDC). Every parcel is dispatched in heavy shock-resistant crushproof
              protective packaging with tamper-evident security tape.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">2. Complimentary Shipping Threshold</h2>
            <p>
              We are pleased to offer complimentary express insured air shipping across India on all
              orders exceeding ₹999. For orders below this threshold, a flat nominal shipping fee of
              ₹120 is applied at order confirmation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">3. Dispatch & Transit Timelines</h2>
            <p>
              Orders are packaged and dispatched from our Kannauj compounding facility within 24 to 48
              business hours of order confirmation. Metropolitan delivery typically requires 2 to 4
              business days, while regional and non-metro destinations require 3 to 6 business days.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">4. Order Tracking & WhatsApp Updates</h2>
            <p>
              As soon as your shipment is registered with the courier, our WhatsApp concierge will
              message you the active airway bill (AWB) tracking link. You can track your parcel's
              movement directly from your mobile device.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">5. Transit Insurance & Loss Guarantee</h2>
            <p>
              Every shipment is 100% insured against loss or breakage in transit. If a parcel is lost
              by the courier or arrives visibly damaged, we issue an immediate priority replacement
              free of charge upon verification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
