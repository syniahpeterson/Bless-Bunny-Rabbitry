// Component Imports:
import AdoptionProcess from "../components/sections/available-bunnies/AdoptionProcess";
import BunnyChosen from "../components/sections/available-bunnies/BunnyChosen";
import BunnyGrid from "../components/sections/available-bunnies/BunnyGrid";
import FAQ from "../components/sections/available-bunnies/FAQ";
import WhyChooseUs from "../components/sections/available-bunnies/WhyChooseUs";
import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/CTASection";

// Image Imports:
import availableCTAImage from "../assets/images/cta/available-bunnies-cta.webp";

// Icon Imports:
import { GiRabbit } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

export default function AvailableBunnies() {
  return (
    <main className="mt-24">
      <PageHero
        variant="bunny"
        eyebrow="Holland Lops & Netherland Dwarfs"
        title="Available Bunnies"
        description="Meet our current Holland Lop and Netherland Dwarf rabbits looking for loving homes."
      />
      <AdoptionProcess />
      <BunnyGrid />
      <WhyChooseUs />
      <BunnyChosen />
      <FAQ />
      <CTASection
        id="available-cta-heading"
        eyebrow="Ready to Adopt?"
        title="Your Bunny Is Waiting"
        descriptions={[
          "Take the next step toward welcoming a healthy, well-socialized rabbit into your home.",
        ]}
        image={availableCTAImage}
        imageAlt="Happy family with their Holland Lop"
        primaryButtonText="Contact Us"
        primaryButtonTo="/contact"
        primaryButtonLeftIcon={GiRabbit}
        primaryButtonRightIcon={BsArrowRight}
        secondaryButtonText="Rabbit Care"
        secondaryButtonTo="/rabbit-care"
        secondaryButtonRightIcon={BsArrowRight}
      />
    </main>
  );
}
