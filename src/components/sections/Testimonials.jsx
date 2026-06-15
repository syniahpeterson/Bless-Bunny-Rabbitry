// Component Imports:
import Section from "../layout/Section";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";

// Data Imports:
import testimonials from "../../data/testimonials";

export default function Testimonials() {
  const { reviews, gallery } = testimonials;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bless Bunny Rabbitry",
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
    })),
  };

  return (
    <Section
      variant="sage"
      aria-labelledby="testimonials-heading"
      className="overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <SectionHeading
        id="testimonials-heading"
        eyebrow="Happy Families Across North Carolina"
        title="Loved By Rabbit Owners Since 2012"
        descriptions={[
          "Families throughout North Carolina have welcomed Bless Bunny Rabbitry rabbits into their homes. Here's what some of them have to say.",
        ]}
        theme="dark"
      />

      {/* Reviews */}
      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {reviews.map((review) => (
          <TestimonialCard key={review.id} {...review} />
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((image) => (
          <figure
            key={image.id}
            className="overflow-hidden rounded-3xl border border-border bg-white"
          >
            <img
              src={image.image}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/4] w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </Section>
  );
}
