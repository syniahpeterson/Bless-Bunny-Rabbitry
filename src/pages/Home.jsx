// Component Imports:
import Hero from "../components/sections/home/Hero";
import Section from "../components/layout/Section";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";
import OurBreeds from "../components/sections/home/OurBreeds";
import AvailableBunnies from "../components/sections/home/AvailableBunnies";
import OurStory from "../components/sections/home/OurStory";
import Testimonials from "../components/sections/home/Testimonials";
import FAQ from "../components/sections/home/FAQ";
import CTASection from "../components/sections/CTASection";

// Data Imports:
import features from "../data/features";

// Image Imports:
import homeCTAImage from "../assets/images/cta/home-cta-bunny.webp";

// Icon Imports:
import { GiRabbit } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

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
        id="home-cta-heading"
        eyebrow="Ready to Find Your Perfect Bunny?"
        title="Bring Home a Healthy, Happy Companion"
        descriptions={[
          "Browse our available Holland Lop and Netherland Dwarf rabbits and discover the perfect addition to your family.",
        ]}
        image={homeCTAImage}
        imageAlt="Family holding their new Holland Lop rabbit"
        primaryButtonText="View Available Bunnies"
        primaryButtonTo="/available-bunnies"
        primaryButtonLeftIcon={GiRabbit}
        primaryButtonRightIcon={BsArrowRight}
        secondaryButtonText="Contact Us"
        secondaryButtonTo="/contact"
        secondaryButtonRightIcon={BsArrowRight}
        features={features}
      />
    </main>
  );
}
