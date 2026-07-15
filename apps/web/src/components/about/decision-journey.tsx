"use client";

import { ProcessFlow } from "@/components/about/process-flow";
import { SectionHeading } from "@/components/about/section-heading";
import { DECISION_FLOW } from "@/lib/about-content";

export function DecisionJourney() {
  return (
    <section aria-labelledby="decisions-heading">
      <SectionHeading
        id="decisions-heading"
        eyebrow="From concern to action"
        title="How decisions are made"
        description="A student issue becomes Senate business through motion, debate, and vote, then a resolution that can be implemented."
      />

      <div className="rounded-2xl border border-border/70 bg-card/90 px-5 py-8 shadow-sm backdrop-blur-sm sm:px-8 sm:py-10">
        <ProcessFlow steps={DECISION_FLOW} />
      </div>
    </section>
  );
}
