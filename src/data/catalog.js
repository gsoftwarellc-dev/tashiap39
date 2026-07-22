/**
 * FRONTEND PRODUCT CATALOG
 *
 * Add products by copying one object in `products` and changing its values.
 * Set `price` to a number (for example, 149) to display it.
 * Leave `price` as null to hide the price.
 *
 * Optional product images can be placed in /public/products and referenced as:
 * image: "/products/your-image.jpg"
 *
 * To sell through a hosted checkout later (for example, a secure payment link),
 * set `purchaseUrl` to that full URL. The product card will show a Buy Now link
 * without requiring this website to have its own backend or database.
 *
 * This file controls display only. There is intentionally no checkout,
 * inventory tracking, database, or payment processing in the frontend.
 */

export const catalogSettings = {
  currency: "USD",
  locale: "en-US",
};

export const products = [
  {
    id: "retreat-ticket",
    type: "retreat",
    name: "Nola Girls Luxury Retreat Ticket",
    eyebrow: "The Retreat",
    description:
      "Your place at the Nola Girls Luxury Retreat in Houston, Texas, September 18–20, 2026.",
    price: null,
    image: null,
    imageAlt: "Nola Girls Luxury Retreat ticket",
    status: null,
    statusLabel: null,
    link: "/retreat",
    linkLabel: "Explore the Retreat",
    purchaseUrl: null,
    purchaseLabel: "Reserve Now",
  },
  {
    id: "healing-bag",
    type: "product",
    name: "Nola Girls Healing Bag",
    eyebrow: "Healing Collection",
    description:
      "A Nola Girls healing bag inspired by restoration, reflection, and intentional self-care.",
    price: null,
    image: null,
    imageAlt: "Nola Girls Healing Bag",
    status: null,
    statusLabel: null,
    link: null,
    linkLabel: null,
    purchaseUrl: null,
    purchaseLabel: "Buy Now",
  },
];

export function formatProductPrice(price) {
  if (price === null || price === undefined) return null;

  return new Intl.NumberFormat(catalogSettings.locale, {
    style: "currency",
    currency: catalogSettings.currency,
  }).format(price);
}
