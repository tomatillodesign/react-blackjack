import React, { Component } from 'react';
import Logo from './Logo.js';
import MenuItems from './MenuItems.js';
import Winnings from './Winnings.js';

export default function MainMenu(props) {
    
      return (
         <div className="main-menu">
         <div className="wrap">
          <Logo resetGame={props.resetGame} />
          <MenuItems resetGame={props.resetGame} winnings={props.winnings} viewAboutPage={props.viewAboutPage} />
         </div>
        </div>
        );

    
}
