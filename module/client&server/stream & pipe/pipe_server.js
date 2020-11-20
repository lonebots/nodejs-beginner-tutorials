var http = require('http')
var fs = require('fs')
var server = http.createServer((req, res) => {
    console.log('request was made by' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    rStream = fs.ReadStream(__dirname + '/readme.txt');
    //we don't need a write stream since we have the response

    //piping the result
    rStream.pipe(res);



    //the response object 'res' is in itself a writable stream
});

//don't forget to make the server to listen to the port 
//this enables local hosting!
server.listen(3000, '127.0.0.1');
console.log("listening to port : 3000");