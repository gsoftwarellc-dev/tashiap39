import { Link } from "react-router-dom";
import "./FloatingReserve.css";

/**
 * Always-visible reserve button.
 *
 * Desktop/tablet only — below 1100px the fixed MobileBookingBar already
 * occupies the bottom of the screen, and two fixed CTAs would overlap.
 *
 * It remains visible on every route as the site's persistent primary action.
 */
export default function FloatingReserve() {
  return (
    <Link to="/reserve" className="floating-reserve" aria-label="Reserve your spot">
      <span className="floating-reserve__label">Reserve Spot</span>
    </Link>
  );
}
