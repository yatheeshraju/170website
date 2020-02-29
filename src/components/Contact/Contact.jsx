import React, { Component } from 'react';
import './Contact.scss';

export class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <h1># CONTACT US</h1>
                <div>
                <div></div>
                <iframe title='google-form'src="https://docs.google.com/forms/d/e/1FAIpQLSeJeg84cc7dcBDGTciJcSVHD4rpEZKDE-pI3llVppN-ioHnNw/viewform?embedded=true"  width="640" height="900" frameBorder="0"  samesite="Secure">Loading…</iframe>
                </div>
               
            </div>
        )
    }
}

export default Contact
