import React, { Component } from 'react';

export default function Winnings(props) {
    
    function numberWithThousands(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    let winningsToPublish = numberWithThousands(props.winnings);
    
    return `Winnings: $${winningsToPublish}`;
}