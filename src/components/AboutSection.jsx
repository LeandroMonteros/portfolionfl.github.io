import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';


function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div data-aos="fade-up" className="section-title">
          <h2>Nosotros</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              <span style={{ color: 'inherit' }}>
                Somos una agencia de marketing digital especializada en crear y
                promover páginas web para pymes, emprendimientos y empresas.&nbsp;
              </span>
              <br />
              <span style={{ color: 'inherit' }}>Nos basamos en tres pilares</span>
            </p>
            <ul>
              <li>
              <IoIosCheckmarkCircleOutline /> Creamos futuros digitales, fusionando tecnología y creatividad constante.
               
              </li>
              <li>
              <IoIosCheckmarkCircleOutline /> Nuestra precisión y excelencia garantizan confianza y eficiencia.
              </li>
              <li>
              <IoIosCheckmarkCircleOutline /> Conectamos estrategias para transformar y potenciar su visibilidad.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <p style={{ marginTop: '45px', marginBottom: '45px' }}>
              Nuestro objetivo es ayudarte a alcanzar tus metas digitales. Con
              dedicación y experiencia, diseñamos estrategias personalizadas,
              optimizamos la presencia online y potenciamos la visibilidad de tu
              negocio, garantizando resultados efectivos y un crecimiento sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
