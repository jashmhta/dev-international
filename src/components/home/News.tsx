import Link from "next/link";
import { ArrowRight } from "../ui/Icons";
import { products } from "@/lib/brand";

const items = products.slice(0, 3).map((p) => ({
  href: p.href,
  tag: "Product Line",
  date: "Specialty Chemicals",
  title: p.title,
  excerpt: p.blurb,
}));

export function News() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="label-pill">Featured Product Lines</span>
            <h2 className="display-lg mt-6 text-alethia-dark">
              Chemicals that Power Formulations.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-alethia-dark/70 transition hover:text-alethia-dark"
          >
            All products <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group grid gap-4 rounded-[20px] border border-alethia-dark/8 bg-white p-5 transition hover:shadow-lg md:grid-cols-[160px_1fr_auto] md:items-center md:gap-6 md:p-7 md:rounded-[24px]"
            >
              <div className="flex flex-row items-center gap-3 md:flex-col md:gap-2">
                <span className="label-pill w-fit">{item.tag}</span>
                <span className="font-mono text-[11px] text-alethia-dark/45 md:text-[12px]">
                  {item.date}
                </span>
              </div>
              <div>
                <h3 className="text-[1.15rem] font-medium leading-snug tracking-[-0.02em] text-alethia-dark md:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] text-alethia-dark/60 md:mt-2 md:text-sm">{item.excerpt}</p>
              </div>
              <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-alethia-dark/15 text-alethia-dark transition group-hover:bg-alethia-lime group-hover:border-alethia-lime md:flex">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
