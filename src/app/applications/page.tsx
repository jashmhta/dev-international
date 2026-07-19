import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/lib/brand";
import { sectors, applicationsBySector } from "@/lib/applications";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Applications & Industry Sectors",
  description: `32 industry applications served by ${brand.name} — cosmetics, pharma, paints, plastics, food, construction, water treatment, and more. Specialty chemicals for every sector.`,
  alternates: { canonical: "/applications" },
};

export default function ApplicationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Applications", path: "/applications" },
        ]}
      />
      <PageHero
        eyebrow="Applications · Sectors"
        title="Where Our Chemicals Work"
        subtitle="From skin care to steel — 32 applications across 6 industry sectors, supplied with specialty chemicals from one roof in Mumbai."
        bgImage="/images/brand/banner1.webp"
        showScroll
      />
      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container">
          {sectors.map((sector) => {
            const apps = applicationsBySector(sector);
            if (apps.length === 0) return null;
            return (
              <div key={sector} className="mb-16 last:mb-0">
                <Reveal>
                  <span className="label-pill">{sector}</span>
                  <h2 className="display-md mt-4 max-w-2xl text-alethia-dark">
                    {sector}
                  </h2>
                </Reveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {apps.map((app, i) => (
                    <Reveal key={app.slug} delay={(i % 4) * 0.06}>
                      <Link
                        href={`/applications/${app.slug}`}
                        className="group block overflow-hidden rounded-2xl border border-alethia-dark/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Img
                            src={app.image}
                            alt={`${app.title} — chemicals by ${brand.name}`}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <p className="font-medium text-alethia-dark">
                            {app.title}
                          </p>
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-alethia-dark/55">
                            {app.description}
                          </p>
                          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#5c8a3f]">
                            View chemicals →
                          </p>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-14 rounded-[28px] bg-alethia-dark p-8 text-white md:p-12">
            <h2 className="display-md max-w-2xl">
              Need a chemical for your process?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Tell us your industry and application — our team will recommend
              grades and arrange competitive supply from Mumbai.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="filled">
                Contact Us
              </Button>
              <Link
                href="/products"
                className="inline-flex items-center font-mono text-[12px] uppercase tracking-[0.1em] text-[#c6f19d]"
              >
                Browse products →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
