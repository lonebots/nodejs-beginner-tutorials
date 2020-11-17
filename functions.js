// 1 normal function statements
function hello() {
    console.log("you are greeted with hello function!");
}

hello();

// 2 function expression

var sayHi = () => {
    console.log('hi from sayHi')
}
sayHi();

// 3 passing of functions inside function
function functionCaller(func) {
    func();
}
var caleeFunction = () => {
    console.log('greetings from nested function!');
}

functionCaller(caleeFunction);//calling the nested function