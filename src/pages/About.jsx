// Component Imports:
import Gallery from "../components/sections/about/Gallery";
import OurBreeds from "../components/sections/about/OurBreeds";
import OurStory from "../components/sections/about/OurStory";
import OurValues from "../components/sections/about/OurValues";
import WhyChooseUs from "../components/sections/about/WhyChooseUs";
import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/CTASection";

// Image Imports:
import aboutCTAImage from "../assets/images/cta/about-cta-bunny.webp";

// Icon Imports:
import { GiRabbit } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  return (
    <main className="mt-24">
      <PageHero
        variant="meadow"
        eyebrow="Established 2012 • North Carolina"
        title="About Bless Bunny Rabbitry"
        description="Learn more about our family, our rabbits, and our commitment to raising healthy, well-socialized companions."
      />
      <OurStory />
      <OurValues />
      <OurBreeds />
      <Gallery />
      <WhyChooseUs />
      <CTASection
        id="about-cta-heading"
        eyebrow="Find Your New Best Friend"
        title="Ready to Welcome a Bunny Home?"
        descriptions={[
          "Explore our available rabbits and begin your adoption journey with Bless Bunny Rabbitry.",
        ]}
        image={aboutCTAImage}
        imageAlt="Family holding their Holland Lop rabbit"
        primaryButtonText="View Available Bunnies"
        primaryButtonTo="/available-bunnies"
        primaryButtonLeftIcon={GiRabbit}
        primaryButtonRightIcon={BsArrowRight}
        secondaryButtonText="Contact Us"
        secondaryButtonTo="/contact"
        secondaryButtonRightIcon={BsArrowRight}
      />
    </main>
  );
}
