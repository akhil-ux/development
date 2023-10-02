var express = require('express');
var app = express();
app.get('/form.htm',function (req, res) {
	res.sendFile(__dirname +"/form.html");
})

app.get('/process_get', function (req, res) {
	res.send("<h1>"+ req.query.first_name+" "+req.query.last_name+"</h1>");
res.end();
})

var server = app.listen(8080, function () {} )