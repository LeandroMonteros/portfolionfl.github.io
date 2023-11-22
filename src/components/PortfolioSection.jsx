import React from 'react';

function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio">
        <div className="container">
            <div data-aos="fade-up" className="section-title">
                <h2>Portfolio</h2>
                <p>Nuestro portafolio demuestra la calidad de nuestro trabajo</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="200">
                {/* ... Contenido de la sección "Portfolio" ... */}
            </div>
        </div>
    </section>
  );
}

export default PortfolioSection;
