//creating directory using fs module

var fs = require('fs');

//removing the created directory synchrounously
fs.rmdirSync('NodeDirTestSync');


//creating a directory asynchronously
fs.rmdir('NodeDirTestAsync', () => {
    console.log('asynchronous directory deleted!');
});