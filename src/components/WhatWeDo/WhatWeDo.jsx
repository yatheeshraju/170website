import React from 'react';
import './WhatWeDo.scss';
import CustomCard from '../CustomCard/CustomCard';
import consulting from './../../images/consulting.jpeg';
import remotework from './../../images/remotework.jpeg';
import development from './../../images/development.jpeg'

function WhatWeDo() {
    return (
        <div className='whatwedo' id='whatwedo'>
            <h1># WHAT WE DO </h1>
            <div>
            <CustomCard name='Consulting' desc='We help you navigate your digital journey.' img={consulting}/>
            <CustomCard name='Product Development' desc='we help develop quality products at best value .' img={development}/>
            <CustomCard name='Remote Support' desc='we offer support for individuals in their work.' img={remotework}/>
            </div>
        </div>
    )
}

export default WhatWeDo
