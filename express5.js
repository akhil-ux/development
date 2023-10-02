var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/cookieset', function (req, res) {
    res.cookie('cookie_name', 'cookie-value');
    res.cookie('company', 'PSIT');
    res.cookie('name', 'CS-AI-AIML');
    res.send('<h1>Cookie is set</h1>');

});
app.get('/cookieget', function (req, res) {
    res.send(req.cookies);
});
app.get('/', function (req, res) {
    res.send('<h1>Welcome</h1>');
});
var server = app.listen(8080, function () { });
