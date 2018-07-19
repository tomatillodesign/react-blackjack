import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';
import Logo from './MainMenu/Logo.js';

function Footer() {
  return <div className="footer-area">Thanks for Playing!</div>;
}







function Blackjack() {
    
    return  <div id="blackjack-area">
            <Game />
            <Footer />
            </div>;
    
}


class App extends Component {
  render() {
    return (
      <Blackjack />
    );
  }
}

export default App;
