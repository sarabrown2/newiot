import React, { Component } from 'react';

import Card from '../Card';

export default class DevicesListItem extends Component {
    render() {
        return (
            <Card name={this.props.device.title} behavior={this.props.device.behavior} suspected={this.props.device.infected} />
        );
    }
}
