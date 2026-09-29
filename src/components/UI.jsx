import { Link } from 'react-router-dom';
import AnimatedReveal from './AnimatedReveal';
export function Button({to,href,children,variant='dark',...props}){const c=`button button--${variant}`;if(to)return <Link className={c} to={to}{...props}>{children}<span aria-hidden="true">↗</span></Link>;if(href)return <a className={c} href={href}{...props}>{children}<span aria-hidden="true">↗</span></a>;return <button className={c}{...props}>{children}</button>}
export function SectionHeading({eyebrow,title,body,align='left'}){return <AnimatedReveal><header className={`section-heading section-heading--${align}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{body&&<p className="lede">{body}</p>}</header></AnimatedReveal>}
export function ImageWithFallback({src,alt,className='',...props}){return <img src={src} alt={alt} className={className} loading="lazy" onError={e=>{e.currentTarget.style.opacity='.18';e.currentTarget.alt='Image unavailable'}} {...props}/>}
