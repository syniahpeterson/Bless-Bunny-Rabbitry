// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ContactMethodCard from "../../ui/ContactMethodCard";

// Data Imports:
import contactMethods from "../../../data/contact/contactMethods";

export default function ContactMethods() {
  return (
    <Section variant="beige" aria-labelledby="contact-method-heading">
      <SectionHeading
        id="contact-method-heading"
        eyebrow="Contact Information"
        title="Choose the Best Way to Reach Us"
        descriptions={[
          "Whether you prefer email, social media, or simply want to know when to expect a response, we're here to help and look forward to hearing from you.",
        ]}
      />
      <div className="mx-auto mt-16 gap-8 grid md:grid-cols-2 xl:grid-cols-4">
        {contactMethods.map((method) => (
          <ContactMethodCard key={method.id} {...method} />
        ))}
      </div>
    </Section>
  );
}
