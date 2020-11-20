var http = require('http')
var fs = require('fs')
var server = http.createServer((req, res) => {
    console.log('request sent to' + req.url);

    //

});

//server port and listening
server.listen(3000, '127.0.0.1');