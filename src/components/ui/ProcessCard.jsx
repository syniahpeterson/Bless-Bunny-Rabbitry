// Icon Imports:
import { FaLeaf } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export default function ProcessCard({
  number,
  icon: Icon,
  title,
  description,
  showArrow,
}) {
  return (
    <div className="relative">
      {/* Desktop connector */}
      {showArrow && (
        <div
          className="hidden xl:flex absolute top-[132px] -right-10 z-20 items-center gap-2"
          aria-hidden="true"
        >
          <div className="w-10 border-t-2 border-dashed border-forest-light" />
          <BsArrowRight className="text-3xl text-forest-light" />
        </div>
      )}
      <article className="relative h-full rounded-[2rem] bg-white px-8 pb-10 pt-16 text-center shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-border/40 transition-all duration-300 hover:-translate-y-1">
        <div className="absolute -top-8 left-1/2 flex h-18 w-18 -translate-x-1/2 items-center justify-center rounded-full bg-sage text-4xl font-serif font-bold text-white shadow-md">
          {number}
        </div>
        <div className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-cream">
          <Icon
            className="h-16 w-16 text-forest-light stroke-[1.5]"
            aria-hidden="true"
          />
        </div>
        <h3 className="font-serif text-4xl font-semibold leading-tight text-forest">
          {title}
        </h3>
        <div
          className="my-6 flex items-center justify-center gap-3"
          aria-hidden="true"
        >
          <div className="h-px w-16 bg-sage" />
          <FaLeaf className="text-sm text-sage" />
          <div className="h-px w-16 bg-sage" />
        </div>
        <p className="mx-auto max-w-xs text-lg leading-9 text-text">
          {description}
        </p>
      </article>
    </div>
  );
}
