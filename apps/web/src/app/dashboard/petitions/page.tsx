"use client";

import type { PetitionStatus } from "@/lib/types";
import { useData } from "@/providers/data-provider";

const STATUSES: PetitionStatus[] = [
  "Pending",
  "Under Review",
  "Resolved",
  "Rejected",
];

export default function DashboardPetitionsPage() {
  const { data, updatePetitionStatus } = useData();

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Petitions</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Review student submissions from the public portal
      </p>

      {data.petitions.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">
          No petitions yet. Submit one from the public petitions page.
        </p>
      ) : (
        <ul className="mt-6 space-y-4">
          {data.petitions.map((p) => (
            <li key={p.id} className="rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.indexNumber} · {p.category} · {p.createdAt}
                  </p>
                </div>
                <select
                  value={p.status}
                  onChange={(e) =>
                    updatePetitionStatus(p.id, e.target.value as PetitionStatus)
                  }
                  className="rounded-lg border border-input px-3 py-1.5 text-sm"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
