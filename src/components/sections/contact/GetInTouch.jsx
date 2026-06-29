// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";

// Image Imports:
import getInTouchImage from "../../../assets/images/contact/get-in-touch.webp";

// Icon Imports:
import { FaLeaf } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <Section variant="white" aria-labelledby="get-in-touch-heading">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
        {/* Left Side */}
        <div className="flex flex-col justify-center mx-auto max-w-xl lg:mx-0">
          <SectionHeading
            id="get-in-touch-heading"
            eyebrow="We're Here to Help"
            title="We'd Love to Hear From You"
            descriptions={[
              "Whether you're interested in adopting a bunny, have questions about rabbit care, or simply want to learn more about our rabbitry, we're happy to help. Reach out anytime and we'll get back to you as soon as possible.",
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
            Send Us a Message
          </Button>
          <p className="mt-4 text-sm text-text/70">
            We typically respond to inquiries within 24-48 hours.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={getInTouchImage}
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
