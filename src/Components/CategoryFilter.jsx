import React from "react";

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelect,
}) {
  return (
    <div id="shop" className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-btn ${
            activeCategory === cat ? "active" : ""
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}