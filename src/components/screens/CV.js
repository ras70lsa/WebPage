import React, { Component } from 'react';
import pdf from '../../../resources/RyanStPierreResume.pdf';
import spdf from "simple-react-pdf";

class CV extends Component {
  render() {
    return (
      <div>
        <div style = {styles.container}>
          <a href={pdf} download="" style = {styles.noUnderline}>
            <button style = {styles.button}>
              Download
            </button>
          </a>
        </div>
        <spdf.SimplePDF file={pdf}/>
      </div>
    );
  }
}

let styles = {

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },

  noUnderline: {
    textDecoration: 'none',
  },

  button: {
    display: 'block',
    height: 50,
    width: 200,
    background: '#23ba39',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    textTransform: 'uppercase',
    borderWidth: 2,
    borderType: 'solid',
    borderColor: 'black',
    fontSize: 20,
    borderRadius: 10,
    cursor: 'pointer'
  }
}

export default CV;
