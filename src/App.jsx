import { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";
import products from "./data/Products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(60000);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cartCount}
        setShowCart={setShowCart}
      />

      <section className="hero" id="home">
        <div>
          <p>WELCOME TO Easycart</p>
          <h1>Everything You Need,<br />All in One Place.</h1>
          <p>
            Discover amazing products at the best prices.
          </p>

          <a href="#products">
            <button>Shop Now →</button>
          </a>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-title">
          <p>OUR COLLECTION</p>
          <h2>Explore Products</h2>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          <select
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Number(e.target.value))
            }
          >
            <option value="60000">All Prices</option>
            <option value="1500">Under ₹1,500</option>
            <option value="2500">Under ₹2,500</option>
            <option value="5000">Under ₹5,000</option>
            <option value="60000">Under ₹60,000</option>
          </select>
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <div className="no-products">
              <h2>No products found 😔</h2>
              <p>Try another search or category.</p>
            </div>
          )}
        </div>
      </section>

      {showCart && (
        <Cart
          cart={cart}
          setCart={setCart}
          setShowCart={setShowCart}
        />
      )}
    </>
  );
}

export default App;