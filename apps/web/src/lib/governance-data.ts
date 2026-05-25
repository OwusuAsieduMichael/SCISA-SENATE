import type { Committee, CommitteeMember, Leadership, Senator } from "@/lib/types";

export const GOVERNANCE_LEADERSHIP: Leadership[] = [
  {
    id: "l1",
    name: "Rt. Hon. Henry Oduro Ntiamoah",
    role: "Speaker of the Senate",
    department: "",
  },
  {
    id: "l2",
    name: "Hon. Nathaniel Bannor Amponsah",
    role: "Deputy Speaker",
    department: "",
  },
  {
    id: "l3",
    name: "Hon. Eunice Deladem Sosoo",
    role: "Clerk of the Senate",
    department: "",
  },
];

export const GOVERNANCE_COMMITTEES: Committee[] = [
  {
    id: "c-business",
    name: "Committee on Business",
    chair: "Rt. Hon. Henry Oduro Ntiamoah",
    mandate:
      "Oversees the legislative calendar, coordination of sittings, and the orderly conduct of Senate business.",
    members: [
      { name: "Rt. Hon. Henry Oduro Ntiamoah", role: "Speaker (Chairperson)" },
      {
        name: "Hon. Nathaniel Bannor Amponsah",
        role: "Deputy Speaker (Vice Chairperson)",
      },
      { name: "Hon. Eunice Deladem Sosoo", role: "Clerk" },
      { name: "Hon. Emmanuella Owusu Addo", role: "Deputy Clerk" },
      {
        name: "Hon. Oppong Palmer-Buckle Charles",
        role: "Faculty of Biosciences Caucus Head",
      },
      {
        name: "Hon. Ezekiel Kocraft",
        role: "Faculty of Physical and Computational Sciences Caucus Head",
      },
      { name: "Hon. Evans Kyeremanteng", role: "Presidential Caucus Head" },
      { name: "Hon. Genevieve Owusuwaa Karikari", role: "Secretary Caucus Head" },
      { name: "Hon. Jeffrey Owusu Acheaw", role: "Year Rep Caucus Head" },
    ],
  },
  {
    id: "c-appointment",
    name: "Committee on Appointment",
    chair: "Hon. Jeffrey Owusu Acheaw",
    mandate:
      "Reviews and recommends appointments to Senate offices, committees, and other governance positions.",
    members: [
      { name: "Hon. Jeffrey Owusu Acheaw", role: "Chairperson" },
      { name: "Hon. Palmer-Buckle Charles", role: "Vice Chairperson" },
      { name: "Hon. Genevieve Owusuwaa Karikari", role: "Clerk to the Committee" },
      { name: "Hon. Herbert Boadu Ayisi", role: "Member" },
      { name: "Hon. Dorian Esi Fynn", role: "Member" },
    ],
  },
  {
    id: "c-budget",
    name: "Committee on Budget and Finance",
    chair: "Hon. Nana Kwame Appiah Owusu",
    mandate:
      "Scrutinises the association budget, financial reports, and fiscal policy proposals laid before the Senate.",
    members: [
      { name: "Hon. Nana Kwame Appiah Owusu", role: "Chairperson" },
      { name: "Hon. Appiah Derrick", role: "Vice Chairperson" },
      { name: "Hon. Sawudatu Ibrahim", role: "Clerk to the Committee" },
      { name: "Hon. Benedicta Akosua Gyebuah Cobbina", role: "Ranking Member" },
      { name: "Hon. Genevieve Owusuwaa Karikari", role: "Ranking Member" },
      { name: "Hon. Kindly Osei Bediako", role: "Member" },
    ],
  },
  {
    id: "c-privileges",
    name: "Committee on Privileges",
    chair: "Hon. Nathaniel Bannor Amponsah",
    mandate:
      "Adjudicates matters of senator conduct, privileges, and disciplinary proceedings under Senate rules.",
    members: [
      { name: "Hon. Nathaniel Bannor Amponsah", role: "Chairperson" },
      { name: "Hon. Jeffrey Owusu Acheaw", role: "Vice Chairperson" },
      { name: "Hon. Eunice Deladem Sosoo", role: "Clerk to the Committee" },
      { name: "Hon. Patience Amevor Mensah", role: "Member" },
      { name: "Hon. Isaac Nana Sam Mensah", role: "Ranking Member" },
    ],
  },
  {
    id: "c-welfare",
    name: "Committee on Welfare and Health",
    chair: "Hon. Cecilia Kponkpori Jinche",
    mandate:
      "Addresses student welfare, health services, accommodation concerns, and related support programmes.",
    members: [
      { name: "Hon. Cecilia Kponkpori Jinche", role: "Chairperson" },
      { name: "Hon. Erica Bofah Boateng", role: "Vice Chairperson" },
      { name: "Hon. Kindly Osei Bediako", role: "Clerk to the Committee" },
      { name: "Hon. Sawudatu Ibrahim", role: "Member" },
      { name: "Hon. Herbert Boadu Ayisi", role: "Member" },
      { name: "Hon. Kofi Ewusi Acquah", role: "Member" },
      { name: "Hon. Jevillin Gyedu Owusuaa", role: "Member" },
      { name: "Hon. Simeona Abena Serwaa Asibey", role: "Member" },
    ],
  },
  {
    id: "c-constitution",
    name: "Committee on Constitution, Legal, and Senate Affairs",
    chair: "Hon. Nathaniel Bannor Amponsah",
    mandate:
      "Oversees constitutional interpretation, legal review of motions, and the governance framework of the Senate.",
    members: [
      { name: "Hon. Nathaniel Bannor Amponsah", role: "Chairperson" },
      { name: "Hon. Ezekiel Kocraft", role: "Vice Chairperson" },
      {
        name: "Hon. Benedicta Akosua Gyebuah Cobbina",
        role: "Clerk to the Committee",
      },
      { name: "Hon. Jeffery Oteng Afriyie", role: "Member" },
      { name: "Hon. Isaac Nana Sam Mensah", role: "Ranking Member" },
      { name: "Hon. Patience Amevor Mensah", role: "Member" },
      { name: "Hon. Ohene Blessing Yeboah", role: "Ranking Member" },
    ],
  },
  {
    id: "c-media",
    name: "Committee on Media and Publicity",
    chair: "Hon. Duvor Felix",
    mandate:
      "Manages Senate communications, public relations, and publicity for legislative activities and notices.",
    members: [
      { name: "Hon. Duvor Felix", role: "Chairperson" },
      { name: "Hon. Nana Kwame Appiah Owusu", role: "Vice Chairperson" },
      { name: "Hon. Jevillin Gyedu Owusuaa", role: "Clerk to the Committee" },
      { name: "Hon. Kofi Ewusi Acquah", role: "Member" },
      { name: "Hon. Jeffery Oteng Afriyie", role: "Member" },
      { name: "Hon. Priscilla Esimah Mbeah", role: "Member" },
      { name: "Hon. Woli Richard Kwabena", role: "Member" },
    ],
  },
  {
    id: "c-standing-orders",
    name: "Committee on Standing Orders",
    chair: "Rt. Hon. Henry Oduro Ntiamoah",
    mandate:
      "Maintains and reviews the Senate Standing Orders and procedural rules governing deliberations.",
    members: [
      { name: "Rt. Hon. Henry Oduro Ntiamoah", role: "Speaker (Chairperson)" },
      {
        name: "Hon. Nathaniel Bannor Amponsah",
        role: "Deputy Speaker (Vice Chairperson)",
      },
      { name: "Hon. Eunice Deladem Sosoo", role: "Clerk" },
      { name: "Hon. Emmanuella Owusu Addo", role: "Deputy Clerk" },
      { name: "Hon. Bright Edem Amlalo", role: "Member" },
      { name: "Hon. Elyon Winnore Ayariga", role: "Member" },
      { name: "Hon. Evans Kyeremanteng", role: "Ranking Member" },
      { name: "Hon. Derrick Appiah", role: "Member" },
      { name: "Hon. Palmer-Buckle Charles", role: "Ranking Member" },
    ],
  },
  {
    id: "c-science",
    name: "Committee on Science and Innovation",
    chair: "Hon. Jeffery Oteng Afriyie",
    mandate:
      "Promotes science policy, research initiatives, and innovation programmes relevant to science students.",
    members: [
      { name: "Hon. Jeffery Oteng Afriyie", role: "Chairperson" },
      { name: "Hon. Abraham Appiah", role: "Vice Chairperson" },
      { name: "Hon. Michael Owusu Asiedu", role: "Clerk to the Committee" },
      { name: "Hon. Reginald Nyarko", role: "Member" },
      { name: "Hon. Sam Jerry Joshua", role: "Member" },
      { name: "Hon. Priscilla Esimah Mbeah", role: "Member" },
      { name: "Hon. Ohene Blessing Yeboah", role: "Ranking Member" },
    ],
  },
  {
    id: "c-academics",
    name: "Committee on Academics",
    chair: "Hon. Herbert Boadu Ayisi",
    mandate:
      "Handles academic policy, curriculum concerns, and liaison between the Senate and faculty stakeholders.",
    members: [
      { name: "Hon. Herbert Boadu Ayisi", role: "Chairperson" },
      { name: "Hon. Evans Kyeremanteng", role: "Vice Chairperson" },
      { name: "Hon. Bernice Forson", role: "Clerk to the Committee" },
      { name: "Hon. Simeona Abena Serwaa Asibey", role: "Member" },
      { name: "Hon. Woli Richard Kwabena", role: "Member" },
    ],
  },
];

