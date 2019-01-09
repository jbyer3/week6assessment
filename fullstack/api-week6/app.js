var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var api = require('./routes/api.route');
var mongoose = require("mongoose");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function (req, res, next) {
  res.header
    ("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header
    ("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header
    ("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api)

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/albumapp",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`Successfully Connected to the Mongodb Database `);
  })
  .catch(() => {
    console.log("Error connecting to the Mongodb Database");
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;