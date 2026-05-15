"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { canAccessDashboard, DEMO_USERS } from "@/lib/demo-users";
import { isSupabaseConfigured, createBrowserSupabase } from "@/lib/supabase/client";
import { mapProfileRole } from "@/lib/supabase/mappers";
import { loadSession, saveSession } from "@/lib/storage";
import type { AuthSession, AuthUser, UserRole } from "@/lib/types";

type AuthContextValue = {
  session: AuthSession | null;
  ready: boolean;
  usingSupabase: boolean;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => Promise<void>;
  hasRole: (...roles: UserRole[]) => boolean;
  canDashboard: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function profileFromSupabase(userId: string, email: string) {
  const supabase = createBrowserSupabase();
  const { data, error } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", userId)
    .single();
  if (error) throw error;
  return {
    id: userId,
    name: data.full_name || email,
    email,
    role: mapProfileRole(data.role),
  } satisfies AuthUser;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const usingSupabase = isSupabaseConfigured();
  const [session, setSession] = useState<AuthSession | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!usingSupabase) {
      setSession(loadSession());
      setReady(true);
      return;
    }

    const supabase = createBrowserSupabase();

    async function loadUser() {
      const { data } = await supabase.auth.getSession();
      const u = data.session?.user;
      if (!u?.email) {
        setSession(null);
        setReady(true);
        return;
      }
      try {
        const user = await profileFromSupabase(u.id, u.email);
        setSession({ user, loggedInAt: new Date().toISOString() });
      } catch {
        setSession(null);
      }
      setReady(true);
    }

    loadUser();

    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, s) => {
      if (!s?.user?.email) {
        setSession(null);
        return;
      }
      try {
        const user = await profileFromSupabase(s.user.id, s.user.email);
        setSession({ user, loggedInAt: new Date().toISOString() });
      } catch {
        setSession(null);
      }
    });

    return () => sub.subscription.unsubscribe();
  }, [usingSupabase]);

  const login = useCallback(
    async (email: string, password: string) => {
      if (usingSupabase) {
        const supabase = createBrowserSupabase();
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) return error.message;
        return null;
      }

      const user = DEMO_USERS.find(
        (u) =>
          u.email.toLowerCase() === email.toLowerCase() &&
          u.password === password,
      );
      if (!user) return "Invalid email or password.";
      const { password: _, ...authUser } = user;
      const next: AuthSession = {
        user: authUser as AuthUser,
        loggedInAt: new Date().toISOString(),
      };
      setSession(next);
      saveSession(next);
      return null;
    },
    [usingSupabase],
  );

  const logout = useCallback(async () => {
    if (usingSupabase) {
      const supabase = createBrowserSupabase();
      await supabase.auth.signOut();
    }
    setSession(null);
    saveSession(null);
  }, [usingSupabase]);

  const hasRole = useCallback(
    (...roles: UserRole[]) =>
      session ? roles.includes(session.user.role) : false,
    [session],
  );

  const value = useMemo(
    () => ({
      session,
      ready,
      usingSupabase,
      login,
      logout,
      hasRole,
      canDashboard: session ? canAccessDashboard(session.user.role) : false,
    }),
    [session, ready, usingSupabase, login, logout, hasRole],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
