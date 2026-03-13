import { categories, categoryKeys } from "@/data/gallery";
import { notFound } from "next/navigation";
import GalleryClient from "./GalleryClient";

export function generateStaticParams() {
  return categoryKeys.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = categories[category];
  if (!data) return { title: "Page non trouvée" };

  return {
    title: `${data.title} — AS Sellerie`,
    description: data.description,
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
