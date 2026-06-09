import Image from "next/image";

import { cn } from "@/lib/utils";

export const passportSizes = {
  sm: { class: "w-9", px: 36 },
  md: { class: "w-11", px: 44 },
  lg: { class: "w-14", px: 56 },
  xl: { class: "w-20", px: 80 },
  "2xl": { class: "w-32", px: 128 },
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

/** ICAO passport ratio (35×45 mm) with zoomed face framing. */
export function PassportPortrait({
  src,
  alt,
  size = "md",
  className,
  frameClassName,
  priority = false,
}: PassportPortraitProps) {
  const { class: widthClass, px } = passportSizes[size];
  const height = Math.round(px * (45 / 35));

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-md aspect-[35/45]",
        widthClass,
        frameClassName,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={px}
        height={height}
        priority={priority}
        className={cn(passportImageClass, className)}
        style={passportImageStyle}
      />
    </div>
  );
}
