// Component Imports:
import PageHero from "../components/sections/PageHero";
import GetInTouch from "../components/sections/contact/GetInTouch";

export default function Contact() {
  return (
    <main className="mt-24">
      <PageHero
        variant="meadow"
        title="Contact Us"
        description="We'd love to hear from you and answer any questions."
      />
      <GetInTouch />
    </main>
  );
}
