import React, { Component } from 'react';
import Card from '../ProjectCard'
import arc from '../../../resources/images/ARC.png';

class Projects extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Card title={"Storkd"} image={arc} openSource={false}/>
        <Card title={"Lens"} openSource={true}/>
        <Card title={"Game"} openSource={true}/>
        <Card title={"Game"} openSource={true}/>
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
