export default function GalleryGrid({ image, alt, caption, large = false }) {
  return (
    <figure className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-border/50">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${large ? "h-[240px] md:h-[360px]" : "h-[180px] md:h-[250px]"}`}
      />
      {/* Hidden caption */}
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
}
