var fs = require('fs')

//asynchronous file reading has 3 paranmeters
//3rd parameter is a call back function that takes in  (error , data that is read)
fs.readFile('readme.txt', 'utf8',
    (err, data) => {
        console.log(data);
        console.log('hi now this is writing to file');
        //this asynchronous method is also available incase of writing a file
        //it also contains the callback function.
        fs.writeFile('write1.txt', data, (err) => {
            console.log('writing complete');
        });
    })

//this will be called first since the reading is asynchronous 
//the call back function in read will be triggered only when it completes
//reading the entire file and by then it will log the below message to con
console.log('wow its reading!!!!!!');