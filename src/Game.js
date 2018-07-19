import React, { Component } from 'react';
import MainMenu from './MainMenu/MainMenu.js';
import PlayerCards from './PlayerCards.js';
import DisplayCard from './DisplayCard.js';
import StartButton from './StartButton.js';
import HitButton from './HitButton.js';
import StandButton from './StandButton.js';
import InfoSection from './InfoSection.js';
import GameStatus from './GameStatus.js';
import AboutPage from './AboutPage.js';

import Logo from './MainMenu/Logo.js';

/* ---------------------

7/15 TODO

- House logic for dealing more cards after player stands, incl reveal hidden house card
- Show player/house point total at the top after stand
- Remove the RESET button and place up in main menu ("start over")
- Remove winnings
- Add a modal or similar for a simple About page when clicked
- Export version 1.0 to Github



TROUBLESHOOT
- Wrong message if house has 21 exactly, saying that player wins

--------------------- */

const originalDeck = [
                         {
                              id: '2C',
                              name: 'Two of Clubs',
                              suitCode: '&#9827;',
                              value: 2,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '3C',
                              name: 'Three of Clubs',
                              suitCode: '&#9827;',
                              value: 3,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '4C',
                              name: 'Four of Clubs',
                              suitCode: '&#9827;',
                              value: 4,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '5C',
                              name: 'Five of Clubs',
                              suitCode: '&#9827;',
                              value: 5,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '6C',
                              name: 'Six of Clubs',
                              suitCode: '&#9827;',
                              value: 6,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '7C',
                              name: 'Seven of Clubs',
                              suitCode: '&#9827;',
                              value: 7,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '8C',
                              name: 'Eight of Clubs',
                              suitCode: '&#9827;',
                              value: 8,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '9C',
                              name: 'Nine of Clubs',
                              suitCode: '&#9827;',
                              value: 9,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '10C',
                              name: 'Ten of Clubs',
                              suitCode: '&#9827;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: 'JC',
                              name: 'Jack of Clubs',
                              suitCode: '&#9827;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: 'QC',
                              name: 'Queen of Clubs',
                              suitCode: '&#9827;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: 'KC',
                              name: 'King of Clubs',
                              suitCode: '&#9827;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: 'AC',
                              name: 'Ace of Clubs',
                              suitCode: '&#9827;',
                              value: 11,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '2D',
                              name: 'Two of Diamonds',
                              suitCode: '&#9830;',
                              value: 2,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '3D',
                              name: 'Three of Diamonds',
                              suitCode: '&#9830;',
                              value: 3,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '4D',
                              name: 'Four of Diamonds',
                              suitCode: '&#9830;',
                              value: 4,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '5D',
                              name: 'Five of Diamonds',
                              suitCode: '&#9830;',
                              value: 5,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '6D',
                              name: 'Six of Diamonds',
                              suitCode: '&#9830;',
                              value: 6,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '7D',
                              name: 'Seven of Diamonds',
                              suitCode: '&#9830;',
                              value: 7,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '8D',
                              name: 'Eight of Diamonds',
                              suitCode: '&#9830;',
                              value: 8,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '9D',
                              name: 'Nine of Diamonds',
                              suitCode: '&#9830;',
                              value: 9,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '10D',
                              name: 'Ten of Diamonds',
                              suitCode: '&#9830;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: 'JD',
                              name: 'Jack of Diamonds',
                              suitCode: '&#9830;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: 'QD',
                              name: 'Queen of Diamonds',
                              suitCode: '&#9830;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: 'KD',
                              name: 'King of Diamonds',
                              suitCode: '&#9830;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: 'AD',
                              name: 'Ace of Diamonds',
                              suitCode: '&#9830;',
                              value: 11,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '2H',
                              name: 'Two of Hearts',
                              suitCode: '&#9829;',
                              value: 2,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '3H',
                              name: 'Three of Hearts',
                              suitCode: '&#9829;',
                              value: 3,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '4H',
                              name: 'Four of Hearts',
                              suitCode: '&#9829;',
                              value: 4,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '5H',
                              name: 'Five of Hearts',
                              suitCode: '&#9829;',
                              value: 5,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '6H',
                              name: 'Six of Hearts',
                              suitCode: '&#9829;',
                              value: 6,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '7H',
                              name: 'Seven of Hearts',
                              suitCode: '&#9829;',
                              value: 7,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '8H',
                              name: 'Eight of Hearts',
                              suitCode: '&#9829;',
                              value: 8,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '9H',
                              name: 'Nine of Hearts',
                              suitCode: '&#9829;',
                              value: 9,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '10H',
                              name: 'Ten of Hearts',
                              suitCode: '&#9829;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: 'JH',
                              name: 'Jack of Hearts',
                              suitCode: '&#9829;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: 'QH',
                              name: 'Queen of Hearts',
                              suitCode: '&#9829;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: 'KH',
                              name: 'King of Hearts',
                              suitCode: '&#9829;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: 'AH',
                              name: 'Ace of Hearts',
                              suitCode: '&#9829;',
                              value: 11,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'red'
                         },
                         {
                              id: '2S',
                              name: 'Two of Spades',
                              suitCode: '&#9824;',
                              value: 2,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '3S',
                              name: 'Three of Spades',
                              suitCode: '&#9824;',
                              value: 3,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '4S',
                              name: 'Four of Spades',
                              suitCode: '&#9824;',
                              value: 4,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '5S',
                              name: 'Five of Spades',
                              suitCode: '&#9824;',
                              value: 5,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '6S',
                              name: 'Six of Spades',
                              suitCode: '&#9824;',
                              value: 6,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '7S',
                              name: 'Seven of Spades',
                              suitCode: '&#9824;',
                              value: 7,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '8S',
                              name: 'Eight of Spades',
                              suitCode: '&#9824;',
                              value: 8,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '9S',
                              name: 'Nine of Spades',
                              suitCode: '&#9824;',
                              value: 9,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: '10S',
                              name: 'Ten of Spades',
                              suitCode: '&#9824;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: 'JS',
                              name: 'Jack of Spades',
                              suitCode: '&#9824;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: 'QS',
                              name: 'Queen of Spades',
                              suitCode: '&#9824;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: 'KS',
                              name: 'King of Spades',
                              suitCode: '&#9824;',
                              value: 10,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         },
                         {
                              id: 'AS',
                              name: 'Ace of Spades',
                              suitCode: '&#9824;',
                              value: 11,
                              isPlayed: false, 
                              isHiddenCard: false,
                              color: 'black'
                         }
                    ];

