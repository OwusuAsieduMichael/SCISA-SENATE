"use client";

import { useState } from "react";

import { ACADEMIC_TERM } from "@/lib/governance-data";
import { uid } from "@/lib/storage";
import type { Senator } from "@/lib/types";
import { useData } from "@/providers/data-provider";

export default function DashboardSenatorsPage() {
  const { data, upsertSenator, deleteSenator } = useData();
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  async function add(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const constituency = department.trim() || "N/A";
    await upsertSenator({
      id: uid("senator"),
      name: name.trim(),
      department: constituency,
      constituency,
      portfolio: "Senator",
      term: ACADEMIC_TERM,
      committees: [],
    });
    setName("");
    setDepartment("");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Senators</h1>
      <form onSubmit={add} className="mt-6 flex flex-wrap gap-3 rounded-xl border p-4">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 rounded-lg border border-input px-3 py-2 text-sm"
        />
        <input
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="rounded-lg border border-input px-3 py-2 text-sm"
        />
        <button type="submit" className="rounded-lg bg-primary px-4 py-2 text-sm text-white">
          Add
        </button>
      </form>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {data.senators.map((s: Senator) => (
          <li key={s.id} className="rounded-xl border p-4">
            <p className="font-semibold">{s.name}</p>
            <p className="text-sm text-muted-foreground">{s.department}</p>
            <button
              type="button"
              className="mt-2 text-xs text-destructive"
              onClick={() => deleteSenator(s.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
