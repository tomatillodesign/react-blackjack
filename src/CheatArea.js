import React, { Component } from 'react';

export default function CheatArea(props) {
    
    let remainingCards = props.remainingCardsArray;
    let remainingCardsValues = [];
    
    remainingCards.forEach(function(card){
      remainingCardsValues.push(card.value)
    });

    // Chance of getting 10    
    let countofTen = remainingCardsValues.filter(function(value){
        return value === 10;
    }).length;
    let chanceOfTen = Math.round((countofTen / remainingCardsValues.length) * 100);
    
    // Chance of landing on 21
    let needFor21 = 21 - props.playerPoints;
    let countofGetting21 = remainingCardsValues.filter(function(value){
        return value === needFor21;
    }).length;
    let chanceOfGetting21 = Math.round((countofGetting21 / remainingCardsValues.length) * 100);
    
    // Chance of going over 21
    let goingOver21 = 21 - props.playerPoints;
    let countofGoingOver21 = remainingCardsValues.filter(function(value){
        return value > goingOver21;
    }).length;
    let chanceOfGoingOver21 = Math.round((countofGoingOver21 / remainingCardsValues.length) * 100);
    
    if(props.isActive === false ) {
        return (
            <div id="cheat-area">
                <div id="show-cheats-button" onClick={props.viewCheats}>Show Percentages</div>
            </div>
            );
    } else {
  
        return (
            <div id="cheat-area">
                <div id="show-cheats-button" onClick={props.viewCheats}>Show Percentages</div>
                <div className="chance-of-ten">Chance of adding 10: {chanceOfTen}%</div>
                <div className="chance-of-21">Chance of getting 21: {chanceOfGetting21}%</div>
                <div className="chance-of-over-21">Chance of going over 21: {chanceOfGoingOver21}%</div>
            </div>
        );
    
    }
  
}