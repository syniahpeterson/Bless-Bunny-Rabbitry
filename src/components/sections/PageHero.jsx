// Image Imports:
import meadowImage from "../../assets/images/page-hero-meadow.webp";
import bunnyImage from "../../assets/images/page-hero-bunny.webp";
import bunniesImage from "../../assets/images/page-hero-bunnies.webp"
import groupImage from "../../assets/images/page-hero-group.webp"

export default function PageHero({
  title,
  description,
  eyebrow,
  variant = "meadow",
}) {
  const backgrounds = {
    meadow: meadowImage,
    bunny: bunnyImage,
    bunnies: bunniesImage,
    group: groupImage,
  };

  const hasImage = variant !== "solid";

  return (
    <section
      aria-labelledby="page-hero-heading"
      className={`relative flex min-h-[65vh] items-center overflow-hidden ${
        variant === "solid" ? "bg-forest" : ""
      }`}
    >
      {/* Background Image */}
      {hasImage && (
        <>
          <img
            src={backgrounds[variant]}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover ${
              variant === "bunny" ? "object-right" : "object-center"
            }`}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/80">
              {eyebrow}
            </p>
          )}

          <h1
            id="page-hero-heading"
            className="text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
