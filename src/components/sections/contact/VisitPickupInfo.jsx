// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import FeatureCard from "../../ui/FeatureCard";

// Data Imports:
import pickupFeatures from "../../../data/contact/pickupFeatures";

// Image Imports:
import visitPickupImage from "../../../assets/images/contact/visit-pickup.webp";

export default function VisitPickupInfo() {
  return (
    <Section variant="beige" aria-labelledby="visit-pickup-info-heading">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex justify-center lg:justify-end">
          <img
            src={visitPickupImage}
            alt="Rabbit breeder answering questions while holding a Holland Lop rabbit in a welcoming indoor setting"
            loading="lazy"
            decoding="async"
            className="h-full w-full max-w-[560px] rounded-[2rem] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          />
        </div>
        <div>
          <SectionHeading
            id="visit-pickup-info-heading"
            eyebrow="Visit & Pickup"
            title="Bringing Your Bunny Home"
            descriptions={[
              "We're committed to making the pickup experience simple, safe, and enjoyable. Here's what you can expect when it's time to welcome your new bunny home.",
            ]}
          />
          <div className="mt-8 grid md:grid-cols-2 gap-6 mx-auto">
            {pickupFeatures.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