const ROLE_PRIORITY: Record<string, number> = {
  "Speaker (Chairperson)": 0,
  Chairperson: 1,
  "Deputy Speaker (Vice Chairperson)": 2,
  "Vice Chairperson": 3,
  Clerk: 4,
  "Clerk to the Committee": 4,
  "Deputy Clerk": 5,
  "Ranking Member": 6,
  Member: 7,
};

export function sortCommitteeMembers(members: CommitteeMember[]): CommitteeMember[] {
  return [...members].sort((a, b) => {
    const pa = ROLE_PRIORITY[a.role] ?? 50;
    const pb = ROLE_PRIORITY[b.role] ?? 50;
    if (pa !== pb) return pa - pb;
    return a.name.localeCompare(b.name);
  });
}

export function committeeSlug(committee: Committee): string {
  return committee.id.replace(/^c-/, "");
}

export function getCommitteeBySlug(slug: string): Committee | undefined {
  return GOVERNANCE_COMMITTEES.find((c) => committeeSlug(c) === slug);
}

/** Short label for nav (e.g. "Budget and Finance"). */
export function committeeShortName(committee: Committee): string {
  return committee.name.replace(/^Committee on /, "");
}

export const COMMITTEE_NAV_LINKS = GOVERNANCE_COMMITTEES.map((committee) => ({
  label: committeeShortName(committee),
  href: `/committees/${committeeSlug(committee)}`,
}));

