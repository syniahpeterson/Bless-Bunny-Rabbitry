// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ValueCard from "../../ui/ValueCard";

// Data Imports:
import housingData from "../../../data/rabbit-care/rabbitHousingData";

export default function HousingEssentials() {
  return (
    <Section variant="beige" aria-labelledby="housing-essentials-heading">
      <SectionHeading
        id="housing-essentials-heading"
        eyebrow="Housing Essentials"
        title="Creating a Safe and Comfortable Home"
        descriptions={[
          "A rabbit's environment plays a major role in their health and happiness. Providing adequate space, daily exercise, and a safe living area helps your rabbit thrive.",
        ]}
      />
      <div className="mt-12 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {housingData.map((item) => (
          <ValueCard
            key={item.id}
            icon={item.icon}
            description={item.description}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </Section>
  );
}
