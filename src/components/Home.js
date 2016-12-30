import React, { Component } from 'react';
import profile from '../../resources/profileImage.jpg';
import Crests from './Crests';
import description from '../../resources/Description';

class Home extends Component {

  render() {
    return (
      <div style={styles.container}>
        <div>
          <img src={profile} style={styles.avatar}/>
        </div>
        <div>
          <div style={styles.listContainer}>
            <h1>Ryan St.Pierre</h1>
            <p>{description.about}</p>
            <h3>See my projects</h3>
          </div>
        </div>
        <div style={styles.education}>
          <h3 style={styles.noPadding}>Duke University | Durham, NC</h3>
          <p style={styles.noPadding}>BSE Electrical and Computer Engineering/CS</p>
          <p style={styles.noPadding}>Minor: Mathematics</p>
          <p style={styles.noPadding}>Relevant Courses: list of classes</p>
          <Crests/>
        </div>
      </div>
    );
  }

  setHover(status) {
    this.setState({hover:status});
  }
}

let styles = {

  noPadding: {
    margin: 0,
    padding: 0,
  },

  avatar: {
    width: 250,
    padding: 20,
    borderRadius: '50%',
    marginLeft: 80
  },

  education: {
    display: 'flex',
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 60,
  },

  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 250,
    justifyContent: 'space-between',
    width: 300
  }
}

export default Home;
