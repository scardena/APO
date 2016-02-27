var express = require('express');
var router = express.Router();
var async = require('async');



router.get('/ngas', function(req,res)
    {
	console.log("llego aca? LA IMPORTANTE")
	console.log(req)
	async.parallel([
		function(callback){
			var db = req.db;
			var collection = db.collection('monitoring');
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


            	var response = 
		{
			"scoused":   data1[0]["usedsize"],"scototal":data1[0]["totsize"],
			"osfBEused": data2[0]["usedsize"],"osfBEtotal":data2[0]["totsize"],
			"osfFEused": data3[0]["usedsize"],"osfFEtotal":data3[0]["totsize"],
			scoplot:temp,
			"osffetable":data5[0]["data"],
			"osfbetable":data6[0]["data"],
			"scotable":data7[0]["data"]
		}
		console.log("MY RESPONSE")
		console.log(response)
		res.json("hola");
	});
});




module.exports = router;
