// Icon Import:
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({
  name,
  text,
  rating,
  image,
  profileImage,
  location,
}) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
      className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
    >
      {/* Optional Featured Image */}
      {image ? (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={`Photo of ${name} and their rabbit`}
            loading="lazy"
            className="h-64 w-full object-cover"
          />
        </div>
      ) : (
        <div className="p-8 pb-0 text-center">
          <span
            aria-hidden="true"
            className="block text-6xl leading-none text-sage"
          >
            ❝
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        {/* Rating */}
        <div
          aria-label={`${rating} out of 5 stars`}
          className="mb-6 flex justify-center gap-1"
        >
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} className="text-clay" aria-hidden="true" />
          ))}
        </div>

        {/* Review */}
        <blockquote
          itemProp="reviewBody"
          className="text-center text-lg leading-relaxed text-text"
        >
          "{text}"
        </blockquote>

        <div className="my-6 h-px w-full bg-border" />

        {/* Author */}
        <div className="flex items-center gap-4">
          {profileImage && (
            <img
              src={profileImage}
              alt={`${name} profile`}
              loading="lazy"
              className="h-16 w-16 rounded-full object-cover border-2 border-sage-light"
            />
          )}

          <div>
            <p
              itemProp="author"
              className="font-serif text-2xl font-semibold text-forest"
            >
              {name}
            </p>

            {location && <p className="text-sm text-text/70">{location}</p>}
          </div>
        </div>
      </div>
    </article>
  );
}
