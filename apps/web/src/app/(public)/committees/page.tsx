import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { committees } from "@/lib/mock-data";
import { sortCommitteeMembers } from "@/lib/governance-data";

export const metadata = { title: "Committees" };

export default function CommitteesPage() {
  return (
    <>
      <PageHeader
        title="Standing Committees"
        description="The ten standing committees of the SCISA Senate and their membership for the 2025–2026 term."
      />
      <ContentSection>
        <ul className="grid gap-6 lg:grid-cols-2">
          {committees.map((committee) => (
            <li key={committee.id}>
              <Card className="h-full">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg leading-snug">
                    {committee.name}
                  </CardTitle>
                  <p className="text-sm font-medium text-destructive">
                    Chairperson: {committee.chair}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {committee.mandate}
                  </p>
                </CardHeader>
                <CardContent>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Membership
                  </h3>
                  <ul className="divide-y divide-border rounded-lg border border-border">
                    {sortCommitteeMembers(committee.members).map((member) => (
                      <li
                        key={`${member.name}-${member.role}`}
                        className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {member.name}
                        </span>
                        <span className="text-xs text-muted-foreground sm:text-right">
                          {member.role}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
