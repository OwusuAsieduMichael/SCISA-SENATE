import { PetitionForm } from "@/components/public/petition-form";
import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = { title: "Student Petitions" };

export default function PetitionsPage() {
  return (
    <>
      <PageHeader
        title="Student Petition Portal"
        description="Submit complaints, policy ideas, and welfare concerns for formal Senate review. Leadership aims to respond within one week."
      />
      <ContentSection>
        <PetitionForm />
      </ContentSection>
    </>
  );
}
