import { PAGE_HEADER_BACKGROUND } from "@/lib/page-backgrounds";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden text-white", className)}>
      <div
        className="absolute inset-0 bg-[#0a1738] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${PAGE_HEADER_BACKGROUND}")` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[var(--senate-blue)]/75 via-[var(--senate-blue)]/45 to-[#0a1738]/65"
        aria-hidden
      />
      <div className="relative">
        <div className="gold-accent-line w-full" />
        <div className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--institutional-gold)] sm:text-xs sm:tracking-[0.2em]">
            SCISA Senate
          </p>
          <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-white sm:mt-2 sm:text-3xl lg:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
