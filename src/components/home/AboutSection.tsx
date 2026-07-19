"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/Button";
import { Img } from "../ui/Img";
import { brand } from "@/lib/brand";

gsap.registerPlugin(ScrollTrigger);

const YEARS = new Date().getFullYear() - Number(brand.established);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const yearsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.fromTo(
          "[data-about-reveal]",
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
          }
        );
        gsap.fromTo(
          "[data-about-image]",
          { clipPath: "inset(8% 8% 8% 8% round 28px)", scale: 1.06 },
          {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              once: true,
            },
          }
        );
      }
      // Years counter
      if (yearsRef.current) {
        const obj = { n: 0 };
        gsap.to(obj, {
          n: YEARS,
          duration: reduce ? 0 : 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
          onUpdate: () => {
            if (yearsRef.current)
              yearsRef.current.textContent = String(Math.round(obj.n));
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="section-light py-16 md:py-28"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Founder image + years badge */}
          <div className="relative" data-about-reveal>
            <div
              data-about-image
              className="relative aspect-[3/4] max-h-[640px] overflow-hidden rounded-[28px]"
            >
              <Img
                src="/images/about/founder.webp"
                alt={`${brand.founder.name}, ${brand.founder.role} of ${brand.name}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
                <p className="text-[1.15rem] font-medium tracking-[-0.02em] text-white">
                  {brand.founder.name}
                </p>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#c6f19d]">
                  {brand.founder.role}
                </p>
              </div>
            </div>
            {/* Years badge */}
            <div className="absolute -right-3 -top-5 rounded-2xl border border-alethia-dark/10 bg-white px-6 py-4 shadow-lg md:-right-6">
              <p className="text-[2.4rem] font-medium leading-none tracking-[-0.04em] text-alethia-dark">
                <span ref={yearsRef}>{YEARS}</span>
                <span className="text-[#5c8a3f]">+</span>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/50">
                Years in Chemicals
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="flex flex-col justify-center">
            <span className="label-pill" data-about-reveal>
              About {brand.name}
            </span>
            <h2
              id="about-heading"
              data-about-reveal
              className="display-md mt-5 text-alethia-dark"
            >
              A trusted name for quality chemicals since {brand.established}
            </h2>
            <p
              data-about-reveal
              className="mt-6 text-[1.05rem] leading-relaxed text-alethia-dark/70"
            >
              {brand.founder.name}, Founder &amp; CEO of {brand.name}, has been
              in the chemical field for decades. His experience and devotion
              have led the company to prosper, building a strong, satisfied
              customer base through timely service, quality products, and
              correct, competitive pricing.
            </p>
            <p
              data-about-reveal
              className="mt-4 text-[1.05rem] leading-relaxed text-alethia-dark/70"
            >
              From our Mumbai office and well-equipped Bhiwandi warehouse, we
              supply bio-based and specialty chemicals to multinational
              corporates, MSMEs, and trade houses, one roof for the raw
              material needs of over 30 industries.
            </p>

            <dl
              data-about-reveal
              className="mt-8 grid grid-cols-3 gap-4 border-y border-alethia-dark/10 py-6"
            >
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/45">
                  Established
                </dt>
                <dd className="mt-1 text-[1.5rem] font-medium tracking-[-0.03em] text-alethia-dark">
                  {brand.established}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/45">
                  Product Lines
                </dt>
                <dd className="mt-1 text-[1.5rem] font-medium tracking-[-0.03em] text-alethia-dark">
                  15
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-alethia-dark/45">
                  Industries
                </dt>
                <dd className="mt-1 text-[1.5rem] font-medium tracking-[-0.03em] text-alethia-dark">
                  30+
                </dd>
              </div>
            </dl>

            <div data-about-reveal className="mt-8 flex flex-wrap gap-4">
              <Button href="/about" variant="filled">
                Our Story
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 self-center font-mono text-[12px] uppercase tracking-[0.08em] text-alethia-dark/60 transition hover:text-alethia-dark"
              >
                Talk to us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
