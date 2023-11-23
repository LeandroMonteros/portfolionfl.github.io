import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { PinMapFill } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { TelephoneFill } from 'react-bootstrap-icons';
import { Whatsapp } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

function ContactSection() {
  const [state, handleSubmit] = useForm("mvojjpdn");
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      setFormValues({
        name: '',
        email: '',
        message: ''
      });
    }
  };

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
              <div className="social-links">
                <a href="https://api.whatsapp.com/send/?phone=543515145145&text&type=phone_number&app_absent=0" target="_blank" className="twitter">
                  <i className="bi bi-twitter" /><Whatsapp></Whatsapp>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61553481997984&mibextid=ZbWKwL" target="_blank" className="facebook">
                  <i className="bi bi-facebook" /><Facebook></Facebook>
                </a>
                <a href="https://instagram.com/lnf_solucionesdigitales?igshid=NzZlODBkYWE4Ng==" target="_blank" className="instagram">
                  <i className="bi bi-instagram" /><Instagram></Instagram>
                </a>
                <a href="#Contact" target="_blank" className="linkedin">
                  <i className="bi bi-linkedin" /><Linkedin></Linkedin>
                </a>
              </div>

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
            <form onSubmit={handleFormSubmit} className="php-email-form">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu Nombre"
                  value={formValues.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Mensaje"
                  value={formValues.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className="my-3">
                <div className="loading"><span>Cargando</span></div>
                <div className="error-message" />
                {state.succeeded && <div className="sent-message"><span>Tu mensaje fue enviado, ¡Gracias!</span></div>}
              </div>
              <div className="text-center">
                <button type="submit" name="submit" disabled={state.submitting}>Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
