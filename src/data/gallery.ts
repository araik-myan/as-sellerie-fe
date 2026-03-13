export interface GalleryItem {
  title: string;
  imagePath: string;
  isVideo: boolean;
}

export interface CategoryData {
  title: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  items: GalleryItem[];
}

export const categories: Record<string, CategoryData> = {
  auto: {
    title: "Automobile",
    subtitle: "Sellerie automobile sur mesure",
    description:
      "De la restauration complète à la personnalisation, nous redonnons vie à vos intérieurs automobiles avec des matériaux nobles et un savoir-faire artisanal.",
    bannerImage: "/images/sections/auto.webp",
    items: [
      { title: "4x4", imagePath: "/sellerie/auto/0.jpg", isVideo: false },
      { title: "4x4", imagePath: "/sellerie/auto/1.jpg", isVideo: false },
      { title: "Ford", imagePath: "/sellerie/auto/2.jpg", isVideo: false },
      { title: "Dodge", imagePath: "/sellerie/auto/3.jpg", isVideo: false },
      { title: "Dodge", imagePath: "/sellerie/auto/4.jpg", isVideo: false },
      { title: "Dodge", imagePath: "/sellerie/auto/5.jpg", isVideo: false },
      { title: "Dodge", imagePath: "/sellerie/auto/6.jpg", isVideo: false },
      { title: "Mercedes", imagePath: "/sellerie/auto/7.jpg", isVideo: false },
      { title: "BMW", imagePath: "/sellerie/auto/8.jpg", isVideo: false },
      { title: "Mercedes SL 250", imagePath: "Hm0IeUy2icY", isVideo: true },
      { title: "Dodge", imagePath: "EyqfBVZMCfo", isVideo: true },
    ],
  },
  moto: {
    title: "Moto",
    subtitle: "Selles & accessoires sur mesure",
    description:
      "Création et rénovation de selles moto, du custom Harley-Davidson aux sportives, avec un souci du détail et du confort.",
    bannerImage: "/images/sections/moto.webp",
    items: [
      { title: "Buell", imagePath: "/sellerie/moto/0.jpg", isVideo: false },
      { title: "Buell", imagePath: "/sellerie/moto/1.jpg", isVideo: false },
      { title: "Buell", imagePath: "/sellerie/moto/2.jpg", isVideo: false },
      { title: "PowerParts", imagePath: "/sellerie/moto/3.jpg", isVideo: false },
      { title: "Harley Davidson", imagePath: "/sellerie/moto/4.jpg", isVideo: false },
      { title: "Harley Davidson", imagePath: "/sellerie/moto/5.jpg", isVideo: false },
      { title: "Harley Davidson", imagePath: "/sellerie/moto/6.jpg", isVideo: false },
      { title: "Jack Daniel", imagePath: "/sellerie/moto/7.jpg", isVideo: false },
      { title: "Selle moto", imagePath: "/sellerie/moto/8.jpg", isVideo: false },
      { title: "Selle moto", imagePath: "/sellerie/moto/9.jpg", isVideo: false },
      { title: "Selle moto", imagePath: "/sellerie/moto/10.jpg", isVideo: false },
      { title: "Honda", imagePath: "/sellerie/moto/11.jpg", isVideo: false },
      { title: "Honda", imagePath: "/sellerie/moto/12.jpg", isVideo: false },
      { title: "Honda", imagePath: "/sellerie/moto/13.jpg", isVideo: false },
      { title: "Honda", imagePath: "/sellerie/moto/14.jpg", isVideo: false },
      { title: "Honda", imagePath: "/sellerie/moto/15.jpg", isVideo: false },
      { title: "Honda", imagePath: "/sellerie/moto/16.jpg", isVideo: false },
      { title: "Honda", imagePath: "/sellerie/moto/17.jpg", isVideo: false },
      { title: "Honda", imagePath: "/sellerie/moto/18.jpg", isVideo: false },
      { title: "Honda", imagePath: "/sellerie/moto/19.jpg", isVideo: false },
    ],
  },
  divers: {
    title: "Divers",
    subtitle: "Créations & rénovations diverses",
    description:
      "Fauteuils, sièges, sacoches et bien plus : notre savoir-faire s'adapte à tous vos projets de sellerie et tapisserie.",
    bannerImage: "/images/sections/divers.webp",
    items: [
      { title: "Fauteuil", imagePath: "/sellerie/divers/0.jpg", isVideo: false },
      { title: "Fauteuil", imagePath: "/sellerie/divers/1.jpg", isVideo: false },
      { title: "Siège", imagePath: "/sellerie/divers/2.jpg", isVideo: false },
      { title: "Siège", imagePath: "/sellerie/divers/3.jpg", isVideo: false },
      { title: "Sacoche", imagePath: "/sellerie/divers/4.jpg", isVideo: false },
      { title: "Sacoche", imagePath: "/sellerie/divers/5.jpg", isVideo: false },
      { title: "Sacoche", imagePath: "/sellerie/divers/6.jpg", isVideo: false },
      { title: "Sacoche", imagePath: "/sellerie/divers/7.jpg", isVideo: false },
      { title: "Sacoche", imagePath: "/sellerie/divers/8.jpg", isVideo: false },
    ],
  },
  broderie: {
    title: "Broderie",
    subtitle: "Personnalisation & broderie sur mesure",
    description:
      "Broderie personnalisée sur volants, selles, blousons et accessoires. Un art minutieux pour sublimer vos pièces.",
    bannerImage: "/images/sections/broderie.webp",
    items: [
      { title: "Broderie volant", imagePath: "/sellerie/broderie/0.jpg", isVideo: false },
      { title: "Broderie volant", imagePath: "/sellerie/broderie/1.jpg", isVideo: false },
      { title: "Selle cheval", imagePath: "/sellerie/broderie/2.jpg", isVideo: false },
      { title: "Blouson", imagePath: "/sellerie/broderie/3.jpg", isVideo: false },
      { title: "Broderie BMW", imagePath: "iHtth-YpJRU", isVideo: true },
    ],
  },
};

export const categoryKeys = ["auto", "moto", "divers", "broderie"] as const;
