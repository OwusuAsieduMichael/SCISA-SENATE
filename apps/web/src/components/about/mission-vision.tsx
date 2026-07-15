"use client";

import { Stagger, StaggerItem } from "@/components/about/reveal";
import { SectionHeading } from "@/components/about/section-heading";
import { MISSION_VISION } from "@/lib/about-content";

export function MissionVision() {
  return (
    <section aria-labelledby="mission-vision-heading">
      <SectionHeading
        id="mission-vision-heading"
        eyebrow="Purpose"
        title="Mission & vision"
        description="Why the Senate exists, and what it aspires to be for every science student."
      />

      <Stagger className="grid gap-5 md:grid-cols-2 md:gap-0" stagger={0.1}>
        <StaggerItem>
          <article className="relative h-full overflow-hidden rounded-2xl border border-[var(--senate-blue)]/10 bg-gradient-to-br from-[var(--senate-blue)] to-[var(--senate-blue-light)] p-7 text-white shadow-md sm:p-8 md:rounded-r-none md:pr-10">
            <div
              className="pointer-events-none absolute -right-8 -bottom-10 size-40 rounded-full bg-[var(--institutional-gold)]/10 blur-2xl"
              aria-hidden
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--institutional-gold)]">
              {MISSION_VISION.mission.title}
            </p>
            <p className="relative mt-4 font-heading text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
              {MISSION_VISION.mission.body}
            </p>
          </article>
        </StaggerItem>
        <StaggerItem>
          <article className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/80 p-7 shadow-sm backdrop-blur-sm sm:p-8 md:rounded-l-none md:border-l-0 md:pl-10">
            <div
              className="absolute top-0 left-0 hidden h-full w-1 bg-[var(--institutional-gold)] md:block"
              aria-hidden
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--scisa-red)]">
              {MISSION_VISION.vision.title}
            </p>
            <p className="mt-4 font-heading text-lg font-medium leading-relaxed text-primary sm:text-xl">
              {MISSION_VISION.vision.body}
            </p>
          </article>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
