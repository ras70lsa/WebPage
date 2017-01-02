import React, { Component } from 'react';
import SkillBar from './SkillBar';

class Skills extends Component {

  render() {
    return (
        <div style={styles.skills}>
          <h2 style={styles.noPadding}>Skills</h2>
          <SkillBar skill={"Java"} level={5}/>
          <SkillBar skill={"Matlab"} level={4}/>
          <SkillBar skill={"Javascript"} level={3}/>
          <SkillBar skill={"SQL"} level={2}/>
          <SkillBar skill={"HTML"} level={2}/>
          <SkillBar skill={"Scala"} level={1}/>
        </div>
    );
  }
}

let styles={
  skills: {
    display: 'flex',
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  noPadding: {
    margin: 0,
    padding: 0,
  },
}

export default Skills;
