// Icon Imports:
import { FaArrowRight } from "react-icons/fa";

export default function CategoryCard({
  icon: Icon,
  title,
  description,
  target,
}) {
    const handleClick = () => {
        document.getElementById(target) ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`View ${title} questions`}
      className="group flex h-full w-full flex-col items-center rounded-[2rem] border border-border bg-beige px-8 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sage hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-sage/30"
    >
      {/* Icon */}
      <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-sage-light to-cream transition-transform duration-300 group-hover:scale-105">
        <Icon
          className="h-14 w-14 text-forest transition-colors duration-300 group-hover:text-forest-light"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3 className="font-serif text-3xl font-semibold text-forest leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 max-w-xs text-lg text-text">{description}</p>

      {/* Explore */}
      <div className="mt-8 flex items-center gap-3 text-xl font-medium text-clay transition-all duration-300 group-hover:gap-5 group-hover:text-forest">
        <span>Explore</span>
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </button>
  );
}
