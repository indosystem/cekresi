var express = require('express');
var app = express();
var Horseman = require('node-horseman');

app.get('/cekresi/:resi', function(req, res) {
	console.log(req.params.resi)
	var horseman = new Horseman();
	horseman
		.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0")
		.open('http://cekresi.com/?noresi='+req.params.resi)
		.waitForSelector('#results table')
		.evaluate(function() {
			return document.querySelector('#results').innerHTML;
		})
		.then(function(hasil){
		res.send(hasil)
    return horseman.close();
  });
})

app.listen(70);