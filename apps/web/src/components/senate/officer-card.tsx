import { OfficerPortrait } from "@/components/shared/officer-portrait";
import { ACADEMIC_TERM } from "@/lib/governance-data";
import type { Leadership } from "@/lib/types";
import { cn } from "@/lib/utils";

type OfficerCardProps = {
  officer: Leadership;
  highlight?: boolean;
};

export function OfficerCard({ officer, highlight = false }: OfficerCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-sm",
        highlight && "ring-1 ring-[var(--institutional-gold)]/30",
      )}
    >
      <OfficerPortrait
        name={officer.name}
        imageSrc={officer.imageSrc}
        subtitle={officer.role}
        size="xl"
        variant="officer"
      />
      <h3 className="mt-5 text-base font-semibold leading-snug text-foreground">
        {officer.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-destructive">{officer.role}</p>
      <p className="mt-3 text-xs text-muted-foreground">SCISA Senate · {ACADEMIC_TERM}</p>
    </article>
  );
}
