import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBookingBar from "./components/MobileBookingBar";
import FloatingReserve from "./components/FloatingReserve";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Retreat from "./pages/Retreat";
import Podcast from "./pages/Podcast";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import "./components/Section.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scroll to the anchor, offset by the sticky header so the heading isn't
    // hidden underneath it. Re-run on the next frames because images and web
    // fonts land after mount and shift the target's position.
    const scrollToHash = (behavior) => {
      const el = document.querySelector(hash);
      if (!el) return false;
      const header = document.querySelector(".header");
      const offset = (header?.getBoundingClientRect().height ?? 0) + 12;
      const top = window.scrollY + el.getBoundingClientRect().top - offset;
      window.scrollTo({ top: Math.max(0, top), behavior });
      return true;
    };

    let raf1, raf2, settle;
    raf1 = requestAnimationFrame(() => {
      if (!scrollToHash(reduce ? "auto" : "smooth")) return;
      // Correct for late layout shifts once things have settled.
      raf2 = requestAnimationFrame(() => {
        settle = setTimeout(() => scrollToHash("auto"), 450);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(settle);
    };
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/retreat" element={<Retreat />} />
          <Route path="/reserve" element={<Navigate to="/shop" replace />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Navigate to="/" replace />} />
          <Route path="/faq" element={<Navigate to="/" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <MobileBookingBar />
      <FloatingReserve />
    </>
  );
}
