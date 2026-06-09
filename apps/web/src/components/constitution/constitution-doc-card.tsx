import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

import type { ConstitutionDocument } from "@/lib/constitution-data";
import { getDocumentFileUrl } from "@/lib/constitution-data";

type ConstitutionDocCardProps = {
  doc: ConstitutionDocument;
  href: string;
};

export function ConstitutionDocCard({ doc, href }: ConstitutionDocCardProps) {
  const hasFile = Boolean(getDocumentFileUrl(doc));

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {doc.society ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-destructive">
              {doc.society}
            </p>
          ) : null}
          <h3 className="mt-1 font-semibold leading-snug text-foreground group-hover:text-primary">
            {doc.title}
          </h3>
        </div>
        <FileText
          className="size-5 shrink-0 text-muted-foreground group-hover:text-primary"
          aria-hidden
        />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        {doc.fileType.toUpperCase()}
        {hasFile ? " · Available" : " · Pending upload"}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        View document
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
