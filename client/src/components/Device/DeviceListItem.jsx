import React, { Component } from 'react';

import Card from '../Card';

export default class DevicesListItem extends Component {
    render() {
        return (
            <Card device={this.props.device} />
        );
    }
}
