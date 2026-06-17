// Component Imports
import Section from "../layout/Section";
import SectionHeading from "./SectionHeading";
import { Link } from "react-router-dom";

// Image Imports
import bunnyImage from "../../assets/images/cta-bunny.webp";

// Data Imports
import features from "../../data/features";

// Icon Imports
import { GiRabbit } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { LuLeaf } from "react-icons/lu";

export default function FinalCTA() {
  return (
    <Section
      variant="white"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden"
    >
      {/* SEO */}
      <section itemScope itemType="https://schema.org/Organization">
        <meta
          itemProp="description"
          content="Family-raised Holland Lop and Netherland Dwarf rabbits from Bless Bunny Rabbitry."
        />

        {/* Background Image */}
        <div
          className="absolute inset-y-0 right-0 hidden lg:block w-[58%] overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={bunnyImage}
            alt="Holland Lop rabbit sitting on a cozy blanket"
            className="h-full w-full object-cover object-center"
          />

          {/* Cream Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="max-w-3xl">
            <SectionHeading
              id="final-cta-heading"
              eyebrow="Ready to Welcome a Bunny Home?"
              title="Bring Home a Friendly, Family-Raised Companion"
              descriptions={[
                "Explore our available Holland Lop and Netherland Dwarf rabbits or contact us with any questions. We'd love to help you find the perfect addition to your family.",
              ]}
              align="left"
            />

            {/* Decorative Divider */}
            <div className="my-8 flex items-center gap-5" aria-hidden="true">
              <div className="h-px w-16 bg-sage" />
              <LuLeaf className="text-2xl text-sage" />
              <div className="h-px w-16 bg-sage" />
            </div>

            {/* CTA Buttons */}
            <nav
              aria-label="Rabbitry actions"
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/available-bunnies"
                aria-label="View available bunnies"
                className="inline-flex items-center justify-center gap-4 rounded-2xl bg-forest px-10 py-5 text-base font-medium uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-forest-light"
              >
                <GiRabbit className="text-3xl" aria-hidden="true" />

                <span>View Available Bunnies</span>

                <BsArrowRight className="text-xl" aria-hidden="true" />
              </Link>

              <Link
                to="/contact"
                aria-label="Contact Bless Bunny Rabbitry"
                className="inline-flex items-center justify-center gap-4 rounded-2xl border border-forest/40 bg-white/70 px-10 py-5 text-base font-medium uppercase tracking-[0.12em] text-forest backdrop-blur-sm transition-all duration-300 hover:bg-sage-light/30"
              >
                Contact Us
                <BsArrowRight className="text-xl" aria-hidden="true" />
              </Link>
            </nav>

            {/* Feature Highlights */}
            <div className="mt-20 grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.id}
                    className={`flex flex-col items-center text-center px-4${index !== features.length - 1 ? "md:border-r md:border-border" : ""}`}
                  >
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-sage-light/50">
                      <Icon
                        className="text-4xl text-forest"
                        aria-hidden="true"
                      />
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
            src={bunnyImage}
            alt="Friendly Holland Lop rabbit from Bless Bunny Rabbitry"
            loading="lazy"
            className="w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>
    </Section>
  );
}
