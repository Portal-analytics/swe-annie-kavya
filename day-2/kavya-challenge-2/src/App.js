import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

var quotes = ["Believe in your fucking self.", "Stay up all fucking night.", "Use fucking spell check.", 
        "Don't fucking procrastinate.","Get over your fucking self.", "Keep fucking learning.", "Fucking network.", 
        "Asking for fucking help.", "Do your fucking research."]
var len = quotes.length;

const AppBarIcon = () => (
    <AppBar
      title="Great Fucking Life Advice"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={{
        backgroundColor: 'black',
      }}
      />
  );

const style = {
  margin: 12,
};

const QuoteButton = () => (
  <div>
    <RaisedButton label="Change Quote" style={style} />
  </div>
);  

const RandomButton = () => (
  <div>
    <RaisedButton label="Random Quote" style={style} />
  </div>
)

class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {quoteIndex: 0};
    this.changeQuote = this.changeQuote.bind(this);
  }
  
  //this.state.currentIndex.this.setState(this.state.currentIndex += 1)
    changeQuote() {
      if(this.state.quoteIndex == len-1){
        this.setState({
          quoteIndex: 0
        });
      }
      else{
        this.setState({
          quoteIndex: this.state.quoteIndex + 1
      });
      } 
    }


  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBarIcon />
          </MuiThemeProvider>
          <MuiThemeProvider>
          <div> 
            <h1 className = "Quotes"  > 
              {quotes[this.state.quoteIndex]} 
            </h1>  
            <div onClick={this.changeQuote} >
              <QuoteButton /> 
            </div>
          </div>
          </MuiThemeProvider> 
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
