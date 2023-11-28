import React from 'react';
import { GlobeAmericas, Speedometer,FileBarGraph, Cursor } from 'react-bootstrap-icons';

function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div data-aos="fade-up" className="section-title">
          <h2>servicios</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div data-aos="fade-up" data-aos-delay={400} className="icon-box">
              <div className="icon"><GlobeAmericas /></div>
              <h4 className="title"><a href>Diseño y Desarrollo Web</a></h4>
              <p className="description">Creación de sitios web atractivos, funcionales y optimizados para una experiencia óptima.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div data-aos="fade-up" data-aos-delay={300} className="icon-box">
              <div className="icon"><Speedometer /></div>
              <h4 className="title"><a href>Publicidad Digital</a></h4>
              <p className="description">Campañas en línea estratégicas para aumentar el alcance y la conversión de clientes potenciales.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div data-aos="fade-up" data-aos-delay={200} className="icon-box">
              <div className="icon"><FileBarGraph /></div>
              <h4 className="title"><a href>Diseño de marca</a></h4>
              <p className="description">Creacion Isologo/Imagotipo, Definicion de brief, Tipografia a eleccion, Archivo vectorial.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div data-aos="fade-up" data-aos-delay={100} className="icon-box">
              <div className="icon"><Cursor /></div>
              <h4 className="title"><a href>Optimización SEO</a></h4>
              <p className="description">Mejora del posicionamiento en buscadores para aumentar la visibilidad online.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
