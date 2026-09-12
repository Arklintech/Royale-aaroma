import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, RotateCcw, Sparkles, X } from "lucide-react";
import { products } from "../data/products";
import { Product } from "../data/types";
import { useCommerce, WHATSAPP_NUMBER } from "../lib/commerce-context";

interface QuizAnswers {
  mood: string;
  occasion: string;
  intensity: string;
  note: string;
  format: string;
}

export function FragranceQuiz() {
  const { quizOpen, setQuizOpen, formatPrice, addToCart } = useCommerce();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    mood: "",
    occasion: "",
    intensity: "",
    note: "",
    format: "",
  });

  if (!quizOpen) return null;

  const questions = [
    {
      id: "mood",
      title: "What mood or energy do you wish to evoke?",
      subtitle: "Begin your private consultation with a feeling.",
      options: [
        { label: "Grounded, Earthy & Meditative", desc: "Cooling roots, ancient woods, sacred peace", value: "earthy" },
        { label: "Luminous, Velvety & Sensual", desc: "Dewy morning florals, honeyed nectar, soft petals", value: "floral" },
        { label: "Warm, Enveloping & Royal", desc: "Kashmiri saffron, rich spices, deep resins", value: "amber" },
        { label: "Clean, Pure & Irresistible", desc: "Soft white musks, cotton breeze, powdery comfort", value: "musk" },
      ],
    },
    {
      id: "occasion",
      title: "For which occasion are you seeking this fragrance?",
      subtitle: "Every moment calls for a tailored scent silhouette.",
      options: [
        { label: "Daily Signature Ritual", desc: "Effortless all-day wear that becomes your personal identity", value: "daily" },
        { label: "Evenings & Festive Galas", desc: "Dramatic presence, rich sillage, celebratory warmth", value: "evening" },
        { label: "Meditation, Prayer & Sacred Calm", desc: "Alcohol-free pure botanicals for introspection", value: "sacred" },
        { label: "Warm Weather & Refreshment", desc: "Uplifting citrus, cool vetiver, crisp sparkling fruit", value: "fresh" },
      ],
    },
    {
      id: "intensity",
      title: "What intensity and sillage do you prefer?",
      subtitle: "Attars interact uniquely with body heat.",
      options: [
        { label: "Intimate Skin Aura", desc: "Subtle veil discovered only by those who embrace you", value: "intimate" },
        { label: "Balanced Radiance (10–14 Hours)", desc: "Consistently noticeable throughout a full workday", value: "balanced" },
        { label: "Deep Imperial Longevity (24+ Hours)", desc: "Concentrated agarwoods and resins that linger for days", value: "deep" },
      ],
    },
    {
      id: "note",
      title: "Which core scent family draws you most naturally?",
      subtitle: "Select your botanical anchor.",
      options: [
        { label: "Mysore Sandalwood & Vetiver Roots", desc: "Earthy, creamy, sacred balsamic woods", value: "woody" },
        { label: "Misri Rose & Night Jasmine", desc: "Fresh dawn petals and nocturnal blossoms", value: "floral" },
        { label: "Kashmir Saffron, Spices & Amber", desc: "Golden warmth, rich cloves, and balsamic honey", value: "spice" },
        { label: "Velvety White Musk & Tahara", desc: "Clean second-skin sensuality and powdery softness", value: "musk" },
      ],
    },
  ];

  const handleSelectOption = (key: keyof QuizAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({
      mood: "",
      occasion: "",
      intensity: "",
      note: "",
      format: "",
    });
  };

  // Recommendation algorithm based on quiz answers
  const recommendedProducts: Product[] = React.useMemo(() => {
    if (step < questions.length) return [];

    let scored = products.filter((p) => !p.isPlaceholder).map((p) => {
      let score = 0;
      if (answers.mood === "earthy" && (p.slug.includes("khus") || p.slug.includes("mitti") || p.slug.includes("sandalwood"))) score += 3;
      if (answers.mood === "floral" && (p.slug.includes("gulab") || p.slug.includes("motia") || p.family.includes("Floral"))) score += 3;
      if (answers.mood === "amber" && (p.slug.includes("shamama") || p.slug.includes("zafran") || p.family.includes("Amber"))) score += 3;
      if (answers.mood === "musk" && p.collectionSlug === "musk-series") score += 3;

      if (answers.note === "woody" && (p.slug.includes("sandalwood") || p.slug.includes("khus") || p.slug.includes("santal"))) score += 3;
      if (answers.note === "floral" && (p.slug.includes("gulab") || p.slug.includes("motia") || p.slug.includes("kewda"))) score += 3;
      if (answers.note === "spice" && (p.slug.includes("zafran") || p.slug.includes("shamama") || p.slug.includes("rouge"))) score += 3;
      if (answers.note === "musk" && p.collectionSlug === "musk-series") score += 3;

      if (answers.intensity === "deep" && (p.collectionSlug === "luxury-series" || p.slug.includes("shamama"))) score += 2;
      if (answers.intensity === "intimate" && p.collectionSlug === "musk-series") score += 2;
      if (p.bestseller) score += 1;

      return { product: p, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 3).map((item) => item.product);
  }, [step, answers]);

  const getQuizWhatsAppUrl = () => {
    const recNames = recommendedProducts.map((p) => p.name).join(", ");
    const text = `Hello Royale Aaroma, I completed the Fragrance Consultation Quiz on your website!
My preferences: ${answers.mood} mood, ${answers.occasion} wear, ${answers.note} family.
Recommended Fragrances: ${recNames}.

Could your master perfumer guide me with private ordering?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/80 p-4 sm:p-6 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Fragrance Consultation Finder"
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-background p-6 sm:p-10 shadow-2xl border border-border/80">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuizOpen(false)}
          aria-label="Close consultation"
          className="absolute right-4 top-4 rounded-full p-2 text-foreground hover:bg-muted transition-colors"
        >
          <X className="size-5" />
        </button>

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="size-4 text-accent" />
          <span className="eyebrow text-accent">Private Fragrance Consultation</span>
        </div>

        {step < questions.length && questions[step] ? (
          (() => {
            const currentQ = questions[step];
            return (
              <div>
                <div className="mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Step 0{step + 1} of 0{questions.length}
                  </span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl leading-snug">
                    {currentQ.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {currentQ.subtitle}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelectOption(currentQ.id as keyof QuizAnswers, opt.value)}
                      className="w-full text-left rounded-lg border border-border/70 p-4 hover:border-accent hover:bg-secondary/40 transition-all group flex items-start justify-between"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                          {opt.label}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {opt.desc}
                        </p>
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all mt-1 shrink-0 ml-4" />
                    </button>
                  ))}
                </div>

                {step > 0 && (
                  <div className="mt-6 flex justify-between items-center pt-4 border-t border-border/60">
                    <button
                      type="button"
                      onClick={() => setStep((p) => p - 1)}
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-accent inline-flex items-center gap-1"
                    >
                      <RotateCcw className="size-3" />
                      Restart
                    </button>
                  </div>
                )}
              </div>
            );
          })()
        ) : (
          /* Results Stage */
          <div>
            <div className="text-center pb-6 border-b border-border/60">
              <span className="eyebrow text-accent">Your Signature Formulation Matches</span>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl text-foreground">
                Curated for Your Essence.
              </h3>
              <p className="mt-2 max-w-md mx-auto text-xs text-muted-foreground">
                Based on your profile, our master blenders recommend these three exceptional pure
                oil compositions.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {recommendedProducts.map((p, idx) => (
                <div
                  key={p.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border border-border/70 p-4 bg-surface"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      width={80}
                      height={80}
                      className="size-18 rounded object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-accent/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-foreground">
                          Match 0{idx + 1}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-semibold uppercase">
                          {p.collectionName}
                        </span>
                      </div>
                      <h4 className="mt-1 font-display text-xl leading-snug">{p.name}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">{p.family}</p>
                      <p className="text-xs font-bold text-accent mt-1">
                        From {formatPrice(p.startingPrice)}
                      </p>
                    </div>
                  </div>

                  <div className="flex w-full sm:w-auto items-center gap-2">
                    <Link
                      to="/shop/$collection/$slug"
                      params={{ collection: p.collectionSlug, slug: p.slug }}
                      onClick={() => setQuizOpen(false)}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded border border-foreground/30 px-3.5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(p);
                        setQuizOpen(false);
                      }}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded bg-primary px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Consultation Action */}
            <div className="mt-8 space-y-3 pt-4 border-t border-border/60">
              <a
                href={getQuizWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] px-4 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow hover:bg-[#1EBE5D] transition-all"
              >
                <MessageCircle className="size-4" />
                <span>Consult Master Perfumer on WhatsApp</span>
              </a>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-accent inline-flex items-center gap-1"
                >
                  <RotateCcw className="size-3" />
                  Retake Consultation Quiz
                </button>
                <button
                  type="button"
                  onClick={() => setQuizOpen(false)}
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
