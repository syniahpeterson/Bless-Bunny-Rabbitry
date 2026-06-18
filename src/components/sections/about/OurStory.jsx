// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import StatCard from "../../ui/StatCard";

// Image Imports:
import storyImage from "../../../assets/images/about-story.webp";

// Data Imports:
import stats from "../../../data/aboutStats";

// Icon Imports:
import { LuLeaf } from "react-icons/lu";

export default function OurStory() {
  return (
    <Section variant="white" aria-labelledby="our-story-heading">
      <div className="mx-auto max-w-7xl">
        {/* Top Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Image */}
          <div>
            <img
              src={storyImage}
              alt="Woman holding a Holland Lop rabbit at Bless Bunny Rabbitry"
              loading="lazy"
              className="w-full rounded-[2rem] object-cover shadow-md"
            />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              id="our-story-heading"
              eyebrow="Our Story"
              title="A Family Passion Since 2012"
              descriptions={[
                "Bless Bunny Rabbitry was founded in 2012 with a simple goal: to raise healthy, friendly rabbits that would become cherished companions for families.",
                "Located in North Carolina, we specialized in pedigreed Holland Lops and Netherland Dwarfs. Every rabbit receives daily interaction and socialization from an early age, helping them develop the calm and affectionate personalities our families love.",
                "Over the years, we've had the privelege of connecting countless rabbits with loving homes and sharing our passion for these wonderful animals with families throughout the region.",
              ]}
              align="left"
            />

            {/* Decorative Divider */}
            <div className="mt-6 flex items-center gap-4" aria-hidden="true">
              <div className="h-px w-20 bg-sage" />
              <LuLeaf className="text-3xl text-sage" />
              <div className="h-px w-20 bg-sage" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