export type CommitteeMemberGroup = {
  title: string;
  description?: string;
  members: CommitteeMember[];
};

export function groupCommitteeMembers(
  members: CommitteeMember[],
): CommitteeMemberGroup[] {
  const sorted = sortCommitteeMembers(members);
  const leadership: CommitteeMember[] = [];
  const caucus: CommitteeMember[] = [];
  const ranking: CommitteeMember[] = [];
  const general: CommitteeMember[] = [];

  for (const member of sorted) {
    if (member.role.includes("Caucus")) {
      caucus.push(member);
    } else if (member.role === "Ranking Member") {
      ranking.push(member);
    } else if (member.role === "Member") {
      general.push(member);
    } else {
      leadership.push(member);
    }
  }

  const groups: CommitteeMemberGroup[] = [];
  if (leadership.length) {
    groups.push({
      title: "Officers of the Committee",
      description: "Chairperson, vice chairperson, clerk, and related offices.",
      members: leadership,
    });
  }
  if (caucus.length) {
    groups.push({
      title: "Caucus Representatives",
      description: "Heads of faculty and stakeholder caucuses on the committee.",
      members: caucus,
    });
  }
  if (ranking.length) {
    groups.push({
      title: "Ranking Members",
      members: ranking,
    });
  }
  if (general.length) {
    groups.push({
      title: "Members",
      members: general,
    });
  }
  return groups;
}

function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/^rt\.?\s*hon\.?\s*/i, "")
    .replace(/^hon\.?\s*/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function primaryPortfolio(memberships: { committee: string; role: string }[]): string {
  const rank = (role: string) => ROLE_PRIORITY[role] ?? 99;
  const best = [...memberships].sort((a, b) => rank(a.role) - rank(b.role))[0];
  if (!best) return "Senator";
  if (best.role === "Member" || best.role === "Ranking Member") {
    return `${best.role} — ${best.committee}`;
  }
  return `${best.role} — ${best.committee}`;
}

/** Senators derived from standing committee rosters (2025–2026 term). */
export function buildSenatorsFromCommittees(committees: Committee[]): Senator[] {
  const byName = new Map<string, { committee: string; role: string }[]>();

  for (const committee of committees) {
    const shortName = committee.name.replace(/^Committee on /, "");
    for (const member of committee.members) {
      const list = byName.get(member.name) ?? [];
      list.push({ committee: shortName, role: member.role });
      byName.set(member.name, list);
    }
  }

  return [...byName.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, memberships]) => ({
      id: `sen-${slugifyName(name)}`,
      name,
      department: "",
      portfolio: primaryPortfolio(memberships),
      term: "2025–2026",
      committees: [...new Set(memberships.map((m) => m.committee))].sort(),
    }));
}

export const GOVERNANCE_SENATORS = buildSenatorsFromCommittees(GOVERNANCE_COMMITTEES);
