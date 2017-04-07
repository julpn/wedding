import React from 'react';
import styles from '../styles/App.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class MenuItem extends React.Component {
  constructor (props) {
  	super(props);
    this.state = {
      isHovering: false,
      //isSelected: false
    };
  }

  handleMouseOver () {
    this.setState({ isHovering: true });
  }

  handleMouseOut () {
    this.setState({ isHovering: false });
  }

  handleClick () {
    this.props.onToggle(this.props.id);
  }

  render() {
    console.log()
	  var cls;

    if (this.state.isHovering) {
      cls = 'Hover-true';
    } else if (this.props.selected === this.props.id) {
      cls = 'Selected';
    } else {
      cls = 'Hover-false'
    }
    return (
     <div className="MenuItem">
        <Link to={this.props.to}
        className={cls}
        onClick={this.handleClick.bind(this)}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>{this.props.name}</Link>
     </div>
    );
  }
}

export default MenuItem;
