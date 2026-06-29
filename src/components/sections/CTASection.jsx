// Component Imports
import Section from "../layout/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

// Data Imports
import features from "../../data/features";

// Icon Imports
import { LuLeaf } from "react-icons/lu";
import { GiRabbit } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

export default function CTASection({
  id,
  eyebrow,
  title,
  descriptions,
  image,
  imageAlt,
}) {
  return (
    <Section
      variant="white"
      aria-labelledby={id}
      className="relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden lg:block"
        aria-hidden="true"
      >
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-3xl">
          <SectionHeading
            id={id}
            eyebrow={eyebrow}
            title={title}
            descriptions={descriptions}
            align="left"
          />

          {/* Decorative Divider */}
          <div className="my-8 flex items-center justify-center gap-5" aria-hidden="true">
            <div className="h-px w-16 bg-sage" />
            <LuLeaf className="text-2xl text-sage" />
            <div className="h-px w-16 bg-sage" />
          </div>

          {/* CTA Buttons */}
          <nav
            aria-label="Rabbitry actions"
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              variant="primary"
              to="/available-bunnies"
              leftIcon={GiRabbit}
              rightIcon={BsArrowRight}
              className="px-10 py-5 uppercase tracking-[0.12em] shadow-lg"
            >
              View Available Bunnies
            </Button>

            <Button
              variant="secondary"
              to="/contact"
              rightIcon={BsArrowRight}
              className="px-10 py-5 uppercase tracking-[0.12em]"
            >
              Contact Us
            </Button>
          </nav>

          {/* Feature Highlights */}
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
        </div>
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
