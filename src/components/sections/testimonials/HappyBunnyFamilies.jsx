// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import FamilyMomentCard from "../../ui/FamilyMomentCard";

import happyFamilies from "../../../data/testimonials/happyFamilies";

export default function HappyBunnyFamilies() {
  return (
    <Section variant="beige" aria-labelledby="happy-bunny-families-heading">
      <SectionHeading
        id="happy-bunny-families-heading"
        eyebrow="Forever Homes"
        title="Bunnies Living Their Best Lives"
        descriptions={[
          "We love receiving updates from families and watching our rabbits grow into beloved companions. Here are a few special moments shared by our bunny families.",
        ]}
      />
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {happyFamilies.map((item) => (
          <FamilyMomentCard key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
}
