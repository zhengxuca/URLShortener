var express = require("express");

var favicon = require('serve-favicon');
var dbInit = require("./dbInit");
var bodyParser = require('body-parser');
var port = parseInt(process.env.PORT || '3000');
var path = require('path');
var app = express();

var indexRouter = require("./routes/index.js");
var TinyURLRouter = require("./routes/TinyURL.js");

var seqRowId;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require("morgan")("dev"));

app.use("/", favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use("/new", favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/new", TinyURLRouter);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.ejs');

});


app.listen(port, function () {
    console.log("listening on port " + port);
});

