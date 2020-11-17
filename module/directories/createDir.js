//creating directory using fs module

var fs = require('fs');

//creating a directory named Nodetest synchronously
fs.mkdirSync('NodeDirTestSync');

//creating directory in the asynchronous method
fs.mkdir('NodeDirTestAsync', () => {
    console.log('asynchronous directory created!');
})