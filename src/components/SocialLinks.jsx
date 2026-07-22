import { social } from "../data/content";
import "./SocialLinks.css";

/**
 * Inline SVG icons — no external icon library, nothing extra to load.
 *
 * Links render as inert (non-clickable) placeholders until real URLs are
 * supplied in content.js. A social icon that leads nowhere, or to the wrong
 * account, is worse than one that visibly isn't ready yet.
 */
const icons = {
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  tiktok: (
    <path
      d="M15 3a5.2 5.2 0 0 0 5 4.2v3.1a8.3 8.3 0 0 1-5-1.7v6.6a6.1 6.1 0 1 1-5.3-6v3.2a2.9 2.9 0 1 0 2.1 2.8V3H15z"
      fill="currentColor"
      stroke="none"
    />
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.2v5.6l5-2.8-5-2.8z" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function SocialLinks({ variant = "default", showLabels = false }) {
  return (
    <ul className={`social social--${variant}`}>
      {social.map((item) => {
        const glyph = icons[item.icon];
        if (!glyph) return null;

        const content = (
          <>
            <span
              className={`social__icon social__icon--${item.icon}`}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {glyph}
              </svg>
            </span>
            {showLabels && <span className="social__label">{item.name}</span>}
          </>
        );

        return (
          <li key={item.name}>
            {item.url ? (
              <a
                href={item.url}
                className="social__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                {content}
              </a>
            ) : (
              <span
                className="social__link social__link--pending"
                aria-label={`${item.name} — link not yet available`}
                title="Link not yet supplied"
              >
                {content}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
