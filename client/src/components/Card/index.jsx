import React, { Component, PropTypes } from 'react';
import { Button, Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import './Card.css';
// import { browserHistory } from 'react-router';

class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      suspectedActivity: null,
      cardColor: null
    };

    this._onClick = this._onClick.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  componentDidMount() {
    switch (this.props.device.infected) {
      case 0:
        this.setState({suspectedActivity: "Safe"});
        this.setState({cardColor: "green"});
        break;
      case 1:
        this.setState({suspectedActivity: "Suspicious"});
        this.setState({cardColor: "yellow"});
        break;
      case 2:
        this.setState({suspectedActivity: "Infected"});
        this.setState({cardColor: "red"});
        break;
      default:
        this.setState({suspectedActivity: "Unknown"});
    }
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

  cardClass () {
    if (this.state.cardColor === "yellow") {
      return "Card Card--yellow";
    } else if (this.state.cardColor === "red") {
      return "Card Card--red";
    }

    return "Card";
  }

  modalClass () {
    if (this.state.cardColor === "yellow") {
      return "TheModal TheModal--yellow";
    } else if (this.state.cardColor === "red") {
      return "TheModal TheModal--red";
    }

    return "TheModal";
  }

  render () {
    return (
      <div className={this.cardClass()} onClick={this._onClick}>
        <h3>{this.props.device.title}</h3>
        <p><span>Behavior Classification: </span>{this.props.device.behavior}</p>
        <p><span>Suspected Activity: </span>{this.state.suspectedActivity}</p>
        <p>Click for more info!</p>

        <Modal show={this.state.showModal} onHide={this.close}>

          <div className={this.modalClass()}>
            <ModalHeader closeButton>
              <ModalTitle>{this.props.device.title}</ModalTitle>
            </ModalHeader>
          </div>
          <ModalBody>
              <p><span>Behavior Classification: </span>{this.props.device.behavior}</p>
              <p><span>Suspected Activity: </span>{this.state.suspectedActivity}</p>
              <p><span>MAC Address: </span>{this.props.device.macAddress}</p>
              <p><span>IP Address: </span>{this.props.device.ipAddress}</p>
              <p><span>Behavior Accuracy: </span>{this.props.device.behaviorAccuracy}</p>
              <p><span>Device Accuracy: </span>{this.props.device.deviceAccuracy}</p>
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
