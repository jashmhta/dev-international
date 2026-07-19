import Link from "next/link";
import { PageHero } from "./PageHero";
import { Button } from "./ui/Button";
import { Img } from "./ui/Img";
import type { Product } from "@/lib/brand";
import { products, brand } from "@/lib/brand";

export function ProductPage({ product }: { product: Product }) {
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={product.title}
        subtitle={product.blurb}
        showScroll
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="filled">
            Request Quote
          </Button>
          <Button href="/products">All Products</Button>
        </div>
      </PageHero>

      <section id="content" className="section-light py-14 md:py-24">
        <div className="site-container grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] md:aspect-square md:rounded-[28px]">
            <Img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="label-pill">{product.short}</span>
            <h2 className="display-md mt-4 text-alethia-dark md:mt-5">
              {product.title} from {brand.name}
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-alethia-dark/70 md:mt-4 md:text-[1.05rem]">
              {product.blurb} Enquire for grades, packaging, and bulk supply
              from our Mumbai office and Bhiwandi warehouse.
            </p>
            <div className="mt-6 md:mt-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-alethia-dark/45 md:text-[12px]">
                Product range includes
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 md:mt-4">
                {product.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-alethia-dark/10 bg-white px-3.5 py-2.5 text-[13px] text-alethia-dark/80 md:px-4 md:py-3 md:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
        </div>
      </section>

      {others.length > 0 && (
        <section className="section-dark py-14 md:py-20">
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
