import React, { Component } from 'react';

class HighlightIcon extends Component {

  constructor() {
    super();
    this.state = {hover: false};
  }

  render() {
    var comp = this.props.component;
    if(this.state.hover){
      comp = this.props.hover;
    }
    return (
      <li style = {styles.listItem}>
        <a  onMouseLeave={() => this.setHover(false)}
            onMouseEnter={() => this.setHover(true)}
            style = {styles.a}
            target="_blank" href={this.props.link}>
          {comp}
        </a>
      </li>
    );
  }

  setHover(status) {
    this.setState({hover:status});
  }
}

let styles = {
  listItem: {
    display: 'inline-block',
    paddingRight: 10
  },

  a: {
    textDecoration: 'none',
  }
}

export default HighlightIcon;
