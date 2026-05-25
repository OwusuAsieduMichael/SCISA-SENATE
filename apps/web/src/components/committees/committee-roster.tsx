import { Users } from "lucide-react";

import type { Committee, CommitteeMember } from "@/lib/types";
import {
  committeeShortName,
  groupCommitteeMembers,
} from "@/lib/governance-data";
import { cn } from "@/lib/utils";

function RoleBadge({ role }: { role: string }) {
  const isLead =
    role.includes("Chairperson") ||
    role.includes("Clerk") ||
    role.startsWith("Speaker") ||
    role.startsWith("Deputy Speaker");
  return (
    <span
      className={cn(
        "inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
        isLead
          ? "bg-destructive/10 text-destructive"
          : "bg-muted text-muted-foreground",
      )}
    >
      {role}
    </span>
  );
}

function MemberRow({ member }: { member: CommitteeMember }) {
  return (
    <li className="flex flex-col gap-2 border-b border-border px-5 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm font-medium text-foreground">{member.name}</span>
      <RoleBadge role={member.role} />
    </li>
  );
}

type CommitteeRosterProps = {
  committee: Committee;
  showMandate?: boolean;
};

export function CommitteeLeadershipCard({ committee }: { committee: Committee }) {
  const chair = committee.members.find((m) =>
    m.role.toLowerCase().includes("chairperson"),
  );
  const vice = committee.members.find((m) =>
    m.role.toLowerCase().includes("vice chairperson"),
  );
  const clerk = committee.members.find(
    (m) => m.role === "Clerk" || m.role === "Clerk to the Committee",
  );

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {chair ? (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm ring-1 ring-[var(--institutional-gold)]/20">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--institutional-gold)]">
            Chairperson
          </p>
          <p className="mt-2 font-semibold text-foreground">{chair.name}</p>
        </div>
      ) : null}
      {vice ? (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Vice Chairperson
          </p>
          <p className="mt-2 font-semibold text-foreground">{vice.name}</p>
        </div>
      ) : null}
      {clerk ? (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Clerk
          </p>
          <p className="mt-2 font-semibold text-foreground">{clerk.name}</p>
        </div>
      ) : null}
    </div>
  );
}

export function CommitteeRoster({
  committee,
  showMandate = true,
}: CommitteeRosterProps) {
  const groups = groupCommitteeMembers(committee.members);

  return (
    <div className="space-y-10">
      {showMandate ? (
        <div className="rounded-xl border border-border bg-muted/40 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Mandate
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            {committee.mandate}
          </p>
        </div>
      ) : null}

      <CommitteeLeadershipCard committee={committee} />

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Users className="size-4" />
        <span>
          {committee.members.length} members · {committeeShortName(committee)} ·
          2025–2026 term
        </span>
      </div>

      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group.title}>
            <div className="mb-3 border-l-4 border-primary pl-4">
              <h2 className="text-base font-semibold text-foreground">
                {group.title}
              </h2>
              {group.description ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {group.description}
                </p>
              ) : null}
            </div>
            <ul className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              {group.members.map((member) => (
                <MemberRow key={`${member.name}-${member.role}`} member={member} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
