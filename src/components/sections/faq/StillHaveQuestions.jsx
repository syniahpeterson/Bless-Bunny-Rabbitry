// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";

// Image Imports:
import faqImage from "../../../assets/images/faq/faqImage.webp";

// Icon Imports:
import { FaLeaf } from "react-icons/fa";

export default function StillHaveQuestions() {
  return (
    <Section variant="white" aria-labelledby="still-have-questions-heading">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
        {/* Left Side */}
        <div className="flex flex-col justify-center mx-auto max-w-xl lg:mx-0">
          <SectionHeading
            id="still-have-questions-heading"
            eyebrow="We're Here to Help"
            title="Still Have Questions?"
            descriptions={[
              "Can't find the answer you're looking for? We'd be happy to help. Whether you have questions about our rabbits, the adoption process, rabbit care, or preparing for your new companion, we're just a message away.",
            ]}
            align="left"
          />
          <div
            className="my-8 flex items-center justify-center gap-5"
            aria-hidden="true"
          >
            <div className="h-px w-16 bg-sage" />
            <FaLeaf className="text-2xl text-sage" />
            <div className="h-px w-16 bg-sage" />
          </div>
          <Button variant="primary" to="/contact">
            Contact Us
          </Button>
          <p className="mt-4 text-sm text-text/70">
            We typically respond to inquiries within 24–48 hours.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={faqImage}
            alt="Rabbit breeder answering questions while holding a Holland Lop rabbit in a welcoming indoor setting"
            loading="lazy"
            decoding="async"
            className="h-full w-full max-w-[560px] rounded-[2rem] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          />
        </div>
      </div>
    </Section>
  );
}
