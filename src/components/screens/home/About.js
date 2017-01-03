import React, { Component } from 'react';
import profile from '../../../../resources/images/profileImage.jpg';
import description from '../../../../resources/Description';
import Link from '../../Link';

class About extends Component {

  render() {
    return (
      <div style={styles.left}>
        <div style={styles.leftDiv}>
          <img src={profile} style={styles.avatar}/>
        </div>
        <div style={styles.rightDiv}>
          <div style={styles.listContainer}>
            <h1>Ryan St.Pierre</h1>
            <p style={styles.p}>{description.about}</p>
            <Link clickEvent={this.props.clickEvent} message={"Explore my projects"}/>
          </div>
        </div>
      </div>
    );
  }
}

let styles = {

  avatar: {
    padding: 18,
    borderRadius: '50%',
    width: '100%'
  },

  leftDiv: {
    width: 250,
  },

  rightDiv: {
    flex: 1
  },

  left: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20,
    backgroundColor: 'white',
    marginTop: 10,
    marginRight: 15,
    paddingRight: 20,
    borderRadius: 10,
  },

  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 250,
    justifyContent: 'flex-start',
  }
}

export default About;
