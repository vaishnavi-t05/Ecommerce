// ============================================================
// CategoryFilter.jsx — THE ROW OF CATEGORY BUTTONS
// ============================================================
// WHAT YOU SEE: [All] [Serums] [Moisturizers] [Sunscreens] ...
//
// PROPS:
//   categories     = list of button names (from Products.js)
//   activeCategory = which button is gold/highlighted right now
//   onSelect        = function to call when a button is clicked
//
// NOTE: this div has id="shop" — the Hero button scrolls here.
// Tapping "All" also re-shuffles the products (see App.jsx).
// ============================================================

export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div id="shop" className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-btn ${activeCategory === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}