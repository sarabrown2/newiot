import React, { PropTypes, Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';

import DeviceListItem from "./DeviceListItem";

import './Device.css';

class DevicesList extends Component {
    render(){
        return (
        <div>
            <Navbar inverse fixedTop>
            <Grid>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">IOT Device Profiler</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
            </Grid>
            </Navbar>
            <div className="DeviceList">
                <div className="Device-cards">
                    {this.props.devices.map(device => {
                        if (device.suspended === false) {
                            return <DeviceListItem key={device._id} device={device}/>;
                        }
                    })}
                </div>
            </div>
        </div>
        );
    }
}

DevicesList.propTypes = {
  devices: PropTypes.array
};

export default DevicesList;
