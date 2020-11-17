//template strings are declared using backticks `

var adder = (a, b) => {
    return (`the sum of 2 numbers is ${a + b}`);
}

//exporting and declaring at the same time
module.exports.pi = 3.14;



//declaring some more var and functions
var two = 2;
var three = 3;
var subtractor = (a, b) => {
    return (`difference is ${a - b}`);
}
//exporting in litteral notation packets
module.exports = {
    two: two,
    three: three,
    subtractor: subtractor

}

//we can use the different
//properties of the exports object for exporting different functions
//or any other things
module.exports.adder = adder;