import React from 'react';
import "./skills.scss";
import SousTitre from '../sousTitre/SousTitre';

const Skills = () => {
    return (
        <div id="skills" className='skills-container'>
        <SousTitre title="MES COMPETENCES" />
        <p className='underscore'>______</p>
        <p className='skills-text'>Blabla</p>
        </div>
    );
};

export default Skills;