class Game extends Component {
    
     constructor() {
          super();
          
          this.state = {
            
               isGameActive : false,
               deck : originalDeck,
               playerCards : [],
               playerPoints : 0,
               playerCardCount : 0,
               houseCards : [],
               housePoints : 0,
               houseCardCount : 0,
               revealHouse : false,
               allPlayedCards : [],
               handWinner : null,
               roundsPlayed : 0,
               typeOfWin : null,
               playerRoundsWon : 0,
               houseRoundsWon : 0,
               roundsTied : 0,
               winnings : 1000,
               isAboutPageActive : false
            
          }
          
          //magical bind here
          this.startGame = this.startGame.bind(this);
          this.resetGame = this.resetGame.bind(this);
          this.getPlayerCard = this.getPlayerCard.bind(this);
          this.winCheck = this.winCheck.bind(this);
          this.handleClick = this.handleClick.bind(this);
          this.standWinCheck = this.standWinCheck.bind(this);
          this.updateHouseCards = this.updateHouseCards.bind(this);
          this.renderDisplayCard = this.renderDisplayCard.bind(this);
          this.viewAboutPage = this.viewAboutPage.bind(this);
        
     }
    
     
     getPlayerCard() {
     
       // Use a while loop or similar to only get a card with the property of .isPlayed = false, use a variable to switch the loop on and off
       let newCard = false;
       
       while( newCard === false ) {
       
        var randomCard = this.state.deck[Math.floor(Math.random()*this.state.deck.length)];
       
        if( randomCard.isPlayed === false ) {
           randomCard.isPlayed = true;
           newCard = true;
           
          this.setState((prevState) => ({
               playerCards: [...prevState.playerCards, randomCard],
               allPlayedCards: [...prevState.allPlayedCards, randomCard],
               playerPoints : prevState.playerPoints + randomCard.value
          }));
          
        } 
       
        if( this.state.allPlayedCards.length === this.state.deck.length ) {
           newCard = true;
           randomCard = 'ALL CARDS ARE PLAYED!';
           console.log('LAST CARD = ' + randomCard);
        }
         
       }
       
          console.log(`Get Player Card = ${JSON.stringify(randomCard)}`);
     //   console.log(`playerCards = ${JSON.stringify(this.state.playerCards)}`);
     //   console.log(`allPlayedCards = ${JSON.stringify(this.state.allPlayedCards)}`);
     //   console.log(`isGameActive = ${this.state.isGameActive}`);
       
       return randomCard;
         
     }
     
