import React from 'react';

function PricingSection() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <h2>paquetes</h2>
          <p>Estos son los paquetes que nuestra empresa de marketing ofrece</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div data-aos="zoom-in-right" data-aos-delay={200} className="box">
              <h3>Paquete Standar</h3>
              <ul>
                <li>Diseño y Desarrollo de Páginas Web</li>
                <li className="na">Optimización SEO</li>
                <li className="na">Gestión de Campañas Publicitarias</li>
                <li className="na">Gestión de redes sociales</li>
                <li className="na">Diseño de marca</li>
                <li className="na">Análisis y Reportes de Rendimiento</li>
              </ul>
              <div className="btn-wrap"><a href="#contact" className="btn-buy">Consultar Ahora</a></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4 mt-md-0">
            <div data-aos="zoom-in" data-aos-delay={100} className="box recommended">
              <h3>Paquete Avanzado</h3>
              <ul>
              <li>Diseño y Desarrollo de Páginas Web</li>
              <li>Optimización SEO</li>
              <li>Gestión de Campañas Publicitarias</li>
              <li>Gestión de redes sociales</li>
                <li className="na">Diseño de marca</li>
                <li className="na">Análisis y Reportes de Rendimiento</li>
              </ul>
              <div className="btn-wrap"><a href="#contact" className="btn-buy">Consultar Ahora</a></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div data-aos="zoom-in-left" data-aos-delay={200} className="box">
              <h3>Paquete Premium</h3>
              <ul>
              <li>Diseño y Desarrollo de Páginas Web</li>
                <li>Optimización SEO</li>
                <li>Gestión de Campañas Publicitarias</li>
                <li>Gestión de redes sociales</li>
                <li>Diseño de marca</li>
                <li>Análisis y Reportes de Rendimiento</li>
              </ul>
              <div className="btn-wrap"><a href="#contact" className="btn-buy">Consultar Ahora</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default PricingSection;
