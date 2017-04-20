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
    behaviorAccuracy: {
        type: Number
    },
    deviceAccuracy: {
        type: Number
    },
    suspended: {
        type: Boolean,
        default: false
    }
});

var Device = mongoose.model("Device", DeviceSchema);
module.exports = Device;
