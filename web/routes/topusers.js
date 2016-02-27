var express = require('express');
var mongodb = require('mongodb');
var async = require('async');


var router = express.Router();
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/test'

var dbObject;

MongoClient.connect(url,function(err,db)
    {
        if (err) {console.log("unable to connecto to mongodb,error",err);}
        else {console.log("connection stablished");}
        dbObject = db;
});


router.get('/ngas', function(req,res)
    {
	async.parallel([
		function(callback){
			var collection = dbObject.collection('monitoring');
			collection.find({servicename:"ngasSpace",ngascluster:"sco"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
			{
				if (err){console.log(err);}
				else if (result.length){console.log("Hay resultados");}
				else {console.log("no se encontro nada");}
				callback(null,result);		
			});
		},
		function(callback){
			var collection = dbObject.collection('monitoring');
			collection.find({servicename:"ngasSpace",ngascluster:"osfBE"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
			{
				if (err){console.log(err);}
				else if (result.length){console.log("Hay resultados");}
				else {console.log("no se encontro nada");}
				callback(null,result);		
			});
		},
		function(callback){
			var collection = dbObject.collection('monitoring');
			collection.find({servicename:"ngasSpace",ngascluster:"osfFE"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
			{
				if (err){console.log(err);}
				else if (result.length){console.log("Hay resultados");}
				else {console.log("no se encontro nada");}
				callback(null,result);		
			});
		},
		function(callback){
			var collection = dbObject.collection('monitoring');
			collection.find({servicename:"ngasSpace",ngascluster:"sco"}).limit(10).sort({timestamp:-1}).toArray(function(err,result)
			{
				if (err){console.log(err);}
				else if (result.length){console.log("Hay resultados");}
				else {console.log("no se encontro nada");}
				callback(null,result);		
			});
		},
		function(callback){
			var collection = dbObject.collection('ngaspartitionsosffe');
			collection.find().sort({timestamp:-1}).limit(1).toArray(function(err,result)
			{
				if (err){console.log(err);}
				else if (result.length){console.log("Hay resultados");}
				else {console.log("no se encontro nada");}
				callback(null,result);		
			});
		},
		function(callback){
			var collection = dbObject.collection('ngaspartitionsosfbe');
			collection.find().sort({timestamp:-1}).limit(1).toArray(function(err,result)
			{
				if (err){console.log(err);}
				else if (result.length){console.log("Hay resultados");}
				else {console.log("no se encontro nada");}
				callback(null,result);		
			});
		},
		function(callback){
			var collection = dbObject.collection('ngaspartitionssco');
			collection.find().sort({timestamp:-1}).limit(1).toArray(function(err,result)
			{
				if (err){console.log(err);}
				else if (result.length){console.log("Hay resultados");}
				else {console.log("no se encontro nada");}
				callback(null,result);		
			});
		}





	],

	function(err,results)
	{
		if (err)
		{
			console.log(err);
			return res.send(400);
		}
		data1 = results[0]
		data2 = results[1]
		data3 = results[2]
		data4 = results[3]
		data5 = results[4]
		data6 = results[5]
		data7 = results[6]
		console.log(data4)

		var temp = []

                for (index in data4)
                {
                    var results = data4[index];
                    var timestamp = results["timestamp"];
                    var value = results["usedsize"];
                    temp.push({y:index, item1:value});
                }
		console.log(temp)


            	res.render('scripts/ngas', {
			"scoused":   data1[0]["usedsize"],"scototal":data1[0]["totsize"],
			"osfBEused": data2[0]["usedsize"],"osfBEtotal":data2[0]["totsize"],
			"osfFEused": data3[0]["usedsize"],"osfFEtotal":data3[0]["totsize"],
			scoplot:temp,
			"osffetable":data5[0]["data"],
			"osfbetable":data6[0]["data"],
			"scotable":data7[0]["data"]
		});
	});
});



router.get('/oracle', function(req, res) {

	async.parallel([
		function(callback){
    			var collection = dbObject.collection('tablespacessco');
    			collection.find().sort({timestamp:-1}).limit(1).toArray(function(err,result){

				if (err){
					console.log(err);
					callback(err);
				}
				else if (result.length){console.log("Hay tabla");}
			callback(null,result);
			});
		},
		function(callback){
    			var collection = dbObject.collection('tablespacesosf');
    			collection.find().sort({timestamp:-1}).limit(1).toArray(function(err,result){

				if (err){
					console.log(err);
					callback(err);
				}
				else if (result.length){console.log("Hay tabla");}
				else {console.log("no se encontro nada");}
			callback(null,result);
			});
		},

		function(callback){
    			var collection = dbObject.collection('monitoring');
    			collection.find({servicename:"oracleStatus",server:"osf"}).sort({timestamp:-1}).limit(1).toArray(function(err,result){

				if (err){
					console.log(err);
					callback(err);
				}
				else if (result.length){console.log("Hay tabla");}
				else {console.log("no se encontro nada");}
			callback(null,result);
			});
		},

		function(callback){
    			var collection = dbObject.collection('monitoring');
    			collection.find({servicename:"oracleStatus",server:"sco"}).sort({timestamp:-1}).limit(1).toArray(function(err,result){

				if (err){
					console.log(err);
					callback(err);
				}
				else if (result.length){console.log("Hay tabla");}
				else {console.log("no se encontro nada");}
			callback(null,result);
			});
		},

		function(callback){
    			var collection = dbObject.collection('oraclestatus');
    			collection.find({}).sort({timestamp:-1}).limit(10).toArray(function(err,result){

				if (err){
					console.log(err);
					callback(err);
				}
				else if (result.length){console.log("Hay tabla");}
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
		data1 = results[0][0]["data"]
		data2 = results[1][0]["data"]
		data3 = results[2]
		data4 = results[3]
		data5 = results[4]
 		console.log(data3[0]["status"])
    		res.render('scripts/oracle',{"userlist": data1,"userlist2": data2,"osfstatus":data3[0]["status"],"scostatus":data4[0]["status"],data5:data5});
 	
	});


});



router.get('/topusers', function(req, res) {

    res.render('scripts/topusers');
});


router.get('/casaops', function(req, res) {

    res.render('scripts/casaops');
});



router.get('/charts', function(req,res){


	async.parallel([
		//last 30 items are recovered
                function(callback){
                        var collection = dbObject.collection('datasize');
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
                        var collection = dbObject.collection('datasize365');
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
                        var collection = dbObject.collection('asdms');
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
                        var collection = dbObject.collection('asdms365');
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
                        var collection = dbObject.collection('ingestionsco');
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
                        var collection = dbObject.collection('ingestionosf');
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
			
			console.log(res5)	


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
	
                res.render('scripts/charts',{data1:data1,data2:data2,data3:data3,data4:data4,"res5":res5,"res6":res6});

        });



})


router.get('/filesInFENotInBE', function(req,res)
    {

        var collection = dbObject.collection('monitoring');
        collection.find({servicename:"fileInFENotInBE"}).limit(40).toArray(function(err,result)
            {
                if (err){console.log(err);}
                else if (result.length){console.log("Hay resultados");}
                else {console.log("no se encontro nada");}
                var timestampArray = [];
                var valueArray = [];
                var data = [];
		console.log(result)
                for (index in result)
                {
		    console.log(index)
                    var results = result[index];
                    var timestamp = results["timestamp"];
                    var value = results["pendingfiles"];
                    data.push({y:index, item1:value});
                }

            //console.log(results);           
            console.log(data); 
            res.render('scripts/filesInFENotInBE', {data: data});


            });


});



module.exports = router;
