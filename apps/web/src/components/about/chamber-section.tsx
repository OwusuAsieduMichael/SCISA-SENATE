"use client";

import Link from "next/link";
import { Check, Gavel, Users } from "lucide-react";
import { HoverLift, Reveal, Stagger, StaggerItem } from "@/components/about/reveal";
import { SectionHeading } from "@/components/about/section-heading";
import { COMPOSITION_GROUPS, LEADERSHIP_CHAIN } from "@/lib/about-content";
import { cn } from "@/lib/utils";

function CompositionPanel() {
  return (
    <HoverLift className="h-full">
      <article
        id="composition"
        className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur-sm sm:p-7"
      >
        <div className="flex items-start gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--senate-blue)]/6 text-[var(--senate-blue)]">
            <Users className="size-5" strokeWidth={1.75} aria-hidden />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-tight text-primary">
              Composition
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Who sits in the House</p>
          </div>
        </div>

        <ul className="mt-6 space-y-3.5" aria-label="Senate composition">
          {COMPOSITION_GROUPS.map((group) => (
            <li key={group.id} className="flex gap-3">
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--senate-blue)] text-white"
                aria-hidden
              >
                <Check className="size-3" strokeWidth={2.5} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-primary">{group.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </HoverLift>
  );
}

function LeadershipPanel() {
  return (
    <HoverLift className="h-full">
      <article
        id="leadership-structure"
        className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur-sm sm:p-7"
      >
        <div className="flex items-start gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--senate-blue)]/6 text-[var(--senate-blue)]">
            <Gavel className="size-5" strokeWidth={1.75} aria-hidden />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-tight text-primary">
              Leadership structure
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Officers who preside, record, and uphold order
            </p>
          </div>
        </div>

        <ol className="relative mt-6 space-y-0" aria-label="Senate leadership hierarchy">
          <div
            className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-gradient-to-b from-[var(--institutional-gold)]/70 via-[var(--institutional-gold)]/35 to-transparent"
            aria-hidden
          />
          {LEADERSHIP_CHAIN.map((officer, index) => {
            const isFirst = index === 0;
            return (
              <li key={officer.role} className="relative flex gap-4 pb-5 last:pb-0">
                <span
                  className={cn(
                    "relative z-10 mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-bold tabular-nums",
                    isFirst
                      ? "border-[var(--institutional-gold)] bg-[var(--senate-blue)] text-white shadow-sm"
                      : "border-[var(--senate-blue)]/20 bg-background text-[var(--senate-blue)]",
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1 rounded-xl border border-border/60 bg-secondary/40 px-3.5 py-3 transition-colors hover:border-[var(--institutional-gold)]/35 hover:bg-secondary/70">
                  <p className="font-heading text-sm font-semibold text-primary">
                    {officer.role}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {officer.summary}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </article>
    </HoverLift>
  );
}

export function ChamberSection() {
  return (
    <section aria-labelledby="who-sits-heading">
      <SectionHeading
        id="who-sits-heading"
        eyebrow="Membership"
        title="Who makes up the Senate"
        description="The House is a representative chamber — leadership, departmental officers, year voices, and international students."
      />

      <Stagger className="grid gap-5 lg:grid-cols-2 lg:gap-6" stagger={0.08}>
        <StaggerItem>
          <CompositionPanel />
        </StaggerItem>
        <StaggerItem>
          <LeadershipPanel />
        </StaggerItem>
      </Stagger>

      <Reveal delay={0.1} className="mt-5">
        <p className="text-xs text-muted-foreground sm:text-sm">
          Explore current officers and Senators on the{" "}
          <Link
            href="/senators"
            className="font-medium text-[var(--senate-blue)] underline-offset-4 hover:underline"
          >
            Leadership &amp; Senators
          </Link>{" "}
          page.
        </p>
      </Reveal>
    </section>
  );
}
