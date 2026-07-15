"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CLOSING_STATEMENT } from "@/lib/about-content";

export function ClosingStatement() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Senate closing statement"
      className="relative overflow-hidden institutional-gradient text-white"
    >
      <div className="gold-accent-line w-full" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(201,162,39,0.25), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        {reduce ? (
          <blockquote>
            <p className="font-heading text-xl font-medium leading-relaxed tracking-tight text-white sm:text-2xl lg:text-3xl lg:leading-snug">
              “{CLOSING_STATEMENT}”
            </p>
          </blockquote>
        ) : (
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-heading text-xl font-medium leading-relaxed tracking-tight text-white sm:text-2xl lg:text-3xl lg:leading-snug">
              “{CLOSING_STATEMENT}”
            </p>
          </motion.blockquote>
        )}
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--institutional-gold)]">
          SCISA Senate · KNUST
        </p>
      </div>
    </section>
  );
}
