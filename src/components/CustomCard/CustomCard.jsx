import React from 'react';
import './CustomCard.scss'

function CustomCard(props) {
    return (
        <div className='card'>
            <img src={props.img} alt={props.name}></img>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default CustomCard
 