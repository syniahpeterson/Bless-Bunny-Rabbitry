export default function FilterControls({
  filters,
  activeFilter,
  onFilterChange,
}) {
  return (
    <nav
      aria-label="Gallery filters"
      className="mx-auto mb-10 mt-12 flex flex-wrap justify-center gap-3 px-4"
    >
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
          className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${activeFilter === filter ? "border-forest bg-forest text-white shadow-md" : "border-border bg-white text-text hover:border-sage hover:bg-sage-light"}`}
        >
          {filter}
        </button>
      ))}
    </nav>
  );
}
