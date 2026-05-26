import { OfficerPortrait } from "@/components/shared/officer-portrait";
import { ACADEMIC_TERM, SPEAKER_WELCOME, getSpeaker } from "@/lib/governance-data";

export function SpeakerWelcome() {
  const speaker = getSpeaker();
  if (!speaker) return null;

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-start lg:gap-14 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <OfficerPortrait
            name={speaker.name}
            imageSrc={speaker.imageSrc}
            subtitle={speaker.role}
            size="2xl"
            variant="officer"
            priority
            className="shadow-md"
          />
          <p className="mt-4 text-sm font-semibold text-foreground">{speaker.name}</p>
          <p className="mt-0.5 text-sm font-medium text-destructive">{speaker.role}</p>
        </div>

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--institutional-gold)]">
            Message from the Speaker
          </p>
          <blockquote className="relative mt-4 border-l-4 border-primary/20 pl-6">
            <span
              className="pointer-events-none absolute -left-1 top-0 font-serif text-5xl leading-none text-primary/25 select-none sm:text-6xl"
              aria-hidden
            >
              &ldquo;
            </span>
            <div className="space-y-4">
              {SPEAKER_WELCOME.paragraphs.map((paragraph, index) => {
                const isLast = index === SPEAKER_WELCOME.paragraphs.length - 1;
                return (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                  >
                    {paragraph}
                    {isLast ? (
                      <span
                        className="font-serif text-3xl leading-none text-primary/25 select-none sm:text-4xl"
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
          <footer className="mt-8 border-t border-border pt-6">
            <p className="font-semibold text-foreground">{SPEAKER_WELCOME.signatory}</p>
            <p className="text-sm text-destructive">{SPEAKER_WELCOME.signatoryTitle}</p>
            <p className="mt-1 text-xs text-muted-foreground">SCISA Senate · {ACADEMIC_TERM}</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
