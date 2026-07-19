import Link from "next/link";
import { PageHero } from "./PageHero";
import { Button } from "./ui/Button";
import { Img } from "./ui/Img";
import { Reveal } from "./ui/Reveal";
import type { Product } from "@/lib/brand";
import { products, brand } from "@/lib/brand";
import { getProductDetail } from "@/lib/productDetails";
import { applicationsData } from "@/lib/applications";
import { datasheetsForFamily } from "@/lib/datasheets";

export function ProductPage({ product }: { product: Product }) {
  const detail = getProductDetail(product.slug);
  const familySheets = datasheetsForFamily(product.slug);
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const relatedApps = detail
    ? applicationsData.filter((a) => detail.applications.includes(a.slug))
    : [];

  return (
    <>
      <PageHero
        eyebrow={`Products · ${product.short}`}
        title={product.title}
        subtitle={product.blurb}
        bgImage={product.image}
        showScroll
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="filled">
            Request Quote
          </Button>
          <Button href="/products">All Products</Button>
        </div>
      </PageHero>

      {/* Overview / analysis */}
      {detail && (
        <section id="content" className="section-light py-14 md:py-24">
          <div className="site-container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="label-pill">Overview</span>
                <h2 className="display-md mt-4 text-alethia-dark">
                  {product.title}: supply, grades &amp; analysis
                </h2>
              </Reveal>
              <div className="mt-6 space-y-4">
                {detail.overview.map((para, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <p className="text-[1rem] leading-relaxed text-alethia-dark/70 md:text-[1.05rem]">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {detail.specs && (
                <Reveal delay={0.1}>
                  <div className="rounded-[24px] border border-alethia-dark/10 bg-white p-6 shadow-sm md:p-7">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-alethia-dark/45">
                      At a glance
                    </h3>
                    <dl className="mt-4 divide-y divide-alethia-dark/8">
                      {detail.specs.map((s) => (
                        <div key={s.label} className="flex items-start justify-between gap-4 py-3">
                          <dt className="text-[13px] text-alethia-dark/55">{s.label}</dt>
                          <dd className="text-right text-[13px] font-medium text-alethia-dark">
                            {s.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>
              )}
              <Reveal delay={0.15}>
                <div className="overflow-hidden rounded-[24px]">
                  <Img
                    src={product.image}
                    alt={`${product.title}, ${brand.name}`}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Product range */}
      <section
        id={detail ? undefined : "content"}
        className="border-t border-alethia-dark/8 bg-[#f7f6f3] py-14 md:py-20"
      >
        <div className="site-container">
          <Reveal>
            <span className="label-pill">Product Range</span>
            <h2 className="display-md mt-4 max-w-3xl text-alethia-dark">
              {product.items.length}+ items available under {product.title.toLowerCase()}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] text-alethia-dark/60">
              Enquire for grades, packaging, and bulk supply from our Mumbai
              office and Bhiwandi warehouse.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {product.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-alethia-dark/10 bg-white px-3.5 py-2.5 text-[13px] text-alethia-dark/80 transition hover:border-[#5c8a3f]/40 md:px-4 md:py-3 md:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" variant="filled">
              Contact Sales
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
      </section>

      {/* Technical datasheets */}
      {familySheets.length > 0 && (
        <section className="section-light py-14 md:py-20">
          <div className="site-container">
            <Reveal>
              <span className="label-pill">Documentation</span>
              <h2 className="display-md mt-4 text-alethia-dark">
                Technical datasheets
              </h2>
              <p className="mt-3 max-w-xl text-[15px] text-alethia-dark/60">
                Read full specifications for every grade directly on the page.
                COA, MSDS, and additional documents available on request.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {familySheets.map((sheet, i) => (
                <Reveal key={sheet.slug} delay={(i % 3) * 0.05}>
                  <Link
                    href={`/datasheets/${sheet.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-alethia-dark/10 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#5c8a3f]/40 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef4e6] font-mono text-[10px] font-semibold text-[#5c8a3f]">
                        SPEC
                      </span>
                      <div>
                        <span className="block text-[14px] font-medium text-alethia-dark">
                          {sheet.name}
                        </span>
                        <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/40">
                          Full specifications
                        </span>
                      </div>
                    </div>
                    <span
                      className="font-mono text-[12px] text-alethia-dark/40 transition group-hover:translate-x-0.5 group-hover:text-[#5c8a3f]"
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

      {/* Product video */}
      <section className="section-dark py-14 md:py-20">
        <div className="site-container">
          <Reveal>
            <span className="label-pill">Product Video</span>
            <h2 className="display-md mt-4 text-white">
              {product.title} in motion
            </h2>
            <p className="mt-3 max-w-xl text-[15px] text-white/50">
              A cinematic overview of {product.title.toLowerCase()} grades, packaging, and supply capabilities.
            </p>
          </Reveal>
          <div className="mt-8">
            <Reveal delay={0.1}>
              <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <video
                  src={`/videos/product-${videoSlug(product.slug)}.mp4`}
                  poster={product.image}
                  className="aspect-square w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${product.title} product video`}
                />
              </div>
            </Reveal>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/919892542200?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 px-4 py-2 text-[12px] font-mono font-medium uppercase tracking-[0.08em] text-[#25D366] transition hover:bg-[#25D366]/30"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Share on WhatsApp
              </a>
              <a
                href={`/videos/product-${videoSlug(product.slug)}.mp4`}
                download
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-[12px] font-mono font-medium uppercase tracking-[0.08em] text-white transition hover:bg-white/20"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      {relatedApps.length > 0 && (
        <section className="section-dark py-14 md:py-20">
          <div className="site-container">
            <Reveal>
              <span className="label-pill">Applications</span>
              <h2 className="display-md mt-4 text-white">
                Where {product.title.toLowerCase()} are used
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {relatedApps.map((a, i) => (
                <Reveal key={a.slug} delay={(i % 5) * 0.05}>
                  <Link
                    href={`/applications/${a.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#c6f19d]/40"
                  >
                    <div className="relative aspect-[4/3]">
                      <Img
                        src={a.image}
                        alt={a.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-white">{a.title}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#c6f19d]/70">
                        View →
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product FAQs */}
      {detail?.faqs && detail.faqs.length > 0 && (
        <section className="section-light py-14 md:py-20">
          <div className="site-container max-w-4xl">
            <Reveal>
              <span className="label-pill">FAQ</span>
              <h2 className="display-md mt-4 text-alethia-dark">
                Common questions
              </h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {detail.faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <details className="group rounded-2xl border border-alethia-dark/10 bg-white p-5 shadow-sm">
                    <summary className="cursor-pointer list-none text-[15px] font-medium text-alethia-dark marker:content-none">
                      {f.q}
                    </summary>
                    <p className="mt-3 text-[14px] leading-relaxed text-alethia-dark/65">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related products */}
      {others.length > 0 && (
        <section className="border-t border-white/5 bg-[#0c190d] py-14 md:py-20">
          <div className="site-container">
            <h2 className="display-md text-white">Related products</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={p.href}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#c6f19d]/40"
                >
                  <div className="relative aspect-[4/3]">
                    <Img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-white">{p.title}</p>
                    <p className="mt-1 text-xs text-white/50">{p.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function videoSlug(slug: string): string {
  const map: Record<string, string> = {
    "oleo-derivatives": "oleo",
    "fatty-acids": "fatty-acids",
    "oleic-acid": "oleic-acid",
    "stearic-acid": "stearic-acid",
    "fatty-alcohol": "fatty-alcohol",
    "fatty-esters": "fatty-esters",
    glycerin: "glycerin",
    wax: "wax",
    phosphorous: "phosphorous",
    "amines-phosphates-sulphites": "amines",
    "solvent-esters": "solvent",
    surfactants: "surfactants",
    "various-mole-ethoxylates": "ethoxylates",
    "vegetable-oil": "vegetable-oil",
    "more-products": "more",
  };
  return map[slug] ?? slug;
}
