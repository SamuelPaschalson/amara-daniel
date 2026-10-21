import { weddingData as d } from '../data/weddingData';
import AnimatedReveal from './AnimatedReveal';
import { Button } from './UI';

export default function Featured() {
  return (
    <section className="featured" id="celebrate" aria-label="A promise of forever">
      <div className="featured-backdrop">
        <img
          src={d.featuredImage}
          alt={`${d.couple.partnerOne} and ${d.couple.partnerTwo} sharing a loving smile`}
          loading="lazy"
        />
        <div className="featured-overlay featured-overlay--vignette" />
        <div className="featured-overlay featured-overlay--gradient" />
        <div className="featured-overlay featured-overlay--radial" />
        <div className="featured-overlay featured-overlay--pattern" />
      </div>

      <AnimatedReveal direction="zoom" delay={100} className="featured-reveal-wrap">
        <div className="featured-content">
          <p className="eyebrow featured-eyebrow">A Promise of Forever</p>
          <blockquote className="featured-quote">
            “And suddenly, all the love stories,<br /> we had ever heard made sense.”
          </blockquote>
          <p className="featured-lede">
            Two hearts, one serendipitous journey, and a lifetime of shared laughter.<br className="featured-br" />
            We cannot wait to celebrate this milestone with you.
          </p>

          <div className="featured-actions">
            <Button to="/rsvp" variant="light" className="featured-btn featured-btn--primary">
              Reply to our Invitation
            </Button>
            <Button to="/guestbook" variant="light" className="featured-btn featured-btn--secondary">
              Sign our Guestbook
            </Button>
          </div>

          <div className="featured-badge">
            <span>{d.couple.initials}</span>
            <i>·</i>
            <span>{d.date}</span>
            <i>·</i>
            <span>{d.location}</span>
          </div>
        </div>
      </AnimatedReveal>
    </section>
  );
}

