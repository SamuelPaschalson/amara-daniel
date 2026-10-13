import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { weddingData as d } from '../data/weddingData';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Navbar() {
  const scrolled = useScrollPosition();
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0) {
        setScrollProgress((window.scrollY / max) * 100);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [loc.pathname]);

  return (
    <header className={`navbar ${scrolled || loc.pathname !== '/' ? 'navbar--solid' : ''}`}>
      <Link className="monogram" to="/" aria-label={`${d.couple.partnerOne} and ${d.couple.partnerTwo} home`}>
        {d.couple.initials}
      </Link>

      <nav className="nav-desktop" aria-label="Main navigation">
        {d.nav.map(([label, to]) => (
          <Link to={to} key={label}>
            {label}
          </Link>
        ))}
        <Link className="nav-rsvp" to="/rsvp">
          RSVP
        </Link>
      </nav>

      <button
        className={`menu-toggle ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span />
        <span />
      </button>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {d.nav.map(([label, to], i) => (
            <Link to={to} key={label} style={{ '--i': i }}>
              {label}
            </Link>
          ))}
          <Link to="/guestbook">Guestbook</Link>
          <Link className="button button--light" to="/rsvp">
            Reply to our invitation <span>↗</span>
          </Link>
        </nav>
        <p>
          {d.day} · {d.date}
          <br />
          {d.location}
        </p>
      </div>

      <div
        className="nav-scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}

