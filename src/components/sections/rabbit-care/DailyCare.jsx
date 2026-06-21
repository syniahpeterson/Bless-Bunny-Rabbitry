// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ProcessCard from "../../ui/ProcessCard";

// Data Imports:
import rabbitSocializationData from "../../../data/rabbit-care/rabbitSocialization";

export default function DailyCare() {
  return (
    <Section variant="beige" aria-labelledby="daily-care-heading">
      <SectionHeading
        id="daily-care-heading"
        eyebrow="Daily Care & Socialization"
        title="Helping Your Rabbit Stay Happy and Engaged"
        descriptions={[
          "Rabbits are social, intelligent animals that benefit from daily interaction, mental stimulation, and consistent routines. Spending time with your rabbit each day helps build trust and encourages healthy behaviors.",
        ]}
      />
      <div className="grid lg-grid-cols-2 xl:grid-cols-4 gap-10 mt-12">
        {rabbitSocializationData.map((item) => (
          <ProcessCard
            key={item.id}
            title={item.title}
            number={item.number}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Section>
  );
}
