import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { senators } from "@/lib/mock-data";

export const metadata = { title: "Senators" };

export default function SenatorsPage() {
  return (
    <>
      <PageHeader
        title="Meet the Senators"
        description="Elected representatives of science students — portfolios, committees, and terms of office."
      />
      <ContentSection>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {senators.map((senator) => (
            <li key={senator.id}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-3 flex size-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground ring-4 ring-[var(--institutional-gold)]/30">
                    {senator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <CardTitle className="text-lg">{senator.name}</CardTitle>
                  <p className="text-sm font-medium text-destructive">{senator.portfolio}</p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>{senator.department}</p>
                  <p>Term: {senator.term}</p>
                  <p>Committees: {senator.committees.join(", ")}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
