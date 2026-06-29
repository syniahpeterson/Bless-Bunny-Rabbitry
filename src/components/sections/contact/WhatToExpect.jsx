// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ProcessCard from "../../ui/ProcessCard";

// Data Imports:
import contactProcess from "../../../data/contact/contactProcess";

export default function WhatToExpect() {
  return (
    <Section variant="sage" aria-labelledby="what-to-expect-heading">
      <SectionHeading
        id="what-to-expect-heading"
        eyebrow="Simple & Stress-Free"
        title="What to Expect"
        descriptions={[
          "From your first message to bringing home your new bunny, we're here to make the adoption process simple, transparent, and enjoyable.",
        ]}
        theme="dark"
      />
      <div className="mt-16 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {contactProcess.map((item) => (
          <ProcessCard key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
}
