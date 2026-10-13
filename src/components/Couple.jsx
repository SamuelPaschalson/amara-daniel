import { useState } from 'react';
import { weddingData as d } from '../data/weddingData';
import AnimatedReveal from './AnimatedReveal';
import { ImageWithFallback } from './UI';

const PROFILE_DETAILS = {
  Amanda: {
    title: 'Dr. Amanda',
    quote: '“He was worth every prayer.”',
    tags: ['Physician', 'Sunday Laughter', 'Pure Sunshine'],
    note: 'Radiant healer, lover of deep conversations, travel playlists, and joyful celebrations.'
  },
  Nnanyelugo: {
    title: 'Dr. Nnanyelugo',
    quote: '“I noticed her from the very start.”',
    tags: ['Visionary Doctor', 'Chief Romantic', 'Steadfast Anchor'],
    note: 'Steadfast optimist, generous host, and the rock of our shared journey.'
  }
};

export default function Couple() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="couple" className="couple section">
      <AnimatedReveal direction="down">
        <p className="eyebrow centered">The Two of Us</p>
      </AnimatedReveal>

      <div className="couple-grid">
        {d.coupleProfiles.map((p, i) => {
          const extra = PROFILE_DETAILS[p.name] || {};
          const isHovered = activeCard === p.name;

          return (
            <AnimatedReveal
              className={`profile profile--${i}`}
              delay={i * 140}
              direction={i === 0 ? 'left' : 'right'}
              key={p.name}
            >
              <div
                className={`profile-photo ${isHovered ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveCard(p.name)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(activeCard === p.name ? null : p.name)}
                tabIndex={0}
                role="region"
                aria-label={`Profile portrait of ${p.name}`}
              >
                <ImageWithFallback src={p.image} alt={`${p.name}, ${p.role}`} />

                <div className="profile-hover-card" aria-hidden={!isHovered}>
                  <div className="hover-card__header">
                    <span className="hover-card__role">{p.role}</span>
                  </div>
                  <h3 className="hover-card__title">{extra.title || p.name}</h3>
                  <p className="hover-card__note">{extra.note || p.text}</p>
                  
                  {extra.tags && (
                    <div className="hover-card__tags">
                      {extra.tags.map(t => (
                        <span key={t} className="hover-tag">{t}</span>
                      ))}
                    </div>
                  )}

                  {extra.quote && (
                    <blockquote className="hover-card__quote">
                      {extra.quote}
                    </blockquote>
                  )}
                </div>

                <div className="profile-cue" aria-hidden="true">
                  <span>Discover</span>
                </div>
              </div>

              <p className="eyebrow">{p.role}</p>
              <h2>{p.name}</h2>
              <p>{p.text}</p>
            </AnimatedReveal>
          );
        })}
      </div>
    </section>
  );
}
