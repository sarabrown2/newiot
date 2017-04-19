var System = require("../models/systemModel.js");

var DatabaseSeeder = function () {
        var self = this;
        System.find({}).then(function(data) {
            if(data.length > 0){
                //database already seeded
                return;
            }
            console.log("Seeding database...")
            System.create({
                scanDevices: false,
                filename: null
            });
        });
}

module.exports = DatabaseSeeder;
