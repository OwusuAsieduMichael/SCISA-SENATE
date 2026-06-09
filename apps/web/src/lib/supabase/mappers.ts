import type { Database } from "@/lib/supabase/database.types";
import type {
  Announcement,
  AppData,
  AuditEntry,
  Bill,
  BillStatus,
  Committee,
  CommitteeMember,
  Leadership,
  NewsItem,
  Petition,
  PetitionStatus,
  Senator,
  Session,
  Sitting,
  UserRole,
  Vote,
} from "@/lib/types";
import type { ConstitutionDoc } from "@/lib/types";
import { getOfficerPhotoByName } from "@/lib/governance-data";

type BillRow = Database["public"]["Tables"]["bills"]["Row"];

export function mapBill(row: BillRow): Bill {
  return {
    id: row.id,
    title: row.title,
    status: row.status as BillStatus,
    sponsor: row.sponsor,
    summary: row.summary ?? undefined,
    updatedAt: row.updated_at,
  };
}

export function mapPetition(
  row: Database["public"]["Tables"]["petitions"]["Row"],
): Petition {
  return {
    id: row.id,
    name: row.name,
    indexNumber: row.index_number,
    category: row.category,
    message: row.message,
    status: row.status as PetitionStatus,
    createdAt: row.created_at,
  };
}

export function mapSenator(
  row: Database["public"]["Tables"]["senators"]["Row"],
): Senator {
  return {
    id: row.id,
    name: row.name,
    department: row.department,
    constituency: row.department,
    portfolio: row.portfolio,
    term: row.term,
    committees: row.committees ?? [],
    achievements: row.achievements ?? undefined,
  };
}

export function mapVote(row: Database["public"]["Tables"]["votes"]["Row"]): Vote {
  return {
    id: row.id,
    billId: row.bill_id,
    senatorId: row.senator_id,
    choice: row.choice as Vote["choice"],
    castAt: row.cast_at,
  };
}

export function rowsToAppData(payload: {
  bills: BillRow[];
  senators: Database["public"]["Tables"]["senators"]["Row"][];
  petitions: Database["public"]["Tables"]["petitions"]["Row"][];
  announcements: Database["public"]["Tables"]["announcements"]["Row"][];
  sessions: Database["public"]["Tables"]["sessions"]["Row"][];
  news: Database["public"]["Tables"]["news_items"]["Row"][];
  committees: Database["public"]["Tables"]["committees"]["Row"][];
  sittings: Database["public"]["Tables"]["sittings"]["Row"][];
  leadership: Database["public"]["Tables"]["leadership"]["Row"][];
  constitutionDocs: Database["public"]["Tables"]["constitution_docs"]["Row"][];
  votes: Database["public"]["Tables"]["votes"]["Row"][];
  auditLog: Database["public"]["Tables"]["audit_log"]["Row"][];
}): AppData {
  return {
    bills: payload.bills.map(mapBill),
    senators: payload.senators.map(mapSenator),
    petitions: payload.petitions.map(mapPetition),
    announcements: payload.announcements.map(
      (r): Announcement => ({
        id: r.id,
        title: r.title,
        date: r.date,
        urgent: r.urgent,
      }),
    ),
    sessions: payload.sessions.map(
      (r): Session => ({
        id: r.id,
        title: r.title,
        date: r.date,
        type: r.type,
      }),
    ),
    news: payload.news.map(
      (r): NewsItem => ({
        id: r.id,
        title: r.title,
        date: r.date,
        category: r.category,
        excerpt: r.excerpt ?? undefined,
      }),
    ),
    committees: payload.committees.map((r): Committee => {
      const raw = r.members;
      const members: CommitteeMember[] = Array.isArray(raw)
        ? raw.filter(
            (m): m is CommitteeMember =>
              typeof m === "object" &&
              m !== null &&
              "name" in m &&
              "role" in m &&
              typeof (m as CommitteeMember).name === "string" &&
              typeof (m as CommitteeMember).role === "string",
          )
        : [];
      return {
        id: r.id,
        name: r.name,
        chair: r.chair,
        mandate: r.mandate,
        members,
      };
    }),
    sittings: payload.sittings.map(
      (r): Sitting => ({
        id: r.id,
        title: r.title,
        date: r.date,
        time: r.time,
        venue: r.venue,
      }),
    ),
    leadership: payload.leadership.map((r): Leadership => {
      const imageSrc = getOfficerPhotoByName(r.name);
      return {
        id: r.id,
        name: r.name,
        role: r.role,
        department: r.department,
        ...(imageSrc ? { imageSrc } : {}),
      };
    }),
    constitutionDocs: payload.constitutionDocs.map(
      (r): ConstitutionDoc => ({
        id: r.id,
        title: r.title,
        type: r.type,
        size: r.size,
      }),
    ),
    votes: payload.votes.map(mapVote),
    auditLog: payload.auditLog.map(
      (r): AuditEntry => ({
        id: r.id,
        action: r.action,
        actor: r.actor,
        at: r.at,
      }),
    ),
  };
}

export function mapProfileRole(role: string): UserRole {
  const allowed: UserRole[] = [
    "student",
    "senator",
    "clerk",
    "speaker",
    "admin",
  ];
  return allowed.includes(role as UserRole) ? (role as UserRole) : "student";
}
