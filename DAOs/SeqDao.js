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
            callback(null, seqNumber.seq);
        } else {

            var seqNumber = new SequencesModel({ seq: 1 });
            seqNumber.save(function (err) {
                if (err) {
                    var err = new Error();
                    err.status = 404;
                    callback(err);
                    return;
                }
                callback(null, 0);
            });
        }
    }
    );

};



