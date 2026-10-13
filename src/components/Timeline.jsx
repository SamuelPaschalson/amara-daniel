import { useEffect, useRef, useState } from 'react';
import { weddingData as d } from '../data/weddingData';
import { SectionHeading } from './UI';

export default function Timeline() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="schedule" className="timeline section" ref={sectionRef}>
      <SectionHeading
        eyebrow="The Day"
        title="From first arrival to last dance."
        body="Join us for each moment of joy, prayer, and celebration."
      />

      <div className={`timeline-track ${inView ? 'is-animating' : ''}`}>
        <div className="timeline-line-track" aria-hidden="true">
          <div className="timeline-line-progress" />
        </div>

        {d.schedule.map(([time, label], i) => (
          <div
            className={`timeline-item ${inView ? 'is-active' : ''} ${hoveredIndex === i ? 'is-hovered' : ''}`}
            style={{ '--i': i }}
            key={time}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="timeline-marker">
              <span className="timeline-dot" />
              <span className="timeline-pulse" />
            </div>

            <div className="timeline-card">
              <span className="timeline-num">{String(i + 1).padStart(2, '0')}</span>
              <time className="timeline-time">{time}</time>
              <h3 className="timeline-title">{label}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
