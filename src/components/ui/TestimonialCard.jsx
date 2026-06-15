// Icon Import:
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ name, text, rating }) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
      className="rounded-3xl border border-border bg-white/80 p-8 text-center shadow-sm backdrop-blur"
    >
      <span
        aria-hidden="true"
        className="mb-4 block text-6xl leading-none text-sage"
      >
        ❝
      </span>

      <div
        aria-label={`${rating} our of 5 stars`}
        className="mb-6 flex justify-center gap-1"
      >
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className="text-clay" aria-hidden="true" />
        ))}
      </div>

      <blockquote
        itemProp="reviewBody"
        className="mx-auto max-w-xs text-lg leading-relaxed text-text"
      >
        "{text}"
      </blockquote>

      <div className="mx-auto my-6 h-px w-32 bg-border" />

      <p
        itemProp="author"
        className="font-serif text-2xl font-semibold text-forest"
      >
        {name}
      </p>
    </article>
  );
}
