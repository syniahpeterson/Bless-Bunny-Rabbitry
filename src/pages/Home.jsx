import Hero from "../components/sections/Hero";
import Section from "../components/layout/Section";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import OurBreeds from "../components/sections/OurBreeds";
import AvailableBunnies from "../components/sections/AvailableBunnies";
import OurStory from "../components/sections/OurStory";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTASection from "../components/sections/CTASection";

import bunnyImage from "../assets/images/cta-bunny.webp";

import { GiRabbit } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

import features from "../data/features";

export default function Home() {
  return (
    <main className="mt-24">
      <Hero />
      <WhyChooseUs />
      <OurBreeds />
      <AvailableBunnies />
      <OurStory />
      <Testimonials />
      <FAQ />
      <CTASection
        id="final-cta-heading"
        eyebrow="Ready to Welcome a Bunny Home?"
        title="Bring Home a Friendly, Family-Raised Companion"
        descriptions={[
          "Explore our available Holland Lop and Netherland Dwarf rabbits or contact us with any questions. We'd love to help you find the perfect addition to your family.",
        ]}
        image={bunnyImage}
        imageAlt="Friendly Holland Lop rabbit sitting on a blanket"
        buttons={[
          {
            text: "View Available Bunnies",
            to: "/available-bunnies",
            variant: "primary",
            leftIcon: GiRabbit,
            rightIcon: BsArrowRight,
            className: "px-10 py-5 uppercase tracking-[0.12em] shadow-lg",
          },
          {
            text: "Contact Us",
            to: "/contact",
            variant: "secondary",
            rightIcon: BsArrowRight,
            className: "px-10 py-5 uppercase tracking-[0.12em]",
          },
        ]}
        features={features}
      />
    </main>
  );
}
