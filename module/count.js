//we need to use module in the node js
//it makes it easy to maintain code that are saved as different modules
//var array = ['bheem', 'dolu', 'bholu', 'chutki', 'kaliya', 'Indhu'];

var counter = (arr) => {
    return ('there are ' + arr.length + ' elements in this array')
};

module.exports = counter;