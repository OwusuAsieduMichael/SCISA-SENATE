"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import type { NavDropdown } from "@/lib/nav";
import { cn } from "@/lib/utils";

type NavMenuDropdownProps = {
  item: NavDropdown;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
  /** Link label for the parent section hub (e.g. "View all committees"). */
  hubLinkLabel?: string;
  /** Align the desktop panel when the trigger sits near the right edge. */
  align?: "start" | "end";
};

export function NavMenuDropdown({
  item,
  variant = "desktop",
  onNavigate,
  hubLinkLabel = "View all",
  align = "start",
}: NavMenuDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname();
  const isActive =
    pathname === item.href || pathname.startsWith(`${item.href}/`);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    // Close sibling dropdowns when another nav control opens
    function handleSiblingOpen(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      if (detail && detail !== item.label) setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("scisa:nav-dropdown-open", handleSiblingOpen);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("scisa:nav-dropdown-open", handleSiblingOpen);
    };
  }, [open, item.label]);

  function toggleOpen() {
    setOpen((value) => {
      const next = !value;
      if (next) {
        document.dispatchEvent(
          new CustomEvent("scisa:nav-dropdown-open", { detail: item.label }),
        );
      }
      return next;
    });
  }

  if (variant === "mobile") {
    return (
      <div ref={ref} className="space-y-0.5">
        <button
          type="button"
          onClick={toggleOpen}
          aria-expanded={open}
          aria-controls={menuId}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-white/90 hover:bg-white/10",
            (open || isActive) && "bg-white/10 text-white",
          )}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 transition-transform duration-200",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>

        <div
          id={menuId}
          className={cn("overflow-hidden", open ? "block" : "hidden")}
          role="region"
          aria-label={`${item.label} links`}
        >
          <Link
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "block rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10",
              pathname === item.href && "bg-white/10 text-white",
            )}
          >
            {hubLinkLabel}
          </Link>
          <ul className="ml-2 space-y-0.5 border-l border-white/15 pl-2 pb-2">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm leading-snug text-white/75 hover:bg-white/10 hover:text-white",
                    pathname === child.href && "bg-white/10 text-white",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        className={cn(
          "inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white xl:px-3",
          (open || isActive) && "bg-white/10 text-white",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className={cn(
            "absolute top-full z-[160] mt-1.5 min-w-[16rem] max-w-[min(20rem,90vw)] overflow-hidden rounded-lg border border-border bg-card py-1 text-foreground shadow-xl",
            align === "end" ? "right-0" : "left-0",
          )}
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
