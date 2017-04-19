import React, { Component } from 'react';
import axios from "axios";

import AppLayout from "./AppLayout";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            systemID: null
        }

        this.startNetworkScanHandler = this.startNetworkScanHandler.bind(this);
        this.stopNetworkScanHandler = this.stopNetworkScanHandler.bind(this);
    }

    componentDidMount() {
        let self = this;

        axios.get("/api/system")
        .then(function (response) {
            self.setState({systemID: response.data[0]._id});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    startNetworkScanHandler() {
        console.log("Start Network Scan");
        let self = this;

        axios.put("/api/system/" + self.state.systemID, { scanDevices: true })
        .then(function (response) {
            console.log("Network Scan Started");
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    stopNetworkScanHandler() {
        console.log("Stop Network Scan");
                let self = this;

        axios.put("/api/system/" + self.state.systemID, { scanDevices: false })
        .then(function (response) {
            console.log("Network Scan Stopped");
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <AppLayout onStartNetworkScan={this.startNetworkScanHandler} onStopNetworkScan={this.stopNetworkScanHandler} />
        );
    }
}
