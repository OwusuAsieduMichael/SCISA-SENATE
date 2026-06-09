import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Shield } from "lucide-react";

import { HeroBackgroundSlideshow } from "@/components/home/hero-background-slideshow";
import { buttonVariants } from "@/components/ui/button";
import { upcomingSittings } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const nextSitting = upcomingSittings[0];

  return (
    <section className="relative overflow-hidden text-white">
      <HeroBackgroundSlideshow />
      <div className="gold-accent-line relative z-[1] w-full" />
      <div className="relative z-[1] mx-auto grid max-w-7xl gap-8 px-3 py-10 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-24 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--institutional-gold)] sm:gap-2 sm:px-3 sm:py-1 sm:text-xs sm:tracking-widest">
            <Shield className="size-3 sm:size-3.5" />
            Official Legislative Portal
          </p>
          <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            Senate of the Science Students&apos; Association
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
            Transparent governance, legislative records, and student representation
            for KNUST science students, built for accountability and institutional
            continuity.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            <Link
              href="/bills"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-destructive text-white hover:bg-destructive/90 sm:h-9 sm:px-2.5 sm:text-sm",
              )}
            >
              View Legislation
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "border-white/30 bg-transparent text-white hover:bg-white/10 sm:h-9 sm:px-2.5 sm:text-sm",
              )}
            >
              About the Senate
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:items-end">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full border border-[var(--institutional-gold)]/40 sm:-inset-3" />
            <div className="absolute -inset-4 rounded-full border border-white/10 sm:-inset-6" />
            <Image
              src="/brand/senate-logo.png"
              alt="SCISA Senate crest"
              width={280}
              height={280}
              className="relative size-40 rounded-full bg-white/5 p-1.5 shadow-2xl ring-2 ring-white/10 sm:size-56 sm:p-2 sm:ring-4 lg:size-[280px]"
              priority
            />
          </div>
          {nextSitting ? (
            <div className="w-full max-w-md rounded-lg border border-white/15 bg-white/5 p-3.5 backdrop-blur-sm sm:rounded-xl sm:p-5">
              <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--institutional-gold)] sm:gap-2 sm:text-xs sm:tracking-widest">
                <Calendar className="size-3 sm:size-3.5" />
                Next Sitting
              </p>
              <p className="mt-1.5 text-sm font-semibold text-white sm:mt-2 sm:text-base">
                {nextSitting.title}
              </p>
              <p className="mt-0.5 text-xs text-white/75 sm:mt-1 sm:text-sm">
                {nextSitting.date} · {nextSitting.time} · {nextSitting.venue}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
