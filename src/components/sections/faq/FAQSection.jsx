// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import FAQItem from "../../ui/FAQItem";

export default function FAQSection({
  id,
  eyebrow,
  title,
  descriptions,
  faqs,
  variant = "white",
}) {
  return (
    <Section id={id} variant={variant} aria-labelledby={`${id}-heading`}>
      <SectionHeading
        id={`${id}-heading`}
        eyebrow={eyebrow}
        title={title}
        descriptions={descriptions}
      />

      <div className="mx-auto mt-16 max-w-5xl space-y-4">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  );
}
