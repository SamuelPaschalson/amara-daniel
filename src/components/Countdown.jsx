import { useCountdown } from '../hooks/useCountdown';
import { weddingData as d } from '../data/weddingData';
import AnimatedReveal from './AnimatedReveal';

export default function Countdown() {
  const t = useCountdown(d.dateISO);

  if (!t.total) {
    return (
      <section className="countdown" aria-label="Celebration day">
        <AnimatedReveal direction="up" className="countdown-wrap">
          <p className="eyebrow countdown-eyebrow">The celebration</p>
          <h2 className="countdown-headline">Today is the day.</h2>
        </AnimatedReveal>
      </section>
    );
  }

  const units = [
    { label: 'Days', value: t.days },
    { label: 'Hours', value: t.hours },
    { label: 'Minutes', value: t.minutes },
    { label: 'Seconds', value: t.seconds },
  ];

  return (
    <section className="countdown" aria-label="Countdown to the wedding">
      <AnimatedReveal direction="zoom" className="countdown-wrap">
        <p className="eyebrow countdown-eyebrow">Until we say “I do”</p>
        <div className="countdown-grid" role="timer" aria-live="polite">
          {units.map((u) => (
            <div key={u.label} className="countdown-item">
              <strong className="countdown-num">
                {String(u.value).padStart(2, '0')}
              </strong>
              <small className="countdown-label">{u.label}</small>
            </div>
          ))}
        </div>
      </AnimatedReveal>
    </section>
  );
}


