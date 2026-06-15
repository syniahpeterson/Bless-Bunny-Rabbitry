export default function HighlightCard({ title, description, icon: Icon }) {
  return (
    <article className="flex gap-5 border-t border-border pt-6">
      <div
        className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-sage-light text-forest"
        aria-hidden="true"
      >
        <Icon className="text-5xl" />
      </div>

      <div>
        <h3 className="mb-2 font-serif text-2xl font-semibold text-forest">
          {title}
        </h3>

        <p className="text-lg leading-relaxed text-text">{description}</p>
      </div>
    </article>
  );
}
