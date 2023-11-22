import React from 'react';
import heroimg from '../img/hero-img.png';

function HeroSection() {
  return (
    <section className="d-flex align-items-center" id="hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1 pt-5 pt-lg-0">
                    <h1 data-aos="fade-up">Hace crecer tu negocio con LNF Soluciones Digitales</h1>
                    <h2 data-aos="fade-up" data-aos-delay="400">Creamos y promocionamos páginas web para pymes y empresas</h2>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                    <img className="img-fluid bounce animated" src={heroimg} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default HeroSection;
