"use client";

import { PassportPortrait } from "@/components/shared/passport-portrait";
import { PersonAvatar } from "@/components/shared/person-avatar";
import { PortraitLightbox } from "@/components/shared/portrait-lightbox";
import { cn } from "@/lib/utils";

type OfficerPortraitProps = {
  name: string;
  imageSrc?: string;
  subtitle?: string;
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
  size = "md",
  variant = "default",
  className,
  priority = false,
  enlargeable,
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

  const canEnlarge =
    enlargeable ?? (size === "lg" || size === "xl" || size === "2xl");

  const portrait = (
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
  );

  if (!canEnlarge) return portrait;

  return (
    <PortraitLightbox
      name={name}
      imageSrc={imageSrc}
      subtitle={subtitle}
      priority={priority}
    >
      {portrait}
    </PortraitLightbox>
  );
}
