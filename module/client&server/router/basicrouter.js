//setting router -basics
var http = require('http')
var fs = require('fs')

//seting up a server 
server = http.createServer((req, res) => {
    console.log('request is made by :' + req.url);
    console.log('listening to port : 3000')
    //we should check the request url
    //thripple equal to sign is used for comparison
    if (req.url === '/home' || req.url == '/') {
        res.writeHead(200, { 'Content-type': 'html' });
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }

    //adding some more routes
    else if (req.url === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'html'
        });
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
    }
})

server.listen(3000, '127.0.0.1');
console.log('resquest served!!hurray!');