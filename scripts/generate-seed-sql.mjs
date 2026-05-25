import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import {
  GOVERNANCE_COMMITTEES,
  GOVERNANCE_LEADERSHIP,
  GOVERNANCE_SENATORS,
} from "../apps/web/src/lib/governance-data.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function esc(s) {
  return s.replace(/'/g, "''");
}

const leadershipRows = GOVERNANCE_LEADERSHIP.map(
  (l) =>
    `  ('${l.id}', '${esc(l.name)}', '${esc(l.role)}', '${esc(l.department)}')`,
).join(",\n");

const committeeRows = GOVERNANCE_COMMITTEES.map((c) => {
  const membersJson = esc(JSON.stringify(c.members));
  return `  ('${c.id}', '${esc(c.name)}', '${esc(c.chair)}', '${esc(c.mandate)}', '${membersJson}'::jsonb)`;
}).join(",\n");

const senatorRows = GOVERNANCE_SENATORS.map((s) => {
  const comm =
    "array[" + s.committees.map((c) => `'${esc(c)}'`).join(",") + "]";
  return `  ('${s.id}', '${esc(s.name)}', '${esc(s.department)}', '${esc(s.portfolio)}', '${esc(s.term)}', ${comm})`;
}).join(",\n");

const sql = `-- Run after 001_initial_schema.sql and 002_committee_members.sql
-- Auto-generated from apps/web/src/lib/governance-data.ts

delete from public.committees;
delete from public.leadership;
delete from public.senators;

insert into public.leadership (id, name, role, department) values
${leadershipRows}
on conflict (id) do update set
  name = excluded.name,
  role = excluded.role,
  department = excluded.department;

insert into public.committees (id, name, chair, mandate, members) values
${committeeRows}
on conflict (id) do update set
  name = excluded.name,
  chair = excluded.chair,
  mandate = excluded.mandate,
  members = excluded.members;

insert into public.senators (id, name, department, portfolio, term, committees) values
${senatorRows}
on conflict (id) do update set
  name = excluded.name,
  department = excluded.department,
  portfolio = excluded.portfolio,
  term = excluded.term,
  committees = excluded.committees;

insert into public.bills (id, title, status, sponsor, summary, updated_at) values
  ('bill-2026-04', 'Student Welfare Support Amendment Bill', 'Debate', 'Committee on Welfare and Health', 'Amends welfare disbursement guidelines.', '2026-05-12'),
  ('bill-2026-03', 'Senate Transparency & Records Act', 'Review', 'Committee on Constitution, Legal, and Senate Affairs', null, '2026-05-05'),
  ('bill-2026-01', 'Academic Calendar Consultation Motion', 'Passed', 'Committee on Academics', null, '2026-04-18')
on conflict (id) do update set sponsor = excluded.sponsor;

insert into public.announcements (id, title, date, urgent) values
  ('a1', 'Call for Petitions — Welfare Quarter', '2026-05-10', true),
  ('a2', 'Senate Sitting Notice — May 2026', '2026-05-08', false),
  ('a3', 'Constitution Review Committee Report Published', '2026-05-01', false)
on conflict (id) do nothing;

insert into public.sittings (id, title, date, time, venue) values
  ('sit1', 'Second Ordinary Sitting', '2026-05-22', '6:00 PM', 'SCISA Senate Chamber'),
  ('sit2', 'Committee of the Whole', '2026-05-29', '5:30 PM', 'Faculty of Physical Sciences')
on conflict (id) do nothing;

insert into public.sessions (id, title, date, type) values
  ('sess1', 'First Ordinary Sitting — 2026', '2026-04-15', 'Minutes'),
  ('sess2', 'Emergency Sitting — Welfare Motion', '2026-03-28', 'Resolution')
on conflict (id) do nothing;

insert into public.news_items (id, title, date, category, excerpt) values
  ('n1', 'Senate Approves Digital Governance Portal Initiative', '2026-05-12', 'Official Statement', 'Ratified digital governance infrastructure.'),
  ('n2', 'Committee Reports Published for Q1 2026', '2026-05-01', 'Notice', null)
on conflict (id) do nothing;

insert into public.constitution_docs (id, title, type, size) values
  ('doc1', 'SCISA Constitution', 'PDF', '2.4 MB'),
  ('doc2', 'Senate Standing Orders', 'PDF', '1.1 MB'),
  ('doc3', 'Governance Policy Framework', 'PDF', '890 KB')
on conflict (id) do nothing;
`;

const out = join(root, "supabase", "seed.sql");
writeFileSync(out, sql, "utf8");
console.log(`Wrote ${out}`);
