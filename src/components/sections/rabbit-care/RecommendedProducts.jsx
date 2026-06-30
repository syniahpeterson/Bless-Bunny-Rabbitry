// Component Imports:
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import SearchBar from "../../ui/SearchBar";
import CategoryTabs from "../../ui/CategoryTabs";
import ProductGrid from "./ProductGrid";

// Tool Imports:
import { useMemo, useState } from "react";

// Data Imports:
import recommendedProducts from "../../../data/rabbit-care/recommendations";

export default function RecommendedProductsSection() {
  // State
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Selected Category
  const selectedCategory =
    activeTab === "all"
      ? null
      : recommendedProducts.find((category) => category.id === activeTab);

  // Filter Products
  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const categories =
      activeTab === "all"
        ? recommendedProducts
        : recommendedProducts.filter((category) => category.id === activeTab);

    return categories
      .flatMap((category) => category.products)
      .filter((product) => {
        if (!query) return true;

        return (
          product.name.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query) ||
          product.whyRecommended?.toLowerCase().includes(query) ||
          product.badge?.toLowerCase().includes(query) ||
          product.note?.toLowerCase().includes(query) ||
          product.stores?.some((store) => store.toLowerCase().includes(query))
        );
      });
  }, [activeTab, searchTerm]);

  return (
    <Section variant="sage" aria-labelledby="recommended-products-heading">
      <SectionHeading
        id="recommended-products-heading"
        eyebrow="Bless Bunny Favorites"
        title="Our Rabbit Care Essentials"
        descriptions={[
          "Choosing the right supplies can make all the difference. These are the habitats, hay, pellets, toys, grooming tools, and accessories we confidently recommend to help your rabbit live a happy, healthy life.",
        ]}
      />

      {/* Search */}
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Tabs */}
      <CategoryTabs
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSearchTerm("");
        }}
      />

      {/* Selected Category */}
      {selectedCategory && (
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <h3 className="font-serif text-3xl font-semibold text-forest">
            {selectedCategory.title}
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-text">
            {selectedCategory.description}
          </p>
        </div>
      )}

      {/* Search Results */}
      <div className="mt-16">
        {filteredProducts.length === 0 ? (
          <div className="mx-auto max-w-xl text-center">
            <h3 className="font-serif text-3xl font-semibold text-forest">
              No Products Found
            </h3>

            <p className="mt-4 text-lg text-text">
              Try searching with a different keyword or browse another category.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-forest/70">
              Showing {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "Product" : "Products"}
            </p>

            <ProductGrid products={filteredProducts} />
          </>
        )}
      </div>
    </Section>
  );
}
