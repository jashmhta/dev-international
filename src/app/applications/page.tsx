import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { applications, applicationImages, brand } from "@/lib/brand";
import ApplicationsGrid from "./ApplicationsGrid";

export const metadata: Metadata = {
  title: "Applications",
  description: `Industry applications served by ${brand.name} — cosmetics, pharma, paints, plastics, food, construction, water treatment, and more.`,
};

export default function ApplicationsPage() {
  const withImages = applications.filter((a) => applicationImages[a]);
  const withoutImages = applications.filter((a) => !applicationImages[a]);

  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Where Our Chemicals Work"
        subtitle="From skin care to steel — specialty chemicals formulated and supplied for demanding industrial and consumer applications."
        showScroll
      />
      <section id="content" className="section-light py-16 md:py-24">
        <div className="site-container">
          <ApplicationsGrid
            items={withImages.map((name) => ({
              name,
              image: applicationImages[name],
            }))}
          />

          {withoutImages.length > 0 && (
            <div className="mt-16">
              <h2 className="display-md max-w-2xl text-alethia-dark">
                Additional segments we supply
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {withoutImages.map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-2xl border border-alethia-dark/10 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-alethia-dark/80">
                      {name}
                    </span>
                    <span className="text-alethia-dark/25">·</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 rounded-[28px] bg-alethia-dark p-8 text-white md:p-12">
            <h2 className="display-md max-w-2xl">
              Need a chemical for your process?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Tell us your industry and application — our team will recommend
              grades and arrange competitive supply from Mumbai.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="filled">
                Contact Us
              </Button>
              <Link
                href="/products"
                className="inline-flex items-center font-mono text-[12px] uppercase tracking-[0.1em] text-[#c6f19d]"
              >
                Browse products →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
