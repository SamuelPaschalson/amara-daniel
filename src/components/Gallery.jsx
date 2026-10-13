import { useCallback, useState } from 'react';
import { weddingData as d } from '../data/weddingData';
import Lightbox from './Lightbox';
import { SectionHeading } from './UI';

export default function Gallery() {
  const [active, setActive] = useState(-1);
  const move = useCallback(
    dir => setActive(i => (i + dir + d.gallery.length) % d.gallery.length),
    []
  );

  return (
    <section id="gallery" className="gallery section">
      <SectionHeading
        eyebrow="Captured moments"
        title="Love, in the in-between."
        body="A collection of glances, laughter, and the moments we wish we could keep forever."
      />
      <div className="masonry">
        {d.gallery.map((im, i) => (
          <button
            key={i}
            className="gallery-item"
            onClick={() => setActive(i)}
            aria-label={`Open portrait ${i + 1}`}
          >
            <img src={im.src} alt={im.alt} loading="lazy" />
            <div className="gallery-overlay" aria-hidden="true">
              <div className="gallery-card">
                <span className="gallery-num">Portrait · {String(i + 1).padStart(2, '0')}</span>
                <span className="gallery-action">View ↗</span>
              </div>
            </div>
          </button>
        ))}
      </div>
      <Lightbox
        items={d.gallery}
        index={active}
        onClose={() => setActive(-1)}
        onMove={move}
      />
    </section>
  );
}
