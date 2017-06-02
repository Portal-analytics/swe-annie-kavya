import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = ["Get up and start hustling.", "Never give up.", "Believe in yourself.","Stay up all night.", "Keep learning",
"Keep learning.", "Ask for help.","Do your research."]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0
    }
    
  }

  changeQuotes = () => {
    if(quotes.length-1 == this.state.currentIndex) {
      this.setState({
        currentIndex: 0
      })  
    }
    else{
      this.state.currentIndex++
      console.log(quotes.length-1)
      console.log(this.state.currentIndex)
      this.setState({
        currentIndex: this.state.currentIndex
      })  
    }
  }
   
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Great Life Advice!</h2>
        </div>
        <p className="App-intro">
          <h1 onClick={this.changeQuotes}> {quotes[this.state.currentIndex]}</h1>
        </p>
      </div>
    );
  }
}

export default App;
