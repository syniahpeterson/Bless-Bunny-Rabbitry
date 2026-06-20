// Component Imports:
import Gallery from "../components/sections/about/Gallery";
import OurBreeds from "../components/sections/about/OurBreeds";
import OurStory from "../components/sections/about/OurStory";
import OurValues from "../components/sections/about/OurValues";
import PageHero from "../components/sections/PageHero";

export default function About() {
  return (
    <main className="mt-24">
      <PageHero
        variant="meadow"
        eyebrow="Established 2012 • North Carolina"
        title="About Bless Bunny Rabbitry"
        description="Learn more about our family, our rabbits, and our commitment to raising healthy, well-socialized companions."
      />
      <OurStory />
      <OurValues />
      <OurBreeds />
      <Gallery />
    </main>
  );
}
