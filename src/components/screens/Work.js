import React, { Component } from 'react';
import Card from '../WorkCard';
import iLogo from '../../../resources/images/iLogo.png';
import arc from '../../../resources/images/ARC.png';
import links from '../../../config/links';

class Work extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Card title={"InterSystems"} image={iLogo} link={links.intersystems}/>
        <Card title={"Peer Tutor"} image={arc} link={links.dukeARC}/>
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
