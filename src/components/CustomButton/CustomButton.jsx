import React, { Component } from 'react';
import './CustomButton.scss';
export class CustomButton extends Component {
    render() {
        return (
            <button className='custombutton' onClick={this.props.onclick}>
            {this.props.name}
            </button>
        )
    }
}

export default CustomButton
