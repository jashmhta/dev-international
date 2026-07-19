import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { brand, industries } from "@/lib/brand";
import AboutReveal from "./AboutReveal";

export const metadata: Metadata = {
  title: "About Us",
  description: `M/s ${brand.name} established in ${brand.established} — a trusted name for quality specialty chemicals in Mumbai, India.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Company"
        title={`${brand.name}`}
        subtitle={`Established in ${brand.established}. A trusted name for quality chemicals.`}
        showScroll
      />

      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container grid gap-14 lg:grid-cols-2">
          <div>
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
              units, and trade houses.
            </p>
            <div className="mt-8 overflow-hidden rounded-[24px] border border-alethia-dark/10">
              <Img
                src="/images/about/about.jpg"
                alt={`${brand.name} — chemical supply operations`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-[28px] border border-alethia-dark/10 bg-white p-8 shadow-sm md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-alethia-dark/40">
              Founder & CEO
            </p>
            <h3 className="mt-3 text-[1.75rem] font-medium tracking-[-0.03em] text-alethia-dark">
              {brand.founder.name}
            </h3>
            <p className="mt-4 leading-relaxed text-alethia-dark/70">
              {brand.founder.bio}
            </p>
            <div className="mt-8 overflow-hidden rounded-[20px]">
              <Img
                src="/images/about/mission.jpg"
                alt="Mission"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 space-y-2 border-t border-alethia-dark/10 pt-6 font-mono text-[12px] text-alethia-dark/55">
              <p>{brand.address.full}</p>
              <p>{brand.warehouse}</p>
            </div>
          </div>
        </div>
      </section>

      <AboutReveal />

      <section className="section-light py-16 md:py-24">
        <div className="site-container">
          <span className="label-pill">Industries</span>
          <h2 className="display-md mt-5 max-w-3xl text-alethia-dark">
            Providing market-leading products for important segments of Indian
            industry
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((name) => (
              <div
                key={name}
                className="rounded-2xl border border-alethia-dark/10 bg-white px-5 py-4 font-mono text-[12px] uppercase tracking-[0.08em] text-alethia-dark/75"
              >
                {name}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/contact" variant="filled">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
