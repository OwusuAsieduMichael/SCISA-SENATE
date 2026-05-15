import { Download } from "lucide-react";

import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { constitutionDocs } from "@/lib/mock-data";

export const metadata = { title: "Constitution Portal" };

export default function ConstitutionPage() {
  return (
    <>
      <PageHeader
        title="Constitution Portal"
        description="Access the constitution, standing orders, and governance policy frameworks."
      />
      <ContentSection>
        <ul className="space-y-4">
          {constitutionDocs.map((doc) => (
            <li
              key={doc.title}
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4"
            >
              <div>
                <p className="font-semibold">{doc.title}</p>
                <p className="text-sm text-muted-foreground">
                  {doc.type} · {doc.size}
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <Download className="size-4" />
                Download
              </button>
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
