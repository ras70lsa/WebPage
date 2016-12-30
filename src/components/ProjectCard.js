import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class ProjectCard extends Component {

  render() {
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
              <a target="_blank" href={this.props.link} style={styles.nounderline}>
                <Button bsStyle="primary" bsSize="large" block style={styles.button}>Code</Button>
              </a>
            </div>
          </div>
      </div>
    )
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
