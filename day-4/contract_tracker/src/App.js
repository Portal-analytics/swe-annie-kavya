import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContractTracker from './contractTracker';


class App extends Component {
  render() {
    return (
          <div className="App">
            <h1>Contract Tracker</h1>
            <ContractTracker />
          </div>
    );
  }
}

export default App;
