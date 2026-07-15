"use client";

import Image from "next/image";
import { useState } from "react";
import { BookOpen, Expand } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PressImageLightbox } from "@/components/news/press-image-lightbox";
import {
  BILL_PROCESS_CHART,
  BILL_PROCESS_PHASES,
  SCISA_TRACKING_NOTE,
} from "@/lib/bill-process-content";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function LegislativeProcess() {
  const reduce = useReducedMotion();
  const [activePhase, setActivePhase] = useState(0);
  const phase = BILL_PROCESS_PHASES[activePhase] ?? BILL_PROCESS_PHASES[0];

  return (
    <section aria-labelledby="bill-process-heading" className="space-y-8 sm:space-y-10">
      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--institutional-gold)]">
          {BILL_PROCESS_CHART.eyebrow}
        </p>
        <h2
          id="bill-process-heading"
          className="mt-2 font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl"
        >
          {BILL_PROCESS_CHART.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {BILL_PROCESS_CHART.intro}
        </p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
        {/* Chart figure */}
        <figure className="min-w-0">
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 bg-secondary/40 px-4 py-3">
              <div className="flex items-center gap-2 min-w-0">
                <BookOpen
                  className="size-4 shrink-0 text-[var(--institutional-gold)]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <figcaption className="truncate text-xs font-medium text-muted-foreground sm:text-sm">
                  Official process chart
                </figcaption>
              </div>
              <span className="hidden items-center gap-1 text-[11px] font-medium text-muted-foreground sm:inline-flex">
                <Expand className="size-3.5" aria-hidden />
                Click to enlarge
              </span>
            </div>

            <PressImageLightbox
              title={BILL_PROCESS_CHART.title}
              imageSrc={BILL_PROCESS_CHART.imageSrc}
              imageAlt={BILL_PROCESS_CHART.imageAlt}
              caption={BILL_PROCESS_CHART.caption}
              actionLabel="Expand chart"
              size="xl"
              priority
              className="bg-[#fafafa]"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-h-[min(70vh,720px)] sm:aspect-auto sm:h-[min(68vh,680px)]">
                <Image
                  src={BILL_PROCESS_CHART.imageSrc}
                  alt={BILL_PROCESS_CHART.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain object-top p-3 sm:p-5"
                />
              </div>
            </PressImageLightbox>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {BILL_PROCESS_CHART.caption}
          </p>
        </figure>

        {/* Phase navigator: progressive disclosure */}
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Stages at a glance
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Select a phase to read a plain-language summary of the chart.
          </p>

          <ol
            className="mt-5 flex flex-wrap gap-2"
            aria-label="Bill process phases"
          >
            {BILL_PROCESS_PHASES.map((item, index) => {
              const selected = index === activePhase;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActivePhase(index)}
                    aria-pressed={selected}
                    className={cn(
                      "rounded-full border px-3.5 py-2 text-left text-xs font-semibold transition-colors sm:text-sm",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-gold)]/60 focus-visible:ring-offset-2",
                      selected
                        ? "border-[var(--senate-blue)] bg-[var(--senate-blue)] text-white shadow-sm"
                        : "border-border bg-card text-primary hover:border-[var(--senate-blue)]/40 hover:bg-secondary/70",
                    )}
                  >
                    <span className="tabular-nums opacity-80">{item.steps}</span>
                    <span className="mx-1.5 opacity-40">·</span>
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ol>

          <div
            className="mt-5 rounded-2xl border border-border/80 bg-secondary/40 p-5 sm:p-6"
            aria-live="polite"
          >
            {reduce ? (
              <PhaseDetail phase={phase} />
            ) : (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: EASE }}
              >
                <PhaseDetail phase={phase} />
              </motion.div>
            )}
          </div>

          <aside className="mt-5 rounded-xl border border-[var(--senate-blue)]/10 bg-[var(--senate-blue)]/[0.03] px-4 py-3.5 sm:px-5">
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {BILL_PROCESS_CHART.note}
            </p>
            <p className="mt-2 text-xs font-medium text-primary sm:text-sm">
              {SCISA_TRACKING_NOTE}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function PhaseDetail({
  phase,
}: {
  phase: (typeof BILL_PROCESS_PHASES)[number];
}) {
  return (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--institutional-gold)]">
        Steps {phase.steps}
      </p>
      <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight text-primary">
        {phase.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {phase.description}
      </p>
    </>
  );
}
