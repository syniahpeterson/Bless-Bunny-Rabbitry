export default function HighlightCard({ title, description, icon: Icon }) {
  const hasDescription = Boolean(description);

  return (
    <article
      className={`flex gap-5 border-t border-border pt-6 ${
        !hasDescription ? "items-center" : ""
      }`}
    >
      <div
        className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest"
        aria-hidden="true"
      >
        <Icon className="text-5xl" />
      </div>

      <div className={hasDescription ? "" : "flex min-h-24 items-center"}>
        <div>
          <h3
            className={`font-serif text-2xl font-semibold text-forest ${
              hasDescription ? "mb-2" : ""
            }`}
          >
            {title}
          </h3>

          {hasDescription && (
            <p className="text-lg leading-relaxed text-text">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
}
