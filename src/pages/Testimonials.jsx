// Component Imports:
import PageHero from "../components/sections/PageHero";
import CommunityTrust from "../components/sections/testimonials/CommunityTrust";
import FeaturedTestimonials from "../components/sections/testimonials/FeaturedTestimonials";
import HappyBunnyFamilies from "../components/sections/testimonials/HappyBunnyFamilies";
import CTASection from "../components/sections/CTASection";

// Image Imports:
import testimonialsCTAImage from "../assets/images/cta/testimonials-cta.webp";

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
      <CommunityTrust />
      <CTASection
        id="testimonials-cta-heading"
        eyebrow="Join Our Bunny Family"
        title="Ready to Welcome Your New Best Friend?"
        descriptions={[
          "Every bunny at Bless Bunny Rabbitry is raised with love, socialized daily, and prepared for a lifetime of companionship. Browse our available Holland Lops and Netherland Dwarfs to find the perfect addition to your family.",
        ]}
        image={testimonialsCTAImage}
        imageAlt="Happy family relaxing together with their Holland Lop rabbit in a cozy living room"
      />
    </main>
  );
}
