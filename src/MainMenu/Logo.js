import React, { Component } from 'react';

export default function Logo(props) {

    return <div id="logo" onClick={props.resetGame}>Simple React Blackjack <span className="header-cred">by Chris Liu-Beers</span></div>

}