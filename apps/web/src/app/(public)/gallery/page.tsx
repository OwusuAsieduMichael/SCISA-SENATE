import Image from "next/image";

import { ContentSection } from "@/components/shared/content-section";
import { PageHeader } from "@/components/shared/page-header";
import { GALLERY_ITEMS } from "@/lib/gallery-data";

export const metadata = {
  title: "Gallery",
  description:
    "Official SCISA Senate gallery: sittings, ceremonies, and institutional moments from the House.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="A visual record of Senate sittings, ceremonies, and the life of the House."
      />
      <ContentSection>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <li key={item.id}>
              <figure className="group overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
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
      </ContentSection>
    </>
  );
}
