import React from "react";
import { Heart, ShoppingBag, Search } from "lucide-react";

// The little bow ribbon icon that sits next to the logo.
// Pulled out into its own function so Navbar.jsx stays readable.
function BowIcon() {
  return (
    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" className="bow-icon">
      <path
        d="M14 12C14 12 9 4 3 5C-1 5.6 0.5 12 6 12.5C0.5 13 -1 19.4 3 20C9 21 14 12 14 12Z"
        fill="#e4568b"
      />
      <path
        d="M16 12C16 12 21 4 27 5C31 5.6 29.5 12 24 12.5C29.5 13 31 19.4 27 20C21 21 16 12 16 12Z"
        fill="#e4568b"
      />
      <circle cx="15" cy="12" r="3.4" fill="#c73e70" />
    </svg>
  );
}

/**
 * Props:
 * - searchQuery / onSearchChange: controls the search input
 * - wishlistCount: number shown on the heart badge
 * - cartCount: number shown on the bag badge
 * - onCartClick: opens the cart drawer
 */
export default function Navbar({ searchQuery, onSearchChange, wishlistCount, cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      {/* Logo: "Style" in script font + "WidMe" in serif italic, with the bow */}
      <div className="logo-wrap">
        <BowIcon />
        <div className="logo-text">
          <span className="logo-style">Style</span>
          <span className="logo-widme">WidMe</span>
        </div>
      </div>

      {/* Search bar sits right next to the logo, as requested */}
      <div className="search-box">
        <Search size={16} color="#c73e70" />
        <input
          type="text"
          placeholder="Search dresses..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Wishlist heart + cart bag, each with a live count badge */}
      <div className="nav-icons">
        <button className="icon-btn" aria-label="Wishlist">
          <Heart size={22} fill={wishlistCount ? "#e4568b" : "none"} />
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </button>

        <button className="icon-btn" aria-label="Cart" onClick={onCartClick}>
          <ShoppingBag size={22} />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}
