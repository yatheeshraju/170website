import React, { Component } from 'react';
import './MainNav.scss';

export default class MainNav extends Component {
    
    render() {
        return (
            <div>
            <nav className='menu' id='menu'>
                <li><a href='/#home'>170</a>  </li>
                <li><a href='/#whoweare'>WHO WE ARE </a></li>
                <li><a href='/#whatwedo'>WHAT WE DO</a></li>
                <li><a href='/#whatourclientssay'>WHAT OUR CLIENTS SAY</a></li>
            </nav>
            
            </div>
        )
    }
}
