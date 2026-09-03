import React from "react";

/**
 * Props:
 * - categories: list of category names (including "All")
 * - activeCategory: currently selected category
 * - onSelect: called with the clicked category name
 */
export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div id="shop" className="filters">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`chip ${activeCategory === cat ? "chip-active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
