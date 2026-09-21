// ============================================================
// offers.js — THE 3 OFFER ROWS above the product grid
// ============================================================
// WHAT IS THIS FILE?
//   Each offer = 1 colored card on the left + 2-3 products
//   on the right (looked up from Products.js by id).
//
// EACH OFFER HAS 6 FIELDS:
//   id          = unique number
//   style       = look of the card:
//                 "ticket" = gold card, dashed border
//                 "badge"  = white card, gold ribbon corner
//                 "neon"   = black card, gold glow
//   tag         = small label on top, e.g. "Limited Time"
//   title       = card headline, e.g. "Serum Surge"
//   subtitle    = smaller line, e.g. "Flat 25% off on all serums"
//   discount    = big gold text, e.g. "25% OFF"
//   productIds  = ids from Products.js shown next to the card
//
// HOW TO CHANGE AN OFFER:
//   Edit the words, or swap productIds, e.g. [1, 2, 4] -> [3, 4, 1].
// ============================================================

export const OFFERS = [
  {
    id: 1,
    style: "ticket",
    tag: "Limited Time",
    title: "Serum Surge",
    subtitle: "Flat 25% off on all serums",
    discount: "25% OFF",
    productIds: [1, 2, 4],
  },
  {
    id: 2,
    style: "badge",
    tag: "Trending",
    title: "Sun & Glow Duo",
    subtitle: "Buy 1, get the 2nd at 30% off",
    discount: "B1G30",
    productIds: [9, 10, 5],
  },
  {
    id: 3,
    style: "neon",
    tag: "Hot Deal",
    title: "Clean Routine Set",
    subtitle: "Cleansers & masks, save up to 40%",
    discount: "40% OFF",
    productIds: [13, 16, 8],
  },
];