//creating a writable stream
var http = require('http')
var fs = require('fs')

//readable data stream 
readStream = fs.createReadStream(__dirname + '/readme.txt');

//write stream variable
writeStream = fs.createWriteStream(__dirname + '/writeme.txt', 'utf8');

readStream.on('data', (chunk) => { //firing a function when the chunk buffer is full and ready to sent
    console.log('data recieved');
    console.log(chunk);
    writeStream.write(chunk);
});


