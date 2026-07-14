import Image from "next/image";

import { PressImageLightbox } from "@/components/news/press-image-lightbox";
import {
  formatPressDate,
  type PressBriefing as PressBriefingType,
} from "@/lib/news-data";
import { cn } from "@/lib/utils";

type PressBriefingProps = {
  briefing: PressBriefingType;
  priority?: boolean;
  className?: string;
};

export function PressBriefing({
  briefing,
  priority = false,
  className,
}: PressBriefingProps) {
  const senatorLine = briefing.senators.join(" · ");

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden border border-border bg-background",
        className,
      )}
    >
      <PressImageLightbox
        title={briefing.title}
        imageSrc={briefing.imageSrc}
        imageAlt={briefing.imageAlt}
        caption={`${briefing.series} · ${briefing.constituency}`}
        priority={priority}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#071433]">
          <Image
            src={briefing.imageSrc}
            alt={briefing.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </div>
      </PressImageLightbox>

      <div className="flex flex-1 flex-col border-t border-border px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-destructive sm:text-xs">
          <span>{briefing.series}</span>
          <span className="font-normal text-border" aria-hidden>
            |
          </span>
          <span className="text-muted-foreground">{briefing.constituency}</span>
        </div>

        <h3 className="mt-3 font-heading text-xl font-bold tracking-tight text-primary sm:text-2xl">
          {briefing.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {briefing.summary}
        </p>

        <dl className="mt-auto space-y-2 border-t border-border pt-4 text-sm">
          <div className="flex flex-col gap-0.5">
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-foreground">
              Senators
            </dt>
            <dd className="text-muted-foreground">{senatorLine}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">Issued </span>
              <time dateTime={briefing.date}>
                {formatPressDate(briefing.date)}
              </time>
            </div>
            <div>
              <span className="font-semibold text-foreground">Desk </span>
              Senate Communications
            </div>
          </div>
        </dl>
      </div>
    </article>
  );
}
