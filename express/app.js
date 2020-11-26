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

//body parser 
var bodyParser=require('body-parser')


//app to access the methods in express
var app = express();


//seting the view engine
app.set('view engine', 'ejs');


//url encoding parser //middleware which parse the post data in the post handler in the contact section
var urlencodedParser =bodyParser.urlencoded({extended:false})


//using the inbuilt middileware 
//it can take req, res, next 
//next specifies the next middile ware to run if there are multiple middileware
app.use('/assets',express.static('assets'));//you can add a function in here and the function can have 3 parameters mentioned above 
//next methond 
//express.static() - inbuild express middleware for rendering static page to the web

//including middleware for the home static - nothing to do at all the above code should work fine for both of the situations.



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

//contact page //handling query strings
app.get('/contact',(req,res)=>{
 
    res.render('contact',{qs:req.query});
})
//we want to handle the post request in the query string and use the body-parser middleware it is inbuilt middleware available in express
//this handle the bodyparsing of the post data 
//post handler for the contact page 
//the parsed data can be retrived from the req.body property of the request object 
app.post('/contact',urlencodedParser,(req,res)=>{
    console.log(req.body);
})



//make app to listen to a port
app.listen(3000);
console.log('listening to port : 3000')