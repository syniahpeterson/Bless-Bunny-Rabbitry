export default function FamilyMomentCard({ image, alt, caption }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="aspect-square w-full object-cover"
      />

      <div className="p-5">
        <p className="text-center text-text">{caption}</p>
      </div>
    </article>
  );
}
