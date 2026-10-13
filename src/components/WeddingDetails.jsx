import { Clock, MapPin } from 'lucide-react';
import { weddingData as d } from '../data/weddingData';
import AnimatedReveal from './AnimatedReveal';
import { Button, SectionHeading } from './UI';

export default function WeddingDetails() {
  return (
    <section id="wedding" className="details section">
      <AnimatedReveal direction="down">
        <SectionHeading
          eyebrow={`${d.day} · ${d.date}`}
          title="The wedding"
          body={`Join us at ${d.venue}, where the garden gives way to an evening under the stars.`}
          align="center"
        />
      </AnimatedReveal>

      <div className="details-list">
        {d.events.map((e, i) => (
          <AnimatedReveal
            key={e.title}
            delay={i * 120}
            direction={i % 2 === 0 ? 'left' : 'right'}
            className="detail-item"
          >
            <span>0{i + 1}</span>
            <h3>{e.title}</h3>
            <p className="detail-meta">
              <Clock size={13} className="detail-icon" aria-hidden="true" />
              <span>{e.time}</span>
            </p>
            <p className="detail-meta">
              <MapPin size={13} className="detail-icon" aria-hidden="true" />
              <span>{e.place}</span>
            </p>
          </AnimatedReveal>
        ))}
      </div>

      <AnimatedReveal direction="up" delay={200}>
        <Button href={d.mapUrl} target="_blank" rel="noreferrer">
          View on map
        </Button>
      </AnimatedReveal>
    </section>
  );
}

