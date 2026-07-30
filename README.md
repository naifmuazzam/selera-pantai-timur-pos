# Selera Pantai Timur — POS

A point-of-sale web app for Selera Pantai Timur™.

## Why

My brother wanted a simple POS — tap a menu item, see the price,
and share the receipt with the customer. No login, no inventory,
no cloud nonsense. Just select, total, share.

Built as a weekend demo, ended up being used for real orders.

## Features

- Browse menu by category (Nasi Kerabu, Mee, Minuman, etc.)
- Tap to add items, adjust quantity, or remove
- Add-ons available per category (Telur Masin, Kaw2, etc.)
- Cart auto-saves — refresh the page and your order stays
- Checkout generates a receipt you can print or share as PDF
- Tablet-first layout, works on desktop and mobile

## Receipt

Currently uses a standard A4 layout — works with any regular printer
or PDF export. Thermal printer CSS (80mm) is already in the codebase
but commented out. Uncomment when you're ready to switch.

## Stack

Vite, React, Tailwind CSS. html2canvas + jspdf for PDF generation (lazy loaded).

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
```

Output is in `dist/` — deploy to Cloudflare Pages, Netlify, Vercel, or any
static host.

## Contact

Kak As — 0162924664
