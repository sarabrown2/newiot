import React, { Component } from 'react';
import './Navbar.css';
import { browserHistory } from 'react-router';

class Navbar extends Component {
  constructor () {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick () {
    browserHistory.push('/');
  }

  render () {
    return (
      <div className="Navbar">
        <div className="Homeb" onClick={this._onClick}>
          <button>Home</button>
        </div>
      </div>
    )
  }
};

export default Navbar;
