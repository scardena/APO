var express = require('express');
var router = express.Router();
var async = require('async');
var mongodb = require('mongodb');
var http = require('http');


/* GET home page. */
router.get('/', function(req, res) 
{

var db = req.db;
var collection = db.collection('testing');
collection.find().toArray(function(err,result){
        if (err) {console.log(err)}
        else {console.log("We've got results!")}
        console.log(result)
        var mystring = result[0]["servicename"] + " , " + result[0]["data"]
        res.render('newdashboard',{data:mystring})
});


});



module.exports = router;
