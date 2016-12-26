import React, { Component } from 'react';
import TabElement from './TabElement';
import EducationPage from './EducationPage';

class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: "Home"};
  }

  click(id, e) {
    e.preventDefault();
    this.setState({selected: id});
  }

  renderTabs() {
    return(
      <ul style = {{display: 'block'}}>
        <TabElement title = "Home" clickEvent = {this.click.bind(this, "Home")} selected = {this.state.selected === "Home"}/>
        <TabElement title = "Projects" clickEvent = {this.click.bind(this, "Projects")} selected = {this.state.selected === "Projects"}/>
        <TabElement title = "Education" clickEvent = {this.click.bind(this, "EDU")} selected = {this.state.selected === "EDU"}/>
        <TabElement title = "Work Experience" clickEvent = {this.click.bind(this, "Work")} selected = {this.state.selected === "Work"}/>
        <TabElement title = "CV" clickEvent = {this.click.bind(this, "CV")} selected = {this.state.selected === "CV"}/>
      </ul>
    );
  }

  renderContent() {
      return (
        <EducationPage/>
      );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderTabs()}
        </div>
        <div>
          {this.renderContent()}
        </div>
      </div>
    );
  }

}

export default Tabs;
