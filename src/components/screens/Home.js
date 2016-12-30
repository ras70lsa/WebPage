import React, { Component } from 'react';
import profile from '../../../resources/profileImage.jpg';
import description from '../../../resources/Description';
import ProjectsLink from '../ProjectsLink';
import Education from '../Education';

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
            <ProjectsLink clickEvent={this.props.clickEvent}/>
          </div>
        </div>
        <Education/>
      </div>
    );
  }

  setHover(status) {
    this.setState({hover:status});
  }
}

let styles = {

  avatar: {
    width: 250,
    padding: 20,
    borderRadius: '50%',
    marginLeft: 80,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 70,
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
