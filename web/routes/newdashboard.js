var express = require('express');
var mongodb = require('mongodb');
var async = require('async');
var router = express.Router();

router.get('/', function(req, res) {

        async.parallel([
                function(callback){
                        var db = req.db; 
                        var collection = db.collection('testing');
                        collection.find().toArray(function(err,result){
                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("We've got results!");}
                        callback(null,result);
                        });
                },
                function(callback){
                        var db = req.db; 
                        var collection = db.collection('tablespacessco');
                        collection.find().sort({timestamp:-1}).limit(1).toArray(function(err,result){

                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("We've got a table!");}
                                else {console.log("no se encontro nada");}
                        callback(null,result);
                        });
                }


        ],


       function(err,results){
                if (err){
                        console.log(err);
                        return res.send(400);
                }
                data1 = results[0][0]
                scotable = results[1][0]["data"]
		
		console.log(data1)
		console.log(scotable)
                res.render('newdashboard',
                        {
                                data1:data1,
                                data2:scotable
                        }
                )
       	//end function results
	}
	//end async
	);
});
module.exports = router;

