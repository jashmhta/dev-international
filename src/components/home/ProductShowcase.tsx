"use client";

import { HorizontalScroll } from "../dynamics/HorizontalScroll";
import { products } from "@/lib/brand";
import Link from "next/link";
import { ArrowUpRight } from "../ui/Icons";
import { Img } from "../ui/Img";

export function ProductShowcase() {
  return (
    <section className="section-dark">
      <div className="site-container py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="label-pill">Catalogue</span>
            <h2 className="display-lg mt-6 max-w-2xl text-white">
              Fifteen product families. Scroll to explore them sideways.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/70">
            From oleo derivatives to surfactants — a portfolio built to cover
            every link in your formulation chain.
          </p>
        </div>
      </div>

      <HorizontalScroll>
        {products.map((p, i) => (
          <article
            key={p.slug}
            className="dev-card relative flex h-[60vh] w-[80vw] shrink-0 flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-7 sm:w-[60vw] md:w-[42vw] md:p-9 lg:h-[65vh] lg:w-[34vw] xl:w-[28vw]"
          >
            <div className="relative z-10 flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-alethia-lime/70">
                {String(i + 1).padStart(2, "0")} / {products.length}
              </span>
              <Link
                href={p.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-alethia-lime text-alethia-dark transition hover:scale-105"
                aria-label={`Explore ${p.title}`}
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative z-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/60 sm:text-[11px]">
                {p.short}
              </p>
              <h3 className="mt-2 text-[1.4rem] font-medium leading-tight tracking-[-0.03em] text-white md:text-[1.75rem]">
                {p.title}
              </h3>
              <p className="mt-3 line-clamp-2 max-w-md text-[13px] leading-relaxed text-white/55 md:text-[14px]">
                {p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.items.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/25 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-white/70"
                  >
                    {item}
                  </span>
                ))}
                {p.items.length > 3 && (
                  <span className="rounded-full border border-white/25 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-white/70">
                    +{p.items.length - 3}
                  </span>
                )}
              </div>
            </div>
            <Img
              src={p.image}
              alt={p.title}
              className="pointer-events-none absolute -right-4 bottom-0 h-[40%] w-auto max-w-[50%] object-contain opacity-15 mix-blend-luminosity md:h-[50%] md:opacity-20"
            />
          </article>
        ))}
      </HorizontalScroll>
    </section>
  );
}
