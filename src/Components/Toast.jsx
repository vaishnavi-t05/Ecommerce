// ============================================================
// Toast.jsx — THE SMALL POPUP ("added to bag")
// ============================================================
// WHAT YOU SEE: a little pill at the bottom center, visible
// for 1.8 seconds after clicking "Add to Cart".
//
// PROPS: message = text to show. Empty text ("") = hidden.
// App.jsx decides the text and the timer (see showToast).
// ============================================================

export default function Toast({ message }) {
  if (!message) return null;
  return <div className="toast">{message}</div>;
}