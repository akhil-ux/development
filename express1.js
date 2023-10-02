var express = require('express');
var app =express();

app.get('/', function(req,res){
res.send('<h1>Hello World from Express1.js file</h1>');
})
app.get('/winter',function(req,res){
res.send('<h1>Hello World</h1>');
})
var server =app.listen(8080,function () {
//var host=server.address().address;
//var port = server.address().port;
//console.log("example app listening at http://%s:%s",host,port);
});