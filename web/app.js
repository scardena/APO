var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');
var async = require('async');
var http = require('http');


// Database
var mongodb = require("mongodb");
var dbHost = config.database;
var dbObject;
var MongoClient = mongodb.MongoClient;

MongoClient.connect(dbHost, function(err, db)
{
	if ( err ) {console.log("unable to connect to mongodb, error", err)}
	else {console.log("conexion establecida")}
     	dbObject = db;
});
     



var routes = require('./routes/index');
var ngas = require('./routes/ngas');
var charts = require('./routes/charts');
var oracle = require('./routes/oracle')
var topusers = require('./routes/topusers');
var map = require('./routes/map');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next)
{
     req.db = dbObject;
     next();
});





app.use('/', routes);
app.use('/index',routes);
app.use('/ngas',ngas);
app.use('/charts',charts);
app.use('/oracle',oracle);
app.use('/api',api);
app.use('/topusers',topusers);
app.use('/map',map);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
