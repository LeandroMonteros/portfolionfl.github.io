import React from 'react';
import Objetivo from './Objetivos';

const ObjectivesSection = () => {
    const objectivesText1 = {
        title: "Mejorar la visibilidad de tu negocio en internet",
        description: "Un sitio web hermoso es tan valioso como una tarjeta de presentación en los años 70 y 80. Es el primer punto de contacto y, como dice la expresión, la primera impresión es, de hecho, lo que queda. Un mal diseño web y una experiencia negativa pueden acabar alejando a un cliente potencial.",
        bgColor: "#000056",
      };
      const objectivesText2 = {
        title: "Identidad Propia",
        description: "Una marca sólida es aquella que los clientes recuerdan cuando vuelven a la tienda en busca de un producto determinado. Es mucho más que un refresco, es una Coca-Cola. Su marca es tan potente que la competencia suele usar logotipos y envases similares en rojo y blanco para intentar robarle consumidores.",
        bgColor: "#220056",
      };
      const objectivesText3 = {
        title: "Medición de resultados",
        description: "Nada define más el éxito del marketing digital que su capacidad de medir, en tiempo real, cada resultado. Cada paso dado dentro de una estrategia online puede ser acompañado y analizado.¿Has enviado un email promocional? Mide la tasa de apertura y de conversión y descubre cuántas personas lo abrieron y cuántas adquirieron la promoción.",
        bgColor: "#5F0A56",
      };
      const objectivesText4 = {
        title: "Fortalecer la marca ",
        description: "Un sitio web bien desarrollado también se convierte en una forma de fortalecer tu marca. El término conocido como Brand Awareness se mejora al brindar a los visitantes una experiencia positiva en tus páginas. Como decíamos, la credibilidad se acaba reforzando con una página de calidad y esto se refleja en la fuerza que tiene tu marca en el mercado.",
        bgColor: "#861456",
      };

    return (
        <section id='Objetive'>
            <div className='listObjetives'>
                <div className='box'>
                <Objetivo {...objectivesText1} />
            <Objetivo {...objectivesText2} />
            <Objetivo {...objectivesText3} />
            <Objetivo {...objectivesText4} />
                </div>
            
            </div>
        </section>
        
    );
};

export default ObjectivesSection;
