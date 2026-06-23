// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ListCard from "../../ui/ListCard";

// Data Imports:
import nextSteps from "../../../data/available-bunnies/nextSteps";

// Image Imports:
import availableFamily from "../../../assets/images/available-bunnies/available-family.webp";

// Import Icons:
import { FaLeaf } from "react-icons/fa";

export default function BunnyChosen() {
  return (
    <Section variant="beige" aria-labelledby="bunny-chosen-heading">
      <div className="mx-auto grid lg:grid-cols-[1.4fr_0.9fr] gap-12 lg:gap-16 xl:gap-20 max-w-7xl">
        {/* Left Image */}
        <div className="flex items-center">
          <img
            src={availableFamily}
            alt="Happy family spending time with a Holland Lop rabbit"
            loading="lazy"
            className="w-full rounded-[1.75rem] object-cover shadow-[0_10px_40px_rgba(59,74,56,0.08)] lg:h-[920px]"
          />
        </div>

        {/* Right Content */}
        <div>
          <SectionHeading
            id="bunny-chosen-heading"
            eyebrow="Simple & Transparent"
            title="What Happens After You Choose a Bunny?"
            descriptions={[
              "Once you've found a rabbit you're interested in, we'll guide you through the reservation process and help prepare you for bringing your new companion home.",
            ]}
          />
          {/* Decorative Divider */}
          <div
            className="mb-10 mt-4 flex items-center gap-2"
            aria-hidden="true"
          >
            <div className="h-px w-10 bg-sage" />
            <FaLeaf className="text-xs text-sage" />
            <div className="h-px w-10 bg-sage" />
          </div>

          <div className="space-y-1">
            {nextSteps.map((step, index) => (
              <ListCard
                key={step.id}
                {...step}
                divider={index !== nextSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
