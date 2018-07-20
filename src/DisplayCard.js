import React, { Component } from 'react';

export default function DisplayCard(props) {
  
  console.log(`Card Props: ${JSON.stringify(props)}`);
  
  function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
  }
  
  if( props.revealHouse === false && props.hidden === true ) {
    console.log(`WHICHPLAYER: ${props.whichPlayer}`);
    
    let hiddenKey = getRandomInt(10000);
    
    return(
      <div className={'playing-card hidden-card'} key={hiddenKey}>
        <div className="playing-card-name">? ? ?</div>
      </div>
    );
  } else {

      return(
          <div className={'playing-card ' + props.color} key={props.id}>
            <div className="playing-card-name">{props.name}</div>
            <div className="playing-card-value">{props.value}</div>
            <div className="playing-card-suit" dangerouslySetInnerHTML={{__html: props.suit}}></div>
          </div>
        );
        
  }
    
}