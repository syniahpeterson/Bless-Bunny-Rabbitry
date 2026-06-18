// Component Imports:
import SectionHeading from "../../ui/SectionHeading";
import FeatureCard from "../../ui/FeatureCard";
import Section from "../../layout/Section";

// Data Imports:
import features from "../../../data/WhyChooseUs";

// Image Imports:
import bunnyImage from "../../../assets/images/why-choose-us.webp";

export default function WhyChooseUs() {
  return (
    <Section variant="beige" aria-labelledby="why-choose-us-heading">
      {/* Top Content */}
      <div className="grid gap-12 lg:grid-cols-[450px_1fr] lg:items-center">
        {/* Image */}
        <div>
          <img
            src={bunnyImage}
            width="800"
            height="1000"
            alt="Young Holland Lop rabbit raised and socialized at Bless Bunny Rabbitry in North Carolina"
            loading="lazy"
            decoding="async"
            className="w-full rounded-[2rem] object-cover shadow-lg"
          />
        </div>

        {/* Heading + Copy */}
        <div className="max-w-3xl">
          <SectionHeading
            id="why-choose-us-heading"
            eyebrow="Why Families Choose Us"
            title="Raising Friendly, Socialized Rabbits Since 2012"
            descriptions={[
              "At Bless Bunny Rabbitry, we believe rabbits should be more than pets—they should become part of the family.",
              "Since 2012, we've specialized in raising pedigreed Holland Lops and Netherland Dwarfs with daily socialization, hands-on care, and individual attention from birth.",
              "Our goal is to help every bunny transition smoothly into a loving home.",
            ]}
            align="left"
          />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
}
