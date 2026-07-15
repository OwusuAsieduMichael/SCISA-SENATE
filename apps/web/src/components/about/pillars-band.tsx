"use client";

import {
  Landmark,
  Scale,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { HoverLift, Reveal, Stagger, StaggerItem } from "@/components/about/reveal";
import { SectionHeading } from "@/components/about/section-heading";
import { SENATE_INTRO, SENATE_PILLARS } from "@/lib/about-content";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  authority: Landmark,
  representation: Users,
  oversight: Scale,
  accountability: ShieldCheck,
};

export function PillarsBand() {
  return (
    <section aria-labelledby="what-is-senate">
      <SectionHeading
        id="what-is-senate"
        eyebrow={SENATE_INTRO.eyebrow}
        title={SENATE_INTRO.title}
        description={SENATE_INTRO.body}
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5" stagger={0.07}>
        {SENATE_PILLARS.map((pillar) => {
          const Icon = PILLAR_ICONS[pillar.id] ?? Landmark;
          return (
            <StaggerItem key={pillar.id}>
              <HoverLift className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md sm:p-6">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--institutional-gold)]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--senate-blue)]/6 text-[var(--senate-blue)] transition-colors group-hover:bg-[var(--senate-blue)]/10">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold tracking-tight text-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </article>
              </HoverLift>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal delay={0.15} className="mt-6 sm:mt-8">
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Bound by the Constitution and Standing Orders, the Senate turns student concerns into
          deliberated, recorded decisions, not informal consensus.
        </p>
      </Reveal>
    </section>
  );
}
