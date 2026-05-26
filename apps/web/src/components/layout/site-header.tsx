"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useState } from "react";

import { CommitteesNavDropdown } from "@/components/layout/committees-nav-dropdown";
import { buttonVariants } from "@/components/ui/button";
import { isNavDropdown, mainNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenu();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary text-primary-foreground shadow-md">
      <div className="gold-accent-line w-full" />
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
          <Image
            src="/brand/senate-logo.png"
            alt="SCISA Senate"
            width={44}
            height={44}
            className="size-9 rounded-full ring-2 ring-white/20 sm:size-11"
          />
          <div className="min-w-0 leading-tight sm:hidden">
            <p className="truncate text-[10px] font-medium uppercase tracking-wide text-white/70">
              SCISA Senate
            </p>
            <p className="truncate text-xs font-semibold text-white">Official Portal</p>
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/70">
              Official Portal
            </p>
            <p className="text-sm font-semibold text-white">SCISA Senate</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            isNavDropdown(item) ? (
              <CommitteesNavDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <Link
            href="/petitions"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden bg-destructive text-white hover:bg-destructive/90 sm:inline-flex",
            )}
          >
            Submit Petition
          </Link>
          <Link
            href="/"
            className="hidden shrink-0 sm:block"
            aria-label="KNUST SCISA home"
          >
            <Image
              src="/brand/scisa-logo.png"
              alt="KNUST SCISA"
              width={40}
              height={40}
              className="size-9 rounded-full bg-white p-0.5 ring-2 ring-white/20 sm:size-10"
            />
          </Link>
          <button
            type="button"
            className="relative z-[60] inline-flex size-10 touch-manipulation items-center justify-center rounded-md text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-gold)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu: only mounted when open so nothing blocks the menu button */}
      {open ? (
        <div className="fixed inset-0 z-[55] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={closeMenu}
            aria-label="Close menu"
          />
          <nav
            id={menuId}
            className="absolute left-0 right-0 top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-white/10 bg-primary px-3 py-3 shadow-lg sm:top-16 sm:max-h-[calc(100dvh-4rem)]"
          >
          <div className="flex flex-col gap-0.5">
            {mainNav.map((item) =>
              isNavDropdown(item) ? (
                <CommitteesNavDropdown
                  key={item.label}
                  item={item}
                  variant="mobile"
                  onNavigate={closeMenu}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/petitions"
              onClick={closeMenu}
              className={cn(
                buttonVariants({ size: "sm" }),
                "mt-2 w-full bg-destructive text-white hover:bg-destructive/90",
              )}
            >
              Submit Petition
            </Link>
            <Link
              href="/"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 py-2.5"
              aria-label="KNUST SCISA home"
            >
              <Image
                src="/brand/scisa-logo.png"
                alt="KNUST SCISA"
                width={32}
                height={32}
                className="size-8 rounded-full bg-white p-0.5"
              />
              <span className="text-xs font-medium text-white/90">KNUST SCISA</span>
            </Link>
          </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
