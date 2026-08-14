function Cart({ cart, setCart, setShowCart }) {
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>

          <button onClick={() => setShowCart(false)}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some products to your cart.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>

                    <div className="quantity">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="remove"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <div>
                <span>Subtotal</span>
                <strong>₹{total}</strong>
              </div>

              <div>
                <span>Delivery</span>
                <strong>Free</strong>
              </div>

              <hr />

              <div className="grand-total">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <button className="checkout">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;