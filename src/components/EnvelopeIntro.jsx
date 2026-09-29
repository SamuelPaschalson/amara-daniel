import { useEffect, useState } from 'react';
import { weddingData as d } from '../data/weddingData';

export default function EnvelopeIntro({ onOpen, onStart }) {
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    if (!opening) return;
    const timer = window.setTimeout(onOpen, 2300);
    return () => window.clearTimeout(timer);
  }, [opening, onOpen]);

  const openInvitation = () => {
    if (opening) return;
    onStart();
    setOpening(true);
  };

  return (
    <div className={`envelope-intro ${opening ? 'is-opening' : ''}`}>
      <img
        className="envelope-portrait"
        src={d.featuredImage}
        alt=""
        aria-hidden="true"
      />
      <div className="envelope-intro__veil" />

      <header className="envelope-intro__header">
        <p className="envelope-script">You are cordially invited</p>
        <p className="eyebrow">{d.day} · {d.date}</p>
      </header>

      <button
        className="envelope-stage"
        type="button"
        onClick={openInvitation}
        aria-label="Open Amara and Daniel's wedding invitation"
        disabled={opening}
      >
        <span className="envelope-letter">
          <span className="letter-ornament" aria-hidden="true">✦</span>
          <span className="eyebrow">Together with their families</span>
          <strong>{d.couple.partnerOne} <i>&</i> {d.couple.partnerTwo}</strong>
          <small>{d.dateShort} · {d.location}</small>
        </span>
        <span className="envelope-shell">
          <span className="envelope-lining" />
          <span className="envelope-pocket envelope-pocket--left" />
          <span className="envelope-pocket envelope-pocket--right" />
          <span className="envelope-pocket envelope-pocket--front" />
        </span>
        <span className="envelope-flap">
          <span className="envelope-flap__paper" />
        </span>
        <span className="envelope-address">
          <strong>For our cherished guest</strong>
          <small>From {d.couple.partnerOne} & {d.couple.partnerTwo}</small>
        </span>
        <span className="wax-seal">
          <span>A</span>
          <i>&</i>
          <span>D</span>
        </span>
      </button>

      <footer className="envelope-intro__footer">
        <p>{opening ? 'Opening your invitation…' : 'Tap the seal to open'}</p>
        <div className="day-colors" aria-label="Colors of the day">
          {d.dressColors.map(([name, color]) => (
            <span key={name} title={name} style={{ background: color }} />
          ))}
        </div>
      </footer>
    </div>
  );
}