     getHouseCard(isHiddenCard) {
     
       // Use a while loop or similar to only get a card with the property of .isPlayed = false, use a variable to switch the loop on and off
       let newCard = false;
       
       while( newCard === false ) {
       
        var randomCard = this.state.deck[Math.floor(Math.random()*this.state.deck.length)];
       
        if( randomCard.isPlayed === false ) {
           randomCard.isPlayed = true;
           newCard = true;
           
           if( isHiddenCard === true ) {
               randomCard.isHiddenCard = true; 
           }
           
          this.setState((prevState) => ({
               houseCards: [...prevState.houseCards, randomCard],
               allPlayedCards: [...prevState.allPlayedCards, randomCard],
               housePoints : prevState.housePoints + randomCard.value,
               houseCardCount : prevState.houseCardCount + 1
          }));
          
          
        } 
       
        if( this.state.allPlayedCards.length === this.state.deck.length ) {
           newCard = true;
           randomCard = 'ALL CARDS ARE PLAYED!';
           console.log('LAST CARD = ' + randomCard);
        }
         
       }
       
       console.log(`Get House Card = ${JSON.stringify(randomCard)}`);
       return randomCard;
         
     }
    
     startGame() {
          
          this.setState((prevState) => ({
               deck : originalDeck,
               isGameActive : true,
               playerCards : [],
               playerPoints : 0,
               playerCardCount : 0,
               houseCards : [],
               housePoints : 0,
               houseCardCount : 0,
               revealHouse : false,
               allPlayedCards : [],
               handWinner : null,
               typeOfWin : null,
          }));
         
          console.log('start game');
          
          // Deal 2 player cards
          let playerCard1 = this.getPlayerCard();
          let playerCard2 = this.getPlayerCard();
          //console.log(`playerCard array = ${JSON.stringify(playerCard1) + JSON.stringify(playerCard2)}`);
          
          // Deal two house cards
          let houseCard1 = this.getHouseCard();
          let houseCard2 = this.getHouseCard(true);
          //console.log(`houseCard array = ${JSON.stringify(houseCard1) + JSON.stringify(houseCard2)}`);
          
          return;
         
     }
    
    resetGame() {
         this.setState((prevState) => ({
            deck : originalDeck,
            isGameActive : false,
            allPlayedCards : [],
            playerCards : [],
            playerPoints : 0,
            houseCards : [],
            housePoints : 0,
            handWinner : null,
            typeOfWin : null,
            roundsPlayed : 0,
            playerRoundsWon : 0,
            houseRoundsWon : 0,
            roundsTied : 0,
            winnings : 1000
          }));
          console.log('reset game');
          
          
    }
    
