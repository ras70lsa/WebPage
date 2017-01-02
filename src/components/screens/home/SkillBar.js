import React, { Component } from 'react';
import image0 from '../../../../resources/loading/Loading0.png'
import image1 from '../../../../resources/loading/Loading1.png'
import image2 from '../../../../resources/loading/Loading2.png'
import image3 from '../../../../resources/loading/Loading3.png'
import image4 from '../../../../resources/loading/Loading4.png'
import image5 from '../../../../resources/loading/Loading5.png'

class SkillBar extends Component {

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.text}>{this.props.skill}</p>
        <img src={this.getImage()} style={styles.loading}/>
      </div>
    );
  }

  getImage(){
    switch(this.props.level) {
    case 0:
        return image0;
    case 1:
        return image1;
    case 2:
        return image2;
    case 3:
        return image3;
    case 4:
        return image4;
    case 5:
        return image5;
    default:
        return image0;
    }
  }
}

let styles={
  container:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
    paddingTop: 10
  },

  text: {
    paddingLeft: 10,
    fontSize: 30
  },

  loading: {
    height: 60,
    paddingRight: 10
  }
}
export default SkillBar;
