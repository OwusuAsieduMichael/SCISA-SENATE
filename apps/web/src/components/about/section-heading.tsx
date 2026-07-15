"use client";

import { Reveal } from "@/components/about/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-8 max-w-2xl sm:mb-10", className)}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--institutional-gold)]">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-2 font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
