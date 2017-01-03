import React, { Component } from 'react';
import About from './About';
import Skills from './Skills';
import Activity from './Activity';
import Education from './Education';
import Frameworks from './Frameworks'

class Home extends Component {

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.column}>
          <About clickEvent={this.props.clickEvent}/>
          <Education/>
          <Frameworks/>
        </div>
        <div style={styles.column}>
          <Skills/>
          <Activity/>
        </div>
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
