# React + Vite

## Updating products and pricing

The storefront is controlled from `src/data/catalog.js`. No backend or database
is required to update what appears on the website.

- Change a product's `price` from `null` to a number to display a price.
- Add a product by copying an existing object and giving it a unique `id`.
- Put product images in `public/products` and set `image` to the public path.
- Change `statusLabel` to update the availability message.
- Add a hosted secure checkout URL to `purchaseUrl` to display a Buy Now button.

The catalog is display-only while `purchaseUrl` is `null`; it does not process
payments, track inventory, or store customer information.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
