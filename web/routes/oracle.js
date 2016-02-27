var express = require('express');
var mongodb = require('mongodb');
var async = require('async');
var router = express.Router();


router.get('/', function(req, res) {

	async.parallel([
		function(callback){
			var db = req.db;
    			var collection = db.collection('tablespacessco');
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
			var db = req.db;
    			var collection = db.collection('tablespacesosf');
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
			var db = req.db;
    			var collection = db.collection('monitoring');
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
			var db = req.db;
    			var collection = db.collection('monitoring');
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
			var db = req.db;
    			var collection = db.collection('oraclestatus');
    			collection.find({}).sort({timestamp:-1}).limit(10).toArray(function(err,result){

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
			var db = req.db;
    			var collection = db.collection('monitoring');
    			collection.find({servicename:"tablespacessize",station:"sco"}).sort({timestamp:-1}).limit(1).toArray(function(err,result){

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
			var db = req.db;
    			var collection = db.collection('monitoring');
    			collection.find({servicename:"tablespacessize",station:"osf"}).sort({timestamp:-1}).limit(1).toArray(function(err,result){

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
			var db = req.db;
    			var collection = db.collection('asmsco');
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
			var db = req.db;
    			var collection = db.collection('asmosf');
    			collection.find().sort({timestamp:-1}).limit(1).toArray(function(err,result){

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
		//tablespaces SCO
		data1 = results[0][0]["data"]
		//tablespaces OSF
		data2 = results[1][0]["data"]

		//oracle status OSF	
		data3 = results[2]
		//oracle status SCO
		data4 = results[3]

		//oracle info table
		data5 = results[4]

		//osf db size
		data6 = results[5]

		//sco db size
		data7 = results[6]
		
		//ASM SCO table
		data8 = results[7]
		//ASM OSF table
		data9 = results[8]


		console.log(data8)
		console.log(data9)
    		res.render('oracle',{
			"tablespacessco": data1,
			"tablespacesosf": data2,
			"osfstatus":data3[0]["status"],
			"scostatus":data4[0]["status"],
			oracleinfo:data5,
			usedsizesco:data6[0]["used"],
			totalsizesco:data6[0]["total"],
			usedsizeosf:data7[0]["used"],
			totalsizeosf:data7[0]["total"],
			asmsco:data8[0]["data"],
			asmosf:data9[0]["data"]
			
		});
 	
	});


});




module.exports = router;
