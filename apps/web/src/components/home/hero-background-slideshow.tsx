"use client";

import { useEffect, useState } from "react";

import {
  HERO_BACKGROUND_SLIDES,
  HERO_SLIDE_INTERVAL_MS,
} from "@/lib/hero-backgrounds";
import { cn } from "@/lib/utils";

export function HeroBackgroundSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (HERO_BACKGROUND_SLIDES.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_BACKGROUND_SLIDES.length);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden>
      {HERO_BACKGROUND_SLIDES.map((src, index) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1.4s] ease-in-out",
            index === activeIndex ? "opacity-100" : "opacity-0",
          )}
          style={{ backgroundImage: `url("${src}")` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--senate-blue)]/75 via-[var(--senate-blue)]/45 to-[#0a1738]/65" />
    </div>
  );
}
