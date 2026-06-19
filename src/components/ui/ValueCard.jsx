// Icon Imports:
import { FaLeaf } from "react-icons/fa";

export default function ValueCard({ icon: Icon, title, description, image }) {
  return (
    <article className="relative overflow-visible rounded-3xl bg-white shadow-sm border border-border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md my-4">
      {/* Floating Icon */}
      <div className="absolute left-1/2 top-0 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-sage shadow-md">
        <Icon aria-hidden="true" className="h-10 w-10 text-white" />
      </div>
      {/* Image */}
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={`Image of ${title}`}
          loading="lazy"
          className="h-72 w-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="px-8 py-8">
        <h3 className="font-serif text-3xl font-semibold text-forest">
          {title}
        </h3>
      </div>
      {/* Decorative Divider */}
      <div
        className="my-4 flex items-center justify-center gap-2"
        aria-hidden="true"
      >
        <div className="h-px w-8 bg-sage" />
        <FaLeaf className="text-xs text-sage" />
        <div className="h-px w-8 bg-sage" />
      </div>
      <p className="text-lg leading-relaxed text-text p-4">{description}</p>
    </article>
  );
}
