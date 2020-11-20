var http = require('http')
var fs = require('fs')
var server = http.createServer((req, res) => {
    console.log('request sent to' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var rStream = fs.createReadStream(__dirname + '/sample.html', 'utf8');
    rStream.pipe(res);

    //

});

//server port and listening
server.listen(3000, '127.0.0.1');