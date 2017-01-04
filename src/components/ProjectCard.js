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
    var borderColor=this.borderColor(this.props.color);

    return (
      <div style={Object.assign(styles.container, borderColor)}>
        <div style={styles.imageContainer}>
          <img src={this.props.image} style={styles.avatar}/>
        </div>
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

  borderColor(color) {
    return {borderColor: color};
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
    width: 310,
    padding: 0,
    backgroundColor:'white',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },

  imageContainer: {
    backgroundColor: 'white',
    borderBottomStyle: 'solid',
    width: '100%',
    textAlign: 'center',
    paddingBottom: 6
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
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    margin: 0,
    width: '100%'
  },

  title:{
    padding:0,
    margin:0,
    paddingTop: 10
  },

  textContainer:{
    padding: 5,
    display:'flex',
    paddingBottom: 120,
    justifyContent: 'flex-start',
    alignItems:'center',
    flexDirection: 'column',
    position: 'relative',
    margin: 0,
    flex: 1,
  },

  avatar: {
    height: 150,
    maxWidth: '100%',
    padding: 2,
  },
}
export default ProjectCard;
