// ============================================================
// Footer.jsx — THE BOTTOM OF THE PAGE (4 columns + bottom bar)
// ============================================================
// WHAT YOU SEE:
//   Col 1: AuraSkin logo + short text + 4 round social icons
//   Col 2: Shop links (jump to #shop)
//   Col 3: Help links
//   Col 4: phone + email + address + newsletter email box
//   Bottom bar: © year + "Secure checkout"
//
// NOTE: lucide-react has no brand icons (Instagram etc.),
// so socials use generic icons: Globe / AtSign / Send / Mail.
// The newsletter form does nothing yet (preventDefault).
// No props needed.
// ============================================================

import { Globe, AtSign, Send, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* 4 columns */}
      <div className="footer-grid">
        {/* Brand: logo + text + socials */}
        <div className="footer-col footer-brand">
          <div className="footer-logo">
            <span className="footer-aura">Aura</span>
            <span className="footer-skin">Skin</span>
          </div>
          <p className="footer-tag">
            Luxury noir skincare — dermatologist formulated serums, creams and masks for healthier, glowing skin.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Website"><Globe size={16} /></a>
            <a href="#" aria-label="Social"><AtSign size={16} /></a>
            <a href="#" aria-label="Share"><Send size={16} /></a>
            <a href="#" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>

        {/* Shop links */}
        <div className="footer-col">
          <h4 className="footer-head">Shop</h4>
          <a href="#shop">All Products</a>
          <a href="#shop">Serums</a>
          <a href="#shop">Moisturizers</a>
          <a href="#shop">Sunscreens</a>
          <a href="#shop">Cleansers & Masks</a>
        </div>

        {/* Help links */}
        <div className="footer-col">
          <h4 className="footer-head">Help</h4>
          <a href="#">About Us</a>
          <a href="#">Ingredients</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Contact</a>
        </div>

        {/* Contact + newsletter */}
        <div className="footer-col">
          <h4 className="footer-head">Stay Glowing</h4>
          <p className="footer-contact"><Phone size={13} /> +91 8111038226</p>
          <p className="footer-contact"><Mail size={13} /> care@auraskin.com</p>
          <p className="footer-contact"><MapPin size={13} /> Coimbatore, India</p>
          <form className="footer-news" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email for offers" aria-label="Email" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      {/* Bottom bar: copyright left, note right */}
      <div className="footer-bottom">
        <span>© {year} AuraSkin — Luxury Noir</span>
        <span className="footer-pay">100% human-made · Secure checkout</span>
      </div>
    </footer>
  );
}