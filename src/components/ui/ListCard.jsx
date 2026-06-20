export default function ListCard({
  icon: Icon,
  title,
  description,
  divider = true,
}) {
  return (
    <article
      className={`flex gap-5 py-6 ${divider ? "border-b border-border" : ""}`}
    >
      {/* Icon */}
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-sage-light/40">
        <Icon className="w-10 h-10 text-forest" aria-hidden="true" />
      </div>
      {/* Content */}
      <div className="flex-1">
        <h3 className="font-serif text-3xl leading-none text-forest">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-lg leading-relaxed text-text">
          {description}
        </p>
      </div>
    </article>
  );
}
