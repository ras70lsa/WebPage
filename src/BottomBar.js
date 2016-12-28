import React, { Component } from 'react';
import Github from 'react-icons/lib/go/mark-github';
import LinkedIn from 'react-icons/lib/io/social-linkedin';
import Mail from 'react-icons/lib/fa/envelope';
import Up from 'react-icons/lib/fa/chevron-up';
import links from '../config/links'

class BottomBar extends Component {

  render() {
    return (
      <div style = {styles.footer}>
        <div style = {styles.center}>
          <a href='#'>
            <Up size= {20} style = {{color: 'black'}}>top</Up>
          </a>
        </div>
        <div style = {styles.right}>
            <ul>
              <li style = {styles.listItem}>
                <a target="_blank" href={links.github}>
                  <Github size={45} style = {{color: 'black'}}/>
                </a>
              </li>
              <li style= {{display: 'inline-block', paddingRight: 10}}>
                <a target="_blank" href={links.linkedin}>
                  <LinkedIn size={48} style = {{color: '#0077B5'}}/>
                </a>
              </li>
              <li style= {{display: 'inline-block', paddingRight: 10}}>
                <a href={"mailto:" + links.gmail}>
                  <Mail size= {45} style = {{color: 'black'}}/>
                </a>
              </li>
            </ul>
        </div>
        <div style = {styles.left}>
          <a target="_blank" href={links.about} style = {styles.about}>
            About this page
          </a>
        </div>
      </div>
    );
  }
}

let styles = {
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

  listItem: {
    display: 'inline-block',
    paddingRight: 10
  },
}

export default BottomBar;
