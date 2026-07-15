"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { SEED_DATA } from "@/lib/seed";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import * as repo from "@/lib/supabase/repository";
import { loadData, saveData, uid } from "@/lib/storage";
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

type DataContextValue = {
  data: AppData;
  ready: boolean;
  usingSupabase: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  reset: () => void;
  addPetition: (
    input: Omit<Petition, "id" | "status" | "createdAt">,
  ) => Promise<void>;
  updatePetitionStatus: (id: string, status: PetitionStatus) => Promise<void>;
  upsertBill: (bill: Bill) => Promise<void>;
  deleteBill: (id: string) => Promise<void>;
  updateBillStatus: (id: string, status: BillStatus) => Promise<void>;
  upsertSenator: (senator: Senator) => Promise<void>;
  deleteSenator: (id: string) => Promise<void>;
  castVote: (
    billId: string,
    senatorId: string,
    choice: Vote["choice"],
  ) => Promise<void>;
};

const DataContext = createContext<DataContextValue | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const usingSupabase = isSupabaseConfigured();
  const [data, setData] = useState<AppData>(SEED_DATA);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!usingSupabase) {
      setData(loadData());
      return;
    }
    try {
      setError(null);
      const next = await repo.fetchAppData();
      setData(next);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load data");
    }
  }, [usingSupabase]);

  useEffect(() => {
    (async () => {
      if (usingSupabase) await refresh();
      else setData(loadData());
      setReady(true);
    })();
  }, [usingSupabase, refresh]);

  const persistLocal = useCallback((next: AppData) => {
    setData(next);
    saveData(next);
  }, []);

  const reset = useCallback(() => {
    if (usingSupabase) {
      void refresh();
      return;
    }
    persistLocal(SEED_DATA);
  }, [usingSupabase, refresh, persistLocal]);

  const addPetition = useCallback(
    async (input: Omit<Petition, "id" | "status" | "createdAt">) => {
      const petition: Petition = {
        ...input,
        id: uid("petition"),
        status: "Pending",
        createdAt: new Date().toISOString().slice(0, 10),
      };

      if (usingSupabase) {
        try {
          await repo.insertPetition(input);
          try {
            await repo.insertAudit(`Petition: ${input.category}`, input.name);
          } catch {
            // Audit is secondary; do not block a successful petition.
          }
          try {
            await refresh();
          } catch {
            // Petition already saved remotely.
          }
          return;
        } catch {
          // Keep the submission if the remote write fails (offline / RLS / network).
          persistLocal({ ...data, petitions: [petition, ...data.petitions] });
          return;
        }
      }

      persistLocal({ ...data, petitions: [petition, ...data.petitions] });
    },
    [usingSupabase, data, persistLocal, refresh],
  );

  const updatePetitionStatus = useCallback(
    async (id: string, status: PetitionStatus) => {
      if (usingSupabase) {
        await repo.updatePetitionStatusDb(id, status);
        await refresh();
        return;
      }
      persistLocal({
        ...data,
        petitions: data.petitions.map((p) =>
          p.id === id ? { ...p, status } : p,
        ),
      });
    },
    [usingSupabase, data, persistLocal, refresh],
  );

  const upsertBill = useCallback(
    async (bill: Bill) => {
      if (usingSupabase) {
        await repo.upsertBillDb(bill);
        await refresh();
        return;
      }
      const exists = data.bills.some((b) => b.id === bill.id);
      persistLocal({
        ...data,
        bills: exists
          ? data.bills.map((b) => (b.id === bill.id ? bill : b))
          : [bill, ...data.bills],
      });
    },
    [usingSupabase, data, persistLocal, refresh],
  );

  const deleteBill = useCallback(
    async (id: string) => {
      if (usingSupabase) {
        await repo.deleteBillDb(id);
        await refresh();
        return;
      }
      persistLocal({ ...data, bills: data.bills.filter((b) => b.id !== id) });
    },
    [usingSupabase, data, persistLocal, refresh],
  );

  const updateBillStatus = useCallback(
    async (id: string, status: BillStatus) => {
      const bill = data.bills.find((b) => b.id === id);
      if (!bill) return;
      await upsertBill({
        ...bill,
        status,
        updatedAt: new Date().toISOString().slice(0, 10),
      });
    },
    [data.bills, upsertBill],
  );

  const upsertSenator = useCallback(
    async (senator: Senator) => {
      if (usingSupabase) {
        await repo.upsertSenatorDb(senator);
        await refresh();
        return;
      }
      const exists = data.senators.some((s) => s.id === senator.id);
      persistLocal({
        ...data,
        senators: exists
          ? data.senators.map((s) => (s.id === senator.id ? senator : s))
          : [senator, ...data.senators],
      });
    },
    [usingSupabase, data, persistLocal, refresh],
  );

  const deleteSenator = useCallback(
    async (id: string) => {
      if (usingSupabase) {
        await repo.deleteSenatorDb(id);
        await refresh();
        return;
      }
      persistLocal({
        ...data,
        senators: data.senators.filter((s) => s.id !== id),
      });
    },
    [usingSupabase, data, persistLocal, refresh],
  );

  const castVote = useCallback(
    async (billId: string, senatorId: string, choice: Vote["choice"]) => {
      if (usingSupabase) {
        await repo.castVoteDb(billId, senatorId, choice);
        await refresh();
        return;
      }
      const vote: Vote = {
        id: uid("vote"),
        billId,
        senatorId,
        choice,
        castAt: new Date().toISOString(),
      };
      const without = data.votes.filter(
        (v) => !(v.billId === billId && v.senatorId === senatorId),
      );
      persistLocal({ ...data, votes: [vote, ...without] });
    },
    [usingSupabase, data, persistLocal, refresh],
  );

  const value = useMemo(
    () => ({
      data,
      ready,
      usingSupabase,
      error,
      refresh,
      reset,
      addPetition,
      updatePetitionStatus,
      upsertBill,
      deleteBill,
      updateBillStatus,
      upsertSenator,
      deleteSenator,
      castVote,
    }),
    [
      data,
      ready,
      usingSupabase,
      error,
      refresh,
      reset,
      addPetition,
      updatePetitionStatus,
      upsertBill,
      deleteBill,
      updateBillStatus,
      upsertSenator,
      deleteSenator,
      castVote,
    ],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within DataProvider");
  return ctx;
}
