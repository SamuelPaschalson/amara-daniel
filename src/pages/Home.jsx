import AnimatedReveal from '../components/AnimatedReveal';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import Story from '../components/Story';
import Couple from '../components/Couple';
import WeddingDetails from '../components/WeddingDetails';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import Featured from '../components/Featured';
import Travel from '../components/Travel';
import DressCode from '../components/DressCode';
import FAQ from '../components/FAQ';
import { Button } from '../components/UI';
import { weddingData as d } from '../data/weddingData';

export default function Home() {
  return (
    <main id="main">
      <Hero />

      <section id="invitation" className="invitation section">
        <img className="invitation-wash" src={d.gallery[8].src} alt="" aria-hidden="true" />
        <AnimatedReveal direction="left" delay={50}>
          <div>
            <h2>Two lives.<br />One beautiful<br />beginning.</h2>
          </div>
        </AnimatedReveal>
        <AnimatedReveal direction="right" delay={150}>
          <div>
            <p>With joyful hearts, we invite you to celebrate the beginning of our next chapter together.</p>
            <p className="signature">{d.couple.partnerOne} & {d.couple.partnerTwo}</p>
            <Button to="/rsvp" variant="text">Reply to our invitation</Button>
          </div>
        </AnimatedReveal>
      </section>

      <Countdown />
      <Story />
      <Couple />
      <WeddingDetails />
      <Timeline />
      <Featured />
      <Gallery />
      <Travel />
      <DressCode />
      <FAQ />

      <section className="closing section" aria-label="Closing invitation">
        <div className="closing-backdrop">
          <img
            src="/images/photo-21.webp"
            alt={`${d.couple.partnerOne} and ${d.couple.partnerTwo}`}
            aria-hidden="true"
            loading="lazy"
          />
          <div className="closing-overlay closing-overlay--vignette" />
          <div className="closing-overlay closing-overlay--gradient" />
          <div className="closing-overlay closing-overlay--glow" />
        </div>

        <AnimatedReveal direction="zoom" delay={100}>
          <div className="closing-card">
            <p className="eyebrow">One More Thing</p>
            <h2>Come for the vows.<br /><i>Stay for the dancing.</i></h2>
            <p className="closing-subtext">
              With joyful hearts, we look forward to welcoming you to Jos.<br />
              Please confirm your attendance so we can reserve your seat at our celebration.
            </p>

            <div className="closing-actions">
              <Button to="/rsvp" variant="light">
                RSVP by 19 November
              </Button>
              <Button to="/guestbook" variant="text">
                Sign our Guestbook
              </Button>
            </div>

            <p className="closing-signature">
              With all our love,<br />
              <strong>{d.couple.partnerOne} & {d.couple.partnerTwo}</strong>
            </p>
          </div>
        </AnimatedReveal>
      </section>
    </main>
  );
}
