var express = require('express');
var router = express.Router();
var async = require('async');
var mongodb = require('mongodb');
var http = require('http');


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




		///////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////Backlog Info/////////////////////////7/////////////////////
		///////////////////////////////////////////////////////////////////////////////////////////////////////
                function(callback){
                        var db = req.db;
                        var collection = db.collection('monitoring');
                        collection.find({servicename:"backlogNA"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
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
                        collection.find({servicename:"backlogEU"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
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
                        collection.find({servicename:"backlogEA"}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
                        {
                                if (err){console.log(err);}
                                else if (result.length){console.log("Hay resultados");}
                                else {console.log("no se encontro nada");}
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


	
                function(callback){
                        var db = req.db;
                        var collection = db.collection('tablespacessco');
                        collection.find({},{data:{$elemMatch:{name:"XMLSTORE"}}}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
                        {
                                if (err){console.log(err);}
                                else if (result.length){console.log("Hay resultados");}
                                else {console.log("no se encontro nada");}
                                callback(null,result);
                        });
                },

	
                function(callback){
                        var db = req.db;
                        var collection = db.collection('tablespacesosf');
                        collection.find({},{data:{$elemMatch:{name:"XMLSTORE"}}}).sort({timestamp:-1}).limit(1).toArray(function(err,result)
                        {
                                if (err){console.log(err);}
                                else if (result.length){console.log("Hay resultados");}
                                else {console.log("no se encontro nada");}
                                callback(null,result);
                        });
                }












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

			//backlog info
			data3 = results[2]
			data4 = results[3]
			data5 = results[4]
			
			//oracle ASM groups
			data6 = results[5]
			data7 = results[6]

			//ngas space 
			data8 = results[7]
			data9 = results[8]
			data10 = results[9]

			//files related variables
			data11 = results[10]
			data12 = results[11]
			data13 = results[12]
			data14 = results[13]

			
			//XMLSTORE info
			data15 = results[14]
			data16 = results[15]

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
		
		


			var scoasm = data6[0]["data"]
			
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

	
			var osfasm = data7[0]["data"]
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
	


			var xmlscoused = (Number(data15[0]["data"][0]["mbused"])/1024).toFixed(2)
			var xmlscofree = (Number(data15[0]["data"][0]["mbfree"])/1024).toFixed(2)
			var xmlsconotall = (Number(data15[0]["data"][0]["mbnotall"])/1024).toFixed(2)
			var xmlscototal = (Number(data15[0]["data"][0]["mbtotal"])/1024).toFixed(2)
			var xmlscofull = (Number(xmlscototal)+ Number(xmlsconotall)).toFixed(2)
			//contains not allocated space
			var xmlscofreefull = (Number(xmlscofree) + Number(xmlsconotall)).toFixed(2)



			var xmlosfused = (Number(data16[0]["data"][0]["mbused"])/1024).toFixed(2)
			var xmlosffree = (Number(data16[0]["data"][0]["mbfree"])/1024).toFixed(2)
			var xmlosfnotall = (Number(data16[0]["data"][0]["mbnotall"])/1024).toFixed(2)
			var xmlosftotal = (Number(data16[0]["data"][0]["mbtotal"])/1024).toFixed(2)
			var xmlosffull = Number(xmlosftotal) + Number(xmlosfnotall)
			//contains not allocated space

			var xmlosffreefull = (Number(xmlosffree) + Number(xmlosfnotall)).toFixed(2)

	
			console.log(xmlosfused)
			console.log(xmlosffree)
			console.log(xmlosfnotall)
			console.log(xmlosftotal)
			console.log(xmlosffull)
			console.log(xmlosffreefull)

	
			var xmlscostatus = "OK"
			if (xmlscofreefull < 32 && xmlscofreefull > 3 ) {xmlscostatus = "WARNING"}
			else if (xmlscofreefull <= 3) {xmlscostatus = "CRITICAL"}


	
			var xmlosfstatus = "OK"
			if (xmlosffreefull < 32 && xmlosffreefull > 3 ) {xmlosfstatus = "WARNING"}
			else if (xmlosffreefull <= 3) {xmlosfstatus = "CRITICAL"}





			res.render('index',{
				chart1:chart1,
				chart2:chart2,
				"group3scofree":group3scofree,"group3scototal":group3scototal,"scog3statusjs":"OK",
				"group6scofree":group6scofree,"group6scototal":group6scototal,"scog6statusjs":"OK",
				"group3osffree":group3osffree,"group3osftotal":group3osftotal,"osfg3statusjs":"OK",
				"group6osffree":group6osffree,"group6osftotal":group6osftotal,"osfg6statusjs":"OK",
				"backlogNA":data3[0]["pendingfile"],
				"statusNA":data3[0]["status"],
				"sizeNA":data3[0]["size"],
				"backlogEU":data4[0]["pendingfile"],
				"statusEU":data4[0]["status"],
				"sizeEU":data4[0]["size"],
				"backlogEA":data5[0]["pendingfile"],
				"statusEA":data5[0]["status"],
				"sizeEA":data5[0]["size"],
				"scoused": data8[0]["usedsize"],"scototal":data8[0]["totsize"],
  				"osfBEused": data9[0]["usedsize"],"osfBEtotal":data9[0]["totsize"],
                        	"osfFEused": data10[0]["usedsize"],"osfFEtotal":data10[0]["totsize"],
				"archivesize": data11[0]["ArchiveSize"],
				"duplicatefiles": data12[0]["pendingfile"],
				"fileinfenotinbe": data13[0]["pendingfiles"],
				"zerobytes": data14[0]["zerobytes"],
				"xmlscoused": xmlscoused,
				"xmlscofree": xmlscofreefull,
				"xmlscototal": xmlscofull,
				"xmlscostatus": xmlscostatus,
				"xmlosfused": xmlosfused,
				"xmlosftotal": xmlosffull,
				"xmlosffree": xmlosffreefull,
				"xmlosfstatus": xmlosfstatus
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
