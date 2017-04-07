import React from 'react';

class Hotels extends React.Component {
  render() {
    const img = require('./fire.jpg');
    return (
      <div>
        <img src={img} />
      </div>
    )
  }
}

export default Hotels;
