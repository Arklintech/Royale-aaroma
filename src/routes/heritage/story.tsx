import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import heroImage from "../../assets/royale-hero.jpg";
import workshopImage from "../../assets/craft-workshop.jpg";
import { useCommerce } from "../../lib/commerce-context";

export const Route = createFileRoute("/heritage/story")({
  head: () => ({
    meta: [
      { title: "Our Story & 24+ Years of Heritage | Royale Aaroma" },
      {
        name: "description",
        content:
          "Read the story of Royale Aaroma: over two decades of fragrance leadership, traditional Indian hydro-distillation, and a vision to redefine luxury perfumery.",
      },
      { property: "og:title", content: "Our Story & 24+ Years of Heritage | Royale Aaroma" },
    ],
  }),
  component: HeritageStoryPage,
});

function HeritageStoryPage() {
  const { getWhatsAppGeneralUrl } = useCommerce();

  return (
    <div className="bg-background pb-24">
      {/* Breadcrumb */}
      <div className="site-container pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <Link to="/heritage" className="hover:text-accent">
            Heritage
          </Link>
          <span>/</span>
          <span className="font-bold text-accent">Our Story</span>
        </div>
      </div>

      {/* Main Narrative Header */}
      <section className="site-container mt-6">
        <div className="max-w-3xl">
          <span className="eyebrow text-accent">The Foundation</span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.05]">
            A Legacy of Restraint and Botanical Mastery.
          </h1>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Royale Aaroma was shaped by approximately 24 years of seasoned leadership in the Indian
            fragrance landscape. Born out of deep reverence for Kannauj's living hydro-distillation
            traditions, our house redefines luxury not through flash or synthetic sillage, but
            through patience, uncut botanical oils, and the quiet dignity of pure sandalwood.
          </p>
        </div>
      </section>

      {/* Narrative Section 1 */}
      <section className="site-container mt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden border border-border/80 shadow-md">
            <img
              src={workshopImage}
              alt="Perfumery workshop in Kannauj"
              className="size-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="eyebrow text-accent">The Origin</span>
            <h2 className="font-display text-3xl sm:text-4xl">Against Synthetic Speed.</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              In the late twentieth century, commercial perfumery largely abandoned natural plant
              extractions in favor of petrochemical aromachemicals and mass-market alcohol sprays.
              Perfumes became loud, sharp, and fleeting.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Royale Aaroma was established to champion the opposite: slow scent. We returned to the
              banks of the Ganges in Kannauj, where families have operated copper Deg Bhapka stills
              since the Mughal era. We committed to formulating exclusively with 100% alcohol-free
              concentrates that meld into human skin and evolve with pulse warmth over 14 to 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="site-container mt-24">
        <div className="rounded-2xl border border-border/80 bg-surface p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-accent">Guiding Tenets</span>
            <h2 className="title-section">The Royale Aaroma Creed.</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <span className="font-display text-3xl text-accent">01.</span>
              <h3 className="font-display text-xl font-bold">Uncut Botanical Purity</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Zero ethyl alcohol, zero dipropylene glycol (DPG), and zero synthetic phthalates.
                Every drop is pure active aromatic oil.
              </p>
            </div>
            <div className="space-y-3">
              <span className="font-display text-3xl text-accent">02.</span>
              <h3 className="font-display text-xl font-bold">Sandalwood as the Canvas</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our base is authentic Santalum album from Karnataka. It acts as a living fixative,
                retaining volatile floral notes naturally without chemical stabilizers.
              </p>
            </div>
            <div className="space-y-3">
              <span className="font-display text-3xl text-accent">03.</span>
              <h3 className="font-display text-xl font-bold">Maturation in Leather</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Freshly distilled oils mature in traditional camel-hide and buffalo leather containers
                (Kuppis), allowing residual moisture to breathe out while esters harmonize.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="site-container mt-20 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl">Experience the Compositions.</h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Explore our collections in our digital shop or consult with our master compounding team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
            >
              <span>Explore Shop</span>
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={getWhatsAppGeneralUrl("Story Inquiries")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-[#25D366] bg-[#25D366]/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all"
            >
              <MessageCircle className="size-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
