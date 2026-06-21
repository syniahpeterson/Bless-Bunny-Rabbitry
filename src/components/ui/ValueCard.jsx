// Icon Imports:
import { FaLeaf } from "react-icons/fa";

export default function ValueCard({
  icon: Icon,
  title,
  description,
  image,
  variant = "values",
}) {
  const variants = {
    values: {
      cardMargin: "my-4",
      iconBg: "bg-sage",
      iconColor: "text-white",
      iconSize: "h-20 w-20",
      iconClass: "h-10 w-10",
      imageHeight: "h-72",
      contentPadding: "px-8 py-8",
      titleSize: "text-3xl",
    },

    whyChoose: {
      cardMargin: "mt-16 md:mt-8",
      iconBg: "bg-sage-light",
      iconColor: "text-forest",
      iconSize: "h-16 w-16",
      iconClass: "h-8 w-8",
      imageHeight: "h-64 md:h-72",
      contentPadding: "px-8 py-8",
      titleSize: "text-3xl",
    },
  };

  const styles = variants[variant];

  return (
    <article
      className={`relative overflow-visible rounded-3xl border border-border bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${styles.cardMargin}`}
    >
      {/* Floating Icon */}
      <div
        className={`absolute left-1/2 top-0 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white shadow-md ${styles.iconBg} ${styles.iconSize}`}
      >
        <Icon
          aria-hidden="true"
          className={`${styles.iconClass} ${styles.iconColor}`}
        />
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={`Image of ${title}`}
          loading="lazy"
          className={`${styles.imageHeight} w-full object-cover`}
        />
      </div>

      {/* Content */}
      <div className={styles.contentPadding}>
        <h3
          className={`font-serif font-semibold text-forest ${styles.titleSize}`}
        >
          {title}
        </h3>

        {/* Decorative Divider */}
        <div
          className="my-4 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <div className="h-px w-8 bg-sage" />
          <FaLeaf className="text-xs text-sage" />
          <div className="h-px w-8 bg-sage" />
        </div>

        <p className="text-lg leading-relaxed text-text">{description}</p>
      </div>
    </article>
  );
}
