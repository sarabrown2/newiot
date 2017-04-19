// src/components/App/AppLayout.jsx
import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

class AppLayout extends Component {
  render() {
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
        <Jumbotron>
          <Grid>
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Internet of Things Monitoring and Malware Detection</h2>
              </div>
              <div className="row">
                <h3>Sara Brown, Jacob Garman, Brandon Wallace</h3>
                <h3>Sponsored by Sophos</h3>
                <hr></hr>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <Button
                    bsStyle="success"
                    bsSize="large"
                    onClick={this.props.onStartNetworkScan}
                    target="_blank">
                    Start Network Scan
                  </Button>
                </div>
                <div className="col-sm-4">
                  <Button
                    bsStyle="danger"
                    bsSize="large"
                    onClick={this.props.onStopNetworkScan}
                    target="_blank">
                    Stop Network Scan
                  </Button>
                </div>
                <div className="col-sm-4">
                  <Button
                    bsStyle="primary"
                    bsSize="large"
                    href="device"
                    target="_self">
                    View Detected Devices
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default AppLayout;
