import clsx from "clsx";

export default function Section({
  children,
  variant = "white",
  className = "",
  id,
}) {
  const backgrounds = {
    white: "bg-white",
    beige: "bg-beige",
    cream: "bg-cream",
    forest: "bg-forest",
    sage: "bg-sage-light",
  };

  return (
    <section
      id={id}
      className={clsx(
        backgrounds[variant],
        "scroll-mt-24 py-20 md:scroll-mt-28 md:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
