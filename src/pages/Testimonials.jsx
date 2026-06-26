// Component Imports:
import PageHero from "../components/sections/PageHero";
import FeaturedTestimonials from "../components/sections/testimonials/FeaturedTestimonials";
import HappyBunnyFamilies from "../components/sections/testimonials/HappyBunnyFamilies";

export default function Testimonials() {
  return (
    <main className="mt-24">
      <PageHero
        variant="group"
        eyebrow="Kind Words From Families"
        title="Hear From Families Who Welcomed a Bunny Home"
        description="Nothing means more to us than seeing our rabbits become cherished members of loving families. Read what past bunny owners have shared about their experience with Bless Bunny Rabbitry."
      />
      <FeaturedTestimonials />
      <HappyBunnyFamilies />
    </main>
  );
}
