// Component Imports;
import Section from "../../layout/Section";
import SectionBanner from "../../ui/SectionBanner";
import SectionHeading from "../../ui/SectionHeading";
import GalleryGrid from "../../ui/GalleryGrid";

// Data Imports:
import photos from "../../../data/aboutGallery";

export default function Gallery() {
  return (
    <Section
      variant="beige"
      aria-labelledby="gallery-heading"
      className="overflow-hidden"
    >
      <SectionHeading
        id="gallery-heading"
        eyebrow="Life At The Rabbitry"
        title="A Glimpse Into Daily Life"
        descriptions={[
          "From playful rabbits to daily care and socialization, these moments reflect the attention and love that go into raising every bunny at Bless Bunny Rabbitry.",
        ]}
      />

      {/* Gallery Layout */}
      <div
        className="mx-auto mt-14 max-w-7xl"
        role="list"
        aria-label="Life at the rabbitry photo gallery"
      >
        {/* Top Row */}
        <div className="grid gap-4 md:grid-cols-2">
          <GalleryGrid {...photos[0]} large />
          <GalleryGrid {...photos[1]} large />
        </div>
        {/* Bottom Row */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <GalleryGrid {...photos[2]} />
          <GalleryGrid {...photos[3]} />
          <GalleryGrid {...photos[4]} />
        </div>
      </div>
      {/* CTA Banner */}
      <SectionBanner
        title="Want to see more?"
        paragraph="Visit our full gallery to explore additional photos of our rabbits, families, and daily life at the rabbitry."
        to="/gallery"
        message="View Full Gallery"
      />
    </Section>
  );
}
