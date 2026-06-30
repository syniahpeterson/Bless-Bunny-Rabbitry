// Component Imports:
import ProductCard from "../../ui/ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="mt-16">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
