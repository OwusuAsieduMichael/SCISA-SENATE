import { ConstitutionDocCard } from "@/components/constitution/constitution-doc-card";
import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { DEPARTMENTAL_CONSTITUTIONS } from "@/lib/constitution-data";

export const metadata = { title: "Departmental Constitutions" };

export default function DepartmentalConstitutionsPage() {
  return (
    <>
      <PageHeader
        title="Departmental Constitutions"
        description="Constitutions of science department and faculty student associations represented in the Senate."
      />
      <ContentSection>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTAL_CONSTITUTIONS.map((doc) => (
            <li key={doc.id}>
              <ConstitutionDocCard
                doc={doc}
                href={`/constitution/departmental/${doc.slug}`}
              />
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
