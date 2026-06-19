// Icon Imports:
import { FaLeaf } from "react-icons/fa";

export default function BreedShowcase({
  title,
  description,
  image,
  features,
  reverse = false,
}) {
  return (
    <article
      className={`grid items-center gap-10 lg:gap-16 mb-20 ${reverse ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"}`}
    >
      {/* Image */}
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <img
          src={image}
          alt={`${title} rabbit breed`}
          loading="lazy"
          className="h-full w-full rounded-[2rem] object-cover shadow-md"
        />
      </div>

      {/* Content */}
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <h3 className="font-serif text-4xl font-semibold text-forest lg:text-5xl">
          {title}
        </h3>

        {/* Decorative Divider */}
        <div className="my-5 flex items-center gap-2" aria-hidden="true">
          <div className="h-px w-8 bg-sage" />
          <FaLeaf className="text-sage text-xs" />
          <div className="h-px w-8 bg-sage" />
        </div>

        <div className="space-y-5">
          {description.map((text, index) => (
            <p key={index} className="text-lg leading-relaxed text-text">
              {text}
            </p>
          ))}
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sage">
                  <Icon aria-hidden="true" className="h-7 w-7 text-white" />
                </div>
                <p className="text-sm font-medium leading-snug text-text">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
