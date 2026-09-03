// All dress data lives here. To add/remove a product, just edit this array —
// nothing else in the app needs to change.

export const PRODUCTS = [
  {
    id: 1,
    name: "Blossom Wrap Frock",
    category: "Frocks",
    price: 1899,
    img: "https://images.pexels.com/photos/7509903/pexels-photo-7509903.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 2,
    name: "Meadow Bloom Frock",
    category: "Frocks",
    price: 1699,
    img: "https://images.pexels.com/photos/29277214/pexels-photo-29277214.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 3,
    name: "Mural Muse Jumpsuit",
    category: "Jumpsuits",
    price: 2399,
    img: "https://images.pexels.com/photos/14530752/pexels-photo-14530752.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 4,
    name: "Wild Print Jumpsuit",
    category: "Jumpsuits",
    price: 2599,
    img: "https://images.pexels.com/photos/4006508/pexels-photo-4006508.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 5,
    name: "Boulevard Baggy Set",
    category: "Baggys",
    price: 1999,
    img: "https://images.pexels.com/photos/25484767/pexels-photo-25484767.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 6,
    name: "Basketcourt Baggy Fit",
    category: "Baggys",
    price: 2099,
    img: "https://images.pexels.com/photos/20635528/pexels-photo-20635528.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 7,
    name: "Sunset Crop Top",
    category: "Crop Tops",
    price: 899,
    img: "https://images.pexels.com/photos/2767638/pexels-photo-2767638.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 8,
    name: "Trio Crop Top Set",
    category: "Crop Tops",
    price: 1299,
    img: "https://images.pexels.com/photos/9642566/pexels-photo-9642566.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 9,
    name: "Rosé Cocktail Dress",
    category: "Party Wear",
    price: 2999,
    img: "https://images.pexels.com/photos/19788483/pexels-photo-19788483.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 10,
    name: "Midnight Bloom Party Dress",
    category: "Party Wear",
    price: 3299,
    img: "https://images.pexels.com/photos/29467024/pexels-photo-29467024.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
];

// "All" + every unique category name, used to build the filter chips
export const CATEGORIES = ["All", "Frocks", "Jumpsuits", "Baggys", "Crop Tops", "Party Wear"];
