import { formatPersonInitials } from "@/lib/person-display";
import { cn } from "@/lib/utils";

type PersonAvatarProps = {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "officer" | "muted";
  className?: string;
};

const sizeClasses = {
  sm: "size-9 text-xs",
  md: "size-11 text-sm",
  lg: "size-14 text-base",
  xl: "size-20 text-lg",
};

export function PersonAvatar({
  name,
  size = "md",
  variant = "default",
  className,
}: PersonAvatarProps) {
  const initials = formatPersonInitials(name);

  return (
    <div
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-semibold tracking-tight",
        sizeClasses[size],
        variant === "officer" &&
          "bg-primary text-primary-foreground ring-2 ring-[var(--institutional-gold)]/40 ring-offset-2 ring-offset-card",
        variant === "default" &&
          "bg-primary/10 text-primary ring-1 ring-primary/15",
        variant === "muted" &&
          "border border-dashed border-border bg-muted/50 text-muted-foreground",
        className,
      )}
    >
      {initials}
    </div>
  );
}
