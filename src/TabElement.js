import React, { Component } from 'react';

class TabElement extends Component {

  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  hoverTrue() {
    this.setState({hover: true});
  }

  hoverFalse() {
    this.setState({hover: false});
  }

  render() {
    var linkStyle = {color: 'black', textDecoration: 'none'};
    if (this.props.selected) {
      linkStyle = {color: 'blue', textDecoration: 'none', fontSize: 20};
    } else if (this.state.hover){
      linkStyle = {color: 'black', textDecoration: 'none', fontSize: 20};
    }
    return (
      <li onClick = {this.props.clickEvent} onMouseEnter={() => this.hoverTrue()} onMouseLeave={() => this.hoverFalse()} style = {{display: 'inline-block', paddingRight: 40}}>
        <a href="#" style = {linkStyle}>
          {this.props.title}
        </a>
      </li>
    );
  }
}

export default TabElement;
