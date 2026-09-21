// ============================================================
// ProductGrid.jsx — THE GRID that shows many ProductCards
// ============================================================
// WHAT YOU SEE: rows of product tiles. If the search finds
// nothing, a friendly "No products match" message instead.
//
// PROPS:
//   products         = array of products to show (already filtered)
//   gridKey          = a text key that changes on every filter change,
//                      so React replays the fade-in animation
//   wishlist         = Set of liked ids (to paint hearts gold)
//   onToggleWishlist / onAddToCart = passed down to each card
// ============================================================

import ProductCard from "./ProductCard";

export default function ProductGrid({ products, gridKey, wishlist, onToggleWishlist, onAddToCart }) {
  // Empty state: show this instead of an empty grid
  if (products.length === 0) {
    return <div className="empty-state">No products match your search. Try another keyword ✨</div>;
  }

  // Normal state: one ProductCard per product
  return (
    <div className="product-grid" key={gridKey}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          isLiked={wishlist.has(product.id)}
          onToggleWishlist={onToggleWishlist}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}