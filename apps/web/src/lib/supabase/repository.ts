import { createBrowserSupabase } from "@/lib/supabase/client";
import { rowsToAppData } from "@/lib/supabase/mappers";
import { uid } from "@/lib/storage";
import type {
  Announcement,
  AppData,
  Bill,
  BillStatus,
  Committee,
  NewsItem,
  Petition,
  PetitionStatus,
  Senator,
  Session,
  Sitting,
  Vote,
} from "@/lib/types";

export async function fetchAppData(): Promise<AppData> {
  const supabase = createBrowserSupabase();
  const [
    bills,
    senators,
    petitions,
    announcements,
    sessions,
    news,
    committees,
    sittings,
    leadership,
    constitutionDocs,
    votes,
    auditLog,
  ] = await Promise.all([
    supabase.from("bills").select("*").order("updated_at", { ascending: false }),
    supabase.from("senators").select("*"),
    supabase.from("petitions").select("*").order("created_at", { ascending: false }),
    supabase.from("announcements").select("*").order("date", { ascending: false }),
    supabase.from("sessions").select("*").order("date", { ascending: false }),
    supabase.from("news_items").select("*").order("date", { ascending: false }),
    supabase.from("committees").select("*"),
    supabase.from("sittings").select("*").order("date", { ascending: false }),
    supabase.from("leadership").select("*"),
    supabase.from("constitution_docs").select("*"),
    supabase.from("votes").select("*").order("cast_at", { ascending: false }),
    supabase.from("audit_log").select("*").order("at", { ascending: false }).limit(100),
  ]);

  const err =
    bills.error ??
    senators.error ??
    petitions.error ??
    announcements.error ??
    sessions.error ??
    news.error ??
    committees.error ??
    sittings.error ??
    leadership.error ??
    constitutionDocs.error ??
    votes.error ??
    auditLog.error;

  if (err) throw err;

  return rowsToAppData({
    bills: bills.data ?? [],
    senators: senators.data ?? [],
    petitions: petitions.data ?? [],
    announcements: announcements.data ?? [],
    sessions: sessions.data ?? [],
    news: news.data ?? [],
    committees: committees.data ?? [],
    sittings: sittings.data ?? [],
    leadership: leadership.data ?? [],
    constitutionDocs: constitutionDocs.data ?? [],
    votes: votes.data ?? [],
    auditLog: auditLog.data ?? [],
  });
}

export async function insertPetition(
  input: Omit<Petition, "id" | "status" | "createdAt">,
) {
  const supabase = createBrowserSupabase();
  const row = {
    id: uid("petition"),
    name: input.name,
    index_number: input.indexNumber,
    category: input.category,
    message: input.message,
    status: "Pending",
    created_at: new Date().toISOString().slice(0, 10),
  };
  const { error } = await supabase.from("petitions").insert(row);
  if (error) throw error;
}

export async function updatePetitionStatusDb(id: string, status: PetitionStatus) {
  const supabase = createBrowserSupabase();
  const { error } = await supabase.from("petitions").update({ status }).eq("id", id);
  if (error) throw error;
}

export async function upsertBillDb(bill: Bill) {
  const supabase = createBrowserSupabase();
  const { error } = await supabase.from("bills").upsert({
    id: bill.id,
    title: bill.title,
    status: bill.status,
    sponsor: bill.sponsor,
    summary: bill.summary ?? null,
    updated_at: bill.updatedAt,
  });
  if (error) throw error;
}

export async function deleteBillDb(id: string) {
  const supabase = createBrowserSupabase();
  const { error } = await supabase.from("bills").delete().eq("id", id);
  if (error) throw error;
}

export async function upsertSenatorDb(senator: Senator) {
  const supabase = createBrowserSupabase();
  const { error } = await supabase.from("senators").upsert({
    id: senator.id,
    name: senator.name,
    department: senator.department,
    portfolio: senator.portfolio,
    term: senator.term,
    committees: senator.committees,
    achievements: senator.achievements ?? null,
  });
  if (error) throw error;
}

export async function deleteSenatorDb(id: string) {
  const supabase = createBrowserSupabase();
  const { error } = await supabase.from("senators").delete().eq("id", id);
  if (error) throw error;
}

export async function castVoteDb(
  billId: string,
  senatorId: string,
  choice: Vote["choice"],
) {
  const supabase = createBrowserSupabase();
  const { error } = await supabase.from("votes").upsert(
    {
      id: uid("vote"),
      bill_id: billId,
      senator_id: senatorId,
      choice,
      cast_at: new Date().toISOString(),
    },
    { onConflict: "bill_id,senator_id" },
  );
  if (error) throw error;
}

export async function insertAudit(action: string, actor: string) {
  const supabase = createBrowserSupabase();
  await supabase.from("audit_log").insert({
    id: uid("audit"),
    action,
    actor,
  });
}
