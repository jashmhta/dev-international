"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/Button";
import { ScrollHint } from "../ui/Icons";
import { Img } from "../ui/Img";
import { brand } from "@/lib/brand";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero — same 3D rock assets, Dev International branding.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const rocksRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (fadeRef.current) {
        gsap.to(fadeRef.current, {
          autoAlpha: 0,
          y: reduce ? 0 : -24,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "70% top",
            scrub: true,
          },
        });
      }
      if (rocksRef.current && !reduce) {
        gsap.to(rocksRef.current, {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (chipRef.current && !reduce) {
        gsap.to(chipRef.current, {
          y: -8,
          duration: 3.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
      if (!reduce) {
        gsap.utils.toArray<HTMLElement>("[data-rock-float]").forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 === 0 ? -10 : 8,
            duration: 3.2 + i * 0.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.25,
          });
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden bg-[#0f1f10]"
    >
      <div
        ref={rocksRef}
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f10] via-[#0f1f10]/70 to-transparent md:from-[#0f1f10]/90 md:via-[#0f1f10]/40" />
        <div className="absolute left-1/2 top-[20%] h-[50%] w-[90%] -translate-x-1/2 sm:left-[20%] sm:top-[12%] sm:h-[68%] sm:w-[76%] sm:translate-x-0 md:left-[28%] md:top-[4%] md:h-[84%] md:w-[62%] lg:left-[32%] lg:top-[2%] lg:h-[88%] lg:w-[56%] xl:left-[34%] xl:w-[54%]">
          <Img
            src="/images/hero-rock.png"
            alt=""
            priority
            className="h-full w-full object-contain object-center drop-shadow-[0_28px_55px_rgba(0,0,0,0.38)]"
          />
        </div>

        <div
          data-rock-float
          className="absolute bottom-[20%] left-[2%] w-[28%] max-w-[160px] sm:bottom-[18%] sm:left-[0%] sm:w-[26%] sm:max-w-[250px] md:bottom-[16%] md:left-[1.5%] md:w-[17%] md:max-w-[240px] lg:bottom-[17%] lg:left-[2.5%] lg:w-[15.5%]"
        >
          <Img
            src="/images/rock-bl.png"
            alt=""
            className="h-auto w-full drop-shadow-[0_16px_36px_rgba(0,0,0,0.42)]"
          />
        </div>

        <div
          data-rock-float
          className="absolute bottom-[14%] right-[2%] w-[26%] max-w-[150px] sm:bottom-[10%] sm:right-[-2%] sm:w-[24%] sm:max-w-[230px] md:bottom-[10%] md:right-[0%] md:w-[15%] md:max-w-[220px] lg:bottom-[11%] lg:right-[1%] lg:w-[14%]"
        >
          <Img
            src="/images/rock-br.png"
            alt=""
            className="h-auto w-full drop-shadow-[0_16px_36px_rgba(0,0,0,0.42)]"
          />
        </div>

        <div
          data-rock-float
          className="absolute right-[10%] top-[34%] z-[6] w-[14%] max-w-[52px] sm:right-[8%] sm:top-[13%] sm:z-0 sm:w-[10%] sm:max-w-[88px] md:right-[11%] md:top-[13%] md:w-[6.5%] md:max-w-[82px] lg:right-[13%] lg:top-[14%] lg:w-[5.5%]"
        >
          <Img
            src="/images/rock-tr.png"
            alt=""
            className="h-auto w-full drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>

      <div
        ref={chipRef}
        className="pointer-events-none absolute z-[5] hidden lg:block"
        style={{ left: "62%", top: "48%" }}
        aria-hidden
      >
        <div className="absolute -left-16 -top-14 h-[120px] w-[140px] rounded-sm border border-white/15" />
        <div className="inline-flex rounded-[2px] bg-[#f3f3f1] px-[7px] py-[3px] font-mono text-[10px] font-medium leading-none tracking-[0.01em] text-[rgba(15,30,15,0.78)]">
          Est. {brand.established}
        </div>
        <p className="mt-1.5 max-w-[210px] font-mono text-[9px] uppercase leading-[1.4] tracking-[0.04em] text-[#f5f4f2]/75">
          Specialty Chemicals · Oleo Derivatives
          <br />
          Fatty Alcohol · Surfactants · Solvents
        </p>
      </div>

      <div
        ref={fadeRef}
        className="relative z-10 flex min-h-[100dvh] flex-col"
        style={{ paddingTop: "var(--header-h)" }}
      >
        <div className="site-container flex flex-1 flex-col justify-between pb-6 pt-6 sm:pb-8 sm:pt-8 md:pb-10 md:pt-[56px] xl:pb-12 xl:pt-[71px]">
          <div className="relative z-10 max-w-[min(100%,740px)]">
            <h1 className="display-xl text-[#f5f4f2]">
              Specialty Chemicals
              <br />
              for Every Industry
              <br />
              Under One Roof
            </h1>
            <p className="mt-6 max-w-[min(100%,420px)] text-[15px] leading-[1.5] tracking-[-0.01em] text-[#f5f4f2]/80 sm:text-[16px] md:mt-8">
              Oleo derivatives, fatty alcohols, esters, glycerin, waxes, and
              surfactants — sourced, checked, and dispatched from Mumbai since{" "}
              {brand.established}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              <Button href="/contact">Request a Quote</Button>
              <a
                href="#products"
                className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#f5f4f2]/70 transition hover:text-[#c6f19d]"
              >
                Browse products
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-auto flex flex-col gap-6 pt-10 md:mt-0 md:flex-row md:items-end md:justify-between md:gap-8 md:pt-0">
            <p className="max-w-[min(100%,380px)] text-[14px] leading-[1.5] tracking-[-0.01em] text-[#f5f4f2]/65 sm:max-w-[400px] md:text-[15px] lg:max-w-[440px] lg:text-[16px]">
              Trusted by multinationals, MSMEs, and trade houses across India for
              consistent quality, competitive pricing, and on-time dispatch.
            </p>
            <a
              href="#products"
              className="hidden items-center gap-2 self-end font-mono text-[12px] tracking-[0.04em] text-[#f5f4f2]/65 transition hover:text-[#c6f19d] md:inline-flex"
            >
              <ScrollHint className="h-3 w-3 opacity-80" />
              Scroll to discover
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
