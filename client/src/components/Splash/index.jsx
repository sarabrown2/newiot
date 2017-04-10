// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { browserHistory } from 'react-router';

import './Splash.css';

export default class Splash extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor (props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick () {
    browserHistory.push('/app');
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <div className={classnames('Splash', className)} {...props}>
          <h1>Splash</h1>

        </div>
        <div className="startb" onClick={this._onClick}>
          <button>Get Started</button>
        </div>
      </div>
    );
  }
}
