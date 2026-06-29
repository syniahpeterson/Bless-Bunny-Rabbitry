// Component imports:
import PageHero from "../components/sections/PageHero";
import DailyCare from "../components/sections/rabbit-care/DailyCare";
import Health from "../components/sections/rabbit-care/Health";
import HousingEssentials from "../components/sections/rabbit-care/HousingEssentials";
import Introduction from "../components/sections/rabbit-care/Introduction";
import Nutrition from "../components/sections/rabbit-care/Nutrition";
import FAQ from "../components/sections/rabbit-care/FAQ";
import CTASection from "../components/sections/CTASection";

// Image Imports:
import rabbitCareCTAImage from "../assets/images/cta/rabbit-care-cta.webp";

// Icon Imports:
import { GiRabbit } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

export default function RabbitCare() {
  return (
    <main className="mt-24">
      <PageHero
        variant="meadow"
        eyebrow="Helpful Resources"
        title="Rabbit Care Guide"
        description="Everything you need to know about feeding, housing, and caring for your rabbit."
      />
      <Introduction />
      <HousingEssentials />
      <Nutrition />
      <DailyCare />
      <Health />
      <FAQ />
      <CTASection
        id="rabbit-care-cta-heading"
        eyebrow="Ready for Your New Companion?"
        title="Find the Perfect Bunny"
        descriptions={[
          "Now that you know how to care for a rabbit, explore our available bunnies and begin your adoption journey.",
        ]}
        image={rabbitCareCTAImage}
        imageAlt="Healthy Holland Lop rabbit"
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
