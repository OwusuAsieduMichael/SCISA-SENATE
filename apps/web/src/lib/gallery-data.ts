export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  imageSrc: string;
};

/** Curated Senate gallery images (expand as more official photos are added). */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Chamber atmosphere",
    caption: "The House in session under the dignity of the Chair.",
    imageSrc: "/Background IMAGES/BACK1.jpg",
  },
  {
    id: "g2",
    title: "Legislative assembly",
    caption: "Senators gathered for deliberation and recorded business.",
    imageSrc: "/Background IMAGES/BACK2.jpg",
  },
  {
    id: "g3",
    title: "Institutional setting",
    caption: "Formal surroundings of SCISA Senate proceedings.",
    imageSrc: "/Background IMAGES/BACK3.jpg",
  },
  {
    id: "g4",
    title: "Science student governance",
    caption: "Representation of the College of Science in the Chamber.",
    imageSrc: "/Background IMAGES/BACK4.jpg",
  },
  {
    id: "g5",
    title: "Know Your Senator",
    caption: "Communications Desk feature: Computer Science representation.",
    imageSrc: "/news/know-your-senator-computer-science.png",
  },
  {
    id: "g6",
    title: "Know Your Senator",
    caption: "Communications Desk feature: Statistics representation.",
    imageSrc: "/news/know-your-senator-statistics.png",
  },
];
