import React, { Component } from 'react';

export default function GameStatus(props) {
    
    let message = null;
    
    if( props.handWinner === null ) { return null; } 
    
    else if( props.handWinner === 'house' ) {
 
        if( props.typeOfWin === 'playerOver21' ) {
            message = 'Player went over 21 points.';
        }
        if( props.typeOfWin === 'houseCloserTo21' ) {
            message = 'The House was closer to 21 points.';
        }
 
        return (    
            <div className="game-status-area">
                <div className="game-status house-won"><h3>The House won. {message}</h3>
                    <div className="round-total">Rounds Won: {props.playerRoundsWon} – {props.houseRoundsWon}</div>
                </div>
            </div>
        );
        
    } else if( props.handWinner === 'player' ) {
        if( props.typeOfWin === 'playerCloserTo21' ) {
            message = 'You were closer to 21 points.';
        }
        if( props.typeOfWin === 'houseOver21' ) {
            message = 'The House went over 21 points.';
        }
 
        return (
            <div className="game-status-area">
                <div className="game-status player-won"><h3>You won! {message}</h3>
                <div className="round-total">Rounds Won: {props.playerRoundsWon} – {props.houseRoundsWon}</div>
                </div>
            </div>
            );
        
    } else if( props.handWinner === 'push' ) {
        message = 'The hand was tied.';
 
        return (
            <div className="game-status-area">
                <div className="game-status player-won"><h3>It's a push. {message}</h3>
                <div className="round-total">Rounds Won: {props.playerRoundsWon} – {props.houseRoundsWon}</div>
                </div>
            </div>
            );
        
    }
    
}