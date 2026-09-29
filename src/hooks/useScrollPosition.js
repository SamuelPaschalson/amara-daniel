import { useEffect,useState } from 'react';
export function useScrollPosition(limit=40){const [scrolled,set]=useState(false);useEffect(()=>{const on=()=>set(window.scrollY>limit);on();addEventListener('scroll',on,{passive:true});return()=>removeEventListener('scroll',on)},[limit]);return scrolled}
