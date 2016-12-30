import React, { Component } from 'react';
import logo from '../../resources/chapel.jpg';

class Header extends Component {
  render() {
    return (
      <div style = {styles.container}>
        <img style = {styles.image} src={logo}/>
      </div>
    );
  }
}

let styles = {
  container: {
    backgroundColor: 'gray',
    height: 200,
    minWidth: '100%',
    overflow: 'hidden'
  },

  image: {
    width: '100%',
  },
}

export default Header;
