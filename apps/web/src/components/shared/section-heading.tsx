import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 sm:mb-8", className)}>
      <h2 className="text-xl font-bold text-primary sm:text-2xl lg:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground sm:mt-2 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
