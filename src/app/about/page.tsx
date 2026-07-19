import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { brand, industries } from "@/lib/brand";
import { BreadcrumbSchema } from "@/components/Schema";
import AboutReveal from "./AboutReveal";

const YEARS = new Date().getFullYear() - Number(brand.established);

export const metadata: Metadata = {
  title: "About Us — Trusted Specialty Chemicals Supplier Since 1995",
  description: `M/s ${brand.name}, established ${brand.established} in Mumbai by ${brand.founder.name} — ${YEARS}+ years supplying quality specialty chemicals to MNCs, MSMEs, and trade houses across India.`,
  alternates: { canonical: "/about" },
};

const milestones = [
  {
    year: "1995",
    title: "Founded in Mumbai",
    body: `${brand.founder.name} establishes M/s ${brand.name} — built on quality products, correct pricing, and timely service.`,
  },
  {
    year: "2000s",
    title: "Portfolio expansion",
    body: "The product basket grows across oleo derivatives, fatty acids, fatty alcohols, glycerin, waxes, and surfactants — one roof for all industries.",
  },
  {
    year: "2010s",
    title: "Logistics backbone",
    body: "A well-equipped godown at Bhiwandi (central location) and trained back-office staff enable reliable pan-India dispatch.",
  },
  {
    year: "Today",
    title: "Eco-conscious sourcing",
    body: "Bio-based feedstocks, natural-based surfactants, and RSPO Mass Balance options serve customers from MNCs to trade houses.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      <PageHero
        eyebrow="About Company"
        title={brand.name}
        subtitle={`Established in ${brand.established}. A trusted name for quality chemicals — ${YEARS}+ years of timely service, quality products, and correct competitive pricing.`}
        bgImage="/images/brand/banner3.webp"
        showScroll
      />

      {/* Story + Founder */}
      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="label-pill">Our Story</span>
              <h2 className="display-md mt-5 text-alethia-dark">
                Quality. Price. Timely Service.
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-alethia-dark/70">
                M/s {brand.name} established in year {brand.established} is a
                trusted name for quality chemicals. A strong satisfied customer
                base is the result of timely service, quality products, and
                correct competitive pricing.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-alethia-dark/70">
                We offer a wide range of chemicals to cater to the raw material
                requirements of all industries under one roof. Our customers
                include large multinational corporates, medium to small scale
                units, and trade houses — served by well-trained professional
                staff managing the back office and a well-equipped godown at
                central location, Bhiwandi.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 overflow-hidden rounded-[24px] border border-alethia-dark/10">
                <Img
                  src="/images/about/about.jpg"
                  alt={`${brand.name} — chemical supply operations`}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-[28px] border border-alethia-dark/10 bg-white p-8 shadow-sm md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-alethia-dark/40">
                Founder &amp; CEO
              </p>
              <h3 className="mt-3 text-[1.75rem] font-medium tracking-[-0.03em] text-alethia-dark">
                {brand.founder.name}
              </h3>
              <div className="mt-6 overflow-hidden rounded-[20px]">
                <Img
                  src="/images/about/founder.webp"
                  alt={`${brand.founder.name} — Founder & CEO of ${brand.name}`}
                  className="aspect-[3/4] h-auto w-full object-cover"
                />
              </div>
              <p className="mt-6 leading-relaxed text-alethia-dark/70">
                {brand.founder.bio} Providing market-leading products and
                solutions for important segments of Indian industry — building
                &amp; construction, plastics &amp; packaging, water &amp;
                health, food &amp; pharma, automotive, electronics, and
                renewable energies.
              </p>
              <div className="mt-8 space-y-2 border-t border-alethia-dark/10 pt-6 font-mono text-[12px] text-alethia-dark/55">
                <p>{brand.address.full}</p>
                <p>{brand.warehouse}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-alethia-dark/8 bg-[#f7f6f3] py-16 md:py-24">
        <div className="site-container">
          <Reveal>
            <span className="label-pill">Journey</span>
            <h2 className="display-md mt-5 max-w-2xl text-alethia-dark">
              {YEARS}+ years in specialty chemicals
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="h-full rounded-[24px] border border-alethia-dark/10 bg-white p-6 shadow-sm">
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-[#5c8a3f]">
                    {m.year}
                  </p>
                  <h3 className="mt-3 text-[1.15rem] font-medium tracking-[-0.02em] text-alethia-dark">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-alethia-dark/60">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission (dark reveal section) */}
      <AboutReveal />

      {/* Industries */}
      <section className="section-light py-16 md:py-24">
        <div className="site-container">
          <Reveal>
            <span className="label-pill">Industries</span>
            <h2 className="display-md mt-5 max-w-3xl text-alethia-dark">
              Providing market-leading products for important segments of
              Indian industry
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((name, i) => (
              <Reveal key={name} delay={(i % 3) * 0.05}>
                <div className="rounded-2xl border border-alethia-dark/10 bg-white px-5 py-4 font-mono text-[12px] uppercase tracking-[0.08em] text-alethia-dark/75">
                  {name}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/contact" variant="filled">
              Get in Touch
            </Button>
            <Button href="/applications">Explore Applications</Button>
          </div>
        </div>
      </section>
    </>
  );
}
