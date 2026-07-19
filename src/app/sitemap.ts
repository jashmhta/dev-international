import type { MetadataRoute } from "next";
import { brand, products } from "@/lib/brand";
import { applicationsData } from "@/lib/applications";
import { datasheetList } from "@/lib/datasheets";

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
  const applicationRoutes = applicationsData.map(
    (a) => `/applications/${a.slug}`
  );
  const datasheetRoutes = datasheetList.map((d) => `/datasheets/${d.slug}`);

  return [
    ...staticRoutes,
    ...productRoutes,
    ...applicationRoutes,
    ...datasheetRoutes,
  ].map(
    (path) => ({
      url: `${base}${path === "" ? "/" : path}`,
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === ""
          ? 1
          : path.startsWith("/products/")
            ? 0.8
            : path.startsWith("/applications/") ||
                path.startsWith("/datasheets/")
              ? 0.7
              : 0.6,
    })
  );
}
