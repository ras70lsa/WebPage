import React, { Component } from 'react';
import logo from './logo.svg';
import Tabs from './Tabs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Tabs>
        </Tabs>
      </div>
    );
  }
}

export default App;
