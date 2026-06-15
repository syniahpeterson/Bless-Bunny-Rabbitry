// Component Imports:
import Section from "../layout/Section";
import SectionHeading from "../ui/SectionHeading";
import BunnyCard from "../ui/BunnyCard";

// Tool Imports:
import { Link } from "react-router-dom";

// Data Imports:
import bunnies from "../../data/featuredBunnies";

// Icon Imports:
import { PiRabbitLight } from "react-icons/pi";
import { HiArrowRight } from "react-icons/hi";

export default function AvailableBunnies() {
  return (
    <Section variant="beige" aria-labelledby="available-bunnies-heading">
      <SectionHeading
        id="available-bunnies-heading"
        eyebrow="Available Bunnies"
        title="Find Your Perfect Bunny"
        descriptions={[
          "Our available bunnies are raised with daily care, socialization, and attention from birth. Browse our current Holland Lop and Netherland Dwarf rabbits looking for loving homes.",
        ]}
      />

      {/* Bunny Cards */}
      <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
        {bunnies.map((bunny) => (
          <BunnyCard
            key={bunny.id}
            image={bunny.image}
            name={bunny.name}
            price={bunny.price}
            breed={bunny.breed}
            gender={bunny.gender}
            availableDate={bunny.availableDate}
          />
        ))}
      </div>

      {/* Main CTA */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/available-bunnies"
          aria-label="View all available rabbits"
          className="inline-flex items-center gap-3 rounded-2xl bg-forest px-10 py-5 uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-forest-light"
        >
          <PiRabbitLight className="text-2xl" aria-hidden="true" />

          <span>View All Available Bunnies</span>

          <HiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
