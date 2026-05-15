"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { mainNav } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/auth-provider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { session, canDashboard } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary text-primary-foreground shadow-md">
      <div className="gold-accent-line w-full" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/senate-logo.png"
            alt="SCISA Senate"
            width={44}
            height={44}
            className="rounded-full ring-2 ring-white/20"
          />
          <div className="hidden sm:block leading-tight">
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/70">
              Official Portal
            </p>
            <p className="text-sm font-semibold text-white">SCISA Senate</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/petitions"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden bg-destructive text-white hover:bg-destructive/90 sm:inline-flex",
            )}
          >
            Submit Petition
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-white/10 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/petitions"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants(),
              "mt-2 bg-destructive text-white hover:bg-destructive/90",
            )}
          >
            Submit Petition
          </Link>
        </nav>
      </div>
    </header>
  );
}
