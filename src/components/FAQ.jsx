import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { weddingData as d } from '../data/weddingData';
import AnimatedReveal from './AnimatedReveal';
import { SectionHeading } from './UI';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section">
      <AnimatedReveal direction="down">
        <SectionHeading eyebrow="Good to know" title="Questions, answered." />
      </AnimatedReveal>

      <div>
        {d.faqs.map(([q, a], i) => (
          <AnimatedReveal
            key={q}
            delay={i * 80}
            direction={i % 2 === 0 ? 'left' : 'right'}
          >
            <article className={open === i ? 'is-open' : ''}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
              >
                <span>{q}</span>
                <i className="faq-toggle-icon">
                  {open === i ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
                </i>
              </button>
              <div id={`faq-${i}`}>
                <p>{a}</p>
              </div>
            </article>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}
