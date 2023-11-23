import React, { useState } from 'react';
import image1 from '../img/portfolio/portafolio-1.jpeg';
import image2 from '../img/portfolio/portafolio-2.jpeg';
import image3 from '../img/portfolio/portafolio-3.jpeg';
import { Link } from 'react-bootstrap-icons';

function PortfolioSection() {
  const [filter, setFilter] = useState('*');

  const handleFilterClick = (value) => {
    setFilter(value);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div data-aos="fade-up" className="section-title">
          <h2>Portfolio</h2>
          <p>Nuestro portafolio demuestra la calidad de nuestro trabajo</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li onClick={() => handleFilterClick('*')} className={filter === '*' ? 'filter-active' : ''}>Todos</li>
              <li onClick={() => handleFilterClick('.filter-app')} className={filter === '.filter-app' ? 'filter-active' : ''}>Hoteleria</li>
              <li onClick={() => handleFilterClick('.filter-card')} className={filter === '.filter-card' ? 'filter-active' : ''}>Construccion</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="400">
          {filter === '*' || filter === '.filter-app' ? (
            <div className="col-md-6 col-lg-4 portfolio-item">
              <div className="portfolio-wrap">
                <img className="img-fluid" src={image1} alt="Hotel Serenidad" />
                <div className="portfolio-info">
                  <h4>Hotel Serenidad</h4>
                  <p>Hoteleria</p>
                  <div className="portfolio-links">
                    <a href={image1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"></a>
                    <a href="https://hotelserenidad.bss.design/" title="More Details"><Link /></a>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {filter === '*' || filter === '.filter-card' ? (
            <div className="col-md-6 col-lg-4 portfolio-item">
              <div className="portfolio-wrap">
                <img className="img-fluid" src={image2} alt="Grupo SIA" />
                <div className="portfolio-info">
                  <h4>Grupo SIA</h4>
                  <p>Construccion</p>
                  <div className="portfolio-links">
                    <a href={image2} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"></a>
                    <a href="https://nicolasojea.github.io" title="More Details"><Link /></a>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {filter === '*' || filter === '.filter-app' ? (
            <div className="col-md-6 col-lg-4 portfolio-item">
              <div className="portfolio-wrap">
                <img className="img-fluid" src={image3} alt="Stars Hotels" />
                <div className="portfolio-info">
                  <h4>Stars Hotels</h4>
                  <p>Hoteleria</p>
                  <div className="portfolio-links">
                    <a href={image3} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"></a>
                    <a href="https://hotelstar.bss.design/" title="More Details"><Link /></a>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
