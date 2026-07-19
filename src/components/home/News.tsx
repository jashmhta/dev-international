import Link from "next/link";
import { ArrowRight } from "../ui/Icons";

const ctas = [
  {
    href: "/about",
    tag: "Company",
    title: "About Us",
    excerpt:
      "Three decades of specialty chemical supply, from a Mumbai office and Bhiwandi warehouse to 30+ industries.",
  },
  {
    href: "/leadership",
    tag: "Company",
    title: "Leadership",
    excerpt:
      "Meet Devesh Metha and the team behind consistent quality, honest pricing, and on-time dispatch.",
  },
  {
    href: "/sustainability",
    tag: "Company",
    title: "Sustainability",
    excerpt:
      "Bio-based feedstocks, renewable plant oils, and traceable green supply chains at the core of our portfolio.",
  },
  {
    href: "/process",
    tag: "Capabilities",
    title: "Our Process",
    excerpt:
      "From enquiry to dispatch: how we source, quality-check, and deliver every order you place.",
  },
  {
    href: "/quality",
    tag: "Capabilities",
    title: "Quality & Compliance",
    excerpt:
      "ISO, Kosher, and Halal certified grades with datasheets you can read directly on this site.",
  },
  {
    href: "/logistics",
    tag: "Capabilities",
    title: "Logistics",
    excerpt:
      "A well-equipped Bhiwandi godown and trained professionals managing orders across India.",
  },
  {
    href: "/applications",
    tag: "Explore",
    title: "Applications",
    excerpt:
      "32 industries served, from pharmaceuticals and cosmetics to paints, rubber, and water treatment.",
  },
  {
    href: "/faq",
    tag: "Explore",
    title: "FAQ",
    excerpt:
      "Answers on minimum order quantities, certifications, delivery timelines, and technical support.",
  },
  {
    href: "/contact",
    tag: "Explore",
    title: "Contact Us",
    excerpt:
      "Request a quote, talk to sales on WhatsApp, or write to us. We respond within one business day.",
  },
];

export function News() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="label-pill">Explore Dev International</span>
            <h2 className="display-lg mt-6 text-alethia-dark">
              Everything else you came looking for.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-alethia-dark/70 transition hover:text-alethia-dark"
          >
            All products <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {ctas.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between gap-6 rounded-[20px] border border-alethia-dark/8 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg md:rounded-[24px] md:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="label-pill w-fit">{item.tag}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-alethia-dark/15 text-alethia-dark transition group-hover:border-alethia-lime group-hover:bg-alethia-lime">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                  </span>
                </div>
                <h3 className="mt-5 text-[1.2rem] font-medium leading-snug tracking-[-0.02em] text-alethia-dark md:text-[1.3rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-alethia-dark/60 md:text-sm">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
