"use client";

import {
  BadgeCheck,
  Flag,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { HoverLift, Stagger, StaggerItem } from "@/components/about/reveal";
import { SectionHeading } from "@/components/about/section-heading";
import { CORE_VALUES } from "@/lib/about-content";

const VALUE_ICONS: Record<string, LucideIcon> = {
  integrity: BadgeCheck,
  accountability: ShieldCheck,
  professionalism: Scale,
  transparency: Eye,
  teamwork: Users,
  responsiveness: HeartHandshake,
  representation: Users,
  patriotism: Flag,
};

export function ValuesStrip() {
  return (
    <section aria-labelledby="core-values-heading">
      <SectionHeading
        id="core-values-heading"
        eyebrow="Principles"
        title="Core values"
        description="Affirmed in the Standing Orders — the standards that guide how Senators serve and how the House conducts its business."
      />

      <Stagger className="flex flex-wrap gap-2.5 sm:gap-3" stagger={0.04}>
        {CORE_VALUES.map((value) => {
          const Icon = VALUE_ICONS[value.id] ?? Sparkles;
          return (
            <StaggerItem key={value.id}>
              <HoverLift>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-4 py-2.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm transition-colors hover:border-[var(--institutional-gold)]/45 hover:bg-secondary/80">
                  <Icon
                    className="size-3.5 text-[var(--institutional-gold)]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {value.label}
                </span>
              </HoverLift>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
