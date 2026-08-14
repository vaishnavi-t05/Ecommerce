function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <p className="category">{product.category}</p>

        <h3>{product.name}</h3>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <div className="product-bottom">
          <h2>₹{product.price}</h2>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;