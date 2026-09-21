// ============================================================
// App.jsx — THE MAIN PAGE of AuraSkin (start reading here!)
// ============================================================
// WHAT IS THIS FILE?
//   This is the boss component. It decides WHAT shows on the page
//   and keeps all the shared data (category, search, cart...).
//
// PAGE ORDER (top to bottom):
//   1. Navbar          (logo, search, heart, bag)
//   2. Hero            (big title + serum photo)
//   3. OfferSection    (3 offer cards + products)
//   4. BeforeAfter     (drag slider: acne vs clear skin)
//   5. CategoryFilter  (All / Serums / Moisturizers / ...)
//   6. ProductGrid     (first 4 products)
//   7. ArticlesSection (2 article cards)
//   8. ProductGrid     (next 4 products)
//   9. RevealRadiance  (jade roller promo)
//  10. ProductGrid     (all remaining products, except on "All")
//  11. WhyAuraSkin    (gold stats section)
//  12. Footer         (links + contact)
//  13. CartDrawer      (slide-in bag, hidden until opened)
//  14. Toast           (small "added to bag" popup)
//
// DATA THIS FILE KEEPS (useState):
//   activeCategory  = which filter button is selected ("All" at start)
//   searchQuery     = what the user typed in the search box
//   shuffleSeed     = a number we bump to re-shuffle "All" products
//   wishlist        = a Set of liked product ids (Set = no duplicates)
//   cart            = array of { id, qty }  (qty = how many)
//   cartOpen        = true/false, is the cart drawer visible?
//   toast           = text of the popup ("" = hidden)
// ============================================================

import { useState, useMemo, useRef } from "react";
import "./App.css";

import { PRODUCTS, CATEGORIES } from "./data/Products";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CategoryFilter from "./Components/CategoryFilter";
import ProductGrid from "./Components/ProductGrid";
import CartDrawer from "./Components/CartDrawer";
import Footer from "./Components/Footer";
import Toast from "./Components/Toast";
import OfferSection from "./Components/OfferSection";
import BeforeAfter from "./Components/BeforeAfter";
import ArticlesSection from "./Components/ArticlesSection";
import RevealRadiance from "./Components/RevealRadiance";
import WhyAuraSkin from "./Components/WhyAuraSkin";

// ------------------------------------------------------------
// HELPER: shuffle an array (Fisher-Yates shuffle)
// We copy first ([...array]) so the original list never changes.
// Used to "mingle" products when the user taps "All".
// ------------------------------------------------------------
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }
  return copy;
}

export default function App() {
  // ----- 1. Filtering -----
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [shuffleSeed, setShuffleSeed] = useState(0);

  // ----- 2. Wishlist (liked hearts) -----
  const [wishlist, setWishlist] = useState(new Set());

  // ----- 3. Cart -----
  const [cart, setCart] = useState([]); // example: [{ id: 1, qty: 2 }]
  const [cartOpen, setCartOpen] = useState(false);

  // ----- 4. Toast popup -----
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  // ------------------------------------------------------------
  // When a category button is clicked.
  // Tapping "All" also bumps shuffleSeed so products mingle again.
  // ------------------------------------------------------------
  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") setShuffleSeed((s) => s + 1);
  };

  // ------------------------------------------------------------
  // The visible product list. Recomputed when
  // category, search text, or shuffleSeed changes.
  // Step 1: keep products matching category + search.
  // Step 2: if "All", shuffle so types are mingled.
  // (void shuffleSeed just tells React: "also watch this number")
  // ------------------------------------------------------------
  const filteredProducts = useMemo(() => {
    void shuffleSeed;

    const filtered = PRODUCTS.filter((p) => {
      const okCategory = activeCategory === "All" || p.category === activeCategory;
      const okSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return okCategory && okSearch;
    });

    if (activeCategory === "All") return shuffleArray(filtered);
    return filtered;
  }, [activeCategory, searchQuery, shuffleSeed]);

  // ------------------------------------------------------------
  // Split the list so sections can sit BETWEEN product rows:
  //   first 4  -> above ArticlesSection
  //   next 4   -> above RevealRadiance
  //   rest     -> above WhyAuraSkin (hidden on "All": only 2 rows)
  // ------------------------------------------------------------
  const firstRow = filteredProducts.slice(0, 4);
  const secondRow = filteredProducts.slice(4, 8);
  const remainingRows = activeCategory === "All" ? [] : filteredProducts.slice(8);

  // ----- Toggle a wishlist heart (add id if missing, remove if present) -----
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) next.delete(productId);
      else next.add(productId);
      return next;
    });
  };

  // ----- Add a product to the cart (qty + 1 if already there) -----
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { id: product.id, qty: 1 }];
    });
    showToast(`${product.name} added to bag`);
  };

  // ----- Change quantity (+1 / -1). Removes the item if qty hits 0 -----
  const changeQty = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ----- Remove one product from the cart -----
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // ----- Show a popup message for 1.8 seconds -----
  const showToast = (message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  };

  // ----- Join cart ids with full product info (name, price, image) -----
  const cartItems = cart.map((item) => ({
    ...item,
    product: PRODUCTS.find((p) => p.id === item.id),
  }));

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.qty * item.product.price,
    0
  );

  // ----- The page -----
  return (
    <div className="app">
      {/* 1. Top bar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        wishlistCount={wishlist.size}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      {/* 2. Big banner */}
      <Hero />

      {/* 3. Offer cards */}
      <OfferSection
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onAddToCart={addToCart}
      />

      {/* 4. Before/after slider */}
      <BeforeAfter />

      {/* 5. Category buttons */}
      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelect={handleSelectCategory}
      />

      {/* 6. First 4 products */}
      <ProductGrid
        products={firstRow}
        gridKey={`first-${activeCategory}-${searchQuery}-${shuffleSeed}`}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onAddToCart={addToCart}
      />

      {/* 7. Articles */}
      <ArticlesSection />

      {/* 8. Next 4 products */}
      {secondRow.length > 0 && (
        <ProductGrid
          products={secondRow}
          gridKey={`second-${activeCategory}-${searchQuery}-${shuffleSeed}`}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onAddToCart={addToCart}
        />
      )}

      {/* 9. Jade roller promo */}
      <RevealRadiance />

      {/* 10. Remaining products (skipped on "All") */}
      {remainingRows.length > 0 && (
        <ProductGrid
          products={remainingRows}
          gridKey={`rest-${activeCategory}-${searchQuery}-${shuffleSeed}`}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onAddToCart={addToCart}
        />
      )}

      {/* 11. Gold stats */}
      <WhyAuraSkin />

      {/* 12. Footer */}
      <Footer />

      {/* 13. Slide-in cart (hidden until cartOpen is true) */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
      />

      {/* 14. Small popup */}
      <Toast message={toast} />
    </div>
  );
}