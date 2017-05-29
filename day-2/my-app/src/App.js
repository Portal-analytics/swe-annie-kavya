import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import randomString from 'random-string';


var index = 0;
var quotes = ["Believe in your fucking self.", "Stay up all fucking night.", "Use fucking spell check.", 
    "Don't fucking procrastinate.","Get over your fucking self.", "Keep fucking learning.", 
    "Asking for fucking help.", "Do your fucking research."]
var len = quotes.length;

const AppBarExampleIcon = () => (
    <AppBar
      title="Great Fucking Startup Advice"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
);

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="New Quote" style={style} />
  </div>
);

const RandomButton = () => (
  <div>
    <RaisedButton label="Random Quote" style={style} />
  </div>
);

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
     <MuiThemeProvider>
       <AppBarExampleIcon/>
    </MuiThemeProvider>

    <MuiThemeProvider>
      <div onClick={this.changeQuote}>
        <RaisedButtonExampleSimple />
      </div>
    </MuiThemeProvider>


     <div className = "Quotes">
      <h1> 
       {quotes[this.state.currentIndex]} 
       </h1>
     </div>

     <MuiThemeProvider>
       <div onClick={this.changeQuote}>
        <RandomButton/>
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
