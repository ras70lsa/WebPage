import React, { Component } from 'react';
import SkillBar from './SkillBar';
import Content from './Content'

class Skills extends Component {

  render() {
    return (
      <Content content={this.skillBars()} title={"Skills"} color={"#66a3ff"}/>
    );
  }

  skillBars(){
    return(
      <div style={styles.container}>
        <div style={styles.descriptors}>
          <p style={styles.rightPadding}>Beginner</p>
          <p style={styles.noPadding}>Expert</p>
        </div>
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 4
  },

  descriptors: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    paddingRight: 16,
  },

  noPadding:{
    margin:0,
    padding:0
  },

  rightPadding:{
    margin:0,
    padding:0,
    paddingRight: 80
  },

}

export default Skills;
