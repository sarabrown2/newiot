import React, { Component } from 'react';
import axios from "axios";

import DevicesList from "./DevicesList";

export default class DeviceContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            devices: [],
            interval: null
        };
    }

    componentDidMount() {
        let self = this;

        setTimeout(function() {
            if (self.interval) {
                return;
            }
            self.poll();
            self.interval = setInterval(self.poll.bind(self), 5000);
        });
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    poll() {
        let self = this;

        axios.get("/api/device")
        .then(function (response) {
            self.setState({devices: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <DevicesList devices={this.state.devices} />
        );
    }
}
