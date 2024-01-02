
import React from 'react';
import PropTypes from 'prop-types';
import mejor from '../img/mejor-visibilidad.png';

const Objetivos = ({ title, description, bgColor }) => {
    const sectionStyle = {
        backgroundColor: bgColor,
    };

    return (
        <div className="container">
            <div className="objetivos" style={sectionStyle}>
                <h3>{title}</h3>
                <div className="contente">
                    <img src={mejor} className="img-fluide" alt="Mejor visibilidad" />
                    <div className='parraf'>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

Objetivos.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
};

export default Objetivos;
