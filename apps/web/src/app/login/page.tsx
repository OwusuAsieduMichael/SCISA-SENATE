"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { DEMO_USERS, roleLabel } from "@/lib/demo-users";
import { useAuth } from "@/providers/auth-provider";

export default function LoginPage() {
  const { login, session, ready, canDashboard, usingSupabase } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ready && session && canDashboard) router.replace("/dashboard");
  }, [ready, session, canDashboard, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const err = await login(email, password);
    setLoading(false);
    if (err) {
      setError(err);
      return;
    }
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="institutional-gradient flex flex-1 flex-col justify-center px-8 py-12 text-white lg:px-16">
        <Image
          src="/brand/senate-logo.png"
          alt="SCISA Senate"
          width={96}
          height={96}
          className="rounded-full ring-4 ring-white/20"
        />
        <h1 className="mt-8 text-3xl font-bold">Senate Workspace</h1>
        <p className="mt-3 max-w-md text-white/80">
          {usingSupabase
            ? "Deployed on Vercel with Supabase as the serverless database and auth, with no Render or NestJS backend."
            : "Supabase not configured: using local demo mode. Add env vars from .env.example for production."}
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center bg-background px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-primary">Sign in</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {usingSupabase
              ? "Sign in with your Supabase Auth user (staff role required for dashboard)"
              : "Use a demo account below (local only)"}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-input px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-input px-3 py-2 text-sm"
                required
              />
            </div>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              {loading ? "Signing in…" : "Enter Dashboard"}
            </button>
          </form>

          {!usingSupabase ? (
            <div className="mt-8 rounded-xl border border-border bg-muted/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Demo accounts
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {DEMO_USERS.map((u) => (
                  <li key={u.id}>
                    <button
                      type="button"
                      className="w-full rounded-lg border border-border bg-card px-3 py-2 text-left hover:border-primary/30"
                      onClick={() => {
                        setEmail(u.email);
                        setPassword(u.password);
                      }}
                    >
                      <span className="font-medium">{roleLabel(u.role)}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {u.email} / {u.password}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <Link href="/" className="mt-6 inline-block text-sm text-primary hover:underline">
            ← Back to public portal
          </Link>
        </div>
      </div>
    </div>
  );
}
