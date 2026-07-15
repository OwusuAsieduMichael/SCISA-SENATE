import { LegislativeProcess } from "@/components/bills/legislative-process";
import { BillsTable } from "@/components/public/bills-table";
import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "Bills & Motions",
  description:
    "How a bill becomes law, and live tracking of SCISA Senate bills and motions from draft through debate and vote.",
};

export default function BillsPage() {
  return (
    <>
      <PageHeader
        title="Bills & Motions"
        description="Follow the legislative pathway, and track SCISA bills and motions from draft through debate, voting, and final outcome."
      />

      <ContentSection>
        <LegislativeProcess />
      </ContentSection>

      <ContentSection alt>
        <section aria-labelledby="bills-register-heading">
          <div className="mb-6 max-w-2xl sm:mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--institutional-gold)]">
              Legislative register
            </p>
            <h2
              id="bills-register-heading"
              className="mt-2 font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl"
            >
              Current bills &amp; motions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Status updates as business moves through the House.
            </p>
          </div>
          <BillsTable />
        </section>
      </ContentSection>
    </>
  );
}
