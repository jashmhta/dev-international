"use client";

import { Reveal } from "@/components/dynamics/Reveal";

export default function AboutReveal() {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="site-container grid gap-10 md:grid-cols-2">
        <Reveal>
          <span className="label-pill">Our Vision</span>
          <p className="mt-5 text-[1.25rem] font-medium leading-snug tracking-[-0.02em] text-white">
            To create a value-driven workplace for all people and cultivate a
            community of ethical and socially responsible human beings.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="label-pill">Our Mission</span>
          <p className="mt-5 text-[1.25rem] font-medium leading-snug tracking-[-0.02em] text-white">
            To use our natural societal abilities as a team leader to
            encourage and collaborate with other participants and
            organizations — sharing best business practices and innovative
            approaches to value-based enlightenment for societal well-being.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
