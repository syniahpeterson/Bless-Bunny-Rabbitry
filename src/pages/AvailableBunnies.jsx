// Component Imports:
import AdoptionProcess from "../components/sections/available-bunnies/AdoptionProcess";
import BunnyChosen from "../components/sections/available-bunnies/BunnyChosen";
import BunnyGrid from "../components/sections/available-bunnies/BunnyGrid";
import WhyChooseUs from "../components/sections/available-bunnies/WhyChooseUs";
import PageHero from "../components/sections/PageHero";

export default function AvailableBunnies() {
  return (
    <>
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
    </>
  );
}
