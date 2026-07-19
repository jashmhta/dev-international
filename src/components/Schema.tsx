import { brand, products, faqs } from "@/lib/brand";

/** Organization + WebSite schema, rendered on every page via layout. */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: brand.url,
    logo: `${brand.url}${brand.logo}`,
    description: brand.description,
    foundingDate: brand.established,
    email: brand.email.sales,
    telephone: brand.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${brand.address.line1}, ${brand.address.line2}`,
      addressLocality: "Mumbai",
      postalCode: "400 092",
      addressCountry: "IN",
    },
    sameAs: [brand.whatsapp],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: brand.phones[0],
      email: brand.email.sales,
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: brand.url,
    publisher: { "@type": "Organization", name: brand.name },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ProductSchema({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.blurb,
    image: `${brand.url}${product.image}`,
    brand: { "@type": "Brand", name: brand.name },
    category: "Specialty Chemicals",
    manufacturer: { "@type": "Organization", name: brand.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        valueAddedTaxIncluded: false,
      },
      seller: { "@type": "Organization", name: brand.name },
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${brand.url}${item.path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
