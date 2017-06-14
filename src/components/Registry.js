import React from 'react';
import styles from '../styles/App.css';

class Registry extends React.Component {
  render() {
    const hiking = require('../assets/hiking.JPG');
    var style = {
      textAlign: 'center'
    }
    return (
      <div className="content">
        <h1 className="title">Registry</h1>
        <div>
          <p className="description">We can't wait to celebrate with you, and we appreciate the gift of your presence! But for <i>presents</i>, that's here:</p>
          <p style={style}> <a href="https://www.zola.com/registry/mattjulie" target="_blank">Our Registry</a> </p>
          <img className="center photo" src={hiking} />
        </div>
      </div>
    )
  }
}

export default Registry;
