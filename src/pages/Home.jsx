import Hero from "../components/sections/home/Hero";
import Section from "../components/layout/Section";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";
import OurBreeds from "../components/sections/home/OurBreeds";
import AvailableBunnies from "../components/sections/home/AvailableBunnies";
import OurStory from "../components/sections/home/OurStory";
import Testimonials from "../components/sections/home/Testimonials";
import FAQ from "../components/sections/home/FAQ";
import CTASection from "../components/sections/CTASection";

import homeCtaImage from "../assets/images/cta/home-cta-bunny.webp";

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
        image={homeCtaImage}
        imageAlt="Friendly Holland Lop rabbit sitting on a blanket"
      />
    </main>
  );
}
