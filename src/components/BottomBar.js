import React, { Component } from 'react';
import Github from 'react-icons/lib/go/mark-github';
import LinkedIn from 'react-icons/lib/io/social-linkedin';
import Mail from 'react-icons/lib/fa/envelope';
import Up from 'react-icons/lib/fa/chevron-up';
import links from '../../config/links';
import Icon from './HighlightIcon'

class BottomBar extends Component {

  render() {
    return (
      <div style = {styles.footer}>
        <div style = {styles.center}>
          <a href='#'>
            <Up size= {20} style={styles.black}/>
          </a>
        </div>
        <div style = {styles.right}>
            <ul>
              <Icon listItemStyle={styles.li} link={links.github} component={this.github(styles.black)} hover={this.github(styles.orange)}/>
              <Icon listItemStyle={styles.li} link={links.linkedin} component={this.linkedIn(styles.blue)} hover={this.linkedIn(styles.purple)}/>
              <Icon listItemStyle={styles.li} link={"mailto:" + links.gmail} component={this.mail(styles.black)} hover={this.mail(styles.red)}/>
            </ul>
        </div>
        <div style = {styles.left}>
          <Icon listItemStyle={styles.li} link={links.about} component={this.about(styles.about)} hover={this.about(styles.aboutHover)}/>
        </div>
      </div>
    );
  }

  about(style) {
    return <p style = {style}>About this page</p>;
  }

  mail(style) {
      return <Mail size= {45} style = {style}/>;
  }

  linkedIn(style) {
      return <LinkedIn size={48} style = {style}/>;
  }

  github(style) {
    return (<Github size={45} style = {style}/>);
  }
}

let styles = {

  blue:{
    color: '#0077B5'
  },

  purple: {
    color: '#8d6cab'
  },

  black: {
    color: 'black',
  },

  red:{
    color: '#dd5143'
  },

  footer: {
    position: 'fixed',
    backgroundColor: 'white',
    borderTopWidth: 'black',
    borderTopStyle: 'solid',
    bottom: 0,
    height: 60,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  right: {
    position: 'fixed',
    backgroundColor: 'clear',
    bottom: 0,
    right: 0,
    height: 60,
    width: 220,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-center'
  },

  orange: {
    color: '#ff9933'
  },

  center: {
    position: 'fixed',
    bottom: 0,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  left: {
    position: 'fixed',
    backgroundColor: 'clear',
    bottom: 0,
    left: 0,
    height: 60,
    width: 120,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
  },

  about: {
    margin: 0,
    padding: 0,
    color: 'black',
    textDecoration: 'none',
  },

  aboutHover: {
    margin: 0,
    padding: 0,
    color: '#8d6cab',
  },

  li: {
    display: 'inline-block',
    margin: 0,
    paddingRight: 10,
    paddingTop: 5
  }
}

export default BottomBar;
