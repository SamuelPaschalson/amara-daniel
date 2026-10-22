import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RsvpServiceProvider } from './features/rsvp/RsvpServiceProvider';
import './styles/globals.css';
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><RsvpServiceProvider><App /></RsvpServiceProvider></BrowserRouter></React.StrictMode>);
