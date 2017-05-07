import React from 'react';
import styles from '../styles/App.css';

class Home extends React.Component {
  render() {
    const img = require('../assets/fire.jpg');
    return (
      <div className="center">
        <img className="content-home" src={img} />
      </div>
    )
  }
}

export default Home;
