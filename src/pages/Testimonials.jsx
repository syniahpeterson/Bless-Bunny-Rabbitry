// Component Imports:
import PageHero from "../components/sections/PageHero";
import CommunityTrust from "../components/sections/testimonials/CommunityTrust";
import FeaturedTestimonials from "../components/sections/testimonials/FeaturedTestimonials";
import HappyBunnyFamilies from "../components/sections/testimonials/HappyBunnyFamilies";
import CTASection from "../components/sections/CTASection";

// Image Imports:
import testimonialsCTAImage from "../assets/images/cta/testimonials-cta.webp";

// Icon Imports:
import { GiRabbit } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

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
        eyebrow="Ready to Join Our Rabbitry Family?"
        title="Start Your Adoption Journey Today"
        descriptions={[
          "See why so many families have trusted Bless Bunny Rabbitry and find your perfect bunny companion.",
        ]}
        image={testimonialsCTAImage}
        imageAlt="Happy family holding their rabbit"
        primaryButtonText="View Available Bunnies"
        primaryButtonTo="/available-bunnies"
        primaryButtonLeftIcon={GiRabbit}
        primaryButtonRightIcon={BsArrowRight}
        secondaryButtonText="Contact Us"
        secondaryButtonTo="/contact"
        secondaryButtonRightIcon={BsArrowRight}
      />
    </main>
  );
}
