import React from "react";
import { OFFERS } from "../data/offers";
import { PRODUCTS } from "../data/products";
import OfferRow from "./OfferRow";

export default function OffersSection({ wishlist, onToggleWishlist, onAddToCart }) {
  return (
    <section className="offers-section">
      <h2 className="offers-heading">Today's Offers</h2>

      {OFFERS.map((offer) => {
        // look up the full product objects for this offer's id list
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
