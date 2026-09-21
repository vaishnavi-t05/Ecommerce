// ============================================================
// OfferRow.jsx — ONE row: 1 offer card + its products
// ============================================================
// WHAT YOU SEE: [OfferCard] [product] [product] [product]
//
// PROPS:
//   offer            = one offer object (style, title...)
//   products         = full product objects for this row
//   wishlist         = Set of liked ids
//   onToggleWishlist / onAddToCart = from App.jsx
// ============================================================

import OfferCard from "./OfferCard";
import ProductCard from "./ProductCard";

export default function OfferRow({
  offer,
  products = [],
  wishlist = new Set(),
  onToggleWishlist,
  onAddToCart,
}) {
  return (
    <div className="offer-row">
      {/* Left: the colored card */}
      <OfferCard offer={offer} />

      {/* Right: the row's products (reuses ProductCard) */}
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