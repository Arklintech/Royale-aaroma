import React, { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, X } from "lucide-react";
import { products } from "../data/products";
import { collections } from "../data/collections";
import { useCommerce } from "../lib/commerce-context";

export function SearchOverlay() {
  const { searchOpen, setSearchOpen, formatPrice } = useCommerce();
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchFamily = p.family.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchColl = p.collectionName.toLowerCase().includes(q);
      const matchInspired = p.inspiredBy ? p.inspiredBy.toLowerCase().includes(q) : false;
      const matchNotes = [
        ...p.notes.top,
        ...p.notes.heart,
        ...p.notes.base,
      ].some((n) => n.toLowerCase().includes(q));

      return (
        matchName || matchFamily || matchDesc || matchColl || matchInspired || matchNotes
      );
    });
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-background/98 p-6 lg:p-14 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Search Fragrances"
    >
      <div className="site-container">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-border/80 pb-6">
          <span className="font-display text-2xl uppercase tracking-[0.16em] text-primary">
            Royale Aaroma
          </span>
          <button
            type="button"
            onClick={() => {
              setSearchOpen(false);
              setQuery("");
            }}
            aria-label="Close search"
            className="rounded-full p-2 text-foreground hover:bg-muted transition-colors"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Search Input Box */}
        <div className="mx-auto mt-10 max-w-3xl">
          <p className="eyebrow text-accent">Discover by Scent, Note, or Collection</p>
          <div className="mt-4 flex items-center border-b-2 border-foreground py-2">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search rose, vetiver, oudh, sandalwood, saffron, BR540..."
              className="h-16 min-w-0 flex-1 bg-transparent font-display text-2xl lg:text-4xl text-foreground placeholder:text-muted-foreground outline-none"
            />
            <Search className="size-7 text-muted-foreground" />
          </div>

          {/* Quick Popular Searches */}
          {!query && (
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Popular Discoveries:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Ruh Gulab",
                  "Ruh Khus",
                  "Mitti Attar",
                  "Mysore Sandalwood",
                  "Sauvage",
                  "Baccarat Rouge",
                  "White Musk",
                  "Bakhoor",
                  "Deg Bhapka",
                ].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="rounded-full border border-border px-3.5 py-1 text-xs font-semibold text-foreground/80 hover:border-accent hover:text-accent transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              {/* Collections Quick Links */}
              <div className="mt-10 pt-6 border-t border-border/60">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Browse by Collection:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {collections.map((c) => (
                    <Link
                      key={c.slug}
                      to="/shop/$collection"
                      params={{ collection: c.slug }}
                      onClick={() => setSearchOpen(false)}
                      className="rounded border border-border/70 p-3 hover:border-accent hover:bg-secondary/40 transition-all text-left"
                    >
                      <span className="block text-xs font-bold uppercase tracking-wider text-foreground">
                        {c.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground line-clamp-1">
                        {c.subtitle}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Live Search Results */}
          {query.trim() && (
            <div className="mt-8 max-h-[55vh] overflow-y-auto pr-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {searchResults.length} {searchResults.length === 1 ? "Fragrance" : "Fragrances"} Found
              </p>

              {searchResults.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="font-display text-2xl text-muted-foreground">
                    No exact fragrance matches for "{query}"
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Try searching for ingredients like Rose, Saffron, Oudh, or Sandalwood.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {searchResults.map((p) => (
                    <Link
                      key={p.id}
                      to="/shop/$collection/$slug"
                      params={{ collection: p.collectionSlug, slug: p.slug }}
                      onClick={() => {
                        setSearchOpen(false);
                        setQuery("");
                      }}
                      className="flex items-center justify-between rounded-lg border border-border/60 bg-surface p-3.5 hover:border-accent hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={p.image}
                          alt={p.name}
                          width={64}
                          height={64}
                          className="size-16 rounded object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-display text-lg group-hover:text-accent transition-colors">
                              {p.name}
                            </h4>
                            <span className="rounded bg-secondary px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold">
                              {p.collectionName}
                            </span>
                          </div>
                          {p.inspiredBy && (
                            <p className="text-[11px] italic text-accent">Inspired by {p.inspiredBy}</p>
                          )}
                          <p className="text-xs text-muted-foreground line-clamp-1">{p.family}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-right">
                        <span className="text-xs font-semibold">
                          {p.isPlaceholder ? "Preview" : `From ${formatPrice(p.startingPrice)}`}
                        </span>
                        <ArrowRight className="size-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
