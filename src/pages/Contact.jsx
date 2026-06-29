// Component Imports:
import PageHero from "../components/sections/PageHero";
import ContactMethods from "../components/sections/contact/ContactMethods";
import GetInTouch from "../components/sections/contact/GetInTouch";
import MakeContact from "../components/sections/contact/MakeContact";
import VisitPickupInfo from "../components/sections/contact/VisitPickupInfo";
import WhatToExpect from "../components/sections/contact/WhatToExpect";
import CTASection from "../components/sections/CTASection";

// Icon Imports:
import { GiRabbit } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

import contactCTAImage from "../assets/images/cta/contact-cta.webp";

export default function Contact() {
  return (
    <main className="mt-24">
      <PageHero
        variant="meadow"
        title="Contact Us"
        description="We'd love to hear from you and answer any questions."
      />
      <GetInTouch />
      <ContactMethods />
      <WhatToExpect />
      <MakeContact />
      <VisitPickupInfo />
      <CTASection
        id="contact-cta-heading"
        eyebrow="Ready to Meet Your New Companion?"
        title="Your Perfect Bunny Is Waiting"
        descriptions={[
          "Browse our available Holland Lop and Netherland Dwarf rabbits and take the next step toward welcoming a healthy, loving companion into your home.",
        ]}
        image={contactCTAImage}
        imageAlt="Happy family welcoming their new rabbit"
        primaryButtonText="View Available Bunnies"
        primaryButtonTo="/available-bunnies"
        primaryButtonLeftIcon={GiRabbit}
        primaryButtonRightIcon={BsArrowRight}
        secondaryButtonText="Rabbit Care"
        secondaryButtonTo="/rabbit-care"
        secondaryButtonRightIcon={BsArrowRight}
      />
    </main>
  );
}
