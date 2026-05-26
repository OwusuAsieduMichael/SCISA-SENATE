import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Shield } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { upcomingSittings } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const nextSitting = upcomingSittings[0];

  return (
    <section className="institutional-gradient relative overflow-hidden text-white">
      <div className="gold-accent-line w-full" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--institutional-gold)]">
            <Shield className="size-3.5" />
            Official Legislative Portal
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Senate of the Science Students&apos; Association
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Transparent governance, legislative records, and student representation
            for KNUST science students, built for accountability and institutional
            continuity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/bills"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-destructive text-white hover:bg-destructive/90",
              )}
            >
              View Legislation
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/30 bg-transparent text-white hover:bg-white/10",
              )}
            >
              About the Senate
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border border-[var(--institutional-gold)]/40" />
            <div className="absolute -inset-6 rounded-full border border-white/10" />
            <Image
              src="/brand/senate-logo.png"
              alt="SCISA Senate crest"
              width={280}
              height={280}
              className="relative rounded-full bg-white/5 p-2 shadow-2xl ring-4 ring-white/10"
              priority
            />
          </div>
          {nextSitting ? (
            <div className="w-full max-w-md rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--institutional-gold)]">
                <Calendar className="size-3.5" />
                Next Sitting
              </p>
              <p className="mt-2 font-semibold text-white">{nextSitting.title}</p>
              <p className="mt-1 text-sm text-white/75">
                {nextSitting.date} · {nextSitting.time} · {nextSitting.venue}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
