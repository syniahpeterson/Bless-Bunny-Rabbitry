// Component Imports:
import FAQCategories from "../components/sections/faq/FAQCategories";
import PageHero from "../components/sections/PageHero";
import FAQSection from "../components/sections/faq/FAQSection";
import CTASection from "../components/sections/CTASection";

// Data Imports:
import adoptionFAQs from "../data/faq/adoptionFAQs";
import feedingNutritionFAQs from "../data/faq/feedingNutritionFAQs";
import generalQuestionsFAQs from "../data/faq/generalQuestionsFAQs";
import healthCareFAQs from "../data/faq/healthCareFAQs";
import preparingHomeFAQs from "../data/faq/preparingHomeFAQs";
import rabbitryPoliciesFAQs from "../data/faq/rabbitryPoliciesFAQs";
import StillHaveQuestions from "../components/sections/faq/StillHaveQuestions";

// Image Imports:
import faqCTAImage from "../assets/images/cta/faq-cta.webp";

export default function FAQ() {
  return (
    <main className="mt-24">
      <PageHero
        variant="solid"
        eyebrow="Frequently Asked Questions"
        title="Everything You Need to Know"
        description="Answers to the questions we hear most often from prospective bunny owners."
      />
      <FAQCategories />
      <FAQSection
        id="adoption-process"
        variant="white"
        eyebrow="Adoption Process"
        title="Adoption Process Questions"
        descriptions={[
          "Everything you need to know before bringing your bunny home.",
        ]}
        faqs={adoptionFAQs}
      />
      <FAQSection
        id="preparing-your-home"
        variant="cream"
        eyebrow="Preparing Your Home"
        title="Preparing Your Home Questions"
        descriptions={[
          "Everything you need to create a safe, comfortable, and welcoming environment before bringing your bunny home.",
        ]}
        faqs={preparingHomeFAQs}
      />

      <FAQSection
        id="feeding-nutrition"
        variant="white"
        eyebrow="Feeding & Nutrition"
        title="Feeding & Nutrition Questions"
        descriptions={[
          "Learn the essentials of a healthy rabbit diet, including hay, pellets, fresh greens, and proper hydration.",
        ]}
        faqs={feedingNutritionFAQs}
      />

      <FAQSection
        id="health-care"
        variant="cream"
        eyebrow="Health & Care"
        title="Health & Care Questions"
        descriptions={[
          "Find answers about grooming, exercise, veterinary care, and keeping your rabbit happy and healthy.",
        ]}
        faqs={healthCareFAQs}
      />

      <FAQSection
        id="rabbitry-policies"
        variant="white"
        eyebrow="Rabbitry Policies"
        title="Rabbitry Policies & Adoption Information"
        descriptions={[
          "Learn more about reservations, pickup options, payment information, and other important rabbitry policies.",
        ]}
        faqs={rabbitryPoliciesFAQs}
      />

      <FAQSection
        id="general-questions"
        variant="cream"
        eyebrow="General Questions"
        title="General Rabbit Questions"
        descriptions={[
          "Browse answers to common questions about our rabbits, breeds, and what makes Bless Bunny Rabbitry unique.",
        ]}
        faqs={generalQuestionsFAQs}
      />

      <StillHaveQuestions />

      <CTASection
        id="faq-cta-heading"
        eyebrow="Ready to Find Your Bunny?"
        title="Your Perfect Companion Is Waiting"
        descriptions={[
          "Whether you're looking for a playful Holland Lop or a charming Netherland Dwarf, we're here to help you find the perfect bunny for your family. Browse our available rabbits and begin your adoption journey today.",
        ]}
        image={faqCTAImage}
        imageAlt="Happy family spending time with their Holland Lop rabbit in a cozy living room"
      />
    </main>
  );
}
