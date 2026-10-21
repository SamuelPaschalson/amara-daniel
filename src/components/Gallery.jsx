import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, Pause, Play } from 'lucide-react';
import { weddingData as d } from '../data/weddingData';
import Lightbox from './Lightbox';
import { SectionHeading } from './UI';

const AUTOPLAY_MS = 5000;
const total = d.gallery.length;
const pad = n => String(n).padStart(2, '0');

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(-1);
  const [autoplay, setAutoplay] = useState(true);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const thumbsRef = useRef(null);
  const touch = useRef(null);

  const go = useCallback(i => setCurrent(((i % total) + total) % total), []);
  const next = useCallback(() => setCurrent(i => (i + 1) % total), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), []);
  const moveLightbox = useCallback(
    dir => setLightbox(i => (i + dir + total) % total),
    []
  );

  // Only autoplay while the carousel is visible on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay || !inView || lightbox >= 0) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [autoplay, inView, lightbox, current, next]);

  // Keep the active thumbnail in view
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[current];
    if (!strip || !thumb) return;
    const left = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    strip.scrollTo({ left, behavior: 'smooth' });
  }, [current]);

  const onKey = e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  };

  const onTouchStart = e => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY, moved: false };
  };
  const onTouchEnd = e => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
      touch.current.moved = true;
    }
    setTimeout(() => { touch.current = null; }, 0);
  };
  const openCurrent = () => {
    if (touch.current?.moved) return;
    setLightbox(current);
  };

  return (
    <section id="gallery" className="gallery section" ref={sectionRef}>
      <SectionHeading
        eyebrow="Captured moments"
        title="Love, in the in-between."
        body="A collection of glances, laughter, and the moments we wish we could keep forever."
      />

      <div
        className="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Photo gallery"
        tabIndex={0}
        onKeyDown={onKey}
      >
        <div className="carousel-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {d.gallery.map((im, i) => {
            const near = Math.abs(i - current) <= 1 || (current === 0 && i === total - 1) || (current === total - 1 && i === 0);
            return (
              <figure
                key={im.src}
                className={`carousel-slide ${i === current ? 'is-active' : ''}`}
                aria-hidden={i !== current}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
              >
                {near || i === current ? (
                  <>
                    <img className="carousel-slide__blur" src={im.src} alt="" aria-hidden="true" />
                    <img className="carousel-slide__img" src={im.src} alt={im.alt} loading={i === 0 ? 'eager' : 'lazy'} />
                  </>
                ) : null}
              </figure>
            );
          })}

          <button type="button" className="carousel-open" onClick={openCurrent} aria-label={`View photo ${current + 1} full screen`}>
            <span className="carousel-chip"><Expand size={13} aria-hidden="true" /> View</span>
          </button>

          <button type="button" className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Previous photo">
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button type="button" className="carousel-arrow carousel-arrow--next" onClick={next} aria-label="Next photo">
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          <div className="carousel-progress" aria-hidden="true">
            <span
              key={`${current}-${autoplay && inView}`}
              className={autoplay && inView ? 'is-running' : ''}
              style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
            />
          </div>
        </div>

        <div className="carousel-bar">
          <p className="carousel-count" aria-live="polite">
            <strong>{pad(current + 1)}</strong> <span>/ {pad(total)}</span>
          </p>
          <p className="carousel-hint">Swipe or use the arrows</p>
          <button
            type="button"
            className="carousel-play"
            onClick={() => setAutoplay(a => !a)}
            aria-label={autoplay ? 'Pause slideshow' : 'Play slideshow'}
          >
            {autoplay ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
            <span>{autoplay ? 'Pause' : 'Play'}</span>
          </button>
        </div>

        <div className="carousel-thumbs" ref={thumbsRef}>
          {d.gallery.map((im, i) => (
            <button
              key={im.src}
              type="button"
              className={`carousel-thumb ${i === current ? 'is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === current}
            >
              <img src={im.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        items={d.gallery}
        index={lightbox}
        onClose={() => setLightbox(-1)}
        onMove={moveLightbox}
      />
    </section>
  );
}
