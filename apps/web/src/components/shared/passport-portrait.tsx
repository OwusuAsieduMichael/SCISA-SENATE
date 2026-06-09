import Image from "next/image";

import { cn } from "@/lib/utils";

export const passportSizes = {
  sm: { class: "size-9", px: 36 },
  md: { class: "size-11", px: 44 },
  lg: { class: "size-14", px: 56 },
  xl: { class: "size-20", px: 80 },
  "2xl": { class: "size-32", px: 128 },
} as const;

export type PassportSize = keyof typeof passportSizes;

/** Face-forward crop tuned for varied source photos (group shots, full-body, etc.). */
export const passportImageClass =
  "size-full object-cover object-[50%_18%] scale-[1.45]";

export const passportImageStyle = { transformOrigin: "50% 22%" } as const;

type PassportPortraitProps = {
  src: string;
  alt: string;
  size?: PassportSize;
  className?: string;
  frameClassName?: string;
  priority?: boolean;
};

/** Circular portrait with zoomed face framing for varied source photos. */
export function PassportPortrait({
  src,
  alt,
  size = "md",
  className,
  frameClassName,
  priority = false,
}: PassportPortraitProps) {
  const { class: frameClass, px } = passportSizes[size];

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full",
        frameClass,
        frameClassName,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={px}
        height={px}
        priority={priority}
        className={cn(passportImageClass, className)}
        style={passportImageStyle}
      />
    </div>
  );
}
