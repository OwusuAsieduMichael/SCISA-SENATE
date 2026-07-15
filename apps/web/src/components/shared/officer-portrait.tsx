"use client";

import { PassportPortrait } from "@/components/shared/passport-portrait";
import { PersonAvatar } from "@/components/shared/person-avatar";
import { PortraitLightbox } from "@/components/shared/portrait-lightbox";
import { cn } from "@/lib/utils";

type OfficerPortraitProps = {
  name: string;
  imageSrc?: string;
  subtitle?: string;
  department?: string;
  yearRepresented?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "default" | "officer" | "muted";
  className?: string;
  priority?: boolean;
  /** Tap to open full-size view. Defaults to true for lg and larger. */
  enlargeable?: boolean;
};

export function OfficerPortrait({
  name,
  imageSrc,
  subtitle,
  department,
  yearRepresented,
  size = "md",
  variant = "default",
  className,
  priority = false,
  enlargeable,
}: OfficerPortraitProps) {
  const canEnlarge =
    enlargeable ?? (size === "lg" || size === "xl" || size === "2xl");

  const avatarSize: "sm" | "md" | "lg" | "xl" =
    size === "2xl" || size === "xl" ? "xl" : size;

  const portrait = imageSrc ? (
    <PassportPortrait
      src={imageSrc}
      alt={name}
      size={size}
      priority={priority}
      frameClassName={cn(
        variant === "officer" &&
          "ring-2 ring-[var(--institutional-gold)]/40 ring-offset-2 ring-offset-card",
        variant === "default" && "ring-1 ring-primary/15",
        className,
      )}
    />
  ) : (
    <PersonAvatar
      name={name}
      size={avatarSize}
      variant={variant}
      className={className}
    />
  );

  if (!canEnlarge) return portrait;

  return (
    <PortraitLightbox
      name={name}
      imageSrc={imageSrc}
      subtitle={subtitle}
      department={department}
      yearRepresented={yearRepresented}
      priority={priority}
    >
      {portrait}
    </PortraitLightbox>
  );
}
