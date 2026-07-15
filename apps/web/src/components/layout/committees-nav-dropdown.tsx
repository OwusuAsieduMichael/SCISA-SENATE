"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { NavDropdown } from "@/lib/nav";
import { cn } from "@/lib/utils";

type NavMenuDropdownProps = {
  item: NavDropdown;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
  /** Link label for the parent section hub (e.g. "View all committees"). */
  hubLinkLabel?: string;
};

export function NavMenuDropdown({
  item,
  variant = "desktop",
  onNavigate,
  hubLinkLabel = "View all",
}: NavMenuDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive =
    pathname === item.href || pathname.startsWith(`${item.href}/`);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  if (variant === "mobile") {
    return (
      <div className="space-y-0.5">
        <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white/50">
          {item.label}
        </p>
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "block rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10",
            isActive && "bg-white/10 text-white",
          )}
        >
          {hubLinkLabel}
        </Link>
        <ul className="ml-2 space-y-0.5 border-l border-white/15 pl-2">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className={cn(
                  "block rounded-md px-3 py-1.5 text-xs leading-snug text-white/75 hover:bg-white/10 hover:text-white sm:text-sm",
                  pathname === child.href && "bg-white/10 text-white",
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white xl:px-3",
          isActive && "bg-white/10 text-white",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("size-4 transition-transform", open && "rotate-180")}
        />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 min-w-[15rem] overflow-hidden rounded-lg border border-border bg-card py-1 shadow-lg"
        >
          <Link
            href={item.href}
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
            className="block border-b border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-muted"
          >
            {hubLinkLabel}
          </Link>
          <ul className="max-h-[min(24rem,70vh)] overflow-y-auto py-1">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  role="menuitem"
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                  className={cn(
                    "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted",
                    pathname === child.href && "bg-muted font-medium",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

/** @deprecated Use NavMenuDropdown */
export const CommitteesNavDropdown = NavMenuDropdown;
