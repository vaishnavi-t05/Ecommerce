// ============================================================
// Hero.jsx — THE BIG BANNER at the top of the page
// ============================================================
// WHAT YOU SEE:
//   Left:  "GLOW BEYOND THE ORDINARY" + small paragraph + gold button
//   Right: photo of a woman holding the serum (src/assets/hero.jpg)
//
// FONTS: title uses Cormorant Garamond (white), the word
// ORDINARY uses italic gold. Paragraph is small pearl text.
//
// BUTTON: "Shop Skincare" scrolls down to the products.
// It finds the element with id="shop" (see CategoryFilter.jsx).
// No props needed.
// ============================================================

import heroImg from "../assets/hero.jpg";

export default function Hero() {
  // Scroll smoothly to the product section
  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero">
      {/* Left: headline + paragraph + button */}
      <div className="hero-copy">
        <h1 className="hero-title">
          GLOW BEYOND THE <em>ORDINARY</em>
        </h1>

        <p className="hero-tagline">
          Advanced skincare treatments, dermatologist formulated products, and personalized care for healthier, glowing skin.
        </p>

        <button className="hero-cta" onClick={scrollToShop}>
          Shop Skincare
        </button>
      </div>

      {/* Right: serum photo */}
      <div className="hero-figure">
        <img
          src={heroImg}
          alt="Woman in a soft robe holding Radiant Botanics Glow Serum, hand gently on her cheek"
        />
      </div>
    </header>
  );
}