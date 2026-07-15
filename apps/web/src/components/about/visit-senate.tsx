"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/about/reveal";
import { VISIT_SENATE } from "@/lib/about-content";

function ZigzagDivider() {
  // Sawtooth edge in the style of official parliamentary “Visit” banners
  return (
    <svg
      className="block h-3 w-full text-background sm:h-3.5"
      viewBox="0 0 120 6"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0 0h120v1.2L117.5 6H112.5L110 1.2 107.5 6H102.5L100 1.2 97.5 6H92.5L90 1.2 87.5 6H82.5L80 1.2 77.5 6H72.5L70 1.2 67.5 6H62.5L60 1.2 57.5 6H52.5L50 1.2 47.5 6H42.5L40 1.2 37.5 6H32.5L30 1.2 27.5 6H22.5L20 1.2 17.5 6H12.5L10 1.2 7.5 6H2.5L0 1.2V0z"
      />
    </svg>
  );
}

export function VisitSenate() {
  return (
    <section aria-labelledby="visit-senate-heading" className="bg-background">
      {/* Banner: parliamentary Visit format, SCISA brand colour */}
      <div className="bg-[var(--senate-blue)]">
        <div className="mx-auto max-w-7xl px-3 pt-8 pb-5 sm:px-6 sm:pt-10 sm:pb-6 lg:px-8">
          <Reveal y={12}>
            <h2
              id="visit-senate-heading"
              className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {VISIT_SENATE.title}
            </h2>
          </Reveal>
        </div>
        <ZigzagDivider />
      </div>

      <div className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-12 lg:px-8">
        <Reveal>
          <div className="max-w-3xl space-y-5 text-sm leading-relaxed text-foreground/90 sm:text-base sm:leading-relaxed">
            {VISIT_SENATE.paragraphs.map((paragraph, index) => {
              if (index === 2) {
                const [before, after] = paragraph.split("Clerk of the Senate");
                return (
                  <p key={paragraph}>
                    {before}
                    <strong className="font-semibold text-primary">Clerk of the Senate</strong>
                    {after}
                  </p>
                );
              }
              return <p key={paragraph}>{paragraph}</p>;
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 sm:mt-14">
          <h3 className="font-heading text-xl font-bold tracking-tight text-[var(--senate-blue)] sm:text-2xl">
            {VISIT_SENATE.rulesTitle}
          </h3>
        </Reveal>

        <Stagger
          className="mt-6 max-w-3xl space-y-4 sm:mt-7 sm:space-y-5"
          stagger={0.05}
          role="list"
          aria-label={VISIT_SENATE.rulesTitle}
        >
          {VISIT_SENATE.rules.map((rule) => (
            <StaggerItem key={rule.slice(0, 48)}>
              <div role="listitem" className="flex gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--senate-blue)]"
                  aria-hidden
                />
                <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {rule}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
