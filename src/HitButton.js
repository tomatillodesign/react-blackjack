import React, { Component } from 'react';

export default function HitButton(props) {
    
    if( !props.isGameActive) { return null; } else {
 
        return <div className="hit-button-area"><button type="button" id="hit-button" onClick={props.onClick}>Hit Me</button></div>;
        
    }
    
}