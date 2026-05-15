import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { newsItems } from "@/lib/mock-data";

export const metadata = { title: "News & Media" };

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Media Center"
        description="Official statements, senate notices, and governance updates."
      />
      <ContentSection>
        <ul className="space-y-6">
          {newsItems.map((item) => (
            <li
              key={item.id}
              className="border-l-4 border-destructive pl-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-destructive">
                {item.category}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-primary">{item.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{item.date}</p>
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
