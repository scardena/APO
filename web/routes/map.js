var express = require('express');
var mongodb = require('mongodb');
var async = require('async');
var router = express.Router();

var request = require('request');

router.get('/', function(req, res) 
{
		
	pingESOarcdb2 = {
		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=monarcs&password=a1maarcs&id=4703',
		"rejectUnauthorized": false,
	}


	pingESOora04 = {
		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=monarcs&password=a1maarcs&id=4705',
		"rejectUnauthorized": false,
	}

	pingNAOJ = {
		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=monarcs&password=a1maarcs&id=4710',
		"rejectUnauthorized": false,
	}

	pingNRAO = {
		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=monarcs&password=a1maarcs&id=4712',
		"rejectUnauthorized": false,
	}


	bandwidth = {
		url: 'https://prtg.alma.cl/api/getsensordetails.json?username=monarcs&password=a1maarcs&id=5945',
		"rejectUnauthorized": false,
	}

	


	async.parallel([

		function(callback){
			request(pingESOarcdb2,function(error,response,body)
				{	
					if (error)
					{
						console.log(error)
						return
					}
				var obj = JSON.parse(body)
				console.log("ping ESO arcdb2")
				var myping = obj["sensordata"]["lastvalue"]
				callback(null,myping)
			});
		},
		
		function(callback){
			request(pingESOora04,function(error,response,body)
				{	
					if (error)
					{
						console.log(error)
						return
					}
				var obj = JSON.parse(body)
				console.log("ping ESO ora04")
				var myping = obj["sensordata"]["lastvalue"]
				callback(null,myping)
			});

		},

		function(callback){
			request(pingNAOJ,function(error,response,body)
				{	
					if (error)
					{
						console.log(error)
						return
					}
				var obj = JSON.parse(body)
				console.log("ping NAOJ")
				var myping = obj["sensordata"]["lastvalue"]
				callback(null,myping)
			});
		},

		function(callback){
			request(pingNRAO,function(error,response,body)
				{	
					if (error)
					{
						console.log(error)
						return
					}
				var obj = JSON.parse(body)
				console.log("ping NRAO")
				
				var myping = obj["sensordata"]["lastvalue"]
				callback(null,myping)
			});
			

		},

		function(callback){	
			request(bandwidth,function(error,response,body)
				{	
					if (error)
					{
						console.log(error)
						return
					}
				var obj = JSON.parse(body)
				callback(null,obj)
			});

		}
	],

	function(err,results)
	{


		//blue,red
		var color = ["0098ef","f55b54"]
		//thinner,thicker
		var thickness = [10,20]
		//no-dashed,dashed
		var dashed = [0,1]


		pingesoarcdb2 = results[0].split(" ")[0]
		pingesoora04 = results[1].split(" ")[0]
		pingnaoj = results[2].split(" ")[0]
		pingnrao = results[3].split(" ")[0]

		if ((pingesoarcdb2 >= 1 && pingesoarcdb2 <= 500) && (pingesoora04 >=1 && pingesoora04 <= 500) )
		{
			var coloreso = color[0]
			var thicknesseso = thickness[0]
			var dashedeso = dashed[0]
		}
		else
		{
			var coloreso = color[1]
			var thicknesseso = thickness[1]
			var dashedeso = dashed[1]

		}


		/*
 		if (pingesoora04 >= 1 and pingesoora04 <= 500)
		{
			var coloresoora04 = color[0]
			var thicknessesoora04 = thickness[0]
			var dashedesoora04 = dashed[0]
		}
		else
		{
			var coloresoora04 = color[1]
			var thicknessesoora04 = thickness[1]
			var dashedesoora04 = dashed[1]

		}
		*/


		if (pingnaoj >= 1 && pingnaoj <= 500)
		{
			var colornaoj = color[0]
			var thicknessnaoj = thickness[0]
			var dashednaoj = dashed[0]
		}
		else
		{
			var colornaoj = color[1]
			var thicknessnaoj = thickness[1]
			var dashednaoj = dashed[1]

		}


		if (pingnrao >= 1 && pingnrao <= 500)
		{
			var colornrao = color[0]
			var thicknessnrao = thickness[0]
			var dashednrao = dashed[0]
		}
		else
		{
			var colornrao = color[1]
			var thicknessnrao = thickness[1]
			var dashednrao = dashed[1]

		}



		datachile = 
		{
			"chart": {
				"caption": "Chile Map",
				"subcaption": "Link State",
				"showCanvasBorder": "0",
				"bgImageAlpha": "100",
				"markerBgColor": "FF0000",
				"markerRadius": "10",
				"viewMode": "0",
				"theme": "zune",
				"showBevel": "0",
				"showLegend": "0",
				"showLabels": "0",
				"showMarkerLabels": "0",
				"useHoverColor": "0",
				"showMarkerToolTip": "1",
				"useSNameInToolTip": "1",
				"showToolTip": "1",
				"includeNameInLabels": "0"
			},

			"markers": {
				"items": [{
					"id": "sco",
					"shapeid": "hdo-shape",
					"x": "56.23",
					"y": "230.9",
					"label": "SCO",
					"tooltext": "Santiago Central Office",
					"labelpos": "top"
				}, {
					"id": "aos",
					"shapeid": "hdo-shape",
					"x": "96.23",
					"y": "85.9",
					"label": "AOS",
					"tooltext": "Array Operations Site",
					"labelpos": "bottom"
				}, {
					"id": "osf",
					"shapeid": "hdo-shape",
					"x": "74.23",
					"y": "85.9",
					"label": "OSF",
					"tooltext": "Operations Site Facility",
					"labelpos": "top"
				}
				],




				"connectors": [{

						"from": "aos",
						"to": "osf",
						"tooltext": "Ping to NiRAO:" + 123 + " msec",
						"dashed": "0",
						"showHoverEffect": "0",
						"thickness": "10",
						"color": "6baa01",
						"alpha": "80"
						//"hoverThickness": "10"
					}, {
						"from": "osf",
						"to": "sco",
						"tooltext": "Ping to NAOJ: " + 123 + " msec",
						"dashed": "0",
						"showHoverEffect": "0",
						"thickness": "10",
						"color": "6baa01",
						"alpha": "80"
					}

				],

				"shapes": [{
					"id": "hdo-shape",
					"type": "circle",
					"radius": "10",
					"fillcolor": "ffffff,6baa01",
					"fillAlpha": "100,40",
					"fillRatio": "10,50",
					"fillPattern": "RADIAL",
					"borderColor": "#666666",
					"borderThickness": "3",
					"borderAlpha": "80"
					}]
				}

			}
				





		dataarcs = 
		{
			"chart": {
				"caption": "ARCS Map",
				"subcaption": "Link State",
				"showCanvasBorder": "0",
				"bgImageAlpha": "100",
				"markerBgColor": "FF0000",
				"markerRadius": "10",
				"viewMode": "0",
				"theme": "zune",
				"showBevel": "0",
				"showLegend": "0",
				"showLabels": "0",
				"showMarkerLabels": "0",
				"useHoverColor": "0",
				"showMarkerToolTip": "1",
				"useSNameInToolTip": "1",
				"showToolTip": "1",
				"includeNameInLabels": "0"
			},

			"markers": {
				"items": [{
					"id": "eso",
					"shapeid": "hdo-shape",
					"x": "430.23",
					"y": "125.9",
					"label": "ESO",
					"tooltext": "European Southern Observatory",
					"labelpos": "top"
				}, {
					"id": "naoj",
					"shapeid": "hdo-shape",
					"x": "630.23",
					"y": "170.9",
					"label": "NAOJ",
					"tooltext": "National Astronomical Observatory of Japan",
					"labelpos": "bottom"
				}, {
					"id": "nrao",
					"shapeid": "hdo-shape",
					"x": "180.23",
					"y": "150.9",
					"label": "NRAO",
					"tooltext": "National Radio Astronomy Observatory",
					"labelpos": "top"
				}, {
					"strength": "3",
					"id": "sco",
					"shapeid": "hdo-shape",
					"x": "180.23",
					"y": "350.9",
					"label": "OSF",
					"tooltext": "Santiago Central Office",
					"labelpos": "top"
				}],




				"connectors": [{

						"from": "sco",
						"to": "nrao",
						"tooltext": "Ping to NRAO:" + pingnrao + " msec",
						"dashed": dashednrao,
						"showHoverEffect": "0",
						"thickness": thicknessnrao,
						"color": colornrao,
						"alpha": "80"
						//"hoverThickness": "10"
					}, {
						"from": "sco",
						"to": "naoj",
						"tooltext": "Ping to NAOJ: " + pingnaoj + " msec",
						"dashed": dashednaoj,
						"showHoverEffect": "0",
						"thickness": thicknessnaoj,
						"color": colornaoj,
						"alpha": "80"
					}, {
						"from": "sco",
						"to": "eso",
						"tooltext": "Ping to arcdb2.hq.eso.org: "+  pingesoarcdb2 +" msec"+"<br> Ping to ora04.hq.eso.org: " + pingesoora04 + " msec",
						"dashed": dashedeso,
						"thickness": thicknesseso,
						"color": coloreso,
						"alpha": "80",
						"showHoverEffect": "0"
					}

				],

				"shapes": [{
					"id": "hdo-shape",
					"type": "circle",
					"radius": "10",
					"fillcolor": "ffffff,6baa01",
					"fillAlpha": "100,40",
					"fillRatio": "10,50",
					"fillPattern": "RADIAL",
					"borderColor": "#666666",
					"borderThickness": "3",
					"borderAlpha": "80"
					}]
				}

			}
				


		res.render('map',{datachile:datachile,dataarcs:dataarcs})


	}); // ): closes async.parallel
	

});




module.exports = router;
