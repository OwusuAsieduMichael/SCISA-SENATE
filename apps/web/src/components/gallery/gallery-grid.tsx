"use client";

import Image from "next/image";

import { PressImageLightbox } from "@/components/news/press-image-lightbox";
import type { GalleryItem } from "@/lib/gallery-data";

type GalleryGridProps = {
  items: readonly GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {items.map((item) => (
        <li key={item.id}>
          <figure className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
            <PressImageLightbox
              title={item.title}
              imageSrc={item.imageSrc}
              imageAlt={item.title}
              caption={item.caption}
              actionLabel="View image"
              size="xl"
              className="rounded-none"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </PressImageLightbox>
            <figcaption className="space-y-1 px-4 py-3.5">
              <p className="font-heading text-sm font-semibold text-primary">
                {item.title}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}