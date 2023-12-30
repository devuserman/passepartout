import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Email from './mail_post.png';
import { useTranslation } from 'react-i18next';


export function Footer() {  
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-logo">
      <p className="text-logo">{t('footer.developedBy')}</p>
        <img className="logo-dev" src="/images/logo.png" alt="Logo" />
        </div>
        </div>
        
  <div className="footer-section">
  <div className="footer-contact">
  <a 
  href="https://wa.me/33642985037" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Contactez-nous par WhatsApp"
>
</a>

    <a href="tel:+33642985037">{t('footer.callUs')}</a>
    <a href="mailto:jereservemonvtc@gmail.com" title="Envoyez-nous un mail" className="mail-box">
    {t('footer.contactByEmail')}
      <img src={Email} alt="Email Icon" className="icon-mail" />
    </a>
  </div>
</div>

     
      <div className="footer-section footer-legal">
        <Link to="/terms-and-privacy"> {t('footer.termsAndPrivacy')}</Link>
      </div>
    
    </footer>
  );
};

export default Footer;
