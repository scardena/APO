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
                },


   		function(callback){
                        var db = req.db;
                        var collection = db.collection('datasize');
                        collection.find().sort({date:-1}).limit(30).toArray(function(err,result){

                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("We've got data ingested!");}
                                else {console.log("No results");}
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
		dataingested = results[2]

		var chart1 = []

		console.log(dataingested)
		//handling the data comming from mongo
		for (var i = dataingested.length-1;i>=0;i--)
		{
			var formatedResult = dataingested[i];
			var date = formatedResult["date"];
			var tar= formatedResult["tar"];
			var science = formatedResult["science"]
			chart1.push({x:date, ytar:tar,yscience:science});

		}

	
		console.log(data1)
		console.log(scotable)
		console.log(chart1)
                res.render('newdashboard',
                        {
                                data1:data1,
                                data2:scotable,
				data3:chart1
                        }
                )
       	//end function results
	}
	//end async
	);
});
module.exports = router;

