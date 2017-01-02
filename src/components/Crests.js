import React, { Component } from 'react';
import crest from '../../resources/images/crest.png';
import lsaCrest from '../../resources/images/lasalle.jpg';
import Icon from './HighlightIcon';
import links from '../../config/links';

class Crests extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Icon link={links.duke} component={this.duke(styles.image)} hover={this.duke(styles.imageFull)}/>
        <Icon link={links.lsa} component={this.lsa(styles.image)} hover={this.lsa(styles.imageFull)}/>
      </div>
    );
  }

  duke(style) {
    return <img src={crest} style={style}/>;
  }

  lsa(style) {
    return <img src={lsaCrest} style={style}/>;
  }
}

let styles = {

  container: {
    paddingTop: 20,
    paddingLeft: 10
  },

  image: {
    width: 100,
    opacity: .90
  },

  imageFull: {
    width: 100,
    opacity: 1
  }
}

export default Crests;
