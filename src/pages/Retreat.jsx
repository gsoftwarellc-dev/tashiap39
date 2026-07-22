import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { pillars, readyTo, retreat } from "../data/content";
import "./Page.css";
import "./Retreat.css";

export default function Retreat() {
  return (
    <>
      <section className="retreat-hero">
        <div className="container retreat-hero__inner">
          <div className="retreat-hero__content">
            <p className="eyebrow">Houston · September 2026</p>
            <p className="script">A Sacred Escape</p>
            <h1>{retreat.name}</h1>
            <p className="lede">
              A three-day intimate experience created for women to exhale,
              reconnect with themselves, and honor healing as a lifelong
              journey.
            </p>
            <Link to="/our-story" className="btn btn--secondary retreat-hero__cta">
              Meet the Founder
            </Link>
          </div>

          <div className="retreat-hero__facts" aria-label="Retreat details">
            <div>
              <span>Dates</span>
              <strong>{retreat.dates}</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>{retreat.location}</strong>
            </div>
            <div>
              <span>Experience</span>
              <strong>Only {retreat.spots} women</strong>
            </div>
          </div>
        </div>
      </section>

      <Section className="retreat-intro">
        <div className="retreat-intro__grid">
          <div>
            <p className="eyebrow">Why Nola Girls</p>
            <h2>More Than a Luxury Getaway</h2>
            <p className="lede">
              Born from Latashia Picquet’s personal healing journey and New
              Orleans roots, the retreat is a sacred space for restoration,
              sisterhood, self-care, and spiritual renewal.
            </p>
          </div>

          <blockquote className="retreat-invitation">
            <span className="script">A Note from Latashia</span>
            “Whether you have faced illness, heartbreak, burnout, trauma, or
            simply the demands of everyday life, this retreat is an invitation
            to reconnect with yourself.”
          </blockquote>
        </div>
      </Section>

      <Section dark className="retreat-pillars-section">
        <div className="retreat-section-heading">
          <p className="eyebrow">The Heart of the Experience</p>
          <h2>Four Ways to Come Home to Yourself</h2>
        </div>
        <div className="retreat-pillars">
          {pillars.map((pillar, index) => (
            <article key={pillar.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="retreat-audience-section">
        <div className="retreat-audience">
          <div className="retreat-audience__heading">
            <p className="eyebrow">This Experience Is for You</p>
            <h2>If You Are Ready to Choose Yourself</h2>
            <p>
              Nola Girls welcomes women carrying visible and silent battles who
              are ready to make room for rest, connection, and healing.
            </p>
          </div>
          <ul>
            {readyTo.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section dark narrow className="retreat-next-step">
        <div className="page-cta__inner">
          <p className="script">Healing Is Powerful</p>
          <h2>Stay Connected with Nola Girls</h2>
          <p className="lede">
            Follow the journey and explore the healing collection inspired by
            the heart of the retreat.
          </p>
          <div className="btn-row page-cta__row">
            <Link to="/contact" className="btn btn--primary">
              Connect with Nola Girls
            </Link>
            <Link to="/shop" className="btn btn--secondary">
              Explore the Collection
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
