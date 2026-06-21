// Components Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import HighlightCard from "../../ui/HighlightCard";

// Image Imports:
import nutritionImage from "../../../assets/images/rabbit-care/nutrition-image.webp";

// Data Imports:
import nutritionData from "../../../data/rabbit-care/rabbitNutritionData";

// Icon Imports:
import { FaLeaf } from "react-icons/fa";

export default function Nutrition() {
  return (
    <Section variant="white" aria-labelledby="nutrition-heading">
      <div className="mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 max-w-7xl">
        {/* Left Content */}
        <div>
          <SectionHeading
            id="nutrition-heading"
            eyebrow="Nutrition & Feeding"
            title="Building a Healthy Diet for Your Rabbit"
            descriptions={[
              "A balanced diet is essential for your rabbit's health, digestion, and overall well-being. Providing the right mix of hay, fresh water, pellets, and greens helps your rabbit thrive at every stage of life.",
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
            {nutritionData.map((item) => (
              <HighlightCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/* Right Image */}
        <div className="flex items-center">
          <img
            src={nutritionImage}
            alt="Happy family spending time with a Holland Lop rabbit"
            loading="lazy"
            className="w-full rounded-[1.75rem] object-cover shadow-[0_10px_40px_rgba(59,74,56,0.08)] lg:h-[920px]"
          />
        </div>
      </div>
    </Section>
  );
}
