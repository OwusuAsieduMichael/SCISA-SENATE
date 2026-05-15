"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { roleLabel } from "@/lib/demo-users";
import { navForRole } from "@/lib/dashboard-nav";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/auth-provider";
import { useData } from "@/providers/data-provider";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { session, ready, logout, canDashboard } = useAuth();
  const { usingSupabase } = useData();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!ready) return;
    if (!session || !canDashboard) router.replace("/login");
  }, [ready, session, canDashboard, router]);

  if (!ready || !session) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-muted-foreground">
        Loading workspace…
      </div>
    );
  }

  const links = navForRole(session.user.role);

  return (
    <div className="flex min-h-screen bg-muted/30">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-transform lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
          <Image
            src="/brand/senate-logo.png"
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <p className="text-xs text-white/70">Senate Workspace</p>
            <p className="text-sm font-semibold text-white">SCISA Dashboard</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-sidebar-accent text-white"
                  : "text-white/80 hover:bg-sidebar-accent/60 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-sidebar-border p-4">
          <p className="truncate text-sm font-medium text-white">{session.user.name}</p>
          <p className="text-xs text-white/60">{roleLabel(session.user.role)}</p>
          <button
            type="button"
            onClick={async () => {
              await logout();
              router.push("/login");
            }}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-destructive px-3 py-2 text-sm font-medium text-white hover:bg-destructive/90"
          >
            <LogOut className="size-4" />
            Sign out
          </button>
        </div>
      </aside>

      {sidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-border bg-card px-4 lg:px-6">
          <button
            type="button"
            className="rounded-md p-2 lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
          <p className="text-sm text-muted-foreground">
            {usingSupabase ? "Connected to Supabase" : "Offline demo · localStorage"}
          </p>
          <Link href="/" className="text-sm font-medium text-primary hover:underline">
            Public site
          </Link>
        </header>
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
