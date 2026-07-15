import { GalleryGrid } from "@/components/gallery/gallery-grid";
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
        description="A visual record of Senate sittings, ceremonies, and the life of the House. Tap any image to view it in full."
      />
      <ContentSection>
        <GalleryGrid items={GALLERY_ITEMS} />
      </ContentSection>
    </>
  );
}
