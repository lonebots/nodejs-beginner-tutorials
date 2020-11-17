var fs = require('fs');

//asynchronous way
fs.unlink('write1.txt', (err) => {
    console.log('file deleted successfully!!');
});