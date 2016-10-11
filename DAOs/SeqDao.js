/*
set up a sequence number collection in mongodb
*/
var SequencesModel = require("../models/Sequences.js");

exports.getSeqNum = function (callback) {

    SequencesModel.findOne({}, function (err, seqNumber) {
        if (err) {
            callback(err);
            return;
        }
        if (seqNumber) {
            SequencesModel.update({ _id: seqNumber._id }, { $set: { seq: seqNumber.seq + 1 } }).exec();
            callback(null,seqNumber);
        } else {
            var err = new Error();
            err.status = 404;
            callback(err);
        }

    }
    );

};



