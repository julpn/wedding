import React from 'react';
import styles from '../styles/App.css';

class Logistics extends React.Component {
  render() {
    const us = require('../assets/first_photo.jpg');
    const boat = require('../assets/boat.JPG');
    const bridge = require('../assets/bridge.jpg');

    return (

        <div className="content">
          <h1 className="title">The Wedding!</h1>
          <h3 className="center">Check back later for more details!</h3>

          <div className="content-row">
            <img className="photo left" src={boat} />
            <div className="hotel-info">
              <div className="subtitle absolute">Friday</div>
              <div className="description absolute">
                <br/><br/><br/><b>Drinks!</b>
                <br/>Somewhere!
                <br/>Brooklyn!
                <br/>Nighttime!
              </div>
            </div>
          </div>

          <div className="content-row">
            <img className="photo left" src={bridge} />
            <div className="hotel-info">
              <div className="subtitle absolute">Saturday</div>
              <div className="description absolute">
                <br/><br/><br/><b>The Bell House</b>
                <br/>149 7th St, Brooklyn, NY
                <br/>Saturday, August 19th
                <br/>6:30pm
              </div>
            </div>
          </div>

        </div>

    )
  }
}

export default Logistics;
