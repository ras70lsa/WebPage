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
              <Icon link={links.github} component={this.github(styles.black)} hover={this.github(styles.orange)}/>
              <Icon link={links.linkedin} component={this.linkedIn(styles.blue)} hover={this.linkedIn(styles.purple)}/>
              <Icon link={"mailto:" + links.gmail} component={this.mail(styles.black)} hover={this.mail(styles.red)}/>
            </ul>
        </div>
        <div style = {styles.left}>
          <Icon link={links.about} component={this.about(styles.about)} hover={this.about(styles.aboutHover)}/>
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
    color: 'black'
  },

  red:{
    color: '#dd5143'
  },

  footer: {
    position: 'fixed',
    backgroundColor: '#eaedf2',
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
    bottom: 0,
    right: 0,
    height: 60,
    width: 300,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
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
    width: 200,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  about: {
    paddingLeft: 20,
    color: 'black',
    textDecoration: 'none',
  },

  aboutHover: {
    paddingLeft: 20,
    color: '#8d6cab',
  },

  listItem: {
    display: 'inline-block',
    paddingRight: 10
  },
}

export default BottomBar;
