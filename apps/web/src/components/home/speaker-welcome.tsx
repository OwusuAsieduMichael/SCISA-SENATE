import { OfficerPortrait } from "@/components/shared/officer-portrait";
import {
  ACADEMIC_TERM,
  ACADEMIC_YEAR_SHORT,
  SPEAKER_WELCOME,
  getSpeaker,
} from "@/lib/governance-data";

export function SpeakerWelcome() {
  const speaker = getSpeaker();
  if (!speaker) return null;

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-6 px-3 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-start lg:gap-14 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <OfficerPortrait
            name={speaker.name}
            imageSrc={speaker.imageSrc}
            subtitle={speaker.role}
            department={speaker.department || undefined}
            yearRepresented={ACADEMIC_YEAR_SHORT}
            size="2xl"
            variant="officer"
            enlargeable
            priority
            className="!size-24 shadow-md sm:!size-28 lg:!size-32"
          />
          <p className="mt-3 text-sm font-semibold text-foreground sm:mt-4">{speaker.name}</p>
          <p className="mt-0.5 text-xs font-medium text-destructive sm:text-sm">{speaker.role}</p>
        </div>

        <div className="relative">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--institutional-gold)] sm:text-xs sm:tracking-widest">
            Message from the Speaker
          </p>
          <blockquote className="relative mt-3 border-l-2 border-primary/20 pl-4 sm:mt-4 sm:border-l-4 sm:pl-6">
            <span
              className="pointer-events-none absolute -left-0.5 top-0 font-serif text-4xl leading-none text-primary/25 select-none sm:-left-1 sm:text-5xl lg:text-6xl"
              aria-hidden
            >
              &ldquo;
            </span>
            <div className="space-y-3 sm:space-y-4">
              {SPEAKER_WELCOME.paragraphs.map((paragraph, index) => {
                const isLast = index === SPEAKER_WELCOME.paragraphs.length - 1;
                return (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
                  >
                    {paragraph}
                    {isLast ? (
                      <span
                        className="font-serif text-2xl leading-none text-primary/25 select-none sm:text-3xl lg:text-4xl"
                        aria-hidden
                      >
                        &rdquo;
                      </span>
                    ) : null}
                  </p>
                );
              })}
            </div>
          </blockquote>
          <footer className="mt-6 border-t border-border pt-4 sm:mt-8 sm:pt-6">
            <p className="font-semibold text-foreground">{SPEAKER_WELCOME.signatory}</p>
            <p className="text-sm text-destructive">{SPEAKER_WELCOME.signatoryTitle}</p>
            <p className="mt-1 text-xs text-muted-foreground">SCISA Senate · {ACADEMIC_TERM}</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
