"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import {
  passportImageClass,
  passportImageStyle,
} from "@/components/shared/passport-portrait";
import { cn } from "@/lib/utils";

type PortraitLightboxProps = {
  name: string;
  imageSrc: string;
  subtitle?: string;
  priority?: boolean;
  className?: string;
  children: ReactNode;
};

export function PortraitLightbox({
  name,
  imageSrc,
  subtitle,
  priority = false,
  className,
  children,
}: PortraitLightboxProps) {
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
          "group relative shrink-0 cursor-zoom-in rounded-full border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-gold)] focus-visible:ring-offset-2",
          className,
        )}
        aria-label={`View photo of ${name}`}
      >
        {children}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-black/0 transition-colors group-hover:bg-black/10 group-active:bg-black/15" />
      </button>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-50 m-0 max-h-none max-w-none border-0 bg-transparent p-4 backdrop:bg-black/75 backdrop:backdrop-blur-sm open:flex open:flex-col open:items-center open:justify-center"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div
          className="relative flex max-h-[min(90vh,720px)] w-full max-w-md flex-col items-center rounded-2xl border border-border bg-card p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close photo"
          >
            <X className="size-4" aria-hidden />
          </button>

          <div className="relative mt-2 size-56 overflow-hidden rounded-full ring-4 ring-[var(--institutional-gold)]/35 ring-offset-4 ring-offset-card sm:size-64">
            <Image
              src={imageSrc}
              alt={name}
              width={512}
              height={512}
              priority={priority}
              className={passportImageClass}
              style={passportImageStyle}
            />
          </div>

          <p className="mt-6 text-center text-lg font-semibold text-foreground">{name}</p>
          {subtitle ? (
            <p className="mt-1 text-center text-sm font-medium text-destructive">{subtitle}</p>
          ) : null}
        </div>
      </dialog>
    </>
  );
}
