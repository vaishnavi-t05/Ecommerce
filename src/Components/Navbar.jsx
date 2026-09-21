// ============================================================
// Navbar.jsx — THE TOP BAR (always visible, fixed at top)
// ============================================================
// WHAT YOU SEE:
//   [bow + AuraSkin logo]  [search box]  [heart] [bag]
//
// PROPS (data passed in from App.jsx):
//   searchQuery     = current text in the search box
//   onSearchChange  = function to call when typing (updates App.jsx)
//   wishlistCount   = number on the heart badge (0 = no badge)
//   cartCount       = number on the bag badge
//   cartBump        = true for a moment after adding (badge bounces)
//   onCartClick     = function that opens the cart drawer
//
// FONTS: "Aura" uses Paloma (white), "Skin" uses Aniyah (gold).
// BOW: a small black-and-gold SVG drawing. It wiggles on hover
// (see .bow-icon + bow-wiggle in App.css).
// ============================================================

import { Heart, ShoppingBag, Search } from "lucide-react";

// BowIcon: the little decorative bow next to the logo.
// Black loops (#0A0A0A) + gold edges (#C9A86A) + gold knot (#D4AF37).
function BowIcon() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      className="bow-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft shadow under the bow */}
      <ellipse cx="18" cy="24.8" rx="8" ry="1.7" fill="#C9A86A" opacity="0.16" />

      {/* Left loop: black fill, gold edge, gold fold, cream shine */}
      <path
        d="M18 13.5 C 18 13.5 12.2 2.8 4.6 4.6 C 1.2 5.5 1.4 11.2 7.8 13.2 C 1.6 14.8 1.2 20.4 4.6 21.5 C 12.2 23.6 18 13.5 18 13.5 Z"
        fill="#0A0A0A"
        stroke="#C9A86A"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M18 13.5 C 14.8 9.2 9.2 5.2 5.4 6.8" stroke="#C9A86A" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M7.2 12.2 C 9.6 10.4 13.2 8.6 15.8 10.8" stroke="#FFFBF5" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Right loop: mirror of the left loop */}
      <path
        d="M18 13.5 C 18 13.5 23.8 2.8 31.4 4.6 C 34.8 5.5 34.6 11.2 28.2 13.2 C 34.4 14.8 34.8 20.4 31.4 21.5 C 23.8 23.6 18 13.5 18 13.5 Z"
        fill="#0A0A0A"
        stroke="#C9A86A"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M18 13.5 C 21.2 9.2 26.8 5.2 30.6 6.8" stroke="#C9A86A" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
      <path d="M28.8 12.2 C 26.4 10.4 22.8 8.6 20.2 10.8" stroke="#FFFBF5" strokeWidth="0.7" strokeLinecap="round" opacity="0.45" />

      {/* Tails: black V shape with gold edge */}
      <path
        d="M18 16.2 L 12.4 26 L 15.6 23.4 L 18 26 L 20.4 23.4 L 23.6 26 Z"
        fill="#0A0A0A"
        stroke="#C9A86A"
        strokeWidth="0.85"
        strokeLinejoin="round"
      />
      <path d="M18 16.2 L 18 26" stroke="#C9A86A" strokeWidth="0.4" opacity="0.5" />

      {/* Center knot: gold box + shine + stitch lines */}
      <rect x="14.1" y="10.1" width="7.8" height="6.8" rx="2.3" fill="#C9A86A" />
      <rect x="14.6" y="10.6" width="6.8" height="5.8" rx="1.8" fill="#D4AF37" stroke="#B8945A" strokeWidth="0.45" />
      <ellipse cx="17.1" cy="12.1" rx="1.5" ry="1" fill="#FFFBF5" opacity="0.55" />
      <ellipse cx="18.7" cy="13.7" rx="0.55" ry="0.42" fill="#FFFFFF" opacity="0.5" />
      <path d="M15.1 11.9 L 15.1 14.9" stroke="#8C6B3A" strokeWidth="0.35" opacity="0.55" strokeLinecap="round" />
      <path d="M20.9 11.9 L 20.9 14.9" stroke="#8C6B3A" strokeWidth="0.35" opacity="0.55" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar({ searchQuery, onSearchChange, wishlistCount, cartCount, cartBump, onCartClick }) {
  return (
    <nav className="navbar">
      {/* Logo: "Aura" (white Paloma) + "Skin" (gold Aniyah) + bow */}
      <div className="logo-wrap">
        <BowIcon />
        <div className="logo-text">
          <span className="logo-auraskin">
            <span className="aura">Aura</span>
            <span className="skin">Skin</span>
          </span>
        </div>
      </div>

      {/* Search: typing here filters the product grid (see App.jsx) */}
      <div className="search-box">
        <Search size={16} color="#C9A86A" />
        <input
          type="text"
          placeholder="Search skincare..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Right icons */}
      <div className="nav-icons">
        {/* Heart turns gold + shows a count when items are liked */}
        <button className="icon-btn" aria-label="Wishlist">
          <Heart size={22} fill={wishlistCount ? "#C9A86A" : "none"} color="#C9A86A" />
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </button>

        {/* Bag opens the cart drawer. Badge bounces right after adding. */}
        <button className="icon-btn" aria-label="Cart" onClick={onCartClick}>
          <ShoppingBag size={22} color="#FFFFFF" />
          {cartCount > 0 && (
            <span className={`badge ${cartBump ? "badge-bump" : ""}`}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}