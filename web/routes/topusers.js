var express = require('express');
var mongodb = require('mongodb');
var async = require('async');
var router = express.Router();

var request = require('request');

router.get('/', function(req, res) {
	
	//removing passwords
	var pingESOarcdb2 = {

		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=someUser&password=somePass&id=4703',
		"rejectUnauthorized": false,
	}


	var pingESOora04 = {
		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=someUser&password=somePass&id=4705',
		"rejectUnauthorized": false,
	}

	var pingNAOJ = {
		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=someUser&password=somePass&id=4710',
		"rejectUnauthorized": false,
	}

	var pingNRAO = {
		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=someUser&password=somePass&id=4712',
		"rejectUnauthorized": false,
	}


	var bandwidth = {
		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=someUser&password=somePass&id=5945',
		"rejectUnauthorized": false,
	}



	request(pingESOarcdb2,function(error,response,body)
		{	
			if (error)
			{
				console.log(error)
				return
			}
		var obj = JSON.parse(body)
		console.log("ping ESO arcdb2")
		console.log(obj["sensordata"]["lastvalue"])
	});



	request(pingESOora04,function(error,response,body)
		{	
			if (error)
			{
				console.log(error)
				return
			}
		var obj = JSON.parse(body)
		console.log("ping ESO ora04")
		console.log(obj["sensordata"]["lastvalue"])
	});
	
	request(pingNAOJ,function(error,response,body)
		{	
			if (error)
			{
				console.log(error)
				return
			}
		var obj = JSON.parse(body)
		console.log("ping NAOJ")
		console.log(obj["sensordata"]["lastvalue"])
	});
	
	request(pingNRAO,function(error,response,body)
		{	
			if (error)
			{
				console.log(error)
				return
			}
		var obj = JSON.parse(body)
		console.log("ping NRAO")
		console.log(obj["sensordata"]["lastvalue"])
	});
	
	
	request(bandwidth,function(error,response,body)
		{	
			if (error)
			{
				console.log(error)
				return
			}
		var obj = JSON.parse(body)
		console.log(obj)
	});
	





	
	res.render('topusers')


});



module.exports = router;
