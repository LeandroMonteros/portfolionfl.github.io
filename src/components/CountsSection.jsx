import React from 'react';
import imgcounts from '../img/counts-img.svg';

function CountsSection() {
    return (
        <section id="counts" className="counts">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 d-flex justify-content-center align-items-stretch justify-content-xl-start image" data-aos="fade-right" data-aos-delay="150">
                        <img className="img-fluid" src={imgcounts} alt=""></img>
                    </div>
                    <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                        <div className="d-flex flex-column justify-content-center content">
                            <div className="row">
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box"><i className="bi bi-emoji-smile"></i><span className="purecounter" data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1"></span>
                                        <p><strong>Clientes felices</strong> La satisfacción de nuestros clientes es el motor de nuestra pasión.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box"><i className="bi bi-journal-richtext"></i><span className="purecounter" data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1"></span>
                                        <p><strong>Proyectos</strong> Cada proyecto es un lienzo donde plasmamos su éxito digital.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box"><i className="bi bi-clock"></i><span className="purecounter" data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1"></span>
                                        <p><strong>Años de experiencia</strong> Más de una década liderando el camino en el mundo digital.</p>
                                    </div>

                                </div>
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box"><i class="bi bi-award"></i><span className="purecounter" data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"></span>
                                        <p><strong>Premios</strong> &quot;Reconocidos por nuestra excelencia, nuestros premios son testimonio de dedicación.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountsSection;
