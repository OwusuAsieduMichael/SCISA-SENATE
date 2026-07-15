"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type PressImageLightboxProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  /** Label shown on hover / for screen readers when expanding */
  actionLabel?: string;
  /** Dialog content max width */
  size?: "md" | "lg" | "xl";
  children: ReactNode;
};

const SIZE_CLASS = {
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
} as const;

export function PressImageLightbox({
  title,
  imageSrc,
  imageAlt,
  caption,
  priority = false,
  className,
  actionLabel = "View release",
  size = "md",
  children,
}: PressImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    dialogRef.current?.close();
    setOpen(false);
  }, []);

  const openViewer = useCallback(() => {
    setOpen(true);
    dialogRef.current?.showModal();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setOpen(false);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={openViewer}
        className={cn(
          "group relative block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-gold)] focus-visible:ring-offset-2",
          className,
        )}
        aria-label={`${actionLabel}: ${title}`}
      >
        {children}
        <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
        <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-[var(--senate-blue)]/90 px-2.5 py-1.5 text-[11px] font-semibold tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:text-xs">
          <Expand className="size-3.5" aria-hidden />
          {actionLabel}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-50 m-0 max-h-none max-w-none border-0 bg-transparent p-3 backdrop:bg-black/80 backdrop:backdrop-blur-sm open:flex open:flex-col open:items-center open:justify-center sm:p-6"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div
          className={cn(
            "relative flex max-h-[min(92vh,960px)] w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0a1738] shadow-2xl",
            SIZE_CLASS[size],
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{title}</p>
              {caption ? (
                <p className="truncate text-xs text-white/65">{caption}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={close}
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close briefing"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>
          <div className="relative min-h-0 flex-1 overflow-auto bg-black/40">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1080}
              height={1350}
              priority={priority}
              className="mx-auto h-auto w-full max-w-full object-contain"
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
