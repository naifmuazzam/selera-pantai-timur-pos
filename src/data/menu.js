const categories = [
  {
    id: "nasi-kerabu",
    name: "Nasi Kerabu",
    badge: "Nasi Kerabu",
    items: [
      { id: "nk-1", name: "Nasi Kerabu Ayam", price: 8.00, emoji: "🍗" },
      { id: "nk-2", name: "Nasi Kerabu Daging Bakar", price: 9.00, emoji: "🥩" },
      { id: "nk-3", name: "Nasi Kerabu Ikan Celup Tepung", price: 8.00, emoji: "🐟" },
    ],
    addOns: [
      { id: "nk-a1", name: "Telur Masin", price: 1.00, emoji: "🥚" },
      { id: "nk-a2", name: "Keropok Keping", price: 1.00, emoji: "🫓" },
      { id: "nk-a3", name: "Bawang Putih Jeruk", price: 1.00, emoji: "🧄" },
    ],
  },
  {
    id: "nasi-air",
    name: "Nasi Air",
    badge: "Nasi Air",
    items: [
      { id: "na-1", name: "Nasi Air Ayam", price: 6.00, emoji: "🍗" },
      { id: "na-2", name: "Nasi Air Daging", price: 7.00, emoji: "🥩" },
      { id: "na-3", name: "Nasi Air Perut", price: 8.00, emoji: "🥘" },
      { id: "na-4", name: "Nasi Air Keting", price: 8.00, emoji: "🍖" },
      { id: "na-5", name: "Nasi Air Ayam + Daging", price: 8.00, emoji: "🍗🥩" },
      { id: "na-6", name: "Nasi Air Daging + Keting", price: 9.00, emoji: "🥩🍖" },
      { id: "na-7", name: "Nasi Air Keting + Perut", price: 9.00, emoji: "🍖🥘" },
      { id: "na-8", name: "Nasi Air Perut + Daging", price: 9.00, emoji: "🥘🥩" },
      { id: "na-9", name: "Nasi Air Special", price: 11.00, emoji: "🧆" },
    ],
    addOns: [
      { id: "na-a1", name: "Meatball (2pcs)", price: 1.00, emoji: "🧆" },
      { id: "na-a2", name: "Telur Masin", price: 1.00, emoji: "🥚" },
      { id: "na-a3", name: "Ikan Bilis", price: 1.00, emoji: "🐟" },
    ],
  },
  {
    id: "mi-kueytiaw-bihun",
    name: "Mi / Kueytiaw / Bihun",
    badge: "Mee",
    items: [
      { id: "mk-1", name: "Mi Ayam", price: 6.00, emoji: "🍗" },
      { id: "mk-2", name: "Mi Daging", price: 7.00, emoji: "🥩" },
      { id: "mk-3", name: "Mi Perut", price: 8.00, emoji: "🥘" },
      { id: "mk-4", name: "Mi Keting", price: 8.00, emoji: "🍖" },
      { id: "mk-5", name: "Mi Ayam + Daging", price: 8.00, emoji: "🍗🥩" },
      { id: "mk-6", name: "Mi Daging + Keting", price: 9.00, emoji: "🥩🍖" },
      { id: "mk-7", name: "Mi Keting + Perut", price: 9.00, emoji: "🍖🥘" },
      { id: "mk-8", name: "Mi Perut + Daging", price: 9.00, emoji: "🥘🥩" },
      { id: "mk-9", name: "Mi Special", price: 11.00, emoji: "🧆" },
    ],
    addOns: [
      { id: "mk-a1", name: "Meatball (2pcs)", price: 1.00, emoji: "🧆" },
      { id: "mk-a2", name: "Telur Masin", price: 1.00, emoji: "🥚" },
      { id: "mk-a3", name: "Ikan Bilis", price: 1.00, emoji: "🐟" },
    ],
  },
  {
    id: "meggi-celup",
    name: "Meggi Celup",
    badge: "Meggi Celup",
    items: [
      { id: "mc-1", name: "Meggi Celup Ayam", price: 7.00, emoji: "🍗" },
      { id: "mc-2", name: "Meggi Celup Daging", price: 8.00, emoji: "🥩" },
      { id: "mc-3", name: "Meggi Celup Perut", price: 8.00, emoji: "🥘" },
      { id: "mc-4", name: "Meggi Celup Keting", price: 8.00, emoji: "🍖" },
      { id: "mc-5", name: "Meggi Celup Ayam + Daging", price: 9.00, emoji: "🍗🥩" },
      { id: "mc-6", name: "Meggi Celup Daging + Keting", price: 9.00, emoji: "🥩🍖" },
      { id: "mc-7", name: "Meggi Celup Keting + Perut", price: 9.00, emoji: "🍖🥘" },
      { id: "mc-8", name: "Meggi Celup Perut + Daging", price: 9.00, emoji: "🥘🥩" },
      { id: "mc-9", name: "Meggi Celup Special", price: 11.00, emoji: "🧆" },
    ],
    addOns: [
      { id: "mc-a1", name: "Meatball (2pcs)", price: 1.00, emoji: "🧆" },
      { id: "mc-a2", name: "Telur Masin", price: 1.00, emoji: "🥚" },
      { id: "mc-a3", name: "Ikan Bilis", price: 1.00, emoji: "🐟" },
    ],
  },
  {
    id: "kerabu-meggi",
    name: "Kerabu Meggi",
    badge: "Kerabu Meggi",
    items: [
      { id: "km-1", name: "Kerabu Meggi Biasa", price: 6.00, emoji: "🍜" },
    ],
    addOns: [
      { id: "km-a1", name: "Meatball (2pcs)", price: 1.00, emoji: "🧆" },
      { id: "km-a2", name: "Telur Masin", price: 1.00, emoji: "🥚" },
      { id: "km-a3", name: "Ikan Bilis", price: 1.00, emoji: "🐟" },
    ],
  },
  {
    id: "minuman-panas",
    name: "Minuman Panas",
    badge: "Minuman Panas",
    items: [
      { id: "mp-1", name: "Teh O Panas", price: 1.50, emoji: "🍵" },
      { id: "mp-2", name: "Teh Susu", price: 2.00, emoji: "🫖" },
      { id: "mp-3", name: "Nescafe O", price: 2.00, emoji: "☕" },
      { id: "mp-4", name: "Nescafe Susu", price: 2.50, emoji: "☕" },
      { id: "mp-5", name: "Kopi O", price: 2.00, emoji: "🫘" },
      { id: "mp-6", name: "Kopi Susu", price: 2.50, emoji: "🫘" },
      { id: "mp-7", name: "Makhota Dewa", price: 2.00, emoji: "🌿" },
      { id: "mp-8", name: "Kopi Jantan", price: 2.00, emoji: "🌿" },
      { id: "mp-9", name: "Horlick", price: 3.50, emoji: "🥛" },
      { id: "mp-10", name: "Nestum", price: 2.00, emoji: "🥣" },
      { id: "mp-11", name: "Milo", price: 2.50, emoji: "🍫" },
      { id: "mp-12", name: "Teh O Halia", price: 2.50, emoji: "🫚" },
      { id: "mp-13", name: "Teh Susu Halia", price: 3.00, emoji: "🫚" },
    ],
    addOns: [
      { id: "mp-a1", name: "Kaw2 (Extra Strong)", price: 1.00, emoji: "💪" },
    ],
  },
  {
    id: "minuman-sejuk",
    name: "Minuman Sejuk",
    badge: "Minuman Sejuk",
    items: [
      { id: "ms-1", name: "Teh O Ais", price: 2.00, emoji: "🧊" },
      { id: "ms-2", name: "Teh Ais", price: 3.00, emoji: "🧋" },
      { id: "ms-3", name: "Nescafe O Ais", price: 3.00, emoji: "🧊" },
      { id: "ms-4", name: "Nescafe Susu Ais", price: 3.50, emoji: "🥤" },
      { id: "ms-5", name: "Kopi Ais", price: 2.50, emoji: "🧊" },
      { id: "ms-6", name: "Sirap Ais", price: 1.50, emoji: "🫧" },
      { id: "ms-7", name: "Sirap Limau", price: 2.50, emoji: "🍋" },
      { id: "ms-8", name: "Air Limau Ais", price: 2.50, emoji: "🍋" },
      { id: "ms-9", name: "Nestum Ais", price: 3.00, emoji: "🥣" },
      { id: "ms-10", name: "Horlick Ais", price: 4.50, emoji: "🥛" },
      { id: "ms-11", name: "Kopi Jantan Ais", price: 2.50, emoji: "🌿" },
      { id: "ms-12", name: "Laici", price: 2.50, emoji: "🍇" },
      { id: "ms-13", name: "Anggur", price: 1.50, emoji: "🍇" },
      { id: "ms-14", name: "Sarsi", price: 1.50, emoji: "🥤" },
      { id: "ms-15", name: "Jagung", price: 2.50, emoji: "🌽" },
      { id: "ms-16", name: "Oren", price: 1.50, emoji: "🍊" },
      { id: "ms-17", name: "Sunquick", price: 3.50, emoji: "🍊" },
      { id: "ms-18", name: "Barli", price: 2.50, emoji: "🌾" },
      { id: "ms-19", name: "Cincau", price: 2.50, emoji: "🫒" },
      { id: "ms-20", name: "Susu", price: 3.50, emoji: "🥛" },
    ],
    addOns: [
      { id: "ms-a1", name: "Kaw2 (Extra Strong)", price: 1.00, emoji: "💪" },
    ],
  },
]

const enriched = categories.map((cat) => {
  const enrich = (item, isAddOn) => ({
    ...item,
    category: cat.name,
    categoryBadge: cat.badge,
    isAddOn,
  })
  return {
    ...cat,
    items: cat.items.map((item) => enrich(item, false)),
    addOns: (cat.addOns || []).map((item) => enrich(item, true)),
  }
})

export default enriched
