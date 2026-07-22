import { useMemo, useState } from "react";
import { Section } from "../components/Section";
import { formatProductPrice, products } from "../data/catalog";
import "./Page.css";
import "./Shop.css";

export default function Shop() {
  const [cart, setCart] = useState({});

  const cartItems = useMemo(
    () =>
      products
        .filter((product) => product.price != null && cart[product.id] > 0)
        .map((product) => ({ ...product, quantity: cart[product.id] })),
    [cart],
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const changeQuantity = (product, amount) => {
    if (product.price == null) return;
    setCart((current) => ({
      ...current,
      [product.id]: Math.max(0, (current[product.id] || 0) + amount),
    }));
  };

  return (
    <>
      <section className="shop-hero">
        <div className="container shop-hero__inner">
          <p className="script">The Nola Girls Collection</p>
          <h1>Shop</h1>
          <p>Retreat tickets and healing products in one simple storefront.</p>
        </div>
      </section>

      <Section className="shop-section">
        <div className="shop-layout">
          <div className="shop-products">
            <div className="shop-heading">
              <p className="eyebrow">Products</p>
              <h2>Choose Your Experience</h2>
            </div>

            <div className="shop-product-grid">
              {products.map((product) => {
                const quantity = cart[product.id] || 0;
                const displayPrice = formatProductPrice(product.price);

                return (
                  <article className="shop-product" key={product.id}>
                    <div className={`shop-product__visual shop-product__visual--${product.type}`}>
                      {product.image ? (
                        <img src={product.image} alt={product.imageAlt || product.name} />
                      ) : (
                        <span aria-hidden="true">
                          {product.type === "retreat" ? "NG" : "✦"}
                        </span>
                      )}
                    </div>

                    <div className="shop-product__content">
                      <p className="eyebrow">{product.eyebrow}</p>
                      <h3>{product.name}</h3>
                      <p className="shop-product__description">{product.description}</p>

                      <div className="shop-product__purchase">
                        <p className="shop-product__price">
                          <span>Price</span>
                          <strong>{displayPrice || "$—"}</strong>
                        </p>

                        {quantity > 0 ? (
                          <div className="shop-quantity" aria-label={`Quantity for ${product.name}`}>
                            <button
                              type="button"
                              onClick={() => changeQuantity(product, -1)}
                              aria-label={`Remove one ${product.name}`}
                            >
                              −
                            </button>
                            <span>{quantity}</span>
                            <button
                              type="button"
                              onClick={() => changeQuantity(product, 1)}
                              aria-label={`Add one ${product.name}`}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            className="btn btn--primary shop-product__add"
                            onClick={() => changeQuantity(product, 1)}
                            disabled={product.price == null}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="shop-summary">
            <div className="shop-summary__heading">
              <p className="eyebrow">Your Cart</p>
              <h2>Order Summary</h2>
            </div>

            {cartItems.length > 0 ? (
              <ul className="shop-summary__items">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div>
                      <strong>{item.name}</strong>
                      <span>Qty {item.quantity}</span>
                    </div>
                    <span>{formatProductPrice(item.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="shop-summary__empty">
                <span aria-hidden="true">✦</span>
                <p>Your cart is empty.</p>
              </div>
            )}

            <div className="shop-summary__total">
              <span>Subtotal</span>
              <strong>{formatProductPrice(subtotal) || "$0.00"}</strong>
            </div>

            <button type="button" className="btn btn--primary shop-summary__checkout" disabled>
              Checkout
            </button>
          </aside>
        </div>
      </Section>
    </>
  );
}
