import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/policies/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Confidentiality Policy | Royale Aaroma" },
      {
        name: "description",
        content:
          "Royale Aaroma privacy standards, client confidentiality, data handling, and communication protocols.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="bg-background pb-24">
      <div className="site-container pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link to="/policies" className="hover:text-accent">Policies</Link>
          <span>/</span>
          <span className="font-bold text-accent">Privacy Policy</span>
        </div>
      </div>

      <section className="site-container mt-6 max-w-3xl">
        <span className="eyebrow text-accent">Confidentiality Protocol</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">Last updated: Autumn 2026</p>

        <div className="mt-8 space-y-6 text-xs sm:text-sm leading-relaxed text-foreground/80 font-sans">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">1. Client Confidentiality Commitment</h2>
            <p>
              At Royale Aaroma, client discretion is paramount. We do not sell, rent, trade, or share
              your personal contact details, residential address, or purchase history with any
              external advertising brokers, data aggregators, or unauthorized third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">2. Information We Collect</h2>
            <p>
              When you consult with us via WhatsApp, order through our storefront, or subscribe to our
              private correspondence guild, we collect basic delivery coordinates: your full name,
              mobile phone number, delivery address, and email. This data is strictly utilized for
              shipment fulfillment, order tracking, and private release notices.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">3. WhatsApp Communication Security</h2>
            <p>
              All direct correspondence via WhatsApp benefits from WhatsApp’s end-to-end encryption.
              Our internal customer support database is strictly restricted to authorized concierge
              staff.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">4. Payment Information Handling</h2>
            <p>
              We do not store your bank account details, UPI PINs, or credit card numbers. All
              digital transactions are processed securely through certified Reserve Bank of India
              (RBI) authorized payment gateways.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">5. Communication Opt-Out</h2>
            <p>
              You may unsubscribe from our private correspondence emails or WhatsApp broadcast list at
              any moment by simply replying "STOP" or notifying our concierge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
