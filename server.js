// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");
mongoose.Promise = Promise;

// Require Device schema
var Device = require("./server/models/deviceModel.js");

// Set Port
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Run Morgan for Logging
app.use(logger("dev"));

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Look for static files in these directories
app.use(express.static('client/build'));

// Hook mongoose with the mongodb database
mongoose.connect("mongodb://localhost/iotdevice");

// Save our mongoose connection to db
var db = mongoose.connection;

// If there's a mongoose error, log it to console
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once we "open" a connection to mongoose, tell the console we're in
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// API Routes
var apiRoutes = require('./server/routes/api');
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});