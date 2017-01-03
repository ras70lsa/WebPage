import React, { Component } from 'react';

class Content extends Component {

  render() {
    let backgroundColor={backgroundColor: this.props.color}
    return (
        <div style={styles.container}>
          <div style={Object.assign(styles.header, backgroundColor)}>
            <h2 style={styles.title}>{this.props.title}</h2>
          </div>
          {this.props.content}
        </div>
    );
  }
}

let styles={
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 15,
    marginLeft: 5,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'auto'
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-end',
    paddingBottom: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    borderBottomStyle: 'solid'
  },

  title: {
    margin: 0,
    padding: 0,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: 'white'
  },
}

export default Content;
