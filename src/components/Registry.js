import React from 'react';
import styles from '../styles/App.css';

class Registry extends React.Component {
  render() {
    const construction = require('../assets/construction.gif');

    return (
      <div className="content">
        <h1 className="title">Registry Coming Soon!</h1>
        <div>
          <img className="center photo" src={construction} />
        </div>
      </div>
    )
  }
}

export default Registry;
