import React from 'react';
import "./cards.scss";

const Cards = ({image}) => {
    return (
        <div className='cards_container'>
            <img src={image} />
        </div>
    );
};

export default Cards;