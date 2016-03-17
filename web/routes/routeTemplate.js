var express = require('express');
var mongodb = require('mongodb');
var async = require('async');
var router = express.Router();

router.get('/', function(req, res) {

                res.render('newdashboard');
});
module.exports = router;

