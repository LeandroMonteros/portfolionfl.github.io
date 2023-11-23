import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row d-flex align-items-center">
                <div class="col-lg-6 text-center text-lg-left">
                  <div class="copyright"><span> © Copyright </span><strong>LNF Soluciones Digitales</strong><span>. All Rights Reserved </span></div>
                </div>
                <div class="col-lg-6">
                  <nav class="text-center footer-links text-lg-right pt-2 pt-lg-0"><a href="#" class="scrollto">Inicio</a><a href="#about" class="scrollto">Nosotros</a><a href="#services">Servicios</a><a href="#portfolio">Portafolio</a><a href="#pricing" class="scrollto">Paquetes</a></nav>
                </div>
              </div>
            </div>
          <a class="d-flex justify-content-center align-items-center back-to-top" href="#"><i class="bi bi-arrow-up-short"></i></a>
    </footer >
  );
}

export default Footer;
