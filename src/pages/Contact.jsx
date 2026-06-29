// Component Imports:
import PageHero from "../components/sections/PageHero";
import ContactMethods from "../components/sections/contact/ContactMethods";
import GetInTouch from "../components/sections/contact/GetInTouch";
import MakeContact from "../components/sections/contact/MakeContact";
import VisitPickupInfo from "../components/sections/contact/VisitPickupInfo";
import WhatToExpect from "../components/sections/contact/WhatToExpect";

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
    </main>
  );
}
