import { Users } from "lucide-react";

import { OfficerPortrait } from "@/components/shared/officer-portrait";
import { PersonAvatar } from "@/components/shared/person-avatar";
import type { Committee, CommitteeMember } from "@/lib/types";
import {
  ACADEMIC_TERM,
  committeeShortName,
  getOfficerPhotoByName,
  groupCommitteeMembers,
} from "@/lib/governance-data";
import { isCommitteeLeadershipRole } from "@/lib/person-display";
import { cn } from "@/lib/utils";

function RoleBadge({ role }: { role: string }) {
  const isLead = isCommitteeLeadershipRole(role);
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

function MemberRow({ member, index }: { member: CommitteeMember; index: number }) {
  const photo = getOfficerPhotoByName(member.name);

  return (
    <li className="flex gap-4 border-b border-border px-5 py-4 last:border-0">
      <span className="mt-0.5 w-6 shrink-0 text-center text-xs font-medium tabular-nums text-muted-foreground">
        {index}
      </span>
      {photo ? (
        <OfficerPortrait name={member.name} imageSrc={photo} size="sm" variant="default" />
      ) : (
        <PersonAvatar name={member.name} size="sm" variant="default" />
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-medium leading-snug text-foreground">
          {member.name}
        </span>
        <RoleBadge role={member.role} />
      </div>
    </li>
  );
}

type OfficerSlotProps = {
  title: string;
  member?: CommitteeMember;
  accent?: boolean;
};

function OfficerSlot({ title, member, accent = false }: OfficerSlotProps) {
  const photo = member ? getOfficerPhotoByName(member.name) : undefined;

  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-2xl border border-border bg-card px-5 py-6 text-center shadow-sm",
        accent && "ring-1 ring-[var(--institutional-gold)]/35",
      )}
    >
      {member ? (
        <>
          {photo ? (
            <OfficerPortrait
              name={member.name}
              imageSrc={photo}
              subtitle={member.role}
              size="lg"
              variant={accent ? "officer" : "default"}
            />
          ) : (
            <PersonAvatar
              name={member.name}
              size="lg"
              variant={accent ? "officer" : "default"}
            />
          )}
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {title}
          </p>
          <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
            {member.name}
          </p>
          <p className="mt-1 text-xs text-destructive">{member.role}</p>
        </>
      ) : (
        <>
          <div className="flex size-14 items-center justify-center rounded-full border border-dashed border-border bg-muted/40">
            <span className="text-sm text-muted-foreground">N/A</span>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {title}
          </p>
          <p className="mt-2 text-sm italic text-muted-foreground">To be assigned</p>
        </>
      )}
    </div>
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

  const visible = [
    { title: "Chairperson", member: chair, accent: true },
    { title: "Vice Chairperson", member: vice, accent: false },
    { title: "Clerk", member: clerk, accent: false },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {visible.map((slot) => (
        <OfficerSlot
          key={slot.title}
          title={slot.title}
          member={slot.member}
          accent={slot.accent}
        />
      ))}
    </div>
  );
}

function membersExcludingLeadership(members: CommitteeMember[]) {
  return members.filter((m) => !isCommitteeLeadershipRole(m.role));
}

export function CommitteeRoster({
  committee,
  showMandate = true,
}: CommitteeRosterProps) {
  const rosterMembers = membersExcludingLeadership(committee.members);
  const groups = groupCommitteeMembers(rosterMembers);
  let rowIndex = 0;

  return (
    <div className="space-y-10">
      {showMandate ? (
        <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/50 to-muted/20 px-6 py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Mandate of the Committee
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            {committee.mandate}
          </p>
        </div>
      ) : null}

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Committee officers
        </h2>
        <div className="mt-4">
          <CommitteeLeadershipCard committee={committee} />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
        <Users className="size-4 shrink-0 text-primary" />
        <span>
          <span className="font-medium text-foreground">
            {committee.members.length}
          </span>{" "}
          members · {committeeShortName(committee)} · Session {ACADEMIC_TERM}
        </span>
      </div>

      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group.title}>
            <div className="mb-3 border-l-4 border-[var(--institutional-gold)] pl-4">
              <h2 className="text-base font-semibold text-foreground">
                {group.title}
              </h2>
              {group.description ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {group.description}
                </p>
              ) : null}
            </div>
            <ul className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              {group.members.map((member) => {
                rowIndex += 1;
                return (
                  <MemberRow
                    key={`${member.name}-${member.role}`}
                    member={member}
                    index={rowIndex}
                  />
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
