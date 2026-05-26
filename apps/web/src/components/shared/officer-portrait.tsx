import Image from "next/image";

import { PersonAvatar } from "@/components/shared/person-avatar";
import { cn } from "@/lib/utils";

type OfficerPortraitProps = {
  name: string;
  imageSrc?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "default" | "officer" | "muted";
  className?: string;
  priority?: boolean;
};

const pixelSizes = {
  sm: 36,
  md: 44,
  lg: 56,
  xl: 80,
  "2xl": 128,
} as const;

const frameClasses = {
  sm: "size-9",
  md: "size-11",
  lg: "size-14",
  xl: "size-20",
  "2xl": "size-32",
};

export function OfficerPortrait({
  name,
  imageSrc,
  size = "md",
  variant = "default",
  className,
  priority = false,
}: OfficerPortraitProps) {
  if (!imageSrc) {
    return (
      <PersonAvatar
        name={name}
        size={size === "2xl" ? "xl" : size}
        variant={variant}
        className={className}
      />
    );
  }

  const px = pixelSizes[size];

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full",
        frameClasses[size],
        variant === "officer" &&
          "ring-2 ring-[var(--institutional-gold)]/40 ring-offset-2 ring-offset-card",
        variant === "default" && "ring-1 ring-primary/15",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={name}
        width={px}
        height={px}
        priority={priority}
        className="size-full object-cover object-top"
      />
    </div>
  );
}
