import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import BreedShowcase from "../../ui/BreedShowcase";

// Data Imports:
import aboutBreeds from "../../../data/about/aboutBreeds";

// Icon Imports:
import { FaLeaf } from "react-icons/fa";

export default function OurBreeds() {
  return (
    <Section variant="white" aria-labelledby="our-breeds-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Breeds"
          title="Specialized in Two Beloved Breeds"
          descriptions={[
            "We focus exclusively on Holland Lops and Netherland Dwarfs, two breeds known for thier unique personalities, charming appearances, and suitability as family companions.",
          ]}
        />

        {/* Decorative Center Divider */}
        <div
          className="mb-16 flex items-center justify-center gap-3"
          aria-hidden="true"
        >
          <div className="h-px w-16 bg-sage" />
          <FaLeaf className="text-sage text-lg" />
          <div className="h-px w-16 bg-sage" />
        </div>

        <div className="space-y-8">
          {aboutBreeds.map((breed, index) => (
            <BreedShowcase
              key={breed.id}
              {...breed}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
