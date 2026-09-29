import {weddingData as d} from '../data/weddingData';
export default function MusicPlayer({playing,muted,onToggle,onMute}){if(!d.audioUrl)return null;return <div className="music"><button onClick={onToggle} aria-label={playing?'Pause music':'Play music'}>{playing?'Ⅱ':'▶'}</button><button onClick={onMute} aria-label={muted?'Unmute music':'Mute music'}>{muted?'Muted':'Sound'}</button></div>}
