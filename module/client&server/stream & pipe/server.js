//server client 
//protocols
//http ftp tcp

//http module 
var http = require("http")
//create a new server
//server takes in a request and response function
//headaer -extra info about the page or html 
var server = http.createServer((req, res) => {
    //console loging the request method 
    console.log('request was made by' + req.url)

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hey you!');

});

server.listen(3000, '127.0.0.1')//local host ip and port
console.log('now listening to port 3000')