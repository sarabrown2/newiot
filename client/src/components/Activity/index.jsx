// src/components/Activity/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { browserHistory } from 'react-router';
import Card from '../Card';
import App from "../App";
import './Activity.css';

export default class Activity extends Component {
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
        <div className={classnames('Activity', className)} {...props}>
          <h1>Activity</h1>
        </div>
        <div className="startb" onClick={this._onClick}>
          <button>List</button>
        </div>
      </div>
    );
  }
}
