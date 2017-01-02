import React, { Component } from 'react';
import Crests from './Crests';
import description from '../../resources/Description';

class Education extends Component {

  render() {
    return (
        <div style={styles.education}>
          <h3 style={styles.noPadding}>Duke University | Durham, NC</h3>
          <p style={styles.smallPadding}>BSE Electrical and Computer Engineering/CS</p>
          <p style={styles.smallPadding}>Minor: Economics</p>
          <Crests/>
        </div>
    );
  }
}

let styles={
  education: {
    display: 'flex',
    flex: 1,
    marginLeft: 40,
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },

  noPadding: {
    margin: 0,
    padding: 0,
  },

  smallPadding: {
    margin: 0,
    padding: 2,
  },

  small: {
    margin: 0,
    padding: 0,
    fontSize: 12,
    textAlign: 'center'
  },

}

export default Education;
