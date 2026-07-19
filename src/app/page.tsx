import { Hero } from "@/components/home/Hero";
import { ScrollNarrative } from "@/components/dynamics/ScrollNarrative";
import { VisionOutro } from "@/components/home/VisionOutro";
import { Stats } from "@/components/home/Stats";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Solutions } from "@/components/home/Solutions";
import { Manifesto } from "@/components/home/Manifesto";
import { Technology } from "@/components/home/Technology";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { Certifications } from "@/components/home/Certifications";
import { Trust } from "@/components/home/Trust";
import { CaseStudies } from "@/components/home/CaseStudies";
import { News } from "@/components/home/News";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollNarrative />
      <VisionOutro />
      <Stats />
      <ProductShowcase />
      <Solutions />
      <Manifesto />
      <Technology />
      <Process />
      <Testimonials />
      <IndustriesGrid />
      <Certifications />
      <Trust />
      <CaseStudies />
      <News />
    </>
  );
}
