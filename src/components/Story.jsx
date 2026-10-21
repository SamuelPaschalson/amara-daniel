import { weddingData as d } from '../data/weddingData';
import AnimatedReveal from './AnimatedReveal';
import { ImageWithFallback, SectionHeading } from './UI';

export default function Story() {
  const intro = d.storyIntro || {
    eyebrow: 'Our Story',
    title: 'Two Hearts, One Island, Forever.',
    body: 'Seven chapters of quiet glances, playful algorithms, fake birthday parties, and answered prayers.'
  };

  return (
    <section id="story" className="section story">
      <SectionHeading
        eyebrow={intro.eyebrow}
        title={intro.title}
        body={intro.body}
      />

      <div className="story-chapters">
        {d.story.map((s, i) => {
          const isReverse = i % 2 !== 0;
          const imgDir = isReverse ? 'right' : 'left';
          const copyDir = isReverse ? 'left' : 'right';

          return (
            <div
              key={s.title + i}
              className={`story-row ${isReverse ? 'story-row--reverse' : ''}`}
            >
              <AnimatedReveal
                direction={imgDir}
                delay={80}
                className="story-image-wrap"
              >
                <div className="story-image">
                  <ImageWithFallback
                    src={s.image}
                    alt={s.alt || `${s.title} — ${d.couple.partnerOne} and ${d.couple.partnerTwo}`}
                    style={s.objectPosition ? { objectPosition: s.objectPosition } : undefined}
                  />
                  <span className="story-watermark" aria-hidden="true">{s.roman || s.num}</span>
                </div>
              </AnimatedReveal>

              <AnimatedReveal
                direction={copyDir}
                delay={160}
                className="story-copy-wrap"
              >
                <div className="story-copy">
                  <p className="eyebrow story-kicker">{s.kicker}</p>
                  <h3>{s.title}</h3>

                  <div className="story-paragraphs">
                    {s.paragraphs.map((text, pIdx) => (
                      <p key={pIdx}>{text}</p>
                    ))}
                  </div>

                  {s.timelineSteps && (
                    <div className="story-timeline-card">
                      <div className="timeline-steps">
                        {s.timelineSteps.map((step, stIdx) => (
                          <div key={stIdx} className="timeline-step">
                            <span className="step-dot" aria-hidden="true" />
                            <span className="step-text">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {s.tags && (
                    <div className="story-tags" aria-label="What makes us, us">
                      {s.tags.map(tag => (
                        <span key={tag} className="story-tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  {s.epilogue && (
                    <div className="story-epilogue-card">
                      <div className="epilogue-lines">
                        {s.epilogue.map((line, lIdx) => (
                          <p key={lIdx} className="epilogue-line">{line}</p>
                        ))}
                      </div>
                      {s.closingNote && (
                        <p className="story-closing-note">{s.closingNote}</p>
                      )}
                    </div>
                  )}

                  <span className="story-index">{s.num}</span>
                </div>
              </AnimatedReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
