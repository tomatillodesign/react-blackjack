import React, { Component } from 'react';

export default function StartOver(props) {
    
    return <span className="link" id="menu-reset-button" onClick={props.resetGame}>Reset Game</span>;
    
}