import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { datasheets, datasheetList, datasheetsForFamily } from "@/lib/datasheets";
import { products, brand } from "@/lib/brand";
import { BreadcrumbSchema } from "@/components/Schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return datasheetList.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ds = datasheets[slug];
  if (!ds) return {};
  const family = products.find((p) => p.slug === ds.family);
  const description = `Full technical specifications for ${ds.name} from ${brand.name}, Mumbai. ${
    ds.broadUses ? `Uses: ${ds.broadUses}.` : ""
  } Vegetable origin specialty chemicals since ${brand.established}.`;
  return {
    title: `${ds.name} Specifications & Technical Data`,
    description,
    alternates: { canonical: `/datasheets/${ds.slug}` },
    openGraph: {
      title: `${ds.name} Technical Datasheet | ${brand.name}`,
      description,
      images: family ? [{ url: family.image }] : undefined,
    },
  };
}

function DatasheetJsonLd({ slug }: { slug: string }) {
  const ds = datasheets[slug];
  if (!ds) return null;
  const family = products.find((p) => p.slug === ds.family);
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: ds.name,
    description: ds.broadUses
      ? `${ds.name} for ${ds.broadUses}. Supplied by ${brand.name}, Mumbai.`
      : `${ds.name} supplied by ${brand.name}, Mumbai.`,
    image: family ? `${brand.url}${family.image}` : undefined,
    category: family?.title,
    brand: { "@type": "Brand", name: brand.name },
    manufacturer: { "@type": "Organization", name: brand.name },
    additionalProperty: ds.sections.flatMap((s) =>
      s.rows.slice(0, 20).map((r) => ({
        "@type": "PropertyValue",
        name: r.parameter,
        value: r.value,
      }))
    ),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function DatasheetPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const ds = datasheets[slug];
  if (!ds) notFound();

  const family = products.find((p) => p.slug === ds.family);
  const siblings = datasheetsForFamily(ds.family).filter((d) => d.slug !== ds.slug);

  const highlights = [
    ds.packing && { label: "Packing", value: ds.packing },
    ds.certifications && { label: "Certifications", value: ds.certifications },
    ds.originNotes && { label: "Origin", value: ds.originNotes },
    ds.broadUses && { label: "Broad uses", value: ds.broadUses },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          ...(family
            ? [{ name: family.title, path: `/products/${family.slug}` }]
            : []),
          { name: ds.name, path: `/datasheets/${ds.slug}` },
        ]}
      />
      <DatasheetJsonLd slug={ds.slug} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-alethia-dark pt-28 text-alethia-cream">
        {family && (
          <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={family.image}
              alt=""
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f10]/97 via-[#0f1f10]/85 to-[#0f1f10]/55" />
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0f1f10] to-transparent" />
          </div>
        )}
        <div className="site-container relative z-10 pb-14 pt-8 md:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white/55"
          >
            <Link href="/products" className="transition hover:text-alethia-lime">
              Products
            </Link>
            {family && (
              <>
                <span aria-hidden>/</span>
                <Link
                  href={`/products/${family.slug}`}
                  className="transition hover:text-alethia-lime"
                >
                  {family.title}
                </Link>
              </>
            )}
            <span aria-hidden>/</span>
            <span className="text-alethia-lime">{ds.name}</span>
          </nav>
          <p className="eyebrow mb-5 text-alethia-lime">Technical datasheet</p>
          <h1 className="display-xl max-w-4xl">{ds.name}</h1>
          {ds.broadUses && (
            <p className="body-lg mt-6 max-w-2xl text-white/70">
              Used across {ds.broadUses.toLowerCase()}. Full specifications
              documented per lot, supplied from Mumbai since {brand.established}.
            </p>
          )}
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" variant="filled">
              Request a quote
            </Button>
            <a
              href={encodeURI(ds.pdf)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-white transition hover:border-alethia-lime/60 hover:text-alethia-lime"
            >
              PDF version
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      {highlights.length > 0 && (
        <section className="section-dark border-t border-white/10 py-10 md:py-12">
          <div className="site-container">
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-[#122513] p-5 md:p-6">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-alethia-lime">
                    {h.label}
                  </dt>
                  <dd className="mt-2 text-[13.5px] leading-relaxed text-white/80">
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Specification tables */}
      <section id="content" className="section-light py-14 md:py-20">
        <div className="site-container">
          <Reveal>
            <span className="label-pill">Specifications</span>
            <h2 className="display-md mt-4 text-alethia-dark">
              Complete technical data
            </h2>
            <p className="mt-3 max-w-xl text-[15px] text-alethia-dark/60">
              Every parameter below is reproduced from the official {ds.name}{" "}
              datasheet. COA, MSDS, and regulatory documents are available on
              request.
            </p>
          </Reveal>

          <div className="mt-10 space-y-10">
            {ds.sections.map((section, si) => (
              <Reveal key={section.heading + si}>
                <div className="overflow-hidden rounded-2xl border border-alethia-dark/10 bg-white shadow-sm">
                  <div className="flex items-center justify-between gap-4 border-b border-alethia-dark/10 bg-[#eef4e6] px-5 py-4 md:px-7">
                    <h3 className="text-[15px] font-semibold text-alethia-dark md:text-[17px]">
                      {section.heading}
                    </h3>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-[#5c8a3f] sm:block">
                      {section.rows.length} parameters
                    </span>
                  </div>
                  {section.paragraphs.length > 0 && (
                    <div className="space-y-3 border-b border-alethia-dark/5 px-5 py-4 md:px-7">
                      {section.paragraphs.map((p, pi) => (
                        <p
                          key={pi}
                          className="text-[14px] leading-relaxed text-alethia-dark/70"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                  {section.rows.length > 0 && (
                    <table className="w-full border-collapse text-left">
                      <caption className="sr-only">
                        {section.heading} for {ds.name}
                      </caption>
                      <thead>
                        <tr className="border-b border-alethia-dark/10">
                          <th
                            scope="col"
                            className="w-[38%] px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-alethia-dark/50 md:px-7"
                          >
                            Parameter
                          </th>
                          <th
                            scope="col"
                            className="px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-alethia-dark/50 md:px-7"
                          >
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, ri) => (
                          <tr
                            key={row.parameter + ri}
                            className="border-b border-alethia-dark/5 align-top transition last:border-0 hover:bg-[#f7faf2]"
                          >
                            <th
                              scope="row"
                              className="px-5 py-3.5 text-[13.5px] font-medium text-alethia-dark md:px-7 md:text-[14px]"
                            >
                              {row.parameter}
                            </th>
                            <td className="px-5 py-3.5 text-[13.5px] leading-relaxed text-alethia-dark/75 md:px-7 md:text-[14px]">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related datasheets */}
      {siblings.length > 0 && family && (
        <section className="section-dark py-14 md:py-20">
          <div className="site-container">
            <Reveal>
              <span className="label-pill">Related grades</span>
              <h2 className="display-md mt-4 text-white">
                More {family.title.toLowerCase()} datasheets
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                  <Link
                    href={`/datasheets/${s.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:-translate-y-0.5 hover:border-alethia-lime/40"
                  >
                    <span className="text-[14px] font-medium text-white">
                      {s.name}
                    </span>
                    <span
                      className="font-mono text-[12px] text-white/40 transition group-hover:text-alethia-lime"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-light py-14 md:py-20">
        <div className="site-container">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-alethia-dark/10 bg-white p-7 shadow-sm md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="text-[22px] font-semibold text-alethia-dark md:text-[26px]">
                Need {ds.name} in bulk?
              </h2>
              <p className="mt-2 max-w-xl text-[14.5px] text-alethia-dark/60">
                Talk to our Mumbai team for pricing, samples, COA, and delivery
                schedules across India and export markets.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="filled">
                Contact sales
              </Button>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-alethia-dark/20 px-6 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-alethia-dark transition hover:border-alethia-dark/40"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
