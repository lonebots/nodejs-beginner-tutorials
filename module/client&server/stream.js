//creating a custom readable stream
//using a readme.txt file with random contcnt

var http = require('http')

var fs = require('fs')

var readStream = fs.createReadStream(__dirname + '/readme.txt');
//reading through stream using the buffer bit by bit
//passing on data as chunks and not all ath the same
//make to recognize a chunk of data

//now set up a listener
readStream.on('data', (chunk) => {
    console.log('new chunk recived');
    console.log(chunk);
})
