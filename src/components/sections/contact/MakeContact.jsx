// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ContactFeatures from "./ContactFeatures";
import ContactForm from "../../sections/contact/ContactForm";

export default function MakeContact() {
  return (
    <Section variant="white" aria-labelledby="make-contact-heading">
      <SectionHeading
        id="make-contact-heading"
        eyebrow="Let's Connect"
        title="Send Us a Message"
        descriptions={[
          "Have a question or interested in one of our rabbits? Complete the form below, and we'll be in touch as soon as possible.",
        ]}
      />

      <div className="mx-auto mt-8 grid max-w-7xl gap-10 lg:grid-cols-[420px_1fr] lg:items-stretch">
        <ContactFeatures />
        <ContactForm />
      </div>
    </Section>
  );
}
