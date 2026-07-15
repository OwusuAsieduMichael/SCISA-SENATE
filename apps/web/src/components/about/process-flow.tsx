"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/about/reveal";
import { cn } from "@/lib/utils";

export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessFlowProps = {
  steps: readonly ProcessStep[];
  className?: string;
};

export function ProcessFlow({ steps, className }: ProcessFlowProps) {
  return (
    <Stagger
      role="list"
      aria-label="Process stages"
      className={cn(
        "flex w-full flex-col gap-0 md:flex-row md:flex-wrap md:items-stretch md:justify-between md:gap-y-8 lg:flex-nowrap",
        className,
      )}
      stagger={0.07}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <StaggerItem
            key={step.title}
            className="relative flex flex-1 flex-col md:min-w-[8.5rem] md:max-w-[10.5rem] lg:min-w-0 lg:max-w-none"
          >
            <div className="group flex flex-col items-start md:items-center md:text-center">
              <div className="flex w-full items-center gap-3 md:flex-col md:gap-3">
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--senate-blue)] text-sm font-semibold text-white shadow-sm transition-shadow duration-300 group-hover:shadow-md",
                    "md:size-11",
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1 md:flex-none">
                  <h3 className="font-heading text-base font-semibold text-primary md:text-[0.95rem] lg:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:mt-1.5">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {!isLast ? (
              <>
                <div
                  className="my-3 ml-5 flex h-6 items-center text-[var(--institutional-gold)] md:hidden"
                  aria-hidden
                >
                  <ArrowDown className="size-4" strokeWidth={1.75} />
                </div>
                <div
                  className="pointer-events-none absolute top-5 right-0 hidden translate-x-1/2 text-[var(--institutional-gold)] md:block lg:right-[-0.35rem]"
                  aria-hidden
                >
                  <ArrowRight className="size-4" strokeWidth={1.75} />
                </div>
              </>
            ) : null}
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
