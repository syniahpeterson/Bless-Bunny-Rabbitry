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
        eyebrow="Ready to Welcome a Rabbit Home?"
        title="Find a Healthy, Well-Socialized Companion"
        descriptions={[
          "Now that you've learned the essentials of rabbit care, explore our available Holland Lop and Netherland Dwarf rabbits and find the perfect companion for your family.",
        ]}
        image={rabbitCareCTAImage}
        imageAlt="Healthy Holland Lop and Netherland Dwarf rabbits resting together in a cozy indoor setting"
      />
    </main>
  );
}
