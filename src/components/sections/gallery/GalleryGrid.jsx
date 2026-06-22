export default function GalleryGrid({ images, onImageClick }) {
  return (
    <section
      aria-label="Photo gallery"
      className="mx-auto max-w-7xl px-4 pb-24"
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => onImageClick(index)}
            className="group overflow-hidden rounded-2xl bg-white focus:outline-none focus:ring-4 focus:ring-sage/50"
          >
            <img
              src={image.image}
              alt={image.alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
