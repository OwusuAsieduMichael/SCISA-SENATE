import { SEED_DATA } from "@/lib/seed";
import type { AppData, AuthSession } from "@/lib/types";

export const DATA_KEY = "scisa-senate-data-v1";
export const AUTH_KEY = "scisa-senate-auth-v1";

export function loadData(): AppData {
  if (typeof window === "undefined") return SEED_DATA;
  try {
    const raw = localStorage.getItem(DATA_KEY);
    if (!raw) return SEED_DATA;
    return { ...SEED_DATA, ...JSON.parse(raw) } as AppData;
  } catch {
    return SEED_DATA;
  }
}

export function saveData(data: AppData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
}

export function resetData() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(DATA_KEY);
}

export function loadSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? (JSON.parse(raw) as AuthSession) : null;
  } catch {
    return null;
  }
}

export function saveSession(session: AuthSession | null) {
  if (typeof window === "undefined") return;
  if (session) localStorage.setItem(AUTH_KEY, JSON.stringify(session));
  else localStorage.removeItem(AUTH_KEY);
}

export function uid(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
