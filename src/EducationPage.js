import React, { Component } from 'react';
import crest from './crest.png';

class EducationPage extends Component {

  view() {
  }
  render() {
    return (
      <div style = {{width: '50%', height: 'auto'}}>
        <img src={crest} style={{marginLeft:'2%',float:'left',height:100}}/>
        <div style={{textAlign: 'left'}}>
          <h4 style = {{backgroundColor: 'blue'}}>Duke University</h4>
          <h4 style = {{backgroundColor: 'blue'}}>Duke University</h4>
          <ul style={{marginTop: 50, backgroundColor: 'red', listStyleType:'none'}}>
            <li>Expected Graduation: 2018</li>
            <li>Relevant Courses: </li>
            <li>Current GPA: (4.0/4.0)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EducationPage;
