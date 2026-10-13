import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
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
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
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

  const mobileMenuContent = (
    <div
      id="mobile-menu"
      className={`mobile-menu ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
    >
      <div className="mobile-menu-header">
        <Link
          className="monogram"
          to="/"
          aria-label={`${d.couple.partnerOne} and ${d.couple.partnerTwo} home`}
          onClick={() => setOpen(false)}
        >
          {d.couple.initials}
        </Link>
        <button
          type="button"
          className="mobile-menu-close"
          onClick={() => setOpen(false)}
          aria-label="Close navigation menu"
        >
          <X size={26} />
        </button>
      </div>

      <nav aria-label="Mobile navigation">
        {d.nav.map(([label, to], i) => (
          <Link
            to={to}
            key={label}
            style={{ '--i': i }}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link to="/guestbook" onClick={() => setOpen(false)}>
          Guestbook
        </Link>
        <Link
          className="button button--light"
          to="/rsvp"
          onClick={() => setOpen(false)}
        >
          <span>Reply to our invitation</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </nav>
      <div className="mobile-menu-footer">
        <p>
          {d.day} · {d.date}
          <br />
          {d.location}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`navbar ${scrolled || loc.pathname !== '/' ? 'navbar--solid' : ''} ${open ? 'is-menu-open' : ''}`}
      >
        <Link
          className="monogram"
          to="/"
          aria-label={`${d.couple.partnerOne} and ${d.couple.partnerTwo} home`}
          onClick={() => setOpen(false)}
        >
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

        <div
          className="nav-scroll-progress"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>

      {typeof document !== 'undefined' && createPortal(mobileMenuContent, document.body)}
    </>
  );
}
