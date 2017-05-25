import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var index = 0;
var quotes = ["Believe in your fucking self.", "Stay up all fucking night.", "Use fucking spell check.", 
        "Don't fucking procrastinate.","Get over your fucking self.", "Keep fucking learning.", "Fucking network.", 
        "Asking for fucking help.", "Do your fucking research."]
var len = quotes.length;
class App extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {currentIndex: index};
    this.changeQuote = this.changeQuote.bind(this);
  }
  
  //this.state.currentIndex.this.setState(this.state.currentIndex += 1)
    changeQuote() {
      if(this.state.currentIndex == len-1){
        index = 0;
        this.setState({
          currentIndex: index
        });
      }
      else{
        this.setState({
          currentIndex: index++ 
      });
      } 
    }
  
  
  render() {
    return (
      <div className="App">
          <div className = "Heading">
          <h1> Great Fucking </h1>
          <h1> Startup Advice </h1>
          </div>
          <div className = "Quotes">
            <h1 onClick={this.changeQuote}> 
              {quotes[this.state.currentIndex]} 
              </h1>
          </div>
          <div className = "bottom">
            <h1> 
              A project by Annie and Kavya.
              </h1>
          </div>
      </div>
    );
  }

}

export default App;
