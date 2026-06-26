// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import FeatureCard from "../../ui/FeatureCard";

// Data Imports:
import trustStats from "../../../data/testimonials/trustStats";

export default function CommunityTrust() {
  return (
    <Section variant="sage" aria-labelledby="community-trust-heading">
      <SectionHeading
        id="community-trust-heading"
        eyebrow="Trusted by Families"
        title="A Reputation Built on Love, Care, and Quality"
        descriptions={[
          "Every rabbit is raised with compassion, handled daily, and placed with families who are ready to provide a loving forever home. We're honored to be part of so many happy beginnings.",
        ]}
        theme="dark"
      />
      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {trustStats.map((stat) => (
          <FeatureCard key={stat.id} {...stat} />
        ))}
      </div>
    </Section>
  );
}
