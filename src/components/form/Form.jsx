import React from 'react';
import "./form.scss";
import SousTitre from '../sousTitre/SousTitre';

function Form() {
    return (

      <form className='form-container'>
        <SousTitre title="CONTACT"/>
        <p className='underscore'>______</p>
          <input type="text" required placeholder="Nom"/>
          <input type="text" required placeholder="Adresse e-mail"/>
          <textarea placeholder="Votre message" ></textarea>
          <button type="submit">ME CONTACTER</button>

 
      </form>

    )
  }

export default Form;