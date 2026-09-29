import { weddingData as d } from '../data/weddingData';
export default function Featured(){return <section className="featured"><img src={d.featuredImage} alt={`${d.couple.partnerOne} and ${d.couple.partnerTwo} laughing together`} loading="lazy"/><blockquote>“And suddenly, all the love stories<br/>we had ever heard made sense.”</blockquote></section>}
