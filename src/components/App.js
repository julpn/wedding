import React, { Component, Image } from 'react';
import { render } from 'react-dom'

import MenuItem from './MenuItem';
import Hotels from './Hotels';
import Registry from './Registry';
import Logistics from './Logistics';
import Rsvp from './Rsvp';
import Home from './Home';

import { Button, Grid, Row, Col } from 'react-bootstrap';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import styles from '../styles/App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: ''
    };
    this.onMenuToggle = this.onMenuToggle.bind(this);
  }

  onMenuToggle (selected) {
      this.setState({
          selected: selected
      });
  }

  render() {
    var currentLocation = this.props.location.pathname;
    var style = {
      fontSize: "45px",
      fontFamily: 'Pacifico'
    };
    return (
      <div className="deets">
        <div className="background"></div>

        <div className="App-header">
          <div className="header1">8.19.2017</div>
          <h2 style={style}>Matt & Julie are Getting Married!</h2>
        </div>


        <div className="block center">
          <MenuItem name="Visit" to="/visit" loc={currentLocation} id={'hotels'} onToggle={this.onMenuToggle} selected={this.state.selected}/>
          <MenuItem name="Logistics" to="/logistics" loc={currentLocation} id={'logistics'} onToggle={this.onMenuToggle} selected={this.state.selected}/>
          <MenuItem name="Registry" to="/registry" loc={currentLocation} id={'registry'} onToggle={this.onMenuToggle} selected={this.state.selected}/>
          <MenuItem name="RSVP" to="/rsvp" loc={currentLocation} id={'rsvp'} onToggle={this.onMenuToggle} selected={this.state.selected}/>
        </div>

        <div className="block">
          {this.props.children}
        </div>

        <div className="footer">
          <p>Made with ❤ by Julie!</p>
        </div>
      </div>
    )
  }
}

  render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="rsvp" component={Rsvp} />
        <Route path="logistics" component={Logistics} />
        <Route path="visit" component={Hotels} />
        <Route path="registry" component={Registry} />
      </Route>
    </Router>
  ), document.body)

export default App;
