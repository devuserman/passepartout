import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Header-min.css';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navigateToTarifs = (e) => {
    if (!location.pathname.includes('Accueil')) {
      e.preventDefault(); 
      navigate('/#target-header');
    }
  };
  
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
    <>
    <Helmet>
  <title>VTC Privé – Votre Service de Taxi Personnel à La Rochelle</title>
  
    </Helmet>

    <header>
      <h1 className="visually-hidden">Réservez un Taxi à La Rochelle</h1>
    
      <div className="logo-container">
  <img 
  rcset="
                /images/logo_vtc.webp 500w,
                /images/logo_vtc.avif 1000w,
                /images/logo_vtc1.webp 2000w"
  sizes="(max-width: 500px) 500px,
         (max-width: 1000px) 1000px,
         2000px"
  src="/images/logo_vtc1.webp" alt="Logo vtc privé" className="logo" />

      </div>


      <div className="burger-menu" onMouseEnter={openMenu}>
  <div className="burger-icon">
    <FaBars />
  </div>

        {menuOpen && (
          <div className={`menu-dropdown ${menuOpen ? 'show' : ''}`} onMouseLeave={closeMenu}>
            <Link to="/" onClick={closeMenu}>{t('header.home')}</Link>
            <Link to="/Contact" onClick={closeMenu}>{t('header.bookYourRide')}</Link>
            <a href="#target-header" onClick={(e) => navigateToTarifs(e)}>{t('header.ourRates')}</a>
          </div>
        )}
      </div>
      <div className="contact-icons">
      <img src={`${process.env.PUBLIC_URL}/images/Flag_of_the_United_States.webp`} height="25" className="flag-icon" alt="Flag of the United States" onClick={() => changeLanguage('en')} />
      <img src={`${process.env.PUBLIC_URL}/images/Flag_of_France.webp`} height="25" className="flag-icon" alt="Flag of France" onClick={() => changeLanguage('fr')} />
      </div>
      <div className="contact-icons2">
        <img src={`${process.env.PUBLIC_URL}/images/Flag_of_the_United_States.webp`} height="15" className="flag-icon" aria-label="Flag of the United States" alt="Flag of the United States" onClick={() => changeLanguage('en')} />
        <img src={`${process.env.PUBLIC_URL}/images/Flag_of_France.webp`} height="15" className="flag-icon" aria-label="Flag of France" alt="Flag of France" onClick={() => changeLanguage('fr')} />
      </div>
      
    </header>
    </>
  );
};

export default Header;

