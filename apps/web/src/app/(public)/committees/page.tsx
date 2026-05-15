import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { committees } from "@/lib/mock-data";

export const metadata = { title: "Committees" };

export default function CommitteesPage() {
  return (
    <>
      <PageHeader
        title="Committee Management"
        description="Standing committees of the Senate responsible for specialised legislative oversight."
      />
      <ContentSection>
        <ul className="grid gap-6 md:grid-cols-2">
          {committees.map((c) => (
            <li key={c.name}>
              <Card>
                <CardHeader>
                  <CardTitle>{c.name}</CardTitle>
                  <p className="text-sm text-destructive font-medium">Chair: {c.chair}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.mandate}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
