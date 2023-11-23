import React, { useEffect, useState } from 'react';
import logo from '../img/logo solo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);

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
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
            <li><a className="nav-link scrollto" href="#about">Nosotros</a></li>
            <li><a className="nav-link scrollto" href="#services">Servicios</a></li>
            <li><a className="nav-link scrollto" href="#portfolio">Portafolio</a></li>
            <li><a className="nav-link scrollto" href="#pricing">Paquetes</a></li>
            <li><a className="nav-link scrollto" href="#contacto">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
