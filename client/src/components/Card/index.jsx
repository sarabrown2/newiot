import React, { Component, PropTypes } from 'react';
import './Card.css';
import { browserHistory } from 'react-router';

class Card extends Component {
  constructor (props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick () {
    console.log("Name:", this.props.name)
    browserHistory.push('/activity');
  }

  render () {
    return (
      <div className="Card" onClick={this._onClick}>
        <h3>{this.props.name}</h3>
{/*     <a href={this.props.link}>Activity over time</a> */}
        <p><span>Behavior Classification: </span>{this.props.behavior}</p>
        <p><span>Suspected Activity: </span>{this.props.suspected}</p>
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string,
  // link: PropTypes.string,
  behavior: PropTypes.string,
  suspected: PropTypes.string,
};

export default Card;
