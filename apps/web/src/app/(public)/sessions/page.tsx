import { FileText } from "lucide-react";

import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { sessions } from "@/lib/mock-data";

export const metadata = { title: "Session Archive" };

export default function SessionsPage() {
  return (
    <>
      <PageHeader
        title="Session Archive"
        description="Meeting minutes, attendance records, resolutions, and official reports."
      />
      <ContentSection>
        <ul className="divide-y divide-border rounded-xl border border-border bg-card">
          {sessions.map((session) => (
            <li
              key={session.id}
              className="flex items-center justify-between gap-4 px-5 py-4"
            >
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">{session.title}</p>
                  <p className="text-sm text-muted-foreground">{session.date}</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {session.type}
              </span>
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
