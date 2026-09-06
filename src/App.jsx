import React, { useState, useMemo, useRef } from "react";
import "./App.css";

import { PRODUCTS, CATEGORIES } from "./data/Products";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CategoryFilter from "./Components/CategoryFilter";
import ProductGrid from "./Components/ProductGrid";
import CartDrawer from "./Components/CartDrawer";
import Footer from "./Components/Footer";
import Toast from "./Components/Toast";

export default function App() {
  // ---------- Filtering state ----------
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // ---------- Wishlist state ----------
  const [wishlist, setWishlist] = useState(new Set());

  // ---------- Cart state ----------
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // ---------- Toast ----------
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  // ---------- Filter products ----------
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // ---------- Wishlist ----------
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const next = new Set(prev);

      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }

      return next;
    });
  };

  // ---------- Add to cart ----------
  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { id: product.id, qty: 1 }];
    });

    showToast(`${product.name} added to bag`);
  };

  // ---------- Change quantity ----------
  const changeQty = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, qty: item.qty + delta }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ---------- Remove from cart ----------
  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  // ---------- Toast ----------
  const showToast = (message) => {
    setToast(message);

    clearTimeout(toastTimer.current);

    toastTimer.current = setTimeout(() => {
      setToast("");
    }, 1800);
  };

  // ---------- Cart items ----------
  const cartItems = cart.map((item) => ({
    ...item,
    product: PRODUCTS.find((p) => p.id === item.id),
  }));

  // ---------- Cart count ----------
  const cartCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  // ---------- Cart total ----------
  const cartTotal = cartItems.reduce(
    (sum, item) =>
      sum + item.qty * item.product.price,
    0
  );

  return (
    <div className="app">

      {/* Navbar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        wishlistCount={wishlist.size}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      {/* Hero section */}
      <Hero />

      {/* Category filter */}
      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      {/* Products */}
      <ProductGrid
        products={filteredProducts}
        gridKey={`${activeCategory}-${searchQuery}`}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onAddToCart={addToCart}
      />

      {/* Footer */}
      <Footer />

      {/* Cart drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
      />

      {/* Toast */}
      <Toast message={toast} />

    </div>
  );
}