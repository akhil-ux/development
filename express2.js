var express = require('express');
var app =express();

app.get('/',function (req, res){
	res.send('Hello GEt');
})

app.post('/' , function(req, res) {
	res.send('Hello Pos');
})

app.delete('/del_user' , function(req, res){
	res.send('Hello Delete');
})

app.get('/list_user', function(req, res) {
res.send('Page Listing');
})

app.get('/ab*cd', function(req, res) {
	res.send('Page Pattern Match');
})

var server = app.listen(8080, function () {})