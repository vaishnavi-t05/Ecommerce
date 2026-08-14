function Navbar({ cartCount, setShowCart }) {
  return (
    <nav className="navbar">
      <div className="logo">🛍️ Easycart</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>

        <button className="cart-button" onClick={() => setShowCart(true)}>
          🛒 Cart
          <span>{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;