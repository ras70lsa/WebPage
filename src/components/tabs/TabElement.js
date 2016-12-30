import React, { Component } from 'react';

class TabElement extends Component {

  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  setHover(status) {
    this.setState({hover: status});
  }

  render() {
    var linkStyle = styles.nonselected;
    if (this.props.selected) {
      linkStyle = styles.selected;
    } else if (this.state.hover){
      linkStyle = styles.hover;
    }
    return (
      <div onClick={this.props.clickEvent} onMouseEnter={() => this.setHover(true)} onMouseLeave={() => this.setHover(false)} style = {styles.listItem}>
        <a href="#" style = {linkStyle}>
          {this.props.title}
        </a>
      </div>
    );
  }
}

let styles = {
  listItem: {
    listStyleType: 'none',
    padding: 10
  },

  nonselected: {
    color: '#eaedf2',
    textDecoration: 'none',
    fontSize: 20
  },

  selected: {
    color: '#eaedf2',
    textDecoration: 'underline',
    fontSize: 25
  },

  hover: {
    color: '#eaedf2',
    textDecoration: 'none',
    fontSize: 25
  },

}

export default TabElement;
