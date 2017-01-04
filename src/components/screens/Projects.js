import React, { Component } from 'react';
import Card from '../ProjectCard'
import storkd from '../../../resources/images/storkdLogo.png';
import vooga from '../../../resources/images/vooga.png';
import arduino from '../../../resources/images/arduino.png';
import links from '../../../config/links';

class Projects extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Card title={"Storkd"} image={storkd} openSource={false} color={"#66a3ff"}/>
        <Card title={"VoogaSalad"} image={vooga} openSource={true} link={links.vooga} color={"#0066ff"}/>
        <Card title={"IEEE IDC"} image={arduino} openSource={false}/>
        <Card title={"SLogo"} openSource={true}/>
        <Card title={"Cell Society"} openSource={true}/>
        <Card title={"Behind Enemy Lines"} openSource={true}/>
      </div>
    );
  }
}

let styles={
  container: {
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingBottom: 80,
    alignItems: 'space-between',
    backgroundColor: '#eaedf2'
  },
}
export default Projects;
