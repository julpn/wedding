import React, { Component, Image } from 'react';
import { render } from 'react-dom'

import MenuItem from './MenuItem';
import Hotels from './Hotels';
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
      fontSize: "50px"
    };
    var style1 = {
      backgroundColor: "#ff69b4"
    };
    return (
      <div>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1} style={style1}>"he"</Col>
        <Col xs={6} sm={6} md={8} lg={10} style={style1}>"he"</Col>
        <Col xs={6} sm={3} md={2} lg={1} style={style1}>"he"</Col>
      </Row>


      <div>
        <div className="background"></div>


        <div className="App-header">
          <h2 style={style}>Matt and Julie</h2>
          <h2 style={style}> are Getting Married!</h2>
        </div>


        <div className="block">
          <MenuItem name="Hotels" to="/hotels" loc={currentLocation} id={'hotels'} onToggle={this.onMenuToggle} selected={this.state.selected}/>
          <MenuItem name="RSVP" to="/rsvp" loc={currentLocation} id={'rsvp'} onToggle={this.onMenuToggle} selected={this.state.selected}/>
          <MenuItem name="Logistics" to="/logistics" loc={currentLocation} id={'logistics'} onToggle={this.onMenuToggle} selected={this.state.selected}/>
          <MenuItem name="Visiting NYC" to="/visit" loc={currentLocation} id={'visit'} onToggle={this.onMenuToggle} selected={this.state.selected}/>
        </div>

        <div className="block">
          <div className="outer-box">
            <div className="box"></div>
          </div>
          {this.props.children}
        </div>


      </div>
            </div>
    )
  }
}

  render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="hotels" component={Hotels} />
        <Route path="rsvp" component={Rsvp} />
        <Route path="logistics" component={Hotels} />
        <Route path="visit" component={Hotels} />
      </Route>
    </Router>
  ), document.body)

export default App;
