var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SystemSchema = new Schema({
    scanDevices: {
        type: Boolean,
        default: false
    },
    filename: {
        type: String,
        default: null
    }
});

var System = mongoose.model("System", SystemSchema);
module.exports = System;
