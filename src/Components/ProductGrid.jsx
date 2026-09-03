import React from "react";
import ProductCard from "./ProductCard";

/**
 * Props:
 * - products: already-filtered list to display
 * - gridKey: changing this remounts the grid so the entrance animation replays
 *   (App.jsx passes `${activeCategory}-${searchQuery}` for this)
 * - wishlist: Set of liked product ids
 * - onToggleWishlist / onAddToCart: passed straight through to each card
 */
export default function ProductGrid({ products, gridKey, wishlist, onToggleWishlist, onAddToCart }) {
  if (products.length === 0) {
    return <div className="empty-state">No dresses match your search. Try another keyword ✨</div>;
  }

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
