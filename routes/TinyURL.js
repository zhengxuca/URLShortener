var express = require('express');
var router = express.Router();
var URLDao = require("../DAOs/URLDao");
var seqDao = require("../DAOs/SeqDao");

//given a long URL, return a shortened URL
router.get("/:url*", function (req, res, next) {
    var url;
    if (!isURLValid(req.params)) {
         res.send(JSON.stringify({ error: "This url is invalid" }));
        return;
    } else {
        url = req.params.url + req.params[0] + ".com";
    }

    seqDao.getSeqNum(function (err, seqNumber) {
        if (err) {
            console.log(err);
            next(err);
            return;
        }

        var shortURL = getShortURL(seqNumber.seq);
        URLDao.createTinyURL(url, shortURL, function (err) {
            if (err) {
                console.log(err);
                next(err);
                return;
            }
            var result = {
                original_url: url,
                short_url: shortURL
            };
            res.send(JSON.stringify(result));
        });
    });


});

function isURLValid(params) {
    if (!params || !params.url || params.length == 0) {
        return false;
    }
    var url = params.url + params[0] + ".com";
    return /http:\/\/www.[a-z]*.com/.test(url)
        || /https:\/\/www.[a-z]*.com/.test(url)
        || /www.[a-z]*.com/.test(url);
};

//convert a 6 digit base 26 number
function getShortURL(number) {
    var result = ['A', 'A', 'A', 'A', 'A', 'A'];
    var index = 0;
    while (number > 0 && index < result.length) {
        var remainder = number % 26;
        result[index++] = String.fromCharCode('A'.charCodeAt() + remainder).charAt(0);
        number = parseInt(number / 26);
    }
    return result.join('');
}


module.exports = router;