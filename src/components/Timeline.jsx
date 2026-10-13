import { useEffect, useRef, useState, useCallback } from 'react';
import { weddingData as d } from '../data/weddingData';
import { SectionHeading } from './UI';

export default function Timeline() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const markerRefs = useRef([]);
  const [inView, setInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [points, setPoints] = useState([]);

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

  const measureMarkers = useCallback(() => {
    if (!trackRef.current) return;
    const trackRect = trackRef.current.getBoundingClientRect();
    const pts = markerRefs.current.map((marker) => {
      if (!marker) return { x: 0, y: 0 };
      const rect = marker.getBoundingClientRect();
      return {
        x: Math.round(rect.left + rect.width / 2 - trackRect.left),
        y: Math.round(rect.top + rect.height / 2 - trackRect.top),
      };
    });
    setPoints(pts);
  }, []);

  useEffect(() => {
    measureMarkers();
    const handleResize = () => measureMarkers();
    window.addEventListener('resize', handleResize);
    const timer = setTimeout(measureMarkers, 350);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [inView, measureMarkers]);

  // Which target index should the map trail reach?
  // When hovered, it trails from Step 1 (index 0) to hoveredIndex.
  // When not hovered, it stays at activeStep (default 0, or last selected step).
  const currentTarget = hoveredIndex !== null ? hoveredIndex : activeStep;

  // Build SVG path strings
  let fullPathD = '';
  if (points.length > 1) {
    fullPathD = `M ${points[0].x} ${points[0].y} ` + points.slice(1).map((p) => `L ${p.x} ${p.y}`).join(' ');
  }

  let trailPathD = '';
  if (points.length > 0) {
    trailPathD = `M ${points[0].x} ${points[0].y}`;
    for (let k = 1; k <= currentTarget && k < points.length; k++) {
      trailPathD += ` L ${points[k].x} ${points[k].y}`;
    }
  }

  return (
    <section id="schedule" className="timeline section" ref={sectionRef}>
      <SectionHeading
        eyebrow="The Day"
        title="From first arrival to last dance."
        body="Join us for each moment of joy, prayer, and celebration."
      />

      <div
        className={`timeline-track ${inView ? 'is-animating' : ''}`}
        ref={trackRef}
      >
        {/* Responsive Broken Line Map Trail SVG */}
        {points.length > 1 && (
          <svg className="timeline-map-svg" aria-hidden="true">
            <defs>
              <linearGradient id="mapTrailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#751f35" />
                <stop offset="50%" stopColor="#c7a36a" />
                <stop offset="100%" stopColor="#b76e79" />
              </linearGradient>
            </defs>

            {/* Subtle base dotted route across all schedule points */}
            <path d={fullPathD} className="timeline-map-guide" />

            {/* Dynamic animated broken map trail from Step 1 to hovered/current step */}
            {currentTarget > 0 && (
              <path d={trailPathD} className="timeline-map-active-trail" />
            )}
          </svg>
        )}

        {d.schedule.map(([time, label], i) => {
          const isCurrentTarget = i === currentTarget;
          const isInTrail = i <= currentTarget;

          return (
            <div
              className={`timeline-item ${inView ? 'is-active' : ''} ${hoveredIndex === i ? 'is-hovered' : ''} ${isInTrail ? 'is-in-trail' : ''} ${isCurrentTarget ? 'is-trail-target' : ''}`}
              style={{ '--i': i }}
              key={time}
              onMouseEnter={() => {
                setHoveredIndex(i);
                setActiveStep(i);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveStep(i)}
            >
              <div
                className="timeline-marker"
                ref={(el) => (markerRefs.current[i] = el)}
              >
                <span className="timeline-dot" />
                <span className="timeline-pulse" />
                {isCurrentTarget && (
                  <span className="timeline-compass-ring" aria-hidden="true" />
                )}
              </div>

              <div className="timeline-card">
                <span className="timeline-num">{String(i + 1).padStart(2, '0')}</span>
                <time className="timeline-time">{time}</time>
                <h3 className="timeline-title">{label}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
