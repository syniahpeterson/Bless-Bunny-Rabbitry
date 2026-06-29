// Icon Imports:
import { FaArrowRight, FaLeaf } from "react-icons/fa";

export default function ContactMethodCard({
  icon: Icon,
  title,
  description,
  action,
  href,
  newTab = false,
}) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="group block h-full"
    >
      <article className="flex h-full flex-col items-center rounded-[2rem] border border-border bg-white px-8 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sage hover:shadow-xl">
        <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-sage-light to-cream transition-transform duration-300 group-hover:scale-105">
          <Icon
            className="h-14 w-14 text-forest transition-colors duration-300 group-hover:text-forest-light"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-4xl font-semibold leading-tight text-forest">
          {title}
        </h3>
        <p className="mt-5 flex-grow text-lg leading-8 text-text">
          {description}
        </p>
        <div className="my-8 flex items-center gap-3" aria-hidden="true">
          <div className="h-px w-24 bg-border" />
          <FaLeaf className="text-lg text-sage" />
          <div className="h-px w-24 bg-border" />
        </div>
        <div className="flex items-center gap-3 text-xl font-medium text-clay transition-all duration-300 group-hover:gap-5 group-hover:text-forest">
          <span>{action}</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </article>
    </a>
  );
}
