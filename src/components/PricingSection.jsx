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
              <h3>Free</h3>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap"><a href="#contact" className="btn-buy">Consultar Ahora</a></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4 mt-md-0">
            <div data-aos="zoom-in" data-aos-delay={100} className="box recommended">
              <h3>Business</h3>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap"><a href="#contact" className="btn-buy">Consultar Ahora</a></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div data-aos="zoom-in-left" data-aos-delay={200} className="box">
              <h3>Developer</h3>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
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
