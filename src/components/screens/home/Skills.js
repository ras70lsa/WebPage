import React, { Component } from 'react';
import SkillBar from './SkillBar';

class Skills extends Component {

  render() {
    return (
        <div style={styles.skills}>
          <div style={styles.header}>
            <h2 style={styles.title}>Skills</h2>
          </div>
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
  skills: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 20,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
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


  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-end',
    paddingBottom: 2,
    backgroundColor: 'blue',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 50
  },

  title: {
    margin: 0,
    padding: 0,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: 'white'
  },
}

export default Skills;
