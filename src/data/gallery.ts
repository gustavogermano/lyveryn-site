export type GalleryItem = {
  id: string;
  title: string;
  category: "Site Institucional" | "Cardápio Digital";
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "SeuSabor — Cardápio Digital",
    category: "Cardápio Digital",
    image: "/images/gallery/seusabor.jpg",
  },
  {
    id: "2",
    title: "Projeto Institucional",
    category: "Site Institucional",
    image: "/images/gallery/institucional-1.jpg",
  },
  {
    id: "3",
    title: "Projeto Institucional",
    category: "Site Institucional",
    image: "/images/gallery/institucional-2.jpg",
  },
];
