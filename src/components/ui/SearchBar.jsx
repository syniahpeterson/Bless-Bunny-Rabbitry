// Icon Imports:
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search rabbit care essenitals...",
}) {
  return (
    <div className="mx-auto mt-14 max-w-2xl">
      <label htmlFor="product-search" className="sr-only">
        Search recommended rabbit care products
      </label>

      <div className="relative">
        {/* Search Icon */}
        <FiSearch
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-forest/60"
          aria-hidden="true"
        />

        {/* Search Input */}
        <input
          id="product-search"
          type="search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full rounded-full border border-border bg-white py-5 pl-14 pr-6 text-lg text-text shadow-md transition-all duration-300 placeholder:text-text/50 hover:shadow-lg focus:border-sage focus:outline-none focus:ring-4 focus:ring-sage/30"
        />
      </div>

      {/* Helper Text */}
      <p className="mt-4 text-center text-sm text-forest/80">
        Hand-selected recommendations from Bless Bunny Rabbitry.
      </p>
    </div>
  );
}
