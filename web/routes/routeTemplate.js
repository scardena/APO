var express = require('express');
var router = express.Router();
var async = require('async');
var mongodb = require('mongodb');
var http = require('http');


/* GET home page. */
router.get('/', function(req, res) 
{

	res.render('newdashboard');

});



module.exports = router;
