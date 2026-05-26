import { cn } from "@/lib/utils";

export function ContentSection({
  children,
  className,
  alt = false,
}: {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section className={cn(alt ? "bg-muted/50" : "bg-background", className)}>
      <div className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-14 lg:px-8">
        {children}
      </div>
    </section>
  );
}
