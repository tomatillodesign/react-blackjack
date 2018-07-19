import React, { Component } from 'react';

export default function InfoSection(props) {
    
    let playerOrHouse = props.whichPlayer;
    
    if( playerOrHouse === 'House' && props.revealHouse === false ) { 
        return <div className="info-area spacer"><div className={playerOrHouse.toLowerCase() + "-info"}>Cheatin' eh?</div></div>; 
    } else {
        return <div className="info-area"><div className={playerOrHouse.toLowerCase() + "-info"}>{props.points} points</div></div>;   
    }
    
}


