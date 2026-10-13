import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { weddingData as d } from '../data/weddingData';

export default function MusicPlayer({ playing, muted, onToggle, onMute }) {
  if (!d.audioUrl) return null;

  return (
    <div className="music">
      <button
        type="button"
        onClick={onToggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
      </button>
      <button
        type="button"
        onClick={onMute}
        aria-label={muted ? 'Unmute music' : 'Mute music'}
        title={muted ? 'Unmute music' : 'Mute music'}
      >
        {muted ? <VolumeX size={15} aria-hidden="true" /> : <Volume2 size={15} aria-hidden="true" />}
        <span className="music-label">{muted ? 'Muted' : 'Sound'}</span>
      </button>
    </div>
  );
}
