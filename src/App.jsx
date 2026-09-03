import React, { useState, useMemo, useRef } from "react";
import "./App.css";

import { PRODUCTS, CATEGORIES } from "./data/products";
import Navbar from "./Components/CategoryFilter";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  // ---------- Filtering state ----------
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // ---------- Wishlist state (Set of product ids) ----------
  const [wishlist, setWishlist] = useState(new Set());

  // ---------- Cart state: array of { id, qty } ----------
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // ---------- Toast (the little "added to bag" popup) ----------
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  // Recompute the visible product list whenever category or search changes
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // ---------- Wishlist handlers ----------
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

  // ---------- Cart handlers ----------
  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { id: product.id, qty: 1 }];
    });

    showToast(`${product.name} added to bag`);
  };

  const changeQty = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === productId ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0) // remove the item once qty hits 0
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // ---------- Toast helper ----------
  const showToast = (message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  };

  // ---------- Derived cart values ----------
  // Attach full product details to each cart line so children don't need PRODUCTS
  const cartItems = cart.map((item) => ({
    ...item,
    product: PRODUCTS.find((p) => p.id === item.id),
  }));
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.qty * item.product.price, 0);

  return (
    <div className="app">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        wishlistCount={wishlist.size}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <Hero />

      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <ProductGrid
        products={filteredProducts}
        gridKey={`${activeCategory}-${searchQuery}`} // remounts grid so animation replays
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onAddToCart={addToCart}
      />

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
      />

      <Toast message={toast} />
    </div>
  );
}
