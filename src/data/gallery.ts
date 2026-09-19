export type GalleryItem = {
  id: string;
  title: string;
  category: "Site Institucional" | "Cardápio Digital";
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Bulldog — Cardápio Digital",
    category: "Cardápio Digital",
    image: "/images/gallery/bulldog-cardapio.png",
  },
  {
    id: "2",
    title: "Site de advocacia",
    category: "Site Institucional",
    image: "/images/gallery/advocacia-site.png",
  },
  {
    id: "3",
    title: "Site de energia solar",
    category: "Site Institucional",
    image: "/images/gallery/solaris-site.png",
  },
];
