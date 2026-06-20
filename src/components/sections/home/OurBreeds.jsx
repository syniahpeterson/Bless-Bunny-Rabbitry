// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import BreedCard from "../../ui/BreedCard";

// Icon Imports:
import { FaHeart } from "react-icons/fa";

// Data Imports:
import breeds from "../../../data/home/breedFeatures";

export default function OurBreeds() {
  return (
    <Section variant="white" aria-labelledby="our-breeds-heading">
      <SectionHeading
        id="our-breeds-heading"
        eyebrow="Our Breeds"
        title="Pedigreed Rabbits Raised for Loving Homes"
        descriptions={[
          "Since 2012, Bless Bunny Rabbitry has specialized in pedigreed Holland Lop and Netherland Dwarf rabbits raised for families throughout North Carolina.",
        ]}
      />
      <div className="mt-20 space-y-16">
        {breeds.map((breed, index) => (
          <BreedCard
            key={breed.id}
            breed={breed.breed}
            image={breed.image}
            description={breed.description}
            features={breed.features}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg md:text-xl text-forest leading-relaxed">
          Both breeds are raised with love, daily socialization, and hands-on
          care from birth.{" "}
          <strong className="ml-2">Healthy bunnies. Happy families.</strong>
          <FaHeart className="inline ml-2 text-sage" />
        </p>
      </div>
    </Section>
  );
}
