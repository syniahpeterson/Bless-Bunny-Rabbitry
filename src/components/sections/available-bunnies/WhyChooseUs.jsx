// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ValueCard from "../../ui/ValueCard";

// Data Imports:
import whyData from "../../../data/available-bunnies/whyChooseData";

export default function WhyChooseUs() {
  return (
    <Section variant="white" aria-labelledby="why-choose-us-heading">
      <SectionHeading
        eyebrow="Why Choose Bless Bunny Rabbitry"
        title="Raised With Care, Socialization, and Quality in Mind"
        descriptions={[
          "Every rabbit receives daily attention, proper care, and early socialization to help ensure a healthy and friendly companion for your family.",
        ]}
      />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {whyData.map((why) => (
          <ValueCard
            key={why.id}
            variant="whyChoose"
            icon={why.icon}
            title={why.title}
            description={why.description}
            image={why.image}
          />
        ))}
      </div>
    </Section>
  );
}
