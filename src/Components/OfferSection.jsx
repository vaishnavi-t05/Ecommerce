// ============================================================
// OfferSection.jsx — "TODAY'S OFFERS" (3 rows)
// ============================================================
// WHAT YOU SEE: 3 rows. Each row = 1 colored card + 2-3 products.
//   Row 1: gold card   (Serum Surge)
//   Row 2: white card  (Sun & Glow Duo)
//   Row 3: black card  (Clean Routine Set)
//
// HOW IT WORKS:
//   OFFERS only stores product ids. Here we look up the full
//   product objects from PRODUCTS and hand them to OfferRow.
//   .filter(Boolean) drops any id that has no matching product.
//
// PROPS: wishlist, onToggleWishlist, onAddToCart (from App.jsx)
// ============================================================

import { OFFERS } from "../data/offers";
import { PRODUCTS } from "../data/Products";
import OfferRow from "./OfferRow";

export default function OffersSection({ wishlist, onToggleWishlist, onAddToCart }) {
  return (
    <section className="offers-section">
      <h2 className="offers-heading">Today's Offers</h2>

      {OFFERS.map((offer) => {
        // Turn [1, 2, 4] into full product objects
        const products = offer.productIds
          .map((id) => PRODUCTS.find((p) => p.id === id))
          .filter(Boolean);

        return (
          <OfferRow
            key={offer.id}
            offer={offer}
            products={products}
            wishlist={wishlist}
            onToggleWishlist={onToggleWishlist}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </section>
  );
}