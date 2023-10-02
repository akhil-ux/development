var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencode({ extended: false })
app.get('/form.html', function (req, res) {
    res.sendFile(_dirname + "/" + "form.html");
})
app.post('/process_post', urlencodedParser, function (req, res) {
    res.send("<h1>Hello,  " + req.body.first_name + "    " + req.body.last_name + "</h1>");
    res.end();
})
app.listen(8080, function () { })
