// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import BunnyCard from "../../ui/BunnyCard";

// Data Imports:
import availableBunnies from "../../../data/available-bunnies/availableBunnies";

export default function BunnyGrid() {
  return (
    <Section variant="beige" aria-labelledby="available-bunnies-heading">
      <SectionHeading
        id="available-bunnies-heading"
        eyebrow="Available Rabbits"
        title="Meet Our Current Bunnies"
        descriptions={[
          "Each rabbit is raised with daily care, socialization, and attention from birth. Browse our current Holland Lop and Netherland Dwarf rabbits looking for loving homes.",
        ]}
      />
      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {availableBunnies.map((bunny) => (
          <BunnyCard key={bunny.id} {...bunny} />
        ))}
      </div>
    </Section>
  );
}
