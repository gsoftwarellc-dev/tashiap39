import { Section, SectionHeader } from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import "./Page.css";

export default function Contact() {
  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container container--narrow">
          <p className="script">Stay Connected</p>
          <h1>Connect with Nola Girls</h1>
          <p className="lede page-hero__body">
            Follow Latashia and Nola Girls for retreat, podcast, and healing
            collection updates.
          </p>
        </div>
      </section>

      <Section narrow>
        <div className="contact-social-only">
          <SectionHeader
            center
            eyebrow="Follow Along"
            heading="Find Nola Girls Online"
          />
          <SocialLinks variant="stacked" showLabels />
        </div>
      </Section>
    </>
  );
}
