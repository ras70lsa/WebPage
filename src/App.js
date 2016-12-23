import React, { Component } from 'react';
import Tabs from './Tabs';
import BottomBar from './BottomBar';
import Header from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Tabs/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
