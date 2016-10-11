var express = require('express');
var router = express.Router();
var URLDao = require("../DAOs/URLDao.js");

router.get("/", function (req, res) {
    res.render("index.ejs");
}
);

router.get("/:tinyUrl", function (req, res, next) {
    if (!req.params.tinyUrl) {
        next();
        return;
    }

    URLDao.getFullURL(req.params.tinyUrl, function (err, document) {
        if (err) {
            next(err);
            return;
        }
        if (!document) {
            res.send(JSON.stringify({ error: "This url is not in the database" }));
            return;
        }
        res.redirect(document.fullURL);
    });
});

module.exports = router;