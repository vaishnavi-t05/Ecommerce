import React from "react";

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
