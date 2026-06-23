// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import SectionBanner from "../../ui/SectionBanner";
import TestimonialCard from "../../ui/TestimonialCard";

// Data Imports:
import featuredTestimonials from "../../../data/testimonials/featuredTestimonials";

export default function FeaturedTestimonials() {
  return (
    <Section variant="white" aria-labelledby="featured-testimonials-heading">
      <SectionHeading
        id="featured-testimonials-heading"
        eyebrow="Featured Testimonials"
        title="What Our Bunny Families Say"
        description="We're so grateful for the amazing families who have welcomed our bunnies into their homes. Here's what they have to say about their experience."
      />

      <div className="grid gap-8 lg:grid-cols-3 my-10">
        {featuredTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>

      <SectionBanner
        title="Want to leave a review?"
        paragraph="Every review means the world to us. Thank you for being part of the Bless Bunny Rabbitry family!"
        to="/contact"
        message="Leave A Review"
      />
    </Section>
  );
}
