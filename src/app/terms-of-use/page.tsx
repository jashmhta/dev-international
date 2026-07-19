import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="section-light py-16 md:py-20">
        <div className="site-container max-w-3xl space-y-4 text-alethia-dark/75">
          <p>
            By using this website you agree to the following terms. Product
            information is provided for general guidance; final specifications,
            pricing, and availability are confirmed on enquiry.
          </p>
          <p>
            All trademarks and brand marks on this site belong to their
            respective owners. Content may not be reproduced without permission
            of {brand.name}.
          </p>
          <p>
            Orders and commercial terms are governed by separate contracts and
            applicable Indian law. Contact{" "}
            <a
              className="text-alethia-dark underline"
              href={`mailto:${brand.email.sales}`}
            >
              {brand.email.sales}
            </a>{" "}
            for trade enquiries.
          </p>
        </div>
      </section>
    </>
  );
}
