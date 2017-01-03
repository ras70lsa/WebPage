import React, { Component } from 'react';
import Content from './Content';

class Frameworks extends Component {

  render() {
    return (
      <div style={styles.margin}>
        <Content content={this.frameworks()} title={"Frameworks"} color={"#001f4d"}/>
      </div>
    );
  }

  frameworks() {
    return (
        <div>
          <p style={styles.text}>React, React Native, Spark, XStream, Arduino</p>
        </div>
    );
  }
}

let styles={
  margin:{
    marginLeft: 15,
  },

  text: {
    fontSize: 20,
    padding: 10
  }
}

export default Frameworks;
