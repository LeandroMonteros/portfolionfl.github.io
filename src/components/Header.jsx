import React, { useEffect, useState } from 'react';
import logo from '../img/logo solo.png';
import { List, XLg } from 'react-bootstrap-icons';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`d-flex align-items-center fixed-top ${scrolled ? 'header-scrolled' : ''}`} id="header">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav id="navbar" className={`navbar ${mobileMenuOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li><a className="nav-link scrollto active" href="#hero" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
            <li><a className="nav-link scrollto" href="#about" onClick={() => setMobileMenuOpen(false)}>Nosotros</a></li>
            <li><a className="nav-link scrollto" href="#services" onClick={() => setMobileMenuOpen(false)}>Servicios</a></li>
            <li><a className="nav-link scrollto" href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portafolio</a></li>
            <li><a className="nav-link scrollto" href="#pricing" onClick={() => setMobileMenuOpen(false)}>Paquetes</a></li>
            <li><a className="nav-link scrollto" href="#contact" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
          </ul>
          <i className={`bi mobile-nav-toggle ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XLg /> : <List />}
          </i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
