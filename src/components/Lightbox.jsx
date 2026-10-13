import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items, index, onClose, onMove }) {
  useEffect(() => {
    if (index < 0) return;
    const key = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    window.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', key);
      document.body.style.overflow = '';
    };
  }, [index, onClose, onMove]);

  if (index < 0) return null;
  const item = items[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image ${index + 1} of ${items.length}`}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={26} aria-hidden="true" />
      </button>

      <button
        type="button"
        className="lightbox-prev"
        onClick={() => onMove(-1)}
        aria-label="Previous image"
      >
        <ChevronLeft size={30} aria-hidden="true" />
      </button>

      <img src={item.src} alt={item.alt} />

      <button
        type="button"
        className="lightbox-next"
        onClick={() => onMove(1)}
        aria-label="Next image"
      >
        <ChevronRight size={30} aria-hidden="true" />
      </button>

      <p>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</p>
    </div>
  );
}

