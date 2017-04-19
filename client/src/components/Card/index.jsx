import React, { Component, PropTypes } from 'react';
import { Button, Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import './Card.css';
// import { browserHistory } from 'react-router';

class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };

    this._onClick = this._onClick.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  _onClick () {
    console.log("Name:", this.props.device.title)
    this.open();
    // browserHistory.push('/activity');
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render () {
    return (
      <div className="Card" onClick={this._onClick}>
        <h3>{this.props.device.title}</h3>
        <p><span>Behavior Classification: </span>{this.props.device.behavior}</p>
        <p><span>Suspected Activity: </span>{this.props.device.infected}</p>
        <p>Click for more info!</p>

        <Modal show={this.state.showModal} onHide={this.close}>
          <ModalHeader closeButton>
            <ModalTitle>{this.props.device.title}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p><span>Behavior Classification: </span>{this.props.device.behavior}</p>
            <p><span>Suspected Activity: </span>{this.props.device.infected}</p>
            <p><span>Mac Address: </span>{this.props.device.macAddress}</p>
            <p><span>IP Address: </span>{this.props.device.ipAddress}</p>
            <p><span>Malware Type: </span>{this.props.device.malType}</p>
            <p><span>Malware Description: </span>{this.props.device.malDesc}</p>
            <p><span>Accuracy: </span>{this.props.device.accuracy}</p>
            <p><span>Suspended: </span>{this.props.device.suspended}</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.close}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

Card.propTypes = {
  device: PropTypes.object
};

export default Card;
