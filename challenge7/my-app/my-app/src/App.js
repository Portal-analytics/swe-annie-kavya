import React, { Component } from 'react';

import './App.css';


//const quotes = ["Believe in yourself", "Keep working hard", "Only you can change your life"]

export default class App extends Component {

  constructor (props) {
        super(props);
        const quotes = ["Believe in yourself", "Keep working hard", "Only you can change your life"]
        this.state = {
            index: 0,
            currentQuote: quotes[index]};

        handleClick = () => {
          this.setState({
            index: this.state.index,
            currentQuote: this.state.currentQuote
          });
        }
  }
  
  render() {
    return (
      <div>
        <div>{this.state.currentQuote}</div>
        <button key={index} onClick={this.handleClick}>Button</button>
        {this.state.quotes.map(function(quote, index) {
          return {quote}
        })}
      </div>

    );
  }
}

