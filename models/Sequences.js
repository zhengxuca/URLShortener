// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema for Sequence Number
var SequenceSchema = new Schema({
    seq: {
        type: Number,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Sequences = mongoose.model('Sequence', SequenceSchema);

// make this available to our Node applications
module.exports = Sequences;