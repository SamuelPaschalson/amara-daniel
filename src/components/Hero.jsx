import { useEffect, useState } from 'react';
import { weddingData as d } from '../data/weddingData';

const HERO_SLIDES = [
  { src: '/images/photo-01.webp', alt: `${d.couple.partnerOne} and ${d.couple.partnerTwo} in black tie elegance` },
  { src: '/images/photo-15.webp', alt: `${d.couple.partnerOne} in radiant red gown holding hands with ${d.couple.partnerTwo}` },
  { src: '/images/photo-17.webp', alt: `${d.couple.partnerOne} and ${d.couple.partnerTwo} laughing and celebrating their engagement` },
  { src: '/images/photo-19.webp', alt: `${d.couple.partnerOne} and ${d.couple.partnerTwo} in modern traditional attire` },
  { src: '/images/photo-21.webp', alt: `${d.couple.partnerTwo} giving ${d.couple.partnerOne} a tender kiss on the cheek` },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-slides">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.src}
            className={`hero-slide ${idx === activeSlide ? 'is-active' : ''}`}
            aria-hidden={idx !== activeSlide}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              fetchPriority={idx === 0 ? 'high' : 'auto'}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      <div className="hero-overlays">
        <div className="hero-overlay hero-overlay--vignette" />
        <div className="hero-overlay hero-overlay--gradient" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Together with their families</p>
        <h1 id="hero-title">
          <span>{d.couple.partnerOne}</span>
          <i>&</i>
          <span>{d.couple.partnerTwo}</span>
        </h1>
        <div className="hero-meta">
          <span>{d.dateShort}</span>
          <i>·</i>
          <span>{d.location}</span>
        </div>

        <div className="hero-slide-nav" aria-label="Slideshow controls">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`slide-indicator ${idx === activeSlide ? 'is-active' : ''}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <a href="#invitation" className="scroll-cue" aria-label="Scroll down to invitation">
        <span className="scroll-cue__mouse" aria-hidden="true">
          <span className="scroll-cue__wheel" />
        </span>
        <span className="scroll-cue__text">Scroll to discover</span>
        <span className="scroll-cue__arrow" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

