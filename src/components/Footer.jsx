import { Link } from "react-router-dom";
import { nav, retreat, mission, contact } from "../data/content";
import SocialLinks from "./SocialLinks";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer section--dark">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="script footer__script">Nola Girls</p>
          <p className="footer__mission">{mission}</p>
          <div className="footer__social">
            <h4 className="footer__heading">Follow Along</h4>
            <SocialLinks variant="footer" />
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__list">
            {nav.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">The Retreat</h4>
          <ul className="footer__list footer__list--plain">
            <li>{retreat.dates}</li>
            <li>{retreat.location}</li>
            <li>{retreat.spotsLabel}</li>
          </ul>
          <Link to="/reserve" className="btn btn--primary footer__cta">
            Reserve Spot
          </Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          {contact.confirmed ? (
            <ul className="footer__list footer__list--plain">
              {contact.email && <li>{contact.email}</li>}
              {contact.phone && <li>{contact.phone}</li>}
              {contact.instagram && <li>{contact.instagram}</li>}
            </ul>
          ) : (
            <p className="footer__pending">
              Connect with Nola Girls through the social links.
            </p>
          )}
        </div>
      </div>

      <div className="container footer__base">
        <p>© {year} Nola Girls. All rights reserved.</p>
        {/* Plain text, not a link — the terms document doesn't exist yet.
            Linking it would send buyers to a dead end at the point they're
            checking what they're agreeing to. */}
        <p className="footer__legal">Terms &amp; policy</p>
      </div>
    </footer>
  );
}
