import { Link } from 'react-router-dom';
import Logovtc from './logo_vtc.png';
import './Header.css';
import React, { useState } from 'react';
import Flag from 'react-world-flags';
import { FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

 const changeLanguage = (lng) => {
   console.log("Changing language to: ", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div className="logo-container">
        <img src={Logovtc} alt="Logo" className="logo" />
      </div>

      <div className="burger-menu" onMouseEnter={openMenu}>
  <div className="burger-icon">
    <FaBars />
  </div>

        {menuOpen && (
          <div className={`menu-dropdown ${menuOpen ? 'show' : ''}`} onMouseLeave={closeMenu}>
            <Link to="/" onClick={closeMenu}>{t('header.home')}</Link>
            <Link to="/Contact" onClick={closeMenu}>{t('header.bookYourRide')}</Link>
            <a href="#target-header" onClick={closeMenu}>{t('header.ourRates')}</a>
          </div>
        )}
      </div>
      <div className="contact-icons">
        <Flag code="US" height="25" className="flag-icon" onClick={() => changeLanguage('en')} />
        <Flag code="FR" height="25" className="flag-icon" onClick={() => changeLanguage('fr')} />
      </div>
      <div className="contact-icons2">
        <Flag code="US" height="15" className="flag-icon" onClick={() => changeLanguage('en')} />
        <Flag code="FR" height="15" className="flag-icon" onClick={() => changeLanguage('fr')} />
      </div>
      
    </header>
  );
};

export default Header;

