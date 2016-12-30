import React, { Component } from 'react';
import Card from '../ProjectCard'
import arc from '../../../resources/ARC.png';

class Projects extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Card title={"Vooga"} image={arc}/>
        <Card title={"Lens"}/>
        <Card title={"Game"}/>
      </div>
    );
  }
}

let styles={
  container: {
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 80,
    alignItems: 'space-between',
  },
}
export default Projects;