    renderDisplayCard(card) {
         let revealHouse = this.state.revealHouse;
         return <DisplayCard revealHouse={revealHouse} key={card.id} name={card.name} value={card.value} suit={card.suitCode} color={card.color} hidden={card.isHiddenCard} />;
    }
    
    winCheck( lastCardValue ) {
         
         if(!lastCardValue) { lastCardValue = 0; }
         
          let   playerPoints = this.state.playerPoints + lastCardValue,
                housePoints = this.state.housePoints;
               
          if( playerPoints > 21 ) {
               this.setState((prevState) => ({
                    isGameActive : false,
                    revealHouse : true,
                    handWinner : 'house',
                    typeOfWin : 'playerOver21',
                    roundsPlayed : this.state.roundsPlayed + 1,
                    houseRoundsWon : this.state.houseRoundsWon + 1,
                    winnings : prevState.winnings - 100
               }));
          }
          
          console.log(`winCheck: Player points: ${playerPoints} | House points: ${housePoints}`);
         
    }
    
    standWinCheck() {
         
          let houseResult = this.updateHouseCards();
               if( houseResult.didHouseLose ) { return; }
         
          let   playerPoints = this.state.playerPoints,
                additionalHousePoints = houseResult.lastHouseCardValue.reduce((a, b) => a + b, 0),
                housePoints = this.state.housePoints + additionalHousePoints;
               
          if( (playerPoints <= 21) && (playerPoints > housePoints) ) {
               this.setState((prevState) => ({
                    isGameActive : false,
                    revealHouse : true,
                    handWinner : 'player',
                    typeOfWin : 'playerCloserTo21',
                    roundsPlayed : this.state.roundsPlayed + 1,
                    playerRoundsWon : this.state.playerRoundsWon + 1,
                    winnings : prevState.winnings + 100
               }));
          } else if( playerPoints === housePoints ) {
               this.setState({
                    isGameActive : false,
                    revealHouse : true,
                    handWinner : 'push',
                    typeOfWin : 'push',
                    roundsPlayed : this.state.roundsPlayed + 1,
                    roundsTied : this.state.roundsTied + 1
               });
          } else if( (playerPoints <= 21) && (housePoints > playerPoints) ) {
               this.setState((prevState) => ({
                    isGameActive : false,
                    revealHouse : true,
                    handWinner : 'house',
                    typeOfWin : 'houseCloserTo21',
                    roundsPlayed : this.state.roundsPlayed + 1,
                    houseRoundsWon : this.state.houseRoundsWon + 1,
                    winnings : prevState.winnings - 100
               }));
          }
          
          console.log(`winCheck: Player points: ${playerPoints} | House points: ${housePoints}`);
         
    }
    
    
     handleClick() {
          let randomCard = this.getPlayerCard(); // this feels like a hack, state is not updated yet so I'm adding in the last card's value and passing it to winCheck
          this.winCheck( randomCard.value );
     }
     
     
     updateHouseCards() {
          
          let  startingHousePoints = this.state.housePoints,
               newHousePointsArray = [startingHousePoints],
               newHousePointsTotal = 0,
               isHouseOver17 = null,
               houseResult = {
                    lastHouseCardValue : [],
                    didHouseLose : false
               };
               
          if( startingHousePoints < 17 ) { isHouseOver17 = false; } else { isHouseOver17 = true; }
          
          while( isHouseOver17 === false ) {
               
               let newCard = this.getHouseCard();
               
               newHousePointsArray.push(newCard.value);
               newHousePointsTotal = newHousePointsArray.reduce((a, b) => a + b, 0);
               houseResult.lastHouseCardValue.push(newCard.value);
               
               if( newHousePointsTotal < 17 ) { isHouseOver17 = false; } else { isHouseOver17 = true; }
               console.log('NEW HOUSE POINTS: ' + newHousePointsTotal)
          
               // Internal WINCHECK to see if the house went over 21
               if( newHousePointsTotal > 21 ) {
                    this.setState((prevState) => ({
                         isGameActive : false,
                         revealHouse : true,
                         handWinner : 'player',
                         typeOfWin : 'houseOver21',
                         roundsPlayed : this.state.roundsPlayed + 1,
                         playerRoundsWon : this.state.playerRoundsWon + 1,
                         winnings : prevState.winnings + 100
                    }));
                    houseResult.didHouseLose = true;
               }
               
          }
          
          console.log(`houseResult = ${JSON.stringify(houseResult)}`);
          return houseResult;
          
     }
     
     
     viewAboutPage() {
          this.setState((prevState) => ({
               isAboutPageActive : !prevState.isAboutPageActive
          }));
     }
     
    
    
