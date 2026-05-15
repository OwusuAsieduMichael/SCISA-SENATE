import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = { title: "About Senate" };

const pillars = [
  {
    title: "Constitutional Mandate",
    body: "The Senate exercises legislative authority on behalf of science students, ensuring decisions align with the SCISA Constitution and standing orders.",
  },
  {
    title: "Senate Powers",
    body: "Oversight of association policy, approval of budgets, review of executive actions, and representation in university-wide student governance.",
  },
  {
    title: "Governance Framework",
    body: "Structured committees, recorded sittings, and transparent publication of resolutions to maintain continuity across administrations.",
  },
  {
    title: "Institutional History",
    body: "A legacy of student representation at KNUST, evolving toward digital governance infrastructure for science students.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the Senate"
        description="The legislative arm of the Science Students' Association of KNUST — governing with transparency, accountability, and student welfare at the centre."
      />
      <ContentSection>
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
