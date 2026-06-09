import { notFound } from "next/navigation";

import { ConstitutionDocPanel } from "@/components/constitution/constitution-doc-panel";
import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import {
  DEPARTMENTAL_CONSTITUTIONS,
  getDepartmentalConstitution,
} from "@/lib/constitution-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return DEPARTMENTAL_CONSTITUTIONS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDepartmentalConstitution(slug);
  return { title: doc?.title ?? "Departmental Constitution" };
}

export default async function DepartmentalConstitutionPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDepartmentalConstitution(slug);
  if (!doc) notFound();

  return (
    <>
      <PageHeader
        title={doc.title}
        description={`${doc.society ?? "Departmental"} society constitution.`}
      />
      <ContentSection>
        <ConstitutionDocPanel
          doc={doc}
          backHref="/constitution/departmental"
          backLabel="All departmental constitutions"
        />
      </ContentSection>
    </>
  );
}
