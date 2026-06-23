// Component Imports:
import PageHero from "../components/sections/PageHero";
import FilterControls from "../components/sections/gallery/FilterControls";
import GalleryGrid from "../components/sections/gallery/GalleryGrid";
import LifeAtBB from "../components/sections/gallery/LifeAtBB";
import Lightbox from "../components/sections/gallery/Lightbox";

// Data Imports:
import galleryFilters from "../data/gallery/galleryFilters";
import galleryImages from "../data/gallery/galleryImages";

// Tool Imports:
import { useState, useMemo, act } from "react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages = useMemo(() => {
    return activeFilter === "All Photos"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="mt-24">
      <PageHero
        variant="bunnies"
        eyebrow="PHOTOS & MEMORIES"
        title="Life at Bless Bunny Rabbitry"
        description="Explore moments from our rabbitry, including growing bunnies, happy companions, and the care that goes into raising every Holland Lop and Netherland Dwarf."
      />
      <FilterControls
        filters={galleryFilters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <GalleryGrid images={filteredImages} onImageClick={setSelectedIndex} />

      {selectedIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={() =>
            setSelectedIndex((selectedIndex + 1) % filteredImages.length)
          }
          onPrev={() =>
            setSelectedIndex(
              selectedIndex === 0
                ? filteredImages.length - 1
                : selectedIndex - 1,
            )
          }
        />
      )}
      <LifeAtBB />
    </main>
  );
}
