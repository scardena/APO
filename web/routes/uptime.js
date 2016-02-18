var express = require('express');
var router = express.Router();

router.get('/os', function(req, res) {
	var data = [
				{y: '2011 Q1', item1: 2666},
				{y: '2011 Q2', item1: 2778},
				{y: '2011 Q3', item1: 4912},
				{y: '2011 Q4', item1: 3767},
				{y: '2012 Q1', item1: 6810},
				{y: '2012 Q2', item1: 5670},
				{y: '2012 Q3', item1: 4820},
				{y: '2012 Q4', item1: 15073},
				{y: '2013 Q1', item1: 10687},
				{y: '2013 Q2', item1: 8432}
    ]
    console.log(data);
    //aca paso los datos			
    res.render('uptime/os', {data: data});
});


router.get('/network', function(req, res) {
    res.render('uptime/network');
});


router.get('/ngas', function(req, res) {
    res.render('uptime/ngas');
});


router.get('/db', function(req, res) {
    res.render('uptime/db');
});

module.exports = router;
