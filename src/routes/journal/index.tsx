import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { journalArticles } from "../../data/journal";
import { products } from "../../data/products";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "The Fragrance Journal | Royale Aaroma" },
      {
        name: "description",
        content:
          "Authoritative essays, ingredient monographs, and pulse-point rituals from the perfumers and distillers at Royale Aaroma Kannauj.",
      },
      { property: "og:title", content: "The Fragrance Journal | Royale Aaroma" },
    ],
  }),
  component: JournalIndexPage,
});

function JournalIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const filteredArticles = journalArticles.filter((a) => {
    if (selectedCategory === "all") return true;
    return a.category === selectedCategory;
  });

  const activeArticle = activeArticleId
    ? journalArticles.find((a) => a.id === activeArticleId)
    : null;

  return (
    <div className="bg-background pb-24">
      {/* Header */}
      <section className="border-b border-border/80 bg-surface py-14 lg:py-20">
        <div className="site-container max-w-3xl">
          <span className="eyebrow text-accent">Perfumery Essays & Monographs</span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl text-foreground">
            The Fragrance Journal.
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Historical context, botanical sourcing field notes, and connoisseur application rituals.
            Authored by our distillers and master compounding artisans.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { label: "All Stories", value: "all" },
              { label: "Heritage", value: "Heritage" },
              { label: "How to Wear", value: "How to Wear" },
              { label: "Ingredient Spotlight", value: "Ingredient Spotlight" },
              { label: "New Launches", value: "New Launches" },
            ].map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setActiveArticleId(null);
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/80 bg-background text-foreground hover:border-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Journal Reading Content */}
      <section className="site-container mt-12">
        {activeArticle ? (
          /* Detailed Article Reading View */
          <article className="max-w-3xl mx-auto animate-fade-in">
            <button
              type="button"
              onClick={() => setActiveArticleId(null)}
              className="text-xs font-bold uppercase tracking-widest text-accent hover:underline mb-6 inline-flex items-center gap-1.5"
            >
              ← Back to All Stories
            </button>

            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="text-accent font-bold">{activeArticle.category}</span>
              <span>·</span>
              <span>{activeArticle.readTime}</span>
              <span>·</span>
              <span>{activeArticle.date}</span>
            </div>

            <h1 className="mt-4 font-display text-3xl sm:text-5xl leading-tight text-foreground">
              {activeArticle.title}
            </h1>

            <p className="mt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              By {activeArticle.author}
            </p>

            <div className="my-8 aspect-[16/9] w-full overflow-hidden rounded-xl">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="size-full object-cover"
              />
            </div>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-foreground/85 font-sans">
              {activeArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Related Products from Article */}
            {activeArticle.relatedProductSlugs && activeArticle.relatedProductSlugs.length > 0 && (
              <div className="mt-14 rounded-xl border border-border/80 bg-surface p-6 sm:p-8">
                <span className="eyebrow text-accent">Related Compositions</span>
                <h3 className="mt-1 font-display text-2xl">Experience the Fragrances Mentioned</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {activeArticle.relatedProductSlugs.map((slug) => {
                    const prod = products.find((p) => p.slug === slug);
                    if (!prod) return null;
                    return (
                      <Link
                        key={prod.id}
                        to="/shop/$collection/$slug"
                        params={{ collection: prod.collectionSlug, slug: prod.slug }}
                        className="flex items-center gap-3 rounded-lg border border-border/60 p-3 hover:border-accent hover:bg-secondary/30 transition-all group"
                      >
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="size-14 rounded object-cover"
                        />
                        <div>
                          <h4 className="font-display text-base group-hover:text-accent transition-colors">
                            {prod.name}
                          </h4>
                          <span className="text-[11px] text-muted-foreground">
                            {prod.collectionName}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </article>
        ) : (
          /* Articles Cards List */
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="flex flex-col justify-between rounded-xl border border-border/80 bg-surface overflow-hidden shadow-sm hover:border-accent hover:shadow-md transition-all group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <img
                      src={art.image}
                      alt={art.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded bg-background/90 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-foreground">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      <span className="text-accent font-bold">{art.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl leading-snug group-hover:text-accent transition-colors">
                      {art.title}
                    </h2>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveArticleId(art.id)}
                    className="inline-flex items-center justify-between w-full rounded border border-border p-2.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <span>Read Monograph</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
