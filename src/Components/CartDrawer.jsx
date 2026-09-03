import React from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";

/**
 * Props:
 * - open: whether the drawer is visible
 * - onClose: close handler (also used for the overlay click)
 * - cartItems: [{ id, qty, product }] — product already looked up by App.jsx
 * - cartTotal: pre-computed total price
 * - onChangeQty: (id, delta) => void
 * - onRemove: (id) => void
 */
export default function CartDrawer({ open, onClose, cartItems, cartTotal, onChangeQty, onRemove }) {
  if (!open) return null;

  return (
    <>
      <div className="overlay" onClick={onClose} />

      <div className="cart-drawer">
        <div className="drawer-head">
          <h3>Your Bag</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">Your bag is empty. Time to find something pink! 🎀</div>
          ) : (
            cartItems.map((item) => (
              <div className="drawer-item" key={item.id}>
                <img src={item.product.img} alt={item.product.name} />

                <div className="drawer-item-info">
                  <span className="name">{item.product.name}</span>
                  <span className="price">
                    ₹{(item.product.price * item.qty).toLocaleString("en-IN")}
                  </span>

                  <div className="qty-row">
                    <button className="qty-btn" onClick={() => onChangeQty(item.id, -1)}>
                      <Minus size={12} />
                    </button>
                    <span>{item.qty}</span>
                    <button className="qty-btn" onClick={() => onChangeQty(item.id, 1)}>
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <button className="remove-btn" onClick={() => onRemove(item.id)} aria-label="Remove">
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-foot">
            <div className="drawer-total">
              <span>Total</span>
              <span>₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}
