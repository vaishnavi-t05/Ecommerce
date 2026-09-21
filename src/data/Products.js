// ============================================================
// Products.js — THE PRODUCT LIST (all 20 Noir skincare items)
// ============================================================
// WHAT IS THIS FILE?
//   A simple array of products. Everything else (grid, offers,
//   cart) reads from here, so this is the ONLY file you edit
//   to change products.
//
// EACH PRODUCT HAS 5 FIELDS:
//   id        = unique number (never reuse an id!)
//   name      = shown on the card, e.g. "Onyx Glow Vitamin C Serum"
//   category  = must be one of CATEGORIES below (exact spelling!)
//   price     = number in rupees, e.g. 1299 means Rs. 1299
//   img       = photo URL, built by the pexels() helper
//
// HOW TO ADD A NEW PRODUCT (example):
//   {
//     id: 21,
//     name: "Golden Night Elixir",
//     category: "Serums",
//     price: 1599,
//     img: pexels(1234567), // the Pexels photo id
//   },
//
// HOW IMAGES WORK:
//   pexels(13964620) builds:
//   https://images.pexels.com/photos/13964620/pexels-photo-13964620.jpeg?...
//   The number is the Pexels photo id. w=700 keeps loading fast.
//
// RULES:
//   - Sunscreens are CREAM tubes (not liquid droppers).
//   - Masks are jars/bottles only (no face photos).
//   - Every img id is unique (no repeated photos).
// ============================================================

const pexels = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=700`;

export const PRODUCTS = [
  // ---------- Serums: thin liquid in dropper bottles (4) ----------
  {
    id: 1,
    name: "Onyx Glow Vitamin C Serum",
    category: "Serums",
    price: 1299,
    img: pexels(13964620),
  },
  {
    id: 2,
    name: "Noir Elixir Dropper Serum",
    category: "Serums",
    price: 1499,
    img: pexels(12563412),
  },
  {
    id: 3,
    name: "Midnight Repair Serum",
    category: "Serums",
    price: 1399,
    img: pexels(33362028),
  },
  {
    id: 4,
    name: "Obsidian Hydra Serum",
    category: "Serums",
    price: 1199,
    img: pexels(34939709),
  },

  // ---------- Moisturizers: thick cream in jars/tubes (4) ----------
  {
    id: 5,
    name: "Velvet Noir Cream",
    category: "Moisturizers",
    price: 999,
    img: pexels(6645252),
  },
  {
    id: 6,
    name: "Black Caviar Moisture Jar",
    category: "Moisturizers",
    price: 1099,
    img: pexels(8102135),
  },
  {
    id: 7,
    name: "Onyx Barrier Cream",
    category: "Moisturizers",
    price: 1149,
    img: pexels(35274767),
  },
  {
    id: 8,
    name: "Midnight Velvet Cream Tube",
    category: "Moisturizers",
    price: 999,
    img: pexels(10897822),
  },

  // ---------- Sunscreens: thick cream in squeeze tubes (4) ----------
  {
    id: 9,
    name: "Eclipse Noir Cream SPF 50+",
    category: "Sunscreens",
    price: 899,
    img: pexels(11464313),
  },
  {
    id: 10,
    name: "Noir Shield Cream SPF 50",
    category: "Sunscreens",
    price: 849,
    img: pexels(11464437),
  },
  {
    id: 11,
    name: "Onyx Sun Veil Cream SPF 50",
    category: "Sunscreens",
    price: 929,
    img: pexels(11464377),
  },
  {
    id: 12,
    name: "Midnight UV Defense Cream SPF 30",
    category: "Sunscreens",
    price: 799,
    img: pexels(11464478),
  },

  // ---------- Cleansers: wash bottles and foam (4) ----------
  {
    id: 13,
    name: "Charcoal Noir Cleanser",
    category: "Cleansers",
    price: 699,
    img: pexels(6689393),
  },
  {
    id: 14,
    name: "Onyx Foam Purifier",
    category: "Cleansers",
    price: 749,
    img: pexels(7797734),
  },
  {
    id: 15,
    name: "Black Pearl Gel Cleanser",
    category: "Cleansers",
    price: 779,
    img: pexels(35274769),
  },
  {
    id: 19,
    name: "Noir Foam Cleanser",
    category: "Cleansers",
    price: 729,
    img: pexels(2587177),
  },

  // ---------- Masks: jars only, never faces (4) ----------
  {
    id: 16,
    name: "Noir Clay Mask Jar",
    category: "Masks",
    price: 859,
    img: pexels(6167443),
  },
  {
    id: 17,
    name: "Midnight Clay Veil",
    category: "Masks",
    price: 829,
    img: pexels(6847831),
  },
  {
    id: 18,
    name: "Obsidian Clay Ritual",
    category: "Masks",
    price: 899,
    img: pexels(6690236),
  },
  {
    id: 20,
    name: "Charcoal Detox Mask",
    category: "Masks",
    price: 879,
    img: pexels(6690857),
  },
];

// ------------------------------------------------------------
// CATEGORIES: the filter buttons. "All" is always first.
// (OfferSection and CategoryFilter both use these names.)
// ------------------------------------------------------------
export const CATEGORIES = ["All", "Serums", "Moisturizers", "Sunscreens", "Cleansers", "Masks"];