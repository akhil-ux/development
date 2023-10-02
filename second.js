var http = require('http');
var mydate = require('./myfirstmodule');
http.createServer(function (req, res) {
    {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.write(mydate.myDateTime());
        res.write("\nHello World!");
        res.end();
    }).listen('8080');