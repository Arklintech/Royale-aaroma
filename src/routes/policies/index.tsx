import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, RotateCcw, ShieldCheck, Truck } from "lucide-react";

export const Route = createFileRoute("/policies/")({
  head: () => ({
    meta: [
      { title: "Client Trust & House Policies | Royale Aaroma" },
      {
        name: "description",
        content:
          "Official Royale Aaroma house policies: Shipping, Returns & Exchanges, Privacy, and Terms of Service.",
      },
      { property: "og:title", content: "Client Trust & House Policies | Royale Aaroma" },
    ],
  }),
  component: PoliciesIndexPage,
});

function PoliciesIndexPage() {
  const policies = [
    {
      title: "Shipping Policy",
      description:
        "Complimentary express insured air shipping across all pin codes in India on orders above ₹999. Tamper-evident seals and protective packaging.",
      href: "/policies/shipping",
      icon: Truck,
    },
    {
      title: "Returns & Exchanges",
      description:
        "Due to hygiene protocols for pure uncut botanical oils, opened bottles cannot be returned. Comprehensive replacement guarantee for transit damage.",
      href: "/policies/returns",
      icon: RotateCcw,
    },
    {
      title: "Privacy Policy",
      description:
        "Strict client confidentiality. We do not sell or trade phone numbers, addresses, or private WhatsApp consultation correspondence.",
      href: "/policies/privacy",
      icon: ShieldCheck,
    },
    {
      title: "Terms of Service",
      description:
        "Transparent operational standards for our digital storefront, order placement, and trade catalog distribution.",
      href: "/policies/terms",
      icon: FileText,
    },
  ];

  return (
    <div className="bg-background pb-24">
      {/* Header */}
      <section className="border-b border-border/80 bg-surface py-14 lg:py-20">
        <div className="site-container max-w-3xl">
          <span className="eyebrow text-accent">Client Trust & Protocols</span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl text-foreground">
            House Policies.
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Every transaction, delivery, and consultation at Royale Aaroma is governed by principles
            of transparency, discretion, and unconditional client respect.
          </p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="site-container mt-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {policies.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex flex-col justify-between rounded-xl border border-border/80 bg-surface p-7 shadow-sm hover:border-accent hover:shadow-md transition-all group"
              >
                <div>
                  <Icon className="size-6 text-accent mb-4" />
                  <h2 className="font-display text-2xl text-foreground group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    to={p.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors"
                  >
                    <span>Read Full Policy</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
