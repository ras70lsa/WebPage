import React, { Component } from 'react';
import TabElement from './TabElement';
import EducationPage from './EducationPage';
import CV from './CV';
import Home from './Home';

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
      <div style = {styles.tabsContainer}>
        <TabElement title = "Home" clickEvent = {this.click.bind(this, "Home")} selected = {this.state.selected === "Home"}/>
        <TabElement title = "Projects" clickEvent = {this.click.bind(this, "Projects")} selected = {this.state.selected === "Projects"}/>
        <TabElement title = "Education" clickEvent = {this.click.bind(this, "EDU")} selected = {this.state.selected === "EDU"}/>
        <TabElement title = "Work Experience" clickEvent = {this.click.bind(this, "Work")} selected = {this.state.selected === "Work"}/>
        <TabElement title = "CV" clickEvent = {this.click.bind(this, "CV")} selected = {this.state.selected === "CV"}/>
      </div>
    );
  }

  renderContent() {
      if (this.state.selected === "CV") {
        return <CV/>;
      } else if (this.state.selected === "EDU") {
        return <EducationPage/>;
      }
      return <Home/>;
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

let styles = {
  tabsContainer: {
    backgroundColor: '#9fbedf',
    borderBottomWidth: 4,
    borderBottomStyle: 'solid',
    display: 'flex',
    minHeight: 60,
    margin: 0,
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
}



export default Tabs;
