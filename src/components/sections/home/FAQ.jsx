// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import FAQItem from "../../ui/FAQItem";
import Button from "../../ui/Button";
import SectionBanner from "../../ui/SectionBanner";

// Tool Imports:
import { Link } from "react-router-dom";

// Data Imports:
import faqData from "../../../data/faqData";

// Image Imports:
import faqRabbit1 from "../../../assets/images/faq-rabbit-1.webp";
import faqRabbit2 from "../../../assets/images/faq-rabbit-2.webp";

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Section variant="beige" aria-labelledby="faq-heading">
        <SectionHeading
          id="faq-heading"
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know"
          descriptions={[
            "Have questions about our rabbits, adoption process, or care philosophy? We've answered some of the questions we hear most often.",
          ]}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* FAQ List */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FAQItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>

          {/* Image */}
          <div>
            <img
              src={faqRabbit1}
              alt="Holland Lop rabbit sitting indoors"
              loading="lazy"
              className="w-full rounded-[2rem] object-cover shadow-md mb-4"
            />
            <img
              src={faqRabbit2}
              alt="Holland Lop rabbit sitting indoors"
              loading="lazy"
              className="w-full rounded-[2rem] object-cover shadow-md"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <SectionBanner
          title="Still have questions?"
          paragraph="We're happy to help! Reach out anytime."
          to="/contact"
          message="Contact Us"
        />
      </Section>
    </>
  );
}
