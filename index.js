var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.send('我是首页');
});

app.listen(3000, function() {
	console.log('server starts at 3000');
});