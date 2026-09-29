import RSVPForm from '../components/RSVPForm';import {weddingData as d} from '../data/weddingData';
export default function RSVPPage(){return <main id="main" className="subpage rsvp-page"><header><p className="eyebrow">{d.date} · {d.location}</p><h1>Will you join us?</h1><p>Kindly reply by 18 March 2027. We have saved you a place.</p></header><RSVPForm/></main>}
