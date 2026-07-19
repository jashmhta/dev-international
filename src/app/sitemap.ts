import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/applications",
    "/contact",
    "/faq",
    "/leadership",
    "/logistics",
    "/process",
    "/quality",
    "/sustainability",
    "/products",
    "/privacy-policy",
    "/terms-of-use",
  ];

  const productRoutes = products.map((p) => p.href);

  return [...staticRoutes, ...productRoutes].map((path) => ({
    url: `${base}${path === "" ? "/" : path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products/") ? 0.8 : 0.6,
  }));
}

import { products } from "@/lib/brand";
