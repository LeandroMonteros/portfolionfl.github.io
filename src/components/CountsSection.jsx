import React, {useEffect} from 'react';
import imgcounts from '../img/counts-img.svg';
import { Clock } from 'react-bootstrap-icons';
import { EmojiSmile } from 'react-bootstrap-icons';
import { JournalRichtext } from 'react-bootstrap-icons';
import { Award } from 'react-bootstrap-icons';
import PureCounter from "@srexi/purecounterjs";

function CountsSection() {
    useEffect(() => {
        new PureCounter();
    }, []);
    

    return (
        <section id="counts" className="counts">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 d-flex justify-content-center align-items-stretch justify-content-xl-start image" data-aos="fade-right" data-aos-delay="1">
                        <img className="img-fluid" src={imgcounts} alt=""></img>
                    </div>
                    <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="1">
                        <div className="d-flex flex-column justify-content-center content">
                            <div className="row counts-box">
                                <div className="box">
                                    <div className="count-box"><EmojiSmile></EmojiSmile><span className="purecounter" data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1"></span>
                                        <p><strong>Clientes felices:</strong> La satisfacción de nuestros clientes es el motor de nuestra pasión.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="count-box"><JournalRichtext /><span className="purecounter" data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="1"></span>
                                    <p><strong>Proyectos:</strong> Cada proyecto es un lienzo donde plasmamos su éxito digital.</p>
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
