// ============================================================
// CartDrawer.jsx — THE SLIDE-IN SHOPPING BAG
// ============================================================
// WHAT YOU SEE (when open):
//   Dark overlay + panel on the right with:
//   "Your Bag" + X button, item list, Total, [Checkout]
//   Empty bag shows: "Your bag is empty. Time to glow! ✨"
//
// EACH ITEM ROW: photo, name, price × qty, [-] qty [+], trash.
//
// PROPS:
//   open        = true/false, show or hide the whole drawer
//   onClose     = function that closes it (X button + overlay click)
//   cartItems   = array of { id, qty, product } (built in App.jsx)
//   cartTotal   = total price number
//   onChangeQty = function(id, +1 or -1)
//   onRemove    = function(id) to delete one row
// ============================================================

import { X, Plus, Minus, Trash2 } from "lucide-react";

export default function CartDrawer({ open, onClose, cartItems, cartTotal, onChangeQty, onRemove }) {
  // Closed? Show nothing at all.
  if (!open) return null;

  return (
    <>
      {/* Dark background — clicking it closes the drawer */}
      <div className="overlay" onClick={onClose} />

      {/* The panel itself */}
      <div className="cart-drawer">
        <div className="drawer-handle" />

        {/* Top: title + close button */}
        <div className="drawer-head">
          <h3>Your Bag</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Middle: items or empty message */}
        <div className="drawer-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">Your bag is empty. Time to glow! ✨</div>
          ) : (
            cartItems.map((item) => (
              <div className="drawer-item" key={item.id}>
                <img src={item.product.img} alt={item.product.name} />

                <div className="drawer-item-info">
                  <span className="name">{item.product.name}</span>
                  <span className="price">₹{(item.product.price * item.qty).toLocaleString("en-IN")}</span>

                  {/* Quantity stepper: minus, number, plus */}
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

                {/* Trash can deletes the row */}
                <button className="remove-btn" onClick={() => onRemove(item.id)} aria-label="Remove">
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Bottom: total + checkout (only when items exist) */}
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