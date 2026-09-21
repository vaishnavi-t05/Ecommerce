// ============================================================
// RevealRadiance.jsx — "GLOW STARTS HERE" promo band
// ============================================================
// WHAT YOU SEE:
//   Left:  photo of a woman using a jade roller
//   Right: "GLOW STARTS HERE" + "REVEAL YOUR RADIANCE" +
//          one-line description + gold [SHOP NOW] button
// PLACEMENT: after the SECOND row of products (see App.jsx).
//
// BUTTON: scrolls back up to the products (id="shop").
// No props needed.
// ============================================================

export default function RevealRadiance() {
  // Same scroll trick as the Hero button
  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="reveal-section">
      {/* Left: photo */}
      <div className="reveal-img-wrap">
        <img
          src="https://images.pexels.com/photos/6417904/pexels-photo-6417904.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Woman using jade roller on cheek"
          loading="lazy"
        />
      </div>

      {/* Right: text + button */}
      <div className="reveal-text">
        <p className="reveal-eyebrow">GLOW STARTS HERE</p>
        <h2 className="reveal-title">
          REVEAL YOUR <span>RADIANCE</span>
        </h2>
        <p className="reveal-desc">
          Nurture your skin with clean, conscious ingredients designed to reveal a naturally luminous, healthy glow single day.
        </p>
        <button className="reveal-cta" onClick={scrollToShop}>
          SHOP NOW
        </button>
      </div>
    </section>
  );
}