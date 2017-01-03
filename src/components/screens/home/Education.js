import React, { Component } from 'react';
import description from '../../../../resources/Description';
import Content from './Content';
import crest from '../../../../resources/images/crest.png';
import lsa from '../../../../resources/images/lasalle.jpg';

class Education extends Component {

  render() {
    return (
      <div style={styles.margin}>
        <Content content={this.education()} title={"Education"} color={"#0066ff"}/>
      </div>
    );
  }

  education() {
    return (
      <div style={styles.holder}>
        <div style={styles.container}>
          <img src={crest} style={styles.crest}/>
          <div style={styles.textContainer}>
            <h3 style={styles.noPadding}>Duke University</h3>
            <p style={styles.major}>BSE Electrical and Computer Engineering/CS</p>
            <p style={styles.minor}>Economics Minor</p>
          </div>
          <p style={styles.date}>Exp. Grad: 2018</p>
          <p style={styles.city}>Durham, NC</p>
        </div>
        <div style={Object.assign(styles.container, styles.border)}>
          <img src={lsa} style={styles.crest}/>
          <div style={styles.textContainer}>
            <h3 style={styles.noPadding}>LaSalle Academy</h3>
            <p style={styles.minor}>Highschool </p>
          </div>
          <p style={styles.date}>2014</p>
          <p style={styles.city}>Providence, RI</p>
        </div>
      </div>
    );
  }
}

let styles={

  holder: {
      width: '100%'
  },

  border: {
    borderTopStyle: 'solid',
    borderTopWidth: 1
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    position: 'relative',
  },

  date: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10
  },

  city: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 10
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 10,
    position: 'relative',
  },

  crest: {
    width: 100
  },

  margin:{
    marginLeft: 15,
  },

  noPadding: {
    display: 'in-line',
    margin: 0,
    padding: 0,
  },

  major: {
    margin: 0,
    padding: 2,
  },

  minor: {
    margin: 0,
    padding: 0,
    fontStyle: 'italic'
  },

  small: {
    margin: 0,
    padding: 0,
    fontSize: 12,
    textAlign: 'center'
  },

}

export default Education;
