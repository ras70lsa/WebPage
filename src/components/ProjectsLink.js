import React, { Component } from 'react';
import Chevron from 'react-icons/lib/fa/chevron-right';

class ProjectsLink extends Component {

    constructor() {
      super();
      this.state = {hover: false};
    }

    render() {
      var style=styles.black;
      if(this.state.hover) {
        style=styles.blue;
      }
      return(
        this.getComponent(style)
      );
    }

    getComponent(style) {
      return (
        <div>
          <a  style={styles.container}
              onMouseEnter={()=>this.setHover(true)} onMouseLeave={()=>this.setHover(false)}
              onClick={this.props.clickEvent}>
            <h4 style={style}>Explore my projects</h4>
            <Chevron size= {14} style = {style}/>
          </a>
        </div>
      );
    }

    setHover(bool){
      this.setState({hover: bool});
    }
}

let styles={
  container:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none'
  },

  black:{
    color: 'black'
  },

  blue:{
    color: 'blue'
  }
}

export default ProjectsLink;
