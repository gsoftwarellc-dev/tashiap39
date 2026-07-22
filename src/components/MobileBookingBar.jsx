import { Link } from "react-router-dom";
import { retreat } from "../data/content";
import "./MobileBookingBar.css";

/**
 * Permanently visible ticket CTA on mobile, per the brief.
 * Remains visible on every route as the mobile equivalent of the floating CTA.
 */
export default function MobileBookingBar() {
  return (
    <div className="booking-bar">
      <div className="booking-bar__meta">
        <span className="booking-bar__dates">{retreat.datesShort}</span>
        <span className="booking-bar__spots">{retreat.spots} spots only</span>
      </div>
      <Link to="/reserve" className="btn btn--primary booking-bar__cta">
        Reserve Spot
      </Link>
    </div>
  );
}
