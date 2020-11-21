//using the express package in node
//familiarising the node package manager (npm)
//setting package.json file with - npm init -> answer the simple querries
//21 installing the nodemon -monitor the application file -automatic restart of the server whenever there is a change.

var http = require('http');
var fs = require('fs');

//server
var server = http.createServer((req, res) => {
    console.log('request form :' + req.url);
})