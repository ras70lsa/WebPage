import React, { Component } from 'react';

class HighlightIcon extends Component {

  constructor() {
    super();
    this.state = {hover: false};
  }

  render() {
    var comp = this.props.component;
    var liStyle=styles.listItem;
    if(this.state.hover){
      comp = this.props.hover;
    }
    if (this.props.listItemStyle!=null) {
      liStyle=this.props.listItemStyle;
    }
    return (
      <li style = {liStyle}>
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
    padding: 0,
    margin: 0,
  },

  a: {
    textDecoration: 'none',
  }
}

export default HighlightIcon;
