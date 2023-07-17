import React from 'react';
import "./presentation.scss";
import SousTitre from '../sousTitre/SousTitre';


const Presentation = () => {
    return (
        <div className='presentation-container'>
            <SousTitre title="PRESENTATION" />
            <p className='underscore'>______</p>
            <p className='presentation-text'>Jérôme, 31ans, Nice, nouvellement <span>Développeur Web</span>, vous trouverez sur cette page les projets auxquels j'ai participé ainsi que mes diverses compétences.</p>
        </div>
        
    );
};

export default Presentation;