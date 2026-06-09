import { PassportPortrait } from "@/components/shared/passport-portrait";
import { PersonAvatar } from "@/components/shared/person-avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Senator } from "@/lib/types";

type SenatorCardProps = {
  senator: Senator;
};

export function SenatorCard({ senator }: SenatorCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-primary/80 via-[var(--institutional-gold)] to-primary/80" />
      <CardHeader className="space-y-4">
        {senator.imageSrc ? (
          <PassportPortrait
            src={senator.imageSrc}
            alt={senator.name}
            size="lg"
            frameClassName="ring-1 ring-primary/15"
          />
        ) : (
          <PersonAvatar name={senator.name} size="lg" variant="default" />
        )}
        <div>
          <CardTitle className="text-base leading-snug sm:text-lg">{senator.name}</CardTitle>
          <p className="mt-1.5 text-sm font-medium text-destructive">
            {senator.portfolio}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
        {senator.department ? (
          <p>
            <span className="font-medium text-foreground">Faculty: </span>
            {senator.department}
          </p>
        ) : null}
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
