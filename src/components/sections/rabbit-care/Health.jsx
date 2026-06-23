// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ValueCard from "../../ui/ValueCard";

// Data Imports:
import healthData from "../../../data/rabbit-care/rabbitHealthData";

export default function Health() {
  return (
    <Section variant="white" aria-labelledby="health-heading">
      <SectionHeading
        id="health-heading"
        eyebrow="Health & Wellness"
        title="Keeping Your Rabbit Healthy for Years to Come"
        descriptions={[
          "Regular observation, a clean environment, and proper veterinary care are essential to maintaining your rabbit's long-term health and well-being.",
        ]}
      />
      <div className="mt-12 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {healthData.map((item) => (
          <ValueCard key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
}
