import React, { Component } from 'react';

export default function AboutPage(props) {
    
    if(props.isActive) {
        return(
            
            <div id="about-page">
                <div className="card-heading">About</div>
                <div id="about-page-content">
                    <p><em>Simple React Blackjack by Chris Liu-Beers</em> was created to test out basic React concepts like components, props, and state.</p>
                    <p>The rules follow standard Blackjack. You'll start with $1,000, and each hand is worth $100. In the case of a push (tie), all bets are returned.</p> 
                    <p>Right now, I'm still working on getting the Aces to function properly. Check it out!</p>
                    <button type="button" onClick={props.viewAboutPage}>Close</button>
                </div>
            </div>
            
            );
    } else {
        return null;
    }

    
}