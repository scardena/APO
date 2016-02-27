var express = require('express');
var router = express.Router();
var async = require('async');
var mongodb = require('mongodb')



/* GET home page. */
router.get('/', function(req, res) 
{
	async.parallel([



	////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////Data Ingested (ASDMs and data)/////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////
  	function(callback){
                        var db = req.db;
                        var collection = db.collection('datasize');
                        collection.find().sort({date:-1}).limit(15).toArray(function(err,result){

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
                        collection.find().sort({date:-1}).limit(15).toArray(function(err,result){

                                if (err){
                                        console.log(err);
                                        callback(err);
                                }
                                else if (result.length){console.log("Hay tabla");}
                        callback(null,result);
                        });
                },


	///////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////Oracle Data (asms and xmlstore)///////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////
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
                },


		////////////////////////////////////////////////////////////////////////////
		/////////////////////////NGAS space, SCO, OSFBE, OSFFE/////////////////////
		//////////////////////////////////////////////////////////////////////////
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
                        var db = req.db;
                        var collection = db.collection('monitoring');
                        collection.find({servicename:"ngasSpace",ngascluster:"osfBE"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
                        {
                                if (err){console.log(err);}
                                else if (result.length){console.log("Hay resultados");}
                                else {console.log("no se encontro nada");}
                                callback(null,result);
                        });
                },
                function(callback){
                        var db = req.db;
                        var collection = db.collection('monitoring');
                        collection.find({servicename:"ngasSpace",ngascluster:"osfFE"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
                        {
                                if (err){console.log(err);}
                                else if (result.length){console.log("Hay resultados");}
                                else {console.log("no se encontro nada");}
                                callback(null,result);
                        });
                },


		///////////////////////////////////////////////////////////////////////////////////////////////////////
		///////////////////////Duplicated, zero bytes, archivesize, files not in FE, Boxes/////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////
                function(callback){
                        var db = req.db;
                        var collection = db.collection('monitoring');
                        collection.find({servicename:"ArchiveSize"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
                        {
                                if (err){console.log(err);}
                                else if (result.length){console.log("Hay resultados");}
                                else {console.log("no se encontro nada");}
                                callback(null,result);
                        });
                },

		

                function(callback){
                        var db = req.db;
                        var collection = db.collection('monitoring');
                        collection.find({servicename:"duplicatefiles"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
                        {
                                if (err){console.log(err);}
                                else if (result.length){console.log("Hay resultados");}
                                else {console.log("no se encontro nada");}
                                callback(null,result);
                        });
                },

	

                function(callback){
                        var db = req.db;
                        var collection = db.collection('monitoring');
                        collection.find({servicename:"fileInFENotInBE"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
                        {
                                if (err){console.log(err);}
                                else if (result.length){console.log("Hay resultados");}
                                else {console.log("no se encontro nada");}
                                callback(null,result);
                        });
                },

	
                function(callback){
                        var db = req.db;
                        var collection = db.collection('monitoring');
                        collection.find({servicename:"zerobytes"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
                        {
                                if (err){console.log(err);}
                                else if (result.length){console.log("Hay resultados");}
                                else {console.log("no se encontro nada");}
                                callback(null,result);
                        });
                },









		],


		//start dealing with responses from db
		function(err,results)
		{
			if (err){console.log(err); return res.send(400);}

			///////////////////////////////////////////////
			//Here I assing the results to data variables//
			///////////////////////////////////////////////
			
			//charts data ingested
			data1 = results[0]
			data2 = results[1]

			//oracle ASM groups
			data3 = results[2]
			data4 = results[3]

			//ngas space 
			data5 = results[4]
			data6 = results[5]
			data7 = results[6]

			//files related variables
			data8 = results[7]
			data9 = results[8]
			data10 = results[9]
			data11 = results[10]

			


			///////////////////////////////////////
			//Here I deal with the data variables//
			///////////////////////////////////////
			
			
			//contains charts info - ingested data
			var chart1 = []
			var chart2 = []
			
			var graph1 = []
			var graph2 = []

			for (var i = data1.length-1;i>=0;i--)
			{
				var formatedResult = data1[i];
 				var date = formatedResult["date"];
                            	var tar= formatedResult["tar"];
                            	var science = formatedResult["science"]
	                        chart1.push({x:date, ytar:tar,yscience:science});

			}  
	
			for (var i = data2.length-1;i>=0;i--)
			{
				var formatedResult = data2[i];
 				var date = formatedResult["date"];
                            	var csv= formatedResult["csv"];
                            	var science = formatedResult["science"]
	                        chart2.push({x:date, ycsv:csv,yscience:science});

			}  
		

			var scoasm = data3[0]["data"]
			
			for (index in scoasm)
			{
				var record = scoasm[index];
				if (record["name"] == "GROUP6")
				{
					var group6scototal = record["total"]
					var group6scofree = record["free"]
				}
				if (record["name"] == "GROUP3")
				{
					var group3scototal = record["total"]
					var group3scofree = record["free"]
				}
			}

	
			var osfasm = data4[0]["data"]
			for (index in osfasm)
			{
				var record = osfasm[index];
				if (record["name"] == "GROUP6")
				{
					var group6osftotal = record["total"]
					var group6osffree = record["free"]
				}
				if (record["name"] == "GROUP3")
				{
					var group3osftotal = record["total"]
					var group3osffree = record["free"]
				}
			}
		


			console.log(data8[0]["ArchiveSize"])
			console.log(data9[0]["pendingfile"])
			console.log(data10[0]["pendingfiles"])
			console.log(data11[0]["zerobytes"])
	


			res.render('index',{
				chart1:chart1,
				chart2:chart2,
				"group3scofree":group3scofree,"group3scototal":group3scototal,
				"group6scofree":group6scofree,"group6scototal":group6scototal,
				"group3osffree":group3osffree,"group3osftotal":group3osftotal,
				"group6osffree":group6osffree,"group6osftotal":group6osftotal,
				"scoused": data5[0]["usedsize"],"scototal":data5[0]["totsize"],
  				"osfBEused": data6[0]["usedsize"],"osfBEtotal":data6[0]["totsize"],
                        	"osfFEused": data7[0]["usedsize"],"osfFEtotal":data7[0]["totsize"],
				"archivesize": data8[0]["ArchiveSize"],
				"duplicatefiles": data9[0]["pendingfile"],
				"fileinfenotinbe": data10[0]["pendingfiles"],
				"zerobytes": data11[0]["zerobytes"]
			});	

		//end function(err,results)
		}
	//end async
	);


});
router.get('/:page.html', function(req, res) {
    	
	res.render(req.param('page'));
});


router.get('/:dir/:page.html', function(req, res) {
    	
	res.render(req.param('dir')+'/'+req.param('page'));//.replace(".html", ""));
});
module.exports = router;
