import React from "react";
import ProductCard from "./ProductCard";

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
