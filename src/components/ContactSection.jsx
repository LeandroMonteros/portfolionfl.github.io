import React from 'react';
import { PinMapFill } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { TelephoneFill } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div data-aos="fade-up" className="section-title">
          <h2>Contactanos</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="contact-about">
              <h3>LNF Soluciones Digitales</h3>
              <p>Somos una agencia de marketing digital especializada en crear y promover páginas web para pymes, emprendimientos y empresas. </p>
              <div className="social-links"><a href="#" className="twitter"><i className="bi bi-twitter" /><Twitter></Twitter></a><a href="#" className="facebook"><i className="bi bi-facebook" /><Facebook></Facebook></a><a href="#" className="instagram"><i className="bi bi-instagram" /><Instagram></Instagram></a><a href="#" className="linkedin"><i className="bi bi-linkedin" /><Linkedin></Linkedin></a></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200}>
            <div className="info">
              <div><i className="ri-map-pin-line" /><PinMapFill></PinMapFill>
                <p>Segundo Dutari Rodriguez, Villa San Nicolas, Córdoba</p>
              </div>
              <div><i className="ri-mail-send-line" /><Envelope></Envelope>
                <p>lnfsolucionesdigitales@gmail.com</p>
              </div>
              <div><i className="ri-phone-line" /><TelephoneFill></TelephoneFill>
                <p>+54 351 514 5145</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-5" data-aos="fade-up" data-aos-delay={300}>
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-group"><input className="form-control form-control" type="text" id="name" name="name" placeholder="Tu Nombre" required /></div>
              <div className="form-group"><input className="form-control form-control" type="email" id="email" name="email" placeholder="Tu Email" required /></div>
              <div className="form-group"><input className="form-control form-control" type="text" id="subject" name="subject" placeholder="Paquete a Consultar" required /></div>
              <div className="form-group"><textarea className="form-control form-control" name="message" placeholder="Mensaje" required rows={5} defaultValue={""} /></div>
              <div className="my-3">
                <div className="loading"><span>Loading</span></div>
                <div className="error-message" />
                <div className="sent-message"><span>Your message has been sent. Thank you!</span></div>
              </div>
              <div className="text-center"><button type="submit">Enviar Mensaje</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
}

export default ContactSection;
