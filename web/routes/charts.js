var express = require('express');
var mongodb = require('mongodb');
var async = require('async');
var router = express.Router();


router.get('/', function(req,res){


	async.parallel([
		//last 30 items are recovered
                function(callback){
			var db = req.db;
                        var collection = db.collection('datasize');
                        collection.find().sort({date:-1}).limit(30).toArray(function(err,result){

                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("Hay tabla");}
                        callback(null,result);
                        });
                },


                function(callback){
			var db = req.db;
                        var collection = db.collection('datasize365');
                        collection.find().sort({date:-1}).limit(30).toArray(function(err,result){

                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("Hay tabla");}
                        callback(null,result);
                        });
                },

                function(callback){
			var db = req.db;
                        var collection = db.collection('asdms');
                        collection.find().sort({date:-1}).limit(30).toArray(function(err,result){

                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("Hay tabla");}
                        callback(null,result);
                        });
                },


                function(callback){
			var db = req.db;
                        var collection = db.collection('asdms365');
                        collection.find().sort({date:-1}).limit(30).toArray(function(err,result){

                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("Hay tabla");}
                        callback(null,result);
                        });
                },

                function(callback){
			var db = req.db;
                        var collection = db.collection('ingestionsco');
                        collection.find().sort({date:-1}).limit(30).toArray(function(err,result){

                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("Hay tabla");}
                        callback(null,result);
                        });
                },


                function(callback){
			var db = req.db;
                        var collection = db.collection('ingestionosf');
                        collection.find().sort({date:-1}).limit(30).toArray(function(err,result){

                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("Hay tabla");}
                        callback(null,result);
                        });
                }



	],


 	function(err,results){
                if (err){
                        console.log(err);
                        return res.send(400);
                }
			res1 = results[0]	
			res2 = results[1]
			res3 = results[2]
			res4 = results[3]
			res5 = results[4]
			res6 = results[5]
			var data1 = [];
			var data2 = [];
			var data3 = [];
			var data4 = [];
			
			console.log(res1)	


			//looping the result array in reversed order, so the last 30 items will be passed to jade. same for all charts.
			for (var i = res1.length-1;i>=0;i--)
			{
			    var formatedResult = res1[i];
			    var date = formatedResult["date"];
			    var tar= formatedResult["tar"];
			    var science = formatedResult["science"]
			    //var date = results[0]["date"];
			    //var tar= results[0]["tar"];
			    //var science = results[0]["science"];
			    data1.push({x:date, ytar:tar,yscience:science});
			}

			for (var i = res2.length-1;i>=0;i--)
			{
			    var formatedResult = res2[i];
			    var date = formatedResult["date"];
			    var tar= formatedResult["tar"];
			    var science = formatedResult["science"]
			    //var date = results[0]["date"];
			    //var tar= results[0]["tar"];
			    //var science = results[0]["science"];
			    data2.push({x:date, ytar:tar,yscience:science});
			}



			for (var i = res3.length-1;i>=0;i--)
			{
			    var formatedResult = res3[i];
			    var date = formatedResult["date"];
			    var csv= formatedResult["csv"];
			    var science = formatedResult["science"]
			    //var date = results[0]["date"];
			    //var tar= results[0]["tar"];
			    //var science = results[0]["science"];
			    data3.push({x:date, ycsv:csv,yscience:science});
			}
	

			for (var i = res4.length-1;i>=0;i--)
			{
			    var formatedResult = res4[i];
			    var date = formatedResult["date"];
			    var csv= formatedResult["csv"];
			    var science = formatedResult["science"]
			    //var date = results[0]["date"];
			    //var tar= results[0]["tar"];
			    //var science = results[0]["science"];
			    data4.push({x:date, ycsv:csv,yscience:science});
			}

			console.log(data1)
	
                res.render('charts',{data1:data1,data2:data2,data3:data3,data4:data4,"res5":res5,"res6":res6});

        });



})




module.exports = router;
