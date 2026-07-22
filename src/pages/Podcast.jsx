import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import FounderVideo from "../components/FounderVideo";
import { retreat } from "../data/content";
import "./Page.css";
import "./Podcast.css";

const podcastVideos = [
  {
    id: "Tl5iV7iMWic",
    title: "The Intro — Episode 1",
    startSeconds: 0,
  },
  {
    id: "Ntrm-oc6uI0",
    title: "Goals — Episode 2",
    startSeconds: 0,
  },
  {
    id: "rmIqTxd-qFQ",
    title: "Happy Mardi Gras — Episode 3",
    startSeconds: 440,
  },
];

export default function Podcast() {
  return (
    <>
      <Section dark className="podcast-episodes-section">
        <div className="section-header section-header--center podcast-video-header">
          <h1>Nola Girls Podcast Episodes</h1>
          <a
            href="https://www.youtube.com/@Nolagirls"
            className="btn btn--secondary podcast-video-header__youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
        <div className="podcast-videos">
          {podcastVideos.map((video) => (
            <article className="podcast-video-card" key={video.id}>
              <h3>{video.title}</h3>
              <FounderVideo
                videoId={video.id}
                title={video.title}
                startSeconds={video.startSeconds}
              />
            </article>
          ))}
        </div>
      </Section>

      <Section narrow className="page-cta">
        <div className="page-cta__inner">
          <p className="script">From Conversation to Connection</p>
          <h2>A Sacred Space to Exhale Together</h2>
          <p className="lede">
            The podcast and retreat share one mission: turning pain into purpose
            and reminding women that healing is powerful.
          </p>
          <div className="btn-row page-cta__row">
            <Link to="/reserve" className="btn btn--primary">
              Reserve Spot
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
