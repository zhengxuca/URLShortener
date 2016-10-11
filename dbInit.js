/*
set up a sequence number collection in mongodb
*/

var SequencesModel = require("./models/Sequences");

// Bring Mongoose into the app 
var mongoose = require('mongoose');

// Build the connection string 
var dbURI = process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/URL';
console.log("The dbURI: "+dbURI);

// Create the database connection 
mongoose.connect(dbURI);

console.log("Mongoose connecting");

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});




