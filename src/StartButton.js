import React, { Component } from 'react';

export default function StartResetButton(props) {
    
    let buttonText = 'Start Game',
        buttonClass = 'game-inactive';
    
    if( props.isGameActive === true ) {

        return null;
        
    } else if( props.isGameActive === false && props.winner ) {

        buttonText = 'Deal Next Hand';
        buttonClass = 'game-inactive';
        return <div className="start-button-area"><button type="button" id="start-reset-button" className={buttonClass} onClick={props.startGame}>{buttonText}</button></div>;

    } else {

        return <div className="start-button-area"><button type="button" id="start-reset-button" className={buttonClass} onClick={props.startGame}>{buttonText}</button></div>;

    }
    
    
    
}

