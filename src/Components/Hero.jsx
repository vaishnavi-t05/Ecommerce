import React from "react";

/**
 * The top banner. "Welcome to My Shop" glows using a CSS animation
 * defined in App.css (see the .hero-title / @keyframes glow-pulse rules).
 */
export default function Hero() {
  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero">
      <div className="hero-eyebrow">Baby Pink Edit · New Arrivals</div>
      <h1 className="hero-title">Welcome to My Shop</h1>
      <p className="hero-sub">
        Frocks, jumpsuits, baggys, crop tops &amp; party wear — handpicked pieces
        in every shade of soft pink you'll love.
      </p>
      <button className="hero-cta" onClick={scrollToShop}>
        Shop the Collection
      </button>
    </header>
  );
}
