import React, { Component } from 'react';
import Github from 'react-icons/lib/go/mark-github';
import LinkedIn from 'react-icons/lib/io/social-linkedin';
import Mail from 'react-icons/lib/fa/envelope';

class BottomBar extends Component {

  render() {
    return (
      <div style = {{width: '100%', float: 'right', textAlign: 'right', height: 70, backgroundColor: 'blue'}}>
          <ul style = {{display: 'block'}}>
            <li style= {{display: 'inline-block', paddingRight: 10}}>
              <a target="_blank" href="https://github.com/ras70lsa">
                <Github size={45} style = {{color: 'black'}}/>
              </a>
            </li>
            <li style= {{display: 'inline-block', paddingRight: 10}}>
              <a target="_blank" href="https://www.linkedin.com/in/ryanstpierre1">
                <LinkedIn  size={48} style = {{color: '#0077B5'}}/>
              </a>
            </li>
            <li style= {{display: 'inline-block', paddingRight: 10}}>
              <a href="mailto:ryanst.pierre48@gmail.com">
                <Mail size={45} style = {{color: 'black'}}/>
              </a>
            </li>
          </ul>
      </div>
    );
  }

}

export default BottomBar;
