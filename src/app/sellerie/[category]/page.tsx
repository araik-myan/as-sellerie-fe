import { categories, categoryKeys } from "@/data/gallery";
import { notFound } from "next/navigation";
import GalleryClient from "./GalleryClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return categoryKeys.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = categories[category];
  if (!data) return { title: "Page non trouvée" };

  const title = `${data.title} — AS Sellerie | Sellier Garnisseur Nancy`;
  const description = data.description;
  const url = `https://www.as-sellerie.fr/sellerie/${category}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "AS Sellerie",
      type: "website",
      locale: "fr_FR",
      images: [
        {
          url: `https://www.as-sellerie.fr${data.bannerImage}`,
          width: 1200,
          height: 630,
          alt: `${data.title} — AS Sellerie`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.as-sellerie.fr${data.bannerImage}`],
    },
  };
}

export default async function SelleriePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = categories[category];

  if (!data) {
    notFound();
  }

  return <GalleryClient category={category} data={data} />;
}
