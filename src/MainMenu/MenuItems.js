import React, { Component } from 'react';
import StartOver from './StartOver.js';
import Winnings from './Winnings.js';
import About from './About.js';

export default function MenuItems(props) {
    
    return (
        <nav className="menu-items">
            <span className="menu-item"><About viewAboutPage={props.viewAboutPage} /></span>
            <span className="menu-item"><StartOver resetGame={props.resetGame} /></span>
            <span className="menu-item"><Winnings winnings={props.winnings} /></span>
        </nav>);
}