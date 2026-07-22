import { Link } from "react-router-dom";
import bioImage from "../assets/bio_image.jpg";
import { Section, SectionHeader } from "../components/Section";
import { mission, retreat } from "../data/content";
import "./Page.css";

export default function OurStory() {
  return (
    <>
      <section className="story-hero">
        <div className="container story-hero__grid">
          <div className="story-hero__content">
            <p className="eyebrow">Latashia Picquet · Founder</p>
            <p className="script">My Story</p>
            <h1>From Surviving to Healing</h1>
            <p className="lede">
              Pain did not define my future. It refined my mission.
            </p>
            <div className="story-hero__themes" aria-label="Story themes">
              <span>Resilience</span>
              <span>Healing</span>
              <span>Purpose</span>
            </div>
          </div>

          <figure className="story-hero__portrait">
            <img
              src={bioImage}
              alt="Latashia Picquet, founder of Nola Girls"
            />
            <figcaption>
              <span>Latashia Picquet</span>
              Founder of Nola Girls
            </figcaption>
          </figure>
        </div>
      </section>

      <Section className="story-editorial">
        <article className="story-opening">
          <div className="story-opening__heading">
            <p className="eyebrow">The Beginning</p>
            <h2>My Story Was Bigger Than My Diagnosis</h2>
            <p className="script">My name is Latashia Picquet.</p>
          </div>
          <div className="story-opening__copy">
            <p className="story-opening__lead">
              For as long as I can remember, sickle cell disease has been a
              part of my life.
            </p>
            <p>
              It has brought pain that many people could never imagine,
              countless hospital visits, uncertainty, and moments when I
              questioned how much more I could endure. But through every
              crisis, I discovered that my story was bigger than my diagnosis.
            </p>
            <p>
              Healing is not only physical. It is emotional, mental, and
              spiritual. There came a point in my life when I realized I did
              not just want to survive—I wanted to heal. I wanted peace. I
              wanted joy.
            </p>
          </div>
        </article>

        <div className="story-whole-person" aria-label="The dimensions of healing">
          {[
            ["01", "Physical"],
            ["02", "Emotional"],
            ["03", "Mental"],
            ["04", "Spiritual"],
          ].map(([number, label]) => (
            <div key={label}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>

        <div className="story-narrative-grid">
          <article className="story-chapter-card">
            <p className="eyebrow">The Vision</p>
            <h2>A Space Where Women Can Exhale</h2>
            <p>
              I wanted to create a space where women—especially those who spend
              so much of their lives caring for others while carrying their own
              silent battles—could finally exhale. That vision became the Nola
              Girls Luxury Retreat and the Nola Girls Podcast.
            </p>
            <p>
              Born from my New Orleans roots and inspired by my personal
              journey, the retreat is more than a luxury getaway. It is a
              sacred space for restoration, sisterhood, self-care, and
              spiritual renewal.
            </p>
          </article>

          <article className="story-chapter-card story-chapter-card--accent">
            <p className="eyebrow">The Purpose</p>
            <h2>Healing Is a Lifelong Journey</h2>
            <p>
              Living with sickle cell disease taught me resilience. It taught
              me gratitude for every good day. Most importantly, it taught me
              that healing is not a destination—it is a lifelong journey that
              deserves to be honored. The Nola Girls Luxury Retreat is my way
              of giving that gift to other women.
            </p>
            <p>
              Whether you have faced illness, heartbreak, burnout, trauma, or
              simply the demands of everyday life, the retreat is an invitation
              to reconnect with yourself. It is a reminder that you deserve to
              experience luxury without guilt.
            </p>
            <p>
              Sickle cell disease did not define my future; it refined my
              mission. Healing is powerful, and together we rise.
            </p>
          </article>

          <blockquote className="story-pullquote">
            <span aria-hidden="true">“</span>
            My story is proof that pain can become purpose.
          </blockquote>
        </div>
      </Section>

      <Section dark narrow className="story-mission">
        <SectionHeader center eyebrow="Our Mission" />
        <blockquote className="mission-statement">{mission}</blockquote>
      </Section>

      <Section narrow className="page-cta">
        <div className="page-cta__inner">
          <h2>My Story Led Here</h2>
          <p className="lede">
            This retreat grew from my healing journey—a space created for women
            ready to rest, reconnect, and rise together.
          </p>
          <div className="btn-row page-cta__row">
            <Link to="/reserve" className="btn btn--primary">
              Reserve Spot
            </Link>
            <Link to="/retreat" className="btn btn--secondary">
              Explore the Retreat
            </Link>
          </div>
          <p className="page-cta__meta">
            {retreat.dates} · {retreat.location} · {retreat.spotsLabel}
          </p>
        </div>
      </Section>
    </>
  );
}
