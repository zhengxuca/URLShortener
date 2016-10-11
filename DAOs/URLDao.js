var URLsModel = require("../models/URLs.js");

exports.createTinyURL = function (fullURL, shortURL, callback) {
    var query = { shortURL: shortURL };
    var options = { upsert: true };
    URLsModel.findOneAndUpdate(query, { $set: { "fullURL": fullURL } }, options, function (err, document) {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
};

exports.getFullURL = function (shortURL, callback) {
    URLsModel.findOne({ shortURL: shortURL }, function (err, document) {
        if (err) {
            callback(err);
        } else {
            callback(null, document);
        }

    });
};
