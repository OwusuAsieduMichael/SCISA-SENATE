import { OfficialNotice } from "@/components/news/official-notice";
import { PressBriefing } from "@/components/news/press-briefing";
import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { newsItems } from "@/lib/mock-data";
import { KNOW_YOUR_SENATOR_SERIES, PRESS_BRIEFINGS } from "@/lib/news-data";

export const metadata = { title: "News & Media" };

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Media Center"
        description="Official communications of the 8th Senate House: press briefings, constituency engagement releases, and institutional notices."
      />

      <ContentSection>
        <div className="mb-8 border-b border-border pb-6 sm:mb-10 sm:pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-destructive sm:text-xs">
            Senate Communications Desk
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Press Briefings
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Visual releases issued for the record. Open any briefing to view the
            full official graphic.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--institutional-gold)] sm:text-xs">
              Series
            </p>
            <h3 className="mt-1 font-heading text-xl font-bold text-primary sm:text-2xl">
              {KNOW_YOUR_SENATOR_SERIES}
            </h3>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              Documented engagements between senators and their constituencies
              across the Faculty of Science.
            </p>
          </div>
          <p className="text-xs font-medium text-muted-foreground">
            {PRESS_BRIEFINGS.length} releases on record
          </p>
        </div>

        <ul className="grid gap-8 lg:grid-cols-2">
          {PRESS_BRIEFINGS.map((briefing, index) => (
            <li key={briefing.id}>
              <PressBriefing
                briefing={briefing}
                priority={index === 0}
              />
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection alt>
        <SectionHeading
          title="Official Notices & Statements"
          description="Formal communications issued by the Clerk and the Office of the Speaker."
        />
        <ul className="space-y-8">
          {newsItems.map((item) => (
            <li key={item.id}>
              <OfficialNotice
                category={item.category}
                title={item.title}
                date={item.date}
                excerpt={item.excerpt}
              />
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
