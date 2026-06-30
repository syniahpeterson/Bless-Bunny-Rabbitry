// Data Imports:
import categoryTabs from "../../data/rabbit-care/recommendations/categoryTabs";

export default function CategoryTabs({ activeTab, onTabChange }) {
  return (
    <nav aria-label="Product categories" className="mt-12">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categoryTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`whitespace-nowrap rounded-full px-6 py-3 text-base font-medium transition-all duration-300 ${activeTab === tab.id ? "bg-forest text-white shadow-md" : "bg-white text-forest border border-border hover:bg-sage-light"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
