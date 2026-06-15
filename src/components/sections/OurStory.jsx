// Component Imports:
import Section from "../layout/Section";
import SectionHeading from "../ui/SectionHeading";
import HighlightCard from "../ui/HighlightCard";

// Data Imports:
import storyHighlights from "../../data/storyHighlights";

// Image Imports:
import familyRabbit from "../../assets/images/family-rabbit.webp"

// Icon Imports:
import { PiRabbitLight } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";

export default function OurStory() {
  return (
    <Section variant="white" aria-labelledby="our-story-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div>
          <img
            src={familyRabbit}
            alt="Child holding a Holland Lop rabbit raised at Bless Bunny Rabbitry"
            className="w-full rounded-[2rem] object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div>
          <SectionHeading
            id="our-story-heading"
            eyebrow="Our Story"
            title="A Rabbitry Built Around Family & Socialization"
            descriptions={[
              "Since 2012, Bless Bunny Rabbitry has focused on raising friendly, well-socialized Holland Lop and Netherland Dwarf rabbits. Our babies are handled daily, raised with family interaction, and given the attention they need to become loving companions.",
              "We believe happy rabbits make happy families, which is why every bunny recieves individual care from the day they are born.",
            ]}
            align="left"
          />

          {/* Decorative Divider */}
          <div
            className="my-8 flex items-center justify-center gap-4"
            aria-hidden="true"
          >
            <div className="h-px w-16 bg-sage" />
            <FaHeart className="text-sage" />
            <div className="h-px w-16 bg-sage" />
          </div>

          {/* Highlights */}
          <div className="grid gap-8 md:grid-cols-2">
            {storyHighlights.map((highlight) => (
              <HighlightCard
                key={highlight.id}
                title={highlight.title}
                description={highlight.description}
                icon={highlight.icon}
              />
            ))}
          </div>

          {/* Quote Banner */}
          <aside
            className="mt-10 flex items-center justify-center gap-4 rounded-[2rem] bg-sage-light/40 px-8 py-6 text-center"
            aria-label="Bless Bunny Rabbitry mission"
          >
            <PiRabbitLight
              className="text-4xl text-forest"
              aria-hidden="true"
            />

            <p className="font-serif text-xl md:text-2xl italic text-forest">
              Every Bunny. Every day. All with love.
            </p>

            <FaHeart className="text-forest" aria-hidden="true" />
          </aside>
        </div>
      </div>
    </Section>
  );
}
