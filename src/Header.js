import React, { Component } from 'react';
import logo from './chapel.jpg';

class Header extends Component {
  render() {
    return (
      <div style = {{backgroundColor: 'gray', height: 200, overflow: 'hidden'}}>
        <img style = {{width: '100%'}} src={logo}/>
      </div>
    );
  }
}

export default Header;
