import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = "",
  type = "button",
  disabled = false,
  newTab = false,
  fullWidth = false,
}) {
  const variants = {
    primary:
      "bg-forest text-beige shadow-sm hover:-translate-y-0.5 hover:shadow-xl",

    secondary:
      "border border-forest bg-transparent text-forest hover:bg-sage-light",

    navbar: "bg-forest text-white shadow-md hover:bg-text",

    ghost: "bg-transparent text-forest hover:bg-sage-light",

    card: "bg-beige border border-border text-forest hover:border-sage hover:shadow-md",
    cta: `bg-clay text-white hover:-translate-y-1 hover:opacity-90`,
  };

  const displayStyles = fullWidth ? "flex w-full" : "inline-flex";

  const baseStyles = `${displayStyles} items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage disabled:pointer-events-none disabled:opacity-50`;

  const sizeStyles = variant === "navbar" ? "px-5 py-2.5 text-sm" : "px-6 py-3";

  const styles = `${baseStyles} ${sizeStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {LeftIcon && <LeftIcon aria-hidden="true" className="h-5 w-5" />}

      <span>{children}</span>

      {RightIcon && <RightIcon aria-hidden="true" className="h-5 w-5" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={styles}
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={styles}>
      {content}
    </button>
  );
}
