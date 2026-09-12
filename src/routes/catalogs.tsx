import React, { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  Calendar,
  FileText,
  Filter,
  MessageCircle,
  Search,
  ShieldCheck,
} from "lucide-react";
import { catalogDownloads, priceListData } from "../data/catalogs";
import { useCommerce, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "../lib/commerce-context";

export const Route = createFileRoute("/catalogs")({
  head: () => ({
    meta: [
      { title: "Catalogs & Official Price List | Royale Aaroma" },
      {
        name: "description",
        content:
          "Download official Royale Aaroma PDF compendiums and browse the live searchable price list for all attar series and upcoming releases.",
      },
      { property: "og:title", content: "Catalogs & Official Price List | Royale Aaroma" },
    ],
  }),
  component: CatalogsPage,
});

function CatalogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("all");
  const { getWhatsAppGeneralUrl } = useCommerce();

  const filteredPrices = useMemo(() => {
    return priceListData.filter((row) => {
      if (selectedCollection !== "all" && row.collection !== selectedCollection) {
        return false;
      }
      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase();
      return (
        row.name.toLowerCase().includes(q) ||
        row.sku.toLowerCase().includes(q) ||
        row.notesSummary.toLowerCase().includes(q) ||
        (row.inspiredBy && row.inspiredBy.toLowerCase().includes(q))
      );
    });
  }, [searchTerm, selectedCollection]);

  const handleDownloadStub = (title: string) => {
    alert(`Downloading ${title}. If in production, this downloads the official print-ready PDF.`);
  };

  return (
    <div className="bg-background pb-24">
      {/* Header */}
      <section className="border-b border-border/80 bg-surface py-14 lg:py-20">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent">Digital Archive & Documentation</span>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl text-foreground">
              Catalogs & Price List.
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Official publications, monographs, and live verified price indexes for our clients,
              collectors, and corporate partners. All prices are in Indian Rupees (INR) and include
              complimentary express domestic shipping above ₹999.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
                <Calendar className="size-3.5 text-accent" />
                Price Index Verified: Autumn 2026
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-accent" />
                Government Regulated Allocations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download Cards Room */}
      <section className="site-container mt-16">
        <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-8">
          <div>
            <span className="eyebrow text-accent">Archival Documents</span>
            <h2 className="font-display text-2xl tracking-wide">Download Official Compendiums</h2>
          </div>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            Print-ready high-resolution PDFs
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {catalogDownloads.map((cat) => (
            <div
              key={cat.id}
              className={`flex flex-col justify-between rounded-xl border p-6 transition-all bg-surface ${
                cat.featured
                  ? "border-primary shadow-md bg-secondary/20"
                  : "border-border/80 hover:border-accent shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <FileText className="size-5 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    {cat.fileSize}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl leading-snug font-medium text-foreground">
                  {cat.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-accent">{cat.series}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-muted-foreground">
                  {cat.pageCount}
                </span>
                <button
                  type="button"
                  onClick={() => handleDownloadStub(cat.title)}
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <ArrowDownToLine className="size-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Searchable & Filterable Price List Table */}
      <section className="site-container mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/60 pb-6 mb-8">
          <div>
            <span className="eyebrow text-accent">Synchronized Web Directory</span>
            <h2 className="title-section">Live Price & Inventory Register.</h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl">
              Real-time mirror of our physical printed trade sheets. Filter by series or search by
              fragrance name, notes, or inspired-by reference.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Box */}
            <div className="relative flex items-center min-w-[220px]">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search name, notes, SKU..."
                className="h-10 w-full rounded-md border border-border bg-background pl-9 pr-3 text-xs outline-none focus:border-accent"
              />
              <Search className="size-3.5 text-muted-foreground absolute left-3 pointer-events-none" />
            </div>

            {/* Collection Filter dropdown */}
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="h-10 rounded-md border border-border bg-background px-3 text-xs outline-none cursor-pointer"
            >
              <option value="all">All Series</option>
              <option value="Natural Series">Natural Series</option>
              <option value="Traditional Series">Traditional Series</option>
              <option value="Inspired Series">Inspired Series</option>
              <option value="Musk Series">Musk Series</option>
              <option value="Luxury Series">Luxury Series</option>
              <option value="Fruity Attars">Fruity Attars</option>
              <option value="Bakhoor">Bakhoor</option>
              <option value="Perfumes">Perfumes</option>
            </select>
          </div>
        </div>

        {/* Price Table */}
        <div className="overflow-x-auto rounded-xl border border-border/80 bg-surface shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border/80 bg-secondary/50 uppercase tracking-wider text-[10px] text-muted-foreground">
              <tr>
                <th className="py-4 px-4 font-bold">SKU</th>
                <th className="py-4 px-4 font-bold">Fragrance Formulation</th>
                <th className="py-4 px-4 font-bold">Collection</th>
                <th className="py-4 px-4 font-bold">Key Olfactory Character</th>
                <th className="py-4 px-4 font-bold">Sizes</th>
                <th className="py-4 px-4 font-bold">Price (INR)</th>
                <th className="py-4 px-4 font-bold">Status</th>
                <th className="py-4 px-4 font-bold text-right">Quick Order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredPrices.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-muted-foreground">
                    No fragrances found matching "{searchTerm}" in {selectedCollection}.
                  </td>
                </tr>
              ) : (
                filteredPrices.map((row) => (
                  <tr key={row.sku} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-[11px] text-muted-foreground">
                      {row.sku}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-foreground block text-sm">{row.name}</span>
                      {row.inspiredBy && (
                        <span className="text-[10px] italic text-accent block">
                          Comp. ref: {row.inspiredBy}
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="rounded bg-secondary px-2 py-0.5 text-[10px] font-semibold text-foreground">
                        {row.collection}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-muted-foreground max-w-xs leading-relaxed">
                      {row.notesSummary}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-foreground">{row.sizes}</td>
                    <td className="py-3.5 px-4 font-bold text-primary whitespace-nowrap">
                      {row.priceInr}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                          row.status === "In Stock"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          `Hello Royale Aaroma, I am reviewing your price list and wish to order ${row.name} (${row.sku}).`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded bg-[#25D366]/15 px-2.5 py-1 text-[11px] font-bold text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all"
                      >
                        <MessageCircle className="size-3" />
                        <span>Order</span>
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Corporate & Wholesale Inquiry Bar */}
        <div className="mt-10 rounded-xl border border-accent/40 bg-secondary/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl">Bulk, Custom & Corporate Price Schedules</h3>
            <p className="mt-1 text-xs text-muted-foreground max-w-xl">
              We provide bespoke crystal flacons, custom gift boxes with personalized wax seals, and
              curated wedding favors for distinguished celebrations.
            </p>
          </div>
          <a
            href={getWhatsAppGeneralUrl("Corporate & Bulk Price List Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-all shrink-0"
          >
            <MessageCircle className="size-4" />
            <span>Inquire for Corporate Gifting</span>
          </a>
        </div>
      </section>
    </div>
  );
}
