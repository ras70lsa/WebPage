import React, { Component } from 'react';

class WorkCard extends Component {

  render() {
    return (
      <div style={styles.container}>
        <img src={this.props.image} style={styles.avatar}/>
          <div style={styles.textContainer}>
            <h2 style={styles.title}>{this.props.title}</h2>
            <p>Description about the company.  Here I can ramble on about what I did</p>
            <button style={styles.button}>More</button>
          </div>
      </div>
    )
  }
}

let styles={
  container:{
    width: 500,
    height: 200,
    padding: 20,
    backgroundColor:'#eaedf2',
    display:'flex',
    justifyContent: 'space-around',
    borderStyle: 'solid',
  },

  button:{
    position: 'absolute',
    bottom: 0,
    right: 0
  },

  title:{
    padding:0,
    margin:0
  },

  textContainer:{
    padding: 0,
    display:'flex',
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    flexDirection: 'column',
    position: 'relative',
    paddingLeft: 20
  },

  avatar: {
    width: 128,
    borderRadius: '50%',
  },
}
export default WorkCard;
