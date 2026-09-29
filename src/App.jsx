import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import EnvelopeIntro from './components/EnvelopeIntro';
import { weddingData as d } from './data/weddingData';
const Home = lazy(() => import('./pages/Home'));
const RSVPPage = lazy(() => import('./pages/RSVPPage'));
const GuestbookPage = lazy(() => import('./pages/GuestbookPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
export default function App(){
  const location=useLocation();
  const {pathname}=location;
  const [entered,setEntered]=useState(()=>{
    try{return sessionStorage.getItem('amara-daniel-invitation-opened')==='true'}catch{return false}
  });
  const [playing,setPlaying]=useState(false);
  const [muted,setMuted]=useState(false);
  const audioRef=useRef(null);

  const startMusic=useCallback(()=>{
    audioRef.current?.play()
      .then(()=>setPlaying(true))
      .catch(()=>setPlaying(false));
  },[]);

  const openInvitation=useCallback(()=>{
    try{sessionStorage.setItem('amara-daniel-invitation-opened','true')}catch{}
    setEntered(true);
  },[]);

  useEffect(()=>{
    if(!entered||!location.hash)return;
    const timer=window.setTimeout(()=>{
      document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior:'smooth'});
    },80);
    return()=>window.clearTimeout(timer);
  },[entered,location.pathname,location.hash]);

  const toggleMusic=async()=>{
    if(!audioRef.current)return;
    if(playing)audioRef.current.pause();
    else await audioRef.current.play();
    setPlaying(!playing);
  };

  return <>
    <audio ref={audioRef} src={d.audioUrl} loop muted={muted}/>
    {!entered&&<EnvelopeIntro onOpen={openInvitation} onStart={startMusic}/>}
    <div className={!entered?'site-shell site-shell--waiting':'site-shell site-shell--entered'} aria-hidden={!entered}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar/>
      <Suspense fallback={<div className="route-loader" role="status">Preparing the celebration…</div>}>
        <Routes location={pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/rsvp" element={<RSVPPage/>}/>
          <Route path="/guestbook" element={<GuestbookPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
      <Footer/>
      <MusicPlayer playing={playing} muted={muted} onToggle={toggleMusic} onMute={()=>{const next=!muted;setMuted(next);if(audioRef.current)audioRef.current.muted=next}}/>
    </div>
  </>
}
