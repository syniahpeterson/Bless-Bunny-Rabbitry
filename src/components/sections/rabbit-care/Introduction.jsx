// Component Imports:
import Section from "../../layout/Section"
import SectionHeading from "../../ui/SectionHeading"
import HighlightCard from "../../ui/HighlightCard"

// Image Imports:
import introductionImage from "../../../assets/images/rabbit-care/introduction-image.webp"

// Data Imports:
import IntroItems from "../../../data/rabbit-care/rabbitCareIntro"

// Icon Imports:
import { FaLeaf } from "react-icons/fa"

export default function Introduction() {
  return (
    <Section variant="white" aria-labelledby="introduction-heading">
      <div className="mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 max-w-7xl">
        {/* Left Image */}
        <div className="flex items-center">
          <img
            src={introductionImage}
            alt="Happy family spending time with a Holland Lop rabbit"
            loading="lazy"
            className="w-full rounded-[1.75rem] object-cover shadow-[0_10px_40px_rgba(59,74,56,0.08)] lg:h-[920px]"
          />
        </div>

        {/* Right Content */}
        <div>
          <SectionHeading
            id="introduction-heading"
            eyebrow="Rabbit Care Guide"
            title="Everything You Need to Help Your Rabbit Thrive"
            descriptions={[
              "Rabbits are intelligent, social companions that require proper housing, nutrition, exercise, and daily interaction. This guide covers the essentials every owner should know before bringing a bunny home.",
            ]}
          />
          {/* Decorative Divider */}
          <div
            className="mb-10 mt-4 flex justify-center items-center gap-2"
            aria-hidden="true"
          >
            <div className="h-px w-10 bg-sage" />
            <FaLeaf className="text-sm text-sage" />
            <div className="h-px w-10 bg-sage" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {IntroItems.map((item) => (
                <HighlightCard
                    key={item.id}
                    {...item}
                />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
