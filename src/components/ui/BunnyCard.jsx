// Icon Imports:
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { PiPawPrintDuotone } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";

export default function BunnyCard({
  name,
  breed,
  gender,
  availableDate,
  image,
  price,
}) {
  return (
    <article
      className="h-full overflow-hidden rounded-[2rem] border border-border bg-cream shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* SEO */}
      <meta itemProp="name" content={name} />
      <meta itemProp="category" content={breed} />
      <meta itemProp="availability" content="InStock" />

      {/* Screen Reader Description */}
      <p className="sr-only">
        {name} is a {gender.toLowerCase()} {breed} rabbit available in{" "}
        {availableDate} for ${price}.
      </p>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`${name}, a ${gender.toLowerCase()} ${breed} rabbit available for adoption`}
          className="h-[320px] w-full object-cover"
          loading="lazy"
          itemProp="image"
        />
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Name + Price */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <h3 className="font-serif text-4xl font-semibold text-forest">
            {name}
          </h3>

          <span
            className="rounded-full bg-sage-light px-4 py-2 text-base font-bold text-forest"
            aria-label={`Price ${price} dollars`}
          >
            ${price}
          </span>
        </div>

        {/* Bunny Details */}
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-forest"
              aria-hidden="true"
            >
              <PiPawPrintDuotone />
            </span>

            <span className="text-text">
              <strong>Breed:</strong> {breed}
            </span>
          </li>

          <li className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-forest"
              aria-hidden="true"
            >
              {gender === "Male" ? <IoIosMale /> : <IoIosFemale />}
            </span>

            <span className="text-text">
              <strong>Gender:</strong> {gender}
            </span>
          </li>

          <li className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-forest"
              aria-hidden="true"
            >
              <IoCalendarOutline />
            </span>

            <span className="text-text">
              <strong>Ready:</strong> {availableDate}
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
}
