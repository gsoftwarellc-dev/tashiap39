import { Link } from "react-router-dom";
import { Section, SectionHeader } from "../components/Section";
import FounderVideo from "../components/FounderVideo";
import bioImage from "../assets/bio_image.jpg";
import { products } from "../data/catalog";
import {
  hero,
  retreat,
  pillars,
  readyTo,
  whatToExpect,
  podcast,
  finalCta,
  mission,
} from "../data/content";
import "./Home.css";
import "./Page.css";

const healingProduct = products.find((product) => product.id === "healing-bag");

export default function Home() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="hero">
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="script hero__script">{hero.script}</p>
            <h1 className="hero__heading">{hero.heading}</h1>
            <p className="hero__body">{hero.body}</p>
            <div className="btn-row hero__actions">
              <Link to="/reserve" className="btn btn--primary">
                Reserve Spot
              </Link>
              <Link to="/retreat" className="btn btn--secondary hero__secondary">
                Explore the Retreat
              </Link>
            </div>
          </div>
          <figure className="hero__portrait">
            <img
              src={bioImage}
              alt="Latashia Picquet, founder of Nola Girls"
            />
            <span className="hero__portrait-frame" aria-hidden="true" />
          </figure>
        </div>
      </section>

      <Section className="founder-video-section">
        <SectionHeader
          center
          eyebrow="From Latashia"
          heading="Hear the Heart Behind Nola Girls"
        />
        <FounderVideo />
      </Section>

      {/* 2 — RETREAT INTRODUCTION + PILLARS */}
      <Section id="retreat-intro" dark>
        <SectionHeader
          center
          eyebrow={retreat.dates}
          heading={retreat.name}
          body="A three-day intimate retreat designed for women who are ready to slow down, reconnect with themselves, and experience healing in a supportive sisterhood."
        />
        <div className="pillars">
          {pillars.map((p, i) => (
            <article key={p.title} className="pillar">
              <span className="pillar__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__body">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 3 — WHO IT'S FOR + WHAT AWAITS */}
      <Section id="who" className="home-journey">
        <div className="home-journey__grid">
          <article className="home-journey__card home-journey__card--who">
            <p className="eyebrow">Is This You?</p>
            <h2>This Retreat Is for Women Ready To…</h2>
            <ul className="home-journey__list">
              {readyTo.map((item) => (
                <li key={item}>
                  <span className="home-journey__diamond" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="home-journey__card home-journey__card--awaits">
            <p className="eyebrow">The Feeling</p>
            <h2>What Awaits You</h2>
            <ul className="home-journey__list home-journey__list--compact">
              {whatToExpect.map((item) => (
                <li key={item}>
                  <span className="home-journey__line" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="home-journey__cta">
          <Link to="/reserve" className="btn btn--primary">
            This Is My Time — Reserve My Spot
          </Link>
        </div>
      </Section>

      <Section id="shop-preview" className="home-shop-preview">
        <div className="healing-feature">
          <div className="healing-feature__visual" aria-hidden="true">
            <span className="healing-feature__orb">✦</span>
            <span className="healing-feature__wordmark">Nola Girls</span>
          </div>
          <div className="healing-feature__content">
            <p className="eyebrow">Healing Beyond the Retreat</p>
            <h2>The Nola Girls Healing Collection</h2>
            <p className="lede">
              {healingProduct?.description}
            </p>
            <Link to="/shop" className="btn btn--secondary healing-feature__cta">
              Explore the Collection
            </Link>
          </div>
        </div>
      </Section>

      {/* 9 — PODCAST */}
      <Section id="podcast" dark>
        <div className="podcast podcast--single">
          <div className="podcast__content">
            <p className="eyebrow">The Podcast</p>
            <h2>{podcast.heading}</h2>
            <hr className="rule" />
            <p className="lede">{podcast.body}</p>

            <div className="btn-row podcast__links">
              {podcast.platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  className="btn btn--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 10 — FOUNDER MISSION */}
      <Section id="testimonials">
        <SectionHeader
          center
          eyebrow="Why Nola Girls Exists"
          heading="Pain Can Become Purpose"
        />
        <div className="testimonials__fallback">
          <blockquote className="mission-quote">{mission}</blockquote>
          <p className="testimonials__note">— Latashia Picquet, Founder</p>
        </div>
      </Section>

      {/* 12 — FINAL CTA */}
      <section className="section section--dark final-cta">
        <div className="container container--narrow final-cta__inner">
          <p className="script">Healing Is Powerful</p>
          <h2>{finalCta.heading}</h2>
          <p className="lede final-cta__body">{finalCta.body}</p>
          <Link to="/reserve" className="btn btn--primary final-cta__btn">
            {finalCta.button}
          </Link>
          <p className="final-cta__meta">
            {retreat.dates} · {retreat.location}
          </p>
        </div>
      </section>
    </>
  );
}
