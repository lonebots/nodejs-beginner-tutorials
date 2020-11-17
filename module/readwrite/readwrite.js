//importing fs - file system moduel
var fs = require('fs')

//reading file readme.txt in the same directory
//first parameter - file name
//second parameter -character encoding eg:- utf8
//this is a syncronous operation
var readfile = fs.readFileSync('readme.txt', 'utf8');

//console log the output
//syncronous file wrting
fs.writeFileSync('writeme.txt', readfile);
console.log('written the file content');