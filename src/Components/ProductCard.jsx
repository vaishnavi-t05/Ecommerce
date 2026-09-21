// ============================================================
// ProductCard.jsx — ONE product tile (photo + name + price)
// ============================================================
// WHAT YOU SEE:
//   [photo with heart]  category / name / price / [Add to Cart]
//
// PROPS:
//   product          = one object from Products.js { id, name, ... }
//   index            = position in the grid (0, 1, 2...)
//                      CSS uses it (--i) to fade cards in one by one
//   isLiked          = true/false, is the heart gold?
//   onToggleWishlist = function to like/unlike (needs product id)
//   onAddToCart      = function to add to bag (needs the product)
// ============================================================

import { Heart } from "lucide-react";

export default function ProductCard({ product, index, isLiked, onToggleWishlist, onAddToCart }) {
  return (
    <div className="product-card" style={{ "--i": index }}>
      {/* Photo + heart button on top of it */}
      <div className="product-img-wrap">
        <img className="product-img" src={product.img} alt={product.name} loading="lazy" />

        <button
          className={`heart-btn ${isLiked ? "liked" : ""}`}
          onClick={() => onToggleWishlist(product.id)}
          aria-label="Add to wishlist"
        >
          <Heart size={16} color="#C9A86A" fill={isLiked ? "#C9A86A" : "none"} />
        </button>
      </div>

      {/* Text + button below the photo */}
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