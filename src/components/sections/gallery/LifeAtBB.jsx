// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";

// Icon Imports:
import { BsArrowRight } from "react-icons/bs";

// Data Imports:
import rabbitryLifeImages from "../../../data/gallery/rabbitryLifeImages";

export default function LifeAtBB() {
  return (
    <Section variant="beige" aria-labelledby="life-at-bb-heading">
      <div className="grid lg:grid-cols-[1fr_1.5fr] items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center p-6 lg:p-8">
          <SectionHeading
            id="life-at-bb-heading"
            eyebrow="Life At The Rabbitry"
            title="More Than Just Raising Rabbits"
            descriptions={[
              "Every rabbit receives daily attention, socialization, and care. These moments offer a glimpse into the environment where our Holland Lop and Netherland Dwarf rabbits are raised and loved.",
            ]}
            align="left"
          />
          <Button
            variant="primary"
            to="/about"
            rightIcon={BsArrowRight}
            className="mt-6 self-start rounded-lg px-5 py-3 text-xs uppercase tracking-[0.15em]"
          >
            Learn More About Us
          </Button>
        </div>
        {/* Image Strip */}
        <div className="grid h-[220px] grid-cols-2 gap-1 md:grid-cols-[2.2fr_1fr_1fr_1fr] lg:h-[260px]">
          {rabbitryLifeImages.map((item, index) => (
            <img
              key={item.id}
              {...item}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
