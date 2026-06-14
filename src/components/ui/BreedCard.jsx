// Icon Imports:
import { LuRabbit } from "react-icons/lu";

export default function BreedCard({
  breed,
  image,
  description,
  features,
  reverse,
}) {
  return (
    <article
      className={`overflow-hidden rounded-[32px] border border-border bg-cream shadow-lg grid lg:grid-cols-2 transition-all duration-300 hover:-translate-y-1`}
    >
      {/* Image */}
      <div className={reverse ? "lg:order-2" : ""}>
        <img
          src={image}
          alt={`Picture of ${breed}`}
          loading="lazy"
          decoding="async"
          className="h-[320px] lg:h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 md:p-12">
        {/* Rabbit Icon */}
        <div className="mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-sage-light text-forest">
          <LuRabbit className="text-3xl" aria-hidden="true" />
        </div>
        {/* Title */}
        <h3 className="text-3xl md:text-5xl font-bold text-forest">{breed}</h3>

        {/* Divider */}
        <div className="mt-4 mb-6 h-[2px] w-20 bg-sage" />

        {/* Description */}
        <p className="mb-8 max-w-prose leading-8 text-text">{description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <li
                key={feature.id}
                className="flex items-center gap-4 border-t border-border py-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-forest shrink-0">
                  <Icon aria-hidden="true" />
                </div>

                <span className="font-medium text-text">{feature.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
