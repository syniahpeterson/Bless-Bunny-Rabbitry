// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import FAQItem from "../../ui/FAQItem";
import Button from "../../ui/Button";

// Tool Imports:
import { Link } from "react-router-dom";

// Icon Imports:
import { CiHeart } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";

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
        <aside
          className="mx-auto mt-12 flex flex-col gap-6 rounded-[2rem] border border-border bg-white p-6 md:flex-row md:items-center md:justify-between"
          aria-label="Contact section"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-clay text-white">
              <CiHeart className="text-3xl" aria-hidden="true" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-text">
                Still have questions?
              </h3>
              <p className="text-text">
                We're happy to help! Reach out anytime.
              </p>
            </div>
          </div>

          <Button
            variant="cta"
            to="/contact"
            rightIcon={BsArrowRight}
            className="px-8 py-4 uppercase tracking-[0.15em] rounded-xl"
          >
            Contact Us
          </Button>
        </aside>
      </Section>
    </>
  );
}
