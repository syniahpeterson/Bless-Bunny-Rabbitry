import clsx from "clsx";

export default function Section({
  children,
  variant = "white",
  className = "",
}) {
  const backgrounds = {
    white: "bg-white",
    beige: "bg-beige",
    cream: "bg-cream",
    forest: "bg-forest",
    sage: "bg-sage-light"
  };
  return (
    <section
      className={clsx(backgrounds[variant], "py-20 md:py-28", className)}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
