import React, { Component } from 'react';

export default function StandButton(props) {
 
    if( !props.isGameActive) { return null; } else {
 
        return <div className="stand-button-area"><button type="button" id="stand-button" onClick={props.onClick}>Stand</button></div>;
        
    } 
    
}