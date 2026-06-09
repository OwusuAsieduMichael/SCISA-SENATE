import { notFound } from "next/navigation";

import { ConstitutionDocPanel } from "@/components/constitution/constitution-doc-panel";
import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import {
  getConstitutionCategory,
  getSingleCategoryDocument,
} from "@/lib/constitution-data";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return [
    { category: "standing-orders" },
    { category: "src" },
    { category: "scisa" },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const meta = getConstitutionCategory(category);
  const doc = getSingleCategoryDocument(category);
  return {
    title: meta?.label ?? doc?.title ?? "Constitution",
  };
}

export default async function ConstitutionCategoryPage({ params }: PageProps) {
  const { category } = await params;
  if (category === "departmental") notFound();

  const meta = getConstitutionCategory(category);
  const doc = getSingleCategoryDocument(category);
  if (!meta || !doc) notFound();

  return (
    <>
      <PageHeader title={meta.label} description={meta.description} />
      <ContentSection>
        <ConstitutionDocPanel
          doc={doc}
          backHref="/constitution"
          backLabel="Constitution portal"
        />
      </ContentSection>
    </>
  );
}
