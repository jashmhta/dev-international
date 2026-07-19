import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/brand";
import { ProductPage } from "@/components/ProductPage";
import { ProductSchema, BreadcrumbSchema } from "@/components/Schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product" };
  return {
    title: product.title,
    description: product.blurb,
    alternates: { canonical: product.href },
    openGraph: {
      title: `${product.title} | ${products[0] ? "Dev International" : ""}`,
      description: product.blurb,
      images: [{ url: product.image, alt: product.title }],
    },
  };
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  return (
    <>
      <ProductSchema slug={slug} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.title, path: product.href },
        ]}
      />
      <ProductPage product={product} />
    </>
  );
}
