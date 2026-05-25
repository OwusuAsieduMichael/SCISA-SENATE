import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { CommitteeRoster } from "@/components/committees/committee-roster";
import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import {
  COMMITTEE_NAV_LINKS,
  committeeShortName,
  committeeSlug,
  getCommitteeBySlug,
  GOVERNANCE_COMMITTEES,
} from "@/lib/governance-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GOVERNANCE_COMMITTEES.map((committee) => ({
    slug: committeeSlug(committee),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const committee = getCommitteeBySlug(slug);
  if (!committee) return { title: "Committee Not Found" };
  return {
    title: committee.name,
    description: committee.mandate,
  };
}

export default async function CommitteeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const committee = getCommitteeBySlug(slug);
  if (!committee) notFound();

  const shortName = committeeShortName(committee);

  return (
    <>
      <PageHeader
        title={committee.name}
        description={committee.mandate}
      />
      <ContentSection>
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        >
          <Link
            href="/committees"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            Standing Committees
          </Link>
          <ChevronRight className="size-4 shrink-0" aria-hidden />
          <span className="font-medium text-foreground">{shortName}</span>
        </nav>

        <CommitteeRoster committee={committee} showMandate={false} />

        <aside className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Other standing committees
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {COMMITTEE_NAV_LINKS.filter((link) => link.href !== `/committees/${slug}`).map(
              (link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </aside>
      </ContentSection>
    </>
  );
}
