// Image Imports:
import image from "../../assets/images/home-hero-bg.webp";

// Tool Imports:
import { Link } from "react-router-dom";

// Icon Imports:
import { LuRabbit } from "react-icons/lu";

// Data Imports:
import indicators from "../../data/trustIndicators";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="relative min-h-screen overflow-hidden bg-cover bg-[65%_center] md:bg-[75%_center] lg:bg-[80%_center] bg-no-repeat"
    >
      {/* Accessibility description for background image */}
      <span className="sr-only">
        Pedigreed Holland Lop rabbit raised by Bless Bunny Rabbitry in North
        Carolina.
      </span>

      {/* Mobile Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#f8f5ef]/85 via-[#f8f5ef]/25 to-transparent md:hidden"
      />

      {/* Desktop Overlay */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#f8f5ef]/92 via-[#f8f5ef]/40 via-[42%] to-transparent to-[72%]"
      />

      {/* Bottom Fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 pt-28 pb-12 sm:px-8 lg:px-16 lg:pt-36">
        <div className="grid w-full items-center lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-[620px]">
            {/* Decorative Line */}
            <div aria-hidden="true" className="mb-8 flex items-center">
              <div className="h-px w-20 bg-forest/30" />
            </div>

            {/* Main SEO Heading */}
            <h1
              id="hero-heading"
              className="text-[3.25rem] font-medium leading-[0.95] tracking-[-0.03em] text-forest sm:text-6xl lg:text-7xl"
            >
              North Carolina Holland Lop & Netherland Dwarf Rabbit Breeder
            </h1>

            {/* Supporting Copy */}
            <p className="mt-8 max-w-[500px] text-base leading-relaxed text-warm-gray sm:text-lg">
              Since 2012, Bless Bunny Rabbitry has specialized in pedigreed
              Holland Lop and Netherland Dwarf rabbits raised with love, daily
              socialization, and family interaction. We proudly provide
              friendly, healthy pet rabbits for families throughout North
              Carolina.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/available-bunnies"
                className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-forest px-8 font-medium text-white shadow-lg transition hover:-translate-y-0.5 sm:w-auto"
              >
                View Available Bunnies
                <LuRabbit aria-hidden="true" />
              </Link>

              <Link
                to="/about"
                className="flex h-14 w-full items-center justify-center rounded-xl border border-forest px-8 font-medium text-forest transition hover:bg-white/70 sm:w-auto"
              >
                Learn About Our Rabbitry
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-forest/10 pt-10 md:grid-cols-4">
              {indicators.map((indicator) => {
                const Icon = indicator.icon;

                return (
                  <div
                    key={indicator.id}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-forest/30 md:h-16 md:w-16">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 text-forest md:h-7 md:w-7"
                      />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-wide text-forest md:text-sm">
                      {indicator.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Empty Right Side */}
          <div />
        </div>
      </div>
    </section>
  );
}
