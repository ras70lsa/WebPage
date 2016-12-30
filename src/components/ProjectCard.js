import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

class ProjectCard extends Component {

  render() {
    var codeButton=this.codeButton();
    if(!this.props.openSource) {
      codeButton=this.disabledButton();
    }
    return (
      <div style={styles.container}>
        <img src={this.props.image} style={styles.avatar}/>
          <div style={styles.textContainer}>
            <h2 style={styles.title}>{this.props.title}</h2>
            <p>Description about the company.  Here I can ramble on about what I did</p>
            <div style={styles.buttonContainer}>
              <a target="_blank" href={this.props.link} style={styles.nounderline}>
                <Button bsStyle="success" bsSize="large" block style={styles.button}>Images</Button>
              </a>
              {codeButton}
            </div>
          </div>
      </div>
    )
  }

  codeButton() {
    return(
      <a target="_blank" href={this.props.link} style={styles.nounderline}>
        <Button bsStyle="primary" bsSize="large" block style={styles.button}>Code</Button>
      </a>
    );
  }

  disabledButton() {
    const tooltip = (
      <Tooltip id="tooltip">Code not open source</Tooltip>
    );
    return (
      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <Button bsStyle="primary" bsSize="large" style={styles.opac} block>Code</Button>
      </OverlayTrigger>
    );
  }
}

let styles={
  container:{
    width: 300,
    height: 400,
    padding: 20,
    backgroundColor:'#eaedf2',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    marginTop: 40
  },

  opac:{
    opacity: .5,
    borderRadius: 0,
    cursor: 'not-allowed'
  },

  button:{
    borderRadius: 0
  },

  nounderline:{
    textDecoration: 'none'
  },

  buttonContainer:{
    position: 'absolute',
    display:'flex',
    flex: 1,
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    width: '100%'
  },

  title:{
    padding:0,
    margin:0
  },

  textContainer:{
    padding: 0,
    display:'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
    flexDirection: 'column',
    position: 'relative',
  },

  avatar: {
    height: 50,
    borderRadius: '50%',
  },
}
export default ProjectCard;
