import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { weddingData as d } from '../data/weddingData';

export default function Footer() {
  return (
    <footer>
      <div>
        <p className="footer-mark">{d.couple.initials}</p>
        <p>
          {d.dateShort}
          <br />
          {d.location}
        </p>
      </div>
      <nav aria-label="Footer navigation">
        {d.nav.map(([l, to]) => (
          <Link to={to} key={l}>
            {l}
          </Link>
        ))}
        <Link to="/rsvp">RSVP</Link>
        <Link to="/guestbook">Guestbook</Link>
      </nav>
      <div className="footer-bottom">
        <span>Made with love.</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="footer-back-to-top"
        >
          <span>Back to top</span>
          <ArrowUp size={14} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
