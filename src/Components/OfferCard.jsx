// ============================================================
// OfferCard.jsx — ONE colored offer card (left side of a row)
// ============================================================
// WHAT YOU SEE: [small tag] BIG DISCOUNT, title, subtitle.
// STYLE decides the look (see App.css):
//   "ticket" = gold card, dashed edge   (icon: sparkles)
//   "badge"  = white card, gold ribbon  (icon: tag)
//   "neon"   = black card, gold glow    (icon: flame)
//
// PROPS: offer = { style, tag, title, subtitle, discount }
// ============================================================

import { Sparkles, Tag, Flame } from "lucide-react";

// Which icon goes with which card style
const STYLE_ICON = {
  ticket: Sparkles,
  badge: Tag,
  neon: Flame,
};

export default function OfferCard({ offer }) {
  const Icon = STYLE_ICON[offer.style] || Sparkles;

  return (
    <div className={`offer-card offer-card--${offer.style}`}>
      <span className="offer-tag">
        <Icon size={13} /> {offer.tag}
      </span>
      <div className="offer-discount">{offer.discount}</div>
      <h3 className="offer-title">{offer.title}</h3>
      <p className="offer-subtitle">{offer.subtitle}</p>
    </div>
  );
}