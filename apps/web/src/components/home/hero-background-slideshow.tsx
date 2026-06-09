"use client";

import { useEffect, useState } from "react";

import {
  HERO_BACKGROUND_SLIDES,
  HERO_SLIDE_INTERVAL_MS,
  HERO_SLIDE_TRANSITION_MS,
} from "@/lib/hero-backgrounds";

const slides = [...HERO_BACKGROUND_SLIDES];
const loopSlides =
  slides.length > 1 ? [...slides, slides[0]!] : slides;

export function HeroBackgroundSlideshow() {
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const slideCount = loopSlides.length;

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setTransitionEnabled(true);
      setIndex((current) => current + 1);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    if (index !== slideCount - 1) return;

    const timer = window.setTimeout(() => {
      setTransitionEnabled(false);
      setIndex(0);
    }, HERO_SLIDE_TRANSITION_MS);

    return () => window.clearTimeout(timer);
  }, [index, slideCount]);

  const translatePercent =
    slideCount > 0 ? (index / slideCount) * 100 : 0;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="flex h-full ease-in-out"
        style={{
          width: `${slideCount * 100}%`,
          transform: `translateX(-${translatePercent}%)`,
          transition: transitionEnabled
            ? `transform ${HERO_SLIDE_TRANSITION_MS}ms ease-in-out`
            : "none",
        }}
      >
        {loopSlides.map((src, slideIndex) => (
          <div
            key={`${src}-${slideIndex}`}
            className="h-full shrink-0 bg-cover bg-center bg-no-repeat"
            style={{
              width: `${100 / slideCount}%`,
              backgroundImage: `url("${src}")`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--senate-blue)]/75 via-[var(--senate-blue)]/45 to-[#0a1738]/65" />
    </div>
  );
}
