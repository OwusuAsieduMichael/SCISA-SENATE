import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";

import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { committeeSlug, GOVERNANCE_COMMITTEES } from "@/lib/governance-data";

export const metadata = { title: "Committees" };

export default function CommitteesPage() {
  return (
    <>
      <PageHeader
        title="Standing Committees"
        description="The ten standing committees of the SCISA Senate for the 2025–2026 term. Select a committee to view its mandate and full membership roster."
      />
      <ContentSection>
        <ul className="grid gap-5 md:grid-cols-2">
          {GOVERNANCE_COMMITTEES.map((committee) => {
            const href = `/committees/${committeeSlug(committee)}`;
            return (
              <li key={committee.id}>
                <Link href={href} className="group block h-full">
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-lg leading-snug transition-colors group-hover:text-primary">
                          {committee.name}
                        </CardTitle>
                        <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {committee.mandate}
                      </p>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between gap-4 border-t border-border pt-4">
                      <p className="text-sm font-medium text-destructive">
                        Chair: {committee.chair}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="size-3.5" />
                        {committee.members.length}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>
      </ContentSection>
    </>
  );
}
