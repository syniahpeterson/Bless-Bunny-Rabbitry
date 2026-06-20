// Component Imports:
import Button from "./Button";

// Icon Imports:
import { CiHeart } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";

export default function SectionBanner({
  title,
  paragraph,
  variant,
  to,
  message,
}) {
  return (
    <aside
      className="mx-auto mt-12 overflow-hidden rounded-[2rem] border border-border bg-white px-6 py-8 shadow-sm md:px-10 md:py-8"
      aria-label={title}
    >
      <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-5 sm:flex-row lg:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-clay text-white shadow-sm">
            <CiHeart className="text-3xl" aria-hidden="true" />
          </div>

          <div>
            <h3 className="font-serif text-2xl text-forest md:text-3xl">
              {title}
            </h3>

            <p className="mt-2 max-w-xl text-text">{paragraph}</p>
          </div>
        </div>

        {/* CTA */}
        <Button
          variant="cta"
          to={to}
          rightIcon={BsArrowRight}
          className="w-full justify-center rounded-xl px-8 py-4 uppercase tracking-[0.15em] sm:w-auto lg:shrink-0"
        >
          {message}
        </Button>
      </div>
    </aside>
  );
}
