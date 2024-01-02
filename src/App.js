import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil/Accueil';
import Contact from './components/Contact/Contact';
import TermsAndPrivacy from './components/TermsAndPrivacy/TermsAndPrivacy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import './components/i18n.js';

function NotFound() {
  return <div>NotFound</div>;
}

function App() {
  return (
    <div className="App">
       <a 
  className="icon-fixed watsapp" 
  href="https://wa.me/33642985037" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Lien sur WhatsApp">
 <FontAwesomeIcon icon={faWhatsapp} size="3x" color="green" />
</a>
<a className="icon-fixed phone" href="tel:+33642985037" aria-label="Appel +33 6 42 98 50 37">
    <FontAwesomeIcon icon={faPhone} size="2x" color="green" />
</a>


    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
 </div>
  );
}

export default App;
