// Component Imports:
import AdoptionProcess from "../components/sections/available-bunnies/AdoptionProcess";
import BunnyChosen from "../components/sections/available-bunnies/BunnyChosen";
import BunnyGrid from "../components/sections/available-bunnies/BunnyGrid";
import FAQ from "../components/sections/available-bunnies/FAQ";
import WhyChooseUs from "../components/sections/available-bunnies/WhyChooseUs";
import PageHero from "../components/sections/PageHero";
import CTASection from "../components/sections/CTASection";

// Image Imports:
import familyWithRabbitImage from "../assets/images/cta/available-bunnies-cta.webp";

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
        id="available-bunnies-cta-heading"
        eyebrow="Found a Bunny You Love?"
        title="Take the First Step Toward Bringing Your New Companion Home"
        descriptions={[
          "Whether you're ready to reserve a rabbit or simply have questions, we're here to help. Reach out today and we'll guide you through the next steps.",
        ]}
        image={familyWithRabbitImage}
        imageAlt="Family holding their newly adopted rabbit"
      />
    </main>
  );
}
