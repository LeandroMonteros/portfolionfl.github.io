
import React from 'react';
import PropTypes from 'prop-types';
import mejor from '../img/mejor-visibilidad.png';
import { ArrowDownCircleFill } from 'react-bootstrap-icons';

const Objetivos = ({ title, description, border }) => {
    const style = {
        borderRadius: border,
    };

    return (
        <div className="container">
            <div className="objetivos" style={style}>
                <div className='title'>
                    <h3>{title}</h3>
                    <div className='icon animated'><ArrowDownCircleFill /></div>
                </div>
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
    border: PropTypes.string.isRequired,
};

export default Objetivos;
