var http = require('http');
var fs = require('fs');

//server
var server = http.createServer((req, res) => {
    console.log('request was made :' + req.url);
    res.writeHead(200, { 'Content-Type': 'application/json' });

    //declaring json obj
    var passObj = {
        name: 'Tony Stark',
        aka: 'Iron man',
        job: 'Inventor',
        age: '45'
    }

    //not using stream instead using the res.end()
    res.end(JSON.stringify(passObj));//passing json obj

})
//port
server.listen(3000, '127.0.0.1');
console.log('listening to port : 3000');