"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const controlButtonClass =
  "flex size-11 items-center justify-center rounded-full border border-white/20 bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-gold)] focus-visible:ring-offset-2";

export function ScrollControls() {
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  const updateVisibility = useCallback(() => {
    const scrollTop = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    if (maxScroll <= 8) {
      setShowScrollDown(false);
      setShowScrollUp(false);
      return;
    }

    const halfway = maxScroll / 2;
    setShowScrollDown(scrollTop <= halfway);
    setShowScrollUp(scrollTop >= halfway);
  }, []);

  useEffect(() => {
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [updateVisibility]);

  if (!showScrollDown && !showScrollUp) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-2"
      aria-label="Page scroll controls"
    >
      {showScrollUp ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className={cn(controlButtonClass, "animate-in fade-in slide-in-from-bottom-2 duration-200")}
        >
          <ChevronUp className="size-5" aria-hidden />
        </button>
      ) : null}
      {showScrollDown ? (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
          }
          aria-label="Scroll to bottom"
          className={cn(controlButtonClass, "animate-in fade-in slide-in-from-bottom-2 duration-200")}
        >
          <ChevronDown className="size-5" aria-hidden />
        </button>
      ) : null}
    </div>
  );
}
