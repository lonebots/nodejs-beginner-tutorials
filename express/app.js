//using the express package in node
//familiarising the node package manager (npm)
//setting package.json file with - npm init -> answer the simple querries
//21 installing the nodemon -monitor the application file -automatic restart of the server whenever there is a change.


//features of express
//1. flexible routing system
//2. templating engine support
//3. middlewares

//import express
var express = require('express');


//app to access the methods in express
var app = express();


//seting the view engine
app.set('view engine', 'ejs');

//using the inbuilt middileware 
//it can take req, res, next 
//next specifies the next middile ware to run if there are multiple middileware
app.use('/assets',express.static('assets'));


//responding to get method (static request)
app.get('/', (req, res) => {
    res.send('this is the home page');//not specifying the content type since express auto detect it.

})

//dynamic request handling
/*app.get('/profile/:name', (req, res) => {
    res.send('You requestd the profile with id of' + req.params.name)
}) */

//sending template or html pages directly to the port
app.get('/index1', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//injecting dynamic content to the setup
//using ejs templateing engine install it an use it >> npm install ejs -save
//view engine -aka- template engine

//insering dummy data to the object with more property
var data = {
    age: 22, job: 'student', hobbies: ['reading', 'eating', 'bathing', 'cooking']
};

//rendering the profile page with ejs
app.get('/profile/:name', (req, res) => {
    res.render('profile', { person: req.params.name, data: data });//passing an object as second parameter and then we can pass its properties 
})

//some more home page 
app.get('/home',(req,res)=>{
    res.render('home');
})

//index page in the views section
app.get('/index',(req,res)=>{
    res.render('index');
})

//contact page 
app.get('/contact',(req,res)=>{
    res.render('contact');
})




//make app to listen to a port
app.listen(3000);
console.log('listening to port : 3000')