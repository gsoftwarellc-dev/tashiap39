export function Section({ id, dark = false, narrow = false, className = "", children }) {
  return (
    <section
      id={id}
      className={`section ${dark ? "section--dark" : ""} ${className}`}
    >
      <div className={`container ${narrow ? "container--narrow" : ""}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, script, heading, body, center = false }) {
  return (
    <div className={`section-header ${center ? "section-header--center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {script && <p className="script">{script}</p>}
      {heading && <h2>{heading}</h2>}
      {body && <p className="lede section-header__body">{body}</p>}
    </div>
  );
}
