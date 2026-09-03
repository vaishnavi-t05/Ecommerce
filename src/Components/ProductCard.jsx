import React from "react";
import { Heart } from "lucide-react";

/**
 * Props:
 * - product: { id, name, category, price, img }
 * - index: position in the grid, used to stagger the entrance animation
 * - isLiked: whether this product is in the wishlist
 * - onToggleWishlist: (id) => void
 * - onAddToCart: (product) => void
 */
export default function ProductCard({ product, index, isLiked, onToggleWishlist, onAddToCart }) {
  return (
    // The "--i" custom property feeds the staggered fade-in animation in App.css
    <div className="product-card" style={{ "--i": index }}>
      <div className="product-img-wrap">
        <img className="product-img" src={product.img} alt={product.name} loading="lazy" />

        <button
          className="heart-btn"
          onClick={() => onToggleWishlist(product.id)}
          aria-label="Add to wishlist"
        >
          <Heart size={16} color="#c73e70" fill={isLiked ? "#e4568b" : "none"} />
        </button>
      </div>

      <div className="product-body">
        <span className="product-cat">{product.category}</span>
        <span className="product-name">{product.name}</span>
        <span className="product-price">₹{product.price.toLocaleString("en-IN")}</span>

        <button className="add-btn" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
