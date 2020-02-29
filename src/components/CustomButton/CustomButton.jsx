import React from 'react';
import './CustomButton.scss';


function CustomButton(props) {
    return (
        <button className='custombutton'>
            {props.name}
        </button>
    )
}

export default CustomButton
