"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import { NavMenuDropdown } from "@/components/layout/committees-nav-dropdown";
import { buttonVariants } from "@/components/ui/button";
import { isNavDropdown, mainNav, navDropdownHubLabel } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuId = useId();
  const pathname = usePathname();

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((value) => !value), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

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

  const mobileMenu =
    mounted && open
      ? createPortal(
          <div className="lg:hidden" role="presentation">
            {/* Above sticky header so taps are never blocked */}
            <button
              type="button"
              className="fixed inset-0 z-[200] bg-black/50"
              onClick={closeMenu}
              aria-label="Close menu"
            />
            <nav
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Main navigation"
              className="fixed top-14 right-0 bottom-0 z-[210] flex w-[min(20rem,88vw)] flex-col border-l border-white/10 bg-primary text-primary-foreground shadow-2xl sm:top-16"
            >
              <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-4">
                <span className="text-sm font-semibold text-white">Navigation</span>
                <button
                  type="button"
                  className="inline-flex size-11 touch-manipulation items-center justify-center rounded-md text-white hover:bg-white/10"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-3">
                <div className="flex flex-col gap-0.5">
                  {mainNav.map((item) =>
                    isNavDropdown(item) ? (
                      <NavMenuDropdown
                        key={item.label}
                        item={item}
                        variant="mobile"
                        onNavigate={closeMenu}
                        hubLinkLabel={navDropdownHubLabel(item)}
                      />
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          "rounded-md px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10",
                          pathname === item.href && "bg-white/10 text-white",
                        )}
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
                  <div className="mt-3 flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/5 py-2.5">
                    <Image
                      src="/brand/knust-logo.png"
                      alt="KNUST"
                      width={32}
                      height={32}
                      className="size-8 rounded-full bg-white object-contain p-1"
                    />
                    <Image
                      src="/brand/scisa-logo.png"
                      alt="KNUST SCISA"
                      width={32}
                      height={32}
                      className="size-8 rounded-full bg-white object-contain p-0.5"
                    />
                    <span className="text-xs font-medium text-white/90">KNUST · SCISA</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 border-b border-white/10 bg-primary text-primary-foreground shadow-md",
          // When the menu is open, keep the bar (and hamburger) above the dim overlay
          open ? "z-[220]" : "z-[110]",
        )}
      >
        <div className="gold-accent-line w-full" />
        <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 overflow-visible px-3 sm:h-16 sm:gap-3 sm:px-6 lg:gap-4 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-2 sm:max-w-none sm:gap-3 lg:flex-none"
            onClick={closeMenu}
          >
            <Image
              src="/brand/senate-logo.png"
              alt="SCISA Senate"
              width={44}
              height={44}
              className="size-9 shrink-0 rounded-full ring-2 ring-white/20 sm:size-11"
            />
            <div className="min-w-0 leading-tight sm:hidden">
              <p className="truncate text-[10px] font-medium uppercase tracking-wide text-white/70">
                SCISA Senate
              </p>
              <p className="truncate text-xs font-semibold text-white">Official Portal</p>
            </div>
            <div className="hidden min-w-0 leading-tight sm:block">
              <p className="text-[10px] font-medium uppercase tracking-widest text-white/70">
                Official Portal
              </p>
              <p className="truncate text-sm font-semibold text-white">SCISA Senate</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {mainNav.map((item) =>
              isNavDropdown(item) ? (
                <NavMenuDropdown
                  key={item.label}
                  item={item}
                  hubLinkLabel={navDropdownHubLabel(item)}
                />
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

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            <Link
              href="/petitions"
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden bg-destructive text-white hover:bg-destructive/90 lg:inline-flex",
              )}
            >
              Submit Petition
            </Link>
            {/* Desktop only: logos stay in the bar. On mobile/tablet they appear in the drawer. */}
            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <a
                href="https://www.knust.edu.gh"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
                aria-label="Kwame Nkrumah University of Science and Technology"
              >
                <Image
                  src="/brand/knust-logo.png"
                  alt="KNUST"
                  width={40}
                  height={40}
                  className="size-10 rounded-full bg-white object-contain p-1 ring-2 ring-white/20"
                />
              </a>
              <Link href="/" className="shrink-0" aria-label="KNUST SCISA home">
                <Image
                  src="/brand/scisa-logo.png"
                  alt="KNUST SCISA"
                  width={40}
                  height={40}
                  className="size-10 rounded-full bg-white object-contain p-0.5 ring-2 ring-white/20"
                />
              </Link>
            </div>
            <button
              type="button"
              className={cn(
                "inline-flex size-11 min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-md text-white",
                "hover:bg-white/10 active:bg-white/15",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-gold)]",
                "lg:hidden",
                open && "bg-white/10",
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                toggleMenu();
              }}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X className="size-6 pointer-events-none" aria-hidden />
              ) : (
                <Menu className="size-6 pointer-events-none" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
