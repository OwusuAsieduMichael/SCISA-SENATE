import { cn } from "@/lib/utils";

type OfficialNoticeProps = {
  category: string;
  title: string;
  date: string;
  excerpt?: string;
  className?: string;
};

function formatNoticeDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function OfficialNotice({
  category,
  title,
  date,
  excerpt,
  className,
}: OfficialNoticeProps) {
  return (
    <article
      className={cn(
        "border-l-[3px] border-destructive py-1 pl-5 sm:pl-6",
        className,
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-destructive sm:text-xs">
        {category}
      </p>
      <h3 className="mt-1.5 font-heading text-lg font-bold tracking-tight text-primary sm:text-xl">
        {title}
      </h3>
      <time
        dateTime={date}
        className="mt-1 block text-sm text-muted-foreground"
      >
        {formatNoticeDate(date)}
      </time>
      {excerpt ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {excerpt}
        </p>
      ) : null}
    </article>
  );
}
