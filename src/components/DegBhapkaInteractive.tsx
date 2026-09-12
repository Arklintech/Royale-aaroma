import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Cylinder, Flame, FlaskConical, Waves } from "lucide-react";
import workshopImage from "../assets/craft-workshop.jpg";
import { degBhapkaSteps } from "../data/heritage";

const iconMap = {
  Flame,
  Cylinder,
  Compass,
  FlaskConical,
  Waves,
};

export function DegBhapkaInteractive({ showFullLink = true }: { showFullLink?: boolean }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = degBhapkaSteps[activeStepIndex] || degBhapkaSteps[0];

  if (!activeStep) return null;

  return (
    <div className="rounded-2xl border border-border/80 bg-surface p-6 sm:p-10 lg:p-14 shadow-sm">
      <div className="section-heading">
        <div>
          <span className="eyebrow text-accent">Kannauj Heritage Chemistry</span>
          <h2 className="title-section">The Deg Bhapka Process.</h2>
          <p className="mt-4 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
            An unbroken four-hundred-year-old hydro-distillation method. No modern machinery or
            synthetics—pure botanicals coaxed slowly into Mysore sandalwood through fire, bamboo,
            and cold water cisterns.
          </p>
        </div>
        {showFullLink && (
          <Link
            to="/heritage/deg-bhapka"
            className="text-link text-primary hover:text-accent transition-colors"
          >
            <span>Explore Technical Monograph</span>
            <ArrowRight className="size-4" />
          </Link>
        )}
      </div>

      {/* Interactive Process Stepper Navigation */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 border-b border-border/70 pb-4">
        {degBhapkaSteps.map((step, idx) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap] || Flame;
          const isActive = idx === activeStepIndex;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`flex flex-col items-start rounded-lg p-3 sm:p-4 text-left transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/40 text-foreground hover:bg-secondary"
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span className={`text-[10px] font-bold tracking-widest ${isActive ? "text-accent" : "text-muted-foreground"}`}>
                  STAGE {step.number}
                </span>
                <Icon className={`size-4 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
              </div>
              <span className="mt-2 font-display text-lg sm:text-xl font-medium leading-tight">
                {step.name}
              </span>
              <span className={`text-[10px] line-clamp-1 mt-0.5 ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {step.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Visual Showcase */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Stage Content */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent-foreground uppercase tracking-widest">
              Stage {activeStep.number} of 05
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
              {activeStep.subtitle}
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl text-foreground">
            {activeStep.name}: {activeStep.role}
          </h3>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {activeStep.description}
          </p>

          <div className="grid grid-cols-2 gap-4 rounded-xl border border-border/70 bg-secondary/30 p-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Vessel & Construction
              </span>
              <p className="mt-1 text-xs font-semibold text-foreground">{activeStep.material}</p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Distillation Function
              </span>
              <p className="mt-1 text-xs font-semibold text-foreground">{activeStep.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="rounded border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider disabled:opacity-30 hover:bg-muted transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={activeStepIndex === degBhapkaSteps.length - 1}
              onClick={() => setActiveStepIndex((prev) => Math.min(degBhapkaSteps.length - 1, prev + 1))}
              className="rounded bg-primary text-primary-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider disabled:opacity-30 hover:bg-primary/90 transition-colors"
            >
              Next Stage →
            </button>
          </div>
        </div>

        {/* Photography & Workshop Atmosphere */}
        <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-border/80 shadow-md">
          <img
            src={workshopImage}
            alt="Kannauj Deg Bhapka Still Workshop"
            width={800}
            height={600}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[9px] uppercase tracking-widest text-accent">
              Living Heritage Archive
            </span>
            <p className="font-display text-lg">Master artisan inspecting condensation flow</p>
            <p className="text-[10px] text-white/70">Kannauj, Uttar Pradesh · 26.87° N</p>
          </div>
        </div>
      </div>
    </div>
  );
}
