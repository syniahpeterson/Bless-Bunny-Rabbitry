// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ProcessCard from "../../ui/ProcessCard";

// Data Imports:
import steps from "../../../data/available-bunnies/adoptionProcess";

export default function AdoptionProcess() {
  return (
    <Section
      variant="white"
      aria-labelledby="adoption-process-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-40 w-full bg-beige rounded-t-[100%]"
      />
      <div className="relative z-10">
        <SectionHeading
          eyebrow="Adoption Process"
          title="Bringing Home Your New Bunny Is Easy"
          descriptions={[
            "We've made the process simple and transparent so you can focus on finding the perfect rabbit for your family.",
          ]}
        />
        <div className="relative mt-20">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <ProcessCard
                key={step.id}
                {...step}
                showArrow={index !== steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
