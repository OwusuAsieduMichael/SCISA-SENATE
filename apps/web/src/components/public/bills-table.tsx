"use client";

import { StatusBadge } from "@/components/shared/status-badge";
import { useData } from "@/providers/data-provider";

export function BillsTable() {
  const { data, ready, error } = useData();

  if (error) {
    return (
      <p className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
        {error}
      </p>
    );
  }

  if (!ready) {
    return <p className="text-sm text-muted-foreground">Loading legislation…</p>;
  }

  return (
    <>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Reference</th>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Sponsor</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.bills.map((bill, i) => (
              <tr
                key={bill.id}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/40"}
              >
                <td className="px-4 py-3 font-mono text-xs">{bill.id}</td>
                <td className="px-4 py-3 font-medium">{bill.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{bill.sponsor}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={bill.status} />
                </td>
                <td className="px-4 py-3 text-muted-foreground">{bill.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Workflow: Draft → Review → Debate → Voting → Passed / Rejected
      </p>
    </>
  );
}
