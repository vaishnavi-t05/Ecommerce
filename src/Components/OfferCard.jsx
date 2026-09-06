import React from "react";
import { Sparkles, Tag, Flame } from "lucide-react";

// Small icon-per-style helper, just to give each card its own personality
const STYLE_ICON = {
  ticket: Sparkles,
  badge: Tag,
  neon: Flame,
};

/**
 * Props:
 * - offer: { style, tag, title, subtitle, discount }
 */
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
