import Link from "next/link";
import { BookOpen, Download, FileText } from "lucide-react";

import type { ConstitutionDocument } from "@/lib/constitution-data";
import {
  canReadInBrowser,
  getDocumentFileUrl,
} from "@/lib/constitution-data";
import { cn } from "@/lib/utils";

type ConstitutionDocPanelProps = {
  doc: ConstitutionDocument;
  backHref?: string;
  backLabel?: string;
  className?: string;
};

export function ConstitutionDocPanel({
  doc,
  backHref,
  backLabel = "Back to constitutions",
  className,
}: ConstitutionDocPanelProps) {
  const fileUrl = getDocumentFileUrl(doc);
  const readable = canReadInBrowser(doc);

  return (
    <div className={cn("space-y-8", className)}>
      {backHref ? (
        <Link
          href={backHref}
          className="inline-flex text-sm font-medium text-primary hover:underline"
        >
          ← {backLabel}
        </Link>
      ) : null}

      <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--institutional-gold)]">
              {doc.society ?? doc.category.replace("-", " ")}
            </p>
            <h2 className="mt-1 text-xl font-bold text-primary sm:text-2xl">{doc.title}</h2>
            {doc.description ? (
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                {doc.description}
              </p>
            ) : null}
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              <FileText className="size-3.5" aria-hidden />
              {doc.fileType.toUpperCase()}
              {fileUrl ? "" : " · Awaiting upload"}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2">
            {readable && fileUrl ? (
              <a
                href={`${fileUrl}#view=FitH`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
              >
                <BookOpen className="size-4" aria-hidden />
                Read
              </a>
            ) : (
              <span
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground"
                title={
                  fileUrl
                    ? "In-browser reading is available for PDF documents only."
                    : "This document has not been uploaded yet."
                }
              >
                <BookOpen className="size-4" aria-hidden />
                Read
              </span>
            )}
            {fileUrl ? (
              <a
                href={fileUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Download className="size-4" aria-hidden />
                Download
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                <Download className="size-4" aria-hidden />
                Download
              </span>
            )}
          </div>
        </div>
      </div>

      {readable && fileUrl ? (
        <section aria-label="Document preview" className="overflow-hidden rounded-xl border border-border bg-muted/30">
          <div className="border-b border-border bg-card px-4 py-3">
            <p className="text-sm font-medium text-foreground">In-browser preview</p>
            <p className="text-xs text-muted-foreground">
              Use Read above for full-screen viewing, or scroll within the frame below.
            </p>
          </div>
          <iframe
            title={doc.title}
            src={fileUrl}
            className="h-[min(80vh,56rem)] w-full bg-white"
          />
        </section>
      ) : fileUrl ? (
        <div className="rounded-xl border border-dashed border-border bg-muted/40 px-5 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            This file is a Word document. Use <strong>Download</strong> to open it on your
            device.
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-muted/40 px-5 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            This document is not yet available. Please check back after it is uploaded to the
            constitution library.
          </p>
        </div>
      )}
    </div>
  );
}
