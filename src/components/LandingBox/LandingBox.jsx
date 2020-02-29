import React from 'react';
import './LandingBox.scss';
import Nomad from './../../images/nomad.jpeg';
import CustomButton from '../CustomButton/CustomButton';

function LandingBox() {
    return (
        <div className='landingbox' id='home'>
            <div>
            <img src={Nomad} alt='nomad' /> 
            </div>
            <div>
                <h1>DIGITAL NOMADS</h1>
                <p> We don't believe in office spaces . Less travel is more time spent with family.Happy teams always perform the best. We have a global team who is always connected .</p>
                <CustomButton name='KNOW MORE'/>
           </div>

        </div>
    )
}

export default LandingBox;
