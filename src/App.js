import React, { Component } from 'react';
import Tabs from './components/tabs/Tabs';
import BottomBar from './components/BottomBar';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Tabs/>
        <BottomBar/>
      </div>
    );
  }
}

let styles = {
  container: {
    backgroundColor: 'red',
    height: 200,
    width: '100%',
    margin: 0
  },

  con: {
    display: 'flex',
    backgroundColor: 'gray',
    flex: 1,
  },
}


export default App;
