import React, { Component } from 'react';
import Content from './Content';
import soccer from '../../../../resources/images/clubSoccer.jpg'
import Link from '../../Link';
import links from '../../../../config/links';

class Activity extends Component {

  render() {
    return (
      <Content content={this.club()} title={"Activity"} color={"#003d99"}/>
    );
  }

  club() {
    return(
      <div style={styles.container}>
        <div style={styles.photoContainer}>
          <img src={soccer} style={styles.avatar}/>
        </div>
        <div style={styles.textContainer}>
          <h4 style={styles.title}>Club Soccer</h4>
          <h5 style={styles.description}>Vice President (2016)</h5>
          <p style={styles.date}>2015-2017</p>
          <p style={styles.trips}>Notable Trips: Trinidad 2015, Regionals 2015 (Florida)</p>
          <div style={styles.margin}>
            <Link link={links.clubSoccer} message={"Learn more about club sports"}/>
          </div>
        </div>
      </div>
    )
  }
}

let styles={

  container: {
    display: 'flex',
    width: '100%'
  },

  photoContainer: {
    width: 180
  },

  margin:{
    marginLeft: 10,
  },

  textContainer: {
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: 1
  },

  date: {
    position: 'absolute',
    right: 0,
    top: 0
  },

  title: {
    margin: 0,
    padding: 0,
    marginLeft: 10,
    fontSize: 24
  },

  trips: {
    marginLeft: 10,
    fontSize: 18
  },

  description: {
    margin: 0,
    padding: 0,
    marginLeft: 10,
    paddingTop: 8,
    fontSize: 18
  },

  avatar: {
    width: '100%',
    borderBottomLeftRadius: 10
  }
}

export default Activity;
