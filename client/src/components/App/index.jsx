// src/components/App/index.js
import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

// import Card from '../Card';

import logo from './logo.svg';
import './App.css';

class App extends Component {
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
                <h2>Internet of Things Security Project</h2>
              </div>
              <div className="row">
                <h3>Sara, Brandon, Jacob</h3>
                <h3>Sponsored by Sophos</h3>
                <hr></hr>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <Button
                    bsStyle="success"
                    bsSize="large"
                    href="#"
                    target="_blank">
                    Start Network Scan
                  </Button>
                </div>
                <div className="col-sm-4">
                  <Button
                    bsStyle="danger"
                    bsSize="large"
                    href="#"
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

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to IOT Device Profiler</h2>
//         </div>
//         <div className="App-cards">
//           <Card name="Internet Enabled Printer" behavior="Bad" suspected="None" />
//           <Card name="Chromecast" behavior="Normal" suspected="None" />
//           <Card name="Belkin Branded Bulb" behavior="Normal" suspected="None" />
//           <Card name="Amazon Dash Button" behavior="Normal" suspected="None" />
//           <Card name="Belkin Branded Smart Switch" behavior="Normal" suspected="None" />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
