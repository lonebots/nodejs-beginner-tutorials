var http = require('http')
var fs = require('fs')

//create a read and witestream
rStream = fs.createReadStream(__dirname + '/readme.txt');
wStream = fs.createWriteStream(__dirname + '/writeme_pipe.txt', 'utf8');

//piping
rStream.pipe(wStream);