// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema for Sequence Number
var URLSchema = new Schema({
    shortURL: {
        type: String,
        required: true
    },
    fullURL: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var URLs = mongoose.model('URL', URLSchema);

// make this available to our Node applications
module.exports = URLs;