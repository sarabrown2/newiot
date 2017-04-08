var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    title: {
        type: String
    },
    infected: {
        type: Number
    },
    macAddress: {
        type: String
    },
    ipAddress: {
        type: String
    },
    behavior: {
        type: String
    },
    malType: {
        type: String
    },
    malDesc: {
        type: String
    },
    accuracy: {
        type: Number
    }
});

var Device = mongoose.model("Device", DeviceSchema);
module.exports = Device;
