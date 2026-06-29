// Icon Imports:
import { FaHeart } from "react-icons/fa";
import { SiCoderabbit } from "react-icons/si";

// Component Imports:
import contactFeatures from "../../../data/contact/contactFeatures";
import ListCard from "../../ui/ListCard";

export default function ContactFeatures() {
  return (
    <aside className="flex h-full flex-col rounded-[2rem] border border-border bg-gradient-to-br from-cream via-beige to-sage-light/40 p-8 shadow-sm lg:p-10">
      <div className="flex justify-center">
        {/* Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sage-light to-cream">
          <SiCoderabbit className="h-12 w-12 text-forest" aria-hidden="true" />
        </div>
      </div>
      {/* Title */}
      <h3 className="mt-8 text-center text-3xl text-forest">
        We're Here to Help
      </h3>

      {/* Divider */}
      <div
        className="my-6 flex items-center justify-center gap-4"
        aria-hidden="true"
      >
        <div className="h-px w-20 bg-border" />
        <FaHeart className="text-lg text-sage" />
        <div className="h-px w-20 bg-border" />
      </div>

      {/* Description */}
      <p className="mx-auto max-w-md text-center text-lg leading-7 text-text">
        Our goal is to make the adoption process simple, supportive, and
        stress-free. We're happy to answer your questions!
      </p>

      {/* Features */}
      <div className="mt-2 space-y-1">
        {contactFeatures.map((feature) => (
          <ListCard key={feature.id} {...feature} />
        ))}
      </div>
    </aside>
  );
}
