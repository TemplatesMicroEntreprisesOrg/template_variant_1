import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import {
  callOutline,
  timeOutline,
  logoFacebook,
  logoTwitter,
  logoYoutube,
  chatbubbleEllipsesOutline,
  menuOutline,
  arrowForward,
} from 'ionicons/icons';
import './Header.css';

const Header: React.FC = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  // Toggle Navbar
  const toggleNavbar = () => setIsNavbarActive((prev) => !prev);

  // Close Navbar
  const closeNavbar = () => setIsNavbarActive(false);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li className="header-top-item">
              <IonIcon icon={callOutline} aria-hidden="true" />
              <p className="item-title">Call Us :</p>
              <a href="tel:01234567895" className="item-link">
                012 (345) 67 895
              </a>
            </li>
            <li className="header-top-item">
              <IonIcon icon={timeOutline} aria-hidden="true" />
              <p className="item-title">Opening Hour :</p>
              <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
            </li>
            <li>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <IonIcon icon={logoFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <IonIcon icon={logoTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <IonIcon icon={logoYoutube} />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <IonIcon icon={chatbubbleEllipsesOutline} />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`header-bottom ${isHeaderActive ? 'active' : ''}`}
        data-header
      >
        <div className="container">
          <a href="#" className="logo">
            Barber
            <span className="span">Hair Salon</span>
          </a>

          <nav
            className={`navbar container ${isNavbarActive ? 'active' : ''}`}
            data-navbar
          >
            <ul className="navbar-list">
              {['Home', 'Services', 'Pricing', 'Gallery', 'Appointment'].map(
                (link) => (
                  <li className="navbar-item" key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="navbar-link"
                      onClick={closeNavbar}
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <button
            className="nav-toggle-btn"
            aria-label="toggle menu"
            onClick={toggleNavbar}
          >
            <IonIcon icon={menuOutline} aria-hidden="true" />
          </button>

          <a href="#" className="btn has-before">
            <span className="span">Appointment</span>
            <IonIcon icon={arrowForward} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
