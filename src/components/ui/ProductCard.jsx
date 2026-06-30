// Icon Imports
import { FaCheckCircle, FaStore, FaTag, FaHeart } from "react-icons/fa";

export default function ProductCard({
  name,
  image,
  alt,
  featured,
  badge,
  priceRange,
  stores,
  description,
  whyRecommended,
  pros,
  note,
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-cream">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col p-8">
        {/* Badge */}
        {badge && (
          <span className="mb-4 w-fit rounded-full bg-sage-light px-4 py-1 text-sm font-semibold text-forest">
            {badge}
          </span>
        )}

        {/* Product Name */}
        <h3 className="font-serif text-2xl font-semibold text-forest">
          {name}
        </h3>

        {/* Price */}
        {priceRange && (
          <div className="mt-2 flex items-center gap-2 text-clay">
            <FaTag aria-hidden="true" />
            <span>{priceRange}</span>
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="mt-6 leading-relaxed text-text">{description}</p>
        )}

        {/* Why Recommended */}
        {whyRecommended && (
          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2 font-semibold text-forest">
              <FaHeart className="text-sage" aria-hidden="true" />
              Why We Recommend It
            </div>

            <p className="text-text">{whyRecommended}</p>
          </div>
        )}

        {/* Pros */}
        {pros?.length > 0 && (
          <ul className="mt-8 space-y-3">
            {pros.map((pro) => (
              <li key={pro} className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-sage" aria-hidden="true" />

                <span>{pro}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Stores */}
        {stores?.length > 0 && (
          <div className="mt-8">
            <div className="mb-2 flex items-center gap-2 font-semibold text-forest">
              <FaStore className="text-sage" aria-hidden="true" />
              Available At
            </div>

            <div className="flex flex-wrap gap-2">
              {stores.map((store) => (
                <span
                  key={store}
                  className="rounded-full bg-cream px-3 py-1 text-sm text-text"
                >
                  {store}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Note */}
        {note && (
          <div className="mt-8 rounded-2xl bg-sage-light/40 p-4">
            <p className="text-sm leading-relaxed text-text">
              <strong>Note:</strong> {note}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
