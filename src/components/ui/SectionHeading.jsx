import clsx from "clsx";

export default function SectionHeading({
  id,
  eyebrow,
  title,
  descriptions = [],
  align = "center",
  theme = "default",
}) {
  const alignments = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const themes = {
    default: {
      eyebrow: "text-clay",
      title: "text-forest",
      description: "text-text",
    },
    inverse: {
      eyebrow: "text-sage",
      title: "text-white",
      description: "text-sage-light",
    },
  };

  return (
    <div className={clsx("flex flex-col gap-4", alignments[align])}>
      {eyebrow && (
        <>
          <span
            className={clsx(
              "uppercase tracking-[0.2em] text-sm font-medium",
              themes[theme].eyebrow,
            )}
          >
            {eyebrow}
          </span>

          <div className="h-px w-24 bg-forest/20" />
        </>
      )}

      <h2
        id={id}
        className={clsx(
          "font-serif text-4xl md:text-5xl lg:text-6xl leading-tight",
          themes[theme].title,
        )}
      >
        {title}
      </h2>

      {descriptions.map((text, index) => (
        <p
          key={index}
          className={clsx(
            "max-w-3xl text-lg leading-8",
            themes[theme].description,
          )}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
