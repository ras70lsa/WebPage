import React, { Component } from 'react';
import Education from '../../Education';
import About from './About';
import Skills from './Skills'

class Home extends Component {

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.column}>
          <About/>
          <Education/>
        </div>
        <Skills/>
      </div>
    );
  }

  setHover(status) {
    this.setState({hover:status});
  }
}

let styles = {

  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 80,
    backgroundColor: '#eaedf2',
  },

  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '55%',
  }
}

export default Home;
