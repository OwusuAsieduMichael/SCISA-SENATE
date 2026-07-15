import { OfficerPortrait } from "@/components/shared/officer-portrait";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ACADEMIC_YEAR_SHORT } from "@/lib/governance-data";
import type { Senator } from "@/lib/types";

type SenatorCardProps = {
  senator: Senator;
};

function senatorDepartment(senator: Senator) {
  const value = senator.department?.trim() || senator.constituency?.trim();
  return value || undefined;
}

export function SenatorCard({ senator }: SenatorCardProps) {
  const department = senatorDepartment(senator);
  const yearRepresented = ACADEMIC_YEAR_SHORT;

  return (
    <Card className="h-full overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-primary/80 via-[var(--institutional-gold)] to-primary/80" />
      <CardHeader className="space-y-4">
        <OfficerPortrait
          name={senator.name}
          imageSrc={senator.imageSrc}
          subtitle={senator.portfolio}
          department={department}
          yearRepresented={yearRepresented}
          size="lg"
          variant="default"
          enlargeable
        />
        <div>
          <CardTitle className="text-base leading-snug sm:text-lg">
            {senator.name}
          </CardTitle>
          <p className="mt-1.5 text-sm font-medium text-destructive">
            {senator.portfolio}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">Constituency: </span>
          {senator.constituency}
        </p>
        <p>
          <span className="font-medium text-foreground">Term: </span>
          {senator.term}
        </p>
        <p className="leading-relaxed">
          <span className="font-medium text-foreground">Committees: </span>
          {senator.committees.join(" · ")}
        </p>
      </CardContent>
    </Card>
  );
}
