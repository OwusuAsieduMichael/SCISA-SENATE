"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/about/reveal";
import { SITTING_PROCESS } from "@/lib/about-content";
import { cn } from "@/lib/utils";

export function SittingTimeline() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = SITTING_PROCESS[active] ?? SITTING_PROCESS[0];

  return (
    <div>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        From notice to resolution, every sitting follows a clear parliamentary path so
        decisions are deliberate, documented, and legitimate.
      </p>

      <Stagger
        className="flex flex-col gap-0 md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-y-6 lg:flex-nowrap"
        stagger={0.06}
      >
        {SITTING_PROCESS.map((step, index) => {
          const isActive = index === active;
          const isLast = index === SITTING_PROCESS.length - 1;

          return (
            <StaggerItem
              key={step.title}
              className="relative flex flex-1 flex-col md:min-w-[6.5rem] md:max-w-[8.5rem] lg:max-w-none"
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-current={isActive ? "step" : undefined}
                aria-label={`${step.title}: ${step.description}`}
                className={cn(
                  "group flex w-full flex-col items-start rounded-xl p-2 text-left transition-colors md:items-center md:text-center",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-gold)]/60 focus-visible:ring-offset-2",
                  isActive ? "bg-secondary/80" : "hover:bg-secondary/50",
                )}
              >
                <span
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full text-sm font-semibold shadow-sm transition-all duration-300 md:size-11",
                    isActive
                      ? "scale-105 bg-[var(--senate-blue)] text-white shadow-md"
                      : "border border-[var(--senate-blue)]/15 bg-background text-[var(--senate-blue)] group-hover:border-[var(--institutional-gold)]/40",
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <span
                  className={cn(
                    "mt-2 font-heading text-sm font-semibold tracking-tight md:mt-3",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {step.title}
                </span>
              </button>

              {!isLast ? (
                <>
                  <div
                    className="my-1 ml-6 flex h-5 items-center text-[var(--institutional-gold)] md:hidden"
                    aria-hidden
                  >
                    <ArrowDown className="size-3.5" strokeWidth={1.75} />
                  </div>
                  <div
                    className="pointer-events-none absolute top-6 right-0 hidden translate-x-1/2 text-[var(--institutional-gold)]/80 md:block"
                    aria-hidden
                  >
                    <ArrowRight className="size-3.5" strokeWidth={1.75} />
                  </div>
                </>
              ) : null}
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal className="mt-6" y={12}>
        {reduce ? (
          <div className="rounded-xl border border-border/70 bg-secondary/50 px-5 py-4">
            <p className="font-heading text-sm font-semibold text-primary">{current.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {current.description}
            </p>
          </div>
        ) : (
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-border/70 bg-secondary/50 px-5 py-4"
            aria-live="polite"
          >
            <p className="font-heading text-sm font-semibold text-primary">{current.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {current.description}
            </p>
          </motion.div>
        )}
      </Reveal>
    </div>
  );
}
