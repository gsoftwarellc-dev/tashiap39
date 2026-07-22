import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav } from "../data/content";
import "./Header.css";

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/**
 * Router links don't re-navigate when the target hash matches the current
 * location, so "/#faq" does nothing if you're already parked on it. Scroll
 * manually in that case.
 */
function scrollToSameHash(e, to, location) {
  const [path, hash] = to.split("#");
  if (!hash) return;
  const samePath = (path || "/") === location.pathname;
  if (!samePath || location.hash !== `#${hash}`) return;

  const el = document.getElementById(hash);
  if (!el) return;
  e.preventDefault();

  // On mobile the open menu occupies layout space; clicking a link closes it,
  // which removes ~500px and shifts everything. Measuring before that lands
  // in the wrong place, so wait until the menu is actually out of the flow.
  const run = (attempt = 0) => {
    const menu = document.querySelector(".header__mobile");
    const menuOpen = menu && menu.getBoundingClientRect().height > 0;

    if (menuOpen && attempt < 20) {
      requestAnimationFrame(() => run(attempt + 1));
      return;
    }

    const header = document.querySelector(".header");
    const offset = (header?.getBoundingClientRect().height ?? 0) + 12;
    window.scrollTo({
      top: Math.max(
        0,
        window.scrollY + el.getBoundingClientRect().top - offset
      ),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  requestAnimationFrame(() => run());
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        {/* Clicking the logo returns to the top of the homepage hero. When
            already on "/", the route doesn't change so ScrollToTop won't
            fire — scroll explicitly. */}
        <Link
          to="/"
          className="header__brand"
          aria-label="Nola Girls — back to top of home page"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion() ? "auto" : "smooth",
              });
            }
          }}
        >
          <span className="header__brand-name">Nola Girls</span>
          <span className="header__brand-sub">Luxury Retreat</span>
        </Link>

        <nav className="header__nav" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `header__link ${isActive && item.to === "/" ? "is-active" : ""}`
              }
              end={item.to === "/"}
              onClick={(e) => scrollToSameHash(e, item.to, location)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/reserve" className="btn btn--primary header__cta">
          Reserve Spot
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">
            {open ? "Close menu" : "Open menu"}
          </span>
          <span className={`header__bars ${open ? "is-open" : ""}`} aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`header__mobile ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="header__mobile-link"
              onClick={(e) => scrollToSameHash(e, item.to, location)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
