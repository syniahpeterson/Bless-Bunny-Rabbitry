// Tool Imports:
import { useEffect } from "react";

// Icon Imports:
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) {
  const image = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button className="absolute right-4 top-4 rounded-full p-3 text-white hover:bg-white/10">
        <BsX className="h-8 w-8" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="cursor-pointer absolute left-4 rounded-full bg-white/10 p-3 text-white backdrop-blur"
      >
        <BsChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="cursor-pointer absolute right-4 rounded-full bg-white/10 p-3 text-white backdrop-blur"
      >
        <BsChevronRight className="h-8 w-8" />
      </button>

      <figure onClick={(e) => e.stopPropagation()} className="max-w-6xl">
        <img
          src={image.image}
          alt={image.alt}
          className="max-h-[85vh] w-auto rounded-2xl object-contain"
        />
        <figcaption className="mt-4 text-center text-white/80">
          {image.alt}
        </figcaption>
      </figure>
    </div>
  );
}
