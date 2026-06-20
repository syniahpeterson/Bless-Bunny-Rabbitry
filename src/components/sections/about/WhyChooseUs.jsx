// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ListCard from "../../ui/ListCard";

// Image Imports:
import aboutFamily from "../../../assets/images/about-family.webp";

// Data Imports:
import bullets from "../../../data/aboutBullets";

// Icon Imports:
import { FaLeaf } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <Section
      variant="white"
      aria-labelledby="why-choose-us-heading"
      className="overflow-hidden"
    >
      <div className="mx-auto grid lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-16 xl:gap-20 max-w-7xl">
        {/* Left Content */}
        <div>
          <SectionHeading
            id="why-choose-us-heading"
            eyebrow="Why Families Choose Us"
            title="Trusted by Families Since 2012"
            descriptions={[
              "For more than a decade, we've focused on raising healthy, friendly rabbits while providing families with guidance and support throughout the adoption journey.",
            ]}
            align="left"
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
            {bullets.map((bullet, index) => (
              <ListCard
                key={bullet.id}
                icon={bullet.icon}
                title={bullet.title}
                description={bullet.description}
                divider={index !== bullets.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center">
          <img
            src={aboutFamily}
            alt="Happy family spending time with a Holland Lop rabbit"
            loading="lazy"
            className="w-full rounded-[1.75rem] object-cover shadow-[0_10px_40px_rgba(59,74,56,0.08)] lg:h-[920px]"
          />
        </div>
      </div>
    </Section>
  );
}
