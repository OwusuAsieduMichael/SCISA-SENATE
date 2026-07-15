"use client";

import { CalendarDays, Scale } from "lucide-react";
import { HoverLift, Stagger, StaggerItem } from "@/components/about/reveal";
import { SectionHeading } from "@/components/about/section-heading";
import { SittingTimeline } from "@/components/about/sitting-timeline";
import { SESSION_FACTS } from "@/lib/about-content";

function SessionsPanel() {
  return (
    <HoverLift className="h-full">
      <article
        id="senate-sessions"
        className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur-sm sm:p-7"
      >
        <div className="flex items-start gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--senate-blue)]/6 text-[var(--senate-blue)]">
            <CalendarDays className="size-5" strokeWidth={1.75} aria-hidden />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-tight text-primary">
              Senate sessions
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">When and how the House meets</p>
          </div>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SESSION_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col rounded-xl bg-secondary/60 px-3.5 py-4 transition-colors hover:bg-secondary"
            >
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-2 font-heading text-xl font-bold tracking-tight text-[var(--senate-blue)] sm:text-2xl">
                {fact.value}
              </dd>
              <dd className="mt-1 text-[11px] leading-snug text-muted-foreground">
                {fact.detail}
              </dd>
            </div>
          ))}
        </dl>
      </article>
    </HoverLift>
  );
}

function HowItWorksPanel() {
  return (
    <HoverLift>
      <article
        id="how-senate-works"
        className="rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur-sm sm:p-7"
      >
        <div className="flex items-start gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--senate-blue)]/6 text-[var(--senate-blue)]">
            <Scale className="size-5" strokeWidth={1.75} aria-hidden />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-tight text-primary">
              How the Senate works
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Select a stage to learn what happens
            </p>
          </div>
        </div>
        <div className="mt-6">
          <SittingTimeline />
        </div>
      </article>
    </HoverLift>
  );
}

export function OperationsSection() {
  return (
    <section aria-labelledby="how-it-works-heading">
      <SectionHeading
        id="how-it-works-heading"
        eyebrow="Procedure"
        title="How the Senate operates"
        description="Sittings follow published notice, structured debate, and recorded votes — with quorum rules that keep the House legitimate."
      />

      <Stagger className="grid gap-5" stagger={0.08}>
        <StaggerItem>
          <HowItWorksPanel />
        </StaggerItem>
        <StaggerItem>
          <SessionsPanel />
        </StaggerItem>
      </Stagger>
    </section>
  );
}
