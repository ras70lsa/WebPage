import React, { Component } from 'react';
import Card from '../WorkCard';
import iLogo from '../../../resources/iLogo.png';

class Work extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Card title={"InterSystems"} image={iLogo}/>
        <Card title={"Peer Tutor"} image={iLogo}/>
      </div>
    );
  }
}

let styles={
  container: {
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 40,
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 80
  },
}
export default Work;
