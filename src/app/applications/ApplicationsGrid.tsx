"use client";

import { Reveal } from "@/components/dynamics/Reveal";
import { Img } from "@/components/ui/Img";
import { ArrowUpRight } from "@/components/ui/Icons";
import Link from "next/link";

type Item = { name: string; image: string };

export default function ApplicationsGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.name} delay={0.04 * (i % 6)}>
          <Link
            href="/contact"
            className="group relative block h-64 overflow-hidden rounded-[20px] border border-alethia-dark/10 bg-white shadow-sm transition hover:shadow-lg"
          >
            <Img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <h3 className="text-[1.05rem] font-medium leading-tight tracking-[-0.02em] text-white">
                {item.name}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-lime opacity-0 transition group-hover:opacity-100">
                Enquire <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
