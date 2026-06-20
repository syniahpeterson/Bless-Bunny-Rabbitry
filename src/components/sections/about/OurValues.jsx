// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ValueCard from "../../ui/ValueCard";

// Data Imports:
import values from "../../../data/about/aboutValues";

// Icon Imports:
import { FaLeaf } from "react-icons/fa";

export default function OurValues() {
  return (
    <Section variant="beige" aria-labelledby="our-values-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="our-values-heading"
          eyebrow="Our Values"
          title="The Principles Behind Every Rabbit We Raise"
          descriptions={[
            "Every rabbit at Bless Bunny Rabbitry is raised with care, attention, and a commitment to responsible breeding. These values guide everything we do and help ensure our rabbits become wonderful lifelong companions.",
          ]}
        />

        {/* Decorative Divider */}
        <div
          className="my-10 flex items-center justify-center gap-4"
          aria-hidden="true"
        >
          <div className="h-px w-20 bg-sage" />
          <FaLeaf className="text-sage text-xl" />
          <div className="h-px w-20 bg-sage" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 pt-8 gap-8">
          {values.map((value) => (
            <ValueCard
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
              image={value.image}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
