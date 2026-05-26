import { OfficerPortrait } from "@/components/shared/officer-portrait";
import { SPEAKER_WELCOME, getSpeaker } from "@/lib/governance-data";

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
          <blockquote className="mt-4 space-y-4 border-l-4 border-primary/20 pl-6">
            {SPEAKER_WELCOME.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </blockquote>
          <footer className="mt-8 border-t border-border pt-6">
            <p className="font-semibold text-foreground">{SPEAKER_WELCOME.signatory}</p>
            <p className="text-sm text-destructive">{SPEAKER_WELCOME.signatoryTitle}</p>
            <p className="mt-1 text-xs text-muted-foreground">SCISA Senate · 2025–2026</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