    render() {
         
     let isGameActive = this.state.isGameActive;
     let startResetMethod = this.startGame;
     let handWinner = this.state.handWinner;
     let revealHouse = this.state.revealHouse;
     let showCardAreaClassName = '';
     
     if(this.state.isAboutPageActive) { showCardAreaClassName = 'hidden'; }
     
     if( isGameActive ) { 
          startResetMethod = this.resetGame; 
     }
        
     let playerCards = <div className="player-cards"><div className="card-heading">Player Cards</div><InfoSection whichPlayer={'Player'} isGameActive={isGameActive} points={this.state.playerPoints} />{this.state.playerCards.map(this.renderDisplayCard)}</div>;
     let houseCards = <div className="house-cards"><div className="card-heading">House Cards</div><InfoSection whichPlayer={'House'} isGameActive={isGameActive} points={this.state.housePoints} revealHouse={revealHouse} />{this.state.houseCards.map(this.renderDisplayCard)}</div>;
     
     console.log("ABOUT ACTIVE: " + this.state.isAboutPageActive);
     
     // console.log(`Player point total: ${this.state.playerPoints}`);
     // console.log(`House point total: ${this.state.housePoints}`);
     
     //   console.log(`handWinner: ${this.state.handWinner}`);
     //    console.log(`DECK = ${JSON.stringify(this.state.deck)}`);
     //    console.log(`playerCards = ${JSON.stringify(this.state.playerCards)}`);
     //      console.log(`allPlayedCards = ${JSON.stringify(this.state.allPlayedCards)}`);
     //    console.log(`playerCards.length = ${(this.state.playerCards.length)}`);
     //    console.log(`roundsPlayed = ${(this.state.roundsPlayed)}`);
         
         if( this.state.isGameActive === false ) {
             console.log('CARD WORK: ' + JSON.stringify(this.state.houseCards[1])); 
             let secondHouseCard = this.state.houseCards[1];
             //console.log('CARD WORK: ' + JSON.stringify(secondHouseCard.values)); 
             //console.log(Object.values(secondHouseCard));
             //this.state.houseCards[1].isHiddenCard = false;
         }
        
        return (
            
            <div> 
            <MainMenu resetGame={this.resetGame} winnings={this.state.winnings} viewAboutPage={this.viewAboutPage} />
            <AboutPage isActive={this.state.isAboutPageActive} viewAboutPage={this.viewAboutPage} />
            <div className={'card-area ' + showCardAreaClassName}>
                <GameStatus isGameActive={isGameActive} handWinner={handWinner} typeOfWin={this.state.typeOfWin} playerRoundsWon={this.state.playerRoundsWon} houseRoundsWon={this.state.houseRoundsWon} />
                {playerCards}
                {houseCards}
                <div className="player-action-area">
                    <HitButton isGameActive={isGameActive} onClick={this.handleClick} />
                    <StandButton isGameActive={isGameActive} onClick={this.standWinCheck} />
               </div>
               <StartButton isGameActive={isGameActive} startGame={this.startGame} resetGame={this.resetGame} winner={handWinner} />
            </div>
            </div>
        );
        
    }
    
}

export default Game;