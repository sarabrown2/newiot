// src/components/NotFound/index.js
// import React, { PropTypes, Component } from 'react';
import React, { Component } from 'react';
import classnames from 'classnames';

import './NotFound.css';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}
