// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import CategoryCard from "../../ui/CategoryCard";

// Data Imports:
import faqCategories from "../../../data/faq/faqCategories";

export default function FAQCategories() {
  return (
    <Section variant="white" aria-labelledby="faq-categories-heading">
      <SectionHeading
        id="faq-categories-heading"
        eyebrow="Find Answers Quickly"
        title="Browse Questions by Topic"
        descriptions={[
          "Whether you're preparing for your first bunny or already have one reserved, we've answered the questions we hear most often.",
        ]}
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
        {faqCategories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </Section>
  );
}
