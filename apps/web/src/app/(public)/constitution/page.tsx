import Link from "next/link";
import { Scale } from "lucide-react";

import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { CONSTITUTION_CATEGORIES } from "@/lib/constitution-data";

export const metadata = { title: "Constitution Portal" };

export default function ConstitutionPage() {
  return (
    <>
      <PageHeader
        title="Constitution Portal"
        description="Standing orders, SRC and SCISA constitutions, and departmental society instruments. Read in your browser or download official copies."
      />
      <ContentSection>
        <div className="grid gap-4 sm:grid-cols-2">
          {CONSTITUTION_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md sm:p-6"
            >
              <Scale
                className="size-8 text-[var(--institutional-gold)]"
                aria-hidden
              />
              <h2 className="mt-4 text-lg font-bold text-primary group-hover:text-primary/90">
                {category.label}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-destructive group-hover:underline">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
