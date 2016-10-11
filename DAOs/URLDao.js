var URLsModel = require("../models/URLs.js");

exports.createTinyURL = function (fullURL, shortURL, callback) {

    var shortToFull = new URLsModel({ "shortURL": shortURL, "fullURL": fullURL });

    shortToFull.save(function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    }
    );
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
