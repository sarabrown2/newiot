import React, { Component } from 'react';
import axios from "axios";

import DevicesList from "./DevicesList";

export default class DeviceContainer extends Component {
    constructor(props){
        super(props);
        this.state = {devices: []};
    }

    componentDidMount() {
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
