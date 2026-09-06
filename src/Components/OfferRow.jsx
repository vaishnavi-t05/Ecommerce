import React from "react";
import OfferCard from "./OfferCard";
import ProductCard from "./ProductCard";

export default function OfferRow({ offer, products, wishlist, onToggleWishlist, onAddToCart }) {
  return (
    <div className="offer-row">
      <OfferCard offer={offer} />

      <div className="offer-products">
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
    </div>
  );
}
