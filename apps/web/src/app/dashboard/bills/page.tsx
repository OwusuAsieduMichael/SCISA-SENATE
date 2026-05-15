"use client";

import { useState } from "react";

import { StatusBadge } from "@/components/shared/status-badge";
import { uid } from "@/lib/storage";
import type { Bill, BillStatus } from "@/lib/types";
import { useData } from "@/providers/data-provider";

const STATUSES: BillStatus[] = [
  "Draft",
  "Review",
  "Debate",
  "Voting",
  "Passed",
  "Rejected",
];

export default function DashboardBillsPage() {
  const { data, upsertBill, deleteBill, updateBillStatus } = useData();
  const [title, setTitle] = useState("");
  const [sponsor, setSponsor] = useState("");

  async function addBill(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    const bill: Bill = {
      id: uid("bill"),
      title: title.trim(),
      sponsor: sponsor.trim() || "Senate",
      status: "Draft",
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    await upsertBill(bill);
    setTitle("");
    setSponsor("");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Bills & Motions</h1>
      <p className="mt-1 text-sm text-muted-foreground">Manage legislative items</p>

      <form
        onSubmit={addBill}
        className="mt-6 flex flex-wrap gap-3 rounded-xl border border-border bg-card p-4"
      >
        <input
          placeholder="Bill title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="min-w-[200px] flex-1 rounded-lg border border-input px-3 py-2 text-sm"
        />
        <input
          placeholder="Sponsor"
          value={sponsor}
          onChange={(e) => setSponsor(e.target.value)}
          className="min-w-[140px] rounded-lg border border-input px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Add bill
        </button>
      </form>

      <div className="mt-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Sponsor</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.bills.map((bill) => (
              <tr key={bill.id} className="border-t border-border">
                <td className="px-4 py-3 font-medium">{bill.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{bill.sponsor}</td>
                <td className="px-4 py-3">
                  <select
                    value={bill.status}
                    onChange={(e) =>
                      updateBillStatus(bill.id, e.target.value as BillStatus)
                    }
                    className="rounded border border-input bg-background px-2 py-1 text-xs"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="mt-1">
                    <StatusBadge status={bill.status} />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => deleteBill(bill.id)}
                    className="text-xs font-medium text-destructive hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
