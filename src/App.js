import React, { Component } from 'react';
import Tabs from './Tabs';
import BottomBar from './BottomBar';
import Header from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div style = {styles.container}/>
        <div style = {styles.con}>
          <h1> RYAN</h1>
          <h1> RYAN</h1>
          <h1> RYAN</h1>
          <h1> RYAN</h1>
          <h1> RYAN</h1>
          <h1> RYAN</h1>
          <h1> RYAN</h1>
          <h1> RYAN</h1>
        </div>
        <div style = {styles.footer}>
        </div>
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
    backgroundColor: 'gray',
    paddingBottom: 200,
    margin: 0
  },

  footer: {
    position: 'fixed',
    backgroundColor: 'black',
    bottom: 0,
    height: 200,
    width: '100%'
  }
}


export default App;
