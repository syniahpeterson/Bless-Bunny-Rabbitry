// Component Imports
import Section from "../layout/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

// Icon Imports
import { LuLeaf } from "react-icons/lu";

export default function CTASection({
  id,
  variant = "white",

  eyebrow,
  title,
  descriptions,

  image,
  imageAlt,

  primaryButtonText,
  primaryButtonTo,
  primaryButtonLeftIcon,
  primaryButtonRightIcon,

  secondaryButtonText,
  secondaryButtonTo,
  secondaryButtonLeftIcon,
  secondaryButtonRightIcon,

  features = null,
}) {
  return (
    <Section
      variant={variant}
      aria-labelledby={id}
      className="relative overflow-hidden"
    >
      {/* Desktop Background Image */}
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block"
        aria-hidden="true"
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <SectionHeading
          id={id}
          eyebrow={eyebrow}
          title={title}
          descriptions={descriptions}
          align="left"
        />

        {/* Divider */}
        <div
          className="my-8 flex items-center justify-center gap-5"
          aria-hidden="true"
        >
          <div className="h-px w-16 bg-sage" />
          <LuLeaf className="text-2xl text-sage" />
          <div className="h-px w-16 bg-sage" />
        </div>

        {/* Buttons */}
        {(primaryButtonText || secondaryButtonText) && (
          <nav
            aria-label="Call to action"
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {primaryButtonText && (
              <Button
                variant="primary"
                to={primaryButtonTo}
                leftIcon={primaryButtonLeftIcon}
                rightIcon={primaryButtonRightIcon}
                className="px-10 py-5 uppercase tracking-[0.12em] shadow-lg"
              >
                {primaryButtonText}
              </Button>
            )}

            {secondaryButtonText && (
              <Button
                variant="secondary"
                to={secondaryButtonTo}
                leftIcon={secondaryButtonLeftIcon}
                rightIcon={secondaryButtonRightIcon}
                className="px-10 py-5 uppercase tracking-[0.12em]"
              >
                {secondaryButtonText}
              </Button>
            )}
          </nav>
        )}

        {/* Feature Highlights */}
        {features && (
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.id}
                  className={`flex flex-col items-center px-4 text-center ${
                    index !== features.length - 1
                      ? "md:border-r md:border-border"
                      : ""
                  }`}
                >
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-sage-light/50">
                    <Icon className="text-4xl text-forest" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-semibold uppercase tracking-wider text-forest">
                    {feature.text}
                  </h3>

                  <p className="mt-2 text-text">{feature.subtext}</p>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Mobile Image */}
      <div className="relative mt-16 lg:hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="w-full rounded-[2rem] object-cover"
        />
      </div>
    </Section>
  );
}
