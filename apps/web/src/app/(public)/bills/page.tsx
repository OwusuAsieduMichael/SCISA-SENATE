import { BillsTable } from "@/components/public/bills-table";
import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = { title: "Bills & Motions" };

export default function BillsPage() {
  return (
    <>
      <PageHeader
        title="Bills & Motions"
        description="Legislative tracking from draft through debate, voting, and final outcome."
      />
      <ContentSection>
        <BillsTable />
      </ContentSection>
    </>
  );
}
